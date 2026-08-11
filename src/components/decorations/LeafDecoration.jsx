import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LeafDecoration({ 
  variant = 1,
  className = "",
  size = 120,
  rotate = 0,
  opacity = 0.6,
  color = "#6B7F62",
  animateFloat = true,
  style = {}
}) {
  const leafRef = useRef(null);

  const leafImages = {
    1: '/images/leaves/leaf-1.png',
    2: '/images/leaves/leaf-2.png',
    3: '/images/leaves/leaf-3.png',
    4: '/images/leaves/leaf-4.png',
    5: '/images/leaves/leaf-5.png',
  };

  const imgUrl = leafImages[variant] || leafImages[1];

  useEffect(() => {
    if (!animateFloat || !leafRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(leafRef.current, {
        y: "+=8",
        rotation: `${rotate + 4}`,
        duration: 3.5 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, leafRef);

    return () => ctx.revert();
  }, [animateFloat, rotate]);

  return (
    <div
      ref={leafRef}
      className={`pointer-events-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotate}deg)`,
        opacity,
        WebkitMaskImage: `url("${imgUrl}")`,
        maskImage: `url("${imgUrl}")`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        backgroundColor: color,
        ...style
      }}
    />
  );
}


