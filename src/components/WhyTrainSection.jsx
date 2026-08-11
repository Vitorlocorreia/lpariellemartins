import React, { useEffect, useRef } from 'react';
import { Heart, User, TrendingUp, Atom, Users, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyTrainSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.pillar-item',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: section } }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const items = [
    { icon: Heart, label: 'Atendimento Humanizado', color: '#E05C2A' },
    { icon: User, label: 'Exercícios Individualizados', color: '#C8951C' },
    { icon: TrendingUp, label: 'Evolução Constante', color: '#2A9D5C' },
    { icon: Atom, label: 'Método Baseado em Ciência', color: '#8B5CF6' },
    { icon: Users, label: 'Acompanhamento Próximo', color: '#D97706' },
    { icon: Globe, label: 'Online e Presencial', color: '#0891B2' },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#FAF6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-[#C8951C] uppercase mb-2 block">Diferenciais de Atendimento</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2000] font-medium">Por que treinar comigo?</h2>
          <div className="h-1 w-12 bg-[#C8951C] mx-auto mt-3 rounded-full" />
        </div>
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#E8D4A0] shadow-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="pillar-item group flex flex-col items-center text-center space-y-3 p-3 rounded-2xl cursor-default transition-all duration-300 hover:bg-[#FFF8E6] hover:scale-105 hover:shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}14` }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 0 6px ${item.color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
                >
                  <IconComp size={20} style={{ color: item.color }} />
                </div>
                <span className="text-xs font-bold text-[#3B2000] leading-tight group-hover:text-[#C8951C] transition-colors">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
