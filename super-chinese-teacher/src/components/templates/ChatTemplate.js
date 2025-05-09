import React from 'react';
import { Link } from 'react-router-dom';
import ChatHeader from '../molecules/ChatHeader';
import MessageList from '../organisms/MessageList';
import ChatFooter from '../molecules/ChatFooter';
import ApiKeyForm from '../molecules/ApiKeyForm';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import { useChat } from '../../context/ChatContext';
import './ChatTemplate.css';

const ChatTemplate = ({ onBackClick, teacherName = "Super Chinese Tutor" }) => {
  const { 
    messages, 
    userAvatar, 
    teacherAvatar, 
    isInitialized, 
    isLoading, 
    error, 
    isSpeaking,
    hasApiKey
  } = useChat();

  return (
    <div className="chat-template">
      <ChatHeader 
        name={teacherName} 
        status="online"
        avatarSrc={teacherAvatar}
        onBackClick={onBackClick}
      />
      
      <div className="chat-content">
        {!isInitialized && (
          <div className="chat-api-key-container glass-card">
            {!hasApiKey ? (
              <div className="env-instructions">
                <Typography variant="subtitle1" color="primary" className="heading-md text-gradient">
                  Missing OpenAI API Key
                </Typography>
                <Typography variant="body2" color="dark">
                  To use this application, you need to add your OpenAI API key to the environment.
                </Typography>
                <div className="code-block">
                  <code>
                    # Create a .env.local file in the project root and add:<br />
                    REACT_APP_OPENAI_API_KEY=your_openai_api_key
                  </code>
                </div>
                <Typography variant="body2" color="dark">
                  After adding the API key, restart the application.
                </Typography>
              </div>
            ) : (
              <ApiKeyForm />
            )}
          </div>
        )}
        
        {error && (
          <div className="chat-error">
            <Typography variant="body2" color="primary">
              {error}
            </Typography>
          </div>
        )}
        
        {isLoading && (
          <div className="chat-loading">
            <Typography variant="body2" color="secondary">
              <span className="loading-dots">Loading</span>
            </Typography>
          </div>
        )}
        
        {isSpeaking && (
          <div className="chat-speaking-indicator">
            <Typography variant="caption" color="secondary">
              <span className="speaking-wave">Speaking</span>
            </Typography>
          </div>
        )}
        
        <div className="chat-actions">
          <Link to="/models" className="models-link">
            <Button variant="secondary" size="small" className="models-button">
              View 3D Character Models
            </Button>
          </Link>
        </div>
        
        <MessageList 
          messages={messages}
          userAvatar={userAvatar}
          teacherAvatar={teacherAvatar}
        />
      </div>
      
      <ChatFooter />
    </div>
  );
};

export default ChatTemplate; 