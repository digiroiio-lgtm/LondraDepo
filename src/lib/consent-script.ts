/** Consent Mode v2 default shared by the Turkish and English root layouts. */
export const GA_ID = "G-MTYWY5LWCW";
export const STORAGE_KEY = "londradepo_cookie_consent";

/**
 * Consent Mode v2 default — runs synchronously before gtag.js loads.
 * Must live in <head> so it executes before any afterInteractive scripts.
 * Reads localStorage to restore consent for returning visitors who already accepted.
 */
export const GA_CONSENT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var _gac = 'denied';
try {
  var _s = localStorage.getItem('${STORAGE_KEY}');
  if (_s) { var _p = JSON.parse(_s); if (_p && _p.decided && _p.analytics) { _gac = 'granted'; } }
} catch(e) {}
window['ga-disable-${GA_ID}'] = _gac !== 'granted';
gtag('consent', 'default', { analytics_storage: _gac, ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
`;
