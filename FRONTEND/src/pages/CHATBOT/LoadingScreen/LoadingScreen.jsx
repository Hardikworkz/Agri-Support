// LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading">
      <div className="loader"></div>
      <p>Reviewing your code...</p>
    </div>
  );
};

export default LoadingScreen;
