import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Amazon%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Amazon İngiltere Fulfillment | Amazon UK Stok & Sipariş | LondraDepo.com",
  description:
    "Amazon üzerinden satış yapan işletmeler için İngiltere fulfillment hizmeti. Stok depolama, sipariş yönetimi, pick & pack ve UK teslimat desteği. Amazon FBA prep hizmetimiz de mevcuttur.",
  alternates: { canonical: `${SITE_URL}/amazon-fulfillment` },
  openGraph: {
    title: "Amazon İngiltere Fulfillment | LondraDepo.com",
    description: "Amazon UK fulfillment. Stok depolama, pick & pack ve UK teslimat desteği.",
    url: `${SITE_URL}/amazon-fulfillment`,
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
        { "@type": "ListItem", position: 2, name: "Amazon Fulfillment", item: `${SITE_URL}/amazon-fulfillment` },
      ],
    },
    {
      "@type": "Service",
      name: "Amazon İngiltere Fulfillment",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Amazon Fulfillment",
      description:
        "Amazon üzerinden satış yapan işletmeler için İngiltere fulfillment hizmeti. Stok depolama, sipariş yönetimi, pick & pack ve UK teslimat desteği.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/amazon-fulfillment`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "LondraDepo resmi bir Amazon partneri midir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LondraDepo, Amazon'un resmi partneri değildir. Amazon üzerinden satış yapan işletmelere stok depolama ve fulfillment desteği sunmaktayız.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon FBA prep hizmetiniz de var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Amazon FBA hazırlık hizmetimiz /amazon-prep-uk sayfamızda detaylı olarak anlatılmaktadır.",
          },
        },
      ],
    },
  ],
};

const features = [
  { icon: "🏢", title: "Stok Depolama", desc: "Amazon satışlarınız için UK'de güvenli stok depolama." },
  { icon: "📋", title: "Sipariş Yönetimi", desc: "Amazon siparişlerinin sistematik olarak yönetimi." },
  { icon: "🔍", title: "Pick & Pack", desc: "Siparişe göre ürün toplama ve paketleme." },
  { icon: "🏷️", title: "Etiketleme", desc: "Amazon gereksinimlerine uygun ürün etiketleme." },
  { icon: "📊", title: "Stok Takibi", desc: "Mintsoft WMS ile stok seviyelerinin takibi." },
  { icon: "🚚", title: "UK Teslimat", desc: "Siparişlerin UK müşterilerine sevki." },
];

export default function AmazonFulfillmentPage() {
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
              <span className="text-white">Amazon Fulfillment</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              📦 Amazon üzerinden satış yapan işletmeler için
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Amazon İngiltere Fulfillment
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Amazon üzerinden UK pazarında satış yapan işletmeler için stok depolama ve
              fulfillment desteği. Amazon siparişlerinizi depo altyapımızdan yönetin.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Not: LondraDepo, Amazon'un resmi partneri değildir. Amazon üzerinden satış yapan
              işletmelere fulfillment desteği sunmaktayız. FBA hazırlık hizmeti için{" "}
              <a href="/amazon-prep-uk" className="text-green-400 hover:underline">Amazon Prep UK</a>{" "}
              sayfamızı inceleyin.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Amazon Fulfillment Hakkında Bilgi Al
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Amazon Fulfillment Kapsamı</h2>
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

        {/* Cross-link to FBA prep */}
        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">Amazon FBA Hazırlık Hizmeti</h2>
            <p className="text-slate-600 text-sm mb-6">
              Ürünlerinizi Amazon FBA merkezlerine göndermek istiyorsanız, FNSKU etiketleme
              ve FBA uyumluluk hazırlığını kapsayan Amazon Prep UK hizmetimizi inceleyin.
            </p>
            <a
              href="/amazon-prep-uk"
              className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-6 py-3 rounded-full transition text-sm"
            >
              Amazon Prep UK Sayfasına Git →
            </a>
          </div>
        </section>

        <CtaCards />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
