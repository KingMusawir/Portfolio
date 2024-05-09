// index.jsx or index.js
import React, { useState } from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';

const Index = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);

    // Toggle body class
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
  };

  return (
    <React.StrictMode>
      <App isLightMode={isLightMode} toggleMode={toggleMode} />
    </React.StrictMode>
  );
};

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(<Index />);
