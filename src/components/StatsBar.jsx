import React from 'react';
import { Users, Award, Star, Globe } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-[#2563EB]" />,
      val: '+300',
      label: 'Alunos atendidos'
    },
    {
      icon: <Award className="w-5 h-5 text-[#2563EB]" />,
      val: '5 Anos',
      label: 'De experiência'
    },
    {
      icon: <Star className="w-5 h-5 text-[#2563EB]" />,
      val: 'Avaliação 5.0',
      label: 'Pelos alunos'
    },
    {
      icon: <Globe className="w-5 h-5 text-[#2563EB]" />,
      val: 'Atendimento',
      label: 'Online e presencial'
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 mb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-4 sm:py-5 sm:px-8 border border-blue-100 shadow-xl shadow-blue-900/5 grid grid-cols-2 md:grid-cols-4 gap-6 items-center relative z-10">
          {stats.map((st, i) => (
            <div key={i} className="flex items-center gap-3 justify-start sm:justify-center border-r last:border-r-0 border-gray-100 pr-2">
              <div className="p-2.5 rounded-full bg-blue-50/80 shrink-0">
                {st.icon}
              </div>
              <div className="flex flex-col text-xs sm:text-sm">
                <span className="font-bold text-[#1B2B5E] leading-tight">{st.val}</span>
                <span className="text-[#64748B] text-[11px] sm:text-xs mt-0.5">{st.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
