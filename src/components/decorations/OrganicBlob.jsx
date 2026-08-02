import React from 'react';

export default function OrganicBlob({ 
  variant = 1, 
  color = "#F2EFE8", 
  opacity = 0.7, 
  className = "",
  style = {} 
}) {
  const customStyle = { opacity, ...style };

  if (variant === 2) {
    // Teardrop organic wave blob
    return (
      <svg 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
        style={customStyle}
      >
        <path 
          d="M 200 40 C 310 30, 370 120, 360 230 C 350 340, 240 380, 140 350 C 40 320, 30 200, 70 110 C 110 20, 90 50, 200 40 Z" 
          fill={color} 
        />
      </svg>
    );
  }

  // Variant 1: Soft organic rounded blob
  return (
    <svg 
      width="450" 
      height="450" 
      viewBox="0 0 450 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={customStyle}
    >
      <path 
        d="M 225 30 C 330 30, 420 110, 410 220 C 400 330, 310 420, 190 410 C 70 400, 30 290, 40 180 C 50 70, 120 30, 225 30 Z" 
        fill={color} 
      />
    </svg>
  );
}
