/**
 * Utilitários para rastreamento de conversão (GA4) e parâmetros UTM
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'src', 'sck'];

export function captureAndGetUtms() {
  if (typeof window === 'undefined') return {};
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {};
    UTM_KEYS.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        utms[key] = val;
        sessionStorage.setItem('lp_' + key, val);
      } else {
        const stored = sessionStorage.getItem('lp_' + key);
        if (stored) utms[key] = stored;
      }
    });
    return utms;
  } catch {
    return {};
  }
}

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      const utms = captureAndGetUtms();
      window.gtag('event', eventName, {
        ...params,
        ...utms,
      });
    } catch {
      // ignore
    }
  }
}

export function trackLeadConversion(source = 'whatsapp_direct', details = {}) {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: source,
    ...details,
  });
  trackEvent('whatsapp_click', {
    button_location: source,
  });
}
