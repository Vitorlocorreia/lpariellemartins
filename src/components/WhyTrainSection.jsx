import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
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
      gsap.fromTo('.proposta-animate',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.12, duration: 0.7,
          ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: section, start: 'top 80%' }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proposta" className="py-20 lg:py-28 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={400} color="#E0E7FF" opacity={0.5} className="top-1/3 -left-20 z-0" />
      <BackgroundCircle size={320} color="#DBEAFE" opacity={0.4} className="bottom-10 -right-16 z-0" />
      <DottedPattern rows={5} cols={8} color="#2563EB" opacity={0.1} className="absolute top-12 right-10 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16">

        {/* ── 2. SUA PROPOSTA ── */}
        <div className="max-w-4xl mx-auto text-center proposta-animate">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <Activity size={14} className="text-[#2563EB]" />
            Visão & Propósito
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight mb-6">
            Treinar hoje é cuidar de como você quer viver amanhã.
          </h2>

          <p className="text-[#4B5E8A] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Com o passar dos anos, preservar força, equilíbrio e capacidade de movimento torna-se essencial para continuar realizando com segurança aquilo que faz parte da sua rotina.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm max-w-3xl mx-auto text-left relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2563EB]" />
            <p className="text-base sm:text-lg font-medium text-[#1B2B5E] leading-relaxed">
              "Meu trabalho é transformar o exercício em uma ferramenta para preparar o corpo não apenas para o treino, <strong className="text-[#2563EB] font-bold">mas para a vida.</strong>"
            </p>
          </div>
        </div>

        {/* ── 3. PARA QUEM É ── */}
        <div className="proposta-animate">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
              Público & Atendimento
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1B2B5E] font-medium">
              Um acompanhamento pensado para diferentes momentos do envelhecimento
            </h3>
            <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-md flex flex-col justify-between hover:border-blue-200 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#1B2B5E] mb-3">
                  Preparar para envelhecer bem
                </h4>
                <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                  Para adultos que desejam construir reserva de força, manter autonomia, proteger articulações e garantir vitalidade para os próximos anos.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] pt-4 border-t border-blue-50">
                <CheckCircle2 size={16} />
                <span>Prevenção & Longevidade Ativa</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-md flex flex-col justify-between hover:border-blue-200 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#1B2B5E] mb-3">
                  Recuperar segurança e autonomia
                </h4>
                <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                  Para quem já percebe mudanças na força, equilíbrio, mobilidade ou segurança para realizar as atividades do cotidiano.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] pt-4 border-t border-blue-50">
                <CheckCircle2 size={16} />
                <span>Reabilitação Funcional & Confiança</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-[#1B2B5E] mt-8">
            Cada pessoa parte de um ponto diferente. <span className="text-[#2563EB]">E é a partir dele que o trabalho começa.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
