import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Shopify%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Shopify Fulfillment İngiltere | Shopify UK Sipariş Karşılama | LondraDepo.com",
  description:
    "Shopify mağazanızdan gelen UK siparişleri için fulfillment hizmeti. Stok depolama, pick & pack, kargo ve İngiltere geneli teslimat. Shopify üzerinden satış yapan işletmeler için UK fulfillment.",
  alternates: { canonical: `${SITE_URL}/shopify-fulfillment` },
  openGraph: {
    title: "Shopify Fulfillment İngiltere | LondraDepo.com",
    description: "Shopify UK fulfillment. Stok depolama, pick & pack ve İngiltere teslimat.",
    url: `${SITE_URL}/shopify-fulfillment`,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Shopify Fulfillment", item: `${SITE_URL}/shopify-fulfillment` },
      ],
    },
    {
      "@type": "Service",
      name: "Shopify İngiltere Fulfillment",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Shopify Fulfillment",
      description:
        "Shopify üzerinden satış yapan işletmeler için İngiltere fulfillment hizmeti. Stok depolama, pick & pack, kargo ve UK geneli teslimat.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/shopify-fulfillment`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Shopify mağazamla LondraDepo nasıl çalışır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürün stoğunuz depomuzda saklanır. Shopify üzerinden sipariş geldiğinde, depo ekibi siparişi işler, ürünü toplar, paketler ve müşterinize sevk eder.",
          },
        },
        {
          "@type": "Question",
          name: "LondraDepo resmi bir Shopify partneri midir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LondraDepo, Shopify'ın resmi partneri değildir. Shopify üzerinden satış yapan işletmelere fulfillment hizmeti sunuyoruz.",
          },
        },
      ],
    },
  ],
};

const steps = [
  { num: "01", title: "Stok Depolama", desc: "Ürünlerinizi depomuzda saklayın." },
  { num: "02", title: "Sipariş Alınır", desc: "Shopify mağazanızdan sipariş gelir." },
  { num: "03", title: "WMS'e Girer", desc: "Sipariş depo yönetim sistemine aktarılır." },
  { num: "04", title: "Pick", desc: "Depo ekibi ürünü stoktan toplar." },
  { num: "05", title: "Pack", desc: "Ürün paketlenir." },
  { num: "06", title: "Etiket", desc: "Kargo etiketi oluşturulur." },
  { num: "07", title: "Teslimat", desc: "Sipariş müşteriye sevk edilir." },
];

export default function ShopifyFulfillmentPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Shopify Fulfillment</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              🛍️ Shopify üzerinden satış yapan işletmeler için
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Shopify İngiltere Fulfillment
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Shopify mağazanızdan gelen UK siparişlerini depo altyapımızla karşılayın.
              Kendi deponuzu kurmadan UK pazarında fulfillment operasyonu yürütün.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Not: LondraDepo, Shopify'ın resmi partneri değildir. Shopify üzerinden satış yapan
              işletmelere fulfillment desteği sunmaktayız.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Shopify Fulfillment Kur
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-10 text-center">
              Süreç Nasıl İşliyor?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-xs mb-2">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-xs mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Neden LondraDepo?</h2>
            <ul className="space-y-4">
              {[
                "Kendi UK deponuzu kurmadan fulfillment altyapısından yararlanın.",
                "Ürünleriniz Essex'teki depomuzda güvenle saklanır.",
                "Sipariş geldiğinde depo ekibi tüm süreci yönetir.",
                "UK geneline teslimat koordinasyonu sağlanır.",
                "Mintsoft WMS ile stok ve sipariş takibi yapılır.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaCards />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
