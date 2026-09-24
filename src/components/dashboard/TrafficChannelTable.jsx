import React, { useState } from 'react';
import { Layers, Search, ArrowUpDown, TrendingUp, ExternalLink, Filter } from 'lucide-react';

export default function TrafficChannelTable({ channels = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('revenue');
  const [sortOrder, setSortOrder] = useState('desc');

  const filteredChannels = channels
    .filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.utmCampaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.utmSource.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (sortOrder === 'asc') return valA > valB ? 1 : -1;
      return valA < valB ? 1 : -1;
    });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const formatCurrency = (val) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Origem do Tráfego &amp; Conversão por Canal (UTMs)
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Métricas de CPA, ROAS, Investimento e Vendas por canal de atração
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar canal ou campanha..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold bg-slate-50/50 dark:bg-slate-800/30">
              <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('name')}>
                <div className="flex items-center gap-1.5">
                  <span>Canal / Campanha</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('visitors')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Visitantes</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('ctaClicks')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Cliques CTA</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('checkouts')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Checkouts</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('sales')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Vendas</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('spend')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Investimento</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('revenue')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Receita</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('cpa')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>CPA</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('roas')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>ROAS</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-3 text-right cursor-pointer" onClick={() => handleSort('conversionRate')}>
                <div className="flex items-center justify-end gap-1.5">
                  <span>Taxa Conv.</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {filteredChannels.map((channel) => (
              <tr key={channel.id} className="hover:bg-blue-50/40 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3.5 px-3">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {channel.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center gap-2">
                    <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[10px]">
                      {channel.type}
                    </span>
                    <span>{channel.utmCampaign}</span>
                  </div>
                </td>
                <td className="py-3.5 px-3 text-right font-medium text-slate-700 dark:text-slate-300">
                  {channel.visitors.toLocaleString('pt-BR')}
                </td>
                <td className="py-3.5 px-3 text-right font-medium text-slate-700 dark:text-slate-300">
                  {channel.ctaClicks.toLocaleString('pt-BR')}
                </td>
                <td className="py-3.5 px-3 text-right font-medium text-slate-700 dark:text-slate-300">
                  {channel.checkouts.toLocaleString('pt-BR')}
                </td>
                <td className="py-3.5 px-3 text-right font-extrabold text-slate-900 dark:text-white">
                  {channel.sales}
                </td>
                <td className="py-3.5 px-3 text-right text-rose-600 font-medium">
                  {channel.spend > 0 ? formatCurrency(channel.spend) : '—'}
                </td>
                <td className="py-3.5 px-3 text-right font-extrabold text-emerald-600 dark:text-emerald-400">
                  {formatCurrency(channel.revenue)}
                </td>
                <td className="py-3.5 px-3 text-right font-semibold text-slate-800 dark:text-slate-200">
                  {channel.cpa > 0 ? formatCurrency(channel.cpa) : '—'}
                </td>
                <td className="py-3.5 px-3 text-right">
                  {channel.roas > 0 ? (
                    <span className="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {channel.roas.toFixed(2)}x
                    </span>
                  ) : (
                    <span className="text-slate-400">Orgânico</span>
                  )}
                </td>
                <td className="py-3.5 px-3 text-right font-bold text-blue-600 dark:text-blue-400">
                  {channel.conversionRate.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
