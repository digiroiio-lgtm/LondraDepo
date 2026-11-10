import type { EnPage } from "./types";
import { teamQuote } from "@/content/quotes";

// English-only commercial pages (no Turkish counterpart yet → self-referencing `en` hreflang).
// Facts used here are limited to verified items: the Rayleigh site, FCL/LCL and 40HC receiving,
// published pallet price, case-study figures and Arca Trade Group's published services.

export const growthPages: EnPage[] = [
  {
    slug: "/en/uk-import-logistics",
    tr: "/ingiltere-ithalat-lojistigi",
    kind: "service",
    serviceType: "Import logistics",
    title: "UK Import Logistics for Overseas Businesses",
    description:
      "Import into the UK with one group: sea, air, road and rail freight and customs clearance through Arca Trade Group, then unloading, storage, fulfilment and UK distribution at our Essex warehouse.",
    label: "UK Import Logistics",
    eyebrow: "For importers, manufacturers and distributors",
    h1: "UK Import Logistics: From Overseas Supplier to UK Customer",
    lead:
      "International businesses can import into the UK through one group. Arca Trade Group arranges sea, air, road or rail freight and completes the UK customs declaration; LondraDepo, its warehousing brand, unloads the goods in Rayleigh, Essex, stores them, fulfils orders and distributes them across the UK. You can also bring your own freight forwarder and use only the warehouse.",
    facts: [
      "Freight: sea, air, road (UK–Europe groupage and full loads) and rail from the Far East and Europe",
      "Customs declarations completed on your behalf by Arca Trade Group's customs team",
      "FCL and LCL containers received at Unit 19 Arterial Park, Rayleigh SS6 7FY",
      "Pallet storage from £3.50 + VAT per pallet per week",
      "~30 minutes to the Port of Tilbury, roughly 1 to 1¼ hours by road to Felixstowe",
      "Not a bonded warehouse: goods are stored after customs clearance",
    ],
    sections: [
      {
        type: "steps",
        h2: "How an import into the UK works with us",
        items: [
          { title: "Plan the shipment", text: "Share the product, origin, volumes and Incoterms. We confirm the route, the documents needed and how goods should arrive (palletised or loose)." },
          { title: "Freight", text: "Arca Trade Group books sea, air, road or rail freight, or your own forwarder ships to our warehouse address." },
          { title: "Customs clearance", text: "Arca Trade Group's customs team lodges the import declaration and advises on commodity codes and preferential origin." },
          { title: "Delivery and unloading", text: "Goods are delivered to Rayleigh, unloaded, counted, checked for visible damage and booked into Mintsoft WMS." },
          { title: "Storage and stock control", text: "Stock is held on pallets or shelving with live stock records and regular reports." },
          { title: "Orders and distribution", text: "We pick B2B and ecommerce orders and dispatch pallets and parcels across the UK." },
        ],
      },
      {
        type: "table",
        h2: "Who does what",
        head: ["Task", "Responsible", "Notes"],
        rows: [
          ["International freight", "Arca Trade Group or your forwarder", "Quoted separately from warehousing"],
          ["UK import declaration", "Arca Trade Group customs team or your broker", "Commodity code and origin advice available"],
          ["Importer of record, GB EORI, duty and import VAT", "The importer (usually you)", "LondraDepo does not automatically become importer of record"],
          ["Product compliance and labelling", "The importer / brand owner", "We can give operational guidance on UK labelling"],
          ["Unloading, storage, fulfilment, UK distribution", "LondraDepo", "From £3.50 + VAT per pallet per week for storage"],
        ],
      },
      {
        type: "list",
        h2: "What to prepare before your first UK shipment",
        items: [
          "A GB EORI number for the business that will act as importer",
          "Commodity codes for each product line",
          "Commercial invoice and packing list",
          "Transport document (bill of lading, CMR or air waybill)",
          "Proof of origin if you want to claim a preferential tariff",
          "Any product certificates or markings required in the UK (for example UKCA or CE where applicable)",
        ],
        outro:
          "If your business is VAT-registered in the UK, ask your accountant whether postponed VAT accounting suits you. Duty and import VAT are separate from warehouse charges.",
      },
    ],
    faqs: [
      { q: "Can an overseas company import goods into the UK without a UK office?", a: "Yes. Many overseas businesses import into the UK using a GB EORI number and a UK warehouse partner. The right importer of record set-up depends on your sales model, so take tax advice before the first shipment." },
      { q: "Can you arrange freight from Turkey, Europe or the Far East?", a: "Yes. Arca Trade Group, the company that operates LondraDepo, provides sea and air freight worldwide, road freight between the UK and Europe, and rail freight from the Far East and Europe to the UK." },
      { q: "Who completes the UK customs declaration?", a: "Arca Trade Group's customs clearance team completes declarations on behalf of customers. You can also use your own customs broker and deliver cleared goods to our warehouse." },
      { q: "Is LondraDepo the importer of record?", a: "No, not by default. Using our warehouse or our group's customs service does not make LondraDepo or Arca Trade Group the importer of record, and duty and import VAT remain the importer's responsibility." },
      { q: "Is your warehouse a bonded warehouse?", a: "No. LondraDepo is not an HMRC-authorised customs warehouse. Goods are stored after they have been cleared into free circulation." },
    ],
    related: ["/en/blog/uk-import-costs", "/en/container-unloading", "/en/locations/port-to-warehouse-logistics", "/en/blog/uk-importing-guide", "/en/uk-customs-clearance", "/en/uk-market-entry", "/en/pallet-storage"],
    cta: { h2: "Plan your next UK import", text: "Tell us the product, origin, volumes and how the goods will arrive. We will quote freight, customs, unloading and storage together or separately." },
  },
  {
    slug: "/en/container-unloading",
    tr: "/konteyner-bosaltma",
    kind: "service",
    serviceType: "Container unloading",
    title: "Container Unloading in Essex – FCL & LCL Devanning",
    description:
      "Container unloading at our Rayleigh, Essex warehouse: 20ft, 40ft and 40ft high-cube FCL plus LCL deliveries, counting, damage checks, re-palletising, WMS booking and storage or onward distribution.",
    label: "Container Unloading",
    eyebrow: "Essex · near Tilbury, London Gateway and Felixstowe routes",
    h1: "Container Unloading in Essex (FCL and LCL)",
    lead:
      "LondraDepo unloads FCL and LCL deliveries at Unit 19 Arterial Park, Rayleigh, Essex, including 20ft, 40ft and 40ft high-cube containers. Each delivery is counted, checked for visible damage, re-palletised or labelled where needed and booked into Mintsoft WMS, then stored or prepared for onward UK distribution.",
    facts: [
      "FCL and LCL receiving; 40ft high-cube volumes handled for a food client every month",
      "Loading ramp and wide gate for trucks and container hauliers",
      "Counting, damage photos and discrepancy reports",
      "Re-palletising, labelling and sorting by SKU",
      "Storage from £3.50 + VAT per pallet per week, or cross-dock for onward delivery",
    ],
    sections: [
      {
        type: "steps",
        h2: "How container unloading works",
        items: [
          { title: "Pre-advice", text: "Send the container number, ETA, packing list and whether goods are palletised or loose-loaded, with carton counts per SKU." },
          { title: "Booking", text: "We agree the delivery slot. Haulage from the port can be arranged by Arca Trade Group or your forwarder." },
          { title: "Unloading", text: "The container is unloaded at our Rayleigh warehouse." },
          { title: "Count and check", text: "Cartons and pallets are counted against the packing list; visible damage is photographed and reported." },
          { title: "Prepare", text: "Loose cartons are palletised, pallets are labelled and stock is sorted by SKU if required." },
          { title: "Put away or dispatch", text: "Stock is booked into Mintsoft WMS and stored, or sent on to customers or Amazon." },
        ],
      },
      teamQuote("yusufGoodsIn"),
      {
        type: "table",
        h2: "What affects the unloading quote",
        head: ["Factor", "Why it matters"],
        rows: [
          ["Container size (20ft, 40ft, 40ft HC)", "Volume and number of pallets or cartons to handle"],
          ["Palletised or loose-loaded", "Loose cartons take longer and usually need palletising"],
          ["Number of SKUs and cartons", "Sorting and labelling time"],
          ["Damage or discrepancies", "Extra photos, reports and repacking"],
          ["Next step", "Storage, cross-dock or immediate onward delivery"],
        ],
        note: "Unloading is quoted per delivery. Storage starts from £3.50 + VAT per pallet per week.",
      },
      {
        type: "text",
        h2: "Why unload in Essex rather than at the port",
        paras: [
          "Our warehouse is about 30 minutes from the Port of Tilbury and roughly 1 to 1¼ hours by road from Felixstowe, with direct access to the A127 and M25. Unloading, storage, order picking and UK distribution happen in one place, so goods are handled once instead of moving between a port-side unloading yard and a separate fulfilment warehouse.",
          "For importers who sell to both businesses and consumers, the same delivery can feed pallet orders to wholesale customers and parcel orders to online shoppers.",
        ],
      },
    ],
    faqs: [
      { q: "Which container sizes do you unload?", a: "We receive 20ft, 40ft and 40ft high-cube FCL containers as well as LCL and palletised part loads. Tell us the size and whether goods are palletised or loose-loaded when you request a quote." },
      { q: "Do you unload loose-loaded (floor-loaded) containers?", a: "Tell us in advance if cartons are loose-loaded, with carton counts per SKU. Handling time, palletising and any labelling are assessed before the container arrives and quoted accordingly." },
      { q: "What happens if goods arrive damaged or short?", a: "Visible damage is photographed and shortages or overs against the packing list are reported to you, so you can raise a claim with the supplier or carrier." },
      { q: "Can you arrange haulage from the port?", a: "Yes. Arca Trade Group, the company that operates LondraDepo, can arrange transport from the port to our warehouse, or your own forwarder can deliver." },
      { q: "Can unloaded goods go straight out again?", a: "Yes. Goods can be cross-docked to UK customers or Amazon, or stored and released as orders arrive." },
    ],
    related: ["/en/london-gateway-tilbury-warehousing", "/en/felixstowe-port-warehousing", "/en/container-arrival-planner", "/en/uk-import-logistics", "/en/locations/port-to-warehouse-logistics", "/en/pallet-storage", "/en/essex-warehouse", "/en/cargo-handling"],
    cta: { h2: "Book a container unloading quote", text: "Send the container size, ETA, packing list and whether goods are palletised or loose-loaded." },
  },
  {
    slug: "/en/industries/food-packaging",
    tr: "/ambalaj-catering-depolama",
    parent: "/en/industries",
    kind: "service",
    serviceType: "Packaging warehousing and distribution",
    title: "Packaging & Catering Supplies Warehousing UK",
    description:
      "UK warehousing and scheduled B2B delivery for pizza boxes, takeaway packaging and catering disposables: palletised storage, lot tracking, low-stock alerts and delivery to restaurants and wholesalers.",
    label: "Packaging & Catering Supplies",
    eyebrow: "Industry · packaging and restaurant supplies",
    h1: "Warehousing and Distribution for Packaging and Catering Supplies",
    lead:
      "Pizza boxes, takeaway containers and catering disposables are bulky, low in value per pallet and needed on a predictable schedule. LondraDepo stores them by the pallet in Essex and runs fixed weekly or monthly deliveries to restaurants, chains and wholesalers across the UK, as we do for a pizza box manufacturer that ships from Turkey.",
    facts: [
      "Palletised storage from £3.50 + VAT per pallet per week",
      "Fixed weekly or monthly delivery schedules per customer",
      "Lot-level stock records, ready for recall scenarios",
      "Low-stock alerts before replenishment is needed",
      "Pallet and carton deliveries UK-wide",
    ],
    sections: [
      {
        type: "list",
        h2: "Typical challenges for packaging suppliers",
        items: [
          "Shipping from the factory for every order is slow and expensive",
          "Restaurants need consistent, predictable supply and cannot run out",
          "High-volume, low-value goods need space-efficient pallet storage",
          "Customers order in mixed quantities: full pallets, part pallets and cartons",
        ],
      },
      {
        type: "cards",
        h2: "How we support packaging and catering supply businesses",
        items: [
          { title: "Bulk pallet storage", text: "Bulky packaging held in pallet racking, organised and accessible." },
          { title: "Delivery programmes", text: "Fixed delivery days for each restaurant or wholesale customer." },
          { title: "Stock monitoring", text: "Minimum stock thresholds with alerts so replenishment is shipped in time." },
          { title: "Lot tracking", text: "Lot-level stock records for traceability." },
          { title: "Mixed order picking", text: "Full pallets, part pallets or cartons, prepared per customer with a delivery list." },
          { title: "Import support", text: "Freight and customs clearance through Arca Trade Group for goods made abroad." },
        ],
      },
      {
        type: "links",
        h2: "Case study",
        items: [
          {
            href: "/en/case-studies/pizza-box-distribution-uk",
            title: "Pizza boxes: UK B2B restaurant distribution",
            text: "How a pizza box manufacturer moved from per-order shipments to palletised UK stock and scheduled restaurant deliveries.",
            tag: "B2B distribution",
          },
        ],
      },
    ],
    faqs: [
      { q: "Can you deliver to restaurants on a fixed schedule?", a: "Yes. We build weekly or monthly delivery programmes based on your customer list and order frequency." },
      { q: "Do you store food-contact packaging?", a: "Yes. Packaging such as pizza boxes and takeaway containers is stored as non-food stock on pallets. Tell us about any specific storage requirements when you request a quote." },
      { q: "Is there a minimum volume?", a: "There is no fixed minimum. Pallet-based operations are assessed case by case, so share your expected pallets and order pattern." },
    ],
    related: ["/en/case-studies/pizza-box-distribution-uk", "/en/pallet-storage", "/en/uk-distribution", "/en/uk-import-logistics"],
    cta: { h2: "Discuss your packaging storage requirements", text: "Share your product range, expected pallets and customer delivery pattern." },
  },
  {
    slug: "/en/uk-market-entry",
    kind: "service",
    serviceType: "UK market entry logistics",
    title: "UK Market Entry Without Your Own Warehouse",
    description:
      "How international manufacturers and brands enter the UK market with outsourced warehousing: choose a sales model, set up imports, start with a trial pallet and scale to containers.",
    label: "UK Market Entry",
    eyebrow: "For international manufacturers and brands",
    h1: "Entering the UK Market with an Outsourced Warehouse",
    lead:
      "You do not need your own UK warehouse, staff or fleet to sell in the UK. International businesses can ship stock to LondraDepo in Essex, have it cleared and stored, and supply UK wholesale customers, online shoppers or Amazon from day one. One of our food clients started with a single trial pallet and now ships six 40ft high-cube containers a month.",
    facts: [
      "Start small: no fixed minimum volume, pallet-based or part-load shipments",
      "Pallet storage from £3.50 + VAT per pallet per week",
      "Freight and customs clearance available through Arca Trade Group",
      "Clients shipping from Turkey, the Netherlands and other countries",
      "English and Turkish spoken",
    ],
    sections: [
      {
        type: "steps",
        h2: "A practical route into the UK",
        items: [
          { title: "Choose your sales model", text: "Wholesale to UK retailers and trade buyers, ecommerce direct to consumers, Amazon, or a mix." },
          { title: "Set up the import", text: "Decide who is importer of record, obtain a GB EORI number, confirm commodity codes and UK labelling." },
          { title: "Ship a trial volume", text: "Start with one or a few pallets to test demand without committing to a lease." },
          { title: "Clear, receive and store", text: "Goods are cleared, unloaded, counted and booked into our WMS in Rayleigh." },
          { title: "Fulfil and deliver", text: "We pick B2B and online orders and deliver across the UK." },
          { title: "Scale", text: "Move to regular full containers as sales grow; storage and handling scale with you." },
        ],
      },
      {
        type: "table",
        h2: "Which UK sales model fits you?",
        head: ["Model", "Typical customer", "What LondraDepo does"],
        rows: [
          ["Wholesale / B2B", "Retailers, distributors, trade buyers", "Pallet storage, pallet and carton picking, scheduled UK delivery"],
          ["Ecommerce (DTC)", "Online shoppers via your website or Shopify", "Pick and pack, parcel dispatch, returns"],
          ["Amazon FBA", "Amazon customers, Prime", "FBA prep, FNSKU labelling, delivery to Amazon"],
          ["Amazon FBM", "Amazon customers fulfilled by you", "Stock storage and order fulfilment from Essex"],
        ],
      },
      {
        type: "stats",
        h2: "Proof from live operations",
        items: [
          { value: "1 → 6 × 40HC", label: "food brand: trial pallet to monthly containers" },
          { value: "~80%", label: "faster UK delivery for Cruyff after moving from NL" },
          { value: "7", label: "published UK operations across sectors" },
        ],
      },
    ],
    faqs: [
      { q: "Do I need a UK company to sell in the UK?", a: "Not necessarily. Many overseas businesses sell into the UK with a GB EORI number and an outsourced warehouse. The right structure depends on your sales model and VAT position, so take professional advice." },
      { q: "What is the smallest volume I can start with?", a: "There is no fixed minimum. A pallet-based or part-load trial is a common first step before moving to full containers." },
      { q: "Can you help with UK labelling and commodity codes?", a: "Yes. We give operational guidance on UK labelling and commodity code pre-checks, and Arca Trade Group's customs team advises on classification. Final compliance remains the importer's responsibility." },
      { q: "Do you offer market entry consultancy?", a: "Yes. Support with an initial operating plan, warehouse and fulfilment model, marketplace set-up and UK distribution is available and quoted separately." },
    ],
    related: ["/en/uk-import-logistics", "/en/uk-warehousing-for-turkish-exporters", "/en/blog/uk-importing-guide", "/en/uk-warehousing-benefits", "/en/case-studies/tortilla-uk-distribution", "/en/uk-warehousing-pricing"],
    cta: { h2: "Plan your UK market entry", text: "Tell us what you sell, where you ship from and how you want to sell in the UK." },
  },
];

// Weeks 7–10 (P2). Road distances verified 10.11.2026 with OSRM car routing between postcode
// centroids (SS6 7FY → port admin postcodes); times are free-flow car times, HGVs and traffic take longer.
export const growthPagesP2: EnPage[] = [
  {
    slug: "/en/industries/automotive-parts",
    tr: "/otomotiv-yedek-parca-depolama",
    parent: "/en/industries",
    kind: "service",
    serviceType: "Automotive parts warehousing",
    title: "Automotive Parts Warehousing & Distribution UK",
    description:
      "UK warehousing for OEM and aftermarket parts: pallet and shelf storage by SKU, photo-documented damage checks, protective packing and next-day delivery to dealers and workshops.",
    label: "Automotive Parts Warehousing",
    eyebrow: "Industry · automotive and aftermarket",
    h1: "Automotive Parts Warehousing and Distribution in the UK",
    lead:
      "Automotive parts are awkward to store and easy to damage: bumpers and panels are bulky, painted surfaces scratch and SKU counts run into the thousands. LondraDepo stores OEM and aftermarket parts and upholstery materials in Essex by SKU, photographs condition at goods-in and dispatch, packs parts protectively and ships next-day or 2-day to UK dealers, workshops and online customers.",
    facts: [
      "Pallet and shelf storage organised by SKU, OEM and aftermarket kept separate",
      "Photo-documented damage checks at goods-in and dispatch",
      "Protective packing for painted and sensitive surfaces",
      "Next-day or 2-day delivery options to dealers and workshops",
      "Online orders from eBay, Amazon and web shops processed the same day in a live operation",
    ],
    sections: [
      {
        type: "cards",
        h2: "What automotive suppliers need from a UK warehouse",
        items: [
          { title: "Bulky-part storage", text: "Bumpers, door panels and rolls of trim material stored on pallets without crushing." },
          { title: "SKU discipline", text: "Parts racked by SKU so the right part number goes out every time." },
          { title: "Damage control", text: "Photos at goods-in and dispatch give each part a condition history for claims." },
          { title: "Protective packing", text: "Foam, bubble wrap and rigid cartons for painted and fragile parts." },
          { title: "Trade and online orders", text: "Dealer, workshop and marketplace orders handled from the same stock." },
          { title: "Stock reporting", text: "Periodic stock reports and low-stock alerts, in English or Turkish." },
        ],
      },
      {
        type: "links",
        h2: "Automotive case studies",
        items: [
          { href: "/en/case-studies/uk-auto-parts-warehouse", title: "OEM and aftermarket parts: UK warehouse", text: "Photo-documented damage tracking and next-day delivery to UK dealers.", tag: "Automotive" },
          { href: "/en/case-studies/car-seat-cover-uk-warehousing", title: "Car seat covers and faux leather", text: "Same-day processing of eBay, Amazon and B2B workshop orders.", tag: "Automotive & upholstery" },
        ],
      },
    ],
    faqs: [
      { q: "Do you store large automotive parts?", a: "Yes. We store parts of all sizes, including front and rear bumpers and door panels, using pallet and shelving systems." },
      { q: "How do you handle damage on painted parts?", a: "Each part is visually checked and photographed at goods-in and recorded in the system, and parts are packed with foam, bubble wrap and rigid cartons for dispatch." },
      { q: "Can you deliver to workshops and dealers across the UK?", a: "Yes. From Essex we deliver to dealers, workshops and online customers throughout the UK, with next-day or 2-day options." },
      { q: "Can you import parts from overseas for us?", a: "Yes. Arca Trade Group, which operates LondraDepo, can arrange freight and customs clearance, or your own forwarder can deliver to our warehouse." },
    ],
    related: ["/en/case-studies/uk-auto-parts-warehouse", "/en/case-studies/car-seat-cover-uk-warehousing", "/en/pallet-storage", "/en/uk-distribution", "/en/uk-import-logistics"],
    cta: { h2: "Get a parts warehousing proposal", text: "Share your SKU count, part sizes, expected pallets and order channels." },
  },
  {
    slug: "/en/uk-warehousing-for-turkish-exporters",
    tr: "/turk-sirketleri-icin-ingiltere-depo",
    kind: "service",
    modified: "2026-11-10",
    serviceType: "UK warehousing for Turkish exporters",
    title: "UK Warehousing & Fulfilment for Turkish Exporters",
    description:
      "UK warehousing, fulfilment and distribution for Turkish manufacturers and brands: Turkish-speaking team, Turkey–UK freight and customs through Arca Trade Group, and an Essex warehouse near London.",
    label: "For Turkish Exporters",
    eyebrow: "Turkey → United Kingdom",
    h1: "UK Warehousing and Fulfilment for Turkish Exporters",
    lead:
      "Turkish manufacturers and brands can sell in the UK without setting up a UK company, leasing a warehouse or hiring staff. Arca Trade Group, which operates LondraDepo, specialises in the Turkey–UK & Ireland trade lane: it arranges freight and customs clearance, and LondraDepo stores, fulfils and distributes your goods from Essex, with a team that works in Turkish and English.",
    facts: [
      "Turkish- and English-speaking operations team",
      "Turkey–UK freight (sea, road, intermodal) and UK customs clearance via Arca Trade Group",
      "Live UK operations for Turkish brands in food, packaging, automotive and upholstery",
      "Pallet storage from £3.50 + VAT per pallet per week",
      "Start with a trial pallet; no fixed minimum",
    ],
    sections: [
      {
        type: "cards",
        h2: "Challenges Turkish businesses face in the UK, and how we solve them",
        items: [
          { title: "Setting up a UK company", text: "You can sell into the UK with your existing company and a GB EORI number; take tax advice on the right structure." },
          { title: "Leasing your own warehouse", text: "Our Essex warehouse becomes your UK stock location, without rent, staff or WMS costs." },
          { title: "Customs and logistics", text: "Arca Trade Group handles Turkey–UK freight and UK import declarations, including commodity code advice." },
          { title: "Order fulfilment", text: "Pick and pack, carrier labels and returns are handled for Shopify, Amazon and wholesale orders." },
          { title: "Language", text: "Day-to-day communication and stock reports in Turkish, with English for UK customers and carriers." },
          { title: "Stock visibility", text: "Stock and orders are tracked in Mintsoft WMS." },
        ],
      },
      teamQuote("sertacExporters"),
      {
        type: "table",
        h2: "What does it cost to start in the UK?",
        intro: "Storage is the one published rate. Freight, customs clearance, goods-in and fulfilment are quoted for your product and volumes.",
        head: ["Starting scenario", "Storage (ex VAT)"],
        rows: [
          ["1 trial pallet × 4 weeks", "£14"],
          ["5 pallets × 4 weeks", "£70"],
          ["10 pallets × 4 weeks", "£140"],
        ],
        note: "Based on £3.50 + VAT per pallet per week. Try your own numbers in the storage cost calculator.",
      },
      {
        type: "steps",
        h2: "How to start",
        items: [
          { title: "Contact us", text: "Tell us about your product and plans by WhatsApp, phone or the quote form." },
          { title: "Get a quote", text: "Freight, customs, storage and fulfilment are quoted for your volumes." },
          { title: "Ship your goods", text: "Goods leave Turkey by sea, road or intermodal and are cleared into the UK." },
          { title: "Goods-in", text: "Goods are received, counted and booked into the WMS in Rayleigh." },
          { title: "Sell", text: "Sell through Shopify, Amazon or wholesale accounts." },
          { title: "Fulfil", text: "Orders are picked, packed and shipped from our warehouse." },
        ],
      },
      {
        type: "links",
        h2: "Turkish brands already operating in the UK with us",
        items: [
          { href: "/en/case-studies/tortilla-uk-distribution", title: "Tortilla and flatbread producer (Ankara)", text: "From a single trial pallet to six 40ft high-cube containers a month.", tag: "Food & FMCG" },
          { href: "/en/case-studies/pizza-box-distribution-uk", title: "Pizza box manufacturer", text: "Palletised UK stock and scheduled restaurant deliveries.", tag: "B2B distribution" },
          { href: "/en/case-studies/uk-auto-parts-warehouse", title: "OEM and aftermarket parts supplier", text: "Damage-controlled storage and next-day dealer delivery.", tag: "Automotive" },
          { href: "/en/case-studies/car-seat-cover-uk-warehousing", title: "Seat cover and faux leather manufacturer", text: "Same-day processing of online and workshop orders.", tag: "Automotive & upholstery" },
        ],
      },
      { type: "checklist" },
      {
        type: "links",
        h2: "Free planning tools",
        items: [
          { href: "/en/uk-storage-cost-calculator", title: "Storage cost calculator", text: "Pallets × weeks at £3.50 + VAT, with VAT shown.", tag: "Free tool" },
          { href: "/en/container-arrival-planner", title: "Container arrival planner", text: "A dated checklist from UK port to our Essex warehouse.", tag: "Free tool" },
          { href: "/en/blog/uk-importing-guide", title: "UK importing guide", text: "GB EORI, commodity codes, declarations, duty and import VAT.", tag: "Guide" },
        ],
      },
    ],
    faqs: [
      { q: "Can I sell in the UK without setting up a UK company?", a: "Yes, it is possible. You can store products in our UK warehouse and sell through platforms such as Shopify or Amazon or to wholesale buyers. We recommend independent advice on tax and company law." },
      { q: "Can I ship goods from Turkey and store them in the UK?", a: "Yes. Freight from Turkey and UK customs clearance can be handled by our parent company Arca Trade Group, and goods are stored in our warehouse once cleared. You can also use your own forwarder and customs broker." },
      { q: "What does it cost to set up a UK operation this way?", a: "Working through LondraDepo means much lower fixed costs than setting up your own warehouse and team. Pallet storage starts from £3.50 + VAT per pallet per week; contact us for a tailored quote." },
      { q: "Do you communicate in English and Turkish?", a: "Yes. Our team works in both Turkish and English: Turkish with you, English with your UK customers and carriers." },
      { q: "Can I start with a small trial shipment?", a: "Yes. There is no fixed minimum and you can start with a single trial pallet. The Ankara tortilla producer in our case studies entered the UK with one pallet and now ships six 40ft high-cube containers a month." },
      { q: "Is there a free trade agreement between Turkey and the UK?", a: "Yes. The UK–Turkey trade agreement removes or reduces customs duty on many goods. To use it, the goods need proof of Turkish origin; import VAT is still paid or accounted for separately." },
      { q: "Should I use Amazon FBA or FBM?", a: "LondraDepo supports Amazon FBM, where stock stays in our warehouse and we fulfil Amazon orders from Essex, and also prepares stock for FBA. See our Amazon prep page for FBA." },
    ],
    related: ["/en/uk-market-entry", "/en/uk-import-logistics", "/en/uk-customs-clearance", "/en/uk-warehousing", "/en/uk-warehousing-pricing"],
    cta: { h2: "Start your UK operation", text: "All you need to begin is your product and a message. Tell us what you sell and where it ships from." },
  },
  {
    slug: "/en/locations/port-to-warehouse-logistics",
    tr: "/limandan-depoya-lojistik",
    kind: "service",
    serviceType: "Port-to-warehouse logistics",
    title: "Felixstowe, Tilbury & London Gateway to Essex Warehouse",
    description:
      "Port-to-warehouse logistics from Felixstowe, London Gateway and Tilbury: verified road distances to our Rayleigh warehouse, customs, haulage, unloading and UK distribution.",
    label: "Port-to-Warehouse Logistics",
    eyebrow: "Felixstowe · London Gateway · Tilbury",
    h1: "From Felixstowe, London Gateway or Tilbury to Our Essex Warehouse",
    lead:
      "Our warehouse at Unit 19 Arterial Park, Rayleigh (SS6 7FY) is not at a port, but it is close to three major ones: London Gateway is about 13 miles by road, the Port of Tilbury about 16 miles and the Port of Felixstowe about 62 miles. Containers arriving at any of them can be cleared, hauled to Rayleigh, unloaded and stored or sent straight on to UK customers.",
    facts: [
      "London Gateway: ~13 miles (21 km) by road",
      "Port of Tilbury: ~16 miles (26 km) by road",
      "Port of Felixstowe: ~62 miles (99 km) by road",
      "Central London: ~37 miles (59 km); east London about 40 minutes",
      "Customs clearance and haulage available through Arca Trade Group",
    ],
    sections: [
      {
        type: "table",
        h2: "Road distances from the warehouse",
        head: ["Destination", "Road distance", "Typical car time (free-flow)"],
        rows: [
          ["DP World London Gateway (SS17)", "~13 miles / 21 km", "~20 minutes"],
          ["Port of Tilbury (RM18)", "~16 miles / 26 km", "~20 minutes"],
          ["Port of Felixstowe (IP11)", "~62 miles / 99 km", "~1¼ hours"],
          ["Central London (Charing Cross)", "~37 miles / 59 km", "~1 hour"],
        ],
        note: "Calculated by road routing between the warehouse postcode and each port's postcode (10 November 2026). Times are for a car in free-flowing traffic; HGVs, port queues and peak traffic take longer.",
      },
      {
        type: "steps",
        h2: "What happens after your container arrives at the port",
        items: [
          { title: "Arrival and release", text: "The shipping line releases the container once freight charges are settled and paperwork is in order." },
          { title: "Customs clearance", text: "The import declaration is lodged, by Arca Trade Group's customs team or your broker, and duty and import VAT are accounted for." },
          { title: "Haulage booking", text: "A haulier collects the container from the port and books a delivery slot at our warehouse." },
          { title: "Unloading and checks", text: "We unload, count against the packing list, photograph visible damage and book stock into the WMS." },
          { title: "Empty container return", text: "The haulier returns the empty container to the port or a depot, ideally within the line's free time to avoid detention charges." },
          { title: "Storage or onward delivery", text: "Goods are stored, picked for orders or cross-docked to UK customers and Amazon." },
        ],
      },
      {
        type: "text",
        h2: "Which port suits your goods?",
        paras: [
          "Felixstowe is the UK's largest container port and handles many deep-sea services from Asia. London Gateway, in Thurrock, is a deep-water port serving large container ships and is the closest of the three to our warehouse. Tilbury handles containers, ro-ro and general cargo on the Thames. Your shipping line and routing usually decide the port; we can receive from any of them.",
        ],
      },
    ],
    faqs: [
      { q: "How far is the warehouse from Felixstowe?", a: "About 62 miles (99 km) by road. A car typically takes around 1¼ hours in free-flowing traffic; container lorries take longer." },
      { q: "Is the warehouse at the port?", a: "No. Our warehouse is in Rayleigh, Essex, about 13 miles from London Gateway and 16 miles from Tilbury. Containers are hauled from the port to our site for unloading." },
      { q: "Can you arrange haulage from the port?", a: "Yes. Arca Trade Group, which operates LondraDepo, can arrange customs clearance and haulage from the port, or your forwarder can deliver to us." },
      { q: "Can you unload at the port instead?", a: "No. Unloading takes place at our Rayleigh warehouse, where goods can be stored and fulfilled without further handling." },
    ],
    related: ["/en/london-gateway-tilbury-warehousing", "/en/felixstowe-port-warehousing", "/en/container-arrival-planner", "/en/container-unloading", "/en/uk-import-logistics", "/en/essex-warehouse"],
    cta: { h2: "Plan your port-to-warehouse move", text: "Tell us the arrival port, container size, ETA and what should happen to the goods next." },
  },
];

// Lead magnet: storage cost calculator (paired with the Turkish calculator page).
export const calculatorPages: EnPage[] = [
  {
    slug: "/en/uk-storage-cost-calculator",
    tr: "/ingiltere-depo-maliyet-hesaplama",
    kind: "service",
    serviceType: "Warehouse storage cost calculator",
    modified: "2026-11-10",
    title: "UK Pallet Storage Cost Calculator",
    description:
      "Calculate UK pallet storage costs in seconds: pallets × weeks at £3.50 + VAT per pallet per week, with VAT shown. Then request a full quote for handling, fulfilment and delivery.",
    label: "Storage Cost Calculator",
    eyebrow: "Free tool",
    h1: "UK Pallet Storage Cost Calculator",
    lead:
      "Enter the number of standard pallets and how many weeks you need, and the calculator shows your UK storage cost at LondraDepo's published starting rate of £3.50 + VAT per pallet per week. Storing 10 pallets for 4 weeks, for example, starts at £140 + VAT (£168 including 20% VAT).",
    facts: [
      "Rate used: £3.50 + VAT per standard pallet per week",
      "VAT shown at the UK standard rate of 20%",
      "Goods-in, handling, pick and pack, Amazon prep and delivery are quoted separately",
      "Warehouse: Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY",
    ],
    sections: [
      {
        type: "calculator",
        h2: "Calculate your storage cost",
        intro: "Change the pallets and weeks. The estimate updates instantly; nothing is sent until you request a quote.",
      },
      {
        type: "text",
        h2: "How is the estimate calculated?",
        paras: [
          "The calculator multiplies the number of standard pallets by the number of weeks and by our starting rate of £3.50 + VAT per pallet per week, then adds VAT at 20%. It uses only our published rate, so the figure is a starting price rather than a final quote.",
          "Pallet size, height and weight, product type, storage conditions and how often stock moves can change the rate. Oversized or heavy pallets, and goods that need special handling, are priced after we see the details.",
        ],
      },
      {
        type: "table",
        h2: "Example storage costs",
        head: ["Pallets × weeks", "Storage (ex VAT)", "Incl. 20% VAT"],
        rows: [
          ["5 × 4 weeks", "£70.00", "£84.00"],
          ["10 × 4 weeks", "£140.00", "£168.00"],
          ["20 × 4 weeks", "£280.00", "£336.00"],
          ["50 × 12 weeks", "£2,100.00", "£2,520.00"],
        ],
        note: "Starting-price examples for standard pallets. Other services are quoted separately.",
      },
      {
        type: "list",
        h2: "What the calculator does not include",
        intro: "These services depend on your products and order profile, so we quote them after reviewing your requirements:",
        items: [
          "Goods-in, container unloading and counting",
          "Re-palletising, labelling and repacking",
          "Pick and pack per order and packaging materials",
          "Amazon FBA prep (FNSKU labelling, packing, delivery to Amazon)",
          "UK carriage, pallet and parcel delivery",
          "Freight and customs clearance (available through Arca Trade Group)",
        ],
      },
    ],
    faqs: [
      { q: "How much does it cost to store a pallet in the UK?", a: "At LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week. For example, 10 pallets for 4 weeks start at £140 + VAT, or £168 including VAT." },
      { q: "Is the calculator result a final price?", a: "No. It is a starting-price estimate for standard pallets. Pallet size, product type, storage period and activity can change the total, and other services are quoted separately." },
      { q: "Does the estimate include handling and delivery?", a: "No. Goods-in, unloading, pick and pack, Amazon prep and delivery are quoted separately once we know your products and volumes." },
      { q: "How do I get a full quote?", a: "Use the button under the calculator. Your pallet count is passed to the quote form, so you only add your contact details, product and services." },
    ],
    related: ["/en/uk-warehousing-pricing", "/en/pallet-storage", "/en/blog/uk-pallet-storage-costs", "/en/container-unloading"],
    cta: { h2: "Turn your estimate into a quote", text: "Send your pallet count, product type and services and we will price storage, handling and delivery for your operation." },
  },
  {
    slug: "/en/container-arrival-planner",
    tr: "/konteyner-varis-planlayici",
    kind: "service",
    serviceType: "Container arrival planning",
    modified: "2026-11-10",
    title: "Container Arrival Planner: Port to Essex Warehouse",
    description:
      "Plan your container's arrival in the UK: choose the port, container size, ETA and customs route and get a dated checklist from EORI and pre-advice to unloading and stock booking in Essex.",
    label: "Container Arrival Planner",
    eyebrow: "Free tool",
    h1: "Container Arrival Planner",
    lead:
      "Choose your arrival port, container size, how it is loaded and the ETA, and the planner builds a dated checklist for getting the container from a UK port to our Rayleigh, Essex warehouse. It covers the GB EORI and commodity codes, the customs declaration, pre-advice to the warehouse, haulage, unloading, counting and booking stock into Mintsoft WMS.",
    facts: [
      "Road distances from Rayleigh: London Gateway 13 miles, Tilbury 16 miles, Felixstowe 62 miles",
      "20ft, 40ft and 40ft high-cube FCL plus LCL deliveries received",
      "Freight, haulage and customs clearance available through Arca Trade Group",
      "Storage from £3.50 + VAT per pallet per week, or cross-dock for onward delivery",
    ],
    sections: [
      {
        type: "planner",
        h2: "Plan your container arrival",
        intro: "Change any option and the plan updates instantly. Nothing is sent until you request a quote or message us.",
      },
      {
        type: "steps",
        h2: "What the plan covers",
        items: [
          { title: "Customs set-up", text: "The importer of record needs a GB EORI number and the commodity code for each product, and someone must lodge the import declaration in HMRC's Customs Declaration Service." },
          { title: "Pre-advice", text: "The warehouse needs the container number, ETA, packing list and carton counts per SKU, and whether goods are palletised or loose-loaded." },
          { title: "Haulage and slot", text: "Haulage from the port is booked through Arca Trade Group or your forwarder, and a delivery slot is agreed at Rayleigh." },
          { title: "Unloading and checks", text: "The container is unloaded, counted against the packing list, and visible damage is photographed and reported." },
          { title: "Stock booking", text: "Loose cartons are palletised and labelled where needed, and stock is booked into Mintsoft WMS, then stored or sent on." },
        ],
      },
      {
        type: "table",
        h2: "UK ports and road distance to the warehouse",
        intro: "Measured by road routing from SS6 7FY (November 2026). Times are free-flow car times.",
        head: ["Port", "Road distance", "Typical time"],
        rows: [
          ["DP World London Gateway", "13 miles / 21 km", "~20 minutes"],
          ["Port of Tilbury", "16 miles / 26 km", "~20 minutes"],
          ["Port of Felixstowe", "62 miles / 99 km", "~1¼ hours"],
        ],
      },
      {
        type: "text",
        h2: "Why are the dates only suggestions?",
        paras: [
          "Vessel arrival times move, ports release containers at different speeds and customs can select goods for checks. The planner therefore works back from your ETA with suggested deadlines for paperwork and bookings, and treats everything after arrival as happening once the container is released.",
          "Starting the customs paperwork about three weeks before arrival and sending pre-advice about a week before gives time to fix missing commodity codes or documents before they hold up the delivery.",
        ],
      },
    ],
    faqs: [
      { q: "What information does the warehouse need before a container arrives?", a: "The container number, ETA, packing list, carton counts per SKU and whether the goods are palletised or loose-loaded. With this, unloading can be planned and any palletising or labelling quoted before arrival." },
      { q: "How far is the warehouse from UK container ports?", a: "By road from Rayleigh, Essex, DP World London Gateway is about 13 miles, the Port of Tilbury about 16 miles and the Port of Felixstowe about 62 miles." },
      { q: "Can you arrange haulage and customs clearance?", a: "Yes. Arca Trade Group, which operates LondraDepo, can arrange haulage from the port and lodge the import declaration, or your own forwarder can deliver to the warehouse." },
      { q: "How many pallets fit in a container?", a: "As a rule of thumb, about 10 standard UK pallets fit on the floor of a 20ft container and about 20 in a 40ft container when single-stacked. The real number depends on pallet size, height and how the goods are loaded." },
    ],
    related: ["/en/container-unloading", "/en/locations/port-to-warehouse-logistics", "/en/uk-import-logistics", "/en/blog/uk-importing-guide", "/en/uk-storage-cost-calculator"],
    cta: { h2: "Turn your plan into a quote", text: "Send the container size, port, ETA and packing list and we will quote unloading, storage and onward delivery." },
  },
];

// Port location pages (EN only, no Turkish counterpart). Distances: road routing from SS6 7FY, 10 November 2026.
// Port descriptions limited to what is already stated on the site and its cited Wikipedia sources.
// LondraDepo is not a bonded warehouse and is not at a port: never claim either.
export const portPages: EnPage[] = [
  {
    slug: "/en/london-gateway-tilbury-warehousing",
    tr: "/london-gateway-tilbury-depo",
    kind: "service",
    serviceType: "Port warehousing for London Gateway and Tilbury",
    modified: "2026-11-10",
    title: "Warehouse near London Gateway & Tilbury",
    description:
      "Essex warehouse 13 miles from DP World London Gateway and 16 miles from the Port of Tilbury: container unloading, pallet storage from £3.50 + VAT per week, fulfilment and UK distribution in Rayleigh.",
    label: "London Gateway & Tilbury",
    eyebrow: "Thames ports · ~20 minutes by road",
    h1: "Warehousing near London Gateway and Tilbury",
    lead:
      "LondraDepo's warehouse in Rayleigh, Essex, is about 13 miles (21 km) by road from DP World London Gateway and 16 miles (26 km) from the Port of Tilbury, around 20 minutes by car from each. Containers arriving at either Thames port can be cleared, hauled a short distance to our site, unloaded, counted and booked into stock, then stored from £3.50 + VAT per pallet per week or sent on to UK customers. The warehouse is not at the port and is not a bonded warehouse: goods are stored after customs clearance.",
    facts: [
      "DP World London Gateway (SS17): ~13 miles / 21 km, ~20 minutes",
      "Port of Tilbury (RM18): ~16 miles / 26 km, ~20 minutes",
      "20ft, 40ft and 40ft high-cube FCL plus LCL received",
      "Customs clearance and haulage available through Arca Trade Group",
      "Not a bonded warehouse: goods are stored after clearance",
    ],
    sections: [
      {
        type: "table",
        h2: "London Gateway and Tilbury compared",
        head: ["", "DP World London Gateway", "Port of Tilbury"],
        rows: [
          ["Location", "Thurrock, Essex, on the Thames", "Tilbury, Essex, on the Thames"],
          ["What it handles", "Deep-water container port for large container ships", "Containers, ro-ro and general cargo"],
          ["Road distance to our warehouse", "~13 miles / 21 km", "~16 miles / 26 km"],
          ["Typical car time (free-flow)", "~20 minutes", "~20 minutes"],
        ],
        note: "Road routing from SS6 7FY to each port postcode (10 November 2026). HGVs, port queues and peak traffic take longer. Your shipping line usually decides the port.",
      },
      {
        type: "steps",
        h2: "From the Thames ports to stock on our shelves",
        items: [
          { title: "Pre-advice", text: "Send the container number, ETA, packing list and carton counts per SKU, and say whether goods are palletised or loose-loaded." },
          { title: "Customs clearance", text: "Arca Trade Group's customs team or your broker lodges the import declaration; duty and import VAT are accounted for." },
          { title: "Short haul", text: "A haulier collects the container from London Gateway or Tilbury and delivers it to Rayleigh, a road distance of 13 to 16 miles." },
          { title: "Unload and check", text: "We unload, count against the packing list, photograph visible damage and report any discrepancies." },
          { title: "Book into stock", text: "Loose cartons are palletised and labelled where needed, and stock is booked into Mintsoft WMS." },
          { title: "Store or send on", text: "Goods are stored, picked for orders, or cross-docked to UK customers and Amazon." },
        ],
      },
      {
        type: "text",
        h2: "Why use a warehouse close to the Thames ports?",
        paras: [
          "London Gateway and Tilbury are the closest major container ports to our site, so the road leg from port to warehouse is short compared with ports further away, such as Felixstowe at about 62 miles. Our warehouse is also about 37 miles from central London, so the same stock can serve London and South East customers as well as the rest of Great Britain over the M25.",
          "Unloading, storage, order picking and UK distribution happen in one building, so goods are handled once instead of moving between a port-side yard and a separate fulfilment centre. If your containers arrive at Felixstowe instead, see our Felixstowe page; the process is the same with a longer haul.",
        ],
      },
      {
        type: "links",
        h2: "Plan your delivery",
        items: [
          { href: "/en/container-arrival-planner", title: "Container arrival planner", text: "Pick London Gateway or Tilbury, your container and ETA, and get a dated checklist.", tag: "Free tool" },
          { href: "/en/container-unloading", title: "Container unloading", text: "FCL and LCL devanning, counting, damage photos and re-palletising in Essex.", tag: "Service" },
          { href: "/en/felixstowe-port-warehousing", title: "Felixstowe port warehousing", text: "Containers arriving at the UK's largest container port, about 62 miles away.", tag: "Port" },
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "Wikipedia: London Gateway (deep-water container port in Thurrock)", href: "https://en.wikipedia.org/wiki/London_Gateway" },
          { label: "Wikipedia: Port of Tilbury", href: "https://en.wikipedia.org/wiki/Port_of_Tilbury" },
          { label: "Project OSRM: road routing used for the distances", href: "https://project-osrm.org/" },
        ],
      },
    ],
    faqs: [
      { q: "How far is the warehouse from London Gateway?", a: "About 13 miles (21 km) by road from DP World London Gateway, around 20 minutes by car in free-flowing traffic." },
      { q: "How far is the warehouse from the Port of Tilbury?", a: "About 16 miles (26 km) by road, around 20 minutes by car in free-flowing traffic. Container lorries take longer." },
      { q: "Is this a bonded warehouse?", a: "No. LondraDepo is not a bonded warehouse. Goods are cleared through UK customs before they are stored at our Rayleigh site." },
      { q: "Can you collect containers from London Gateway or Tilbury?", a: "Yes. Arca Trade Group, which operates LondraDepo, can arrange customs clearance and haulage from either port, or your own forwarder can deliver to our warehouse." },
    ],
    related: ["/en/locations/port-to-warehouse-logistics", "/en/container-unloading", "/en/container-arrival-planner", "/en/felixstowe-port-warehousing", "/en/essex-warehouse", "/en/london-warehousing"],
    cta: { h2: "Get a quote for your Thames port container", text: "Send the port, container size, ETA and packing list, and we will quote haulage, unloading, storage and onward delivery." },
  },
  {
    slug: "/en/felixstowe-port-warehousing",
    tr: "/felixstowe-liman-depo",
    kind: "service",
    serviceType: "Port warehousing for Felixstowe",
    modified: "2026-11-10",
    title: "Felixstowe Port Warehousing: Essex Warehouse",
    description:
      "Containers landing at Felixstowe: haulage about 62 miles to our Rayleigh, Essex warehouse, unloading, pallet storage from £3.50 + VAT per week, fulfilment and London distribution.",
    label: "Felixstowe Port Warehousing",
    eyebrow: "Port of Felixstowe · ~62 miles by road",
    h1: "Felixstowe Port Warehousing in Essex",
    lead:
      "Felixstowe is the UK's largest container port, and many deep-sea services from Asia call there. LondraDepo's warehouse is not at the port: it is in Rayleigh, Essex, about 62 miles (99 km) by road, roughly 1¼ hours by car. Containers landing at Felixstowe can be cleared, hauled to our site, unloaded and booked into stock, then stored from £3.50 + VAT per pallet per week, fulfilled or distributed across the UK, with London about 37 miles away. We are not a bonded warehouse, so goods are stored after customs clearance.",
    facts: [
      "Port of Felixstowe (IP11): ~62 miles / 99 km, ~1¼ hours by car",
      "Central London: ~37 miles from the warehouse",
      "20ft, 40ft and 40ft high-cube FCL plus LCL received",
      "Customs clearance and haulage available through Arca Trade Group",
      "Not a bonded warehouse and not at the port",
    ],
    sections: [
      {
        type: "table",
        h2: "Felixstowe container to our warehouse: what to plan",
        head: ["Step", "What it involves"],
        rows: [
          ["Customs", "Import declaration lodged by Arca Trade Group's customs team or your broker; duty and import VAT accounted for"],
          ["Haulage", "About 62 miles / 99 km by road from Felixstowe to Rayleigh; booked through Arca Trade Group or your forwarder"],
          ["Delivery slot", "Agreed in advance with our warehouse after pre-advice"],
          ["Unloading", "Counted against the packing list, damage photographed, loose cartons palletised where needed"],
          ["Next step", "Storage from £3.50 + VAT per pallet per week, order fulfilment, or cross-dock to UK customers and Amazon"],
        ],
        note: "Road distance by routing from SS6 7FY to IP11 (10 November 2026). Times are for a car in free-flowing traffic; container lorries and port queues take longer.",
      },
      {
        type: "text",
        h2: "When an Essex warehouse makes sense for Felixstowe containers",
        paras: [
          "Our site suits importers whose goods need more than storage next to the port. If the same stock has to serve London and South East customers, ecommerce orders, Amazon and wholesale accounts, unloading it once in Rayleigh, about 37 miles from central London, avoids moving it again between a port-side store and a fulfilment centre.",
          "If your goods only need short-term storage beside the port before collection, a warehouse in the Felixstowe area may suit you better. If some of your containers arrive at London Gateway or Tilbury instead, those ports are only 13 to 16 miles from us.",
        ],
      },
      {
        type: "steps",
        h2: "How a Felixstowe delivery works with us",
        items: [
          { title: "Pre-advice", text: "Send the container number, ETA, packing list and carton counts per SKU, and whether goods are palletised or loose-loaded." },
          { title: "Clearance", text: "The declaration is lodged before or on arrival; customs duty is paid on release and import VAT is paid or accounted for." },
          { title: "Haulage", text: "The container is collected at Felixstowe and delivered to Rayleigh in the agreed slot." },
          { title: "Unload and book in", text: "Goods are unloaded, checked and booked into Mintsoft WMS." },
          { title: "Store, fulfil or deliver", text: "Stock is stored, picked for orders or sent straight on to customers." },
        ],
      },
      {
        type: "links",
        h2: "Plan your delivery",
        items: [
          { href: "/en/container-arrival-planner", title: "Container arrival planner", text: "Pick Felixstowe, your container and ETA, and get a dated checklist.", tag: "Free tool" },
          { href: "/en/container-unloading", title: "Container unloading", text: "FCL and LCL devanning, counting, damage photos and re-palletising in Essex.", tag: "Service" },
          { href: "/en/london-gateway-tilbury-warehousing", title: "London Gateway and Tilbury", text: "The closest container ports to our warehouse, 13 to 16 miles away.", tag: "Port" },
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "Wikipedia: Port of Felixstowe (share of UK container traffic)", href: "https://en.wikipedia.org/wiki/Port_of_Felixstowe" },
          { label: "Project OSRM: road routing used for the distances", href: "https://project-osrm.org/" },
        ],
      },
    ],
    faqs: [
      { q: "How far is the warehouse from Felixstowe?", a: "About 62 miles (99 km) by road from the Port of Felixstowe to Rayleigh, Essex, roughly 1¼ hours by car in free-flowing traffic. Container lorries take longer." },
      { q: "Is your warehouse at the Port of Felixstowe?", a: "No. Our warehouse is in Rayleigh, Essex. Containers are hauled from Felixstowe to our site for unloading, storage and fulfilment." },
      { q: "Do you offer bonded storage for Felixstowe containers?", a: "No. LondraDepo is not a bonded warehouse. Goods are cleared through UK customs before they are stored with us." },
      { q: "Can you arrange haulage and customs from Felixstowe?", a: "Yes. Arca Trade Group, which operates LondraDepo, can arrange customs clearance and haulage from Felixstowe, or your own forwarder can deliver to our warehouse." },
    ],
    related: ["/en/locations/port-to-warehouse-logistics", "/en/container-unloading", "/en/container-arrival-planner", "/en/london-gateway-tilbury-warehousing", "/en/uk-import-logistics", "/en/essex-warehouse"],
    cta: { h2: "Get a quote for your Felixstowe container", text: "Send the container size, ETA and packing list, and we will quote haulage, unloading, storage and onward delivery." },
  },
];

/** Industries hub (EN only). Groups existing sector pages and case studies; no new claims. */
export const industryHub: EnPage = {
  slug: "/en/industries",
  tr: "/sektorler",
  kind: "hub",
  modified: "2026-11-10",
  title: "UK Warehousing by Industry",
  description:
    "UK warehousing and fulfilment by industry: food and FMCG, packaging, automotive parts, fashion and ecommerce, bulky goods and electronics, with live case studies.",
  label: "Industries",
  eyebrow: "Sectors we work with",
  h1: "UK Warehousing and Fulfilment by Industry",
  lead:
    "LondraDepo stores, fulfils and distributes goods for manufacturers and brands in food and FMCG, packaging and catering supplies, automotive parts, fashion and ecommerce, bulky goods and consumer electronics. Each sector below links to the matching service page and to live case studies from our warehouse in Rayleigh, Essex, so you can see how a business like yours runs in the UK.",
  facts: [
    "Live UK operations in food, packaging, automotive, fashion, bulky goods and electronics",
    "Pallet, carton and rack storage with stock in Mintsoft WMS",
    "B2B pallet distribution and ecommerce parcel fulfilment from the same stock",
    "Storage from £3.50 + VAT per pallet per week",
  ],
  sections: [
    {
      type: "links",
      h2: "Food and FMCG",
      intro: "Ambient food and fast-moving consumer goods stored on pallets and distributed to UK customers.",
      items: [
        { href: "/en/case-studies/tortilla-uk-distribution", title: "Tortilla and flatbread producer", text: "From a single trial pallet to six 40ft high-cube containers a month.", tag: "Case study" },
        { href: "/en/industries/food-packaging", title: "Packaging and catering supplies", text: "Warehousing and distribution for packaging and catering products.", tag: "Industry" },
        { href: "/en/case-studies/pizza-box-distribution-uk", title: "Pizza box manufacturer", text: "Palletised UK stock and scheduled restaurant deliveries.", tag: "Case study" },
      ],
    },
    {
      type: "links",
      h2: "Automotive and industrial parts",
      intro: "Parts and materials that need careful handling, SKU-level stock control and dealer or workshop delivery.",
      items: [
        { href: "/en/industries/automotive-parts", title: "Automotive parts warehousing", text: "Storage and distribution for OEM and aftermarket parts.", tag: "Industry" },
        { href: "/en/case-studies/uk-auto-parts-warehouse", title: "OEM and aftermarket parts supplier", text: "Damage-controlled storage and dealer delivery across the UK.", tag: "Case study" },
        { href: "/en/case-studies/car-seat-cover-uk-warehousing", title: "Seat cover and faux leather manufacturer", text: "Same-day processing of eBay, Amazon and workshop orders.", tag: "Case study" },
      ],
    },
    {
      type: "links",
      h2: "Fashion and ecommerce brands",
      intro: "Online brands that need pick and pack, returns and fast UK delivery.",
      items: [
        { href: "/en/case-studies/cruyff-uk-fulfilment", title: "Cruyff fashion brand", text: "UK online orders moved from the Netherlands to our Essex warehouse.", tag: "Case study" },
        { href: "/en/shopify-fulfilment-uk", title: "Shopify fulfilment UK", text: "Storage, pick and pack and UK dispatch for Shopify stores.", tag: "Service" },
        { href: "/en/ecommerce-fulfilment", title: "Ecommerce fulfilment", text: "From online order to the customer's door.", tag: "Service" },
      ],
    },
    {
      type: "links",
      h2: "Bulky goods and consumer electronics",
      intro: "Large or technical products that need space, careful handling or preparation before dispatch.",
      items: [
        { href: "/en/case-studies/uk-walking-treadmill-distribution", title: "Walking treadmill brand", text: "Bulky goods storage, online sales and retail distribution across the UK.", tag: "Case study" },
        { href: "/en/case-studies/portable-power-station-uk-operations", title: "Portable power station supplier", text: "Storage, SIM activation, charge checks and end-customer dispatch.", tag: "Case study" },
        { href: "/en/cargo-handling", title: "Cargo handling", text: "Repacking, relabelling and product preparation in Essex.", tag: "Service" },
      ],
    },
    {
      type: "links",
      h2: "Exporters entering the UK",
      items: [
        { href: "/en/uk-warehousing-for-turkish-exporters", title: "For Turkish exporters", text: "Turkey–UK freight and customs through Arca Trade Group, Turkish-speaking team.", tag: "Market entry" },
        { href: "/en/uk-market-entry", title: "UK market entry", text: "Sell in the UK without your own warehouse or staff.", tag: "Market entry" },
      ],
    },
  ],
  faqs: [
    { q: "Which industries does LondraDepo work with?", a: "We run live UK operations for businesses in food and FMCG, packaging and catering supplies, automotive parts and upholstery materials, fashion and ecommerce, bulky goods such as walking treadmills, and consumer electronics such as portable power stations." },
    { q: "Can the same stock serve B2B and online customers?", a: "Yes. The same UK stock can feed pallet deliveries to wholesale and trade customers and parcel orders to online shoppers, so you do not split inventory between providers." },
    { q: "My sector is not listed. Can you still help?", a: "Probably. Tell us your product, packaging, volumes and sales channels, and we will confirm whether our Essex warehouse suits it before quoting." },
  ],
  related: ["/en/uk-warehousing", "/en/uk-fulfilment", "/en/case-studies", "/en/uk-market-entry"],
  cta: { h2: "Tell us about your products", text: "Share your sector, product type, volumes and channels, and we will propose a UK set-up." },
};
