import React from 'react';
import { ShieldCheck, HeartPulse, Award, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#6B7F62]" />,
      title: 'Treinos 100% Seguros',
      desc: 'Exercícios planejados respeitando patologias, próteses e limitações articulares.'
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#6B7F62]" />,
      title: 'Foco na Autonomia',
      desc: 'Fortalecimento para tarefas do cotidiano: subir escadas, sentar e se levantar com firmeza.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#6B7F62]" />,
      title: 'Atendimento Humanizado',
      desc: 'Paciência, acolhimento e acompanhamento presencial em ritmo adequado.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-[#F5F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Cards */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#E5EBE3] text-[#5B7355] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <Sparkles size={14} />
              <span>Conheça a Treinadora</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#334131] leading-tight">
              Mais do que exercícios, um compromisso com a sua longevidade.
            </h2>
            
            <p className="text-[#5C665A] leading-relaxed text-base">
              Sou <strong className="text-[#334131]">Arielle Martins</strong>, Personal Trainer especializada no atendimento a pessoas idosas. Meu objetivo é proporcionar saúde, prevenindo quedas e recuperando a vitalidade para que você aproveite os melhores momentos ao lado de quem ama.
            </p>

            <div className="pt-4 space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5EBE3] shadow-xs hover:border-[#6B7F62]/40 transition-colors">
                  <div className="p-2.5 rounded-xl bg-[#E5EBE3]/60 shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#334131] text-base">{item.title}</h3>
                    <p className="text-sm text-[#5C665A] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Profile Showcase */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="/images/hero-desktop.png" 
                alt="Arielle Martins Personal Trainer" 
                className="w-full h-[460px] sm:h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A2C]/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-sm font-semibold tracking-wider uppercase text-[#C4D2C1]">Arielle Martins</span>
                <p className="font-serif text-xl sm:text-2xl mt-1 max-w-md">
                  "O movimento é o remédio mais eficiente e seguro para a melhor idade."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


