import React from 'react';
import { Users, MousePointerClick, ShoppingCart, CheckCircle2, ArrowDown, AlertCircle } from 'lucide-react';

export default function FunnelVisualizer({
  visitors = 0,
  ctaClicks = 0,
  checkouts = 0,
  sales = 0,
  abandonedCheckouts = 0
}) {
  const ctaRate = visitors > 0 ? ((ctaClicks / visitors) * 100).toFixed(1) : 0;
  const checkoutRate = ctaClicks > 0 ? ((checkouts / ctaClicks) * 100).toFixed(1) : 0;
  const saleRate = checkouts > 0 ? ((sales / checkouts) * 100).toFixed(1) : 0;
  const totalConversion = visitors > 0 ? ((sales / visitors) * 100).toFixed(2) : 0;

  const steps = [
    {
      label: '1. Visitantes Únicos',
      count: visitors,
      percentage: 100,
      icon: Users,
      color: 'bg-blue-600 text-blue-600',
      barColor: 'bg-blue-600',
      badge: '100% do Tráfego',
      description: 'Pessoas que acessaram a Landing Page'
    },
    {
      label: '2. Cliques nos CTAs',
      count: ctaClicks,
      percentage: Number(ctaRate),
      icon: MousePointerClick,
      color: 'bg-indigo-600 text-indigo-600',
      barColor: 'bg-indigo-600',
      badge: `${ctaRate}% dos Visitantes`,
      description: 'Clicaram em E-book, Consulta ou WhatsApp'
    },
    {
      label: '3. Checkouts Iniciados (IC)',
      count: checkouts,
      percentage: Number(((checkouts / (visitors || 1)) * 100).toFixed(1)),
      icon: ShoppingCart,
      color: 'bg-amber-600 text-amber-600',
      barColor: 'bg-amber-500',
      badge: `${checkoutRate}% de quem clicou no CTA`,
      description: `Iniciaram preenchimento na Eduzz (${abandonedCheckouts} abandonos)`
    },
    {
      label: '4. Vendas Concluídas',
      count: sales,
      percentage: Number(totalConversion),
      icon: CheckCircle2,
      color: 'bg-emerald-600 text-emerald-600',
      barColor: 'bg-emerald-500',
      badge: `${saleRate}% dos Checkouts pagos`,
      description: `Conversão global de ${totalConversion}% (Visitante ➔ Venda)`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Funil de Conversão Completo
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Acompanhamento passo a passo: Visitantes ➔ Cliques no CTA ➔ Checkout ➔ Compras
          </p>
        </div>

        <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 px-4 py-2 rounded-2xl">
          <div className="text-right">
            <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold block uppercase tracking-wider">
              Taxa Global (CR)
            </span>
            <span className="text-lg font-extrabold text-[#1B2B5E] dark:text-white font-sans">
              {totalConversion}%
            </span>
          </div>
          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            ★
          </div>
        </div>
      </div>

      {/* Funnel Visual Steps */}
      <div className="mt-6 space-y-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          // Calculate proportional width relative to max 100%
          const barWidth = Math.max(step.percentage, 8);

          return (
            <div key={idx} className="relative group">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg ${step.color.split(' ')[0]}/10 ${step.color.split(' ')[1]} flex items-center justify-center shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <span className="font-bold">{step.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-slate-900 dark:text-white font-sans">
                    {step.count.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                    {step.badge}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-8 bg-slate-100 dark:bg-slate-800/80 rounded-xl overflow-hidden p-1 relative flex items-center">
                <div
                  className={`h-full ${step.barColor} rounded-lg transition-all duration-700 flex items-center justify-end pr-2 text-white font-bold text-[11px]`}
                  style={{ width: `${barWidth}%` }}
                >
                  {step.percentage >= 15 && `${step.percentage}%`}
                </div>
                {step.percentage < 15 && (
                  <span className="ml-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    {step.percentage}%
                  </span>
                )}
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 pl-1">
                {step.description}
              </p>

              {/* Drop-off connector */}
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center py-1 text-slate-300 dark:text-slate-700">
                  <ArrowDown size={14} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Checkout Abandonment Alert */}
      {abandonedCheckouts > 0 && (
        <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-200">
            <span className="font-bold block mb-0.5">
              Oportunidade de Recuperação de Carrinho:
            </span>
            {abandonedCheckouts} pessoas iniciaram o checkout e não finalizaram (Taxa de abandono: {((abandonedCheckouts / (checkouts || 1)) * 100).toFixed(1)}%).
            Configure réguas de e-mail e WhatsApp de recuperação na Eduzz para resgatar até 25% dessas vendas.
          </div>
        </div>
      )}
    </div>
  );
}
