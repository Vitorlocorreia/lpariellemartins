import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ whatsappUrl }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio') || document.querySelector('section');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mostra o botão quando o Hero SAI da tela
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-110 items-center justify-center group transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <MessageCircle size={28} className="fill-white text-[#25D366]" />

      {/* Tooltip */}
      <span className="absolute right-16 bg-[#334131] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        Falar no WhatsApp
      </span>
    </a>
  );
}
