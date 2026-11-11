import Emoji from "@/components/visual/Emoji";
import PageFaq from "@/components/PageFaq";
import AmazonInboundTr from "@/components/AmazonInboundTr";
import TrackedLink from "@/components/TrackedLink";
import { bookingUrl } from "@/lib/booking";
import TrClusterNav from "@/components/TrClusterNav";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Amazon%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Amazon UK Fulfillment: FBA Prep, FBM ve Depolama | LondraDepo",
  description:
    "Amazon UK için Essex'te FBA prep, FBM sipariş karşılama ve haftalık £3,50 + KDV'den palet depolama; gümrükleme Arca üzerinden. Sabit minimum yok, 1 deneme paleti.",
  alternates: trAlternates("/amazon-fulfillment"),
  openGraph: {
    title: "Amazon İngiltere Fulfillment | LondraDepo",
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
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Amazon Fulfillment",
      description:
        "Amazon üzerinden satış yapan işletmeler için İngiltere fulfillment hizmeti. Stok depolama, sipariş yönetimi, pick & pack ve UK teslimat desteği.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/amazon-fulfillment`,
    },
  ],
};

const faqs = [
  {
    "q": "LondraDepo resmi bir Amazon partneri midir?",
    "a": "LondraDepo, Amazon'un resmi partneri değildir. Amazon üzerinden satış yapan işletmelere stok depolama ve fulfillment desteği sunmaktayız."
  },
  {
    "q": "Amazon FBA prep hizmetiniz de var mı?",
    "a": "Evet. LondraDepo Essex'te Amazon FBA hazırlığı yapar: FNSKU etiketleme, ambalaj kontrolü ve koli hazırlığından sonra stok, sevkiyat planındaki Amazon UK deposuna teslim edilir. Ayrıntılar Amazon Prep UK sayfamızda."
  },
  { q: "Amazon FBA ile FBM arasındaki fark nedir?", a: "FBA'da stoğunuzu Amazon depolar ve gönderir; ürünler önce Amazon kurallarına göre hazırlanmalıdır. FBM'de siparişleri siz veya deponuz gönderir. LondraDepo ikisini de destekler: Essex'te FBA hazırlık ve FBM sipariş karşılama." },
  { q: "Hazırlanan ürünleri Amazon UK depolarına gönderebilir misiniz?", a: "Evet. LondraDepo stoğunuzu Essex'te Amazon gerekliliklerine göre etiketler ve paketler, ardından sevkiyat planınızda atanan Amazon UK deposuna teslim eder." },
  { q: "FBA ve FBM'yi aynı anda kullanabilir miyim?", a: "Evet. Stoğunuzun bir kısmını FBM ve diğer kanallar için LondraDepo'da tutup hazırlanmış partileri Amazon FBA'ya gönderebilirsiniz; böylece tek bir fulfillment modeline bağlı kalmazsınız." },
];

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
              <Emoji e="📦" /> Amazon üzerinden satış yapan işletmeler için
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
              className="inline-flex items-center gap-2 bg-[#d62839] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Amazon Fulfillment Hakkında Bilgi Al
            </a>
            <TrackedLink kind="booking" source="amazon_fulfillment_tr_hero" href={bookingUrl("tr", "amazon_fulfillment_tr_hero")} className="ml-0 sm:ml-3 mt-3 sm:mt-0 inline-flex items-center gap-2 border border-white/60 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition">
              15 dakikalık görüşme ayarlayın
            </TrackedLink>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Amazon Fulfillment Kapsamı</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2"><Emoji e={f.icon} /></div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <AmazonInboundTr />
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

        <TrClusterNav path="/amazon-fulfillment" />
        <PageFaq faqs={faqs} />
        <CtaCards />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
