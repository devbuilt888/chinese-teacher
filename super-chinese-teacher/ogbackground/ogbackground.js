import React, { useMemo } from 'react';
import './FloatingCharacters.css';

/**
 * FloatingCharacters - A reusable component that creates floating animated elements
 * 
 * @param {Object} props - Component properties
 * @param {Array<string>} [props.characters=['你', '好', '中', '文']] - Characters to display
 * @param {number} [props.count=20] - Number of floating elements to generate
 * @param {Object} [props.primaryColor={ color: 'rgba(245, 198, 66, 0.6)', shadow: 'rgba(195, 39, 43, 0.7)' }] - Primary color and shadow
 * @param {Object} [props.secondaryColor={ color: 'rgba(195, 39, 43, 0.6)', shadow: 'rgba(245, 198, 66, 0.7)' }] - Secondary color and shadow
 * @param {string} [props.background='linear-gradient(to bottom, #090d19, #1a1e2e)'] - Container background
 * @param {string} [props.className=''] - Additional CSS class for the container
 * @param {Object} [props.style={}] - Additional inline styles for the container
 * @returns {JSX.Element} The FloatingCharacters component
 */
const FloatingCharacters = ({
  characters = ['你', '好', '中', '文'],
  count = 20,
  primaryColor = { color: 'rgba(245, 198, 66, 0.6)', shadow: 'rgba(195, 39, 43, 0.7)' },
  secondaryColor = { color: 'rgba(195, 39, 43, 0.6)', shadow: 'rgba(245, 198, 66, 0.7)' },
  background = 'linear-gradient(to bottom, #090d19, #1a1e2e)',
  className = '',
  style = {},
}) => {
  // Helper functions
  const getRandomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  });
  
  const getRandomSize = () => 1 + Math.random() * 2;
  const getRandomDuration = () => 20 + Math.random() * 40;
  const getRandomDelay = () => Math.random() * 10;
  
  // Generate floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const position = getRandomPosition();
      const size = getRandomSize();
      const duration = getRandomDuration();
      const delay = getRandomDelay();
      const character = characters[index % characters.length];
      
      return {
        id: index,
        position,
        size,
        duration,
        delay,
        character,
        isPrimary: index % 2 === 0
      };
    });
  }, [characters, count]);
  
  return (
    <div 
      className={`floating-characters-container ${className}`}
      style={{ 
        background, 
        ...style 
      }}
    >
      {floatingElements.map(element => (
        <div
          key={element.id}
          className="floating-character"
          style={{
            left: `${element.position.x}%`,
            top: `${element.position.y}%`,
            fontSize: `${element.size}rem`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
            color: element.isPrimary ? primaryColor.color : secondaryColor.color,
            textShadow: `0 0 10px ${element.isPrimary ? primaryColor.shadow : secondaryColor.shadow}`
          }}
        >
          {element.character}
        </div>
      ))}
    </div>
  );
};

export default FloatingCharacters; 