import React, { useState } from 'react';
import { X, Save, Download, RefreshCw, CheckCircle2, DollarSign, Users, ShoppingBag } from 'lucide-react';

export default function DataUpdateModal({ isOpen, onClose, currentPeriodData, onSave, onReset }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    grossRevenue: currentPeriodData.grossRevenue || 0,
    netRevenue: currentPeriodData.netRevenue || 0,
    salesCount: currentPeriodData.salesCount || 0,
    adSpend: currentPeriodData.adSpend || 0,
    visitors: currentPeriodData.visitors || 0,
    ctaClicks: currentPeriodData.ctaClicks || 0,
    checkoutsInitiated: currentPeriodData.checkoutsInitiated || 0,
    impressions: currentPeriodData.impressions || 0,
    linkClicks: currentPeriodData.linkClicks || 0,
    pixGenerated: currentPeriodData.pixGenerated || 0,
    pixPaid: currentPeriodData.pixPaid || 0,
    refundsCount: currentPeriodData.refundsCount || 0,
    refundsAmount: currentPeriodData.refundsAmount || 0,
    chargebacksCount: currentPeriodData.chargebacksCount || 0,
    chargebacksAmount: currentPeriodData.chargebacksAmount || 0,
    refusedPayments: currentPeriodData.refusedPayments || 0,
    refusedAmount: currentPeriodData.refusedAmount || 0
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field, value) => {
    const num = parseFloat(value) || 0;
    setFormData(prev => ({ ...prev, [field]: num }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleExportCSV = () => {
    const headers = ['Métrica', 'Valor'];
    const rows = Object.entries(formData).map(([k, v]) => [k, v]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `relatorio_metricas_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Supervisionar &amp; Atualizar Métricas
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Edite manualmente os números reais de vendas, tráfego ou anúncios para recalcular todo o dashboard
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="mt-6 space-y-6">
          
          {/* Section: Financeiro */}
          <div>
            <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <DollarSign size={14} />
              <span>Vendas &amp; Faturamento</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Receita Bruta (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.grossRevenue}
                  onChange={(e) => handleChange('grossRevenue', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Receita Líquida (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.netRevenue}
                  onChange={(e) => handleChange('netRevenue', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Nº de Vendas (un.)
                </label>
                <input
                  type="number"
                  value={formData.salesCount}
                  onChange={(e) => handleChange('salesCount', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold"
                />
              </div>
            </div>
          </div>

          {/* Section: Tráfego Pago */}
          <div>
            <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShoppingBag size={14} />
              <span>Mídia &amp; Anúncios (Meta / Google)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Investimento (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.adSpend}
                  onChange={(e) => handleChange('adSpend', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-rose-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Impressões
                </label>
                <input
                  type="number"
                  value={formData.impressions}
                  onChange={(e) => handleChange('impressions', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Cliques no Link
                </label>
                <input
                  type="number"
                  value={formData.linkClicks}
                  onChange={(e) => handleChange('linkClicks', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Section: Landing Page & Funil */}
          <div>
            <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Users size={14} />
              <span>Tráfego da Landing Page &amp; Funil</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Visitantes Únicos
                </label>
                <input
                  type="number"
                  value={formData.visitors}
                  onChange={(e) => handleChange('visitors', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Cliques nos CTAs
                </label>
                <input
                  type="number"
                  value={formData.ctaClicks}
                  onChange={(e) => handleChange('ctaClicks', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Checkouts Iniciados
                </label>
                <input
                  type="number"
                  value={formData.checkoutsInitiated}
                  onChange={(e) => handleChange('checkoutsInitiated', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Section: PIX & Perdas */}
          <div>
            <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">
              PIX, Reembolsos &amp; Recusas
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  PIX Gerados
                </label>
                <input
                  type="number"
                  value={formData.pixGenerated}
                  onChange={(e) => handleChange('pixGenerated', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  PIX Pagos
                </label>
                <input
                  type="number"
                  value={formData.pixPaid}
                  onChange={(e) => handleChange('pixPaid', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Reembolsos (un.)
                </label>
                <input
                  type="number"
                  value={formData.refundsCount}
                  onChange={(e) => handleChange('refundsCount', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Recusados (un.)
                </label>
                <input
                  type="number"
                  value={formData.refusedPayments}
                  onChange={(e) => handleChange('refusedPayments', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleExportCSV}
                className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                <Download size={14} />
                <span>Exportar CSV</span>
              </button>

              <button
                type="button"
                onClick={onReset}
                className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-3 py-2.5 rounded-xl transition-all"
                title="Restaurar dados padrão"
              >
                <RefreshCw size={14} />
                <span>Restaurar Padrão</span>
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md shadow-blue-500/25 transition-all"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle2 size={15} />
                    <span>Atualizado!</span>
                  </>
                ) : (
                  <>
                    <Save size={15} />
                    <span>Salvar &amp; Recalcular</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
