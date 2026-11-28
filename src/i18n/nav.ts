import type { ViewLocale } from "./view";

/** Header and footer navigation for the template languages (EN, PL). Paths must exist in that language. */
export type NavConfig = {
  home: string;
  header: { href: string; label: string }[];
  menu: { open: string; close: string };
  footer: {
    intro: string;
    address: string;
    headings: { services: string; company: string; guides: string; contact: string; otherLanguages: string };
    services: [string, string][];
    company: [string, string][];
    guides: [string, string][];
    contactText: string;
    whatsappCta: string;
    office: string;
    legalIntro: string;
  };
};

export const NAV: Record<ViewLocale, NavConfig> = {
  en: {
    home: "/en",
    header: [
      { href: "/en/uk-warehousing", label: "Warehousing" },
      { href: "/en/uk-import-logistics", label: "Import" },
      { href: "/en/london-warehousing", label: "London" },
      { href: "/en/uk-warehousing-pricing", label: "Pricing" },
      { href: "/en/ecommerce-fulfilment", label: "Fulfilment" },
      { href: "/en/amazon-prep-uk", label: "Amazon" },
      { href: "/en/case-studies", label: "Cases" },
      { href: "/en/contact", label: "Contact" },
    ],
    menu: { open: "Open menu", close: "Close menu" },
    footer: {
      intro: "UK warehousing, fulfilment and distribution from Rayleigh, Essex, near London. Operated by Arca Trade Group, which also provides international freight and customs clearance.",
      address: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom",
      headings: { services: "Services", company: "Company", guides: "Guides and tools", contact: "Contact", otherLanguages: "Other languages" },
      services: [
        ["/en/uk-warehousing", "UK Warehousing"],
        ["/en/3pl-uk", "3PL Warehouse UK"],
        ["/en/uk-import-logistics", "UK Import Logistics"],
        ["/en/container-unloading", "Container Unloading"],
        ["/en/london-warehousing", "London Warehousing"],
        ["/en/pallet-storage", "Pallet Storage"],
        ["/en/storage-services", "Storage Services"],
        ["/en/uk-fulfilment", "UK Fulfilment"],
        ["/en/ecommerce-fulfilment", "Ecommerce Fulfilment"],
        ["/en/uk-ecommerce-logistics", "UK Ecommerce Logistics"],
        ["/en/pick-and-pack", "Pick and Pack"],
        ["/en/shopify-fulfilment-uk", "Shopify Fulfilment UK"],
        ["/en/amazon-fulfilment-uk", "Amazon Fulfilment UK"],
        ["/en/amazon-seller-warehousing-uk", "Amazon FBM Warehousing"],
        ["/en/amazon-prep-uk", "Amazon Prep UK"],
        ["/en/amazon-uk-fulfilment-centres", "Amazon UK Fulfilment Centres"],
        ["/en/uk-customs-clearance", "Customs Clearance Support"],
        ["/en/cargo-handling", "Cargo Handling"],
        ["/en/uk-distribution", "UK Distribution"],
        ["/en/call-off-stock-uk", "Call-Off Stock UK"],
        ["/en/bulk-shipping-uk-distribution", "Bulk Shipping & UK Distribution"],
        ["/en/uk-sample-distribution", "UK Sample Distribution"],
        ["/en/corporate-gift-fulfilment-uk", "Corporate Gift Fulfilment"],
        ["/en/uk-warehouse-partner-for-freight-forwarders", "Partner for Freight Forwarders"],
      ],
      company: [
        ["/en/about-us", "About Us"],
        ["/en/essex-warehouse", "Essex Warehouse"],
        ["/en/uk-market-entry", "UK Market Entry"],
        ["/en/industries", "Industries"],
        ["/en/industries/food-packaging", "Packaging & Catering Supplies"],
        ["/en/industries/automotive-parts", "Automotive Parts"],
        ["/en/uk-warehousing-for-turkish-exporters", "For Turkish Exporters"],
        ["/en/locations/port-to-warehouse-logistics", "Port-to-Warehouse Logistics"],
        ["/en/london-gateway-tilbury-warehousing", "London Gateway & Tilbury"],
        ["/en/felixstowe-port-warehousing", "Felixstowe Port Warehousing"],
        ["/en/uk-warehousing-benefits", "Why a UK Warehouse"],
        ["/en/uk-warehousing-pricing", "Pricing"],
        ["/en/container-arrival-planner", "Container Arrival Planner"],
        ["/en/case-studies", "Case Studies"],
        ["/en/blog", "Guides"],
        ["/en/contact", "Contact"],
        ["/en/request-a-quote", "Request a Quote"],
      ],
      guides: [
        ["/en/blog/uk-warehousing-guide", "UK warehousing guide"],
        ["/en/blog/how-to-choose-a-uk-3pl", "How to choose a UK 3PL"],
        ["/en/blog/uk-warehousing-prices-2026", "UK warehousing prices 2026"],
        ["/en/blog/uk-import-costs", "UK import costs"],
        ["/en/blog/what-is-uk-fulfilment", "What is UK fulfilment?"],
        ["/en/blog/amazon-prep-uk-guide", "Amazon prep guide"],
        ["/en/uk-storage-cost-calculator", "Storage cost calculator"],
        ["/en/cbm-pallet-calculator", "CBM and pallet calculator"],
        ["/en/shipping-container-types", "Shipping container types"],
      ],
      contactText: "Reach our UK operations team on WhatsApp, by phone or by email. English and Turkish spoken.",
      whatsappCta: "Get a Quote on WhatsApp",
      office: "Office: +44 1268 203 283 · 07:45–17:30 UK time",
      legalIntro: "LondraDepo.com. UK warehousing and fulfilment.",
    },
  },
  pl: {
    home: "/pl",
    header: [
      { href: "/pl/magazyn-w-wielkiej-brytanii", label: "Magazyn" },
      { href: "/pl/3pl-wielka-brytania", label: "3PL" },
      { href: "/pl/fulfillment-ecommerce", label: "Fulfillment" },
      { href: "/pl/amazon-fba-prep", label: "Amazon" },
      { href: "/pl/cennik-magazynowania", label: "Cennik" },
      { href: "/pl/magazyn-dla-polskich-firm", label: "Dla firm z Polski" },
      { href: "/pl/blog", label: "Blog" },
      { href: "/pl/kontakt", label: "Kontakt" },
    ],
    menu: { open: "Otwórz menu", close: "Zamknij menu" },
    footer: {
      intro: "Magazynowanie, fulfillment i dystrybucja w Wielkiej Brytanii z Rayleigh w hrabstwie Essex, niedaleko Londynu. Operatorem jest Arca Trade Group, która zapewnia też transport międzynarodowy i odprawę celną.",
      address: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, Wielka Brytania",
      headings: { services: "Usługi", company: "Firma", guides: "Przydatne strony", contact: "Kontakt", otherLanguages: "Inne języki" },
      services: [
        ["/pl/magazyn-w-wielkiej-brytanii", "Magazyn w Wielkiej Brytanii"],
        ["/pl/3pl-wielka-brytania", "Magazyn 3PL w Wielkiej Brytanii"],
        ["/pl/skladowanie-palet", "Składowanie palet"],
        ["/pl/fulfillment-ecommerce", "Fulfillment e-commerce"],
        ["/pl/amazon-fba-prep", "Amazon FBA prep"],
        ["/pl/import-do-wielkiej-brytanii", "Import do Wielkiej Brytanii"],
        ["/pl/rozladunek-kontenerow", "Rozładunek kontenerów"],
        ["/pl/dystrybucja-uk", "Dystrybucja w UK"],
        ["/pl/zapasy-buforowe-i-dostawy-uk", "Zapas buforowy i dostawy"],
        ["/pl/wysylka-zbiorcza-i-dystrybucja-uk", "Wysyłka zbiorcza i dystrybucja"],
        ["/pl/dystrybucja-probek-uk", "Dystrybucja próbek"],
        ["/pl/partner-magazynowy-dla-spedytorow-uk", "Dla spedytorów"],
        ["/pl/odprawa-celna-uk", "Odprawa celna w UK"],
      ],
      company: [
        ["/pl/o-nas", "O nas"],
        ["/pl/magazyn-dla-polskich-firm", "Dla firm z Polski"],
        ["/pl/cennik-magazynowania", "Cennik"],
        ["/pl/kontakt", "Kontakt"],
        ["/pl/zapytanie-ofertowe", "Zapytanie ofertowe"],
      ],
      guides: [
        ["/pl/blog", "Blog i poradniki"],
        ["/pl/studia-przypadkow", "Studia przypadków"],
        ["/pl/branze", "Branże"],
        ["/pl/blog/jak-wybrac-3pl-w-uk", "Jak wybrać 3PL w UK"],
        ["/pl/blog/ceny-magazynowania-uk-2026", "Ceny magazynowania w UK"],
      ],
      contactText: "Skontaktuj się z naszym zespołem w Wielkiej Brytanii przez WhatsApp, telefonicznie lub e-mailem. Obsługa w języku angielskim i tureckim.",
      whatsappCta: "Wycena przez WhatsApp",
      office: "Biuro: +44 1268 203 283 · 07:45–17:30 czasu UK",
      legalIntro: "LondraDepo.com. Magazynowanie i fulfillment w Wielkiej Brytanii.",
    },
  },
  de: {
    home: "/de",
    header: [
      { href: "/de/lager-in-grossbritannien", label: "Lager" },
      { href: "/de/3pl-logistik-grossbritannien", label: "3PL" },
      { href: "/de/fulfillment-grossbritannien", label: "Fulfillment" },
      { href: "/de/amazon-fba-prep-uk", label: "Amazon" },
      { href: "/de/lagerkosten-grossbritannien", label: "Preise" },
      { href: "/de/lager-fuer-deutsche-unternehmen", label: "Für DE-Firmen" },
      { href: "/de/kontakt", label: "Kontakt" },
    ],
    menu: { open: "Menü öffnen", close: "Menü schließen" },
    footer: {
      intro: "Lagerung, Fulfillment und Distribution in Großbritannien von Rayleigh in Essex aus, nahe London. Betreiber ist die Arca Trade Group, die auch internationale Transporte und die Zollabfertigung übernimmt.",
      address: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, Vereinigtes Königreich",
      headings: { services: "Leistungen", company: "Unternehmen", guides: "Nützliche Seiten", contact: "Kontakt", otherLanguages: "Weitere Sprachen" },
      services: [
        ["/de/lager-in-grossbritannien", "Lager in Großbritannien"],
        ["/de/3pl-logistik-grossbritannien", "3PL-Logistik in Großbritannien"],
        ["/de/palettenlager-england", "Palettenlager in England"],
        ["/de/fulfillment-grossbritannien", "Fulfillment in Großbritannien"],
        ["/de/amazon-fba-prep-uk", "Amazon FBA Prep"],
        ["/de/import-nach-grossbritannien", "Import nach Großbritannien"],
        ["/de/konsignationslager-abruflieferung-uk", "Abruflager und Abruflieferung"],
        ["/de/sammelversand-und-distribution-uk", "Sammelversand und Distribution"],
      ],
      company: [
        ["/de/lager-fuer-deutsche-unternehmen", "Für deutsche Unternehmen"],
        ["/de/lagerkosten-grossbritannien", "Preise"],
        ["/de/kontakt", "Kontakt"],
        ["/de/angebot-anfordern", "Angebot anfordern"],
      ],
      guides: [
        ["/de/lagerpartner-fuer-spediteure-uk", "Lagerpartner für Spediteure"],
        ["/de/sammelversand-und-distribution-uk", "Sammelversand in Großbritannien"],
        ["/de/konsignationslager-abruflieferung-uk", "Pufferlager für Abrufe"],
        ["/de/lagerkosten-grossbritannien", "Lagerkosten in Großbritannien"],
      ],
      contactText: "Erreichen Sie unser Team in Großbritannien per WhatsApp, Telefon oder E-Mail. Betreut auf Englisch und Türkisch; Anfragen können Sie auf Deutsch oder Englisch schreiben.",
      whatsappCta: "Angebot per WhatsApp",
      office: "Büro: +44 1268 203 283 · 07:45–17:30 Uhr britischer Zeit",
      legalIntro: "LondraDepo.com. Lagerung und Fulfillment in Großbritannien.",
    },
  },
};
