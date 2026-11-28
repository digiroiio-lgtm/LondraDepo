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
    { href: "/en/3pl-uk", title: "3PL UK", fit: "You are comparing UK 3PL providers and want to see what a 3PL covers and how it is priced." },
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

// Polish versions of the same clusters (PL pages rendered by EnPageView).
const PL_WAREHOUSING: Cluster = {
  h2: "Która strona o magazynowaniu jest dla Ciebie?",
  items: [
    { href: "/pl/magazyn-w-wielkiej-brytanii", title: "Magazyn w Wielkiej Brytanii", fit: "Chcesz jednego partnera w UK, który przyjmie, zeskładuje, zrealizuje i dostarczy Twój towar." },
    { href: "/pl/3pl-wielka-brytania", title: "3PL w Wielkiej Brytanii", fit: "Porównujesz operatorów 3PL w UK i chcesz wiedzieć, co obejmuje usługa i jak jest wyceniana." },
    { href: "/pl/uslugi-magazynowe", title: "Usługi magazynowe", fit: "Potrzebujesz głównie powierzchni i chcesz wiedzieć, jak działa przyjęcie towaru i kontrola stanów." },
    { href: "/pl/skladowanie-palet", title: "Składowanie palet", fit: "Składujesz towar B2B na paletach i chcesz poznać tygodniową stawkę za paletę." },
    { href: "/pl/magazyn-londyn", title: "Magazyn pod Londynem", fit: "Twoi klienci lub dostawy są w Londynie i na południowym wschodzie Anglii." },
  ],
};

const PL_FULFILMENT: Cluster = {
  h2: "Która strona o fulfillmencie jest dla Ciebie?",
  items: [
    { href: "/pl/fulfillment-wielka-brytania", title: "Fulfillment w Wielkiej Brytanii", fit: "Importujesz do UK i chcesz, aby każde zamówienie, online, detaliczne i B2B, obsługiwał jeden operator." },
    { href: "/pl/fulfillment-ecommerce", title: "Fulfillment e-commerce", fit: "Prowadzisz sklep internetowy i chcesz zobaczyć drogę zamówienia od koszyka do klienta." },
    { href: "/pl/logistyka-ecommerce-uk", title: "Logistyka e-commerce w UK", fit: "Planujesz cały model w UK: lokalizację zapasu, dostawy, zwroty i kilka kanałów sprzedaży." },
    { href: "/pl/pick-and-pack", title: "Kompletacja i pakowanie", fit: "Potrzebujesz tylko kompletacji i pakowania zamówień, wycenianych za zamówienie." },
    { href: "/pl/fulfillment-shopify-uk", title: "Fulfillment Shopify", fit: "Twój sklep działa na Shopify." },
  ],
};

const PL_AMAZON: Cluster = {
  h2: "Która strona o Amazon jest dla Ciebie?",
  items: [
    { href: "/pl/fulfillment-amazon-uk", title: "Fulfillment Amazon w UK", fit: "Nie wiesz jeszcze, czy dla Twoich produktów lepsze jest FBA czy FBM." },
    { href: "/pl/amazon-fba-prep", title: "Amazon FBA prep", fit: "Amazon składuje i wysyła Twój towar, a wcześniej musi on zostać oznakowany i spakowany zgodnie z zasadami Amazon." },
    { href: "/pl/magazyn-dla-sprzedawcow-amazon", title: "Magazyn dla sprzedawców Amazon (FBM)", fit: "Sam realizujesz zamówienia Amazon (FBM) i chcesz wysyłać je z naszego magazynu w Essex." },
  ],
};

const ALL = [WAREHOUSING, FULFILMENT, AMAZON, PL_WAREHOUSING, PL_FULFILMENT, PL_AMAZON];

export function clusterFor(slug: string): Cluster | undefined {
  return ALL.find((c) => c.items.some((i) => i.href === slug));
}
