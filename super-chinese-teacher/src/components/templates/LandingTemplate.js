import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import FloatingModelsContainer from '../organisms/FloatingModelsContainer';
import './LandingTemplate.css';

const LandingTemplate = ({ onStartClick }) => {
  return (
    <div className="landing-template">
      <FloatingModelsContainer />
      
      <div className="landing-content glass-card">
        <div className="landing-header">
          <div className="chinese-icon">汉语</div>
          <Typography variant="h1" color="white" align="center" className="heading-xl landing-title">
            Super Chinese Tutor
          </Typography>
          <Typography variant="subtitle1" color="dark" align="center" className="landing-subtitle">
            Master Mandarin with our AI-powered language tutor
          </Typography>
        </div>
        
        <Button 
          onClick={onStartClick} 
          variant="primary" 
          size="large"
          className="btn btn-primary landing-cta"
        >
          开始学习 - Start Learning
        </Button>
      </div>
    </div>
  );
};

export default LandingTemplate; 