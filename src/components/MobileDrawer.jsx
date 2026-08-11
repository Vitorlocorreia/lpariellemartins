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
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FDF9F2] shadow-2xl p-6 flex flex-col justify-between animate-slide-in-right border-l border-[#E8D4A0]">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E8D4A0]">
            <Logo />
            <button onClick={onClose} className="p-2 text-[#3B2000] hover:bg-[#F5E6C0] rounded-full transition-colors">
              <X size={22} />
            </button>
          </div>
          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="text-sm font-semibold text-[#3B2000] hover:text-[#C8951C] hover:bg-[#FFF8E6] px-3 py-3 rounded-xl transition-all border-b border-[#F5E6C0] last:border-b-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 pt-6 border-t border-[#E8D4A0]">
          <button
            onClick={() => { onClose(); onOpenModal(); }}
            className="w-full flex items-center justify-center gap-2 bg-[#C8951C] hover:bg-[#A87A12] text-white font-bold py-3.5 px-5 rounded-xl shadow-md shadow-amber-500/25 text-sm transition-all active:scale-95"
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
