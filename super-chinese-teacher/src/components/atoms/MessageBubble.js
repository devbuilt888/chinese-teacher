import React, { useState } from 'react';
import './MessageBubble.css';

// Helper function to extract Chinese text and translations
const extractTranslation = (text) => {
  // If there's no text or it's from the user, just return the original text
  if (!text) return { original: '', translation: '' };
  
  // Extract Chinese characters and Pinyin
  const originalParts = [];
  const translationParts = [];
  
  // Split text by lines
  const lines = text.split('\n');
  
  lines.forEach(line => {
    // Check if this line contains Chinese characters
    const hasChinese = /[\u4E00-\u9FFF]/.test(line);
    if (!hasChinese && line.trim().length > 0) {
      // This is likely an English translation line
      translationParts.push(line);
    } else {
      // This likely contains Chinese characters
      originalParts.push(line);
    }
  });
  
  // Join all parts
  const original = originalParts.join('\n');
  const translation = translationParts.join('\n');
  
  return { original, translation };
};

const MessageBubble = ({ 
  children, 
  isUser = false, 
  timestamp,
  status = 'sent', 
  className = '' 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { original, translation } = isUser ? { original: children, translation: '' } : extractTranslation(children);
  const hasTranslation = !isUser && translation.trim().length > 0;

  return (
    <div 
      className={`message-bubble ${isUser ? 'message-user' : 'message-other'} ${className}`}
      onMouseEnter={() => hasTranslation && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="message-content">
        {original || children}
        
        {showTooltip && hasTranslation && (
          <div className="message-tooltip">
            {translation}
          </div>
        )}
      </div>
      <div className="message-footer">
        <span className="message-time">{timestamp}</span>
        {isUser && (
          <span className={`message-status message-status-${status}`}>
            {status === 'sent' && '✓'}
            {status === 'delivered' && '✓✓'}
            {status === 'read' && '✓✓'}
          </span>
        )}
        {hasTranslation && (
          <span className="message-translation-indicator">
            {showTooltip ? '🇺🇸' : '🇨🇳'}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble; 