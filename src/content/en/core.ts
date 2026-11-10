import type { EnPage } from "./types";

export const PRICE_NOTE =
  "Standard pallet storage starts from £3.50 + VAT per pallet per week. Goods-in, handling, unloading, re-palletising, customs coordination, fulfilment and delivery are quoted separately for each operation.";

export const corePages: EnPage[] = [
  {
    slug: "/en",
    tr: "/",
    kind: "home",
    title: "UK Warehousing, Fulfilment & Distribution near London",
    description:
      "UK warehousing, ecommerce fulfilment, pallet storage, Amazon prep and UK-wide distribution from our Essex warehouse, 40 minutes from London. Pallet storage from £3.50 + VAT/week.",
    label: "Home",
    eyebrow: "UK 3PL warehouse · Essex, near London",
    h1: "UK Warehousing and Fulfilment for International Brands",
    lead:
      "LondraDepo is a UK third-party logistics (3PL) warehouse in Rayleigh, Essex, about 40 minutes from London. We receive your goods, store them on pallets or shelves, pick and pack your orders and deliver across the UK, so you can sell into the UK market without opening your own warehouse or hiring a UK team.",
    facts: [
      "Warehouse: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY",
      "~40 minutes to London, ~30 minutes to the Port of Tilbury, ~1 hour to Felixstowe",
      "Pallet storage from £3.50 + VAT per pallet per week",
      "Stock managed in Mintsoft WMS (third-party warehouse management software)",
      "FCL and LCL container receiving, pallet and carton storage",
      "Operated by Arca Trade Group Ltd (Company No. 13247691), BIFA member, trading since 2021",
    ],
    sections: [
      {
        type: "cards",
        h2: "What we do in the UK",
        intro: "One operational partner from the moment your goods arrive in the UK until they reach your customer.",
        items: [
          { title: "Warehousing & storage", text: "Short and long-term pallet and carton storage with goods-in, counting and live stock records." },
          { title: "Ecommerce fulfilment", text: "Order processing, pick and pack, shipping labels, dispatch and returns for online stores." },
          { title: "Shopify & Amazon support", text: "Fulfilment for Shopify stores and Amazon FBM sellers, plus Amazon FBA prep. We are not an official Shopify or Amazon partner." },
          { title: "Customs coordination", text: "Coordination support for goods entering the UK, working alongside your customs broker." },
          { title: "Handling", text: "Container and vehicle unloading, sorting, repacking, relabelling and shipment preparation." },
          { title: "UK distribution", text: "Collections, warehouse transfers, B2B pallet deliveries and parcel dispatch across the UK." },
        ],
      },
      {
        type: "steps",
        h2: "How the UK operation works",
        items: [
          { title: "Send", text: "Your supplier or freight forwarder ships the goods to our Essex warehouse address." },
          { title: "Clear", text: "We support customs clearance coordination as the shipment arrives in the UK." },
          { title: "Store", text: "Goods are received, counted, checked for damage and booked into the WMS." },
          { title: "Sell", text: "You keep selling through your own website, Shopify, Amazon or wholesale accounts." },
          { title: "Fulfil", text: "Orders are picked, packed and labelled by our warehouse team." },
          { title: "Deliver", text: "Parcels and pallets are dispatched to customers across the UK." },
        ],
      },
      {
        type: "list",
        h2: "Who we work with",
        items: [
          "Manufacturers exporting to the UK who need local stock",
          "Ecommerce brands selling to UK consumers",
          "Amazon sellers using FBM, or FBA with UK prep",
          "Shopify stores shipping to UK customers",
          "Wholesalers and distributors supplying UK retailers and trade customers",
          "Importers who need receiving, storage and onward distribution",
        ],
        outro:
          "Our clients ship from Turkey, the Netherlands and other countries. Communication is available in English and Turkish.",
      },
    ],
    faqs: [
      { q: "Where is the LondraDepo warehouse?", a: "Our warehouse is at Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom. It is about 40 minutes from London via the A127 and M25." },
      { q: "How much does UK pallet storage cost?", a: "Standard pallet storage starts from £3.50 + VAT per pallet per week. Handling, goods-in, fulfilment and delivery are quoted separately based on your products and volumes." },
      { q: "Do you ship goods internationally to the UK?", a: "No. LondraDepo does not provide international freight. You or your freight forwarder ship the goods to our warehouse; our service starts when the goods arrive in the UK." },
      { q: "Can you fulfil Shopify and Amazon orders?", a: "Yes. We store stock and fulfil orders for businesses selling on Shopify and Amazon (FBM), and prepare stock for Amazon FBA. LondraDepo is not an official Shopify or Amazon partner." },
      { q: "Is there a minimum volume?", a: "There is no fixed minimum pallet quantity. Businesses can start with a small trial volume and scale up; acceptance terms are confirmed at quotation stage." },
    ],
    related: ["/en/uk-warehousing", "/en/uk-fulfilment", "/en/uk-warehousing-pricing", "/en/case-studies"],
    cta: { h2: "Plan your UK operation", text: "Tell us your product type, estimated pallets or cartons, monthly orders and sales channels, and we will prepare a quote." },
  },
  {
    slug: "/en/about-us",
    tr: "/hakkimizda",
    kind: "service",
    title: "About Us – Essex UK Warehouse Operator",
    description:
      "LondraDepo is operated by Arca Trade Group Ltd, a BIFA member trading since 2021, running a UK warehouse in Rayleigh, Essex for international and ecommerce brands.",
    label: "About Us",
    h1: "About LondraDepo",
    lead:
      "LondraDepo.com is the UK warehousing and fulfilment brand of Arca Trade Group Ltd, a company registered in England and Wales (No. 13247691) and operating since 2021. We run a physical warehouse in Rayleigh, Essex, handling everything from container receiving to UK delivery for brands that sell into the UK from abroad.",
    facts: [
      "Legal entity: Arca Trade Group Ltd · Company No. 13247691 · VAT GB353315322",
      "Registered BIFA (British International Freight Association) member",
      "Warehouse: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY",
      "Languages: English and Turkish",
      "Service area: the whole of the UK",
    ],
    sections: [
      {
        type: "text",
        h2: "A physical UK logistics base",
        paras: [
          "Our warehouse sits on the Arterial Park industrial estate in Rayleigh. The site is around 40 minutes from London, 30 minutes from the Port of Tilbury and an hour from Felixstowe, the UK's largest container port. Full container loads (FCL) are delivered and unloaded directly at the site, and the M25 gives us access to the rest of the country.",
          "The operation runs on Mintsoft WMS, so stock levels, inbound and outbound movements and order status are recorded in real time. The same set-up supports Amazon FBA prep, Shopify and ecommerce fulfilment, and B2B wholesale distribution.",
        ],
      },
      {
        type: "text",
        h2: "Who runs the operation",
        paras: [
          "LondraDepo was founded by Sertaç Yılmaz, a co-founder of Arca Trade Group with 18 years of experience in logistics, including export processes into the UK, warehousing and fulfilment. Day-to-day warehouse operations are managed by Yusuf Barış, Operations Manager.",
          "Our founder is a member of the Global Logistics Alliance (GLA) network and is taking part in the 15th GLA Global Logistics Conference in Bangkok in 2026.",
        ],
      },
      {
        type: "list",
        h2: "Where you can verify us",
        items: [
          "Companies House: Arca Trade Group Ltd, No. 13247691",
          "BIFA member directory: Arca Trade Group Ltd",
          "LinkedIn: linkedin.com/company/arcatradegroup",
        ],
      },
    ],
    related: ["/en/essex-warehouse", "/en/uk-warehousing", "/en/case-studies", "/en/contact"],
    cta: { h2: "Let's plan your UK operation", text: "We will design a set-up around your products, volumes and channels." },
  },
  {
    slug: "/en/contact",
    tr: "/iletisim",
    kind: "contact",
    title: "Contact Us – UK Warehouse Quote",
    description:
      "Contact LondraDepo for UK warehousing, fulfilment or distribution. WhatsApp or call +44 7554 195190. Warehouse: Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY.",
    label: "Contact",
    h1: "Contact LondraDepo",
    lead:
      "The fastest way to reach us is WhatsApp or phone on +44 7554 195190. Tell us your product type, volume and the services you need, and we will come back with a tailored quote. Support is available in English and Turkish.",
    facts: [
      "WhatsApp and phone: +44 7554 195190",
      "Warehouse: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom",
      "Delivery area: the whole of the UK, including London, Birmingham, Manchester and Leeds",
      "Languages: English and Turkish",
    ],
    sections: [
      {
        type: "list",
        h2: "What to include in your enquiry",
        items: [
          "Product type and any special handling needs",
          "Estimated number of pallets or cartons, with sizes and weights",
          "Expected monthly order volume and number of SKUs",
          "Sales channels (website, Shopify, Amazon, wholesale)",
          "Services needed: storage, fulfilment, Amazon prep, handling, distribution",
          "How the goods will arrive (FCL, LCL, pallets, parcels) and from which country",
        ],
      },
    ],
    related: ["/en/uk-warehousing-pricing", "/en/about-us", "/en/essex-warehouse"],
  },
  {
    slug: "/en/uk-warehousing-benefits",
    tr: "/ingiltere-depo-avantajlari",
    kind: "service",
    title: "Benefits of a UK Warehouse Partner",
    description:
      "Why use a UK 3PL warehouse: low entry cost from £3.50 + VAT per pallet per week, pallet-based shipments, UK labelling guidance and commodity code pre-checks.",
    label: "UK Warehousing Benefits",
    h1: "The Benefits of Using a UK Warehouse Partner",
    lead:
      "Using a UK warehouse partner lets an overseas business hold stock in the UK, deliver to UK customers faster and test the market without leasing a building or hiring staff. With LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week and there is no full-truckload requirement to get started.",
    facts: [
      "Low starting cost: £3.50 + VAT per pallet per week",
      "Pallet-based, part-load and consolidated shipments accepted",
      "UK labelling and packaging guidance",
      "Commodity (HS) code pre-assessment support",
      "English and Turkish communication",
    ],
    sections: [
      {
        type: "cards",
        h2: "Why brands choose a UK warehouse",
        items: [
          { title: "Low-risk entry cost", text: "Pay weekly per pallet instead of committing to a lease. Prices depend on product type, volume and services, so small first shipments stay affordable." },
          { title: "No full load required", text: "Start with pallet-based or part-load shipments and move to full containers when demand grows." },
          { title: "Faster UK delivery", text: "Stock held in Essex can be dispatched to UK customers on domestic carrier services instead of cross-border parcels." },
          { title: "UK-ready labelling", text: "Guidance on English labelling, UK market requirements, on-pack information, private label and barcode structure, depending on the product group." },
          { title: "Commodity code pre-checks", text: "Before your first shipment we can review the product category, commodity (HS) code and customs risk with you. Final classification remains the importer's responsibility." },
          { title: "Market entry support", text: "Help with an initial operating plan, warehouse and fulfilment model, marketplace set-up and UK distribution. Consultancy scope and fees are quoted separately." },
        ],
      },
      {
        type: "list",
        h2: "Sectors this model suits",
        items: ["Ecommerce brands", "Food manufacturers", "Wholesalers", "Private label producers", "Marketplace sellers"],
      },
    ],
    faqs: [
      { q: "How much does a UK warehouse cost?", a: "LondraDepo standard pallet storage starts from £3.50 + VAT per pallet per week. Handling, loading and unloading, re-palletising, customs coordination and distribution are quoted per shipment." },
      { q: "Do you arrange international shipping to the UK?", a: "No. LondraDepo does not provide international freight. You will need a freight forwarder to move goods to the UK; our service starts on arrival with goods-in, storage, fulfilment and UK distribution." },
      { q: "Can I start with a small volume?", a: "Yes. Pallet-based and part-load models are accepted, and there is no full-truckload requirement." },
      { q: "Do you help with UK labelling compliance?", a: "Depending on the product group, we can guide you on English labelling, UK market requirements and operational suitability. Legal compliance of the product remains the seller's responsibility." },
    ],
    related: ["/en/uk-warehousing-pricing", "/en/pallet-storage", "/en/uk-customs-clearance", "/en/uk-warehousing"],
    cta: { h2: "Start your UK operation", text: "Share your product and volumes and we will suggest the simplest way to start." },
  },
  {
    slug: "/en/uk-warehousing-pricing",
    tr: "/ingiltere-depo-fiyatlari",
    kind: "service",
    title: "UK Warehousing Pricing 2026 – Pallet Storage from £3.50",
    description:
      "UK warehouse and fulfilment pricing explained: pallet storage from £3.50 + VAT per pallet per week, worked examples for 5, 10 and 20 pallets, and the cost lines in a 3PL quote.",
    label: "UK Warehousing Pricing",
    h1: "UK Warehousing Pricing 2026",
    lead:
      "At LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week. Storing 10 standard pallets for four weeks therefore starts at £140 + VAT. Goods-in, handling, pick and pack, labelling, returns, delivery and customs coordination are quoted separately, because they depend on your products and order profile.",
    facts: [
      "Pallet storage: from £3.50 + VAT per pallet per week",
      "4 weeks, storage only: 5 pallets £70, 10 pallets £140, 20 pallets £280 (all + VAT)",
      "Pick and pack: charged per order, based on items and packaging",
      "No fixed minimum: requirements assessed per operation",
    ],
    sections: [
      {
        type: "table",
        h2: "Worked example: storage only, 4 weeks",
        head: ["Pallets", "Weekly rate", "4-week storage (from)"],
        rows: [
          ["5", "£3.50 + VAT per pallet", "£70 + VAT"],
          ["10", "£3.50 + VAT per pallet", "£140 + VAT"],
          ["20", "£3.50 + VAT per pallet", "£280 + VAT"],
        ],
        note: "These are starting-price examples, not a final quote. Pallet size, product type, duration and activity levels affect the total.",
      },
      {
        type: "cards",
        h2: "What makes up a UK 3PL quote",
        items: [
          { title: "Goods-in (inbound)", text: "Unloading, counting and checks, booking into the WMS and putting away." },
          { title: "Pallet storage", text: "Weekly or monthly charge per pallet, with different rates for long-term storage and part pallets." },
          { title: "Carton and shelf storage", text: "For smaller goods that are not palletised, charged per carton or shelf location." },
          { title: "Picking", text: "Charged per order, with a base fee for the first item and a fee for each additional item." },
          { title: "Packing", text: "Based on parcel size, packaging materials and any special packing requirements." },
          { title: "Labelling", text: "Shipping labels, product labels and custom labelling requests." },
          { title: "Delivery", text: "UK carrier services at standard or express speeds; carriage is passed on at cost to the client." },
          { title: "Returns", text: "Receiving and inspecting returns, updating stock and restocking where possible." },
          { title: "Customs coordination", text: "Coordination support and document guidance from customs through to the warehouse." },
        ],
      },
      {
        type: "table",
        h2: "Example operating profiles",
        head: ["Profile", "Typical volume", "Usual services"],
        rows: [
          ["Small business", "10–20 pallets, 100–300 orders a month", "Goods-in, pallet storage, pick and pack, delivery coordination"],
          ["Mid-sized business", "50–100+ pallets, 500+ orders a month", "Goods-in, pallet and carton storage, pick and pack, labelling, returns, delivery coordination"],
        ],
      },
    ],
    faqs: [
      { q: "How are UK warehouse prices calculated?", a: "Our standard pallet storage starts from £3.50 + VAT per pallet per week. Pallet size, storage duration, product type and any handling, loading, re-palletising, customs coordination or fulfilment services affect the total quote." },
      { q: "How much does pallet storage cost in the UK?", a: "Standard pallet storage starts from £3.50 + VAT per week. For example, 10 standard pallets for 4 weeks costs from £140 + VAT for storage only. Other services are quoted separately." },
      { q: "How much does pick and pack cost in the UK?", a: "Pick and pack is charged per order and depends on the product, the number of items per order and the packaging. Share your monthly order volume for a tailored quote." },
      { q: "What information do you need for a quote?", a: "Product type, estimated pallets or cartons, monthly order volume, the services you need and your sales channels such as Shopify, Amazon or wholesale." },
    ],
    related: ["/en/pallet-storage", "/en/pick-and-pack", "/en/blog/uk-warehousing-prices-2026", "/en/blog/uk-pallet-storage-costs"],
    cta: { h2: "Get a tailored quote", text: "Send us your product type, pallet or carton count, monthly orders and sales channels." },
  },
];
