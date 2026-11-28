import type { ViewLocale } from "./view";

/**
 * Texts of the quote form (QuoteFormEn) per template language. Option values sent to Formspree stay in
 * English so every lead reads the same for the team; `opt` and `services` only change what the visitor sees.
 */
export type QuoteFormStrings = {
  select: string;
  optional: string;
  labels: { name: string; company: string; email: string; country: string; service: string; category: string; pallets: string; orders: string; phone: string; website: string; notes: string };
  notesPlaceholder: string;
  consentBefore: string;
  privacy: string;
  privacyHref: string;
  errors: { name: string; company: string; email: string; country: string; service: string; category: string; pallets: string; orders: string; consent: string };
  submit: string;
  sending: string;
  sendError: string;
  successTitle: string;
  successText: string;
  successTalk: (wa: string) => string;
  /** Display labels for English option values (countries, categories, bands). */
  opt: Record<string, string>;
  services: Record<string, string>;
};

export const QF: Record<ViewLocale, QuoteFormStrings> = {
  en: {
    select: "Select…",
    optional: "(optional)",
    labels: { name: "Full name *", company: "Business name *", email: "Business email *", country: "Country *", service: "Service needed *", category: "Product category *", pallets: "Estimated storage *", orders: "Monthly orders *", phone: "Phone / WhatsApp", website: "Website", notes: "Anything else we should know?" },
    notesPlaceholder: "e.g. container sizes, arrival port, SKUs, special handling",
    consentBefore: "I agree that LondraDepo (Arca Trade Group Ltd) may use these details to respond to my enquiry, as described in the",
    privacy: "Privacy Policy",
    privacyHref: "/en/privacy-policy",
    errors: {
      name: "Please enter your full name.", company: "Please enter your business name.", email: "Please enter a valid business email.",
      country: "Please select your country.", service: "Please select the service you need.", category: "Please select a product category.",
      pallets: "Please select an estimate.", orders: "Please select your monthly order volume.", consent: "Please confirm so we can contact you about your enquiry.",
    },
    submit: "Request my quote",
    sending: "Sending…",
    sendError: "Something went wrong. Please try again or message us on WhatsApp.",
    successTitle: "Thank you, your enquiry has been sent",
    successText: "Our warehouse team will review your requirements and contact you by email.",
    successTalk: () => "Need to talk sooner? Message us on WhatsApp or call +44 7554 195190.",
    opt: {},
    services: {},
  },
  pl: {
    select: "Wybierz…",
    optional: "(opcjonalnie)",
    labels: { name: "Imię i nazwisko *", company: "Nazwa firmy *", email: "Firmowy e-mail *", country: "Kraj *", service: "Potrzebna usługa *", category: "Kategoria produktów *", pallets: "Szacowany wolumen *", orders: "Zamówienia miesięcznie *", phone: "Telefon / WhatsApp", website: "Strona internetowa", notes: "Co jeszcze powinniśmy wiedzieć?" },
    notesPlaceholder: "np. rozmiar kontenerów, port docelowy, liczba SKU, specjalna obsługa",
    consentBefore: "Zgadzam się, aby LondraDepo (Arca Trade Group Ltd) wykorzystało te dane do odpowiedzi na moje zapytanie, zgodnie z",
    privacy: "Polityką prywatności",
    privacyHref: "/pl/polityka-prywatnosci",
    errors: {
      name: "Podaj imię i nazwisko.", company: "Podaj nazwę firmy.", email: "Podaj prawidłowy firmowy adres e-mail.",
      country: "Wybierz kraj.", service: "Wybierz potrzebną usługę.", category: "Wybierz kategorię produktów.",
      pallets: "Wybierz szacowany wolumen.", orders: "Wybierz miesięczną liczbę zamówień.", consent: "Potwierdź zgodę, abyśmy mogli odpowiedzieć na zapytanie.",
    },
    submit: "Poproś o wycenę",
    sending: "Wysyłanie…",
    sendError: "Coś poszło nie tak. Spróbuj ponownie lub napisz do nas na WhatsApp.",
    successTitle: "Dziękujemy, zapytanie zostało wysłane",
    successText: "Nasz zespół magazynowy przeanalizuje Twoje potrzeby i skontaktuje się e-mailem.",
    successTalk: () => "Chcesz porozmawiać wcześniej? Napisz na WhatsApp lub zadzwoń: +44 7554 195190.",
    opt: {
      "United Kingdom": "Wielka Brytania", Turkey: "Turcja", Netherlands: "Holandia", Germany: "Niemcy", France: "Francja", Italy: "Włochy",
      Spain: "Hiszpania", Poland: "Polska", Ireland: "Irlandia", "Other EU country": "Inny kraj UE", "United States": "Stany Zjednoczone",
      Canada: "Kanada", "United Arab Emirates": "Zjednoczone Emiraty Arabskie", "Saudi Arabia": "Arabia Saudyjska", China: "Chiny", India: "Indie", Other: "Inne",
      "Food & FMCG (ambient)": "Żywność i FMCG (temp. otoczenia)", "Packaging & catering supplies": "Opakowania i artykuły gastronomiczne",
      "Automotive & industrial parts": "Części motoryzacyjne i przemysłowe", "Textiles & apparel": "Tekstylia i odzież",
      "Homeware, furniture & bulky goods": "Dom, meble i towary wielkogabarytowe", Electronics: "Elektronika", "Health & beauty": "Zdrowie i uroda",
      "1–10 pallets": "1–10 palet", "11–50 pallets": "11–50 palet", "51–200 pallets": "51–200 palet", "200+ pallets": "200+ palet",
      "Cartons / parcels only": "Tylko kartony / paczki", "Not sure yet": "Jeszcze nie wiem", "Under 100": "Poniżej 100",
    },
    services: {
      storage: "Magazynowanie i składowanie palet",
      "container-unloading": "Rozładunek kontenerów i przyjęcie towaru",
      fulfilment: "Fulfillment e-commerce / kompletacja i pakowanie",
      "amazon-prep": "Amazon FBA prep",
      distribution: "Dystrybucja B2B / w Wielkiej Brytanii",
      repacking: "Przepakowanie, ponowne etykietowanie, obsługa",
      "freight-customs": "Transport i odprawa celna (Arca Trade Group)",
      other: "Inne / nie wiem",
    },
  },
  de: {
    select: "Bitte wählen…",
    optional: "(optional)",
    labels: { name: "Vor- und Nachname *", company: "Firmenname *", email: "Geschäftliche E-Mail *", country: "Land *", service: "Benötigte Leistung *", category: "Produktkategorie *", pallets: "Geschätzte Lagermenge *", orders: "Aufträge pro Monat *", phone: "Telefon / WhatsApp", website: "Website", notes: "Was sollten wir noch wissen?" },
    notesPlaceholder: "z. B. Containergröße, Ankunftshafen, Anzahl der SKUs, besonderes Handling",
    consentBefore: "Ich bin damit einverstanden, dass LondraDepo (Arca Trade Group Ltd) diese Angaben zur Beantwortung meiner Anfrage verwendet. Einzelheiten finden Sie in der",
    privacy: "Datenschutzerklärung",
    privacyHref: "/de/datenschutz",
    errors: {
      name: "Bitte geben Sie Ihren Vor- und Nachnamen ein.", company: "Bitte geben Sie Ihren Firmennamen ein.", email: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
      country: "Bitte wählen Sie Ihr Land.", service: "Bitte wählen Sie die benötigte Leistung.", category: "Bitte wählen Sie eine Produktkategorie.",
      pallets: "Bitte wählen Sie eine Schätzung.", orders: "Bitte wählen Sie Ihr monatliches Auftragsvolumen.", consent: "Bitte bestätigen Sie, damit wir Sie zu Ihrer Anfrage kontaktieren können.",
    },
    submit: "Angebot anfordern",
    sending: "Wird gesendet…",
    sendError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.",
    successTitle: "Vielen Dank, Ihre Anfrage wurde gesendet",
    successText: "Unser Lagerteam prüft Ihre Anforderungen und meldet sich per E-Mail bei Ihnen.",
    successTalk: () => "Möchten Sie früher sprechen? Schreiben Sie uns auf WhatsApp oder rufen Sie an: +44 7554 195190.",
    opt: {
      "United Kingdom": "Vereinigtes Königreich", Turkey: "Türkei", Netherlands: "Niederlande", Germany: "Deutschland", France: "Frankreich", Italy: "Italien",
      Spain: "Spanien", Poland: "Polen", Ireland: "Irland", "Other EU country": "Anderes EU-Land", "United States": "Vereinigte Staaten",
      Canada: "Kanada", "United Arab Emirates": "Vereinigte Arabische Emirate", "Saudi Arabia": "Saudi-Arabien", China: "China", India: "Indien", Other: "Sonstiges",
      "Food & FMCG (ambient)": "Lebensmittel und FMCG (Umgebungstemperatur)", "Packaging & catering supplies": "Verpackungen und Gastronomiebedarf",
      "Automotive & industrial parts": "Kfz- und Industrieteile", "Textiles & apparel": "Textilien und Bekleidung",
      "Homeware, furniture & bulky goods": "Haushaltswaren, Möbel und Sperrgut", Electronics: "Elektronik", "Health & beauty": "Gesundheit und Kosmetik",
      "1–10 pallets": "1–10 Paletten", "11–50 pallets": "11–50 Paletten", "51–200 pallets": "51–200 Paletten", "200+ pallets": "200+ Paletten",
      "Cartons / parcels only": "Nur Kartons / Pakete", "Not sure yet": "Noch unklar", "Under 100": "Unter 100",
    },
    services: {
      storage: "Lagerung und Palettenlagerung",
      "container-unloading": "Containerentladung und Wareneingang",
      fulfilment: "E-Commerce-Fulfillment / Kommissionierung und Verpackung",
      "amazon-prep": "Amazon FBA Prep",
      distribution: "B2B-Distribution / Distribution in Großbritannien",
      repacking: "Umverpacken, Umetikettieren, Handling",
      "freight-customs": "Transport und Zollabfertigung (Arca Trade Group)",
      other: "Sonstiges / noch unklar",
    },
  },
};
