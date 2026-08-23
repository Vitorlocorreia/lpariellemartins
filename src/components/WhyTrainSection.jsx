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
      gsap.fromTo('.para-quem-anim',
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, stagger: 0.12, duration: 0.8,
          ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: section, start: 'top 80%' }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="para-quem" className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={400} color="#E0E7FF" opacity={0.4} className="top-10 -left-20 z-0" />
      <DottedPattern rows={5} cols={8} color="#2563EB" opacity={0.1} className="absolute top-12 right-12 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header: 3. PARA QUEM É */}
        <div className="text-center max-w-3xl mx-auto mb-12 para-quem-anim">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            Para Quem É
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2B5E] font-medium leading-tight">
            Um acompanhamento pensado para diferentes momentos do envelhecimento
          </h2>
          <div className="h-0.5 w-10 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dual Paths — Estilo Editorial Limpo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto para-quem-anim">
          
          {/* Momento 01: Prevenção */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-blue-100/90 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all duration-300">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-md mb-4 inline-block">
                01 • Prevenção & Longevidade
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1B2B5E] mb-3">
                Para quem deseja se preparar para envelhecer bem
              </h3>
              <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                Construção de reserva funcional e fortalecimento muscular antes que o corpo comece a apresentar limitações ou perda de vitalidade.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B2B5E]">
              <span>Foco: Autonomia prolongada & proteção</span>
              <ArrowUpRight size={16} className="text-[#2563EB]" />
            </div>
          </div>

          {/* Momento 02: Recuperação */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-blue-100/90 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all duration-300">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-md mb-4 inline-block">
                02 • Autonomia & Confiança
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1B2B5E] mb-3">
                Para quem já percebe mudanças no corpo
              </h3>
              <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                Para quem já nota alterações na força, equilíbrio, mobilidade ou busca resgatar a segurança para realizar as tarefas do cotidiano.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B2B5E]">
              <span>Foco: Equilíbrio, mobilidade & firmeza</span>
              <ArrowUpRight size={16} className="text-[#2563EB]" />
            </div>
          </div>

        </div>

        {/* Fechamento */}
        <div className="text-center mt-10 para-quem-anim">
          <p className="inline-block bg-white px-6 py-3 rounded-full border border-blue-100/80 shadow-xs text-sm text-[#1B2B5E]">
            Cada pessoa parte de um ponto diferente. <strong className="text-[#2563EB] font-bold">E é a partir dele que o trabalho começa.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
