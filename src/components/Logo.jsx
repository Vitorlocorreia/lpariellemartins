import React from 'react';

export default function Logo({ className = "", textColor = "text-[#1B2B5E]" }) {
  return (
    <a href="#" className={`flex items-center gap-3.5 group transition-opacity hover:opacity-90 ${className}`}>
      {/* Official Geometric 'M' Brand Icon */}
      <div className="shrink-0 flex items-center justify-center">
        <svg 
          width="42" 
          height="42" 
          viewBox="0 0 42 42" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-10 h-10 ${textColor}`}
        >
          {/* Main Geometric Outer M stroke */}
          <path 
            d="M 5 35 L 5 11 L 21 27 L 37 11 L 37 35" 
            stroke="currentColor" 
            strokeWidth="3.2" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Intersecting Geometric V stroke */}
          <path 
            d="M 12 20.5 L 21 29.5 L 30 20.5" 
            stroke="currentColor" 
            strokeWidth="3.2" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Official Typography Stack: ARIELLE / MARTINS / PERSONAL TRAINER */}
      <div className="flex flex-col justify-center select-none">
        <span className={`font-sans text-[15px] font-[#1B2B5E] font-medium leading-[0.95] tracking-[0.08em] uppercase ${textColor}`}>
          ARIELLE
        </span>
        <span className={`font-sans text-[15px] font-[#1B2B5E] font-extrabold leading-[0.95] tracking-[0.08em] uppercase ${textColor} mt-0.5`}>
          MARTINS
        </span>
        <span className={`text-[7.5px] font-bold tracking-[0.24em] opacity-80 uppercase ${textColor} mt-1`}>
          PERSONAL TRAINER
        </span>
      </div>
    </a>
  );
}
