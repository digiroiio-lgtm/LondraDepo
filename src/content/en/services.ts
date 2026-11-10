import type { EnPage } from "./types";

const NOT_PARTNER_SHOPIFY = "LondraDepo is not an official Shopify partner. We provide storage and fulfilment for businesses that sell through Shopify.";
const NOT_PARTNER_AMAZON = "LondraDepo is not an official Amazon partner. We provide independent storage and fulfilment for businesses that sell on Amazon.";

const ORDER_STEPS = [
  { title: "Order placed", text: "A customer orders from your online store or marketplace." },
  { title: "Into the WMS", text: "The order is passed to our warehouse management system (Mintsoft)." },
  { title: "Picked", text: "The warehouse team picks the items from stock." },
  { title: "Packed", text: "Items are packed in suitable packaging for transit." },
  { title: "Labelled", text: "A shipping label is created and applied to the parcel." },
  { title: "Dispatched", text: "The parcel is handed to the carrier for delivery to the customer." },
];

export const servicePages: EnPage[] = [
  {
    slug: "/en/uk-warehousing",
    tr: "/ingiltere-depo",
    kind: "service",
    serviceType: "Warehousing",
    title: "UK Warehousing Services – Essex Warehouse near London",
    description:
      "UK warehousing from Essex: goods-in, pallet and carton storage, Mintsoft WMS stock control, order fulfilment and UK-wide distribution. Pallet storage from £3.50 + VAT/week.",
    label: "UK Warehousing",
    eyebrow: "Essex, near London",
    h1: "UK Warehousing and Storage Services",
    lead:
      "LondraDepo provides UK warehousing from Rayleigh, Essex: we receive your goods, store them on pallets or as cartons, keep live stock records in Mintsoft WMS, fulfil orders and distribute across the UK. It gives overseas businesses a ready-made UK warehouse without the cost of leasing a site or employing staff.",
    facts: [
      "Goods-in, pallet storage, carton storage, stock control, order fulfilment, UK distribution",
      "Pallet storage from £3.50 + VAT per pallet per week",
      "Short and long-term storage",
      "Ships to London, Birmingham, Manchester and the rest of the UK",
    ],
    sections: [
      {
        type: "cards",
        h2: "Our UK warehouse services",
        items: [
          { title: "Goods-in", text: "Deliveries are counted, checked and booked into the system on arrival." },
          { title: "Pallet storage", text: "Short and long-term storage for palletised goods, with stock levels visible at any time." },
          { title: "Carton storage", text: "Secure storage for cartons and loose stock, managed at product level." },
          { title: "Stock control", text: "Stock is tracked in Mintsoft WMS and low-stock alerts can be set up." },
          { title: "Order fulfilment", text: "When an order arrives we pick, pack, label and dispatch it to your customer." },
          { title: "UK distribution", text: "Goods leave our Essex warehouse for delivery anywhere in the UK." },
        ],
      },
      {
        type: "list",
        h2: "Who uses our UK warehouse",
        items: [
          "Manufacturers producing abroad and selling in the UK",
          "Ecommerce brands selling via Shopify, Amazon or their own website",
          "Amazon.co.uk sellers fulfilling orders by merchant (FBM)",
          "Wholesalers supplying UK retailers in bulk",
          "Importers bringing in goods on a regular basis",
        ],
      },
    ],
    faqs: [
      { q: "Which areas does your UK warehouse serve?", a: "Our Essex warehouse serves the whole of the UK. We coordinate delivery to London, Birmingham, Manchester and every other region." },
      { q: "Can I ship goods from overseas straight to your warehouse?", a: "Yes. Your supplier or freight forwarder can deliver directly to our warehouse address. Freight and customs clearance are also available through our parent company, Arca Trade Group." },
      { q: "What are your UK warehouse prices?", a: "Standard pallet storage starts from £3.50 + VAT per pallet per week. Handling, loading and unloading, re-palletising, customs coordination and distribution are quoted according to the scope of the operation." },
      { q: "Do you only store goods, or fulfil orders too?", a: "Both. We offer storage and full order fulfilment: when an order arrives we pick, pack, label and dispatch it to your UK customer." },
    ],
    related: ["/en/storage-services", "/en/pallet-storage", "/en/uk-customs-clearance", "/en/ecommerce-fulfilment", "/en/essex-warehouse", "/en/uk-warehousing-pricing"],
    cta: { h2: "Sell in the UK without your own warehouse", text: "Use our ready-made warehouse and team, and focus on sales." },
  },
  {
    slug: "/en/london-warehousing",
    tr: "/londra-depo",
    kind: "service",
    serviceType: "Warehousing",
    title: "London Warehousing – Essex Warehouse 40 Minutes from London",
    description:
      "Warehouse storage for London and the South East from Rayleigh, Essex: 40 minutes from London, 30 minutes from Tilbury, on the M25 corridor. Pallet storage, pick and pack and UK delivery.",
    label: "London Warehousing",
    eyebrow: "Near London, Essex",
    h1: "London Warehousing on the M25 Corridor",
    lead:
      "Our warehouse is in Rayleigh, Essex, roughly 40–50 km (about 40 minutes) from London and 30 minutes from the Port of Tilbury. It is not inside London, but its position on the A127 and M25 routes makes it a practical base for storing stock and delivering quickly to London, the South East and the rest of the UK.",
    facts: [
      "Address: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY",
      "~40 minutes to London, ~30 minutes to Tilbury",
      "Goods-in, pallet and carton storage, Mintsoft WMS, pick and pack, UK delivery",
    ],
    sections: [
      {
        type: "text",
        h2: "An Essex warehouse serving London",
        paras: [
          "If you searched for a London warehouse, an Essex location is often the better-value option: industrial space outside the capital, direct access to the M25 orbital motorway and short journeys to the Thames ports. From Rayleigh we serve London customers and dispatch nationwide.",
        ],
      },
      {
        type: "list",
        h2: "What is included",
        items: [
          "Goods-in and storage",
          "Stock tracking in Mintsoft WMS",
          "Order picking",
          "Packing",
          "Shipping labels",
          "UK-wide delivery",
        ],
        outro: "You do not need a UK company, a warehouse lease or UK employees to get started.",
      },
    ],
    faqs: [
      { q: "Can I get warehouse storage in London?", a: "Yes. Our warehouse is in Essex, close to London, about 40–50 km from the city and fully connected to UK logistics routes. You can store stock with us and fulfil orders across the UK." },
      { q: "Where exactly is the warehouse?", a: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY. It is close to London and easy to reach for trucks and container hauliers." },
      { q: "How do I send products to the warehouse?", a: "Ship your goods to our warehouse address with your own freight forwarder, or ask Arca Trade Group to arrange freight and customs clearance, and on arrival the goods are received, counted and booked into the system." },
      { q: "How do I get a quote?", a: "Contact us on WhatsApp or by phone with your product type, volume, estimated pallets or cartons and the services you need." },
    ],
    related: ["/en/uk-warehousing", "/en/essex-warehouse", "/en/pallet-storage", "/en/uk-warehousing-pricing"],
    cta: { h2: "Get a London warehousing quote", text: "Tell us what you need to store and where your customers are." },
  },
  {
    slug: "/en/uk-ecommerce-logistics",
    tr: "/ingiltere-e-ticaret-lojistigi",
    kind: "service",
    serviceType: "Ecommerce logistics",
    title: "UK Ecommerce Logistics & Order Fulfilment",
    description:
      "End-to-end UK ecommerce logistics from Essex: stock storage, Mintsoft WMS, pick and pack, shipping labels, UK delivery and returns for Shopify, Amazon FBM and other online channels.",
    label: "UK Ecommerce Logistics",
    h1: "UK Ecommerce Logistics and Order Fulfilment",
    lead:
      "UK ecommerce logistics covers everything that happens after an online customer clicks 'buy': holding stock in a UK warehouse, picking and packing the order, labelling it, delivering it and processing returns. LondraDepo runs this process from its Essex warehouse for Shopify, Amazon FBM and other online channels.",
    facts: [
      "Channels: Shopify, Amazon FBM, your own website and other platforms",
      "Stock managed in Mintsoft WMS",
      "Returns handling included in the service scope",
    ],
    sections: [
      { type: "steps", h2: "What happens when an order arrives", items: ORDER_STEPS },
      {
        type: "cards",
        h2: "Channels we support",
        items: [
          { title: "Shopify", text: "We fulfil UK orders from your Shopify store. " + NOT_PARTNER_SHOPIFY },
          { title: "Amazon FBM", text: "We fulfil merchant-fulfilled Amazon orders from Essex. " + NOT_PARTNER_AMAZON },
          { title: "Other online channels", text: "Orders from your own website or other ecommerce platforms." },
        ],
      },
    ],
    faqs: [
      { q: "What is UK ecommerce logistics?", a: "It is the full process of picking, packing and delivering orders from an online store out of a UK warehouse. LondraDepo manages this process from its Essex warehouse." },
      { q: "What is the difference between fulfilment and logistics?", a: "Logistics covers moving and storing goods. Fulfilment covers the whole customer order journey: stock management, pick and pack, shipping labels and dispatch." },
      { q: "Can you fulfil Shopify and Amazon orders?", a: "Yes. We fulfil orders from Shopify stores and Amazon FBM from our Essex warehouse. When an order arrives, the team picks, packs and dispatches it." },
      { q: "How is my UK stock managed?", a: "Stock is tracked in Mintsoft WMS. Stock levels are monitored in real time and every inbound and outbound movement is recorded." },
    ],
    related: ["/en/ecommerce-fulfilment", "/en/shopify-fulfilment-uk", "/en/amazon-fulfilment-uk", "/en/pick-and-pack", "/en/uk-warehousing-pricing"],
  },
  {
    slug: "/en/pick-and-pack",
    tr: "/siparis-toplama-paketleme",
    kind: "service",
    serviceType: "Pick and pack",
    title: "Pick and Pack Services in the UK",
    description:
      "UK pick and pack from our Essex warehouse: order picking, packing, shipping labels, order checks, returns processing and Mintsoft WMS stock sync. Priced per order.",
    label: "Pick and Pack",
    h1: "Pick and Pack Services in the UK",
    lead:
      "Pick and pack is the warehouse process of taking the right items off the shelf for an order (pick), packing them securely (pack) and preparing the parcel for dispatch. At LondraDepo, our Essex team picks, packs, labels and ships your online orders, with every movement updating stock in Mintsoft WMS.",
    facts: [
      "Priced per order, based on items per order and packaging",
      "Suitable for textiles, electronics accessories, homeware, cosmetics and similar goods",
      "Branded packaging can be supplied by the client",
    ],
    sections: [
      { type: "steps", h2: "The pick and pack process", items: ORDER_STEPS },
      {
        type: "cards",
        h2: "What the service covers",
        items: [
          { title: "Order picking", text: "Multi-item orders are picked line by line." },
          { title: "Packing", text: "Packaging is chosen to suit the product." },
          { title: "Shipping labels", text: "Labels with barcode and address are created and applied." },
          { title: "Order checks", text: "Order contents are verified before packing." },
          { title: "Returns processing", text: "Returned items are received, inspected and put back into stock." },
          { title: "Stock sync", text: "Every movement updates stock in Mintsoft WMS." },
        ],
      },
    ],
    faqs: [
      { q: "What is pick and pack?", a: "Pick and pack is the process of collecting the ordered items from warehouse shelves (pick) and then packing them ready for the carrier (pack)." },
      { q: "How does pick and pack work in the UK?", a: "Your stock is held in our Essex warehouse. When an order comes in it is passed to Mintsoft WMS; our team picks it, packs it in suitable packaging, creates a shipping label and dispatches it." },
      { q: "Who supplies the packaging?", a: "Contact us to discuss packaging options. Some clients send their own branded packaging to the warehouse." },
      { q: "How is pick and pack priced?", a: "Pricing depends on order volume, product type and packing requirements. Contact us on WhatsApp for a tailored quote." },
    ],
    related: ["/en/ecommerce-fulfilment", "/en/uk-ecommerce-logistics", "/en/uk-fulfilment", "/en/uk-warehousing-pricing"],
  },
  {
    slug: "/en/shopify-fulfilment-uk",
    tr: "/shopify-ingiltere-depo",
    kind: "service",
    serviceType: "Shopify fulfilment",
    title: "Shopify Fulfilment UK – Warehouse for Shopify Stores",
    description:
      "UK warehouse and order fulfilment for Shopify stores: stock storage in Essex, pick and pack, UK delivery and returns. Integration scope confirmed before quoting.",
    label: "Shopify Fulfilment UK",
    h1: "Shopify Fulfilment in the UK",
    lead:
      "LondraDepo stores stock for Shopify merchants in its Essex warehouse and fulfils their UK orders: when a customer orders, our team picks, packs and ships the parcel. You can sell to UK customers from any country without setting up your own UK warehouse. " + NOT_PARTNER_SHOPIFY,
    facts: [
      "Stock held in Essex, near London",
      "Pick, pack and dispatch handled by our warehouse team",
      "Returns handling included",
      "Order import and automation scope confirmed before quoting",
    ],
    sections: [
      {
        type: "steps",
        h2: "Shopify fulfilment process",
        items: [
          { title: "Send stock", text: "Ship your products to our Essex warehouse." },
          { title: "Goods-in", text: "Items are counted, checked and booked into the WMS." },
          { title: "Order placed", text: "A UK customer orders from your Shopify store." },
          { title: "Picked", text: "The team picks the order from stock." },
          { title: "Packed", text: "The item is packed in suitable packaging." },
          { title: "Dispatched", text: "The order is delivered to your UK customer." },
        ],
      },
      {
        type: "text",
        h2: "Planning for 100 or 200 orders a month",
        paras: [
          "A monthly volume of 100 or 200 orders does not set a fixed fulfilment price on its own. Product size, number of SKUs, average items per order, pallets or cartons in storage, packaging needs, return rate and delivery regions are assessed together.",
          "We plan goods-in, stock visibility, order import, pick and pack and UK delivery. The automation scope of the Shopify connection is verified before we quote; we do not promise an automatic connection or a specific delivery time in advance.",
          "Standard pallet storage starts from £3.50 + VAT per week; picking, packing, goods-in, returns and carriage are quoted separately. Share your monthly order count, SKU count and product details for a volume-based quote.",
        ],
      },
    ],
    faqs: [
      { q: "Can I find a UK warehouse for my Shopify store?", a: "Yes. LondraDepo offers stock storage and order fulfilment in Essex for businesses selling on Shopify. When an order comes in, our team picks, packs and ships it to your UK customer." },
      { q: "Is LondraDepo an official Shopify partner?", a: "No. LondraDepo is not an official Shopify partner. We provide fulfilment and storage support to businesses selling through Shopify." },
      { q: "Are Shopify orders processed automatically?", a: "We recommend discussing order import and integration options with us. We plan the operational process together and confirm the automation scope before quoting." },
      { q: "My Shopify store is registered outside the UK. Can I sell to UK customers?", a: "Yes. You can sell to the UK with a store registered in another country. You will need to hold stock in a UK warehouse and meet the customs requirements for importing goods into the UK." },
    ],
    related: ["/en/ecommerce-fulfilment", "/en/uk-ecommerce-logistics", "/en/pick-and-pack", "/en/uk-warehousing-pricing"],
  },
  {
    slug: "/en/amazon-seller-warehousing-uk",
    tr: "/amazon-ingiltere-depo",
    kind: "service",
    serviceType: "Amazon FBM fulfilment",
    title: "UK Warehouse for Amazon Sellers (FBM)",
    description:
      "UK warehousing and order fulfilment for Amazon sellers using Fulfilled by Merchant (FBM), plus FBA prep. Compare FBM and FBA and run Amazon UK from our Essex warehouse.",
    label: "Amazon Seller Warehousing",
    h1: "UK Warehousing for Amazon Sellers (FBM)",
    lead:
      "If you sell on Amazon.co.uk with Fulfilled by Merchant (FBM), LondraDepo can act as your UK warehouse: we store your stock in Essex and pick, pack and ship each Amazon order to the customer. If you use Fulfilled by Amazon (FBA), we prepare and send your stock to Amazon instead. " + NOT_PARTNER_AMAZON,
    facts: [
      "FBM: stock in our warehouse, orders fulfilled by our team",
      "FBA: FNSKU labelling, packing and shipment preparation",
      "Amazon's delivery and seller performance rules still apply",
    ],
    sections: [
      {
        type: "table",
        h2: "FBM or FBA?",
        head: ["", "FBM – Fulfilled by Merchant", "FBA – Fulfilled by Amazon"],
        rows: [
          ["Where stock is held", "Your own or a third-party warehouse such as LondraDepo", "Amazon fulfilment centres"],
          ["Who fulfils orders", "You or your warehouse", "Amazon"],
          ["Storage costs", "Under your control", "Set by Amazon"],
          ["Restrictions", "Not subject to FBA inbound restrictions", "Amazon FBA prep and acceptance rules"],
          ["Benefits", "Control over stock and packaging", "Prime badge, Amazon network, returns handled by Amazon"],
        ],
      },
      {
        type: "steps",
        h2: "FBM fulfilment process",
        items: [
          { title: "Send stock", text: "Ship your products to our Essex warehouse." },
          { title: "Goods-in", text: "Items are counted, checked and booked into the WMS." },
          { title: "Amazon order", text: "A customer orders from your Amazon store." },
          { title: "Picked", text: "The team picks the order from stock." },
          { title: "Packed", text: "The item is packed in suitable packaging." },
          { title: "Dispatched", text: "The order is delivered to the UK customer." },
        ],
      },
      {
        type: "text",
        h2: "FBA prep versus FBM fulfilment",
        paras: [
          "With FBA, goods go into Amazon's fulfilment network. Prep tasks such as FNSKU labelling, packing and shipment preparation are planned around the product and Amazon's current acceptance requirements. LondraDepo quotes the prep scope and price per product.",
          "With FBM, goods can be stored in a third-party warehouse and we manage pick and pack and UK dispatch when an order arrives. Amazon's delivery and seller performance requirements still apply, and no specific outcome is guaranteed.",
          "For a quote, share SKUs and quantities, dimensions, labelling or packing needs, pallet count and whether you will use FBA or FBM. FBA prep is not free: storage, prep and dispatch are priced separately.",
        ],
      },
    ],
    faqs: [
      { q: "What is Amazon FBM?", a: "FBM (Fulfilled by Merchant) is the model in which the Amazon seller, or a third-party warehouse, holds the stock and ships each order. LondraDepo provides third-party warehousing for FBM sellers." },
      { q: "Why use LondraDepo for Amazon FBM?", a: "FBM requires stock to be held in the UK and orders to be dispatched quickly. We provide pick and pack and UK delivery coordination from Essex, so you can run FBM without your own warehouse." },
      { q: "Is LondraDepo an official Amazon partner?", a: "No. LondraDepo is not an official Amazon partner. We provide independent storage and fulfilment to businesses selling on Amazon with FBM." },
      { q: "Can I meet Amazon's FBM performance requirements?", a: "Amazon sets FBM delivery time and performance requirements. Fulfilling from a UK warehouse helps you meet UK delivery times, but the final performance assessment is made by Amazon." },
    ],
    related: ["/en/amazon-fulfilment-uk", "/en/amazon-prep-uk", "/en/uk-warehousing", "/en/blog/amazon-fba-vs-uk-fulfilment"],
  },
  {
    slug: "/en/uk-fulfilment",
    tr: "/ingiltere-fulfillment",
    kind: "service",
    serviceType: "Fulfilment",
    title: "UK Fulfilment Services – Storage, Packing & Delivery",
    description:
      "UK fulfilment services from Essex: order picking, branded packing, Amazon FBA prep, Shopify and Etsy order handling, returns management and regular stock reporting.",
    label: "UK Fulfilment",
    h1: "UK Fulfilment Services",
    lead:
      "UK fulfilment means storing your stock in a UK warehouse and having each customer order picked, packed and shipped for you. LondraDepo runs fulfilment from its Essex operation for brands that import into the UK, covering picking, packing, Amazon FBA prep, multichannel orders and returns.",
    facts: [
      "No fixed minimum stock requirement",
      "Shopify orders and Amazon FBM can be fulfilled from the same warehouse",
      "Amazon FBA prep is a separate process",
    ],
    sections: [
      {
        type: "cards",
        h2: "What our fulfilment covers",
        items: [
          { title: "Picking", text: "Every order is picked accurately from warehouse shelves." },
          { title: "Packing", text: "Products are packed to your brand standards." },
          { title: "Amazon FBA prep", text: "FBA-compliant labelling, preparation and dispatch to Amazon." },
          { title: "Shopify and Etsy orders", text: "Orders from your ecommerce platforms are brought into the fulfilment flow; the integration scope is confirmed with you." },
          { title: "Returns management", text: "UK returns are received, inspected and reported." },
          { title: "Stock tracking", text: "Stock levels are reported regularly and alerts can be set." },
        ],
      },
    ],
    faqs: [
      { q: "Can I manage Shopify and Amazon orders from one UK warehouse?", a: "Shopify orders and Amazon FBM shipments can be prepared from the same warehouse where the right integration and stock management are in place. Amazon FBA prep, labelling and dispatch to Amazon is a separate process. Suitability is confirmed against your products and operating needs." },
      { q: "What is UK fulfilment?", a: "Fulfilment is the process of picking, packing and shipping customer orders from a warehouse. We store your products in our UK warehouse, prepare orders and send them to your customers." },
      { q: "Do you support Amazon FBA?", a: "Yes. Through our Amazon prep service we make products FBA-compliant, label them and dispatch them to the Amazon fulfilment centre." },
      { q: "Is there a minimum stock level for fulfilment?", a: "There is no fixed minimum stock requirement. We offer flexible solutions based on your needs." },
    ],
    related: ["/en/pallet-storage", "/en/amazon-prep-uk", "/en/uk-warehousing-benefits", "/en/blog/what-is-uk-fulfilment"],
  },
  {
    slug: "/en/pallet-storage",
    tr: "/palet-depolama",
    kind: "service",
    serviceType: "Pallet storage",
    title: "Pallet Storage UK – From £3.50 per Pallet per Week",
    description:
      "UK pallet storage in Essex near London from £3.50 + VAT per pallet per week. Container and part-load receiving, secure storage, weekly reporting and B2B dispatch preparation.",
    label: "Pallet Storage",
    h1: "UK Pallet Storage in Essex",
    lead:
      "LondraDepo offers pallet storage in Rayleigh, Essex, near London, from £3.50 + VAT per standard pallet per week. We receive container and part-load deliveries, store pallets in a locked, CCTV-monitored warehouse with controlled access, report stock movements and prepare pallets for B2B distribution.",
    facts: [
      "From £3.50 + VAT per standard pallet per week",
      "4 weeks, storage only: 5 pallets £70, 10 pallets £140, 20 pallets £280 (+ VAT)",
      "No fixed minimum number of pallets",
      "Weekly billing: store for as long as you need",
    ],
    sections: [
      {
        type: "cards",
        h2: "Pallet storage service",
        items: [
          { title: "Pallet receiving", text: "Containers and part loads are received into the warehouse." },
          { title: "Counting and checks", text: "Every pallet is counted and damaged goods are reported." },
          { title: "Secure storage", text: "Locked, CCTV-monitored warehouse space with controlled access." },
          { title: "Weekly reporting", text: "Stock levels and pallet movements are reported regularly." },
          { title: "Flexible duration", text: "Weekly billing lets you store for as long as you need." },
          { title: "Dispatch preparation", text: "Pallets are broken down by order and prepared for distribution." },
        ],
      },
      {
        type: "text",
        h2: "Costs, acceptance and B2B dispatch",
        paras: [
          "Pallet size (Euro or UK pallet), height, weight, product type, stacking conditions and storage period can affect acceptance and pricing. For container or part-load deliveries, unloading, handling, counting and any re-palletising are assessed before the goods arrive.",
          "Goods-in, loading, unloading, distribution and customs coordination are not included in the base storage price. Distribution scope, delivery addresses and transport charges are confirmed separately.",
          "For a quote, share the number of pallets, dimensions, approximate weight, product type, expected storage weeks, how the goods will arrive and how often you will dispatch.",
        ],
      },
    ],
    faqs: [
      { q: "How do I get a quote for 10 pallets in the UK?", a: "Share the number of pallets, pallet dimensions and approximate weights, product type, storage duration, delivery location and any goods-in or distribution services you need. Pricing is set according to the scope of the operation." },
      { q: "How is UK pallet storage priced?", a: "Our standard pallet storage starts from £3.50 + VAT per pallet per week. Quotes may vary with pallet size, product characteristics and storage conditions. Handling, loading, unloading, re-palletising and customs coordination are assessed separately." },
      { q: "What is the minimum number of pallets?", a: "There is no fixed minimum. We work with everyone from small businesses to large-volume importers." },
      { q: "How are pallets kept secure?", a: "The warehouse is locked with controlled access. Every pallet is numbered and tracked in the stock system." },
    ],
    related: ["/en/uk-warehousing-pricing", "/en/blog/uk-pallet-storage-costs", "/en/uk-fulfilment", "/en/essex-warehouse"],
  },
  {
    slug: "/en/amazon-prep-uk",
    tr: "/amazon-prep-uk",
    kind: "service",
    serviceType: "Amazon FBA prep",
    title: "Amazon Prep UK – FBA Prep Service in Essex",
    description:
      "Amazon FBA prep in the UK: FNSKU labelling, FBA compliance checks, packing, shipment plan support and delivery to Amazon UK fulfilment centres from our Essex warehouse.",
    label: "Amazon Prep UK",
    h1: "Amazon Prep UK: FBA Prep Service",
    lead:
      "Amazon FBA prep is the labelling, packing and preparation work products need before Amazon will accept them into its fulfilment centres. LondraDepo does this from Essex: FNSKU labelling, compliance checks, packing, shipment plan support and delivery to the Amazon UK fulfilment centre Amazon assigns. " + NOT_PARTNER_AMAZON,
    facts: [
      "Priced per product, quantity and task – FBA prep is not free",
      "Typical UK market rate for standard prep: around £0.30–£0.60 per unit (indicative, not our quote)",
      "Usually 2–5 working days from completed prep to arrival at Amazon",
      "Focus on Amazon UK (amazon.co.uk); support available for Amazon EU marketplaces",
    ],
    sections: [
      {
        type: "cards",
        h2: "What our Amazon prep covers",
        items: [
          { title: "FNSKU labelling", text: "We apply the FNSKU and barcode labels Amazon requires." },
          { title: "FBA compliance checks", text: "Products are checked against Amazon FBA requirements." },
          { title: "Packing and preparation", text: "Goods are prepared to Amazon's packaging and carton rules." },
          { title: "Shipment plans", text: "Support with creating shipment plans in Amazon Seller Central." },
          { title: "Delivery to Amazon", text: "Prepared goods are delivered to the assigned Amazon UK fulfilment centre." },
          { title: "Tracking and reporting", text: "Check-in at the Amazon fulfilment centre is followed up after dispatch." },
        ],
      },
    ],
    faqs: [
      { q: "Is Amazon FBA prep free, and how is it priced?", a: "No. FNSKU labelling, product checks, polybagging, packing, carton and pallet preparation are charged according to need. Standard prep in the UK market is often around £0.30–£0.60 per unit; this is not a LondraDepo quote. We set the exact fee by product type, quantity and scope." },
      { q: "What is Amazon FBA prep?", a: "Amazon FBA prep covers the labelling, packing and preparation needed for your products to be accepted into an Amazon UK fulfilment centre." },
      { q: "How long does it take to get stock to Amazon UK?", a: "Once prep is complete in our Essex warehouse, products usually reach the Amazon fulfilment centre within 2–5 working days." },
      { q: "Which Amazon marketplaces do you serve?", a: "Our main focus is prep and dispatch for Amazon UK (amazon.co.uk). We also provide support for Amazon EU marketplaces." },
      { q: "Do you do FNSKU labelling?", a: "Yes. The FNSKU and barcode labelling Amazon requires is part of our service." },
    ],
    related: ["/en/blog/amazon-prep-uk-guide", "/en/amazon-seller-warehousing-uk", "/en/amazon-fulfilment-uk", "/en/essex-warehouse"],
  },
  {
    slug: "/en/storage-services",
    tr: "/depolama",
    kind: "service",
    serviceType: "Storage",
    title: "UK Storage Services – Pallet, Carton & Mintsoft WMS",
    description:
      "UK storage services: pallet and carton goods-in, real-time stock tracking in Mintsoft WMS, FCL container unloading, and short or long-term warehouse capacity in Essex.",
    label: "Storage Services",
    h1: "UK Storage Services: Pallets, Cartons and WMS",
    lead:
      "Our UK storage service covers the technical side of holding stock: pallet and carton goods-in, FCL container unloading, real-time stock tracking in Mintsoft WMS and flexible short or long-term capacity at our Essex warehouse.",
    facts: [
      "Short-term and long-term storage",
      "Pallet and carton storage",
      "Real-time stock records in Mintsoft WMS",
      "Goods accepted from any supplier or country",
    ],
    sections: [
      {
        type: "cards",
        h2: "Storage service scope",
        items: [
          { title: "Short-term storage", text: "Flexible space for temporary or seasonal stock." },
          { title: "Long-term storage", text: "Secure space for permanent UK stock." },
          { title: "Pallet and carton storage", text: "Organised, secure storage for palletised and boxed goods." },
          { title: "Goods-in and counting", text: "Incoming goods are received and counted under controlled conditions." },
          { title: "Stock management", text: "Stock levels and movements are recorded in Mintsoft WMS." },
          { title: "Stock monitoring", text: "The status of your products in the warehouse is tracked systematically." },
        ],
      },
    ],
    faqs: [
      { q: "Is short-term storage possible?", a: "Yes. Both short-term and long-term storage options are available." },
      { q: "Do you accept pallets?", a: "Yes. We accept both palletised and carton goods." },
      { q: "How is stock tracked?", a: "Stock levels and product movements are recorded in Mintsoft warehouse management software (WMS)." },
      { q: "Do you accept goods from overseas suppliers?", a: "Yes. We receive goods from any supplier or country at our warehouse address." },
    ],
    related: ["/en/uk-warehousing", "/en/pallet-storage", "/en/uk-warehousing-pricing", "/en/blog/what-is-a-uk-transit-warehouse"],
  },
  {
    slug: "/en/uk-customs-clearance",
    tr: "/gumrukleme",
    kind: "service",
    serviceType: "Customs clearance",
    title: "UK Customs Clearance for Imports",
    description:
      "UK import customs clearance through Arca Trade Group's customs team, with commodity code advice, arrival coordination and direct handover into our Essex warehouse.",
    label: "UK Customs Clearance",
    h1: "UK Customs Clearance for Imports",
    lead:
      "Customs clearance for goods imported into the UK is handled by the customs clearance team of Arca Trade Group, the company that operates LondraDepo. The team completes declarations on behalf of customers and advises on customs procedures, commodity codes and preferences. Once goods are cleared, they are delivered to our Essex warehouse, counted and booked into stock.",
    note:
      "Customs clearance is provided by Arca Trade Group and quoted separately from warehousing. LondraDepo is not an HMRC-authorised customs or bonded warehouse: goods are stored after clearance. You can also use your own customs broker.",
    sections: [
      {
        type: "cards",
        h2: "Scope of our customs support",
        items: [
          { title: "Import declarations", text: "Arca Trade Group's customs team completes import declarations on your behalf." },
          { title: "Commodity codes and preferences", text: "Advice on customs procedures, commodity codes and preferential origin." },
          { title: "Arrival coordination", text: "Coordination when your shipment arrives in the UK." },
          { title: "Customs to warehouse", text: "We manage the process until cleared goods are received into our warehouse." },
        ],
      },
    ],
    faqs: [
      { q: "Who handles the UK customs declaration?", a: "The customs clearance team of Arca Trade Group, the company that operates LondraDepo, completes declarations on behalf of customers. You can also work with your own customs broker and simply deliver cleared goods to our warehouse." },
      { q: "Can you clear goods shipped from abroad?", a: "Yes. Arca Trade Group clears goods shipped into the UK from Turkey, Europe and other countries, and can also arrange the sea, air, road or rail freight." },
      { q: "Is LondraDepo a bonded or customs warehouse?", a: "No. LondraDepo is not an HMRC-authorised customs warehouse. Goods are stored after they have been cleared for free circulation in the UK." },
      { q: "How are goods received after customs?", a: "Once clearance is complete, your goods are delivered to our warehouse address, counted and booked into the warehouse system." },
    ],
    related: ["/en/uk-warehousing", "/en/uk-warehousing-benefits", "/en/essex-warehouse"],
  },
  {
    slug: "/en/cargo-handling",
    tr: "/ellecleme",
    kind: "service",
    serviceType: "Cargo handling",
    title: "Cargo Handling UK – Unloading, Repacking & Relabelling",
    description:
      "UK cargo handling in Essex: vehicle and container unloading, loading, pallet and carton handling, sorting, repacking, labelling and relabelling, and shipment preparation.",
    label: "Cargo Handling",
    h1: "UK Cargo Handling Services",
    lead:
      "Cargo handling covers the physical work done with goods in the warehouse: unloading and loading vehicles, moving pallets and cartons, sorting, repacking, labelling or relabelling and getting shipments ready to go. LondraDepo provides these services at its Essex warehouse, priced by task, volume and scope.",
    sections: [
      {
        type: "cards",
        h2: "Handling services",
        items: [
          { title: "Vehicle unloading", text: "Orderly, controlled unloading of incoming vehicles and containers." },
          { title: "Vehicle loading", text: "Loading vehicles ready for dispatch." },
          { title: "Pallet handling", text: "Safe movement and placement of pallets within the warehouse." },
          { title: "Carton handling", text: "Receiving, counting and putting away cartons." },
          { title: "Goods-in checks", text: "Receiving and inspecting incoming goods." },
          { title: "Sorting", text: "Sorting goods by type, size or destination." },
          { title: "Repacking", text: "Repacking products when required." },
          { title: "Labelling and relabelling", text: "Labelling products to meet shipment requirements." },
          { title: "Shipment preparation", text: "Getting goods ready for dispatch." },
        ],
      },
    ],
    faqs: [
      { q: "Which tasks are included in cargo handling?", a: "Vehicle unloading and loading, pallet and carton handling, goods-in checks, sorting, repacking, labelling and shipment preparation." },
      { q: "Do you repack damaged or mislabelled goods?", a: "Yes. We renew damaged packaging, replace incorrect labels and repack goods to meet sales requirements." },
      { q: "Do you support handling for Amazon or Shopify orders?", a: "Yes. We carry out product preparation, labelling and shipment preparation for ecommerce platforms alongside our fulfilment operation." },
      { q: "How is handling priced?", a: "Pricing depends on the type of task, the volume of goods and the scope of the service. Contact us on WhatsApp for a quote for your operation." },
    ],
    related: ["/en/uk-warehousing", "/en/pallet-storage", "/en/uk-distribution"],
  },
  {
    slug: "/en/uk-distribution",
    tr: "/nakliye-dagitim",
    kind: "service",
    serviceType: "UK distribution",
    title: "UK Distribution & Collection Services",
    description:
      "UK distribution coordination from Essex: collections from other UK locations, warehouse transfers, local delivery around London and Essex, and UK-wide pallet and parcel delivery.",
    label: "UK Distribution",
    h1: "UK Distribution and Collection Services",
    lead:
      "LondraDepo coordinates transport within the UK: collecting goods from other UK sites, moving stock between warehouses, local delivery around London and Essex, and UK-wide delivery to London, Birmingham, Manchester and beyond. There is no fixed minimum, from a single carton to full pallet loads.",
    sections: [
      {
        type: "cards",
        h2: "Distribution services",
        items: [
          { title: "Collections", text: "Collecting goods from another UK location and bringing them to our warehouse." },
          { title: "Warehouse transfers", text: "Transfers within and between warehouses." },
          { title: "Local distribution", text: "Local delivery around London and Essex." },
          { title: "UK-wide delivery", text: "Delivery coordination to every region of the UK." },
          { title: "Shipment preparation", text: "Getting goods ready for distribution." },
          { title: "Coordination", text: "End-to-end coordination of the transport process." },
        ],
      },
    ],
    faqs: [
      { q: "Can you collect goods from another UK location?", a: "Yes. We coordinate collections from other UK sites and delivery to our Essex warehouse. Contact us on WhatsApp for details." },
      { q: "Do you deliver to every part of the UK?", a: "Yes. From Essex we coordinate delivery to London, Birmingham, Manchester and the rest of the UK." },
      { q: "Is there a minimum shipment size?", a: "There is no fixed minimum. We coordinate everything from small parcels to large pallet shipments." },
      { q: "How is distribution priced?", a: "Pricing depends on shipment volume, distance and service scope. Message us on WhatsApp for a bespoke quote." },
    ],
    related: ["/en/cargo-handling", "/en/uk-warehousing", "/en/essex-warehouse"],
  },
  {
    slug: "/en/ecommerce-fulfilment",
    tr: "/e-ticaret-fulfillment",
    kind: "service",
    serviceType: "Ecommerce fulfilment",
    title: "Ecommerce Fulfilment UK – Pick, Pack & Dispatch",
    description:
      "Ecommerce fulfilment in the UK: order management, Mintsoft WMS stock tracking, pick and pack, shipping labels, packing, UK dispatch and returns handling from Essex.",
    label: "Ecommerce Fulfilment",
    h1: "Ecommerce Fulfilment in the UK",
    lead:
      "Ecommerce fulfilment connects your online store to a physical warehouse. When an order arrives, LondraDepo's warehouse team takes over: picking the products, packing them, labelling the parcel and dispatching it to your UK customer, with returns handled in the same operation.",
    sections: [
      { type: "steps", h2: "From online order to customer delivery", items: ORDER_STEPS },
      {
        type: "cards",
        h2: "Fulfilment scope",
        items: [
          { title: "Order management", text: "Incoming orders are managed systematically." },
          { title: "Stock tracking", text: "Real-time stock levels in Mintsoft WMS." },
          { title: "Pick and pack", text: "Picking and packing by order." },
          { title: "Shipping labels", text: "Creating and applying carrier labels." },
          { title: "Packing", text: "Packaging suited to transit." },
          { title: "Dispatch", text: "UK-wide dispatch of completed orders." },
          { title: "Returns", text: "Receiving and processing customer returns." },
        ],
      },
    ],
    faqs: [
      { q: "What does ecommerce fulfilment include?", a: "Order management, stock tracking in Mintsoft WMS, pick and pack, shipping labels, packing, UK dispatch and returns handling." },
      { q: "Which sales channels can you fulfil?", a: "Orders from Shopify, Amazon FBM, your own website and other online platforms. The order import method is agreed with you before go-live." },
    ],
    related: ["/en/pick-and-pack", "/en/uk-ecommerce-logistics", "/en/shopify-fulfilment-uk", "/en/uk-warehousing-pricing"],
  },
  {
    slug: "/en/amazon-fulfilment-uk",
    tr: "/amazon-fulfillment",
    kind: "service",
    serviceType: "Amazon fulfilment",
    title: "Amazon Fulfilment UK – Storage & Order Handling",
    description:
      "Amazon fulfilment support in the UK: secure stock storage, order management, pick and pack, Amazon-compliant labelling, Mintsoft WMS tracking and UK delivery, plus FBA prep.",
    label: "Amazon Fulfilment UK",
    h1: "Amazon Fulfilment in the UK",
    lead:
      "LondraDepo supports businesses selling on Amazon in the UK with stock storage, order handling, pick and pack, labelling and UK delivery from Essex. For sellers sending stock into Amazon's own network, our Amazon Prep UK service handles FNSKU labelling and FBA compliance. " + NOT_PARTNER_AMAZON,
    sections: [
      {
        type: "cards",
        h2: "Amazon fulfilment scope",
        items: [
          { title: "Stock storage", text: "Secure UK storage for your Amazon stock." },
          { title: "Order management", text: "Systematic handling of Amazon orders." },
          { title: "Pick and pack", text: "Picking and packing per order." },
          { title: "Labelling", text: "Product labelling to Amazon requirements." },
          { title: "Stock tracking", text: "Stock levels tracked in Mintsoft WMS." },
          { title: "UK delivery", text: "Dispatch of orders to UK customers." },
        ],
      },
    ],
    faqs: [
      { q: "Is LondraDepo an official Amazon partner?", a: "No. LondraDepo is not an official Amazon partner. We provide stock storage and fulfilment support to businesses selling on Amazon." },
      { q: "Do you also offer Amazon FBA prep?", a: "Yes. Our Amazon FBA prep service is described in detail on our Amazon Prep UK page." },
    ],
    related: ["/en/amazon-prep-uk", "/en/amazon-seller-warehousing-uk", "/en/blog/amazon-fba-vs-uk-fulfilment"],
  },
  {
    slug: "/en/essex-warehouse",
    tr: "/essex-depo",
    kind: "service",
    serviceType: "Warehousing",
    title: "Essex Warehouse near London – Rayleigh, SS6 7FY",
    description:
      "Our Essex warehouse in Rayleigh (SS6 7FY): ~40 minutes to London, ~30 minutes to Tilbury, roughly 1 to 1¼ hours to Felixstowe by road. FCL/LCL receiving, pallet storage, fulfilment and Amazon prep.",
    label: "Essex Warehouse",
    h1: "Essex Warehouse near London",
    lead:
      "LondraDepo's warehouse is at Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY. It is about 40 minutes from London via the A127 and M25, 30 minutes from the Port of Tilbury and roughly 1 to 1¼ hours by road from Felixstowe, with a loading ramp and wide gate suitable for container unloading and palletised deliveries.",
    facts: [
      "~40 minutes to London (A127/M25)",
      "Roughly 1 to 1¼ hours by road to Felixstowe, the UK's largest container port",
      "~30 minutes to the Port of Tilbury (container and ro-ro services)",
      "Close to Amazon UK fulfilment centres at Tilbury and Dartford",
      "Direct receiving of FCL and LCL containers",
    ],
    sections: [
      {
        type: "text",
        h2: "Location and access",
        paras: [
          "The warehouse is on the Arterial Park industrial estate in Rayleigh. Its position on the A127 Arterial Road gives direct access to the M25 and London, and containers coming from Felixstowe can be delivered on route.",
          "Rayleigh is in the Rochford district of Essex, around 10 km from Southend-on-Sea. The site has a wide entrance and a loading ramp for trucks and container hauliers, suitable for FCL unloading and palletised goods.",
        ],
      },
      {
        type: "cards",
        h2: "Services at the Essex warehouse",
        items: [
          { title: "Container receiving", text: "FCL and LCL shipments are received, unloaded and booked into stock." },
          { title: "Pallet storage", text: "Palletised and loose goods are stored in secure warehouse space." },
          { title: "Fulfilment", text: "Orders are prepared, packed and shipped to customers." },
          { title: "Amazon prep", text: "FBA-compliant preparation and dispatch to Amazon." },
          { title: "Customs clearance", text: "Import declarations and commodity code advice through Arca Trade Group." },
          { title: "Distribution", text: "UK-wide distribution through our carrier partners." },
        ],
      },
    ],
    related: ["/en/pallet-storage", "/en/uk-fulfilment", "/en/amazon-prep-uk", "/en/london-warehousing"],
  },
];
