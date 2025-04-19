import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatTemplate from '../templates/ChatTemplate';
import OrbitalCharacterModels from '../molecules/OrbitalCharacterModels';
import SEO from '../atoms/SEO';
import { useChat } from '../../context/ChatContext';
import './ChatPage.css';

// Model data for background orbital models
const characterModels = [
  { src: '/models/ni.glb', character: '你' },
  { src: '/models/hao.glb', character: '好' },
  { src: '/models/wen.glb', character: '问' },
  { src: '/models/zhong.glb', character: '中' }
];

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
    <div className="chat-page">
      <SEO 
        title="Chat with Your Teacher" 
        description="Have a conversation with your Chinese teacher and improve your language skills." 
      />
      {/* Background Orbital Character Models */}
      <OrbitalCharacterModels models={characterModels} centerX={50} centerY={50} />
      
      {/* Main Chat Component */}
      <div className="chat-container">
        <ChatTemplate onBackClick={handleBackClick} />
      </div>
    </div>
  );
};

export default ChatPage; 