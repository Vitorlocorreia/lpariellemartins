import React, { useEffect, useRef } from 'react';
import { MessageSquare, ClipboardCheck, Sliders, HeartPulse } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Cards entrance
      gsap.fromTo('.step-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, stagger: 0.15, duration: 0.8,
          ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: section }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      icon: <MessageSquare size={20} className="text-[#2563EB]" />,
      title: 'Conversa Inicial',
      desc: 'Entendemos seus objetivos, histórico e necessidades de forma individualizada.'
    },
    {
      num: '02',
      icon: <ClipboardCheck size={20} className="text-[#2563EB]" />,
      title: 'Avaliação Completa',
      desc: 'Analisamos seu perfil de movimento e saúde para estruturar o melhor plano.'
    },
    {
      num: '03',
      icon: <Sliders size={20} className="text-[#2563EB]" />,
      title: 'Plano Personalizado',
      desc: 'Você recebe um planejamento 100% adaptado à sua rotina e metas.'
    },
    {
      num: '04',
      icon: <HeartPulse size={20} className="text-[#2563EB]" />,
      title: 'Acompanhamento',
      desc: 'Suporte próximo e contínuo para garantir segurança, evolução e resultados reais.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={350} color="#E0E7FF" opacity={0.4} className="-top-12 right-12 z-0" />
      <DottedPattern rows={6} cols={6} color="#2563EB" opacity={0.12} className="absolute bottom-8 left-8 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
            Metodologia Prática
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2B5E] font-medium">
            Como funciona
          </h2>
          <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        {/* Steps grid + animated connector */}
        <div className="relative">


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="step-card bg-white rounded-3xl p-6 border border-blue-100/80 shadow-md relative flex flex-col hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Número com círculo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold text-sm flex items-center justify-center shadow-md shadow-blue-500/30">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#1B2B5E] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#334155] text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
