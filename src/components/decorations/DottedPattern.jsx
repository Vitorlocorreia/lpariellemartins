import React from 'react';

export default function DottedPattern({ 
  rows = 6, 
  cols = 6, 
  dotSize = 3, 
  gap = 14, 
  color = "#84A07D", 
  opacity = 0.35, 
  className = "",
  style = {}
}) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + dotSize}
          cy={r * gap + dotSize}
          r={dotSize / 2}
          fill={color}
        />
      );
    }
  }

  const width = (cols - 1) * gap + dotSize * 2;
  const height = (rows - 1) * gap + dotSize * 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={{ opacity, ...style }}
    >
      {dots}
    </svg>
  );
}
