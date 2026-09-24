import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20e-ticaret%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "İngiltere E-Ticaret Fulfillment | UK Online Sipariş Karşılama | LondraDepo.com",
  description:
    "İngiltere e-ticaret fulfillment hizmeti. Sipariş yönetimi, stok takibi, pick & pack, kargo etiketleme ve UK teslimat. Online mağazanızdan gelen siparişleri biz karşılayalım.",
  alternates: { canonical: `${SITE_URL}/e-ticaret-fulfillment` },
  openGraph: {
    title: "İngiltere E-Ticaret Fulfillment | LondraDepo.com",
    description: "UK e-ticaret fulfillment. Sipariş yönetimi, pick & pack, kargo ve UK teslimat.",
    url: `${SITE_URL}/e-ticaret-fulfillment`,
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
        { "@type": "ListItem", position: 2, name: "E-Ticaret Fulfillment", item: `${SITE_URL}/e-ticaret-fulfillment` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere E-Ticaret Fulfillment Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Ecommerce Fulfillment",
      description:
        "İngiltere e-ticaret fulfillment. Sipariş yönetimi, stok takibi, pick & pack, kargo etiketleme, paketleme, sevkiyat ve UK teslimat.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/e-ticaret-fulfillment`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "E-ticaret fulfillment süreci nasıl çalışıyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Müşteri siparişi alındığında sipariş depo sistemine girer. Depo ekibi ürünleri stoktan toplar (pick), paketler (pack), kargo etiketi oluşturulur ve müşteriye sevk edilir.",
          },
        },
      ],
    },
  ],
};

const workflow = [
  { num: "01", label: "Sipariş alınır", desc: "Online mağazanızdan sipariş gelir." },
  { num: "02", label: "Sisteme girer", desc: "Sipariş depo yönetim sistemine (WMS) aktarılır." },
  { num: "03", label: "Ürün toplanır", desc: "Depo ekibi stoktan ürünü toplar." },
  { num: "04", label: "Paketlenir", desc: "Ürün uygun şekilde paketlenir." },
  { num: "05", label: "Etiketlenir", desc: "Kargo etiketi oluşturulur." },
  { num: "06", label: "Sevk edilir", desc: "Sipariş müşteriye gönderilir." },
];

const features = [
  { icon: "📋", title: "Sipariş Yönetimi", desc: "Gelen siparişlerin sistematik olarak yönetimi." },
  { icon: "📊", title: "Stok Takibi", desc: "Mintsoft WMS ile stok seviyelerinin anlık takibi." },
  { icon: "🔍", title: "Pick & Pack", desc: "Siparişe göre ürün toplama ve paketleme operasyonu." },
  { icon: "🏷️", title: "Kargo Etiketleme", desc: "Sevkiyat etiketlerinin oluşturulması ve yapıştırılması." },
  { icon: "📦", title: "Paketleme", desc: "Ürünlerin sevkiyata uygun şekilde paketlenmesi." },
  { icon: "🚚", title: "Sevkiyat", desc: "Hazır siparişlerin UK geneline sevki." },
  { icon: "↩️", title: "İade Yönetimi", desc: "Müşteri iadelerinin kabulü ve işlenmesi." },
];

export default function ETicaretFulfillmentPage() {
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
              <span className="text-white">E-Ticaret Fulfillment</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              İngiltere E-Ticaret Fulfillment
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              Online satış operasyonunuzu depo altyapımızla birleştirin.
              Sipariş geldiğinde depo ekibi süreci devralır — ürünleri toplar, paketler
              ve UK müşterilerinize sevk eder.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Fulfillment Operasyonumu Kuralım
            </a>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-10 text-center">
              Online Siparişten Müşteri Teslimatına
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {workflow.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-sm mb-2">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-sm mb-1">{step.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Fulfillment Kapsamı</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaCards />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
