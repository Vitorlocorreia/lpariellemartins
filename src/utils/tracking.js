/**
 * Utilitários para rastreamento de conversão (GA4 + Meta Pixel) e parâmetros UTM
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
  if (typeof window === 'undefined') return;
  try {
    const utms = captureAndGetUtms();
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...params,
        ...utms,
      });
    }
  } catch {
    // ignore
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

  // Meta Pixel Lead / Contact tracking
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const utms = captureAndGetUtms();
      window.fbq('track', 'Contact', {
        content_name: source,
        ...details,
        ...utms,
      });
      window.fbq('track', 'Lead', {
        content_name: source,
        ...details,
        ...utms,
      });
    } catch {
      // ignore
    }
  }
}

export function trackCheckoutInitiated(productName = 'E-book Manual Prático de Treinamento para Idosos', value = 98.0) {
  trackEvent('begin_checkout', {
    currency: 'BRL',
    value,
    item_name: productName,
  });

  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const utms = captureAndGetUtms();
      window.fbq('track', 'InitiateCheckout', {
        content_name: productName,
        currency: 'BRL',
        value,
        ...utms,
      });
    } catch {
      // ignore
    }
  }
}
