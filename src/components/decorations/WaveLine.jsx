import React from 'react';

export default function WaveLine({ 
  variant = 1, 
  color = "#84A07D", 
  strokeWidth = 1.5, 
  opacity = 0.45, 
  className = "",
  style = {} 
}) {
  const customStyle = { opacity, ...style };

  if (variant === 2) {
    // S-curve connector line between sections
    return (
      <svg 
        width="300" 
        height="120" 
        viewBox="0 0 300 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
        style={customStyle}
      >
        <path 
          d="M 10 10 Q 120 110, 290 30" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
        />
      </svg>
    );
  }

  if (variant === 3) {
    // Flourish underline with heart accent (matching Hero title flourish)
    return (
      <svg 
        width="160" 
        height="24" 
        viewBox="0 0 160 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
        style={customStyle}
      >
        <path 
          d="M 5 14 Q 60 20, 120 12 T 148 16" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
        />
        <path 
          d="M 142 8 C 140 4, 144 2, 146 5 C 148 2, 152 4, 150 8 C 148 11, 146 13, 146 13 C 146 13, 144 11, 142 8 Z" 
          fill={color} 
        />
      </svg>
    );
  }

  // Variant 1: Soft horizontal organic wave line across section transitions
  return (
    <svg 
      width="600" 
      height="80" 
      viewBox="0 0 600 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={customStyle}
    >
      <path 
        d="M 0 40 C 150 75, 300 10, 450 65 T 600 35" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
    </svg>
  );
}
