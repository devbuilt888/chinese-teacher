import React, { useEffect, useRef, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Set up the load event listener for the model-viewer
    const modelViewer = modelRef.current;
    if (modelViewer) {
      const handleLoaded = () => {
        setIsLoading(false);
      };
      
      modelViewer.addEventListener('load', handleLoaded);
      
      // Check if already loaded
      if (modelViewer.loaded) {
        setIsLoading(false);
      }
      
      return () => {
        modelViewer.removeEventListener('load', handleLoaded);
      };
    }
  }, [modelRef]);

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
        {isLoading && (
          <div className="model-viewer-loading">
            <div className="spinner"></div>
          </div>
        )}
      </model-viewer>
    </div>
  );
};

export default ModelViewer; 