// Dados analíticos consolidados com suporte a múltiplos períodos e tracking granular

export const initialDashboardData = {
  periods: {
    today: {
      label: 'Hoje',
      grossRevenue: 1470.00,
      netRevenue: 1337.70,
      salesCount: 15,
      averageTicket: 98.00,
      adSpend: 310.00,
      impressions: 14200,
      linkClicks: 520,
      visitors: 480,
      ctaClicks: 168,
      checkoutsInitiated: 42,
      abandonedCheckouts: 27,
      pixGenerated: 18,
      pixPaid: 11,
      refundsCount: 0,
      refundsAmount: 0.00,
      chargebacksCount: 0,
      chargebacksAmount: 0.00,
      refusedPayments: 3,
      refusedAmount: 294.00,
      previousPeriod: {
        grossRevenue: 1180.00,
        netRevenue: 1073.80,
        salesCount: 12,
        averageTicket: 98.33,
        adSpend: 290.00,
        visitors: 410,
        ctaClicks: 135,
        checkoutsInitiated: 34,
        roas: 4.06,
        mer: 4.06
      }
    },
    yesterday: {
      label: 'Ontem',
      grossRevenue: 1862.00,
      netRevenue: 1694.42,
      salesCount: 19,
      averageTicket: 98.00,
      adSpend: 340.00,
      impressions: 16800,
      linkClicks: 610,
      visitors: 575,
      ctaClicks: 198,
      checkoutsInitiated: 51,
      abandonedCheckouts: 32,
      pixGenerated: 22,
      pixPaid: 14,
      refundsCount: 1,
      refundsAmount: 98.00,
      chargebacksCount: 0,
      chargebacksAmount: 0.00,
      refusedPayments: 4,
      refusedAmount: 392.00,
      previousPeriod: {
        grossRevenue: 1590.00,
        netRevenue: 1446.90,
        salesCount: 16,
        averageTicket: 99.37,
        adSpend: 320.00,
        visitors: 505,
        ctaClicks: 172,
        checkoutsInitiated: 44,
        roas: 4.96,
        mer: 4.96
      }
    },
    last7days: {
      label: 'Últimos 7 dias',
      grossRevenue: 12544.00,
      netRevenue: 11415.04,
      salesCount: 128,
      averageTicket: 98.00,
      adSpend: 2450.00,
      impressions: 118500,
      linkClicks: 4320,
      visitors: 4080,
      ctaClicks: 1420,
      checkoutsInitiated: 360,
      abandonedCheckouts: 232,
      pixGenerated: 145,
      pixPaid: 94,
      refundsCount: 2,
      refundsAmount: 196.00,
      chargebacksCount: 1,
      chargebacksAmount: 98.00,
      refusedPayments: 24,
      refusedAmount: 2352.00,
      previousPeriod: {
        grossRevenue: 9800.00,
        netRevenue: 8918.00,
        salesCount: 100,
        averageTicket: 98.00,
        adSpend: 2200.00,
        visitors: 3450,
        ctaClicks: 1180,
        checkoutsInitiated: 290,
        roas: 4.45,
        mer: 4.45
      }
    },
    last30days: {
      label: 'Últimos 30 dias',
      grossRevenue: 51940.00,
      netRevenue: 47265.40,
      salesCount: 530,
      averageTicket: 98.00,
      adSpend: 9800.00,
      impressions: 480000,
      linkClicks: 17800,
      visitors: 16900,
      ctaClicks: 5920,
      checkoutsInitiated: 1490,
      abandonedCheckouts: 960,
      pixGenerated: 590,
      pixPaid: 395,
      refundsCount: 7,
      refundsAmount: 686.00,
      chargebacksCount: 2,
      chargebacksAmount: 196.00,
      refusedPayments: 98,
      refusedAmount: 9604.00,
      previousPeriod: {
        grossRevenue: 41200.00,
        netRevenue: 37492.00,
        salesCount: 420,
        averageTicket: 98.09,
        adSpend: 8600.00,
        visitors: 13800,
        ctaClicks: 4750,
        checkoutsInitiated: 1210,
        roas: 4.79,
        mer: 4.79
      }
    },
    thisMonth: {
      label: 'Este Mês',
      grossRevenue: 38220.00,
      netRevenue: 34780.20,
      salesCount: 390,
      averageTicket: 98.00,
      adSpend: 7200.00,
      impressions: 355000,
      linkClicks: 13150,
      visitors: 12480,
      ctaClicks: 4360,
      checkoutsInitiated: 1095,
      abandonedCheckouts: 705,
      pixGenerated: 430,
      pixPaid: 290,
      refundsCount: 5,
      refundsAmount: 490.00,
      chargebacksCount: 1,
      chargebacksAmount: 98.00,
      refusedPayments: 72,
      refusedAmount: 7056.00,
      previousPeriod: {
        grossRevenue: 31500.00,
        netRevenue: 28665.00,
        salesCount: 321,
        averageTicket: 98.13,
        adSpend: 6400.00,
        visitors: 10500,
        ctaClicks: 3650,
        checkoutsInitiated: 915,
        roas: 4.92,
        mer: 4.92
      }
    }
  },

  // Canais de Aquisição & UTMs
  channels: [
    {
      id: 'meta-feed',
      name: 'Meta Ads (Instagram Feed & Stories)',
      type: 'Tráfego Pago',
      utmSource: 'facebook / instagram',
      utmCampaign: 'campanha_idosos_direta',
      visitors: 9850,
      ctaClicks: 3640,
      checkouts: 920,
      sales: 332,
      spend: 5880.00,
      revenue: 32536.00,
      cpa: 17.71,
      roas: 5.53,
      conversionRate: 3.37
    },
    {
      id: 'meta-reels',
      name: 'Meta Ads (Instagram Reels)',
      type: 'Tráfego Pago',
      utmSource: 'instagram',
      utmCampaign: 'reels_autoridade_geronto',
      visitors: 3420,
      ctaClicks: 1140,
      checkouts: 285,
      sales: 98,
      spend: 2120.00,
      revenue: 9604.00,
      cpa: 21.63,
      roas: 4.53,
      conversionRate: 2.86
    },
    {
      id: 'google-search',
      name: 'Google Ads (Search & Discovery)',
      type: 'Tráfego Pago',
      utmSource: 'google',
      utmCampaign: 'pesquisa_personal_idosos',
      visitors: 1820,
      ctaClicks: 680,
      checkouts: 175,
      sales: 62,
      spend: 1800.00,
      revenue: 6076.00,
      cpa: 29.03,
      roas: 3.37,
      conversionRate: 3.40
    },
    {
      id: 'instagram-organic',
      name: 'Instagram Orgânico (@ariellemartins.pt)',
      type: 'Orgânico',
      utmSource: 'instagram_bio',
      utmCampaign: 'organico_link_bio',
      visitors: 1240,
      ctaClicks: 320,
      checkouts: 84,
      sales: 31,
      spend: 0.00,
      revenue: 3038.00,
      cpa: 0.00,
      roas: 0.00,
      conversionRate: 2.50
    },
    {
      id: 'direct',
      name: 'Tráfego Direto & WhatsApp',
      type: 'Direto',
      utmSource: 'direct / whatsapp',
      utmCampaign: 'compartilhamento_direto',
      visitors: 570,
      ctaClicks: 140,
      checkouts: 26,
      sales: 7,
      spend: 0.00,
      revenue: 686.00,
      cpa: 0.00,
      roas: 0.00,
      conversionRate: 1.22
    }
  ],

  // Performance por Produto/Oferta
  products: [
    {
      id: 'ebook-manual',
      name: 'E-book: Manual Prático de Treinamento para Idosos',
      category: 'Infoproduto (Eduzz)',
      price: 98.00,
      sales: 472,
      grossRevenue: 46256.00,
      netRevenue: 42092.96,
      refunds: 6,
      refundRate: 1.27,
      conversionRate: 3.12,
      status: 'Ativo'
    },
    {
      id: 'consultoria-online',
      name: 'Consulta Inicial & Avaliação Funcional',
      category: 'Serviço / Atendimento',
      price: 250.00,
      sales: 38,
      grossRevenue: 9500.00,
      netRevenue: 8930.00,
      refunds: 0,
      refundRate: 0.00,
      conversionRate: 1.45,
      status: 'Ativo'
    },
    {
      id: 'mentoria-presencial',
      name: 'Acompanhamento Presencial Mensal',
      category: 'Recorrência / Personal',
      price: 1200.00,
      sales: 12,
      grossRevenue: 14400.00,
      netRevenue: 13968.00,
      refunds: 0,
      refundRate: 0.00,
      conversionRate: 0.85,
      status: 'Vagas Limitadas'
    }
  ],

  // Série Temporal Diária para Gráficos (Últimos 14 dias)
  dailyTimeline: [
    { date: '10/09', dayName: 'Qui', revenue: 1470, net: 1337, spend: 310, sales: 15, visitors: 480, roas: 4.74 },
    { date: '11/09', dayName: 'Sex', revenue: 1764, net: 1605, spend: 330, sales: 18, visitors: 560, roas: 5.34 },
    { date: '12/09', dayName: 'Sáb', revenue: 1960, net: 1783, spend: 370, sales: 20, visitors: 610, roas: 5.29 },
    { date: '13/09', dayName: 'Dom', revenue: 2156, net: 1961, spend: 390, sales: 22, visitors: 680, roas: 5.52 },
    { date: '14/09', dayName: 'Seg', revenue: 1666, net: 1516, spend: 320, sales: 17, visitors: 530, roas: 5.20 },
    { date: '15/09', dayName: 'Ter', revenue: 1568, net: 1426, spend: 310, sales: 16, visitors: 490, roas: 5.05 },
    { date: '16/09', dayName: 'Qua', revenue: 1862, net: 1694, spend: 350, sales: 19, visitors: 580, roas: 5.32 },
    { date: '17/09', dayName: 'Qui', revenue: 2058, net: 1872, spend: 380, sales: 21, visitors: 640, roas: 5.41 },
    { date: '18/09', dayName: 'Sex', revenue: 2254, net: 2051, spend: 400, sales: 23, visitors: 710, roas: 5.63 },
    { date: '19/09', dayName: 'Sáb', revenue: 2450, net: 2229, spend: 430, sales: 25, visitors: 760, roas: 5.69 },
    { date: '20/09', dayName: 'Dom', revenue: 2646, net: 2407, spend: 450, sales: 27, visitors: 820, roas: 5.88 },
    { date: '21/09', dayName: 'Seg', revenue: 1960, net: 1783, spend: 360, sales: 20, visitors: 600, roas: 5.44 },
    { date: '22/09', dayName: 'Ter', revenue: 1862, net: 1694, spend: 340, sales: 19, visitors: 575, roas: 5.47 },
    { date: '23/09', dayName: 'Qua', revenue: 1470, net: 1337, spend: 310, sales: 15, visitors: 480, roas: 4.74 }
  ]
};

// Funções de Cálculo de Métricas Derivadas
export function computeMetrics(data) {
  const {
    grossRevenue,
    netRevenue,
    salesCount,
    adSpend,
    impressions,
    linkClicks,
    visitors,
    ctaClicks,
    checkoutsInitiated,
    abandonedCheckouts,
    pixGenerated,
    pixPaid,
    refundsCount,
    refundsAmount,
    chargebacksCount,
    chargebacksAmount,
    refusedPayments,
    refusedAmount,
    previousPeriod
  } = data;

  const averageTicket = salesCount > 0 ? grossRevenue / salesCount : 0;
  const roas = adSpend > 0 ? grossRevenue / adSpend : 0;
  const mer = adSpend > 0 ? grossRevenue / adSpend : 0;
  const cpa = salesCount > 0 ? adSpend / salesCount : 0;
  const cpm = impressions > 0 ? (adSpend / impressions) * 1000 : 0;
  const cpc = linkClicks > 0 ? adSpend / linkClicks : 0;
  const ctr = impressions > 0 ? (linkClicks / impressions) * 100 : 0;
  const costPerVisitor = visitors > 0 ? adSpend / visitors : 0;
  const conversionRate = visitors > 0 ? (salesCount / visitors) * 100 : 0;
  const revenuePerVisitor = visitors > 0 ? grossRevenue / visitors : 0;
  const ctaClickRate = visitors > 0 ? (ctaClicks / visitors) * 100 : 0;
  const checkoutConversionRate = ctaClicks > 0 ? (checkoutsInitiated / ctaClicks) * 100 : 0;
  const purchaseFromCheckoutRate = checkoutsInitiated > 0 ? (salesCount / checkoutsInitiated) * 100 : 0;
  const abandonmentRate = checkoutsInitiated > 0 ? (abandonedCheckouts / checkoutsInitiated) * 100 : 0;
  const pixConversionRate = pixGenerated > 0 ? (pixPaid / pixGenerated) * 100 : 0;
  const refundRate = grossRevenue > 0 ? (refundsAmount / grossRevenue) * 100 : 0;
  const chargebackRate = grossRevenue > 0 ? (chargebacksAmount / grossRevenue) * 100 : 0;

  // Deltas vs período anterior
  const calcDelta = (curr, prev) => {
    if (!prev || prev === 0) return 0;
    return ((curr - prev) / prev) * 100;
  };

  const deltas = previousPeriod ? {
    grossRevenue: calcDelta(grossRevenue, previousPeriod.grossRevenue),
    netRevenue: calcDelta(netRevenue, previousPeriod.netRevenue),
    salesCount: calcDelta(salesCount, previousPeriod.salesCount),
    averageTicket: calcDelta(averageTicket, previousPeriod.averageTicket),
    adSpend: calcDelta(adSpend, previousPeriod.adSpend),
    visitors: calcDelta(visitors, previousPeriod.visitors),
    ctaClicks: calcDelta(ctaClicks, previousPeriod.ctaClicks),
    checkoutsInitiated: calcDelta(checkoutsInitiated, previousPeriod.checkoutsInitiated),
    roas: calcDelta(roas, previousPeriod.roas),
    mer: calcDelta(mer, previousPeriod.mer),
    conversionRate: calcDelta(conversionRate, previousPeriod.visitors > 0 ? (previousPeriod.salesCount / previousPeriod.visitors) * 100 : 0)
  } : {};

  return {
    grossRevenue,
    netRevenue,
    salesCount,
    averageTicket,
    adSpend,
    roas,
    mer,
    cpa,
    impressions,
    cpm,
    linkClicks,
    ctr,
    cpc,
    visitors,
    costPerVisitor,
    conversionRate,
    revenuePerVisitor,
    ctaClicks,
    ctaClickRate,
    checkoutsInitiated,
    abandonedCheckouts,
    abandonmentRate,
    checkoutConversionRate,
    purchaseFromCheckoutRate,
    pixGenerated,
    pixPaid,
    pixConversionRate,
    refundsCount,
    refundsAmount,
    refundRate,
    chargebacksCount,
    chargebacksAmount,
    chargebackRate,
    refusedPayments,
    refusedAmount,
    deltas
  };
}
