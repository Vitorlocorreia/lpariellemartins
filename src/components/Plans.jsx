import React from 'react';
import { Check, Calendar, Star } from 'lucide-react';

export default function Plans({ onOpenModal }) {
  const plans = [
    {
      name: 'Treino Presencial',
      popular: true,
      tag: 'Mais Procurado',
      desc: 'Atendimento exclusivo no seu domicílio ou condomínio.',
      features: [
        'Avaliação física e postural completa',
        'Treinos 100% acompanhados presencialmente',
        'Equipamentos levados pela treinadora',
        'Adaptação para dor ou limitação física',
        'Horários flexíveis'
      ],
      cta: 'Agendar Avaliação Gratuita'
    },
    {
      name: 'Treino em Dupla',
      popular: false,
      tag: 'Especial Casais',
      desc: 'Treine acompanhado do seu cônjuge ou amigo(a).',
      features: [
        'Acompanhamento presencial compartilhado',
        'Planos individuais adaptados para cada um',
        'Incentivo e motivação mútua',
        'Excelente custo-benefício',
        'Avaliação de mobilidade para os dois'
      ],
      cta: 'Consultar Disponibilidade'
    },
    {
      name: 'Consultoria Online',
      popular: false,
      tag: 'Para Qualquer Cidade',
      desc: 'Sessões ao vivo por videochamada com acompanhamento em tempo real.',
      features: [
        'Treinos ao vivo com instrução vocal e visual',
        'Correção imediata de postura',
        'Plano de exercícios semanal',
        'Suporte via WhatsApp diário',
        'Relatório mensal de evolução'
      ],
      cta: 'Saber Mais Sobre o Online'
    }
  ];

  return (
    <section id="planos" className="py-20 bg-[#F5F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7F62] bg-[#E5EBE3] px-3.5 py-1.5 rounded-full inline-block">
            Formatos de Atendimento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#334131]">
            Escolha o modelo ideal para a sua rotina
          </h2>
          <p className="text-[#5C665A] text-base">
            Todos os planos incluem avaliação física personalizada sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div 
              key={i}
              className={`relative bg-[#FAF7F2] rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                p.popular 
                  ? 'border-[#6B7F62] shadow-xl ring-2 ring-[#6B7F62]/20 scale-105' 
                  : 'border-[#E5EBE3] shadow-xs hover:border-[#6B7F62]/50'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B7F62] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Star size={12} fill="white" />
                  <span>{p.tag}</span>
                </div>
              )}

              <div>
                {!p.popular && (
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#6B7F62] bg-[#E5EBE3] px-3 py-0.5 rounded-full mb-3">
                    {p.tag}
                  </span>
                )}
                
                <h3 className="font-serif text-2xl font-medium text-[#334131] mb-2">
                  {p.name}
                </h3>
                <p className="text-[#5C665A] text-sm mb-6 min-h-[40px]">
                  {p.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {p.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-[#334131]">
                      <div className="p-1 rounded-full bg-[#E5EBE3] text-[#6B7F62] shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-medium transition-all ${
                  p.popular
                    ? 'bg-[#6B7F62] hover:bg-[#5B7355] text-white shadow-md'
                    : 'border border-[#6B7F62] text-[#334131] hover:bg-[#6B7F62] hover:text-white'
                }`}
              >
                <Calendar size={18} />
                <span>{p.cta}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
