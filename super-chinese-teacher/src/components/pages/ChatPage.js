import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatTemplate from '../templates/ChatTemplate';
import SEO from '../atoms/SEO';
import { useChat } from '../../context/ChatContext';

const ChatPage = () => {
  const navigate = useNavigate();
  const { startConversation, conversationStarted } = useChat();

  useEffect(() => {
    // Start the conversation if it hasn't started yet
    if (!conversationStarted) {
      startConversation();
    }
  }, [startConversation, conversationStarted]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <SEO 
        title="Chat with Your Teacher" 
        description="Have a conversation with your Chinese teacher and improve your language skills." 
      />
      <ChatTemplate onBackClick={handleBackClick} />
    </>
  );
};

export default ChatPage; 