import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <a
      href="#"
      className={`flex items-center group transition-opacity hover:opacity-85 ${className}`}
    >
      <img
        src="/images/logo-arielle.png"
        alt="Arielle Martins Personal Trainer"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    </a>
  );
}


