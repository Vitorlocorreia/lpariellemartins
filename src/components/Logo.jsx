import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <a
      href="#"
      className={`flex items-center group transition-all duration-300 ${className}`}
      aria-label="Arielle Martins"
    >
      <img
        src="/images/logo-emblem.png"
        alt="Logo M Arielle Martins"
        className="h-8 sm:h-9 w-auto object-contain grayscale opacity-65 group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-300"
        draggable={false}
      />
    </a>
  );
}
