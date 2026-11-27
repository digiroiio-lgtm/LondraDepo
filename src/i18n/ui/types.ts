/**
 * Interface texts shared by every language (header, footer legal row, cookie banner and preferences,
 * sticky WhatsApp button, language menu, common form messages). A new language must provide all of them;
 * TypeScript fails the build until it does.
 */
export type UiStrings = {
  langMenu: { label: string; switchTo: string };
  header: { quote: string; quoteHref: string; call: string };
  sticky: { href: string; aria: string; label: string };
  footer: {
    rights: string;
    companyLine: string;
    registeredOffice: string;
    legal: { href: string; label: string }[];
    cookieSettings: string;
    bifa: string;
  };
  cookie: {
    aria: string; title: string; body: string;
    cookie: string; cookieHref: string; and: string; privacy: string; privacyHref: string; tail: string;
    prefs: string; reject: string; accept: string;
  };
  prefs: {
    title: string; close: string; intro: string;
    necessary: string; always: string; necessaryText: string;
    analytics: string; analyticsText: string; analyticsAria: string;
    marketing: string; marketingText: string; marketingAria: string;
    save: string; cancel: string;
  };
  form: {
    submit: string; sending: string; successTitle: string; successText: string; sendError: string;
    required: string; invalidEmail: string; consentRequired: string; whatsappInstead: string;
  };
};
