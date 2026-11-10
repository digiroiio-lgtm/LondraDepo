import type { EnPage } from "./types";

const CASE_DATE = { published: "2026-11-10", modified: "2026-11-10" };

export const casePages: EnPage[] = [
  {
    slug: "/en/case-studies/cruyff-uk-fulfilment",
    tr: "/case-studies/cruyff-uk-fulfillment",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 4, section: "Fashion & premium apparel" },
    title: "Cruyff UK Fashion Fulfilment Case Study",
    description:
      "How the Cruyff fashion brand moved UK online orders from the Netherlands to a UK warehouse in Essex: repackaging, hang-tag updates, ecommerce fulfilment and next-day or 2-day UK delivery.",
    label: "Cruyff – UK fashion fulfilment",
    eyebrow: "Case study · Fashion & premium apparel",
    h1: "Cruyff: Setting Up UK Fashion Fulfilment",
    lead:
      "Cruyff, the fashion brand carrying Johan Cruyff's legacy, moved its UK online sales from shipping out of the Netherlands to fulfilment from LondraDepo's Essex warehouse. Storage, repackaging, stock management and ecommerce fulfilment are now run from one UK site, with next-day and 2-day delivery options and delivery times shortened by around 80% after the move.",
    facts: ["Sector: fashion and premium apparel", "Origin: the Netherlands", "UK delivery: next-day or 2-day options", "~80% faster UK delivery after the switch"],
    sections: [
      {
        type: "list",
        h2: "The challenge",
        intro: "Shipping UK orders directly from the Netherlands lengthened delivery times, raised costs and made the customer experience harder. With no physical UK stock, local fulfilment was impossible.",
        items: ["Need for fast UK fulfilment", "No physical stock in the UK", "Online order infrastructure required", "Repackaging suited to fashion products", "No UK carrier integration", "Need for central stock management"],
      },
      {
        type: "cards",
        h2: "The LondraDepo solution",
        items: [
          { title: "UK fashion warehouse", text: "Secure stock space suited to apparel at our Essex site." },
          { title: "Repackaging and hang tags", text: "Repacking, labelling and hang-tag updates to Cruyff brand standards." },
          { title: "Ecommerce fulfilment", text: "Online orders flow into pick, pack and dispatch." },
          { title: "UK-wide distribution", text: "UK carrier integration with next-day and 2-day options." },
          { title: "Stock management", text: "Regular stock reports, movement reports and collection-level tracking." },
          { title: "Bilingual operations", text: "Coordination in English and Turkish throughout." },
        ],
      },
      {
        type: "steps",
        h2: "How the operation runs",
        items: [
          { title: "Shipment from the Netherlands", text: "The collection was shipped to our Essex warehouse and received." },
          { title: "Goods-in and quality control", text: "Every item was counted, checked for quality and damage, and booked in." },
          { title: "Repackaging and relabelling", text: "Hang tags, labels and packaging were updated to brand standards." },
          { title: "Ecommerce integration", text: "Orders from the website and marketplace channels were brought into the workflow." },
          { title: "Pick and pack", text: "Each order was picked and packed in Cruyff packaging with a shipping label." },
          { title: "UK delivery", text: "Orders were delivered via the UK carrier network on next-day or 2-day services." },
        ],
      },
      { type: "stats", h2: "Results", items: [{ value: "~80%", label: "faster UK delivery" }, { value: "Local", label: "UK-based fulfilment" }, { value: "1 site", label: "full UK coverage" }] },
    ],
    faqs: [
      { q: "What is UK fashion fulfilment?", a: "UK fashion fulfilment is storing fashion products in a UK warehouse, repackaging and labelling them, and preparing online orders for delivery to customers." },
      { q: "Do you offer repackaging?", a: "Yes. We provide full repackaging and relabelling, including brand-specific packaging, hang tags and label updates." },
      { q: "Is UK next-day delivery possible?", a: "Yes. Our Essex operation offers next-day and 2-day delivery options across the UK through carrier services." },
    ],
    related: ["/en/uk-fulfilment", "/en/ecommerce-fulfilment", "/en/case-studies/uk-auto-parts-warehouse"],
  },
  {
    slug: "/en/case-studies/pizza-box-distribution-uk",
    tr: "/case-studies/pizza-box-distribution-uk",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 3, section: "B2B distribution" },
    title: "Pizza Box B2B Distribution UK Case Study",
    description:
      "How a pizza box manufacturer set up palletised UK storage and a scheduled B2B delivery programme to restaurants, with lot tracking and low-stock alerts.",
    label: "Pizza boxes – UK B2B distribution",
    eyebrow: "Case study · B2B distribution",
    h1: "Pizza Boxes: UK B2B Restaurant Distribution",
    lead:
      "A pizza box manufacturer based in Turkey needed reliable, regular deliveries to restaurants in the UK. Instead of shipping from Turkey for every order, it now holds palletised stock in our Essex warehouse and supplies restaurants on a fixed delivery schedule, with low-stock alerts before replenishment is needed.",
    facts: ["Model: palletised B2B storage and distribution", "Coverage: UK-wide", "Fixed weekly or monthly delivery schedules"],
    sections: [
      {
        type: "list",
        h2: "The challenge",
        items: ["Separate cost and delay for every shipment from Turkey", "Restaurants needing consistent, predictable supply", "Storage needed for high-volume palletised goods", "No physical UK operating base", "Risk of stock-outs and lost customers"],
      },
      {
        type: "cards",
        h2: "The LondraDepo solution",
        items: [
          { title: "Pallet storage", text: "High-volume packaging stored in pallet racking, organised and accessible." },
          { title: "Delivery schedule", text: "Fixed weekly or monthly delivery programme for each restaurant customer." },
          { title: "Stock monitoring", text: "Continuous stock checks with a minimum stock threshold alert." },
          { title: "UK B2B distribution", text: "Pallet and carton deliveries to restaurants, chains and businesses across the UK." },
          { title: "Lot tracking", text: "Lot-level stock records, ready for recall scenarios." },
        ],
      },
      { type: "stats", h2: "Results", items: [{ value: "Fixed", label: "delivery schedule" }, { value: "Pallet+", label: "high-volume capacity" }, { value: "Proactive", label: "low-stock alerts" }] },
    ],
    faqs: [
      { q: "What is the difference between B2B and B2C fulfilment?", a: "B2B fulfilment covers bulk orders to businesses, with pallet shipments, fixed delivery schedules and invoice-based logistics. B2C focuses on single orders to individual consumers." },
      { q: "Can you set up regular deliveries to restaurants?", a: "Yes. We build weekly or monthly delivery programmes based on the customer list and frequency." },
      { q: "Do you store palletised packaging products?", a: "Yes. Bulky products such as pizza boxes and packaging materials are stored by the pallet, tracked in stock and prepared per order for distribution." },
    ],
    related: ["/en/industries/food-packaging", "/en/pallet-storage", "/en/uk-distribution", "/en/case-studies/tortilla-uk-distribution"],
  },
  {
    slug: "/en/case-studies/tortilla-uk-distribution",
    tr: "/case-studies/tortilla-uk-distribution",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 4, section: "Food & FMCG" },
    title: "Tortilla Brand UK Warehouse & Distribution Case Study",
    description:
      "How an Ankara-based tortilla and flatbread producer entered the UK with a single pallet and grew to six 40ft high-cube containers a month with UK warehousing, labelling guidance and distribution.",
    label: "Tortilla brand – UK distribution",
    eyebrow: "Case study · Food & FMCG",
    h1: "Tortilla Brand: From 1 Pallet to 6 Containers a Month",
    lead:
      "An Ankara-based producer of tortillas, lavash and flatbread entered the UK market with a single trial pallet. With LondraDepo's support on commodity codes, UK labelling, warehousing, fulfilment and distribution, the operation has grown to six 40ft high-cube (40HC) containers a month.",
    facts: ["Starting volume: 1 pallet", "Current volume: 6 × 40HC containers per month", "Channels: B2B and B2C", "Communication: English and Turkish"],
    sections: [
      {
        type: "list",
        h2: "The challenge",
        intro: "The producer wanted a low-risk test, so the plan started with one pallet. Several operational needs came up along the way:",
        items: ["Organising a UK food import operation", "Commodity code classification for tortilla and flatbread", "UK-compliant food labelling", "Food fulfilment infrastructure", "Access to UK distribution", "A model that could scale"],
      },
      {
        type: "steps",
        h2: "How the operation grew",
        items: [
          { title: "Product and code review", text: "Commodity code classification and a UK import assessment for the product range." },
          { title: "Labelling guidance", text: "UK market labelling and packaging requirements were identified." },
          { title: "First pallet", text: "A one-pallet test shipment was planned and delivered." },
          { title: "Goods-in in Essex", text: "Receiving, counting and quality checks at our warehouse." },
          { title: "UK distribution", text: "Goods were dispatched to B2B and B2C channels via the UK network." },
          { title: "Container growth", text: "After a successful test, a regular model reached 6 × 40HC containers a month." },
        ],
      },
      { type: "stats", h2: "Results", items: [{ value: "1 pallet", label: "starting volume" }, { value: "6 × 40HC", label: "per month today" }, { value: "B2B + B2C", label: "UK channels" }] },
    ],
    faqs: [
      { q: "Can a food brand start a UK operation with a small volume?", a: "Yes. This producer started with a single pallet and grew to container-based volumes as demand increased." },
      { q: "Do you help with UK food labelling?", a: "Yes. We provide guidance and operational support on UK labelling requirements. Legal compliance of the label remains the producer's responsibility." },
      { q: "Do you help with commodity code classification?", a: "Yes. We offer guidance on placing products in the correct commodity code, which is the basis of the UK import operation. The final classification is the importer's responsibility." },
    ],
    related: ["/en/uk-market-entry", "/en/uk-warehousing-for-turkish-exporters", "/en/container-unloading", "/en/pallet-storage", "/en/case-studies/pizza-box-distribution-uk"],
  },
  {
    slug: "/en/case-studies/uk-auto-parts-warehouse",
    tr: "/case-studies/uk-auto-parts-warehouse",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 3, section: "Automotive" },
    title: "OEM Auto Parts UK Warehouse Case Study",
    description:
      "How a manufacturer of OEM and aftermarket parts for luxury cars set up UK stock, photo-documented damage checks, protective packing and next-day delivery to UK dealers and workshops.",
    label: "OEM auto parts – UK warehouse",
    eyebrow: "Case study · Automotive",
    h1: "OEM and Aftermarket Auto Parts: UK Warehouse",
    lead:
      "A manufacturer of OEM and aftermarket parts for luxury vehicles was shipping every UK order from Turkey. By holding stock in our Essex warehouse, with photo-documented damage checks at goods-in and dispatch, it now supplies UK dealers, workshops and online customers with next-day or 2-day delivery.",
    facts: ["Storage: pallets and shelving", "100% photo-documented damage tracking", "Next-day or 2-day UK delivery to dealers"],
    sections: [
      {
        type: "cards",
        h2: "The LondraDepo solution",
        items: [
          { title: "Palletised storage", text: "Bulky bumpers and panels stored on pallets." },
          { title: "Damage control protocol", text: "Photos at goods-in and dispatch, with a damage log for each part." },
          { title: "SKU-level stock", text: "OEM and aftermarket items racked separately by SKU." },
          { title: "Protective packing", text: "Painted and sensitive surfaces protected with foam and bubble wrap." },
          { title: "UK dealer distribution", text: "Next-day options for workshops, dealers and online orders." },
          { title: "Stock reporting", text: "Periodic stock reports and low-stock alerts." },
        ],
      },
      { type: "stats", h2: "Results", items: [{ value: "Next-day", label: "UK dealer delivery" }, { value: "100%", label: "damage tracking" }, { value: "EN + TR", label: "bilingual management" }] },
    ],
    faqs: [
      { q: "Do you store large automotive parts?", a: "Yes. We store automotive parts of all sizes, including front and rear bumpers and door panels, using pallet and shelving systems." },
      { q: "Do you carry out damage checks on parts?", a: "Yes. Each part is visually checked and photographed at goods-in and recorded in the system. The client is informed of any damage." },
      { q: "Can you distribute auto parts across the UK?", a: "Yes. From Essex we deliver to dealers, workshops and online customers throughout the UK." },
    ],
    related: ["/en/industries/automotive-parts", "/en/pallet-storage", "/en/uk-distribution", "/en/case-studies/car-seat-cover-uk-warehousing"],
  },
  {
    slug: "/en/case-studies/uk-walking-treadmill-distribution",
    tr: "/case-studies/uk-walking-treadmill-distribution",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 4, section: "Health & ecommerce" },
    title: "Walking Treadmill UK Distribution Case Study",
    description:
      "How walking treadmills for older users and rehabilitation are stored, fulfilled online and distributed to UK discount stores from one Essex warehouse.",
    label: "Walking treadmills – UK distribution",
    eyebrow: "Case study · Health & ecommerce",
    h1: "Walking Treadmills: UK Online and Retail Distribution",
    lead:
      "Walking treadmills for older users, rehabilitation patients and home exercise are bulky, need careful handling and sell through two very different channels. LondraDepo runs both from one Essex warehouse: online orders are picked, packed and sent by courier, while bulk pallet shipments go to discount store and retail chains across the UK.",
    facts: ["Bulky-item storage and handling", "Online fulfilment plus discount store distribution", "Courier and freight coordination UK-wide"],
    sections: [
      {
        type: "cards",
        h2: "The LondraDepo solution",
        items: [
          { title: "Bulky-item storage", text: "Space and loading arrangements suited to large treadmill units." },
          { title: "Online fulfilment", text: "Pick, pack and courier dispatch for ecommerce orders." },
          { title: "Discount store shipments", text: "Bulk pallet shipments to discount and retail chains." },
          { title: "UK retail distribution", text: "Freight and courier coordination for B2C and B2B deliveries." },
          { title: "Quality control", text: "Counting, damage checks and SKU verification for every inbound shipment." },
          { title: "Stock management", text: "Inventory tracking, low-stock alerts and periodic reports." },
        ],
      },
    ],
    faqs: [
      { q: "Do you fulfil bulky products?", a: "Yes. For large, heavy products such as walking treadmills we provide dedicated storage space, goods-in processes and fulfilment." },
      { q: "Do you distribute to discount stores?", a: "Yes. We organise bulk shipments and distribution to discount stores and retail chains across the UK." },
      { q: "Do you deliver across the whole UK?", a: "Yes. From our Essex warehouse we deliver to every region of the UK through courier and freight coordination." },
    ],
    related: ["/en/ecommerce-fulfilment", "/en/uk-distribution", "/en/case-studies/portable-power-station-uk-operations"],
  },
  {
    slug: "/en/case-studies/car-seat-cover-uk-warehousing",
    tr: "/case-studies/arac-koltuk-kaplama-ingiltere-depo",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 3, section: "Automotive & upholstery" },
    title: "Car Seat Cover & Faux Leather UK Warehousing Case Study",
    description:
      "How an automotive upholstery manufacturer stores faux leather rolls and seat covers in the UK, fulfils eBay and Amazon orders the same day and supplies UK workshops and dealers.",
    label: "Car seat covers – UK warehousing",
    eyebrow: "Case study · Automotive & upholstery",
    h1: "Car Seat Covers and Faux Leather: UK Warehousing",
    lead:
      "A manufacturer of car seat covers and faux leather could not keep up with UK workshop and dealer demand while shipping everything from Turkey. Its stock now sits in our Essex warehouse, sorted by material type; online orders from eBay, Amazon and its own website, plus B2B dealer orders, are processed the same day and shipped across the UK.",
    facts: ["Storage: pallets and shelving for rolls and panels", "Channels: eBay, Amazon, own website, B2B dealers", "Orders processed the same day"],
    sections: [
      {
        type: "cards",
        h2: "The LondraDepo solution",
        items: [
          { title: "Pallet and shelf storage", text: "Rolls and panels stored neatly and without damage." },
          { title: "Counting and quality checks", text: "Quantities and condition checked for every delivery, with shortages reported." },
          { title: "Online fulfilment", text: "eBay, Amazon and web orders shipped the same or next day." },
          { title: "B2B distribution", text: "Bulk deliveries to automotive workshops and upholstery dealers across the UK." },
          { title: "Protective packing", text: "Materials packed by type and size to protect quality in transit." },
        ],
      },
      { type: "stats", h2: "Results", items: [{ value: "Same day", label: "order processing" }, { value: "Online + B2B", label: "from one warehouse" }] },
    ],
    faqs: [
      { q: "Can you store rolls and large-format materials?", a: "Yes. Faux leather rolls and large panels are stacked properly on pallets to minimise the risk of damage." },
      { q: "Can you deliver B2B to UK workshops?", a: "Yes. From Essex we deliver to workshops, dealers and upholsterers across the UK, by pallet or by item." },
      { q: "Can you handle orders from online channels?", a: "Yes. We fulfil individual orders from eBay, Amazon and your own ecommerce site with same-day or next-day dispatch." },
    ],
    related: ["/en/industries/automotive-parts", "/en/pallet-storage", "/en/ecommerce-fulfilment", "/en/case-studies/uk-auto-parts-warehouse"],
  },
  {
    slug: "/en/case-studies/portable-power-station-uk-operations",
    tr: "/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu",
    kind: "case",
    parent: "/en/case-studies",
    article: { ...CASE_DATE, readMins: 3, section: "Electronics & smart devices" },
    title: "Portable Power Station UK Operations Case Study",
    description:
      "How portable power stations are tested, fitted with UK SIM cards, charged and shipped next-day to UK end users from our Essex warehouse.",
    label: "Portable power stations – UK operations",
    eyebrow: "Case study · Electronics & smart devices",
    h1: "Portable Power Stations: UK Technical and Logistics Operation",
    lead:
      "A portable power station manufacturer needed more than storage to enter the UK: every unit required electrical testing, UK SIM card activation and charging before dispatch. LondraDepo performs these steps inside its Essex warehouse and ships ready-to-use devices to UK end users on next-day services.",
    facts: ["Technical prep: electrical test, SIM activation, charging", "7-step process from goods-in to end-user delivery", "Next-day UK delivery"],
    sections: [
      {
        type: "steps",
        h2: "Operation flow",
        items: [
          { title: "Goods-in", text: "Units received and checked for quantity and packaging integrity." },
          { title: "Counting and inspection", text: "Each unit counted, visually inspected and booked in." },
          { title: "Electrical check", text: "Electrical connection and charging capacity tested; faulty units separated." },
          { title: "SIM activation", text: "A UK SIM card fitted and activated in each unit, with every activation logged." },
          { title: "Charging", text: "Units charged to the agreed level before dispatch." },
          { title: "Pre-dispatch prep", text: "Units labelled, packed and booked with the carrier." },
          { title: "End-user delivery", text: "Next-day delivery to end users across the UK." },
        ],
      },
    ],
    faqs: [
      { q: "Do you carry out technical operations for electronics?", a: "Yes. We provide SIM card activation, charging checks and pre-dispatch technical preparation. Every unit passes the agreed checks before dispatch." },
      { q: "Can SIM cards be activated in the UK warehouse?", a: "Yes. UK SIM activation is carried out in our warehouse, and each activation is recorded and reported to the client." },
      { q: "Do you deliver to end users?", a: "Yes. Prepared devices are sent to end users across the UK on next-day or 2-day services." },
    ],
    related: ["/en/cargo-handling", "/en/ecommerce-fulfilment", "/en/case-studies/uk-walking-treadmill-distribution"],
  },
];

const caseLink = (slug: string) => {
  const p = casePages.find((c) => c.slug === slug);
  if (!p) throw new Error(`case hub: unknown case ${slug}`);
  return { href: p.slug, title: p.h1, text: p.description, tag: p.article?.section };
};

export const caseHub: EnPage = {
  slug: "/en/case-studies",
  tr: "/case-studies",
  kind: "hub",
  modified: "2026-11-10",
  title: "UK Warehouse & Fulfilment Case Studies",
  description:
    "Live UK warehousing, fulfilment and distribution operations run from our Essex warehouse: food, B2B packaging, automotive, fashion, bulky goods and electronics, from one trial pallet to monthly containers.",
  label: "Case Studies",
  eyebrow: "Real operations",
  h1: "UK Warehouse and Fulfilment Case Studies",
  lead:
    "These are live operations run from LondraDepo's warehouse in Rayleigh, Essex, for brands selling in the UK. Each case shows the starting point, how storage, fulfilment and distribution were set up and what changed, from a food producer that started with a single trial pallet and now ships six 40ft high-cube containers a month, to a fashion brand that moved UK orders from the Netherlands to Essex.",
  sections: [
    {
      type: "stats",
      h2: "Results from these operations",
      items: [
        { value: `${casePages.length}`, label: "live UK operations" },
        { value: "1 → 6×40HC", label: "tortilla producer: trial pallet to monthly containers" },
        { value: "~80%", label: "faster UK delivery for Cruyff after the switch" },
        { value: "Same day", label: "online and workshop orders processed (seat covers)" },
      ],
    },
    {
      type: "links",
      h2: "Food, packaging and B2B distribution",
      items: [caseLink("/en/case-studies/tortilla-uk-distribution"), caseLink("/en/case-studies/pizza-box-distribution-uk")],
    },
    {
      type: "links",
      h2: "Automotive and upholstery",
      items: [caseLink("/en/case-studies/uk-auto-parts-warehouse"), caseLink("/en/case-studies/car-seat-cover-uk-warehousing")],
    },
    {
      type: "links",
      h2: "Ecommerce, bulky goods and electronics",
      items: [
        caseLink("/en/case-studies/cruyff-uk-fulfilment"),
        caseLink("/en/case-studies/uk-walking-treadmill-distribution"),
        caseLink("/en/case-studies/portable-power-station-uk-operations"),
      ],
    },
    {
      type: "steps",
      h2: "How these operations usually start",
      items: [
        { title: "Share the product and plan", text: "Product type, expected pallets or cartons, monthly orders and sales channels." },
        { title: "Trial shipment", text: "You can start small, as the tortilla producer did with a single pallet, to test the UK market and the process." },
        { title: "Set-up", text: "Goods-in, stock in Mintsoft WMS, labelling and the order flow are agreed." },
        { title: "Scale", text: "Volumes, channels and delivery programmes grow from the same Essex stock." },
      ],
    },
  ],
  faqs: [
    { q: "Can I start with a small volume?", a: "Yes. There is no fixed minimum. The tortilla producer in these case studies entered the UK with a single trial pallet and now ships six 40ft high-cube containers a month." },
    { q: "Which sectors do you work with?", a: "Live operations cover food and FMCG, B2B packaging, automotive parts and upholstery, fashion, bulky goods such as walking treadmills and consumer electronics. See the industries page for more." },
    { q: "Can the same stock serve online and B2B customers?", a: "Yes. Several of these operations fulfil ecommerce orders and wholesale or trade deliveries from the same UK stock in Essex." },
  ],
  related: ["/en/industries", "/en/uk-market-entry", "/en/uk-import-logistics", "/en/uk-fulfilment", "/en/pallet-storage"],
  cta: { h2: "Setting up a UK operation?", text: "Share your operating model and we will plan the UK warehouse and logistics with you." },
};
