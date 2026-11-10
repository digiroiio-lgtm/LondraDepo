import type { EnPage } from "./types";

/** Services offered in the English quote form (value -> label). */
export const QUOTE_SERVICES = {
  storage: "Warehousing & pallet storage",
  "container-unloading": "Container unloading & goods-in",
  fulfilment: "Ecommerce fulfilment / pick and pack",
  "amazon-prep": "Amazon FBA prep",
  distribution: "B2B / UK distribution",
  repacking: "Repacking, relabelling & handling",
  "freight-customs": "Freight & customs clearance (Arca Trade Group)",
  other: "Other / not sure",
} as const;

export type QuoteService = keyof typeof QUOTE_SERVICES;

type Cta = { label: string; service: QuoteService };

const FULFIL: Cta = { label: "Get Your UK Fulfilment Quote", service: "fulfilment" };
const STORAGE: Cta = { label: "Request a UK Warehousing Quote", service: "storage" };

const BY_SLUG: Record<string, Cta> = {
  "/en": { label: "Request a Warehouse Quote", service: "storage" },
  "/en/uk-warehousing-benefits": { label: "Plan Your UK Market Entry", service: "storage" },
  "/en/uk-warehousing-pricing": { label: "Get a UK Storage Quote", service: "storage" },
  "/en/pallet-storage": { label: "Get a UK Storage Quote", service: "storage" },
  "/en/storage-services": { label: "Get a UK Storage Quote", service: "storage" },
  "/en/essex-warehouse": { label: "Request an Essex Warehousing Quote", service: "storage" },
  "/en/london-warehousing": { label: "Request a London Warehousing Quote", service: "storage" },
  "/en/uk-ecommerce-logistics": FULFIL,
  "/en/ecommerce-fulfilment": FULFIL,
  "/en/uk-fulfilment": FULFIL,
  "/en/pick-and-pack": FULFIL,
  "/en/shopify-fulfilment-uk": { label: "Get Your Shopify Fulfilment Quote", service: "fulfilment" },
  "/en/amazon-seller-warehousing-uk": { label: "Get Your Amazon FBM Fulfilment Quote", service: "fulfilment" },
  "/en/amazon-fulfilment-uk": { label: "Get Your Amazon Fulfilment Quote", service: "fulfilment" },
  "/en/amazon-prep-uk": { label: "Request an Amazon Prep Quote", service: "amazon-prep" },
  "/en/uk-customs-clearance": { label: "Discuss Your Import Requirements", service: "freight-customs" },
  "/en/cargo-handling": { label: "Get a Handling Quote", service: "repacking" },
  "/en/uk-distribution": { label: "Get a UK Distribution Quote", service: "distribution" },
  "/en/uk-import-logistics": { label: "Discuss Your Import Requirements", service: "freight-customs" },
  "/en/container-unloading": { label: "Get a Container Unloading Quote", service: "container-unloading" },
  "/en/industries/food-packaging": { label: "Discuss Your Packaging Storage Requirements", service: "distribution" },
  "/en/uk-market-entry": { label: "Plan Your UK Market Entry", service: "storage" },
  "/en/industries/automotive-parts": { label: "Get a Parts Warehousing Proposal", service: "storage" },
  "/en/uk-warehousing-for-turkish-exporters": { label: "Plan Your UK Market Entry", service: "freight-customs" },
  "/en/locations/port-to-warehouse-logistics": { label: "Get a Port-to-Warehouse Quote", service: "container-unloading" },
  "/en/uk-storage-cost-calculator": { label: "Get a Full Storage Quote", service: "storage" },
  "/en/blog/uk-importing-guide": { label: "Discuss Your Import Requirements", service: "freight-customs" },
  "/en/case-studies/cruyff-uk-fulfilment": FULFIL,
  "/en/case-studies/pizza-box-distribution-uk": { label: "Discuss Your Packaging Storage Requirements", service: "distribution" },
  "/en/case-studies/tortilla-uk-distribution": { label: "Discuss Your Food Storage Requirements", service: "storage" },
  "/en/case-studies/uk-auto-parts-warehouse": { label: "Get a Parts Warehousing Proposal", service: "storage" },
  "/en/case-studies/car-seat-cover-uk-warehousing": { label: "Get a Parts Warehousing Proposal", service: "storage" },
  "/en/case-studies/uk-walking-treadmill-distribution": { label: "Get a Bulky Goods Fulfilment Quote", service: "fulfilment" },
  "/en/case-studies/portable-power-station-uk-operations": { label: "Discuss Your Product Preparation Needs", service: "repacking" },
  "/en/blog/amazon-prep-uk-guide": { label: "Request an Amazon Prep Quote", service: "amazon-prep" },
  "/en/blog/amazon-fba-vs-uk-fulfilment": FULFIL,
  "/en/blog/what-is-uk-fulfilment": FULFIL,
};

export function ctaFor(page: Pick<EnPage, "slug">): Cta {
  return BY_SLUG[page.slug] ?? STORAGE;
}

export function quoteHref(service: QuoteService, from: string): string {
  return `/en/request-a-quote?service=${service}&from=${encodeURIComponent(from)}`;
}
