import { LOCALES, LOCALE_ORDER, localeOf, type Locale } from "@/lib/locales";

/**
 * Equivalent pages across languages. Each set lists the same page in every language it exists in
 * (a new language adds its path to the sets it translates). Kept free of page content so client
 * components (language menu) stay small. `src/content/en/index.ts` checks at build time that every
 * English page matches this list.
 */
export type PageSet = Partial<Record<Locale, string>>;

export const PAGE_SETS: ReadonlyArray<PageSet> = [
  // Quote pages (standalone routes; the TR quote page has no exact counterpart).
  { tr: "/", en: "/en", pl: "/pl" },
  { tr: "/hakkimizda", en: "/en/about-us", pl: "/pl/o-nas" },
  { tr: "/iletisim", en: "/en/contact", pl: "/pl/kontakt" },
  { tr: "/ingiltere-depo-avantajlari", en: "/en/uk-warehousing-benefits", pl: "/pl/zalety-magazynu-w-uk" },
  { tr: "/ingiltere-depo-fiyatlari", en: "/en/uk-warehousing-pricing", pl: "/pl/cennik-magazynowania" },
  { tr: "/ingiltere-depo", en: "/en/uk-warehousing", pl: "/pl/magazyn-w-wielkiej-brytanii" },
  { tr: "/ingiltere-3pl", en: "/en/3pl-uk", pl: "/pl/3pl-wielka-brytania" },
  { tr: "/ingiltere-stoktan-planli-teslimat", en: "/en/call-off-stock-uk", pl: "/pl/zapasy-buforowe-i-dostawy-uk" },
  { tr: "/ingiltereye-toplu-gonderim-ve-dagitim", en: "/en/bulk-shipping-uk-distribution", pl: "/pl/wysylka-zbiorcza-i-dystrybucja-uk" },
  { tr: "/ingiltere-numune-dagitimi", en: "/en/uk-sample-distribution", pl: "/pl/dystrybucja-probek-uk" },
  { tr: "/kurumsal-hediye-ve-promosyon-dagitimi", en: "/en/corporate-gift-fulfilment-uk", pl: "/pl/fulfillment-prezentow-firmowych-uk" },
  // Same question, audience-appropriate angle: selling into the UK (TR exporters) ↔ entering the UK market.
  { tr: "/turkiyeden-ingiltereye-satis", en: "/en/uk-market-entry", pl: "/pl/wejscie-na-rynek-brytyjski" },
  // Same process from both ends: exporting from Turkey to the UK ↔ importing goods into the UK.
  { tr: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", en: "/en/blog/uk-importing-guide", pl: "/pl/blog/import-do-uk-przewodnik" },
  { tr: "/londra-depo", en: "/en/london-warehousing", pl: "/pl/magazyn-londyn" },
  { tr: "/ingiltere-e-ticaret-lojistigi", en: "/en/uk-ecommerce-logistics", pl: "/pl/logistyka-ecommerce-uk" },
  { tr: "/siparis-toplama-paketleme", en: "/en/pick-and-pack", pl: "/pl/pick-and-pack" },
  { tr: "/shopify-ingiltere-depo", en: "/en/shopify-fulfilment-uk", pl: "/pl/fulfillment-shopify-uk" },
  { tr: "/amazon-ingiltere-depo", en: "/en/amazon-seller-warehousing-uk", pl: "/pl/magazyn-dla-sprzedawcow-amazon" },
  { tr: "/ingiltere-fulfillment", en: "/en/uk-fulfilment", pl: "/pl/fulfillment-wielka-brytania" },
  { tr: "/palet-depolama", en: "/en/pallet-storage", pl: "/pl/skladowanie-palet" },
  { tr: "/amazon-prep-uk", en: "/en/amazon-prep-uk", pl: "/pl/amazon-fba-prep" },
  { tr: "/depolama", en: "/en/storage-services", pl: "/pl/uslugi-magazynowe" },
  { tr: "/gumrukleme", en: "/en/uk-customs-clearance", pl: "/pl/odprawa-celna-uk" },
  { tr: "/ellecleme", en: "/en/cargo-handling", pl: "/pl/obsluga-ladunkow" },
  { tr: "/nakliye-dagitim", en: "/en/uk-distribution", pl: "/pl/dystrybucja-uk" },
  { tr: "/e-ticaret-fulfillment", en: "/en/ecommerce-fulfilment", pl: "/pl/fulfillment-ecommerce" },
  { tr: "/amazon-fulfillment", en: "/en/amazon-fulfilment-uk", pl: "/pl/fulfillment-amazon-uk" },
  { tr: "/essex-depo", en: "/en/essex-warehouse", pl: "/pl/magazyn-essex" },
  { tr: "/case-studies/cruyff-uk-fulfillment", en: "/en/case-studies/cruyff-uk-fulfilment", pl: "/pl/studia-przypadkow/cruyff-fulfillment-uk" },
  { tr: "/case-studies/pizza-box-distribution-uk", en: "/en/case-studies/pizza-box-distribution-uk", pl: "/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze" },
  { tr: "/case-studies/tortilla-uk-distribution", en: "/en/case-studies/tortilla-uk-distribution", pl: "/pl/studia-przypadkow/dystrybucja-tortilli-uk" },
  { tr: "/case-studies/uk-auto-parts-warehouse", en: "/en/case-studies/uk-auto-parts-warehouse", pl: "/pl/studia-przypadkow/magazyn-czesci-samochodowych" },
  { tr: "/case-studies/uk-walking-treadmill-distribution", en: "/en/case-studies/uk-walking-treadmill-distribution", pl: "/pl/studia-przypadkow/dystrybucja-biezni-uk" },
  { tr: "/case-studies/arac-koltuk-kaplama-ingiltere-depo", en: "/en/case-studies/car-seat-cover-uk-warehousing", pl: "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych" },
  { tr: "/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu", en: "/en/case-studies/portable-power-station-uk-operations", pl: "/pl/studia-przypadkow/stacje-zasilania-uk" },
  { tr: "/case-studies", en: "/en/case-studies", pl: "/pl/studia-przypadkow" },
  { tr: "/blog/ingiltere-depo-rehberi", en: "/en/blog/uk-warehousing-guide", pl: "/pl/blog/przewodnik-magazynowanie-uk" },
  { tr: "/blog/ingiltere-fulfillment-nedir", en: "/en/blog/what-is-uk-fulfilment", pl: "/pl/blog/czym-jest-fulfillment-w-uk" },
  { tr: "/blog/amazon-prep-uk-rehberi", en: "/en/blog/amazon-prep-uk-guide", pl: "/pl/blog/amazon-prep-uk-przewodnik" },
  { tr: "/blog/ingiltere-ara-depo-nedir", en: "/en/blog/what-is-a-uk-transit-warehouse", pl: "/pl/blog/magazyn-tranzytowy-w-uk" },
  { tr: "/blog/ingiltere-depo-fiyatlari-2026", en: "/en/blog/uk-warehousing-prices-2026", pl: "/pl/blog/ceny-magazynowania-uk-2026" },
  { tr: "/blog/ingiltere-palet-depolama-maliyetleri", en: "/en/blog/uk-pallet-storage-costs", pl: "/pl/blog/koszty-skladowania-palet-uk" },
  { tr: "/blog/amazon-fba-vs-uk-fulfillment", en: "/en/blog/amazon-fba-vs-uk-fulfilment", pl: "/pl/blog/amazon-fba-czy-fulfillment-uk" },
  { tr: "/blog", en: "/en/blog", pl: "/pl/blog" },
  { tr: "/privacy-policy", en: "/en/privacy-policy", pl: "/pl/polityka-prywatnosci" },
  { tr: "/cookie-policy", en: "/en/cookie-policy", pl: "/pl/polityka-cookies" },
  { tr: "/sozlesme-kosullari", en: "/en/terms-and-conditions", pl: "/pl/regulamin" },
  { tr: "/turk-sirketleri-icin-ingiltere-depo", en: "/en/uk-warehousing-for-turkish-exporters" },
  { tr: "/ingiltere-depo-maliyet-hesaplama", en: "/en/uk-storage-cost-calculator" },
  { tr: "/konteyner-varis-planlayici", en: "/en/container-arrival-planner" },
  { tr: "/london-gateway-tilbury-depo", en: "/en/london-gateway-tilbury-warehousing", pl: "/pl/magazyn-london-gateway-tilbury" },
  { tr: "/felixstowe-liman-depo", en: "/en/felixstowe-port-warehousing", pl: "/pl/magazyn-port-felixstowe" },
  { tr: "/amazon-ingiltere-depo-konumlari", en: "/en/amazon-uk-fulfilment-centres", pl: "/pl/centra-amazon-w-uk" },
  { tr: "/blog/antrepo-nedir", en: "/en/blog/bonded-warehouse-vs-duty-paid-storage", pl: "/pl/blog/sklad-celny-czy-towar-oclony" },
  { tr: "/blog/incoterms-rehberi", en: "/en/blog/incoterms-for-uk-imports", pl: "/pl/blog/incoterms-import-do-uk" },
  { tr: "/cbm-palet-hesaplama", en: "/en/cbm-pallet-calculator" },
  { tr: "/konteyner-tipleri", en: "/en/shipping-container-types", pl: "/pl/rodzaje-kontenerow" },
  { tr: "/blog/amazon-private-label-toptan", en: "/en/blog/amazon-private-label-wholesale-uk", pl: "/pl/blog/amazon-private-label-i-wholesale-uk" },
  { tr: "/blog/ithalat-belgeleri", en: "/en/blog/uk-import-documents", pl: "/pl/blog/dokumenty-importowe-uk" },
  { tr: "/konteyner-bosaltma", en: "/en/container-unloading", pl: "/pl/rozladunek-kontenerow" },
  { tr: "/otomotiv-yedek-parca-depolama", en: "/en/industries/automotive-parts", pl: "/pl/branze/czesci-samochodowe" },
  { tr: "/sektorler", en: "/en/industries", pl: "/pl/branze" },
  { tr: "/teklif-al", en: "/en/request-a-quote", pl: "/pl/zapytanie-ofertowe" },
  { tr: "/ingiltere-ithalat-lojistigi", en: "/en/uk-import-logistics", pl: "/pl/import-do-wielkiej-brytanii" },
  { tr: "/limandan-depoya-lojistik", en: "/en/locations/port-to-warehouse-logistics", pl: "/pl/lokalizacje/logistyka-port-magazyn" },
  { tr: "/ambalaj-catering-depolama", en: "/en/industries/food-packaging", pl: "/pl/branze/zywnosc-i-opakowania" },
  { tr: "/blog/ingiltere-3pl-nasil-secilir", en: "/en/blog/how-to-choose-a-uk-3pl", pl: "/pl/blog/jak-wybrac-3pl-w-uk" },
  { tr: "/blog/ingiltere-ithalat-maliyetleri", en: "/en/blog/uk-import-costs", pl: "/pl/blog/koszty-importu-do-uk" },
  { tr: "/blog/amazon-fba-prep-kontrol-listesi", en: "/en/blog/amazon-fba-prep-checklist", pl: "/pl/blog/lista-kontrolna-amazon-fba-prep" },
];

/** TR ↔ EN pairs (both present), for code that only deals with the two original languages. */
export const PAIRS: ReadonlyArray<readonly [tr: string, en: string]> = PAGE_SETS.filter((s) => s.tr && s.en).map((s) => [s.tr as string, s.en as string] as const);
export const TR_TO_EN = new Map(PAIRS.map(([tr, en]) => [tr, en]));
export const EN_TO_TR = new Map(PAIRS.map(([tr, en]) => [en, tr]));

const BY_PATH = new Map<string, PageSet>();
for (const set of PAGE_SETS) for (const path of Object.values(set)) if (path) BY_PATH.set(path, set);

/** Every language version of a page; a page without a set only has its own language. */
export function pageSet(path: string): PageSet {
  return BY_PATH.get(path) ?? { [localeOf(path)]: path };
}

/** Language menu entries for a page: its counterpart in each other language, or that language's home page. */
export function languageTargets(path: string): { locale: Locale; href: string; exact: boolean }[] {
  const set = pageSet(path);
  const here = localeOf(path);
  return LOCALE_ORDER.filter((l) => l !== here).map((l) => ({ locale: l, href: set[l] ?? LOCALES[l].home, exact: Boolean(set[l]) }));
}

/** Where the two-language switch sends a visitor (first other language). */
export function switchTarget(path: string): { href: string; lang: Locale } {
  const t = languageTargets(path)[0];
  return { href: t.href, lang: t.locale };
}
