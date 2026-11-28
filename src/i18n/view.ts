import type { Locale } from "@/lib/locales";

/**
 * Texts of the content-page template (EnPageView) for the languages rendered with it.
 * TR pages use their own templates, so only the template languages are listed.
 */
export type ViewLocale = Extract<Locale, "en" | "pl" | "de">;

export type ViewStrings = {
  dateLocale: string;
  home: string;
  lastUpdated: string;
  atAGlance: string;
  thisPage: string;
  bestIf: string;
  byline: (date: string, mins: number) => string;
  readMins: string;
  whatsapp: string;
  whatsappLong: string;
  book: string;
  bookShort: string;
  ctaDefault: { h2: string; text: string };
  inlineIntro: string;
  trust: string[];
  preferTalk: string;
  or: string;
  messageWhatsapp: string;
  midPage: string;
  faq: string;
  related: string;
  heroAlt: string;
  defaultQuote: string;
  contact: {
    quoteTitle: string; quoteText: string;
    whatsappText: string;
    phoneTitle: string; phoneText: string;
    emailTitle: string; emailText: string;
    officeTitle: string; officeText: string;
    addressTitle: string; addressText: string;
  };
  sourceLabel: string;
};

export const VIEW: Record<ViewLocale, ViewStrings> = {
  en: {
    dateLocale: "en-GB",
    home: "Home",
    lastUpdated: "Last updated:",
    atAGlance: "At a glance",
    thisPage: "(this page)",
    bestIf: "Best if:",
    byline: () => "By Sertaç Yılmaz · Reviewed by Yusuf Barış, Operations Manager · Updated",
    readMins: "min read",
    whatsapp: "WhatsApp us",
    whatsappLong: "Message us on WhatsApp",
    book: "Book a 15-minute call",
    bookShort: "Book a 15-min call",
    ctaDefault: { h2: "Get a UK warehousing quote", text: "Tell us your product, volumes and channels and we will prepare a tailored quote." },
    inlineIntro: "Takes about two minutes. We reply by email with a tailored proposal.",
    trust: [
      "Warehouse at Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY",
      "Operated by Arca Trade Group Ltd (Company No. 13247691), BIFA member",
      "Storage from £3.50 + VAT per pallet per week",
      "English and Turkish spoken",
    ],
    preferTalk: "Prefer to talk first?",
    or: "or",
    messageWhatsapp: "message us on WhatsApp",
    midPage: "Tell us your product, volumes and channels. We will prepare a tailored proposal.",
    faq: "Frequently asked questions",
    related: "Related pages",
    heroAlt: "LondraDepo UK warehouse and fulfilment centre in Rayleigh, Essex",
    defaultQuote: "Request a UK Warehousing Quote",
    contact: {
      quoteTitle: "Request a quote online", quoteText: "Short form: service, product and volumes",
      whatsappText: "+44 7554 195190 · fastest response",
      phoneTitle: "Phone", phoneText: "+44 7554 195190 · English and Turkish",
      emailTitle: "Email", emailText: "support@londradepo.com · replies during UK office hours",
      officeTitle: "Arca Trade Group office", officeText: "+44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 UK time",
      addressTitle: "Warehouse address", addressText: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY · Open in Google Maps",
    },
    sourceLabel: "Source",
  },
  pl: {
    dateLocale: "pl-PL",
    home: "Strona główna",
    lastUpdated: "Ostatnia aktualizacja:",
    atAGlance: "W skrócie",
    thisPage: "(ta strona)",
    bestIf: "Najlepsze, gdy:",
    byline: () => "Autor: Sertaç Yılmaz · Weryfikacja: Yusuf Barış, Operations Manager · Aktualizacja",
    readMins: "min czytania",
    whatsapp: "Napisz na WhatsApp",
    whatsappLong: "Napisz do nas na WhatsApp",
    book: "Umów 15-minutową rozmowę",
    bookShort: "Umów rozmowę (15 min)",
    ctaDefault: { h2: "Poproś o wycenę magazynowania w Wielkiej Brytanii", text: "Opisz produkt, wolumeny i kanały sprzedaży, a przygotujemy ofertę dopasowaną do Twojej firmy." },
    inlineIntro: "Zajmuje około dwóch minut. Odpowiadamy e-mailem z ofertą dopasowaną do Twoich potrzeb.",
    trust: [
      "Magazyn: Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY",
      "Operator: Arca Trade Group Ltd (nr firmy 13247691), członek BIFA",
      "Składowanie od 3,50 £ + VAT za paletę tygodniowo",
      "Obsługa w języku angielskim i tureckim",
    ],
    preferTalk: "Wolisz najpierw porozmawiać?",
    or: "lub",
    messageWhatsapp: "napisz do nas na WhatsApp",
    midPage: "Opisz produkt, wolumeny i kanały sprzedaży. Przygotujemy ofertę dopasowaną do Twojej firmy.",
    faq: "Najczęściej zadawane pytania",
    related: "Powiązane strony",
    heroAlt: "Magazyn i centrum fulfillmentu LondraDepo w Rayleigh, Essex (Wielka Brytania)",
    defaultQuote: "Poproś o wycenę magazynowania",
    contact: {
      quoteTitle: "Zapytanie ofertowe online", quoteText: "Krótki formularz: usługa, produkt i wolumeny",
      whatsappText: "+44 7554 195190 · najszybsza odpowiedź",
      phoneTitle: "Telefon", phoneText: "+44 7554 195190 · po angielsku",
      emailTitle: "E-mail", emailText: "support@londradepo.com · odpowiadamy w godzinach pracy biura w UK",
      officeTitle: "Biuro Arca Trade Group", officeText: "+44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 czasu UK",
      addressTitle: "Adres magazynu", addressText: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY · Otwórz w Mapach Google",
    },
    sourceLabel: "Źródło",
  },
  de: {
    dateLocale: "de-DE",
    home: "Startseite",
    lastUpdated: "Zuletzt aktualisiert:",
    atAGlance: "Auf einen Blick",
    thisPage: "(diese Seite)",
    bestIf: "Ideal, wenn:",
    byline: () => "Autor: Sertaç Yılmaz · Geprüft von: Yusuf Barış, Operations Manager · Aktualisiert",
    readMins: "Min. Lesezeit",
    whatsapp: "Auf WhatsApp schreiben",
    whatsappLong: "Schreiben Sie uns auf WhatsApp",
    book: "15-minütiges Gespräch buchen",
    bookShort: "Gespräch buchen (15 Min.)",
    ctaDefault: { h2: "Angebot für Lagerung in Großbritannien anfordern", text: "Beschreiben Sie Produkt, Mengen und Vertriebskanäle, und wir erstellen ein auf Ihr Unternehmen zugeschnittenes Angebot." },
    inlineIntro: "Dauert etwa zwei Minuten. Wir antworten per E-Mail mit einem auf Sie zugeschnittenen Angebot.",
    trust: [
      "Lager: Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY",
      "Betreiber: Arca Trade Group Ltd (Company No. 13247691), BIFA-Mitglied",
      "Lagerung ab 3,50 £ zzgl. MwSt. pro Palette und Woche",
      "Betreut auf Englisch und Türkisch",
    ],
    preferTalk: "Lieber zuerst sprechen?",
    or: "oder",
    messageWhatsapp: "schreiben Sie uns auf WhatsApp",
    midPage: "Beschreiben Sie Produkt, Mengen und Vertriebskanäle. Wir erstellen ein auf Ihr Unternehmen zugeschnittenes Angebot.",
    faq: "Häufig gestellte Fragen",
    related: "Verwandte Seiten",
    heroAlt: "Lager und Fulfillment-Center von LondraDepo in Rayleigh, Essex (Vereinigtes Königreich)",
    defaultQuote: "Angebot für Lagerung anfordern",
    contact: {
      quoteTitle: "Angebot online anfordern", quoteText: "Kurzes Formular: Leistung, Produkt und Mengen",
      whatsappText: "+44 7554 195190 · schnellste Antwort",
      phoneTitle: "Telefon", phoneText: "+44 7554 195190 · auf Englisch",
      emailTitle: "E-Mail", emailText: "support@londradepo.com · Antwort während der britischen Bürozeiten",
      officeTitle: "Büro der Arca Trade Group", officeText: "+44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 Uhr britischer Zeit",
      addressTitle: "Lageradresse", addressText: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY · In Google Maps öffnen",
    },
    sourceLabel: "Quelle",
  },
};
