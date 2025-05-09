import React, { createContext, useState, useContext, useEffect, useRef, useCallback } from 'react';
import { userAvatar, teacherAvatar } from '../assets/teacherAvatar';
import { initOpenAI, sendMessageToGPT, createChineseTeacherSystemMessage } from '../services/openaiService';
import { speak, getVoices, initSpeechRecognition, startRecording, stopRecording } from '../services/speechService';
import { getOpenAIApiKey } from '../services/envService';
import useLocalStorage from '../hooks/useLocalStorage';

// Create context
const ChatContext = createContext();

// Custom hook to use chat context
export const useChat = () => useContext(ChatContext);

// Provider component
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [apiKey, setApiKey] = useLocalStorage('openai_api_key', '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  
  const recognitionRef = useRef(null);
  const conversationHistoryRef = useRef([]);
  const envApiKey = getOpenAIApiKey();

  // Initialize voices
  useEffect(() => {
    const loadVoices = async () => {
      const availableVoices = await getVoices();
      setVoices(availableVoices);
      
      // Try to find a Chinese voice
      const chineseVoice = availableVoices.find(voice => voice.lang.includes('zh'));
      if (chineseVoice) {
        setSelectedVoice(chineseVoice);
      } else {
        setSelectedVoice(availableVoices[0]);
      }
    };
    
    loadVoices();
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    recognitionRef.current = initSpeechRecognition();
  }, []);

  // Speak a message using the selected voice
  const speakMessage = useCallback(async (text) => {
    if (!text) return;
    
    setIsSpeaking(true);
    try {
      await speak(text, 1, 1, selectedVoice);
    } catch (error) {
      // Silently handle errors
    } finally {
      setIsSpeaking(false);
    }
  }, [selectedVoice]);

  // Start a new conversation with the Chinese teacher
  const startConversation = useCallback(async () => {
    if (!isInitialized) {
      setError('OpenAI API is not initialized. Please check your API key in .env.local file.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Initialize conversation history with system message
      conversationHistoryRef.current = [createChineseTeacherSystemMessage()];
      
      // Get initial response from GPT
      const response = await sendMessageToGPT(conversationHistoryRef.current);
      
      // Add teacher's initial message to the conversation
      const initialMessage = {
        id: 1,
        content: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false,
        status: 'read'
      };
      
      setMessages([initialMessage]);
      
      // Add the assistant's response to the conversation history
      conversationHistoryRef.current.push({
        role: "assistant",
        content: response
      });
      
      // Mark conversation as started
      setConversationStarted(true);
      
      // Speak the response
      speakMessage(response);
    } catch (error) {
      setError('Failed to start conversation. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [isInitialized, speakMessage]);

  // Initialize OpenAI with API key from environment variables or stored key
  useEffect(() => {
    const initAPI = async () => {
      // Try to use environment API key first
      const keyToUse = envApiKey || apiKey;
      
      if (keyToUse) {
        try {
          initOpenAI(keyToUse);
          setIsInitialized(true);
          setError(null);
          
          // No longer auto-starting conversation here
        } catch (error) {
          setError('Failed to initialize OpenAI API. Please check your API key in .env.local file.');
          setIsInitialized(false);
        }
      } else {
        setIsInitialized(false);
        setError('OpenAI API key is missing. Please add REACT_APP_OPENAI_API_KEY to your .env.local file.');
      }
    };
    
    initAPI();
  }, [apiKey, envApiKey]);

  // Add a message to the UI
  const addMessage = (content, isUser) => {
    const newMessage = {
      id: messages.length + 1,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser,
      status: 'sent'
    };
    
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  // Update message status
  const updateMessageStatus = (id, status) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, status } : msg
      )
    );
  };

  // Start recording user's voice
  const startVoiceRecording = () => {
    if (isRecording || !recognitionRef.current) return;
    
    // Set recording state before starting the recording
    setIsRecording(true);
    
    startRecording(
      recognitionRef.current,
      (fullTranscript, confidence) => {
        // Process the full transcript when manually stopped
        if (fullTranscript && fullTranscript.trim()) {
          // Check if the message isn't empty or just repetitive content
          const processedText = fullTranscript.trim();
          if (processedText.length > 0) {
            sendMessage(processedText);
          }
        }
      },
      (error) => {
        // Handle recording error
        setIsRecording(false);
        if (error !== 'no-speech') { // Don't show error for no speech detected
          setError(`Recording error: ${error}`);
        }
      }
    );
  };

  // Stop recording user's voice
  const stopVoiceRecording = () => {
    if (!recognitionRef.current) return;
    
    // Prevent double stopping
    if (!isRecording) return;
    
    stopRecording(recognitionRef.current);
    setIsRecording(false);
  };

  // Process a text response from OpenAI
  const processOpenAIResponse = async (userMessageId) => {
    try {
      // Mark the user message as delivered
      updateMessageStatus(userMessageId, 'delivered');
      
      // Get response from GPT
      const response = await sendMessageToGPT(conversationHistoryRef.current);
      
      // Mark the user message as read
      updateMessageStatus(userMessageId, 'read');
      
      // Add the assistant's message to UI
      addMessage(response, false);
      
      // Add the assistant's response to the conversation history
      conversationHistoryRef.current.push({
        role: "assistant",
        content: response
      });
      
      // Speak the response
      speakMessage(response);
      
    } catch (error) {
      setError('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Send a message to the chat
  const sendMessage = async (content) => {
    if (!content?.trim()) return;
    if (!isInitialized) {
      setError('OpenAI API is not initialized. Please check your API key in .env.local file.');
      return;
    }
    
    // Check if this message would be a duplicate of the last message
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.isUser && lastMessage.content === content) {
      // Skip duplicate message without logging
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    // Add user message to UI
    const userMessage = addMessage(content, true);
    
    // Add the user's message to the conversation history
    conversationHistoryRef.current.push({
      role: "user",
      content
    });
    
    // Process the response from OpenAI
    processOpenAIResponse(userMessage.id);
  };

  // Set the OpenAI API key
  const setOpenAIKey = (key) => {
    setApiKey(key);
  };

  // Change the selected voice
  const changeVoice = (voice) => {
    setSelectedVoice(voice);
  };

  // Reset the conversation
  const resetConversation = () => {
    setMessages([]);
    conversationHistoryRef.current = [];
    startConversation();
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        isLoading,
        error,
        userAvatar,
        teacherAvatar,
        isInitialized,
        setOpenAIKey,
        isSpeaking,
        isRecording,
        voices,
        selectedVoice,
        changeVoice,
        startVoiceRecording,
        stopVoiceRecording,
        hasApiKey: !!envApiKey || !!apiKey,
        resetConversation,
        startConversation,
        conversationStarted
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext; 