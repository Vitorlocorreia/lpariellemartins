import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyTrainSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.manifesto-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 75%' }
        }
      );

      gsap.fromTo('.manifesto-right',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 75%' }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="proposta" 
      className="py-20 lg:py-32 bg-white relative overflow-hidden border-y border-blue-50"
    >
      {/* Subtle architectural background watermarks */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[180px] font-serif font-bold text-[#1B2B5E] leading-none whitespace-nowrap hidden lg:block">
        LONGEVIDADE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Asymmetrical Magazine Split Grid — ZERO Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Big Philosophy & Manifesto Statement */}
          <div className="lg:col-span-6 manifesto-left space-y-6 lg:pr-6">
            
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#2563EB]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#2563EB] uppercase">
                Sua Proposta
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1B2B5E] font-normal leading-[1.18] tracking-tight">
              Treinar hoje é cuidar de como você quer viver amanhã.
            </h2>

            <p className="text-[#4B5E8A] text-base sm:text-lg leading-relaxed font-normal">
              Com o passar dos anos, preservar força, equilíbrio e capacidade de movimento torna-se essencial para continuar realizando com segurança aquilo que faz parte da sua rotina.
            </p>

            {/* Impact Quote Accent */}
            <div className="pt-2 pl-5 border-l-2 border-[#2563EB]">
              <p className="font-serif italic text-lg sm:text-xl text-[#1B2B5E] leading-snug">
                "Meu trabalho é transformar o exercício em uma ferramenta para preparar o corpo não apenas para o treino, <span className="text-[#2563EB] not-italic font-sans font-bold">mas para a vida.</span>"
              </p>
            </div>

          </div>

          {/* Right Column: "Para Quem É" — Seamless Dual-Path Editorial Flow */}
          <div className="lg:col-span-6 manifesto-right lg:pl-6">
            
            <div className="space-y-8">
              
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
                  Para Quem É
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1B2B5E] font-medium leading-snug">
                  Um acompanhamento pensado para diferentes momentos do envelhecimento.
                </h3>
              </div>

              {/* Seamless Typography Split — No box cards */}
              <div className="space-y-6 pt-2">
                
                {/* Momento 01 */}
                <div className="group pl-4 border-l-2 border-slate-200 hover:border-[#2563EB] transition-colors duration-300">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#2563EB] uppercase block mb-1">
                    01 • Prevenção & Vitalidade
                  </span>
                  <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                    Para quem deseja se preparar para envelhecer bem, construindo reserva de força e protegendo articulações antes que os declínios apareçam.
                  </p>
                </div>

                {/* Momento 02 */}
                <div className="group pl-4 border-l-2 border-slate-200 hover:border-[#2563EB] transition-colors duration-300">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#2563EB] uppercase block mb-1">
                    02 • Recuperação & Confiança
                  </span>
                  <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                    Para quem já percebe mudanças na força, no equilíbrio, na mobilidade ou na segurança para realizar as atividades do dia a dia.
                  </p>
                </div>

              </div>

              {/* Bottom Grounding Note */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <p className="text-xs sm:text-sm font-semibold text-[#1B2B5E]">
                  Cada pessoa parte de um ponto diferente. <span className="text-[#2563EB]">E é a partir dele que o trabalho começa.</span>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
