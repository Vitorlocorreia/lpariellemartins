import React from 'react';

export default function BackgroundCircle({ 
  size = 320, 
  color = "#F5EFE6", 
  blur = "blur-xl", 
  opacity = 0.6, 
  className = "",
  style = {} 
}) {
  return (
    <div 
      className={`absolute rounded-full pointer-events-none -z-10 ${blur} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity,
        ...style
      }}
    />
  );
}


