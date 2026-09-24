import React from 'react';
import { Package, TrendingUp, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ProductBreakdown({ products = [] }) {
  const formatCurrency = (val) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Performance por Produto &amp; Oferta
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Receita bruta, líquida e taxa de reembolso detalhada por oferta
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-blue-200 dark:hover:border-blue-900/60 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 max-w-md">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                  {product.category}
                </span>
                <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                  {product.status}
                </span>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {product.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Preço de tabela: <span className="font-semibold text-slate-700 dark:text-slate-300">{formatCurrency(product.price)}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto text-left md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">Vendas</span>
                <span className="text-base font-extrabold text-slate-900 dark:text-white">{product.sales} un.</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">Receita Bruta</span>
                <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">{formatCurrency(product.grossRevenue)}</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">Receita Líquida</span>
                <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">{formatCurrency(product.netRevenue)}</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">Reembolsos</span>
                <span className={`text-base font-extrabold ${product.refundRate > 2 ? 'text-rose-600' : 'text-slate-700 dark:text-slate-300'}`}>
                  {product.refundRate.toFixed(2)}% ({product.refunds})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
