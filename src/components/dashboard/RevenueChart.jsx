import React, { useState } from 'react';
import { DollarSign, TrendingUp, BarChart2, Eye } from 'lucide-react';

export default function RevenueChart({ timeline = [] }) {
  const [activeMetric, setActiveMetric] = useState('revenue'); // revenue, spend, roas, sales
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!timeline || timeline.length === 0) {
    return null;
  }

  // Get max values for scale
  const maxRevenue = Math.max(...timeline.map(d => d.revenue), 100);
  const maxSpend = Math.max(...timeline.map(d => d.spend), 50);
  const maxSales = Math.max(...timeline.map(d => d.sales), 10);
  const maxRoas = Math.max(...timeline.map(d => d.roas), 5);

  const formatCurrency = (val) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Evolução Diária &amp; Retorno (ROAS)
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Receita bruta gerada vs Investimento diário em tráfego pago
          </p>
        </div>

        {/* Metric Selector Buttons */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-semibold">
          <button
            onClick={() => setActiveMetric('revenue')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeMetric === 'revenue'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Receita x Gasto
          </button>
          <button
            onClick={() => setActiveMetric('roas')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeMetric === 'roas'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ROAS Diário
          </button>
          <button
            onClick={() => setActiveMetric('sales')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeMetric === 'sales'
                ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Vendas / Dia
          </button>
        </div>
      </div>

      {/* Interactive Bar/Column Chart Container */}
      <div className="mt-8">
        <div className="h-56 sm:h-64 flex items-end gap-1.5 sm:gap-3 pt-6 pb-2 px-1 relative">
          
          {/* Baseline Gridlines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-slate-300 dark:border-slate-700">
            <div className="border-b border-dashed border-slate-400 w-full"></div>
            <div className="border-b border-dashed border-slate-400 w-full"></div>
            <div className="border-b border-dashed border-slate-400 w-full"></div>
          </div>

          {timeline.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const revenueHeight = (item.revenue / maxRevenue) * 100;
            const spendHeight = (item.spend / maxRevenue) * 100; // on same scale for direct comparison
            const roasHeight = (item.roas / maxRoas) * 100;
            const salesHeight = (item.sales / maxSales) * 100;

            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute -top-24 z-30 bg-slate-900 text-white text-[11px] py-2 px-3 rounded-xl shadow-xl whitespace-nowrap pointer-events-none border border-slate-700 animate-fade-in">
                    <div className="font-bold border-b border-slate-700 pb-1 mb-1 text-slate-200">
                      {item.date} ({item.dayName})
                    </div>
                    <div className="space-y-0.5 font-sans">
                      <div className="text-emerald-400 font-semibold">Receita: {formatCurrency(item.revenue)}</div>
                      <div className="text-rose-400">Anúncios: {formatCurrency(item.spend)}</div>
                      <div className="text-amber-300 font-bold">ROAS: {item.roas.toFixed(2)}x</div>
                      <div className="text-blue-300">Vendas: {item.sales} un.</div>
                    </div>
                  </div>
                )}

                {/* Bars Depending on Active Tab */}
                <div className="w-full flex items-end justify-center gap-1 h-full relative">
                  {activeMetric === 'revenue' && (
                    <>
                      {/* Revenue Bar */}
                      <div
                        className="w-full max-w-[20px] bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg transition-all duration-300 group-hover:brightness-110 relative"
                        style={{ height: `${Math.max(revenueHeight, 6)}%` }}
                      />
                      {/* Spend Overlay / Bar */}
                      <div
                        className="w-full max-w-[12px] bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-md transition-all duration-300 opacity-80"
                        style={{ height: `${Math.max(spendHeight, 4)}%` }}
                      />
                    </>
                  )}

                  {activeMetric === 'roas' && (
                    <div
                      className="w-full max-w-[24px] bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg transition-all duration-300 group-hover:brightness-110"
                      style={{ height: `${Math.max(roasHeight, 6)}%` }}
                    />
                  )}

                  {activeMetric === 'sales' && (
                    <div
                      className="w-full max-w-[24px] bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg transition-all duration-300 group-hover:brightness-110"
                      style={{ height: `${Math.max(salesHeight, 6)}%` }}
                    />
                  )}
                </div>

                {/* X-axis Day Label */}
                <span className={`text-[10px] sm:text-[11px] mt-2 font-medium transition-colors ${
                  isHovered ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-slate-400'
                }`}>
                  {item.date.split('/')[0]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
            {activeMetric === 'revenue' && (
              <>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-blue-600"></span>
                  <span>Receita Bruta</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-rose-500"></span>
                  <span>Investimento em Tráfego</span>
                </div>
              </>
            )}
            {activeMetric === 'roas' && (
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-500"></span>
                <span>Retorno sobre o Investimento (ROAS = Receita ÷ Anúncios)</span>
              </div>
            )}
            {activeMetric === 'sales' && (
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-purple-500"></span>
                <span>Quantidade de Vendas Concluídas</span>
              </div>
            )}
          </div>

          <span className="text-[11px] text-slate-400 italic">
            * Passe o mouse sobre as barras para ver os detalhes diários
          </span>
        </div>
      </div>
    </div>
  );
}
