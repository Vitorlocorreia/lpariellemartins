import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Eye, Sparkles, MessageCircle, X, Clock, Bell } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import { useTilt } from '../hooks/useTilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TiltCard({ className, children }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8, 1.02);
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}

export default function ProductsShowcase({ onOpenModal, whatsappUrl }) {
  const sectionRef = useRef(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.ebook-anim-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const waitlistMessage = encodeURIComponent("Olá Arielle! Gostaria de entrar na lista de espera para ser avisado(a) no lançamento do e-book 'Manual Prático de Treinamento para Idosos'.");
  const ebookWhatsappUrl = whatsappUrl 
    ? whatsappUrl.replace(/text=.*$/, `text=${waitlistMessage}`)
    : `https://wa.me/5581986833360?text=${waitlistMessage}`;

  return (
    <section ref={sectionRef} id="produtos" className="py-10 sm:py-14 lg:py-20 bg-[#F4F7FC] relative overflow-hidden">
      {/* Background Subtle Accents */}
      <BackgroundCircle size={320} color="#E0E7FF" opacity={0.35} className="-top-10 left-1/4 z-0" />
      <DottedPattern rows={5} cols={6} color="#2563EB" opacity={0.08} className="absolute top-6 right-6 z-0 hidden sm:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Card Container */}
        <div className="ebook-anim-card bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-blue-100 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left: Compact Book Cover */}
            <div className="w-full lg:w-5/12 flex flex-col items-center">
              <TiltCard className="relative w-44 sm:w-56 lg:w-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group cursor-pointer bg-slate-50">
                <div onClick={() => setIsZoomOpen(true)} className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/images/ebook-cover.webp"
                    alt="Capa do E-book Manual Prático de Treinamento para Idosos por Arielle Alexandre Martins"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1B2B5E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white font-bold text-[11px] uppercase tracking-wider backdrop-blur-[2px]">
                    <Eye size={16} />
                    <span>Ampliar</span>
                  </div>

                  {/* Clean Blue Ribbon */}
                  <div className="absolute top-2.5 right-2.5 bg-[#2563EB] text-white text-[9.5px] font-bold uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider flex items-center gap-1">
                    <Sparkles size={10} />
                    <span>Em Breve</span>
                  </div>
                </div>
              </TiltCard>
              <span className="text-[11px] text-[#4B5E8A] mt-2 flex items-center gap-1">
                <BookOpen size={13} className="text-[#2563EB]" />
                Arielle Alexandre Martins
              </span>
            </div>

            {/* Right: Direct & Compact Copy */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center text-left">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 bg-blue-50 text-[#2563EB] border border-blue-200/60 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  <Clock size={12} />
                  <span>Lançamento em Breve</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#1B2B5E]/70 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  E-book Digital
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1B2B5E] font-bold leading-snug mb-2">
                Manual Prático de Treinamento para Idosos
              </h2>

              <p className="text-[#2C3E6B] text-xs sm:text-sm leading-relaxed mb-4">
                Desenvolva o raciocínio clínico na prescrição de exercícios para a terceira idade. Um guia prático com evidências, avaliações de movimento e adaptações para fortalecer a autonomia funcional.
              </p>

              {/* 3 Quick Benefit Bullets */}
              <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100 text-xs text-[#1B2B5E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#2563EB] shrink-0" />
                  <span>Raciocínio clínico para prescrição segura e individualizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#2563EB] shrink-0" />
                  <span>Avaliação prática de força, marcha e risco de quedas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#2563EB] shrink-0" />
                  <span>Estudos de caso reais e tomadas de decisão clínica</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={ebookWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 h-12 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-6 rounded-xl text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Bell size={16} />
                  <span>Entrar na Lista de Espera</span>
                  <ArrowRight size={15} />
                </a>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto h-12 flex items-center justify-center gap-1.5 border border-[#2563EB]/30 text-[#1B2B5E] hover:bg-blue-50 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-white active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle size={15} className="text-[#2563EB]" />
                  <span>Tirar Dúvidas</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal Zoom */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-sm w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-11 right-0 p-2 text-white/90 hover:text-white bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
            <img
              src="/images/ebook-cover.webp"
              alt="Capa do E-book"
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
