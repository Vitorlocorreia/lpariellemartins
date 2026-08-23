import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import BackgroundCircle from './decorations/BackgroundCircle';
import DottedPattern from './decorations/DottedPattern';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyTrainSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.proposta-card-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.8,
          ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: section, start: 'top 80%' }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proposta" className="py-20 lg:py-28 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={400} color="#E0E7FF" opacity={0.45} className="top-10 -left-20 z-0" />
      <BackgroundCircle size={350} color="#DBEAFE" opacity={0.35} className="bottom-10 -right-20 z-0" />
      <DottedPattern rows={5} cols={8} color="#2563EB" opacity={0.1} className="absolute top-12 right-12 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16">

        {/* ── 2. SUA PROPOSTA ── */}
        <div className="max-w-4xl mx-auto text-center proposta-card-anim">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-3">
            Visão & Propósito
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight mb-5">
            Treinar hoje é cuidar de como você quer viver amanhã.
          </h2>

          <p className="text-[#4B5E8A] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Com o passar dos anos, preservar força, equilíbrio e capacidade de movimento torna-se essencial para continuar realizando com segurança aquilo que faz parte da sua rotina.
          </p>

          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-blue-100 shadow-sm max-w-3xl mx-auto text-left relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2563EB]" />
            <p className="text-base sm:text-lg text-[#1B2B5E] leading-relaxed">
              "Meu trabalho é transformar o exercício em uma ferramenta para preparar o corpo não apenas para o treino, <strong className="text-[#2563EB] font-bold">mas para a vida.</strong>"
            </p>
          </div>
        </div>

        {/* ── 3. PARA QUEM É ── */}
        <div className="proposta-card-anim pt-4">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
              Para Quem É
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1B2B5E] font-medium">
              Um acompanhamento pensado para diferentes momentos do envelhecimento
            </h3>
            <div className="h-0.5 w-10 bg-[#2563EB] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Preparar para envelhecer bem */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-blue-100/90 shadow-sm flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-md mb-5 inline-block">
                  Momento 01
                </span>
                
                <h4 className="font-serif text-2xl font-semibold text-[#1B2B5E] mb-3 leading-snug">
                  Para quem deseja se preparar para envelhecer bem
                </h4>
                
                <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                  Para adultos que desejam construir reserva funcional de força, manter a independência e proteger as articulações antes que os primeiros declínios apareçam.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B2B5E]">
                <span>Foco: Reserva de força & prevenção</span>
                <ArrowUpRight size={16} className="text-[#2563EB]" />
              </div>
            </div>

            {/* Card 2: Mudanças no corpo */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-blue-100/90 shadow-sm flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-md mb-5 inline-block">
                  Momento 02
                </span>
                
                <h4 className="font-serif text-2xl font-semibold text-[#1B2B5E] mb-3 leading-snug">
                  Para quem já percebe mudanças no corpo
                </h4>
                
                <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                  Para quem já nota perda de força, insegurança no equilíbrio, redução de mobilidade ou receio de quedas nas atividades do dia a dia.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B2B5E]">
                <span>Foco: Autonomia, firmeza & segurança</span>
                <ArrowUpRight size={16} className="text-[#2563EB]" />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="inline-block bg-white px-6 py-3 rounded-full border border-blue-100/80 shadow-xs text-sm text-[#1B2B5E]">
              Cada pessoa parte de um ponto diferente. <strong className="text-[#2563EB] font-bold">E é a partir dele que o trabalho começa.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
