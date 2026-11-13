import type { EnPage } from "./types";

const DATE = { published: "2026-11-10", modified: "2026-11-10" };

export const blogPages: EnPage[] = [
  {
    slug: "/en/blog/uk-warehousing-guide",
    tr: "/blog/ingiltere-depo-rehberi",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 6, section: "Warehousing" },
    title: "UK Warehousing Guide: How It Works",
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
      { q: "Do you only store goods, or distribute them too?", a: "Both. Alongside storage, LondraDepo provides order picking and packing, ecommerce fulfilment, Amazon FBA prep and UK distribution by parcel or pallet, all from the same warehouse in Rayleigh, Essex." },
      { q: "What does UK warehousing typically cost?", a: "At LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week, so 10 pallets for 4 weeks start at £140 + VAT. Goods-in, fulfilment and delivery are quoted separately." },
      { q: "How do I choose a UK warehouse partner?", a: "Compare providers on location, how each cost line is priced, stock visibility, sales channels, returns, minimums, contract terms, insurance, customs support and references. Our 3PL guide lists 12 questions to ask." },
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
      { q: "How much does UK fulfilment cost?", a: "Storage starts from £3.50 + VAT per pallet per week at LondraDepo. Pick and pack, packaging, delivery and returns are priced per order and item, based on your products and monthly volumes." },
      { q: "What is the difference between fulfilment and warehousing?", a: "Warehousing is receiving and storing stock. Fulfilment adds what happens when a customer orders: picking, packing, labelling, dispatch and returns. LondraDepo provides both from the same Essex warehouse." },
    ],
    related: ["/en/shopify-fulfilment-uk", "/en/blog/uk-warehousing-guide", "/en/blog/amazon-fba-vs-uk-fulfilment", "/en/blog/amazon-prep-uk-guide", "/en/uk-fulfilment"],
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
      { q: "Do you help with shipment plans?", a: "Yes. We guide you through creating shipment plans in Amazon Seller Central and agree who creates each plan, so labelled stock goes to the Amazon UK fulfilment centre Amazon assigns." },
      { q: "Is there a minimum quantity?", a: "There is no fixed minimum. We work with both small batches and full container operations." },
      { q: "What happens if stock is not prepared to Amazon's rules?", a: "Amazon can refuse stock that does not meet its labelling and packaging requirements or charge extra to fix it. Preparing goods in a UK warehouse before delivery lets problems be corrected before Amazon receives them." },
      { q: "How is Amazon prep priced at LondraDepo?", a: "Amazon FBA prep is quoted for your products, quantities and the tasks needed, such as FNSKU labelling, protective packing and carton preparation. Share your SKUs and volumes for a quote." },
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
      { q: "What is a UK transit warehouse?", a: "A UK transit or cross-dock warehouse holds goods briefly, sorts and labels them, then sends them on to UK customers, other warehouses or Amazon, instead of storing them long term. LondraDepo offers this in Essex." },
      { q: "Who should use a transit warehouse?", a: "A transit warehouse suits businesses that ship bulk consignments into the UK but sell in smaller quantities or to several destinations, and want goods split and sent on quickly rather than stored." },
      { q: "Can transit stock also be stored if needed?", a: "Yes. At LondraDepo, part of a delivery can be cross-docked straight on while the rest is stored from £3.50 + VAT per pallet per week and released as orders arrive." },
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
      { q: "What is not included in the pallet storage price?", a: "The storage rate covers storage only. Goods-in, container unloading, re-palletising, labelling, pick and pack, packaging, delivery, returns and customs clearance are quoted separately for your operation." },
      { q: "How can I estimate my monthly warehousing cost?", a: "Multiply your pallets by the number of weeks and the per-pallet weekly rate, then add the handling and delivery lines for your order profile. The storage cost calculator does the storage part for you." },
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
      { q: "Is there a minimum number of pallets for UK storage?", a: "Minimum quantities and acceptance terms are confirmed at quotation stage, based on your products and operating needs." },
      { q: "How much do 10 pallets cost to store for a month?", a: "At LondraDepo, 10 standard pallets for 4 weeks start at £140 + VAT, or £168 including 20% VAT, based on the published rate of £3.50 + VAT per pallet per week." },
      { q: "Is VAT charged on pallet storage?", a: "Yes. Prices are quoted excluding VAT, and VAT is added at the UK standard rate of 20%. VAT-registered businesses can usually reclaim it." },
    ],
    related: ["/en/pallet-storage", "/en/uk-warehousing-pricing", "/en/blog/uk-warehousing-prices-2026", "/en/blog/what-is-a-uk-transit-warehouse"],
  },
  {
    slug: "/en/blog/amazon-fba-vs-uk-fulfilment",
    tr: "/blog/amazon-fba-vs-uk-fulfillment",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, modified: "2026-11-11", readMins: 9, section: "Fulfilment" },
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
        type: "table",
        h2: "Selling in both the UK and the EU",
        intro: "Since the UK left the EU's single market, stock held in the UK and stock held in the EU are separate inventories for customs purposes.",
        head: ["", "Stock in a UK warehouse", "Stock in an EU warehouse"],
        rows: [
          ["Serves", "Amazon.co.uk, UK web and B2B orders", "Amazon's EU marketplaces and EU customers"],
          ["Moving it across the border", "An export from Great Britain plus an import declaration, duty and VAT in the EU country", "An export from the EU plus a UK import declaration, duty and import VAT"],
          ["Registration", "GB EORI number; UK VAT where required", "An EU EORI number and VAT where stock is held"],
          ["Typical set-up", "Import once into the UK, then fulfil FBM or prep for FBA", "Import separately into the EU, often with a local EU fulfilment partner"],
        ],
        note: "GOV.UK: exporters moving goods from Great Britain to the EU follow the export process and need a GB EORI number. Check EU-side rules with your EU broker.",
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
      {
        type: "sources",
        h2: "Sources",
        items: [{ label: "GOV.UK: Export goods from the UK, step by step (including to the EU)", href: "https://www.gov.uk/export-goods" }],
      },
    ],
    faqs: [
      { q: "Can stock in a UK Amazon fulfilment centre be sold on Amazon's EU marketplaces?", a: "Not without crossing a customs border. Moving goods from Great Britain to the EU is an export from the UK and an import into the EU, with declarations, duty and VAT. Most sellers hold separate UK and EU stock; LondraDepo handles the UK side from Essex." },
      { q: "What is the advantage of 3PL fulfilment over Amazon FBA?", a: "With 3PL fulfilment you can run non-Amazon channels such as your website, Etsy and B2B customers from one warehouse, customise packaging and avoid Amazon's long-term storage fees." },
      { q: "Can Amazon FBA and a UK 3PL be used together?", a: "Yes. In a hybrid model some products are held in FBA and others are fulfilled by a 3PL, which can help on both cost and reach." },
      { q: "Does LondraDepo provide Amazon prep?", a: "Yes. FBA prep (labelling, packaging, polybagging and similar tasks) is offered alongside our 3PL fulfilment operation." },
      { q: "When is Amazon FBA the better choice?", a: "Amazon FBA is strong if you sell mainly on Amazon and want Prime eligibility through Amazon's own network. Stock must be prepared to Amazon's rules before it is sent in." },
      { q: "When is a UK 3PL the better choice?", a: "A UK 3PL suits sellers with several channels, such as a website, marketplaces and wholesale, because one stock in a UK warehouse can serve all of them and you keep control of packaging and returns." },
    ],
    related: ["/en/amazon-seller-warehousing-uk", "/en/amazon-prep-uk", "/en/blog/what-is-uk-fulfilment", "/en/blog/uk-warehousing-prices-2026"],
  },
  {
    slug: "/en/blog/uk-importing-guide",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 9, section: "Importing" },
    title: "How to Import Goods into the UK: A Practical Guide",
    description:
      "How to import goods into the UK: GB EORI, commodity codes and the UK Global Tariff, customs declarations, duty and import VAT, rules of origin and choosing a UK warehouse.",
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
      { q: "Can LondraDepo handle the whole import?", a: "Yes. Arca Trade Group, which operates LondraDepo, can arrange freight and lodge the UK customs declaration, and LondraDepo unloads, stores and fulfils the goods in Essex. You can also use your own forwarder." },
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
      { q: "Should I visit a 3PL warehouse before choosing?", a: "Yes, if you can. A visit or video walk-through shows racking, cleanliness and security, and lets you meet the team who will handle your stock day to day." },
      { q: "What contract terms should I check with a 3PL?", a: "Check the contract length, the notice period and how stock is released if you leave, as well as any minimum monthly charges and what insurance applies to your goods." },
    ],
    related: ["/en/shopify-fulfilment-uk", "/en/uk-warehousing", "/en/uk-fulfilment", "/en/uk-warehousing-pricing", "/en/uk-storage-cost-calculator", "/en/industries"],
  },
  {
    slug: "/en/blog/uk-import-costs",
    tr: "/blog/ingiltere-ithalat-maliyetleri",
    kind: "article",
    parent: "/en/blog",
    article: { ...DATE, readMins: 7, section: "Importing" },
    title: "UK Import Costs: Duty, VAT and Logistics",
    description:
      "What it costs to import into the UK: freight, customs clearance, duty by commodity code, 20% import VAT, haulage, unloading, storage and fulfilment, with a worked example.",
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
      { q: "What rate of import VAT applies in the UK?", a: "Import VAT is usually charged at the standard rate of 20% on the value of the goods including duty and transport costs to the UK. Some goods have a 5% or 0% rate." },
      { q: "How is UK customs duty calculated?", a: "Duty is a percentage of the customs value set by the product's commodity code in the UK tariff. Goods that meet the rules of origin under a UK trade agreement can qualify for a reduced or 0% rate with proof of origin." },
      { q: "What is postponed VAT accounting?", a: "It lets VAT-registered importers account for import VAT on their VAT return instead of paying it at the border, which helps cash flow." },
      { q: "What do UK warehousing costs add to an import?", a: "At LondraDepo, storage starts from £3.50 + VAT per pallet per week. Unloading, goods-in, fulfilment and delivery are quoted for your volumes." },
      { q: "Who pays customs duty and import VAT?", a: "The importer of record pays customs duty and accounts for import VAT, not the warehouse. Using LondraDepo or Arca Trade Group's customs service does not make them the importer of record." },
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
      "Amazon FBA prep checklist for UK sellers: shipment plan, FNSKU labels, covering old barcodes, packaging, sets and bundles, carton labels and delivery to Amazon UK.",
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
      { type: "checklist", variant: "fba" },
      {
        type: "text",
        h2: "When to use an Amazon prep warehouse",
        paras: [
          "If your stock arrives in the UK from abroad, preparing it at a UK warehouse before it goes to Amazon lets you fix labelling or packaging problems before Amazon receives the goods. LondraDepo receives stock in Essex, applies FNSKU labels, checks packaging and delivers to the Amazon UK fulfilment centre on the shipment plan. The same stock can also serve Shopify, FBM and wholesale orders.",
        ],
      },
    ],
    faqs: [
      { q: "What does Amazon FBA prep involve?", a: "It is the labelling, packing and preparation products need before Amazon accepts them into its fulfilment centres, such as FNSKU labels, protective packaging and carton labels." },
      { q: "Do I need an FNSKU label on every unit?", a: "Usually yes. Each unit needs an Amazon barcode, normally the FNSKU, unless the product is eligible to use its manufacturer barcode. Check the product's settings in Seller Central." },
      { q: "Can a UK warehouse do FBA prep for me?", a: "Yes. LondraDepo receives your stock in Essex, prepares it to Amazon's requirements and delivers it to the assigned Amazon UK fulfilment centre." },
      { q: "Where can I download the FBA prep checklist?", a: "A printable one-page PDF of this checklist is available on this page. Leave your name and email and the download link appears immediately." },
      { q: "Do Amazon's prep rules change?", a: "Yes. Amazon updates its prep and packaging requirements, so check the current rules in Seller Central for each product before shipping, even if you have sent similar stock before." },
    ],
    related: ["/en/amazon-prep-uk", "/en/amazon-fulfilment-uk", "/en/amazon-seller-warehousing-uk", "/en/blog/amazon-prep-uk-guide", "/en/blog/amazon-fba-vs-uk-fulfilment"],
  },
  {
    slug: "/en/blog/amazon-private-label-wholesale-uk",
    tr: "/blog/amazon-private-label-toptan",
    kind: "article",
    parent: "/en/blog",
    article: { published: "2026-11-13", modified: "2026-11-13", readMins: 6, section: "Amazon" },
    title: "Amazon Private Label vs Wholesale: UK Warehousing",
    description:
      "How private label, wholesale and arbitrage Amazon sellers get stock into the UK, what a prep warehouse does for each, and how to plan storage and FBA batches.",
    label: "Private Label vs Wholesale on Amazon UK",
    h1: "Amazon Private Label, Wholesale and Arbitrage: What Each Needs from a UK Warehouse",
    lead:
      "Amazon sellers fall into three main models, and each sends stock to a UK warehouse differently. Private label sellers import their own branded products, often by the container, so they need unloading, FNSKU labelling and storage with stock sent to Amazon in batches. Wholesale sellers buy branded goods from distributors on mixed pallets with many SKUs, so they need accurate counting, case-pack handling and labelling where required. Online arbitrage sellers buy from retailers, so stock arrives as many small parcels. LondraDepo in Essex is set up for container, pallet and carton volumes, which fits private label and wholesale best.",
    facts: [
      "Private label: container imports, FNSKU labelling, batch sends to Amazon",
      "Wholesale: mixed pallets, many SKUs, case packs",
      "Online arbitrage: many small retail parcels",
      "LondraDepo: container, pallet and carton volumes in Essex",
      "Storage from £3.50 + VAT per pallet per week; no fixed minimum",
    ],
    sections: [
      {
        type: "table",
        h2: "Three Amazon seller models compared",
        head: ["", "Private label", "Wholesale", "Online arbitrage"],
        rows: [
          ["Where stock comes from", "Your own manufacturer, often overseas", "Brand distributors and wholesalers", "High-street and online retailers"],
          ["How it arrives", "20ft or 40ft container, loose or palletised", "Mixed pallets or carton deliveries", "Many small parcels"],
          ["Barcodes", "Usually FNSKU labels on every unit", "Manufacturer barcode or FNSKU, depending on the listing", "FNSKU labels; retail stickers covered or removed"],
          ["Main warehouse work", "Unloading, counting, labelling, palletising, batch sends", "SKU-level counting, case packs, labelling", "Opening parcels, checking, labelling, packing"],
          ["Fit with LondraDepo", "Strong: containers from London Gateway, Tilbury and Felixstowe", "Strong: pallet and carton goods-in", "Discuss volumes first: we are set up for pallets and cartons"],
        ],
      },
      {
        type: "text",
        h2: "Private label: from container to Amazon",
        paras: [
          "A private label shipment usually lands at a UK port in a container. After customs clearance it is hauled to our warehouse in Rayleigh, Essex, 13 to 16 miles from London Gateway and Tilbury, unloaded, counted against the packing list and booked into Mintsoft WMS.",
          "Rather than sending the whole container to Amazon, many sellers keep the balance with us from £3.50 + VAT per pallet per week and send prepared batches as Amazon inventory sells. That keeps slow-moving units out of Amazon's storage fees and lets the same stock serve other channels.",
        ],
      },
      {
        type: "text",
        h2: "Wholesale: many SKUs, accurate counts",
        paras: [
          "Wholesale stock tends to arrive on mixed pallets from several suppliers, with many SKUs in small quantities. The critical step is counting each SKU against the delivery note and Amazon shipment plan before anything is labelled, so discrepancies are caught in the UK rather than at the Amazon fulfilment centre.",
          "Whether units need FNSKU labels or can use the manufacturer barcode depends on how each listing is set up in Seller Central; we follow the instructions for each SKU.",
        ],
      },
      {
        type: "text",
        h2: "Online arbitrage: talk to us about volumes first",
        paras: [
          "Arbitrage stock arrives as a stream of small retail parcels that must be opened, checked and labelled one by one. LondraDepo is set up mainly for container, pallet and carton volumes, so if your model is arbitrage, tell us your weekly parcel numbers first and we will confirm honestly whether it fits.",
        ],
      },
      {
        type: "links",
        h2: "Plan your Amazon set-up",
        items: [
          { href: "/en/amazon-prep-uk", title: "Amazon FBA prep in Essex", text: "FNSKU labelling, packing, pallet rules and delivery to Amazon.", tag: "Service" },
          { href: "/en/amazon-uk-fulfilment-centres", title: "Amazon UK fulfilment centres", text: "Codes, locations and road distances from our warehouse.", tag: "Guide" },
          { href: "/en/cbm-pallet-calculator", title: "CBM and pallet calculator", text: "Carton sizes to cubic metres, pallets and container fill.", tag: "Free tool" },
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "Amazon: Fulfilment by Amazon (sell.amazon.co.uk)", href: "https://sell.amazon.co.uk/fulfilment-by-amazon" },
          { label: "Amazon Freight: UK LTL to Amazon FCs, shipper's checklist", href: "https://freight.amazon.co.uk/newsroom/uk-ltl-amazon-fcs-checklist" },
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between Amazon private label and wholesale?", a: "Private label sellers sell their own brand, made to order by a manufacturer, and usually import it by the container. Wholesale sellers buy existing brands from distributors and resell them on Amazon, usually receiving mixed pallets with many SKUs." },
      { q: "Do wholesale products need FNSKU labels?", a: "It depends on the listing. Some wholesale listings can use the manufacturer barcode, while others need an FNSKU label on every unit; the setting is chosen in Seller Central. LondraDepo labels each SKU according to your instructions before stock goes to Amazon." },
      { q: "Can I store a private label container in the UK and send it to Amazon in batches?", a: "Yes. LondraDepo unloads containers in Rayleigh, Essex, stores the stock from £3.50 + VAT per pallet per week and prepares batches for Amazon as your inventory sells, so slow-moving units are not left in Amazon's storage." },
      { q: "Does LondraDepo work with online arbitrage sellers?", a: "LondraDepo is set up mainly for container, pallet and carton volumes, which suits private label and wholesale best. Arbitrage stock arrives as many small parcels, so tell us your weekly parcel volumes first and we will confirm whether it fits." },
      { q: "Which Amazon seller model suits a manufacturer exporting from Turkey?", a: "A Turkish manufacturer selling its own brand on Amazon UK follows the private label model: it imports its own branded goods by container or pallet, clears them through UK customs and keeps stock in a UK warehouse such as LondraDepo, sending batches to Amazon and serving other channels." },
    ],
    related: ["/en/amazon-prep-uk", "/en/amazon-uk-fulfilment-centres", "/en/amazon-seller-warehousing-uk", "/en/blog/amazon-fba-prep-checklist", "/en/container-unloading", "/en/cbm-pallet-calculator"],
  },
  {
    slug: "/en/blog/uk-import-documents",
    tr: "/blog/ithalat-belgeleri",
    kind: "article",
    parent: "/en/blog",
    article: { published: "2026-11-13", modified: "2026-11-13", readMins: 6, section: "Importing" },
    title: "UK Import Documents: Invoice, Packing List, B/L",
    description:
      "Documents to import goods into the UK: commercial invoice, packing list, bill of lading or air waybill and proof of origin, plus a free packing list template.",
    label: "UK Import Documents",
    h1: "UK Import Documents: What You Need and What Each Must Show",
    lead:
      "To import goods into Great Britain you need four core documents: a commercial invoice showing the value of the goods, a packing list showing what is in each carton, a transport document (a bill of lading for sea freight or an air waybill for air), and proof of origin if you claim a lower duty rate under a UK trade agreement. Your customs agent uses them for the import declaration, which also needs a GB EORI number, the commodity code and the value of the goods. LondraDepo uses the same packing list to count your goods in at our Essex warehouse, so a clear one saves time at both steps.",
    facts: [
      "GB EORI number needed to import into Great Britain",
      "Commodity code and value of goods go on the import declaration",
      "Proof of origin needed to claim a preferential (lower) duty rate",
      "Keep preference records for at least 4 years (HMRC)",
      "Free packing list template (CSV) below",
    ],
    sections: [
      {
        type: "table",
        h2: "The core UK import documents",
        head: ["Document", "Usually issued by", "What it is used for"],
        rows: [
          ["Commercial invoice", "Seller or exporter", "Value of the goods for duty and import VAT; buyer, seller and Incoterm"],
          ["Packing list", "Seller or exporter", "Contents of every carton and pallet; used for customs checks and warehouse goods-in"],
          ["Bill of lading (sea) or air waybill (air)", "Shipping line, airline or forwarder", "Proof of shipment and, for an original bill of lading, the right to collect the goods"],
          ["Proof of origin", "Exporter, under the rules of the trade agreement", "Claiming a preferential duty rate, for example under the UK–Turkey trade agreement"],
          ["Licences or certificates", "Relevant authority", "Only for controlled goods such as food, plants, medicines or chemicals"],
        ],
        note: "Your customs agent may ask for more for specific goods. Check controlled goods on GOV.UK before shipping.",
      },
      {
        type: "list",
        h2: "What a good commercial invoice shows",
        items: [
          "Seller and buyer names and addresses, and the importer's GB EORI number",
          "Invoice number and date",
          "A clear description of each product, with quantity and unit price",
          "Commodity code for each product, where known",
          "Total value and currency",
          "Incoterm and named place, for example FOB Mersin",
          "Country of origin of the goods",
        ],
      },
      {
        type: "list",
        h2: "What a good packing list shows",
        intro: "The packing list is what our team counts against when your container or pallets arrive in Rayleigh, Essex.",
        items: [
          "Shipment reference, matching the invoice and transport document",
          "Every carton numbered, with the SKU and units per carton",
          "Total cartons and total units per SKU",
          "Carton dimensions and gross and net weight",
          "Which pallet each carton is on, if palletised",
        ],
        outro: "A free packing list template in English (and Turkish) is linked below.",
      },
      {
        type: "links",
        h2: "Free templates and tools",
        items: [
          { href: "/templates/packing-list-template.csv", title: "Packing list template (CSV)", text: "Open in Excel or Google Sheets; one row per carton or SKU.", tag: "Download" },
          { href: "/en/cbm-pallet-calculator", title: "CBM and pallet calculator", text: "Carton sizes to cubic metres, pallets and container fill.", tag: "Free tool" },
          { href: "/en/blog/uk-importing-guide", title: "UK importing guide", text: "The full import process, with a printable checklist.", tag: "Guide" },
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "GOV.UK: Import goods into the UK, step by step", href: "https://www.gov.uk/import-goods-into-uk" },
          { label: "GOV.UK: Pay less Customs Duty on goods from a country with a UK trade agreement", href: "https://www.gov.uk/guidance/import-and-export-goods-using-preference-agreements" },
        ],
      },
    ],
    faqs: [
      { q: "What documents do I need to import goods into the UK?", a: "You normally need a commercial invoice, a packing list, a transport document such as a bill of lading or air waybill, and proof of origin if you claim a lower duty rate. The import declaration also needs a GB EORI number, the commodity code and the value of the goods." },
      { q: "What is the difference between a commercial invoice and a packing list?", a: "The commercial invoice shows the value of the goods, which customs uses to work out duty and import VAT. The packing list shows what is physically in each carton and pallet, which customs and the receiving warehouse use to check the shipment." },
      { q: "Do I need proof of origin to import from Turkey?", a: "Only if you want a preferential, lower duty rate under the UK–Turkey trade agreement. GOV.UK says you must hold valid proof of origin for the claim and keep it, with supporting records, for at least 4 years. Without it, the standard duty rate applies." },
      { q: "Why does the warehouse need my packing list?", a: "LondraDepo counts every delivery against the packing list when it arrives in Rayleigh, Essex, records discrepancies and books stock into Mintsoft WMS by SKU. A packing list with carton numbers, SKUs and units per carton makes goods-in faster and more accurate." },
      { q: "Is there a free packing list template?", a: "Yes. LondraDepo offers a free packing list template as a CSV file with columns for carton number, SKU, units, dimensions, weights, pallet number and country of origin. It opens in Excel or Google Sheets, in English or Turkish." },
    ],
    related: ["/en/blog/uk-importing-guide", "/en/blog/incoterms-for-uk-imports", "/en/uk-customs-clearance", "/en/cbm-pallet-calculator", "/en/shipping-container-types", "/en/container-unloading"],
  },
  {
    slug: "/en/blog/bonded-warehouse-vs-duty-paid-storage",
    tr: "/blog/antrepo-nedir",
    kind: "article",
    parent: "/en/blog",
    article: { published: "2026-11-11", modified: "2026-11-11", readMins: 6, section: "Importing" },
    title: "Bonded Warehouse Meaning: Customs vs Duty-Paid",
    description:
      "What a bonded (customs) warehouse is, when duty and import VAT are suspended, and when duty-paid storage with postponed VAT accounting is the simpler choice.",
    label: "Bonded Warehouse vs Duty-Paid Storage",
    h1: "Bonded Warehouse Meaning: Customs Warehouse or Duty-Paid Storage?",
    lead:
      "A bonded warehouse, which HMRC calls a customs warehouse, is an HMRC-authorised site where imported goods can be stored with customs duty and import VAT suspended; the charges fall due only when the goods are released into free circulation in the UK, and goods re-exported from the warehouse may never pay them. A duty-paid (cleared) warehouse such as LondraDepo stores goods after the import declaration, once duty and import VAT have been paid or accounted for. For VAT-registered importers, postponed VAT accounting already removes the import VAT cash outlay, so a bonded warehouse mainly pays off when duty is high or goods may leave the UK again.",
    facts: [
      "Bonded = HMRC 'customs warehousing' special procedure",
      "Duty and import VAT suspended until goods are released",
      "Run by warehousekeepers approved and supervised by HMRC",
      "Postponed VAT accounting: no import VAT paid at the border for VAT-registered importers",
      "LondraDepo is a duty-paid warehouse, not a bonded warehouse",
    ],
    sections: [
      {
        type: "table",
        h2: "Bonded warehouse vs duty-paid storage",
        head: ["", "Bonded (customs) warehouse", "Duty-paid warehouse"],
        rows: [
          ["Customs status of the goods", "Not yet in free circulation; held under the customs warehousing procedure", "Cleared into free circulation in the UK"],
          ["Customs duty", "Suspended until release; not due if the goods are re-exported", "Paid when the import declaration is made"],
          ["Import VAT", "Suspended until release", "Paid at import, or accounted for on the VAT Return with postponed VAT accounting"],
          ["Who can operate it", "A warehousekeeper authorised and supervised by HMRC", "Any warehouse; no customs authorisation needed"],
          ["Records and controls", "HMRC conditions on record keeping, treatment and storage of goods", "Normal stock and VAT records"],
          ["Best for", "High-duty goods, long storage before sale, or goods likely to be re-exported", "Goods sold in the UK soon after arrival, ecommerce and Amazon stock"],
        ],
      },
      {
        type: "text",
        h2: "What a customs warehouse actually is",
        paras: [
          "GOV.UK describes customs warehousing as a special procedure that lets importers store goods while duties and import VAT are suspended. From the warehouse, goods can be declared to another customs procedure, re-exported, or released into free circulation, at which point duty and VAT become due.",
          "There are two types. A public customs warehouse stores other people's goods; a private customs warehouse stores the operator's own goods. The person placing goods into the warehouse, the depositor, must be established in the UK and either declare the goods into the procedure or appoint an agent to do it.",
        ],
      },
      {
        type: "text",
        h2: "Do you need a bonded warehouse? Usually not for UK sales",
        paras: [
          "If your goods will be sold in the UK, duty becomes payable sooner or later anyway. The cash-flow saving of a bonded warehouse is the duty on stock that has not yet sold, and it comes with extra customs controls and records.",
          "Import VAT is often the bigger number, and VAT-registered importers in Great Britain can use postponed VAT accounting: GOV.UK says they declare and recover import VAT on the same VAT Return instead of paying it when the goods arrive, with no approval needed. Many UK goods also carry a 0% customs duty rate. For that stock, cleared storage is usually simpler and cheaper.",
          "A bonded warehouse earns its place for goods with high duty rates, alcohol and other excise goods, stock held for many months before sale, or goods that may be re-exported, where the duty would otherwise never be recovered.",
        ],
      },
      {
        type: "list",
        h2: "How duty-paid storage works with LondraDepo",
        items: [
          "Arca Trade Group, which operates LondraDepo, or your own broker lodges the import declaration and clears the goods at the port.",
          "If you are VAT-registered, you can choose postponed VAT accounting on the declaration instead of paying import VAT at the border.",
          "The cleared container or pallets are delivered to our warehouse in Rayleigh, Essex, 13 to 16 miles from London Gateway and Tilbury.",
          "Stock is booked into Mintsoft WMS and stored from £3.50 + VAT per pallet per week, then fulfilled, sent to Amazon or delivered to UK customers.",
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "GOV.UK: Special procedure, customs warehousing (introduction)", href: "https://www.gov.uk/guidance/special-procedure-customs-warehousing/introduction" },
          { label: "GOV.UK: Check when you can account for import VAT on your VAT Return", href: "https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return" },
          { label: "GOV.UK: The UK's integrated tariff schedule", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
        ],
      },
    ],
    faqs: [
      { q: "What does bonded warehouse mean?", a: "A bonded warehouse, called a customs warehouse by HMRC, is an authorised site where imported goods are stored with customs duty and import VAT suspended. The charges become due when the goods are released into free circulation in the UK, and are not due if the goods are re-exported." },
      { q: "Is a bonded warehouse the same as a customs warehouse?", a: "Yes, in UK usage. HMRC's term is customs warehousing, a special procedure run by warehousekeepers it authorises and supervises. Bonded warehouse is the common trade name for the same thing, also used for excise goods such as alcohol." },
      { q: "Does LondraDepo offer bonded storage?", a: "No. LondraDepo in Rayleigh, Essex is a duty-paid warehouse: goods are cleared through UK customs before we store them. Arca Trade Group, which operates LondraDepo, can handle the import declaration and port collection." },
      { q: "Do I need a bonded warehouse to delay paying import VAT?", a: "Usually not. GOV.UK says VAT-registered importers in Great Britain can use postponed VAT accounting, declaring and recovering import VAT on the same VAT Return instead of paying it at the border, with no approval needed. A bonded warehouse is mainly about suspending duty." },
      { q: "When is a bonded warehouse worth it?", a: "A bonded warehouse is worth considering for goods with high duty rates, excise goods such as alcohol, stock stored for many months before sale, or goods that may be re-exported. For stock sold in the UK soon after arrival, duty-paid storage is usually simpler." },
    ],
    related: ["/en/uk-customs-clearance", "/en/blog/uk-import-costs", "/en/blog/uk-importing-guide", "/en/uk-import-logistics", "/en/london-gateway-tilbury-warehousing", "/en/pallet-storage"],
  },
  {
    slug: "/en/blog/incoterms-for-uk-imports",
    tr: "/blog/incoterms-rehberi",
    kind: "article",
    parent: "/en/blog",
    article: { published: "2026-11-11", modified: "2026-11-11", readMins: 6, section: "Importing" },
    title: "Incoterms for UK Imports: EXW, FOB, CIF, DAP, DDP",
    description:
      "Incoterms 2020 explained for goods shipped to the UK: who pays freight, insurance, customs, duty and import VAT under EXW, FCA, FOB, CIF, DAP and DDP.",
    label: "Incoterms for UK Imports",
    h1: "Incoterms for UK Imports: Who Pays for What?",
    lead:
      "Incoterms are the International Chamber of Commerce's standard trade terms that say where the seller's responsibility for goods, costs and risk ends and the buyer's begins; the current edition, Incoterms 2020, has applied since 1 January 2020. For goods shipped to the UK, the term decides who books the freight, who insures it and who clears UK customs. Under EXW, FCA, FOB and CIF the UK buyer clears import customs and pays duty and import VAT; under DAP the buyer still clears customs; only under DDP does the seller pay UK duty and import VAT.",
    facts: [
      "Incoterms 2020: 11 rules, in force since 1 January 2020",
      "FOB, FAS, CFR and CIF are for sea and inland waterway only",
      "EXW, FCA, CPT, CIP, DAP, DPU and DDP work for any transport",
      "Only DDP puts UK import duty and VAT on the seller",
      "Incoterms do not cover payment terms or transfer of ownership",
    ],
    sections: [
      {
        type: "table",
        h2: "The common Incoterms for goods coming to the UK",
        head: ["Term", "Seller's job ends", "Main freight paid by", "UK customs, duty and VAT"],
        rows: [
          ["EXW (Ex Works)", "Goods ready at the seller's premises", "Buyer", "Buyer"],
          ["FCA (Free Carrier)", "Goods handed to the buyer's carrier, export-cleared", "Buyer", "Buyer"],
          ["FOB (Free On Board)", "Goods loaded on the vessel at the origin port", "Buyer", "Buyer"],
          ["CIF (Cost, Insurance and Freight)", "Goods loaded on the vessel; seller pays sea freight and minimum insurance to the UK port", "Seller", "Buyer"],
          ["DAP (Delivered At Place)", "Goods arrive at the named UK place, ready for unloading", "Seller", "Buyer"],
          ["DDP (Delivered Duty Paid)", "Goods arrive at the named UK place, cleared for import", "Seller", "Seller"],
        ],
        note: "Summary of the ICC's Incoterms 2020 rules. Always name a precise place after the term, for example 'FOB Mersin' or 'DAP Rayleigh SS6 7FY'.",
      },
      {
        type: "text",
        h2: "Which term suits a UK importer?",
        paras: [
          "FOB and FCA are popular with UK importers because the buyer controls the main freight and the UK end: you choose the forwarder, the arrival port and the customs broker, and you can see the full landed cost. With CIF the supplier books the sea freight, which can be convenient but leaves you with less say over the vessel, the arrival date and the destination charges.",
          "DDP looks simplest, but the seller must act as, or appoint, the UK importer and pay duty and import VAT. A non-UK seller often cannot recover that VAT as easily as a VAT-registered UK importer using postponed VAT accounting, and the cost usually returns in the price.",
        ],
      },
      {
        type: "list",
        h2: "Incoterms checklist before you place an order",
        items: [
          "Use the Incoterms 2020 name and a precise place, such as FOB Mersin or DAP Rayleigh SS6 7FY.",
          "Use FOB, FAS, CFR or CIF only for sea freight; for containers handed over at a terminal, FCA is often the better fit.",
          "Agree who books and pays for unloading at the UK warehouse; under DAP the buyer unloads.",
          "Check who is the importer of record and holds the GB EORI number for the UK import declaration.",
          "Remember that Incoterms do not set payment terms or the moment ownership passes; put those in the sales contract.",
        ],
      },
      {
        type: "text",
        h2: "How LondraDepo fits each term",
        paras: [
          "Under EXW, FCA or FOB, Arca Trade Group, which operates LondraDepo, can arrange the main freight, UK customs clearance and haulage from the port to our warehouse in Rayleigh, Essex. Under CIF or DAP, your supplier's forwarder brings the goods to the UK port or our door, and we can still handle clearance and unloading. Under DDP, we receive the cleared goods and store them from £3.50 + VAT per pallet per week.",
        ],
      },
      {
        type: "sources",
        h2: "Sources",
        items: [
          { label: "International Chamber of Commerce: Incoterms rules (Incoterms 2020)", href: "https://iccwbo.org/business-solutions/incoterms-rules/" },
          { label: "GOV.UK: Check when you can account for import VAT on your VAT Return", href: "https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return" },
        ],
      },
    ],
    faqs: [
      { q: "What are Incoterms?", a: "Incoterms are the International Chamber of Commerce's standard trade terms that define where a seller's responsibility for delivery, costs and risk ends and the buyer's begins. The current edition, Incoterms 2020, has applied since 1 January 2020." },
      { q: "Who pays UK import duty and VAT under FOB or CIF?", a: "The buyer. Under FOB and CIF the seller's job ends when the goods are loaded on the vessel at the origin port, so the UK buyer clears import customs and pays duty and import VAT, or uses postponed VAT accounting if VAT-registered." },
      { q: "What is the difference between DAP and DDP?", a: "Under both DAP and DDP the seller delivers to a named place in the UK. Under DAP the buyer clears UK import customs and pays duty and import VAT; under DDP the seller does both, acting as or appointing the UK importer." },
      { q: "Which Incoterm is best for importing into the UK?", a: "Many UK importers prefer FOB for sea freight or FCA for containers handed over at a terminal, because they control the main freight, the arrival port and the customs broker. LondraDepo's operator Arca Trade Group can arrange freight and clearance on those terms." },
      { q: "Can I use FOB for air freight or road freight?", a: "No. Under the ICC's Incoterms 2020, FOB, FAS, CFR and CIF are for sea and inland waterway transport only. For air or road freight, use a term such as FCA, CPT, CIP, DAP or DDP." },
    ],
    related: ["/en/blog/uk-importing-guide", "/en/blog/uk-import-costs", "/en/blog/bonded-warehouse-vs-duty-paid-storage", "/en/uk-customs-clearance", "/en/uk-import-logistics", "/en/cbm-pallet-calculator"],
  },
];

const guide = (slug: string) => {
  const p = blogPages.find((g) => g.slug === slug);
  if (!p) throw new Error(`blog hub: unknown guide ${slug}`);
  return { href: p.slug, title: p.h1, text: p.description, tag: p.article?.section };
};

export const blogHub: EnPage = {
  slug: "/en/blog",
  tr: "/blog",
  kind: "hub",
  modified: "2026-11-10",
  title: "UK Warehousing, Fulfilment & Import Guides",
  description:
    "Practical guides for selling into the UK: warehousing and pallet storage costs, fulfilment, Amazon FBA prep, importing, duty and VAT, and how to choose a UK 3PL.",
  label: "Guides",
  eyebrow: "Knowledge centre",
  h1: "UK Warehousing, Fulfilment and Import Guides",
  lead:
    "These guides answer the questions overseas businesses ask before they hold stock in the UK: how UK warehousing works and what it costs, how fulfilment and Amazon FBA prep work, how to import goods and account for duty and import VAT, and how to choose a UK 3PL. Each is written from running our warehouse in Rayleigh, Essex, and links to the matching service and free planning tools.",
  facts: [
    `${blogPages.length} practical guides, updated November 2026`,
    "Topics: warehousing costs, fulfilment, Amazon, importing, choosing a 3PL",
    "Free tools: storage cost calculator and container arrival planner",
    "Free downloads: UK import checklist and Amazon FBA prep checklist (PDF)",
  ],
  sections: [
    {
      type: "links",
      h2: "Start here",
      intro: "New to UK warehousing? These three guides cover the basics, the costs and how to compare providers.",
      items: [guide("/en/blog/uk-warehousing-guide"), guide("/en/blog/uk-warehousing-prices-2026"), guide("/en/blog/how-to-choose-a-uk-3pl")],
    },
    {
      type: "links",
      h2: "Warehousing and storage costs",
      items: [guide("/en/blog/uk-warehousing-guide"), guide("/en/blog/uk-warehousing-prices-2026"), guide("/en/blog/uk-pallet-storage-costs"), guide("/en/blog/what-is-a-uk-transit-warehouse")],
    },
    {
      type: "links",
      h2: "Fulfilment and choosing a partner",
      items: [guide("/en/blog/what-is-uk-fulfilment"), guide("/en/blog/how-to-choose-a-uk-3pl"), guide("/en/blog/amazon-fba-vs-uk-fulfilment")],
    },
    {
      type: "links",
      h2: "Amazon sellers",
      items: [guide("/en/blog/amazon-prep-uk-guide"), guide("/en/blog/amazon-fba-prep-checklist"), guide("/en/blog/amazon-fba-vs-uk-fulfilment"), guide("/en/blog/amazon-private-label-wholesale-uk")],
    },
    {
      type: "links",
      h2: "Importing into the UK",
      items: [guide("/en/blog/uk-importing-guide"), guide("/en/blog/uk-import-costs"), guide("/en/blog/uk-import-documents"), guide("/en/blog/incoterms-for-uk-imports"), guide("/en/blog/bonded-warehouse-vs-duty-paid-storage")],
    },
    {
      type: "links",
      h2: "Free tools and downloads",
      items: [
        { href: "/en/uk-storage-cost-calculator", title: "Storage cost calculator", text: "Pallets × weeks at £3.50 + VAT per pallet per week, with VAT shown.", tag: "Free tool" },
        { href: "/en/container-arrival-planner", title: "Container arrival planner", text: "A dated checklist from UK port to our Essex warehouse, based on your ETA.", tag: "Free tool" },
        { href: "/en/cbm-pallet-calculator", title: "CBM and pallet calculator", text: "Carton size to cubic metres, pallets and container fill.", tag: "Free tool" },
        { href: "/en/blog/uk-importing-guide", title: "UK import checklist (PDF)", text: "Set-up, products, documents, clearance and warehouse steps on two A4 pages.", tag: "Download" },
        { href: "/en/blog/amazon-fba-prep-checklist", title: "Amazon FBA prep checklist (PDF)", text: "Unit preparation, cartons and delivery to Amazon UK on one A4 page.", tag: "Download" },
      ],
    },
  ],
  faqs: [
    { q: "Where should I start if I am new to UK warehousing?", a: "Start with the UK warehousing guide for how it works, then the UK warehousing prices guide for the cost lines, and the 3PL guide for the questions to ask before you choose a provider." },
    { q: "How much does UK warehousing cost?", a: "At LondraDepo, standard pallet storage starts from £3.50 + VAT per pallet per week, so 10 pallets for 4 weeks start at £140 + VAT. Goods-in, pick and pack, delivery and customs are quoted separately; the pricing and pallet storage guides explain each line." },
    { q: "Which guide explains import duty and VAT?", a: "The UK import costs guide explains customs duty, import VAT at usually 20% of the value including duty and transport, and postponed VAT accounting, with a worked example. The UK importing guide covers the GB EORI, commodity codes and declarations." },
    { q: "Which guide explains Amazon FBA prep?", a: "The Amazon Prep UK guide explains the step-by-step process and the Amazon FBA prep checklist covers unit preparation, carton labels and delivery to Amazon UK. A printable PDF version of the checklist is available." },
    { q: "Are the guides written by warehouse operators?", a: "Yes. The guides are written from experience running LondraDepo's warehouse in Rayleigh, Essex, by Sertaç Yılmaz, founder and co-founder of Arca Trade Group, and reviewed by Operations Manager Yusuf Barış." },
  ],
  related: ["/en/uk-warehousing", "/en/uk-fulfilment", "/en/uk-import-logistics", "/en/amazon-prep-uk", "/en/case-studies"],
  cta: { h2: "Ready to talk about your products?", text: "Tell us what you sell, your volumes and your channels, and we will propose a UK set-up." },
};
