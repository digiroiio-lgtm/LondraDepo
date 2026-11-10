import type { EnPage } from "./types";
import { teamQuote } from "@/content/quotes";

export const PRICE_NOTE =
  "Standard pallet storage starts from £3.50 + VAT per pallet per week. Goods-in, handling, unloading, re-palletising, customs coordination, fulfilment and delivery are quoted separately for each operation.";

export const corePages: EnPage[] = [
  {
    slug: "/en",
    tr: "/",
    kind: "home",
    modified: "2026-11-10",
    title: "UK Warehousing, Fulfilment & Distribution near London",
    description:
      "UK 3PL warehouse in Rayleigh, Essex: pallet storage from £3.50 + VAT a week, container unloading, ecommerce fulfilment, Amazon prep and UK distribution, 13 miles from London Gateway.",
    label: "Home",
    eyebrow: "UK 3PL warehouse · Essex, near London",
    h1: "UK Warehousing and Fulfilment for International Brands",
    lead:
      "LondraDepo is a UK third-party logistics (3PL) warehouse at Unit 19 Arterial Park, Rayleigh, Essex. We unload containers, store goods on pallets or shelves from £3.50 + VAT per pallet per week, pick and pack orders and deliver across the UK, so international businesses can sell in the UK without opening their own warehouse or hiring UK staff.",
    facts: [
      "Warehouse: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY",
      "Pallet storage from £3.50 + VAT per pallet per week",
      "Road distances: London Gateway 13 miles, Tilbury 16 miles, central London 37 miles, Felixstowe 62 miles",
      "FCL and LCL receiving, including 40ft high-cube containers",
      "Stock managed in Mintsoft WMS (third-party warehouse management software)",
      "Operated by Arca Trade Group Ltd (Company No. 13247691), incorporated in 2021, BIFA member",
      "Freight (sea, air, road, rail) and customs clearance through Arca Trade Group",
      "Team works in English and Turkish",
    ],
    sections: [
      {
        type: "text",
        h2: "What does LondraDepo do for international businesses?",
        paras: [
          "LondraDepo gives overseas manufacturers, importers and online brands a ready-made UK operation. We receive goods from any country, store them in our Essex warehouse, prepare business and consumer orders and deliver them anywhere in Great Britain. You keep selling; we run the physical logistics in the UK.",
          "The service covers six connected jobs: goods-in and container unloading, pallet and carton storage, stock control in Mintsoft WMS, pick and pack for ecommerce and wholesale orders, Amazon FBA preparation, and UK distribution by parcel or pallet. Because all six happen in one building, goods are handled once instead of moving between a port-side unloading yard, a storage site and a separate fulfilment centre. That matters because online sales made up around 28% of all retail sales in Great Britain in 2026, up from 19.2% in 2019 according to the Office for National Statistics. That is well above the e-commerce share of retail the US Census Bureau reports for the United States, so most brands entering the UK need parcel and pallet fulfilment from the same stock.",
          "LondraDepo is the warehousing brand of Arca Trade Group, which also arranges international freight and UK customs clearance. That means one group can move your goods from the factory gate to a UK customer, or you can bring your own forwarder and use only the warehouse.",
        ],
      },
      {
        type: "text",
        h2: "Where is the warehouse and how close is it to UK ports?",
        paras: [
          "The warehouse is at Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY. By road it is about 13 miles from DP World London Gateway, 16 miles from the Port of Tilbury, 37 miles from central London and 62 miles from the Port of Felixstowe, the UK's largest container port.",
          "We measured these distances with road routing between our postcode and each port's postcode in November 2026. In free-flowing traffic a car takes roughly 20 minutes to London Gateway or Tilbury, about an hour to central London and around 1¼ hours to Felixstowe; lorries and peak traffic take longer. The A127 connects the site to the M25, so pallets and parcels leave Essex for every region of Great Britain.",
          "In percentage terms, London Gateway is 79% closer to us by road than Felixstowe, and Tilbury is 74% closer. Felixstowe still matters: industry estimates put its share of UK container traffic at roughly 40%, so many deep-sea shipments from Asia arrive there. Rayleigh is not a port location, and we do not claim it is. Containers are hauled from the port to our loading ramp, unloaded on site and then stored or sent straight on to customers.",
        ],
      },
      {
        type: "table",
        h2: "Road distances from the warehouse",
        intro: "Measured by road routing from SS6 7FY to each destination postcode (November 2026). Times are free-flow car times.",
        head: ["Destination", "Road distance", "Typical car time"],
        rows: [
          ["DP World London Gateway (SS17)", "13 miles / 21 km", "~20 minutes"],
          ["Port of Tilbury (RM18)", "16 miles / 26 km", "~20 minutes"],
          ["Central London (Charing Cross)", "37 miles / 59 km", "~1 hour"],
          ["Port of Felixstowe (IP11)", "62 miles / 99 km", "~1¼ hours"],
        ],
      },
      { type: "routemap" },
      {
        type: "text",
        h2: "How much does UK warehousing cost at LondraDepo?",
        paras: [
          "Standard pallet storage at LondraDepo starts from £3.50 + VAT per pallet per week. Storing 10 standard pallets for four weeks therefore starts at £140 + VAT. Goods-in, unloading, pick and pack, labelling, returns, delivery and customs clearance are quoted separately, because they depend on your products and order profile.",
          "For context, a published UK 3PL cost index puts typical mid-market storage at about £3 to £5 per pallet per week, with premium South East and short-term overflow space reaching around £6.50. Our £3.50 starting rate is 30% below the £5 top of that mid-market range and 46% below the £6.50 premium rate, and we publish it so you can budget before you call.",
          "Pick and pack is charged per order, with a base fee for the first item and a smaller fee for each extra item. Amazon FBA prep is priced per unit and task; standard prep in the UK market is often around £0.30 to £0.60 per unit, although that is an industry indication rather than our quote.",
        ],
      },
      {
        type: "table",
        h2: "Storage cost examples (4 weeks, storage only)",
        head: ["Pallets", "Weekly rate", "4-week storage from"],
        rows: [
          ["5", "£3.50 + VAT per pallet", "£70 + VAT"],
          ["10", "£3.50 + VAT per pallet", "£140 + VAT"],
          ["20", "£3.50 + VAT per pallet", "£280 + VAT"],
        ],
        note: "Starting-price examples, not a final quote. Pallet size, product type, duration and activity levels change the total. Market range source: UK 3PL cost index published by eightx.co.",
      },
      {
        type: "text",
        h2: "How does importing into the UK work with LondraDepo?",
        paras: [
          "An import through us follows six steps: plan the shipment, book freight, clear UK customs, deliver to Rayleigh, unload and book stock into the WMS, then fulfil orders. Arca Trade Group can handle freight and the customs declaration; LondraDepo handles everything from the moment goods reach the warehouse.",
          "Arca Trade Group offers sea and air freight worldwide, road freight between the UK and Europe, and rail freight from the Far East and Europe. Its customs team completes import declarations on behalf of customers and advises on commodity codes and preferential origin.",
          "The importer, usually you, still needs a GB EORI number and remains responsible for customs duty and import VAT. Import VAT is normally charged at the standard UK rate of 20%, with a 5% reduced rate and a 0% zero rate for some goods, and VAT-registered businesses can often account for it through postponed VAT accounting. On duty, GOV.UK states that just under half of UK most-favoured-nation tariff lines are set at 0%, and goods that meet the rules of origin under the UK–EU Trade and Cooperation Agreement can enter at a 0% tariff. For US exporters, the US International Trade Administration's UK country guide notes that most industrial goods do not need an import licence to enter the UK. LondraDepo is not a bonded warehouse, so goods are stored after they have been cleared.",
        ],
      },
      {
        type: "quote",
        text: "Arca Trade fully understand the importance of completing accurate and timely declarations to customs on behalf of our customers.",
        cite: "Arca Trade Group, Customs Clearance (company website)",
        sourceLabel: "arcatrade.co.uk/services",
        sourceHref: "https://arcatrade.co.uk/services",
      },
      {
        type: "text",
        h2: "Can LondraDepo fulfil Shopify, Amazon and wholesale orders?",
        paras: [
          "Yes. We fulfil orders for Shopify stores, Amazon sellers using Fulfilled by Merchant (FBM) and wholesale customers from the same stock, and we prepare goods for Amazon FBA. LondraDepo is not an official Shopify or Amazon partner; we provide independent storage and fulfilment for businesses that sell on those platforms.",
          "When an online order arrives, it is passed to Mintsoft WMS, picked from stock, packed in suitable packaging, labelled and handed to the carrier. Wholesale orders follow the same flow at pallet or carton level, with delivery lists for each customer. Returns are received, inspected and put back into stock where possible.",
          "For Amazon FBA we apply FNSKU labels, check packaging against Amazon's rules, help you create shipment plans in Seller Central and deliver to the fulfilment centre Amazon assigns. Once prep is complete, stock usually reaches the Amazon centre within 2 to 5 working days. Search data already shows demand from UK merchants looking for Shopify fulfilment, which is why this is a core service.",
        ],
      },
      {
        type: "text",
        h2: "What results have clients achieved with LondraDepo?",
        paras: [
          "We publish seven live UK operations across six sectors, and at least four of the seven (57%) are manufacturers shipping from Turkey. The clearest growth story is an Ankara-based tortilla and flatbread producer that entered the UK with one trial pallet and now ships six 40ft high-cube containers a month into our warehouse for B2B and consumer distribution.",
          "Cruyff, the fashion brand carrying Johan Cruyff's legacy, moved UK online orders from shipping out of the Netherlands to fulfilment from Essex, cutting UK delivery times by around 80% and offering next-day and 2-day delivery. An OEM and aftermarket car parts supplier now has 100% photo-documented damage tracking at goods-in and dispatch, with next-day delivery to UK dealers.",
          "A car seat cover and faux leather manufacturer has eBay, Amazon and workshop orders processed the same day, and a pizza box producer supplies UK restaurants on fixed weekly or monthly delivery schedules with low-stock alerts. Each case study page explains the set-up step by step.",
        ],
      },
      {
        type: "text",
        h2: "How is stock tracked and reported?",
        paras: [
          "Every stock movement is recorded in Mintsoft WMS, a third-party warehouse management system that LondraDepo uses but does not own. Stock levels, inbound deliveries, outbound orders and order status are recorded in real time, and low-stock alerts can be set per product.",
          "At goods-in, 100% of deliveries are counted against the packing list and visible damage is photographed and reported, so you can claim against a supplier or carrier with evidence. For high-value or fragile goods, such as painted car parts, photos are also taken at dispatch. Pallets are numbered and the warehouse is locked, CCTV-monitored and access-controlled.",
          "Regular stock reports and movement summaries are sent on an agreed schedule in English or Turkish. Lot-level records are available for clients who need traceability, as our packaging client does for recall readiness.",
        ],
      },
      teamQuote("yusufStock"),
      {
        type: "text",
        h2: "Who runs LondraDepo?",
        paras: [
          "LondraDepo is operated by Arca Trade Group Ltd, a company registered in England and Wales under number 13247691 and incorporated in March 2021. The group was founded in Basildon, Essex, is a registered member of the British International Freight Association (BIFA) and now runs its warehouse and office from the Rayleigh site.",
          "The founder, Sertaç Yılmaz, has 18 years of logistics experience covering exports into the UK, warehousing and fulfilment, and takes part in the Global Logistics Alliance network. Day-to-day warehouse operations are led by Yusuf Barış, Operations Manager. The team works in English and Turkish, and the office is open from 07:45 to 17:30 UK time.",
          "You can verify the company on Companies House, in the BIFA member directory and on LinkedIn.",
        ],
      },
      teamQuote("sertacFounder"),
      {
        type: "quote",
        text: "At Arca Trade Group, our aim is to make the logistics process as smooth as possible for our business partners.",
        cite: "Arca Trade Group (company website)",
        sourceLabel: "arcatrade.co.uk",
        sourceHref: "https://arcatrade.co.uk/",
      },
      {
        type: "sources",
        h2: "Sources for the figures on this page",
        items: [
          { label: "Office for National Statistics: internet sales as a percentage of total retail sales (series J4MC)", href: "https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc" },
          { label: "GOV.UK: The UK's integrated tariff schedule (share of 0% MFN tariff lines)", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
          { label: "GOV.UK: VAT rates (20% standard, 5% reduced, 0% zero)", href: "https://www.gov.uk/vat-rates" },
          { label: "US International Trade Administration (trade.gov): United Kingdom import requirements and documentation", href: "https://www.trade.gov/country-commercial-guides/united-kingdom-import-requirements-and-documentation" },
          { label: "US Census Bureau (census.gov): quarterly retail e-commerce sales", href: "https://www.census.gov/retail/ecommerce.html" },
          { label: "Wikipedia: Port of Felixstowe (share of UK container traffic)", href: "https://en.wikipedia.org/wiki/Port_of_Felixstowe" },
          { label: "Wikipedia: London Gateway (deep-water container port in Thurrock)", href: "https://en.wikipedia.org/wiki/London_Gateway" },
          { label: "Wikipedia: Port of Tilbury", href: "https://en.wikipedia.org/wiki/Port_of_Tilbury" },
          { label: "Wikipedia: Third-party logistics (3PL)", href: "https://en.wikipedia.org/wiki/Third-party_logistics" },
          { label: "Wikipedia: EU–UK Trade and Cooperation Agreement (0% tariffs for originating goods)", href: "https://en.wikipedia.org/wiki/EU%E2%80%93UK_Trade_and_Cooperation_Agreement" },
          { label: "Wikipedia: Incoterms", href: "https://en.wikipedia.org/wiki/Incoterms" },
          { label: "eightx: UK 3PL cost index (pallet storage price range)", href: "https://eightx.co/blog/uk-3pl-cost-index" },
          { label: "Distances: road routing from SS6 7FY to each port postcode, November 2026 (OSRM)", href: "https://project-osrm.org/" },
        ],
      },
      {
        type: "text",
        h2: "How do you get started?",
        paras: [
          "Getting started takes four steps: send your requirements, receive a line-by-line quote, ship a first volume and go live. There is no fixed minimum, so many clients begin with one or a few pallets and move to full containers once UK demand is proven.",
          "For an accurate quote, tell us your product type, the number of pallets or cartons with sizes and weights, expected monthly orders and SKUs, your sales channels and how the goods will arrive. If you also need freight or customs clearance, include the origin country and Incoterms.",
          "You can request a quote online in about two minutes, message us on WhatsApp at +44 7554 195190 or call the office on +44 1268 203 283.",
        ],
      },
    ],
    faqs: [
      { q: "Where is the LondraDepo warehouse?", a: "Our warehouse is at Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom. By road it is about 13 miles from London Gateway, 16 miles from Tilbury, 37 miles from central London and 62 miles from Felixstowe." },
      { q: "How much does UK pallet storage cost?", a: "Standard pallet storage starts from £3.50 + VAT per pallet per week, so 10 pallets for four weeks start at £140 + VAT. Handling, goods-in, fulfilment and delivery are quoted separately based on your products and volumes." },
      { q: "Can you ship goods internationally to the UK?", a: "LondraDepo's warehouse service starts when goods arrive in the UK. International freight by sea, air, road and rail, and customs clearance, are available from our parent company Arca Trade Group, so transport and storage can be quoted together. You can also use your own freight forwarder." },
      { q: "Can you fulfil Shopify and Amazon orders?", a: "Yes. We store stock and fulfil orders for businesses selling on Shopify and Amazon (FBM), and prepare stock for Amazon FBA. LondraDepo is not an official Shopify or Amazon partner." },
      { q: "Is there a minimum volume?", a: "There is no fixed minimum pallet quantity. Businesses can start with a small trial volume and scale up; acceptance terms are confirmed at quotation stage." },
      { q: "Is LondraDepo a bonded warehouse?", a: "No. LondraDepo is not an HMRC-authorised customs or bonded warehouse. Goods are stored after they have been cleared into free circulation in the UK." },
    ],
    related: ["/en/uk-warehousing", "/en/uk-import-logistics", "/en/container-unloading", "/en/uk-fulfilment", "/en/uk-market-entry", "/en/uk-warehousing-pricing", "/en/case-studies"],
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
      "Office: +44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 UK time",
    ],
    sections: [
      {
        type: "text",
        h2: "A physical UK logistics base",
        paras: [
          "Our warehouse sits on the Arterial Park industrial estate in Rayleigh. The site is around 40 minutes from east London, 20–30 minutes from the ports of Tilbury and London Gateway and about 62 miles (roughly 1¼ hours) by road from Felixstowe, the UK's largest container port. Full container loads (FCL) are delivered and unloaded directly at the site, and the M25 gives us access to the rest of the country.",
          "The operation runs on Mintsoft WMS, so stock levels, inbound and outbound movements and order status are recorded in real time. The same set-up supports Amazon FBA prep, Shopify and ecommerce fulfilment, and B2B wholesale distribution.",
        ],
      },
      {
        type: "list",
        h2: "Part of Arca Trade Group",
        intro:
          "LondraDepo is the warehousing and fulfilment brand of Arca Trade Group, a logistics provider founded in Basildon, Essex, and now based at the same Rayleigh site. Arca Trade Group works in two main areas, transportation and warehousing, with a strong trade lane between Turkey and the United Kingdom & Ireland. Alongside LondraDepo's warehouse services, the group offers:",
        items: [
          "Sea freight to and from every continent",
          "Air freight for time-critical cargo",
          "Road freight between the UK and Europe, groupage and full loads",
          "Intermodal rail freight from the Far East and Europe to the UK",
          "Customs clearance, including declarations on behalf of customers and advice on commodity codes and preferences",
          "Project cargo",
        ],
        outro: "This means an international business can arrange transport, customs clearance, storage and UK distribution with one group. Freight and customs services are quoted by Arca Trade Group.",
      },
      {
        type: "text",
        h2: "Who runs the operation",
        paras: [
          "LondraDepo was founded by Sertaç Yılmaz, a co-founder of Arca Trade Group with 18 years of experience in logistics, including export processes into the UK, warehousing and fulfilment. Day-to-day warehouse operations are managed by Yusuf Barış, Operations Manager.",
          "Our founder is a member of the Global Logistics Alliance (GLA) network and is taking part in the 15th GLA Global Logistics Conference in Bangkok in 2026.",
        ],
      },
      teamQuote("sertacFounder"),
      teamQuote("yusufGoodsIn"),
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
      "Arca Trade Group office: +44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 UK time",
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
      { q: "Do you arrange international shipping to the UK?", a: "LondraDepo's warehouse service starts when goods arrive in the UK. International freight by sea, air, road and rail, and customs clearance, are available from our parent company Arca Trade Group, so transport and storage can be quoted together. You can also use your own freight forwarder." },
      { q: "Can I start with a small volume?", a: "Yes. Pallet-based and part-load models are accepted, and there is no full-truckload requirement." },
      { q: "Do you help with UK labelling compliance?", a: "Depending on the product group, we can guide you on English labelling, UK market requirements and operational suitability. Legal compliance of the product remains the seller's responsibility." },
    ],
    related: ["/en/uk-market-entry", "/en/uk-warehousing-pricing", "/en/pallet-storage", "/en/uk-import-logistics", "/en/uk-warehousing"],
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
    related: ["/en/blog/uk-import-costs", "/en/uk-storage-cost-calculator", "/en/pallet-storage", "/en/pick-and-pack", "/en/blog/uk-warehousing-prices-2026", "/en/blog/uk-pallet-storage-costs"],
    cta: { h2: "Get a tailored quote", text: "Send us your product type, pallet or carton count, monthly orders and sales channels." },
  },
];
