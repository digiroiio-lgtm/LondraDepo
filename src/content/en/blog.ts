import type { EnPage } from "./types";

const DATE = { published: "2026-11-10", modified: "2026-11-10" };

export const blogPages: EnPage[] = [
  {
    slug: "/en/blog/uk-warehousing-guide",
    tr: "/blog/ingiltere-depo-rehberi",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 6, section: "Warehousing" },
    title: "UK Warehousing Guide: How It Works and How to Choose a Partner",
    description:
      "A practical guide to UK warehousing for overseas sellers: what a UK warehouse service is, who needs one, how the process works step by step and how to choose the right partner.",
    label: "UK Warehousing Guide",
    h1: "UK Warehousing: A Complete Guide for Overseas Sellers",
    lead:
      "A UK warehousing service stores your goods securely once they arrive in the UK and prepares them for dispatch to customers or sales channels when needed. Holding physical stock in the UK shortens delivery times, simplifies imports and supports sales on marketplaces such as Amazon and Etsy. This guide explains how it works and how to choose a partner.",
    sections: [
      {
        type: "list",
        h2: "Who needs a UK warehouse?",
        items: [
          "Brands shipping regular containers to the UK",
          "Ecommerce sellers on Amazon UK, Etsy or Shopify",
          "Importers selling to UK wholesale or retail customers",
          "Manufacturers in food, textiles, home and electronics",
          "SMEs that want to test the UK market",
        ],
      },
      {
        type: "steps",
        h2: "How UK warehousing works",
        items: [
          { title: "Shipment", text: "Goods are sent to the UK by FCL or LCL container, pallet or parcel, usually by your freight forwarder." },
          { title: "Customs and import", text: "Goods clear UK customs with the correct commodity code and import declaration." },
          { title: "Goods-in", text: "On arrival at the warehouse, goods are counted, checked and booked into stock." },
          { title: "Storage", text: "Goods are stored on pallets or shelving according to need." },
          { title: "Order preparation", text: "Orders are picked, packed and prepared for dispatch." },
          { title: "Distribution", text: "Orders go to customers or to platforms such as Amazon." },
        ],
      },
      {
        type: "text",
        h2: "Why location matters",
        paras: [
          "Essex is one of the UK's most practical warehousing regions: it is close to London and has direct access to the ports of Felixstowe and Tilbury. From Essex, carriers typically offer next-day or 2-day delivery to most of the UK, and Amazon UK fulfilment centres are within easy reach.",
        ],
      },
      {
        type: "list",
        h2: "How to choose a UK warehouse partner",
        items: [
          "Communication in your language, especially in the first months",
          "Flexible pallet-based storage",
          "Fulfilment and Amazon prep capability",
          "Transparent weekly pricing",
          "A stock tracking and reporting system",
          "Capacity to receive containers",
        ],
      },
    ],
    faqs: [
      { q: "Who is a UK warehouse service suitable for?", a: "Exporting brands, ecommerce sellers, wholesalers, food producers and importers that need stock in the UK." },
      { q: "Do you accept palletised goods?", a: "Yes. LondraDepo provides pallet storage for businesses that need it, starting from £3.50 + VAT per pallet per week." },
      { q: "Do you only store goods, or distribute them too?", a: "Alongside storage we provide order preparation, fulfilment and UK distribution." },
    ],
    related: ["/en/blog/uk-warehousing-prices-2026", "/en/blog/what-is-a-uk-transit-warehouse", "/en/blog/what-is-uk-fulfilment", "/en/uk-warehousing"],
  },
  {
    slug: "/en/blog/what-is-uk-fulfilment",
    tr: "/blog/ingiltere-fulfillment-nedir",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 5, section: "Fulfilment" },
    title: "What Is UK Fulfilment and How Does It Work?",
    description:
      "UK fulfilment explained: what fulfilment and 3PL mean, the benefits of fulfilling from a UK warehouse, how 3PL differs from Amazon FBA and which products suit it.",
    label: "What Is UK Fulfilment?",
    h1: "What Is UK Fulfilment and How Does It Work?",
    lead:
      "Fulfilment is the whole operational process from receiving an ecommerce order to delivering it to the customer: order capture, picking the product from the warehouse, packing it and shipping it. UK fulfilment means this happens from a warehouse in the UK, usually run by a third-party logistics (3PL) provider.",
    sections: [
      {
        type: "text",
        h2: "What is 3PL fulfilment?",
        paras: [
          "3PL (third-party logistics) means handing your logistics to an external provider instead of running your own warehouse. In the UK, 3PL fulfilment is especially useful for overseas brands that do not yet have a UK warehouse.",
        ],
      },
      {
        type: "list",
        h2: "Benefits of UK fulfilment",
        items: [
          "Faster delivery: UK stock enables delivery to customers within 1–2 days",
          "Lower fixed costs: pay as you use instead of leasing a warehouse",
          "Scalability: capacity flexes with your order volume",
          "Prime options: outside FBA, Seller Fulfilled Prime may be possible for merchants who meet Amazon's performance requirements",
          "Local returns: UK customer returns are handled in the UK",
        ],
      },
      {
        type: "text",
        h2: "Amazon FBA versus 3PL fulfilment",
        paras: [
          "With Amazon FBA you send your products to Amazon's warehouse and Amazon handles the orders. With 3PL fulfilment an independent warehouse operator does the work, which gives you more pricing flexibility and control over channels outside Amazon.",
        ],
      },
      {
        type: "list",
        h2: "Which products suit fulfilment?",
        items: ["Clothing and textiles", "Home and décor", "Personal care and cosmetics", "Electronics accessories", "Non-food consumer goods"],
      },
    ],
    faqs: [
      { q: "What is a UK fulfilment service?", a: "Fulfilment is the process of picking, packing and shipping customer orders from a warehouse. A UK fulfilment provider stores your products in the UK and sends orders to your customers." },
      { q: "Does LondraDepo support Amazon FBA?", a: "Yes. Through our Amazon prep service we make products FBA-compliant, label them and dispatch them to Amazon's fulfilment centre." },
      { q: "Do you fulfil Shopify and Etsy orders?", a: "Yes. Orders from Shopify, Etsy and other ecommerce platforms can be brought into our fulfilment process." },
    ],
    related: ["/en/blog/uk-warehousing-guide", "/en/blog/amazon-fba-vs-uk-fulfilment", "/en/blog/amazon-prep-uk-guide", "/en/uk-fulfilment"],
  },
  {
    slug: "/en/blog/amazon-prep-uk-guide",
    tr: "/blog/amazon-prep-uk-rehberi",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 7, section: "Amazon" },
    title: "Amazon Prep UK: A Step-by-Step Guide",
    description:
      "A step-by-step guide to Amazon FBA prep in the UK: why prep is needed, the seven stages from goods-in to Amazon check-in, FNSKU labelling and how prep is priced.",
    label: "Amazon Prep UK Guide",
    h1: "Amazon Prep UK: A Step-by-Step Guide",
    lead:
      "Amazon prep is the set of preparation steps your products must complete before an Amazon UK fulfilment centre will accept them: inspection, FNSKU labelling, packaging checks, shipment planning and delivery. Working with a UK prep partner reduces the risk of rejected or surcharged inbound shipments.",
    sections: [
      {
        type: "text",
        h2: "What is Amazon FBA?",
        paras: [
          "FBA (Fulfilment by Amazon) is the programme in which Amazon stores your products, prepares orders and delivers them once you have sent stock to its warehouse. FBA listings are generally eligible for Prime and benefit from Amazon's logistics network.",
        ],
      },
      {
        type: "text",
        h2: "Why is prep necessary?",
        paras: [
          "Amazon requires products sent to its warehouses to meet specific physical and labelling standards. Products that do not comply can be refused or charged extra. Amazon updates its prep rules frequently, so a UK partner who follows the current requirements reduces costly rejections.",
        ],
      },
      {
        type: "steps",
        h2: "The Amazon prep process",
        items: [
          { title: "Arrival in the UK", text: "Goods are received at our Essex warehouse." },
          { title: "Inspection", text: "Products are checked for damage; missing or faulty items are reported." },
          { title: "FNSKU labelling", text: "The FNSKU barcode Amazon requires is applied to each unit." },
          { title: "Packaging check", text: "Compliance with Amazon packaging and carton rules is checked." },
          { title: "Shipment plan", text: "A shipment plan is created in Seller Central and Amazon assigns the destination." },
          { title: "Delivery to Amazon", text: "Prepared goods are delivered to the assigned Amazon UK fulfilment centre." },
          { title: "Check-in tracking", text: "Receipt at Amazon is followed until stock is available for sale." },
        ],
      },
      {
        type: "text",
        h2: "What is FNSKU labelling?",
        paras: [
          "An FNSKU (Fulfilment Network Stock Keeping Unit) is the unique identifier Amazon assigns to each product so it can tell which seller owns which unit in its warehouses. Each unit needs either an FNSKU label covering the original barcode, or packaging that already carries the FNSKU.",
        ],
      },
      {
        type: "text",
        h2: "How much does Amazon prep cost?",
        paras: [
          "Prep cost depends on the number of units, labelling requirements and packaging condition. Standard prep in the UK market is often around £0.30–£0.60 per unit; this is a market indication, not a LondraDepo quote. We confirm the exact price by product type, quantity and scope.",
        ],
      },
    ],
    faqs: [
      { q: "Can I send stock straight from my factory to your UK warehouse?", a: "Yes. You can ship products directly to our UK warehouse; we carry out the prep and send the stock on to Amazon." },
      { q: "Do you help with shipment plans?", a: "Yes. We guide you through creating shipment plans in Amazon Seller Central." },
      { q: "Is there a minimum quantity?", a: "There is no fixed minimum. We work with both small batches and full container operations." },
    ],
    related: ["/en/amazon-prep-uk", "/en/blog/amazon-fba-vs-uk-fulfilment", "/en/blog/what-is-uk-fulfilment", "/en/blog/uk-warehousing-prices-2026"],
  },
  {
    slug: "/en/blog/what-is-a-uk-transit-warehouse",
    tr: "/blog/ingiltere-ara-depo-nedir",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 5, section: "Warehousing" },
    title: "What Is a UK Transit Warehouse (Cross-Dock)?",
    description:
      "What a UK transit warehouse or cross-dock is, how it differs from standard storage, how the process works and which businesses benefit from short-term transit warehousing.",
    label: "What Is a UK Transit Warehouse?",
    h1: "What Is a UK Transit Warehouse, and Who Is It For?",
    lead:
      "A transit warehouse, also called a cross-dock, is a logistics point where goods are held for a short time before being split and sent on to different destinations, rather than stored long term. In a UK transit operation, goods arrive at the warehouse, are sorted and labelled, and are dispatched to UK customers, other warehouses or Amazon.",
    sections: [
      {
        type: "table",
        h2: "Transit warehouse versus standard warehouse",
        head: ["", "Transit warehouse", "Standard warehouse"],
        rows: [
          ["Storage time", "Short term", "Long term"],
          ["Purpose", "Fast onward distribution", "Order-based fulfilment and stock holding"],
          ["Typical user", "Bulk importers splitting loads", "Sellers holding ongoing UK stock"],
        ],
        note: "The transit model suits businesses moving from large bulk shipments to order-based distribution, because it avoids long-term storage charges.",
      },
      {
        type: "steps",
        h2: "How a UK transit operation works",
        items: [
          { title: "Container arrival", text: "Goods are received at our Essex warehouse." },
          { title: "Counting and checks", text: "Everything is counted and checked for damage." },
          { title: "Sorting and packing", text: "Goods are prepared according to the order or distribution plan." },
          { title: "Distribution", text: "Goods are sent to UK destinations, other warehouses or Amazon." },
        ],
      },
      {
        type: "list",
        h2: "Who is it for?",
        items: [
          "Businesses shipping regular containers and delivering to several UK locations",
          "Brands storing seasonal products in the UK temporarily",
          "Sellers preparing goods before a bulk delivery to Amazon FBA",
          "Exporters without a UK warehouse who want a quick UK entry",
          "Suppliers making regular deliveries to UK wholesalers or dealers",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between a transit warehouse and a standard warehouse?", a: "A transit warehouse holds goods temporarily before sending them on to another destination. A standard warehouse holds stock long term and distributes it order by order." },
      { q: "Can transit warehousing be combined with Amazon prep?", a: "Yes. When goods arrive at our Essex warehouse, transit handling and Amazon prep can be managed in the same operation." },
    ],
    related: ["/en/storage-services", "/en/blog/uk-warehousing-guide", "/en/blog/uk-pallet-storage-costs", "/en/essex-warehouse"],
  },
  {
    slug: "/en/blog/uk-warehousing-prices-2026",
    tr: "/blog/ingiltere-depo-fiyatlari-2026",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 7, section: "Warehousing" },
    title: "UK Warehousing Prices 2026: A Full Cost Guide",
    description:
      "How UK warehouse and fulfilment costs are built in 2026: pallet storage from £3.50 + VAT per week, pick and pack, packaging, carriage, goods-in, Amazon prep and a worked example.",
    label: "UK Warehousing Prices 2026",
    h1: "UK Warehousing Prices 2026: A Full Cost Guide",
    lead:
      "UK warehousing costs depend on the volume and weight of your goods, how long they stay in stock, the warehouse location, extra services and how often stock is accessed. At LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week; fulfilment, goods-in, packaging and carriage are quoted on top.",
    sections: [
      {
        type: "list",
        h2: "What a UK fulfilment cost is made of",
        items: [
          "Storage: weekly charge per pallet or per square metre",
          "Pick and pack: quoted on order volume, items per order and handling",
          "Packaging materials: quoted on the cartons and packaging used",
          "Carriage: varies by UK carrier network, such as Royal Mail, DPD or DHL",
          "Goods-in: quoted on vehicle, load, unloading and handling needs",
        ],
      },
      {
        type: "text",
        h2: "Amazon prep and inbound freight",
        paras: [
          "Products that need preparation for Amazon FBA add prep costs for labelling, packaging updates and polybagging, quoted by product and scope.",
          "The cost of getting goods to a UK warehouse depends on the route, transport mode, load characteristics, customs and delivery terms. Ask your freight forwarder for an FCL or LCL quote for your specific shipment.",
        ],
      },
      {
        type: "table",
        h2: "Worked example: 10 pallets, 4 weeks, 200 orders",
        head: ["Cost line", "Amount"],
        rows: [
          ["Storage: 10 pallets × £3.50 × 4 weeks", "£140 + VAT (starting price)"],
          ["Pick and pack for 200 orders", "Tailored quote"],
          ["Packaging materials for 200 orders", "Tailored quote"],
          ["Carriage", "Based on delivery zones and parcel profile"],
        ],
        note: "Known starting line: £140 + VAT for storage. The total operating cost depends on additional services.",
      },
      {
        type: "list",
        h2: "How to keep costs down",
        items: [
          "Consolidate shipments to lower inbound freight per unit",
          "Keep fast sellers in stock and use a leaner model for slow movers",
          "Use one provider for fulfilment and Amazon prep to avoid double handling",
          "Choose a partner who communicates clearly in your language to avoid errors and delays",
        ],
      },
    ],
    faqs: [
      { q: "How much does it cost to store one pallet in the UK?", a: "LondraDepo standard pallet storage starts from £3.50 + VAT per pallet per week. Extra services such as handling, loading and customs coordination are quoted separately." },
      { q: "How is UK fulfilment cost calculated?", a: "Fulfilment cost is the sum of storage, per-order pick and pack, packaging materials and carriage." },
      { q: "Can I use Amazon prep and fulfilment together?", a: "Yes. LondraDepo offers Amazon prep and 3PL fulfilment within one operation, which avoids paying for double handling." },
    ],
    related: ["/en/uk-warehousing-pricing", "/en/blog/uk-pallet-storage-costs", "/en/blog/amazon-fba-vs-uk-fulfilment", "/en/pallet-storage"],
  },
  {
    slug: "/en/blog/uk-pallet-storage-costs",
    tr: "/blog/ingiltere-palet-depolama-maliyetleri",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 5, section: "Warehousing" },
    title: "UK Pallet Storage Costs 2026",
    description:
      "UK pallet storage costs in 2026: weekly rates from £3.50 + VAT per pallet, what affects the price, a 10-pallet worked example and practical ways to reduce your total cost.",
    label: "UK Pallet Storage Costs",
    h1: "UK Pallet Storage Costs 2026",
    lead:
      "UK pallet storage is usually charged per pallet per week. At LondraDepo, the starting rate for a standard pallet is £3.50 + VAT per week, which covers storage only; goods-in, handling and pick and pack are charged separately. Pallet size and weight, product type, duration and access frequency all affect the final price.",
    sections: [
      {
        type: "list",
        h2: "What affects the price of pallet storage",
        items: [
          "Pallet size and weight: oversized or heavy pallets may cost more",
          "Product type: fragile, high-value, food or temperature-controlled goods need specific conditions",
          "Storage period: long-term storage can attract a lower rate",
          "Access frequency: very frequent (daily) access can add handling charges",
          "Location: prices differ between Essex, the London area and other regions",
          "Extra services: pick and pack, repacking and labelling increase the total",
        ],
        outro: "Asking only for a weekly pallet rate is not enough. To understand the true cost, include goods-in, pick and pack and any extra services.",
      },
      {
        type: "table",
        h2: "Worked example: 10 pallets for 4 weeks",
        head: ["Cost line", "Amount"],
        rows: [
          ["10 standard pallets × £3.50 per week × 4 weeks", "£140 + VAT"],
          ["Goods-in, unloading and handling", "Quoted per shipment"],
          ["Outbound pick and pack", "Charged per order"],
        ],
        note: "Storage-only starting total: £140 + VAT, excluding other activities.",
      },
      {
        type: "list",
        h2: "How to optimise pallet storage costs",
        items: [
          "Consolidate deliveries to cut freight cost per unit",
          "Keep minimum stock levels for slow-moving lines",
          "Use one provider for storage and fulfilment to avoid double handling",
          "Negotiate rates for long-term storage agreements",
        ],
      },
    ],
    faqs: [
      { q: "What is the weekly cost of storing one pallet in the UK?", a: "At LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week. This covers storage only; handling, loading, unloading, re-palletising and customs coordination are quoted separately." },
      { q: "What affects the price of pallet storage?", a: "Pallet size and weight, product type, storage period, access frequency, warehouse location and any extra services." },
      { q: "What is the minimum number of pallets?", a: "Minimum quantities and acceptance terms are confirmed at quotation stage, based on your products and operating needs." },
    ],
    related: ["/en/pallet-storage", "/en/uk-warehousing-pricing", "/en/blog/uk-warehousing-prices-2026", "/en/blog/what-is-a-uk-transit-warehouse"],
  },
  {
    slug: "/en/blog/amazon-fba-vs-uk-fulfilment",
    tr: "/blog/amazon-fba-vs-uk-fulfillment",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 8, section: "Fulfilment" },
    title: "Amazon FBA vs UK 3PL Fulfilment: Which Is Better?",
    description:
      "Amazon FBA versus independent UK 3PL fulfilment compared on cost, channels, packaging, control and Prime, plus when a hybrid model makes sense.",
    label: "Amazon FBA vs UK Fulfilment",
    h1: "Amazon FBA vs UK 3PL Fulfilment: Which Is Better?",
    lead:
      "Amazon FBA is strongest for sellers focused on the Amazon channel who want Prime and minimal operational work. Independent UK 3PL fulfilment is more flexible for brands selling across several channels, who want control over stock, packaging and costs. Many growing brands use both in a hybrid model.",
    sections: [
      {
        type: "table",
        h2: "FBA vs 3PL at a glance",
        head: ["", "Amazon FBA", "UK 3PL fulfilment"],
        rows: [
          ["Cost", "Storage, fulfilment and shipping fees set by Amazon by product size; long-term storage fees can be high for slow movers", "Weekly pallet rate plus per-order pick and pack; usually more predictable"],
          ["Channels", "Amazon only (multi-channel possible but complex)", "Amazon, Shopify, Etsy, your website and B2B from one warehouse"],
          ["Packaging and brand", "Standard Amazon packaging, limited brand experience", "Branded packaging, inserts and gift wrapping possible"],
          ["Control", "Amazon can refuse non-compliant goods; limited access to stock", "Full control of stock, immediate access, flexible returns"],
          ["Prime", "Prime eligibility by default", "Possible via Seller Fulfilled Prime, subject to performance requirements"],
        ],
      },
      {
        type: "list",
        h2: "How to decide",
        items: [
          "Choose Amazon FBA if you only sell on Amazon, Prime is critical and you do not want to manage operations.",
          "Choose UK 3PL fulfilment if you sell outside Amazon, care about brand experience, want cost flexibility or have B2B customers.",
          "Choose a hybrid model if you want part of your Amazon range in FBA while your website and B2B orders are fulfilled by a 3PL.",
        ],
      },
    ],
    faqs: [
      { q: "What is the advantage of 3PL fulfilment over Amazon FBA?", a: "With 3PL fulfilment you can run non-Amazon channels such as your website, Etsy and B2B customers from one warehouse, customise packaging and avoid Amazon's long-term storage fees." },
      { q: "Can Amazon FBA and a UK 3PL be used together?", a: "Yes. In a hybrid model some products are held in FBA and others are fulfilled by a 3PL, which can help on both cost and reach." },
      { q: "Does LondraDepo provide Amazon prep?", a: "Yes. FBA prep (labelling, packaging, polybagging and similar tasks) is offered alongside our 3PL fulfilment operation." },
    ],
    related: ["/en/amazon-seller-warehousing-uk", "/en/amazon-prep-uk", "/en/blog/what-is-uk-fulfilment", "/en/blog/uk-warehousing-prices-2026"],
  },
  {
    slug: "/en/blog/uk-importing-guide",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 9, section: "Importing" },
    title: "How to Import Goods into the UK: A Practical Guide for Overseas Businesses",
    description:
      "A step-by-step guide to importing goods into the UK: GB EORI, commodity codes and the UK Global Tariff, customs declarations, duty and import VAT, rules of origin, product rules and choosing a UK warehouse.",
    label: "UK Importing Guide",
    h1: "How to Import Goods into the UK: A Practical Guide",
    lead:
      "To import goods into Great Britain, the importer needs a GB EORI number, the correct commodity code for each product, a customs declaration lodged through HMRC's Customs Declaration Service, and payment or accounting of any customs duty and import VAT. Overseas businesses usually work with a freight forwarder or customs agent and a UK warehouse that receives the cleared goods.",
    sections: [
      {
        type: "steps",
        h2: "The import process step by step",
        items: [
          { title: "Decide who the importer is", text: "The importer of record is responsible for the declaration, duty and import VAT. This can be your own company, a UK subsidiary or your buyer, depending on your Incoterms." },
          { title: "Get a GB EORI number", text: "The importer needs an EORI number starting with GB to move goods into Great Britain. Apply on GOV.UK." },
          { title: "Classify your products", text: "Find the commodity code for each product in the UK Integrated Online Tariff. The code sets the duty rate and any import controls." },
          { title: "Check origin and preferences", text: "Goods that meet the rules of origin under a UK trade agreement (for example with the EU or Turkey) may qualify for reduced or zero duty with the right proof of origin." },
          { title: "Book freight and lodge the declaration", text: "Your forwarder or customs agent ships the goods and lodges the import declaration in CDS before or on arrival." },
          { title: "Pay or account for duty and VAT", text: "Customs duty is paid on release. Import VAT is usually charged at 20% on the value including duty; VAT-registered importers can often use postponed VAT accounting." },
          { title: "Deliver to your UK warehouse", text: "Cleared goods are hauled to the warehouse, unloaded, counted and booked into stock, ready for orders." },
        ],
      },
      {
        type: "table",
        h2: "Key terms explained",
        head: ["Term", "What it means"],
        rows: [
          ["EORI", "Economic Operators Registration and Identification number, required to import into Great Britain"],
          ["Commodity code", "The product classification that sets duty and controls in the UK Global Tariff"],
          ["CDS", "HMRC's Customs Declaration Service, where import declarations are lodged"],
          ["Importer of record", "The party legally responsible for the import, its duty and import VAT"],
          ["Postponed VAT accounting", "Lets VAT-registered importers account for import VAT on their VAT return instead of paying at the border"],
          ["DAP / DDP", "Incoterms: under DAP the buyer handles import clearance; under DDP the seller does and may need UK VAT registration"],
        ],
      },
      {
        type: "list",
        h2: "Documents you will usually need",
        items: [
          "Commercial invoice with value, currency and Incoterms",
          "Packing list with cartons, weights and dimensions",
          "Transport document: bill of lading, CMR or air waybill",
          "Proof of origin if claiming a preferential tariff",
          "Product certificates or licences where your goods require them",
        ],
      },
      { type: "checklist" },
      {
        type: "text",
        h2: "Product rules to check before shipping",
        paras: [
          "Some goods need UK conformity marking (UKCA, or CE where still accepted), UK-specific labelling, or licences. Food, plants and animal products can require health certificates and pre-notification through the IPAFFS system. Check the rules for your product category on GOV.UK before the first shipment, because non-compliant goods can be held at the border.",
          "Customs duty and import VAT are separate from logistics costs. Warehousing at LondraDepo starts from £3.50 + VAT per pallet per week, and freight and customs clearance are available from our parent company, Arca Trade Group.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need an EORI number to import into the UK?", a: "Yes. The importer needs an EORI number starting with GB to import goods into Great Britain." },
      { q: "How much is import VAT in the UK?", a: "Import VAT is usually charged at the standard rate of 20% on the value of the goods including duty and transport costs to the UK, although some goods have reduced rates. VAT-registered businesses can often use postponed VAT accounting." },
      { q: "Can an overseas company be the importer of record?", a: "Yes, an overseas business with a GB EORI number can act as importer, but VAT and tax obligations depend on how you sell. Take professional advice before the first shipment." },
      { q: "Who can lodge the customs declaration for me?", a: "A customs agent or freight forwarder usually lodges it. Arca Trade Group, which operates LondraDepo, completes import declarations on behalf of customers." },
    ],
    related: ["/en/uk-import-logistics", "/en/uk-customs-clearance", "/en/container-unloading", "/en/locations/port-to-warehouse-logistics", "/en/uk-market-entry"],
  },
  {
    slug: "/en/blog/how-to-choose-a-uk-3pl",
    tr: "/blog/ingiltere-3pl-nasil-secilir",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 7, section: "Choosing a partner" },
    title: "How to Choose a UK 3PL Warehouse: 12 Questions to Ask",
    description:
      "A practical checklist for choosing a UK 3PL warehouse: location, pricing structure, stock visibility, channels, returns, minimums, contracts, insurance, customs support and references.",
    label: "Choosing a UK 3PL",
    h1: "How to Choose a UK 3PL Warehouse: 12 Questions to Ask",
    lead:
      "To choose a UK 3PL (third-party logistics) warehouse, compare providers on twelve points: where the warehouse is, how each cost line is priced, how you see your stock, which sales channels they fulfil, how returns work, whether there are minimums, the contract and notice terms, insurance, customs and freight support, communication, references and whether you can visit. Asking the same questions to every provider makes quotes comparable and shows early whether a warehouse suits your products.",
    sections: [
      {
        type: "table",
        h2: "The 12 questions",
        head: ["Question", "Why it matters"],
        rows: [
          ["1. Where is the warehouse, and how far is it from your arrival port and your customers?", "Distance drives haulage cost and delivery times, especially for container imports."],
          ["2. How is each cost line priced?", "Storage, goods-in, pick and pack, packaging, delivery and returns are usually priced separately; compare totals for your real volumes, not headline rates."],
          ["3. How will you see your stock?", "Ask which warehouse management system (WMS) they use and what reports or access you get."],
          ["4. Which channels can they fulfil?", "Check Shopify, Amazon FBA prep or FBM, marketplaces and wholesale pallet orders, ideally from the same stock."],
          ["5. How do returns work?", "Ask how returned items are checked, restocked or set aside, and how you are told."],
          ["6. Are there minimum volumes or fees?", "Minimum monthly charges can make a small start expensive."],
          ["7. What are the contract and notice terms?", "Check contract length, notice periods and how stock is released if you leave."],
          ["8. What insurance applies to your goods?", "Ask what the warehouse insures and what you need to insure yourself."],
          ["9. Can they help with freight and customs?", "One group handling freight, UK customs and the warehouse reduces handovers; check who lodges the declaration."],
          ["10. Who will you talk to, and in which language?", "A named contact and a shared language make daily operations faster."],
          ["11. Can they show similar clients?", "Case studies in your sector show they can handle your product type and order profile."],
          ["12. Can you visit the site?", "A visit or video walk-through shows racking, cleanliness and security."],
        ],
      },
      {
        type: "text",
        h2: "How to compare quotes fairly",
        paras: [
          "Send every provider the same brief: product type and sizes, number of SKUs, pallets or cartons in stock, monthly orders and average items per order, sales channels, return rate and delivery regions. Then compare the monthly total for that scenario, not individual rates, because a low storage price can be offset by higher handling or delivery charges.",
          "For a first estimate of storage alone, multiply pallets by weeks by the per-pallet weekly rate. At LondraDepo, 10 standard pallets for 4 weeks start at £140 + VAT.",
        ],
      },
      {
        type: "table",
        h2: "How LondraDepo answers these questions",
        head: ["Topic", "LondraDepo"],
        rows: [
          ["Location", "Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY: ~13 miles from London Gateway, ~16 miles from Tilbury, ~37 miles from central London"],
          ["Storage price", "From £3.50 + VAT per pallet per week; other services quoted for your volumes"],
          ["Stock visibility", "Stock and orders managed in Mintsoft WMS"],
          ["Channels", "Shopify, Amazon FBA prep and FBM, marketplaces and wholesale pallet orders from the same stock"],
          ["Minimums", "No fixed minimum; you can start with a trial pallet"],
          ["Freight and customs", "Available through Arca Trade Group, which operates LondraDepo"],
          ["Language", "English and Turkish"],
          ["References", "Case studies in food, packaging, automotive, fashion, bulky goods and electronics"],
        ],
      },
    ],
    faqs: [
      { q: "What is a 3PL warehouse?", a: "A 3PL (third-party logistics) warehouse stores your stock and handles goods-in, order picking, packing, delivery and returns for you, so you do not need your own warehouse or staff." },
      { q: "What should I send a 3PL to get an accurate quote?", a: "Your product type and sizes, number of SKUs, pallets or cartons in stock, monthly orders and average items per order, sales channels, expected return rate and delivery regions." },
      { q: "Is the cheapest storage rate the best deal?", a: "Not necessarily. Storage, goods-in, pick and pack, packaging, delivery and returns are usually priced separately, so compare the monthly total for your real volumes." },
    ],
    related: ["/en/uk-warehousing", "/en/uk-fulfilment", "/en/uk-warehousing-pricing", "/en/uk-storage-cost-calculator", "/en/industries"],
  },
  {
    slug: "/en/blog/uk-import-costs",
    tr: "/blog/ingiltere-ithalat-maliyetleri",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 7, section: "Importing" },
    title: "UK Import Costs: Duty, VAT and Logistics",
    description:
      "What it costs to import goods into the UK: freight, customs clearance, customs duty by commodity code, import VAT at 20% on the value including duty and transport, haulage, unloading, storage and fulfilment, with a worked example.",
    label: "UK Import Costs",
    h1: "What Does It Cost to Import Goods into the UK?",
    lead:
      "The cost of importing goods into the UK has two parts. Government charges are customs duty, set by the commodity code and origin of each product, and import VAT, usually 20% of the value of the goods including duty and transport to the UK. Logistics costs are freight, customs clearance, port-to-warehouse haulage, unloading, storage and order fulfilment. VAT-registered importers can often use postponed VAT accounting, so import VAT does not have to be paid in cash at the border.",
    sections: [
      {
        type: "table",
        h2: "The cost lines of a UK import",
        head: ["Cost", "What sets it", "Who usually charges it"],
        rows: [
          ["Freight", "Mode (sea, road, rail, air), volume and route", "Freight forwarder"],
          ["Customs clearance", "Number of declarations and lines", "Customs agent or forwarder"],
          ["Customs duty", "Commodity code, customs value and origin; preferential origin can reduce it to 0%", "HMRC"],
          ["Import VAT", "Usually 20% of the value including duty and transport to the UK; 5% or 0% for some goods", "HMRC (or postponed VAT accounting)"],
          ["Port-to-warehouse haulage", "Distance from the port and container size", "Haulier or forwarder"],
          ["Unloading and goods-in", "Container size, palletised or loose-loaded, SKU count", "Warehouse"],
          ["Storage", "Pallets or cartons and how long they stay", "Warehouse (LondraDepo: from £3.50 + VAT per pallet per week)"],
          ["Fulfilment and delivery", "Orders, items per order, parcel or pallet delivery", "Warehouse and carriers"],
        ],
      },
      {
        type: "steps",
        h2: "Worked example: how import VAT is calculated",
        intro: "A hypothetical consignment to show the order of the calculation. Your duty rate depends on your commodity code and origin.",
        items: [
          { title: "Customs value", text: "Goods invoiced at £10,000, plus £800 freight and insurance to the UK: £10,800." },
          { title: "Customs duty", text: "With an assumed 4% duty rate: 4% of £10,800 = £432. With preferential origin, the rate could be 0%." },
          { title: "VAT value", text: "Customs value plus duty: £10,800 + £432 = £11,232." },
          { title: "Import VAT", text: "20% of £11,232 = £2,246.40, payable at import or accounted for through postponed VAT accounting if you are VAT-registered." },
        ],
      },
      {
        type: "text",
        h2: "How to reduce UK import costs",
        paras: [
          "Check the commodity code for every product before shipping: it sets the duty rate, and GOV.UK states that just under half of UK most-favoured-nation tariff lines are 0%. If your goods qualify under a UK trade agreement, such as the UK–EU Trade and Cooperation Agreement or the UK–Turkey agreement, proof of origin can bring duty down to 0%.",
          "On the logistics side, a warehouse close to your arrival port shortens the haulage leg, and handling unloading, storage and fulfilment in one building avoids paying to move stock between sites. Our Rayleigh warehouse is about 13 miles from London Gateway and 16 miles from Tilbury.",
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "GOV.UK: The UK's integrated tariff schedule (share of 0% MFN tariff lines)", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
          { label: "GOV.UK: VAT rates (20% standard, 5% reduced, 0% zero)", href: "https://www.gov.uk/vat-rates" },
          { label: "US International Trade Administration (trade.gov): United Kingdom import requirements and documentation", href: "https://www.trade.gov/country-commercial-guides/united-kingdom-import-requirements-and-documentation" },
        ],
      },
    ],
    faqs: [
      { q: "How much is import VAT in the UK?", a: "Import VAT is usually charged at the standard rate of 20% on the value of the goods including duty and transport costs to the UK. Some goods have a 5% or 0% rate." },
      { q: "How is UK customs duty calculated?", a: "Duty is a percentage of the customs value set by the product's commodity code in the UK tariff. Goods that meet the rules of origin under a UK trade agreement can qualify for a reduced or 0% rate with proof of origin." },
      { q: "What is postponed VAT accounting?", a: "It lets VAT-registered importers account for import VAT on their VAT return instead of paying it at the border, which helps cash flow." },
      { q: "What do UK warehousing costs add to an import?", a: "At LondraDepo, storage starts from £3.50 + VAT per pallet per week. Unloading, goods-in, fulfilment and delivery are quoted for your volumes." },
    ],
    related: ["/en/blog/uk-importing-guide", "/en/uk-import-logistics", "/en/uk-customs-clearance", "/en/container-arrival-planner", "/en/uk-storage-cost-calculator"],
  },
  {
    slug: "/en/blog/amazon-fba-prep-checklist",
    tr: "/blog/amazon-fba-prep-kontrol-listesi",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 5, section: "Amazon" },
    title: "Amazon FBA Prep Checklist for UK Sellers",
    description:
      "A step-by-step Amazon FBA prep checklist for UK sellers: shipment plan, FNSKU labels, covering old barcodes, packaging, sets and bundles, carton labels and delivery to the Amazon UK fulfilment centre.",
    label: "Amazon FBA Prep Checklist",
    h1: "Amazon FBA Prep Checklist for UK Sellers",
    lead:
      "Before stock goes into Amazon's UK fulfilment centres, each unit must be identifiable and packed to Amazon's rules: create the shipment plan in Seller Central, label every unit with its FNSKU barcode, cover any other scannable barcodes, pack items so they arrive undamaged, mark sets and bundles, label every carton and deliver to the fulfilment centre Amazon assigns. Amazon updates its prep and packaging requirements, so check the current rules in Seller Central before each new product.",
    sections: [
      {
        type: "list",
        h2: "Before the goods arrive",
        items: [
          "Confirm each product's listing and FNSKU in Seller Central",
          "Check the product's prep category and any category-specific requirements in Seller Central",
          "Agree with your prep warehouse who creates the shipment plan and when",
          "Send the warehouse the packing list, SKU details and the number of units per SKU",
        ],
      },
      {
        type: "list",
        h2: "Unit preparation",
        items: [
          "Apply an FNSKU label to every unit, unless the product is eligible to use its manufacturer barcode",
          "Cover or remove any other scannable barcodes on the unit",
          "Bag, box or protect items that could be damaged, leak or come apart in transit",
          "Mark sets and bundles so they are not split and sold separately",
          "Check expiry-dated products are labelled in the format Amazon requires",
        ],
      },
      {
        type: "list",
        h2: "Cartons and delivery",
        items: [
          "Pack cartons within Amazon's current weight and size limits",
          "Apply the shipment carton labels Amazon generates to each carton",
          "Palletise and label pallets if sending a pallet shipment",
          "Book delivery to the assigned Amazon UK fulfilment centre",
          "Track check-in until the stock shows as available for sale",
        ],
      },
      {
        type: "text",
        h2: "When to use an Amazon prep warehouse",
        paras: [
          "If your stock arrives in the UK from abroad, preparing it at a UK warehouse before it goes to Amazon lets you fix labelling or packaging problems before Amazon receives the goods. LondraDepo receives stock in Essex, applies FNSKU labels, checks packaging and delivers to the Amazon UK fulfilment centre on the shipment plan. The same stock can also serve Shopify, FBM and wholesale orders.",
        ],
      },
    ],
    faqs: [
      { q: "What is Amazon FBA prep?", a: "It is the labelling, packing and preparation products need before Amazon accepts them into its fulfilment centres, such as FNSKU labels, protective packaging and carton labels." },
      { q: "Do I need an FNSKU label on every unit?", a: "Usually yes. Each unit needs an Amazon barcode, normally the FNSKU, unless the product is eligible to use its manufacturer barcode. Check the product's settings in Seller Central." },
      { q: "Can a UK warehouse do FBA prep for me?", a: "Yes. LondraDepo receives your stock in Essex, prepares it to Amazon's requirements and delivers it to the assigned Amazon UK fulfilment centre." },
    ],
    related: ["/en/amazon-prep-uk", "/en/amazon-fulfilment-uk", "/en/amazon-seller-warehousing-uk", "/en/blog/amazon-prep-uk-guide", "/en/blog/amazon-fba-vs-uk-fulfilment"],
  },
];

export const blogHub: EnPage = {
  slug: "/en/blog",
  tr: "/blog",
  kind: "hub",
  title: "UK Warehousing & Fulfilment Guides",
  description:
    "Practical guides on UK warehousing, fulfilment, pallet storage costs, Amazon prep and FBA versus 3PL, written from experience running an Essex warehouse.",
  label: "Blog",
  eyebrow: "Knowledge centre",
  h1: "UK Warehousing and Fulfilment Guides",
  lead:
    "Practical guides for businesses selling into the UK, written from our experience running a warehouse in Essex. They cover warehousing, fulfilment, pallet storage costs, Amazon prep and choosing between Amazon FBA and a UK 3PL.",
  sections: [
    {
      type: "links",
      h2: "All guides",
      items: blogPages.map((p) => ({ href: p.slug, title: p.h1, text: p.description, tag: p.article?.section })),
    },
  ],
  related: ["/en/case-studies", "/en/uk-fulfilment", "/en/pallet-storage"],
};
