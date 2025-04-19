import React, { useEffect, useRef } from 'react';
import './ModelViewer.css';

const ModelViewer = ({ 
  src, 
  alt = "3D model", 
  width = "300px", 
  height = "300px", 
  autoRotate = true,
  cameraControls = true,
  className = "" 
}) => {
  const modelRef = useRef(null);

  useEffect(() => {
    // Load the model-viewer web component script if it's not already loaded
    if (!window.customElements.get('model-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      script.type = 'module';
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className={`model-viewer-container ${className}`} style={{ width, height }}>
      <model-viewer
        ref={modelRef}
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        shadow-intensity="1"
        exposure="0.5"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="model-viewer-loading">
          <div className="spinner"></div>
          <div>Loading 3D model...</div>
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewer; 