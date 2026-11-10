/**
 * TR -> EN URL pairs (1:1). Kept free of page content so client components
 * (language switcher) stay small. `src/content/en/index.ts` checks at build time
 * that every English page matches this list.
 */
export const PAIRS: ReadonlyArray<readonly [tr: string, en: string]> = [
  ["/", "/en"],
  ["/hakkimizda", "/en/about-us"],
  ["/iletisim", "/en/contact"],
  ["/ingiltere-depo-avantajlari", "/en/uk-warehousing-benefits"],
  ["/ingiltere-depo-fiyatlari", "/en/uk-warehousing-pricing"],
  ["/ingiltere-depo", "/en/uk-warehousing"],
  ["/londra-depo", "/en/london-warehousing"],
  ["/ingiltere-e-ticaret-lojistigi", "/en/uk-ecommerce-logistics"],
  ["/siparis-toplama-paketleme", "/en/pick-and-pack"],
  ["/shopify-ingiltere-depo", "/en/shopify-fulfilment-uk"],
  ["/amazon-ingiltere-depo", "/en/amazon-seller-warehousing-uk"],
  ["/ingiltere-fulfillment", "/en/uk-fulfilment"],
  ["/palet-depolama", "/en/pallet-storage"],
  ["/amazon-prep-uk", "/en/amazon-prep-uk"],
  ["/depolama", "/en/storage-services"],
  ["/gumrukleme", "/en/uk-customs-clearance"],
  ["/ellecleme", "/en/cargo-handling"],
  ["/nakliye-dagitim", "/en/uk-distribution"],
  ["/e-ticaret-fulfillment", "/en/ecommerce-fulfilment"],
  ["/amazon-fulfillment", "/en/amazon-fulfilment-uk"],
  ["/essex-depo", "/en/essex-warehouse"],
  ["/case-studies/cruyff-uk-fulfillment", "/en/case-studies/cruyff-uk-fulfilment"],
  ["/case-studies/pizza-box-distribution-uk", "/en/case-studies/pizza-box-distribution-uk"],
  ["/case-studies/tortilla-uk-distribution", "/en/case-studies/tortilla-uk-distribution"],
  ["/case-studies/uk-auto-parts-warehouse", "/en/case-studies/uk-auto-parts-warehouse"],
  ["/case-studies/uk-walking-treadmill-distribution", "/en/case-studies/uk-walking-treadmill-distribution"],
  ["/case-studies/arac-koltuk-kaplama-ingiltere-depo", "/en/case-studies/car-seat-cover-uk-warehousing"],
  ["/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu", "/en/case-studies/portable-power-station-uk-operations"],
  ["/case-studies", "/en/case-studies"],
  ["/blog/ingiltere-depo-rehberi", "/en/blog/uk-warehousing-guide"],
  ["/blog/ingiltere-fulfillment-nedir", "/en/blog/what-is-uk-fulfilment"],
  ["/blog/amazon-prep-uk-rehberi", "/en/blog/amazon-prep-uk-guide"],
  ["/blog/ingiltere-ara-depo-nedir", "/en/blog/what-is-a-uk-transit-warehouse"],
  ["/blog/ingiltere-depo-fiyatlari-2026", "/en/blog/uk-warehousing-prices-2026"],
  ["/blog/ingiltere-palet-depolama-maliyetleri", "/en/blog/uk-pallet-storage-costs"],
  ["/blog/amazon-fba-vs-uk-fulfillment", "/en/blog/amazon-fba-vs-uk-fulfilment"],
  ["/blog", "/en/blog"],
  ["/privacy-policy", "/en/privacy-policy"],
  ["/cookie-policy", "/en/cookie-policy"],
  ["/sozlesme-kosullari", "/en/terms-and-conditions"],
  ["/turk-sirketleri-icin-ingiltere-depo", "/en/uk-warehousing-for-turkish-exporters"],
];

export const TR_TO_EN = new Map(PAIRS.map(([tr, en]) => [tr, en]));
export const EN_TO_TR = new Map(PAIRS.map(([tr, en]) => [en, tr]));

/** Where the language switcher should send a visitor from the given path. */
export function switchTarget(path: string): { href: string; lang: "tr" | "en" } {
  if (path === "/en" || path.startsWith("/en/")) return { href: EN_TO_TR.get(path) ?? "/", lang: "tr" };
  return { href: TR_TO_EN.get(path) ?? "/en", lang: "en" };
}
