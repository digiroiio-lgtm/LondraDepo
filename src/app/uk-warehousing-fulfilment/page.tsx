import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Hello%2C%20I%27d%20like%20to%20discuss%20UK%20warehousing%20and%20fulfilment.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "UK Warehousing & Fulfilment Services | London Storage | LondraDepo",
  description:
    "UK warehousing, fulfilment and distribution from Essex, near London. Customs clearance coordination, pick & pack, Shopify fulfilment, Amazon fulfilment and UK-wide delivery for businesses selling in the UK.",
  keywords: [
    "UK warehousing",
    "London warehousing",
    "UK fulfilment",
    "London fulfilment centre",
    "ecommerce fulfilment UK",
    "Shopify fulfilment UK",
    "Amazon fulfilment UK",
    "pick and pack UK",
    "UK distribution",
    "UK storage services",
    "Essex warehouse",
  ],
  alternates: { canonical: `${SITE_URL}/uk-warehousing-fulfilment` },
  openGraph: {
    title: "UK Warehousing & Fulfilment Services | LondraDepo",
    description:
      "UK warehousing, fulfilment and distribution. Customs clearance coordination, pick & pack, Shopify and Amazon fulfilment, UK delivery.",
    url: `${SITE_URL}/uk-warehousing-fulfilment`,
    siteName: "LondraDepo.com",
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "UK Warehousing & Fulfilment",
          item: `${SITE_URL}/uk-warehousing-fulfilment`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "UK Warehousing & Fulfilment",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing and Fulfilment",
      description:
        "UK warehousing, customs clearance coordination, goods handling, pick & pack, e-commerce fulfilment, Shopify fulfilment, Amazon fulfilment and UK distribution from Essex.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/uk-warehousing-fulfilment`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the warehouse located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our warehouse operation is based in Essex, near London. We serve businesses across the UK.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer Shopify fulfilment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support businesses selling through Shopify by storing their inventory and processing orders from our warehouse. LondraDepo is not an official Shopify partner.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer Amazon fulfilment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support businesses selling through Amazon by storing their inventory and processing orders. We also offer Amazon FBA prep services. LondraDepo is not an official Amazon partner.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with customs clearance for goods entering the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide customs clearance coordination support for goods entering the United Kingdom. Please contact us to discuss the scope of support available for your shipment.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: "🏢",
    title: "Warehousing & Storage",
    desc: "Short and long-term storage solutions for businesses needing UK inventory capacity. Pallet and carton storage, goods receiving and inventory management.",
  },
  {
    icon: "📋",
    title: "Customs Clearance",
    desc: "Coordination support for businesses bringing goods into the United Kingdom. Import documentation coordination and shipment arrival support.",
  },
  {
    icon: "🔄",
    title: "Loading, Unloading & Handling",
    desc: "Vehicle unloading and loading, pallet and carton handling, goods receiving, sorting, repacking, relabelling and shipment preparation.",
  },
  {
    icon: "🚚",
    title: "Collection & UK Distribution",
    desc: "Collection services, warehouse transfers and UK-wide delivery coordination.",
  },
  {
    icon: "📬",
    title: "E-commerce Fulfilment",
    desc: "Order processing, pick & pack, shipping labels, packing, dispatch and returns handling for online businesses.",
  },
  {
    icon: "🛍️",
    title: "Shopify & Amazon Fulfilment",
    desc: "Fulfilment support for businesses selling through Shopify and Amazon. Inventory stored in our warehouse, orders processed and dispatched.",
  },
];

const howItWorks = [
  { num: "01", title: "Send", desc: "Ship your products to our UK warehouse address." },
  { num: "02", title: "Clear", desc: "We support the customs clearance coordination process." },
  { num: "03", title: "Store", desc: "Products are received, counted and stored in our warehouse." },
  { num: "04", title: "Sell", desc: "Continue selling through your existing channels — Shopify, Amazon or wholesale." },
  { num: "05", title: "Fulfil", desc: "Orders enter the fulfilment workflow. Products are picked, packed and labelled." },
  { num: "06", title: "Deliver", desc: "Orders are dispatched for delivery to your customers across the UK." },
];

const faqs = [
  {
    q: "Where is the warehouse located?",
    a: "Our warehouse operation is based in Essex, near London. We serve businesses across the UK.",
  },
  {
    q: "Do you offer Shopify fulfilment?",
    a: "Yes. We support businesses selling through Shopify by storing their inventory and processing orders from our warehouse. LondraDepo is not an official Shopify partner.",
  },
  {
    q: "Do you offer Amazon fulfilment?",
    a: "Yes. We support businesses selling through Amazon by storing their inventory and processing orders. We also offer Amazon FBA prep services. LondraDepo is not an official Amazon partner.",
  },
  {
    q: "Can you help with customs clearance for goods entering the UK?",
    a: "We provide customs clearance coordination support for goods entering the United Kingdom. Contact us to discuss the scope of support available.",
  },
  {
    q: "Do you accept pallet and carton storage?",
    a: "Yes. We accept both palletised and carton-based goods for storage. Short and long-term options are available.",
  },
  {
    q: "How does pick and pack work?",
    a: "When an order is received, it enters the warehouse management system. The warehouse team picks the relevant products, packs them, generates a shipping label and dispatches the order to the customer.",
  },
  {
    q: "Can you distribute products across the UK?",
    a: "Yes. Our Essex-based operation coordinates UK-wide delivery for orders dispatched from the warehouse.",
  },
];

export default function UKWarehousingPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
              🇬🇧 UK Warehousing & Fulfilment Partner
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-balance mb-6">
              UK Warehousing &amp;{" "}
              <span className="text-red-400">Fulfilment Services</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Store your products in our UK warehouse and let us handle the operational work.
              From customs clearance coordination and goods handling to Shopify and Amazon
              fulfilment, pick &amp; pack and UK-wide delivery — one operational partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg"
              >
                Get a Warehousing Quote
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition"
              >
                📞 Talk to Our Team
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              London Storage • Customs Clearance • Pick &amp; Pack • E-commerce Fulfilment • UK Distribution
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">
                UK Warehousing &amp; Fulfilment Services
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Complete UK logistics infrastructure for businesses operating in the UK market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#0b2545] text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 bg-[#0b2545]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                One Partner From Import to Delivery
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto">
                A single operational partner covering the full UK logistics journey.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {howItWorks.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-extrabold text-sm mb-2">
                    {step.num}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Set Up Your Fulfilment Operation
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0b2545] mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
              Send Your Products. We Handle the UK Operation.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              From customs clearance coordination and warehousing to pick &amp; pack,
              e-commerce fulfilment and UK-wide delivery — one partner, one operation.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition shadow-lg"
            >
              Get a Warehousing Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
