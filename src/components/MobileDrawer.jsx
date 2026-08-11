import React from 'react';
import { X, MessageCircle, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function MobileDrawer({ isOpen, onClose, onOpenModal, whatsappUrl }) {
  if (!isOpen) return null;

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Mentoria', href: '#programas' },
    { name: 'Consultoria', href: '#programas' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FDFBF0] shadow-2xl p-6 flex flex-col justify-between animate-slide-in-right border-l border-[#FDE68A]">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#FDE68A]">
            <Logo />
            <button onClick={onClose} className="p-2 text-[#1C1400] hover:bg-[#FEF9C3] rounded-full transition-colors">
              <X size={22} />
            </button>
          </div>
          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="text-sm font-semibold text-[#1C1400] hover:text-[#EAB308] hover:bg-[#FEFCE8] px-3 py-3 rounded-xl transition-all border-b border-[#FEF9C3] last:border-b-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 pt-6 border-t border-[#FDE68A]">
          <button
            onClick={() => { onClose(); onOpenModal(); }}
            className="w-full flex items-center justify-center gap-2 bg-[#EAB308] hover:bg-[#CA8A04] text-[#1C1400] font-bold font-bold py-3.5 px-5 rounded-xl shadow-md shadow-yellow-500/25 text-sm transition-all active:scale-95"
          >
            <Calendar size={16} />
            <span>Agendar Avaliação</span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border-2 border-[#22C55E] text-[#15803D] hover:bg-green-50 font-bold py-3.5 px-5 rounded-xl text-sm text-center transition-all active:scale-95"
          >
            <MessageCircle size={16} className="text-[#22C55E]" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}


