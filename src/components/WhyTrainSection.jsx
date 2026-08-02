import React, { useEffect, useRef } from 'react';
import { Heart, User, TrendingUp, Atom, Users, Globe } from 'lucide-react';
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
      gsap.fromTo(".pillar-item", 
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: section,
            start: "top 85%"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const items = [
    { icon: <Heart size={20} className="text-[#2563EB]" />, label: 'Atendimento Humanizado' },
    { icon: <User size={20} className="text-[#2563EB]" />, label: 'Exercícios Individualizados' },
    { icon: <TrendingUp size={20} className="text-[#2563EB]" />, label: 'Evolução Constante' },
    { icon: <Atom size={20} className="text-[#2563EB]" />, label: 'Método Baseado em Ciência' },
    { icon: <Users size={20} className="text-[#2563EB]" />, label: 'Acompanhamento Próximo' },
    { icon: <Globe size={20} className="text-[#2563EB]" />, label: 'Atendimento Online e Presencial' },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={350} color="#E0E7FF" opacity={0.4} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      <DottedPattern rows={4} cols={10} color="#2563EB" opacity={0.12} className="absolute -bottom-4 right-12 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
            Diferenciais de Atendimento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2B5E] font-medium">
            Por que treinar comigo?
          </h2>
          <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-blue-100/80 shadow-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {items.map((item, idx) => (
            <div key={idx} className="pillar-item flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-[#1B2B5E] leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
