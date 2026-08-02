import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenMobileMenu, whatsappUrl }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500">
      <header
        className={`pointer-events-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? 'w-full top-0 py-3.5 px-6 sm:px-10 lg:px-12 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-md rounded-none'
            : 'w-[94%] max-w-7xl mt-3 sm:mt-4 py-3 px-5 sm:px-6 bg-white/80 backdrop-blur-md border border-blue-100/80 shadow-sm rounded-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#1B2B5E]/70">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#2563EB] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2563EB] rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-all shadow-md shadow-blue-500/20 group"
            >
              <MessageCircle size={15} className="text-white" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-[#1B2B5E] hover:text-[#2563EB] focus:outline-none transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>
    </div>
  );
}
