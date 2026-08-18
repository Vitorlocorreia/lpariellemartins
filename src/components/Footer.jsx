import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { Phone, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contato"
      className="bg-[#1C1400] text-[#F5E9C0]/80 text-xs relative overflow-hidden border-t border-[#3D2A00]/60 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      {/* Linha decorativa amarela no topo */}
      <div className="w-full h-1 bg-gradient-to-r from-[#EAB308] via-[#FDE68A] to-[#EAB308]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#3D2A00]/50 items-start">

          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="brightness-0 invert opacity-90">
              <Logo />
            </div>
            <p className="text-xs text-[#F5E9C0]/70 max-w-xs leading-relaxed">
              Treinamento personalizado e mentoria especializada em longevidade, força e saúde integral.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-[#EAB308] uppercase tracking-wider text-[11px] mb-3">Navegação</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#F5E9C0]/70">
              <a href="#inicio" className="hover:text-[#EAB308] transition-colors">Início</a>
              <a href="#produtos" className="hover:text-[#EAB308] transition-colors">Produtos</a>
              <a href="#sobre" className="hover:text-[#EAB308] transition-colors">Sobre</a>
              <a href="#depoimentos" className="hover:text-[#EAB308] transition-colors">Depoimentos</a>
              <a href="#programas" className="hover:text-[#EAB308] transition-colors">Mentoria</a>
              <a href="#contato" className="hover:text-[#EAB308] transition-colors">Contato</a>
              <a href="#programas" className="hover:text-[#EAB308] transition-colors">Consultoria</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-bold text-[#EAB308] uppercase tracking-wider text-[11px] mb-3">Fale comigo</h4>
            <div className="space-y-2.5 text-[#F5E9C0]/80">
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#EAB308]" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram size={15} className="text-[#EAB308]" />
                <span>@ariellemartins.pt</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#EAB308]" />
                <span>contato@ariellemartins.com.br</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F5E9C0]/50">
          <p>© {new Date().getFullYear()} Arielle Martins Personal Trainer. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#EAB308] transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-[#EAB308] transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
