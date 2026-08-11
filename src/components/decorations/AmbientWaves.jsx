import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AmbientWaves({ className = "", color = "#84A07D" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const waves = container.querySelectorAll('.ambient-wave');
    const ctx = gsap.context(() => {
      waves.forEach((wave, i) => {
        gsap.to(wave, {
          y: -15 + i * 8,
          scaleX: 1.15,
          opacity: 0.5,
          duration: 3.5 + i * 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ambient-wave"
          d="M 0 50 C 300 20, 600 80, 1200 40 L 1200 100 L 0 100 Z"
          fill={color}
          fillOpacity="0.08"
        />
        <path
          className="ambient-wave"
          d="M 0 60 C 400 80, 800 20, 1200 70 L 1200 100 L 0 100 Z"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          className="ambient-wave"
          d="M 0 70 C 200 90, 700 40, 1200 60 L 1200 100 L 0 100 Z"
          fill={color}
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
}


