import React, { useEffect, useRef } from 'react';
import { UserCheck, Compass, Dumbbell, TrendingUp, ArrowRight } from 'lucide-react';
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
      gsap.fromTo('.step-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, stagger: 0.12, duration: 0.7,
          ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: section, start: 'top 80%' }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      icon: <UserCheck size={22} className="text-[#2563EB]" />,
      title: 'Conhecer',
      desc: 'Compreensão do seu histórico, rotina, capacidades e necessidades específicas.'
    },
    {
      num: '02',
      icon: <Compass size={22} className="text-[#2563EB]" />,
      title: 'Planejar',
      desc: 'Construção de uma estratégia sob medida integrando força, mobilidade e equilíbrio.'
    },
    {
      num: '03',
      icon: <Dumbbell size={22} className="text-[#2563EB]" />,
      title: 'Treinar',
      desc: 'Exercícios guiados com foco na função e na segurança de cada movimento.'
    },
    {
      num: '04',
      icon: <TrendingUp size={22} className="text-[#2563EB]" />,
      title: 'Acompanhar',
      desc: 'Evolução contínua para que os ganhos do treino se traduzam em vida real.'
    }
  ];

  return (
    <section ref={sectionRef} id="metodo" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <BackgroundCircle size={350} color="#E0E7FF" opacity={0.4} className="-top-12 right-12 z-0" />
      <DottedPattern rows={6} cols={6} color="#2563EB" opacity={0.12} className="absolute bottom-8 left-8 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
            Meu Método
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium mb-4">
            Exercício com estratégia e propósito.
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#2563EB] mb-4">
            Não acredito em treinos prontos.
          </p>
          <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed">
            O acompanhamento é construído a partir das necessidades de cada pessoa, integrando força, equilíbrio, coordenação, mobilidade e funcionalidade para que os resultados do treino sejam percebidos também na vida cotidiana.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-6 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="step-card bg-[#F4F7FC] rounded-3xl p-6 sm:p-7 border border-blue-100/80 shadow-sm relative flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-bold text-sm flex items-center justify-center shadow-md shadow-blue-500/20">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#1B2B5E] mb-2 flex items-center gap-2">
                  {step.title}
                  {idx < steps.length - 1 && (
                    <ArrowRight size={14} className="text-blue-300 hidden lg:inline" />
                  )}
                </h3>
                <p className="text-[#4B5E8A] text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
