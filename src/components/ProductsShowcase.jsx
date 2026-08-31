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
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const waitlistMessage = encodeURIComponent("Olá Arielle! Gostaria de entrar na lista de espera para ser avisado(a) em primeira mão no lançamento do e-book 'Manual Prático de Treinamento para Idosos'.");
  const ebookWhatsappUrl = whatsappUrl 
    ? whatsappUrl.replace(/text=.*$/, `text=${waitlistMessage}`)
    : `https://wa.me/5581986833360?text=${waitlistMessage}`;

  const highlights = [
    {
      title: "Raciocínio Clínico na Prescrição",
      desc: "Compreensão aprofundada do envelhecimento, sarcopenia e declínio funcional para prescrever com embasamento."
    },
    {
      title: "Avaliação Prática & Observação",
      desc: "Como analisar marcha, sentar e levantar, apoio e mobilidade antes mesmo de iniciar os testes formais."
    },
    {
      title: "Prevenção de Quedas & Força",
      desc: "Progressões seguras de exercícios focados no fortalecimento e na preservação da autonomia do idoso."
    },
    {
      title: "Pensando como Especialista",
      desc: "Estudos de caso reais com tomadas de decisão clínica para situações do cotidiano."
    }
  ];

  return (
    <section ref={sectionRef} id="produtos" className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      {/* Ambient background accents */}
      <BackgroundCircle size={380} color="#E0E7FF" opacity={0.4} className="-top-12 left-1/4 z-0" />
      <DottedPattern rows={6} cols={8} color="#2563EB" opacity={0.12} className="absolute top-8 right-8 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Clock size={14} className="text-amber-600 animate-pulse" />
            <span>Lançamento em Breve</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight">
            Manual Prático de Treinamento para Idosos
          </h2>
          <div className="h-0.5 w-12 bg-[#2563EB] mt-3 rounded-full" />
        </div>

        {/* E-book Spotlight Showcase Card */}
        <div className="ebook-anim-card bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-blue-100/90 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Premium 3D Book Cover Stand */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <TiltCard className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group cursor-pointer bg-slate-50">
                <div onClick={() => setIsZoomOpen(true)} className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/images/ebook-cover.webp"
                    alt="Capa do E-book Manual Prático de Treinamento para Idosos por Arielle Alexandre Martins"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px]">
                    <Eye size={18} />
                    <span>Ampliar Capa</span>
                  </div>

                  {/* Ribbon Em Breve sobreposto na capa */}
                  <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1">
                    <Sparkles size={12} />
                    <span>Em Breve</span>
                  </div>
                </div>
              </TiltCard>

              <span className="text-[11px] text-[#4B5E8A] mt-3.5 flex items-center gap-1.5 font-medium">
                <BookOpen size={14} className="text-[#2563EB]" />
                Autora: Arielle Alexandre Martins
              </span>
            </div>

            {/* Right Column: E-book Information & Waitlist Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full">
                    E-book Oficial
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/60 flex items-center gap-1">
                    <Clock size={12} />
                    <span>Em Breve</span>
                  </span>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    Lista de Espera Aberta
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1B2B5E] font-bold leading-snug mb-3">
                  Manual prático para desenvolver o raciocínio clínico na prescrição de exercícios para pessoas idosas
                </h3>

                <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                  Desenvolvido por quem atua diariamente na prática clínica e funcional do envelhecimento, este manual reunirá a fundamentação e a visão estratégica necessárias para avaliar, adaptar e prescrever treinos com total segurança. <strong className="text-[#1B2B5E]">Entre na lista de espera para ser avisado(a) em primeira mão no dia do lançamento.</strong>
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-1 bg-blue-50 text-[#2563EB] rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1B2B5E] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#4B5E8A] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={ebookWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 h-[52px] flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 rounded-xl text-sm shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Bell size={18} />
                  <span>Entrar na Lista de Espera (WhatsApp)</span>
                  <ArrowRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto h-[52px] flex items-center justify-center gap-2 border border-[#2563EB]/40 text-[#1B2B5E] hover:bg-[#F0F4FF] px-6 rounded-xl text-sm font-semibold transition-all bg-white active:scale-[0.98] cursor-pointer"
                >
                  <span>Tirar Dúvidas</span>
                  <MessageCircle size={16} className="text-[#2563EB]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal de Zoom da Capa */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/90 hover:text-white bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X size={22} />
            </button>
            <img
              src="/images/ebook-cover.webp"
              alt="Capa do E-book em Alta Resolução"
              className="max-h-[82vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
