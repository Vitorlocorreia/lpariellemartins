import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import BackgroundCircle from './decorations/BackgroundCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection({ onOpenModal, whatsappUrl }) {
  const sectionRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.08, duration: 0.6,
          ease: "power2.out", clearProps: "all",
          scrollTrigger: { trigger: section, start: "top 80%" }
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: 'Como funciona a Consulta Inicial?',
      a: 'A Consulta Inicial é o momento dedicado a compreender seu histórico de saúde, sua rotina, suas necessidades e seus objetivos. É a partir dessa conversa detalhada que definimos o melhor caminho para o seu acompanhamento.'
    },
    {
      q: 'Os treinos são seguros para quem tem dores, artrose ou limitações de movimento?',
      a: 'Sim, totalmente. Não trabalho com treinos prontos ou genéricos. Cada movimento é planejado respeitando suas capacidades e limites articulares, fortalecendo a musculatura sem sobrecarga ou risco.'
    },
    {
      q: 'Qual a diferença entre o acompanhamento Presencial e o On-line?',
      a: 'No presencial, o atendimento é próximo e direto durante as sessões. No on-line, você recebe um planejamento personalizado desenvolvido para sua rotina, com orientação e acompanhamento contínuo da sua evolução à distância.'
    },
    {
      q: 'Para quem é indicado o acompanhamento?',
      a: 'Para adultos que desejam se preparar para envelhecer bem com força e autonomia, e também para quem já percebe mudanças na força, equilíbrio, mobilidade ou segurança para realizar as atividades do cotidiano.'
    },
    {
      q: 'Como faço para agendar a minha Consulta Inicial?',
      a: 'Basta clicar no botão "Agendar consulta inicial" aqui no site ou entrar em contato direto pelo WhatsApp. Alinharemos o melhor dia e horário para nossa conversa.'
    }
  ];

  const toggleFaq = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section ref={sectionRef} id="faq" className="py-20 lg:py-28 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={380} color="#E0E7FF" opacity={0.35} className="top-1/4 -right-20 z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5E8A] mt-3 max-w-lg mx-auto leading-relaxed">
            Tire suas principais dúvidas sobre como funciona o meu acompanhamento especializado para adultos e idosos.
          </p>
          <div className="h-0.5 w-10 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item-anim bg-white rounded-2xl border border-blue-100/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-blue-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-semibold text-[#1B2B5E] text-base sm:text-lg hover:text-[#2563EB] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#2563EB] text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5E8A] leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────
            ULTRA-PREMIUM WHATSAPP DIRECT ACCESS CARD
            Design de Concierge Humanizado & Sofisticado
            ───────────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20 relative max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl border border-slate-700/60 overflow-hidden">
            
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left Column: Presence & Copy */}
              <div className="space-y-4 text-center md:text-left">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span>Disponível para tirar dúvidas</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-tight">
                  Ainda com alguma dúvida? Converse comigo.
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
                  Estou à disposição no WhatsApp para entender seus objetivos, sua rotina e te orientar sobre o melhor formato de treino para você.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-emerald-400" />
                    <span>Resposta rápida</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Sem compromisso</span>
                  </div>
                </div>

              </div>

              {/* Right Column: CTA Button */}
              <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-3">
                <a
                  href={whatsappUrl || "https://wa.me/5511999999999"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-green-500/25 transition-all duration-300 hover:shadow-green-500/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <MessageCircle size={20} className="fill-white" />
                  <span>Conversar no WhatsApp</span>
                  <ArrowRight size={18} />
                </a>
                
                <span className="text-[11px] text-slate-400">
                  Atendimento direto e personalizado
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
