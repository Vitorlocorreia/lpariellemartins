import React, { useEffect, useRef } from 'react';
import { MessageSquare, ClipboardCheck, Sliders, HeartPulse } from 'lucide-react';
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
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: section } }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: '01', icon: <MessageSquare size={20} className="text-[#EAB308]" />, title: 'Conversa Inicial', desc: 'Entendemos seus objetivos, histórico e necessidades de forma individualizada.' },
    { num: '02', icon: <ClipboardCheck size={20} className="text-[#EAB308]" />, title: 'Avaliação Completa', desc: 'Analisamos seu perfil de movimento e saúde para estruturar o melhor plano.' },
    { num: '03', icon: <Sliders size={20} className="text-[#EAB308]" />, title: 'Plano Personalizado', desc: 'Você recebe um planejamento 100% adaptado à sua rotina e metas.' },
    { num: '04', icon: <HeartPulse size={20} className="text-[#EAB308]" />, title: 'Acompanhamento', desc: 'Suporte próximo e contínuo para garantir segurança, evolução e resultados reais.' },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-[#FAF6E4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.15em] text-[#EAB308] uppercase mb-2 block">Metodologia Prática</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1400] font-medium">Como funciona</h2>
          <div className="h-1 w-12 bg-[#EAB308] mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card bg-white rounded-3xl p-6 border border-[#FDE68A] shadow-md flex flex-col hover:shadow-xl hover:border-[#EAB308]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EAB308] text-[#1C1400] font-bold text-sm flex items-center justify-center shadow-md shadow-yellow-500/30">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#FEFCE8] flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1C1400] mb-2">{step.title}</h3>
              <p className="text-[#44330A] text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


