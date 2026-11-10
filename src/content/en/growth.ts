import type { EnPage } from "./types";

// English-only commercial pages (no Turkish counterpart yet → self-referencing `en` hreflang).
// Facts used here are limited to verified items: the Rayleigh site, FCL/LCL and 40HC receiving,
// published pallet price, case-study figures and Arca Trade Group's published services.

export const growthPages: EnPage[] = [
  {
    slug: "/en/uk-import-logistics",
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
    related: ["/en/container-unloading", "/en/uk-customs-clearance", "/en/uk-market-entry", "/en/pallet-storage", "/en/uk-distribution"],
    cta: { h2: "Plan your next UK import", text: "Tell us the product, origin, volumes and how the goods will arrive. We will quote freight, customs, unloading and storage together or separately." },
  },
  {
    slug: "/en/container-unloading",
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
    related: ["/en/uk-import-logistics", "/en/pallet-storage", "/en/essex-warehouse", "/en/cargo-handling", "/en/blog/what-is-a-uk-transit-warehouse"],
    cta: { h2: "Book a container unloading quote", text: "Send the container size, ETA, packing list and whether goods are palletised or loose-loaded." },
  },
  {
    slug: "/en/industries/food-packaging",
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
    title: "UK Market Entry: Sell in the UK Without Your Own Warehouse",
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
    related: ["/en/uk-import-logistics", "/en/uk-warehousing-benefits", "/en/case-studies/tortilla-uk-distribution", "/en/uk-warehousing-pricing", "/en/case-studies"],
    cta: { h2: "Plan your UK market entry", text: "Tell us what you sell, where you ship from and how you want to sell in the UK." },
  },
];
