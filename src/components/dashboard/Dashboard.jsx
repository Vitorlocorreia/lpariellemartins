import React, { useState, useEffect } from 'react';
import {
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Users,
  MousePointerClick,
  Eye,
  Percent,
  RefreshCw,
  Edit3,
  Calendar,
  Layers,
  ArrowLeft,
  Sparkles,
  PieChart,
  ShieldCheck,
  AlertCircle,
  Download,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

import MetricCard from './MetricCard';
import FunnelVisualizer from './FunnelVisualizer';
import RevenueChart from './RevenueChart';
import TrafficChannelTable from './TrafficChannelTable';
import ProductBreakdown from './ProductBreakdown';
import PaymentHealthCard from './PaymentHealthCard';
import DataUpdateModal from './DataUpdateModal';

import { initialDashboardData, computeMetrics } from '../../data/mockDashboardData';

export default function Dashboard({ onBackToSite }) {
  const [selectedPeriod, setSelectedPeriod] = useState('last7days'); // today, yesterday, last7days, last30days, thisMonth
  const [dataStore, setDataStore] = useState(initialDashboardData);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // overview, traffic, products, financial

  // Load persisted custom data if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arielle_dashboard_data');
      if (saved) {
        setDataStore(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load stored dashboard data', e);
    }
  }, []);

  const currentPeriodRaw = dataStore.periods[selectedPeriod] || dataStore.periods.last7days;
  const metrics = computeMetrics(currentPeriodRaw);

  const handleSaveData = (updatedData) => {
    setDataStore(prev => {
      const next = {
        ...prev,
        periods: {
          ...prev.periods,
          [selectedPeriod]: {
            ...prev.periods[selectedPeriod],
            ...updatedData
          }
        }
      };
      try {
        localStorage.setItem('arielle_dashboard_data', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleResetData = () => {
    setDataStore(initialDashboardData);
    try {
      localStorage.removeItem('arielle_dashboard_data');
    } catch (e) {}
    setIsUpdateModalOpen(false);
  };

  const formatCurrency = (val) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-slate-950 text-[#1B2B5E] dark:text-slate-100 font-sans pb-16">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & Title */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToSite}
                className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 dark:bg-blue-950/60 px-3 py-2 rounded-xl transition-all hover:bg-blue-100"
                title="Voltar para a Landing Page"
              >
                <ArrowLeft size={14} />
                <span>Voltar ao Site</span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                    Arielle Martins Analytics
                  </h1>
                  <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    TRACKER ATIVO
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                  Supervisão de Vendas, Funil da Landing Page e Tráfego Pago
                </p>
              </div>
            </div>

            {/* Mobile update button */}
            <button
              onClick={() => setIsUpdateModalOpen(true)}
              className="md:hidden p-2 text-blue-600 bg-blue-50 dark:bg-blue-950/60 rounded-xl"
              title="Atualizar Métricas"
            >
              <Edit3 size={18} />
            </button>
          </div>

          {/* Controls: Period Filter & Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2.5 w-full md:w-auto">
            
            {/* Period Selector Pills */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-semibold overflow-x-auto max-w-full">
              {[
                { id: 'today', label: 'Hoje' },
                { id: 'yesterday', label: 'Ontem' },
                { id: 'last7days', label: '7 Dias' },
                { id: 'last30days', label: '30 Dias' },
                { id: 'thisMonth', label: 'Este Mês' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPeriod(p.id)}
                  className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                    selectedPeriod === p.id
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Edit / Update Data Trigger Button */}
            <button
              onClick={() => setIsUpdateModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <Edit3 size={14} />
              <span>Editar Dados</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        
        {/* Navigation Section Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Visão Geral & KPIs', icon: TrendingUp },
            { id: 'traffic', label: 'Canais & UTMs', icon: Layers },
            { id: 'products', label: 'Produtos & Ofertas', icon: ShoppingCart },
            { id: 'financial', label: 'Saúde dos Pagamentos & PIX', icon: DollarSign }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/80 dark:border-slate-800'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── SECTION 1: MASTER FINANCIAL & MEDIA KPIS ── */}
        {(activeTab === 'overview' || activeTab === 'financial') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span>Faturamento &amp; Eficiência de Mídia</span>
              </h2>
              <span className="text-xs text-slate-400">
                Período: <strong className="text-slate-700 dark:text-slate-200">{currentPeriodRaw.label}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="Receita Bruta"
                value={formatCurrency(metrics.grossRevenue)}
                subtitle={`Líquida: ${formatCurrency(metrics.netRevenue)}`}
                delta={metrics.deltas.grossRevenue}
                icon={DollarSign}
                color="emerald"
                tooltip="Faturamento total acumulado das vendas na Eduzz e atendimentos"
              />

              <MetricCard
                title="Investimento em Anúncios"
                value={formatCurrency(metrics.adSpend)}
                subtitle={`Custo / Visitante: ${formatCurrency(metrics.costPerVisitor)}`}
                delta={metrics.deltas.adSpend}
                icon={TrendingUp}
                color="rose"
                tooltip="Total investido no Meta Ads e Google Ads no período selecionado"
              />

              <MetricCard
                title="ROAS &amp; MER"
                value={`${metrics.roas.toFixed(2)}x`}
                subtitle={`MER: ${(metrics.mer).toFixed(2)}x (Retorno Geral)`}
                delta={metrics.deltas.roas}
                icon={Sparkles}
                color="blue"
                tooltip="Retorno sobre investimento em anúncios (Receita Bruta ÷ Gasto com Ads)"
              />

              <MetricCard
                title="Vendas &amp; Ticket Médio"
                value={metrics.salesCount}
                suffix=" un."
                subtitle={`Ticket Médio: ${formatCurrency(metrics.averageTicket)}`}
                delta={metrics.deltas.salesCount}
                icon={ShoppingCart}
                color="purple"
                tooltip="Número total de pedidos aprovados e valor médio gasto por aluno"
              />
            </div>
          </div>
        )}

        {/* ── SECTION 2: MARKETING & TRAFFIC PERFORMANCE ── */}
        {(activeTab === 'overview' || activeTab === 'traffic') && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Tráfego, Alcance &amp; Métricas de Mídia
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <MetricCard
                title="Visitantes (LP)"
                value={metrics.visitors}
                delta={metrics.deltas.visitors}
                icon={Users}
                color="blue"
              />

              <MetricCard
                title="Taxa de Conversão"
                value={`${metrics.conversionRate.toFixed(2)}%`}
                delta={metrics.deltas.conversionRate}
                icon={Percent}
                color="emerald"
                tooltip="Taxa de conversão final de visitante da Landing Page para venda"
              />

              <MetricCard
                title="CPA Médio"
                value={formatCurrency(metrics.cpa)}
                icon={DollarSign}
                color="amber"
                tooltip="Custo por Aquisição (Investimento ÷ Vendas)"
              />

              <MetricCard
                title="CTR do Anúncio"
                value={`${metrics.ctr.toFixed(2)}%`}
                icon={MousePointerClick}
                color="purple"
                tooltip="Taxa de cliques no anúncio (Cliques ÷ Impressões)"
              />

              <MetricCard
                title="CPC Médio"
                value={formatCurrency(metrics.cpc)}
                icon={TrendingUp}
                color="slate"
                tooltip="Custo médio por clique no link do anúncio"
              />

              <MetricCard
                title="CPM Médio"
                value={formatCurrency(metrics.cpm)}
                icon={Eye}
                color="slate"
                tooltip="Custo por 1.000 impressões no Meta / Google"
              />
            </div>
          </div>
        )}

        {/* ── SECTION 3: FUNNEL & TIMELINE REVENUE CHART ── */}
        {(activeTab === 'overview' || activeTab === 'traffic') && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Conversion Funnel */}
            <div className="lg:col-span-6">
              <FunnelVisualizer
                visitors={metrics.visitors}
                ctaClicks={metrics.ctaClicks}
                checkouts={metrics.checkoutsInitiated}
                sales={metrics.salesCount}
                abandonedCheckouts={metrics.abandonedCheckouts}
              />
            </div>

            {/* Daily Timeline Evolution Chart */}
            <div className="lg:col-span-6">
              <RevenueChart timeline={dataStore.dailyTimeline} />
            </div>

          </div>
        )}

        {/* ── SECTION 4: TRAFFIC CHANNELS & ATTRIBUTION (UTMs) ── */}
        {(activeTab === 'overview' || activeTab === 'traffic') && (
          <TrafficChannelTable channels={dataStore.channels} />
        )}

        {/* ── SECTION 5: PRODUCT & OFFER PERFORMANCE ── */}
        {(activeTab === 'overview' || activeTab === 'products') && (
          <ProductBreakdown products={dataStore.products} />
        )}

        {/* ── SECTION 6: PAYMENT HEALTH, PIX, REFUNDS, CHARGEBACKS ── */}
        {(activeTab === 'overview' || activeTab === 'financial') && (
          <PaymentHealthCard metrics={metrics} />
        )}

      </main>

      {/* Manual Data Update / Tracker Simulator Modal */}
      <DataUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        currentPeriodData={currentPeriodRaw}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

    </div>
  );
}
