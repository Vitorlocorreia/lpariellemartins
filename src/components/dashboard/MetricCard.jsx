import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function MetricCard({
  title,
  value,
  subtitle,
  delta,
  icon: Icon,
  color = 'blue', // blue, emerald, amber, purple, rose, slate
  prefix = '',
  suffix = '',
  tooltip = ''
}) {
  const isPositive = delta > 0;
  const isNeutral = delta === 0 || delta === undefined || isNaN(delta);

  const colorStyles = {
    blue: {
      bg: 'bg-blue-50/70 dark:bg-blue-950/30',
      border: 'border-blue-100 dark:border-blue-900/40',
      text: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-100/80 dark:bg-blue-900/50',
      glow: 'group-hover:border-blue-300'
    },
    emerald: {
      bg: 'bg-emerald-50/60 dark:bg-emerald-950/30',
      border: 'border-emerald-100 dark:border-emerald-900/40',
      text: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-100/80 dark:bg-emerald-900/50',
      glow: 'group-hover:border-emerald-300'
    },
    purple: {
      bg: 'bg-purple-50/60 dark:bg-purple-950/30',
      border: 'border-purple-100 dark:border-purple-900/40',
      text: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-100/80 dark:bg-purple-900/50',
      glow: 'group-hover:border-purple-300'
    },
    amber: {
      bg: 'bg-amber-50/60 dark:bg-amber-950/30',
      border: 'border-amber-100 dark:border-amber-900/40',
      text: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-100/80 dark:bg-amber-900/50',
      glow: 'group-hover:border-amber-300'
    },
    rose: {
      bg: 'bg-rose-50/60 dark:bg-rose-950/30',
      border: 'border-rose-100 dark:border-rose-900/40',
      text: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-100/80 dark:bg-rose-900/50',
      glow: 'group-hover:border-rose-300'
    },
    slate: {
      bg: 'bg-slate-50 dark:bg-slate-900/40',
      border: 'border-slate-200/80 dark:border-slate-800',
      text: 'text-slate-600 dark:text-slate-400',
      iconBg: 'bg-slate-200/70 dark:bg-slate-800',
      glow: 'group-hover:border-slate-300'
    }
  };

  const style = colorStyles[color] || colorStyles.blue;

  return (
    <div className={`group relative bg-white dark:bg-slate-900 rounded-2xl p-5 border ${style.border} shadow-sm hover:shadow-md transition-all duration-200 ${style.glow}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block" title={tooltip}>
            {title}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              {prefix}{typeof value === 'number' ? value.toLocaleString('pt-BR') : value}{suffix}
            </span>
          </div>
        </div>

        {Icon && (
          <div className={`w-11 h-11 rounded-xl ${style.iconBg} ${style.text} flex items-center justify-center shrink-0`}>
            <Icon size={22} />
          </div>
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
        {subtitle && (
          <span className="text-slate-500 dark:text-slate-400 truncate max-w-[170px]" title={subtitle}>
            {subtitle}
          </span>
        )}

        {delta !== undefined && !isNeutral && (
          <div className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-md ${
            isPositive ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
          }`}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{isPositive ? '+' : ''}{delta.toFixed(1)}%</span>
          </div>
        )}

        {isNeutral && delta !== undefined && (
          <div className="inline-flex items-center gap-1 text-slate-400 text-[11px]">
            <Minus size={12} />
            <span>0%</span>
          </div>
        )}
      </div>
    </div>
  );
}
