import React from 'react';
import { Activity, Shield, Smile, Heart, CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      icon: <Shield className="w-7 h-7 text-[#6B7F62]" />,
      title: 'Prevenção de Quedas',
      description: 'Treinos focados em equilíbrio, propriocepção e força de membros inferiores para dar máxima estabilidade nos passos.'
    },
    {
      icon: <Activity className="w-7 h-7 text-[#6B7F62]" />,
      title: 'Ganho de Força & Massa Óssea',
      description: 'Combate direto à sarcopenia e osteoporose através de cargas adaptadas e estímulos seguros para as articulações.'
    },
    {
      icon: <Heart className="w-7 h-7 text-[#6B7F62]" />,
      title: 'Alívio de Dores Articulares',
      description: 'Exercícios de mobilidade e alongamento que reduzem incômodos nas costas, joelhos e quadril.'
    },
    {
      icon: <Smile className="w-7 h-7 text-[#6B7F62]" />,
      title: 'Independência e Disposição',
      description: 'Volte a realizar suas atividades favoritas sem depender da ajuda de terceiros para o básico.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7F62] bg-[#E5EBE3] px-3.5 py-1.5 rounded-full inline-block">
            Por que treinar na melhor idade?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#334131]">
            Benefícios comprovados para sua saúde e bem-estar
          </h2>
          <p className="text-[#5C665A] text-base leading-relaxed">
            Cada treino é estruturado cientificamente para gerar resultados visíveis nas primeiras semanas de prática.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((b, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EBE3] hover:border-[#6B7F62] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F5F8F4] group-hover:bg-[#6B7F62] text-[#6B7F62] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  {b.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#334131] mb-3">
                  {b.title}
                </h3>
                <p className="text-[#5C665A] text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#6B7F62]">
                <CheckCircle2 size={16} />
                <span>Treino Adaptado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


