import { LOCALES, LOCALE_ORDER, localeOf, type Locale } from "@/lib/locales";

/**
 * Equivalent pages across languages. Each set lists the same page in every language it exists in
 * (a new language adds its path to the sets it translates). Kept free of page content so client
 * components (language menu) stay small. `src/content/en/index.ts` checks at build time that every
 * English page matches this list.
 */
export type PageSet = Partial<Record<Locale, string>>;

export const PAGE_SETS: ReadonlyArray<PageSet> = [
  { tr: "/", en: "/en" },
  { tr: "/hakkimizda", en: "/en/about-us" },
  { tr: "/iletisim", en: "/en/contact" },
  { tr: "/ingiltere-depo-avantajlari", en: "/en/uk-warehousing-benefits" },
  { tr: "/ingiltere-depo-fiyatlari", en: "/en/uk-warehousing-pricing" },
  { tr: "/ingiltere-depo", en: "/en/uk-warehousing" },
  { tr: "/ingiltere-3pl", en: "/en/3pl-uk" },
  // Same question, audience-appropriate angle: selling into the UK (TR exporters) ↔ entering the UK market.
  { tr: "/turkiyeden-ingiltereye-satis", en: "/en/uk-market-entry" },
  // Same process from both ends: exporting from Turkey to the UK ↔ importing goods into the UK.
  { tr: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", en: "/en/blog/uk-importing-guide" },
  { tr: "/londra-depo", en: "/en/london-warehousing" },
  { tr: "/ingiltere-e-ticaret-lojistigi", en: "/en/uk-ecommerce-logistics" },
  { tr: "/siparis-toplama-paketleme", en: "/en/pick-and-pack" },
  { tr: "/shopify-ingiltere-depo", en: "/en/shopify-fulfilment-uk" },
  { tr: "/amazon-ingiltere-depo", en: "/en/amazon-seller-warehousing-uk" },
  { tr: "/ingiltere-fulfillment", en: "/en/uk-fulfilment" },
  { tr: "/palet-depolama", en: "/en/pallet-storage" },
  { tr: "/amazon-prep-uk", en: "/en/amazon-prep-uk" },
  { tr: "/depolama", en: "/en/storage-services" },
  { tr: "/gumrukleme", en: "/en/uk-customs-clearance" },
  { tr: "/ellecleme", en: "/en/cargo-handling" },
  { tr: "/nakliye-dagitim", en: "/en/uk-distribution" },
  { tr: "/e-ticaret-fulfillment", en: "/en/ecommerce-fulfilment" },
  { tr: "/amazon-fulfillment", en: "/en/amazon-fulfilment-uk" },
  { tr: "/essex-depo", en: "/en/essex-warehouse" },
  { tr: "/case-studies/cruyff-uk-fulfillment", en: "/en/case-studies/cruyff-uk-fulfilment" },
  { tr: "/case-studies/pizza-box-distribution-uk", en: "/en/case-studies/pizza-box-distribution-uk" },
  { tr: "/case-studies/tortilla-uk-distribution", en: "/en/case-studies/tortilla-uk-distribution" },
  { tr: "/case-studies/uk-auto-parts-warehouse", en: "/en/case-studies/uk-auto-parts-warehouse" },
  { tr: "/case-studies/uk-walking-treadmill-distribution", en: "/en/case-studies/uk-walking-treadmill-distribution" },
  { tr: "/case-studies/arac-koltuk-kaplama-ingiltere-depo", en: "/en/case-studies/car-seat-cover-uk-warehousing" },
  { tr: "/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu", en: "/en/case-studies/portable-power-station-uk-operations" },
  { tr: "/case-studies", en: "/en/case-studies" },
  { tr: "/blog/ingiltere-depo-rehberi", en: "/en/blog/uk-warehousing-guide" },
  { tr: "/blog/ingiltere-fulfillment-nedir", en: "/en/blog/what-is-uk-fulfilment" },
  { tr: "/blog/amazon-prep-uk-rehberi", en: "/en/blog/amazon-prep-uk-guide" },
  { tr: "/blog/ingiltere-ara-depo-nedir", en: "/en/blog/what-is-a-uk-transit-warehouse" },
  { tr: "/blog/ingiltere-depo-fiyatlari-2026", en: "/en/blog/uk-warehousing-prices-2026" },
  { tr: "/blog/ingiltere-palet-depolama-maliyetleri", en: "/en/blog/uk-pallet-storage-costs" },
  { tr: "/blog/amazon-fba-vs-uk-fulfillment", en: "/en/blog/amazon-fba-vs-uk-fulfilment" },
  { tr: "/blog", en: "/en/blog" },
  { tr: "/privacy-policy", en: "/en/privacy-policy" },
  { tr: "/cookie-policy", en: "/en/cookie-policy" },
  { tr: "/sozlesme-kosullari", en: "/en/terms-and-conditions" },
  { tr: "/turk-sirketleri-icin-ingiltere-depo", en: "/en/uk-warehousing-for-turkish-exporters" },
  { tr: "/ingiltere-depo-maliyet-hesaplama", en: "/en/uk-storage-cost-calculator" },
  { tr: "/konteyner-varis-planlayici", en: "/en/container-arrival-planner" },
  { tr: "/london-gateway-tilbury-depo", en: "/en/london-gateway-tilbury-warehousing" },
  { tr: "/felixstowe-liman-depo", en: "/en/felixstowe-port-warehousing" },
  { tr: "/amazon-ingiltere-depo-konumlari", en: "/en/amazon-uk-fulfilment-centres" },
  { tr: "/blog/antrepo-nedir", en: "/en/blog/bonded-warehouse-vs-duty-paid-storage" },
  { tr: "/blog/incoterms-rehberi", en: "/en/blog/incoterms-for-uk-imports" },
  { tr: "/cbm-palet-hesaplama", en: "/en/cbm-pallet-calculator" },
  { tr: "/konteyner-tipleri", en: "/en/shipping-container-types" },
  { tr: "/blog/amazon-private-label-toptan", en: "/en/blog/amazon-private-label-wholesale-uk" },
  { tr: "/blog/ithalat-belgeleri", en: "/en/blog/uk-import-documents" },
  { tr: "/konteyner-bosaltma", en: "/en/container-unloading" },
  { tr: "/otomotiv-yedek-parca-depolama", en: "/en/industries/automotive-parts" },
  { tr: "/sektorler", en: "/en/industries" },
  { tr: "/teklif-al", en: "/en/request-a-quote" },
  { tr: "/ingiltere-ithalat-lojistigi", en: "/en/uk-import-logistics" },
  { tr: "/limandan-depoya-lojistik", en: "/en/locations/port-to-warehouse-logistics" },
  { tr: "/ambalaj-catering-depolama", en: "/en/industries/food-packaging" },
  { tr: "/blog/ingiltere-3pl-nasil-secilir", en: "/en/blog/how-to-choose-a-uk-3pl" },
  { tr: "/blog/ingiltere-ithalat-maliyetleri", en: "/en/blog/uk-import-costs" },
  { tr: "/blog/amazon-fba-prep-kontrol-listesi", en: "/en/blog/amazon-fba-prep-checklist" },
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
