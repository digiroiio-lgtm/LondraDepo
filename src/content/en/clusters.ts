/**
 * Service clusters whose pages answer close search intents. Each page shows a
 * "Which page fits you?" box so users (and search engines) see what each page is for,
 * instead of several pages competing for the same query.
 */
export type ClusterItem = { href: string; title: string; fit: string };
export type Cluster = { h2: string; items: ClusterItem[] };

const WAREHOUSING: Cluster = {
  h2: "Which warehousing page fits you?",
  items: [
    { href: "/en/uk-warehousing", title: "UK Warehousing", fit: "You want one UK partner to receive, store, fulfil and deliver your goods." },
    { href: "/en/storage-services", title: "UK Storage Services", fit: "You mainly need storage capacity and want to know how goods-in, stock control and space work." },
    { href: "/en/pallet-storage", title: "Pallet Storage", fit: "You store palletised B2B stock and want the per-pallet weekly price." },
    { href: "/en/london-warehousing", title: "London Warehousing", fit: "Your customers or deliveries are in London and the South East." },
  ],
};

const FULFILMENT: Cluster = {
  h2: "Which fulfilment page fits you?",
  items: [
    { href: "/en/uk-fulfilment", title: "UK Fulfilment", fit: "You import into the UK and want every order handled for you, across online, retail and B2B channels." },
    { href: "/en/ecommerce-fulfilment", title: "Ecommerce Fulfilment", fit: "You run an online store and want to see how an order goes from checkout to the customer's door." },
    { href: "/en/uk-ecommerce-logistics", title: "UK Ecommerce Logistics", fit: "You are planning the whole UK set-up: stock location, delivery, returns and several sales channels." },
    { href: "/en/pick-and-pack", title: "Pick and Pack", fit: "You only need the warehouse task of picking and packing orders, priced per order." },
    { href: "/en/shopify-fulfilment-uk", title: "Shopify Fulfilment", fit: "Your store runs on Shopify." },
  ],
};

const AMAZON: Cluster = {
  h2: "Which Amazon page fits you?",
  items: [
    { href: "/en/amazon-fulfilment-uk", title: "Amazon Fulfilment UK", fit: "You are not sure yet whether FBA or FBM suits your products." },
    { href: "/en/amazon-prep-uk", title: "Amazon Prep (FBA)", fit: "Amazon stores and ships your stock, and it must be labelled and packed to Amazon's rules first." },
    { href: "/en/amazon-seller-warehousing-uk", title: "Amazon FBM Warehousing", fit: "You fulfil Amazon orders yourself (FBM) and want them shipped from our Essex warehouse." },
  ],
};

const ALL = [WAREHOUSING, FULFILMENT, AMAZON];

export function clusterFor(slug: string): Cluster | undefined {
  return ALL.find((c) => c.items.some((i) => i.href === slug));
}
