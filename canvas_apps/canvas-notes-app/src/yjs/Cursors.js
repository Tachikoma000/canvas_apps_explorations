import React, { useEffect, useState } from 'react';
import useAwareness from './useAwareness';
import './Cursors.css';

// Generate a random color for the user's cursor
const generateRandomColor = () => {
  const colors = [
    '#FF6B6B', '#48DBFB', '#1DD1A1', '#FECA57', '#FF9FF3',
    '#54A0FF', '#5F27CD', '#786FA6', '#00D2D3', '#01A3A4'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Generate a random user identifier
const generateUserId = () => {
  return `User-${Math.floor(1000 + Math.random() * 9000)}`;
};

/**
 * Cursors component displays remote user cursors on the canvas
 */
const Cursors = () => {
  const [myInfo] = useState({
    color: generateRandomColor(),
    user: generateUserId()
  });
  
  const { setLocalState, getRemoteStates } = useAwareness();
  const remoteCursors = getRemoteStates();

  useEffect(() => {
    // Initialize our local state with user info
    setLocalState({
      ...myInfo,
      x: 0,
      y: 0
    });
    
    const handleMouseMove = (e) => {
      // Get the canvas container to calculate relative positions
      const container = document.querySelector('.canvas-flow-wrapper');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      
      // Calculate cursor position relative to the canvas container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setLocalState({
        ...myInfo,
        x,
        y,
      });
    };

    // Add movement listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [myInfo, setLocalState]);

  return (
    <div className="cursors-container">
      {remoteCursors.map(([id, data]) => (
        <div 
          key={id} 
          className="cursor"
          style={{
            left: data?.x || 0,
            top: data?.y || 0,
            color: data?.color || '#000',
          }}
        >
          <div className="cursor-pointer" style={{ borderColor: data?.color || '#000' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3l7 7M10 10l-7 7" />
              <path d="M10 10l11 11" />
              <path d="M21 21v-11h-11" />
            </svg>
          </div>
          <div className="cursor-label" style={{ backgroundColor: data?.color || '#000' }}>
            {data?.user || 'Unknown User'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cursors;
