import React from 'react';
import { QrCode, CreditCard, AlertTriangle, ShieldCheck, RefreshCw, XCircle } from 'lucide-react';

export default function PaymentHealthCard({ metrics }) {
  const formatCurrency = (val) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const isChargebackHealthy = (metrics.chargebackRate || 0) < 1.0;
  const isRefundHealthy = (metrics.refundRate || 0) < 3.0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Saúde dos Pagamentos &amp; Antifraude
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Conversão de PIX, pagamentos recusados, reembolsos e chargebacks
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold">
          <ShieldCheck size={14} />
          <span>Conta Saudável</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        {/* PIX Conversion Card */}
        <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <QrCode size={18} />
              <span className="font-bold text-xs uppercase tracking-wider">PIX Gerados x Pagos</span>
            </div>
            <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
              {metrics.pixConversionRate.toFixed(1)}% Pagos
            </span>
          </div>

          <div className="flex items-baseline justify-between pt-2">
            <div>
              <span className="text-2xl font-black text-slate-900 dark:text-white font-sans">
                {metrics.pixPaid}
              </span>
              <span className="text-xs text-slate-400 block font-medium">PIX Compensados</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-slate-500 dark:text-slate-400 font-sans">
                {metrics.pixGenerated}
              </span>
              <span className="text-xs text-slate-400 block font-medium">Total Gerados</span>
            </div>
          </div>

          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${Math.min(metrics.pixConversionRate, 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            {metrics.pixGenerated - metrics.pixPaid} PIX aguardando ou expirados
          </p>
        </div>

        {/* Refused Payments Card */}
        <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <CreditCard size={18} />
              <span className="font-bold text-xs uppercase tracking-wider">Pagamentos Recusados</span>
            </div>
            <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200">
              {metrics.refusedPayments} pedidos
            </span>
          </div>

          <div className="pt-2">
            <span className="text-2xl font-black text-rose-600 dark:text-rose-400 font-sans">
              {formatCurrency(metrics.refusedAmount)}
            </span>
            <span className="text-xs text-slate-400 block font-medium mt-0.5">
              Valor travado por limite / antifraude do emissor
            </span>
          </div>

          <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/80 dark:border-slate-700">
            Dica: Ative a recuperação automática por WhatsApp de cartão recusado na Eduzz.
          </p>
        </div>

        {/* Refunds & Chargebacks */}
        <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <AlertTriangle size={18} />
              <span className="font-bold text-xs uppercase tracking-wider">Reembolsos &amp; Chargebacks</span>
            </div>
            <span className={`text-xs font-extrabold px-2 py-0.5 rounded-md ${
              isChargebackHealthy ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200' : 'bg-rose-100 text-rose-800'
            }`}>
              CB: {metrics.chargebackRate.toFixed(2)}%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100 font-sans">
                {metrics.refundsCount} ({formatCurrency(metrics.refundsAmount)})
              </span>
              <span className="text-[11px] text-slate-400 block">Reembolsos ({metrics.refundRate.toFixed(2)}%)</span>
            </div>

            <div>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100 font-sans">
                {metrics.chargebacksCount} ({formatCurrency(metrics.chargebacksAmount)})
              </span>
              <span className="text-[11px] text-slate-400 block">Chargebacks</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold pt-2 border-t border-slate-200/80 dark:border-slate-700">
            <ShieldCheck size={14} />
            <span>Dentro do limite seguro das operadoras (&lt; 1%)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
