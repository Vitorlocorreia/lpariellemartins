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
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between animate-slide-in-right border-l border-[#E5EBE3]">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E5EBE3]">
            <Logo />
            <button 
              onClick={onClose}
              className="p-2 text-[#334131] hover:bg-[#E5EBE3] rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="text-base font-medium text-[#334131] hover:text-[#6B7F62] border-b border-gray-100 pb-2.5"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-[#E5EBE3]">
          <button 
            onClick={() => { onClose(); onOpenModal(); }}
            className="w-full flex items-center justify-center gap-2 bg-[#6B7F62] text-white font-medium py-3 px-5 rounded-full shadow-sm text-sm"
          >
            <Calendar size={16} />
            <span>Agende uma conversa</span>
          </button>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border border-[#6B7F62] text-[#334131] font-medium py-3 px-5 rounded-full text-sm text-center"
          >
            <MessageCircle size={16} className="text-[#6B7F62]" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
