import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export default function StickyMobileBar({ onOpenModal, whatsappUrl }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-blue-100 p-3 flex items-center gap-2.5 shadow-2xl animate-fade-in">
      <button
        onClick={onOpenModal}
        className="flex-1 h-12 flex items-center justify-center gap-2 bg-[#2563EB] active:bg-[#1D4ED8] text-white rounded-xl font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
      >
        <Calendar size={17} />
        <span>Agendar Avaliação</span>
      </button>

      <a
        href={whatsappUrl || "https://wa.me/5511999999999"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-[#22C55E] active:bg-[#16A34A] text-white rounded-xl shadow-md shadow-green-500/25 active:scale-95 transition-all shrink-0 cursor-pointer"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
