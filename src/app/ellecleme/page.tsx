import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20elleçleme%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "İngiltere Elleçleme Hizmeti | Yükleme, Boşaltma & Ürün Elleçleme | LondraDepo.com",
  description:
    "İngiltere'de araç boşaltma, yükleme, palet ve koli elleçleme, ürün sıralama, yeniden paketleme, etiketleme ve sevkiyat hazırlama hizmetleri. Essex merkezli UK elleçleme operasyonu.",
  alternates: { canonical: `${SITE_URL}/ellecleme` },
  openGraph: {
    title: "İngiltere Elleçleme Hizmeti | LondraDepo.com",
    description: "UK yükleme, boşaltma ve ürün elleçleme hizmetleri. Paketleme, etiketleme, sevkiyat hazırlama.",
    url: `${SITE_URL}/ellecleme`,
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
        { "@type": "ListItem", position: 2, name: "Elleçleme Hizmeti", item: `${SITE_URL}/ellecleme` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Elleçleme Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Goods Handling",
      description:
        "İngiltere'de araç boşaltma, yükleme, palet ve koli elleçleme, ürün kabul, sıralama, yeniden paketleme, etiketleme ve sevkiyat hazırlama.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/ellecleme`,
    },
  ],
};

const features = [
  { icon: "🚛", title: "Araç Boşaltma", desc: "Gelen araçların düzenli ve kontrollü boşaltılması." },
  { icon: "🚚", title: "Araç Yükleme", desc: "Sevkiyat öncesi araçlara yükleme operasyonu." },
  { icon: "📦", title: "Palet Elleçleme", desc: "Paletlerin depo içinde güvenli taşınması ve yerleştirilmesi." },
  { icon: "📫", title: "Koli Elleçleme", desc: "Kolilerin kabulü, sayımı ve depo yerleşimi." },
  { icon: "✅", title: "Ürün Kabul & Kontrol", desc: "Gelen ürünlerin teslim alınması ve kontrolü." },
  { icon: "🔀", title: "Sıralama & Ayırma", desc: "Ürünlerin türüne, boyutuna veya hedefine göre sıralanması." },
  { icon: "📦", title: "Yeniden Paketleme", desc: "Gerektiğinde ürünlerin yeniden paketlenmesi." },
  { icon: "🏷️", title: "Etiketleme & Yeniden Etiketleme", desc: "Ürünlerin sevkiyat gereksinimlerine göre etiketlenmesi." },
  { icon: "📋", title: "Sevkiyat Hazırlama", desc: "Ürünlerin sevkiyata hazır hale getirilmesi." },
];

export default function EllecelermePage() {
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
              <span className="text-white">Elleçleme Hizmeti</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              İngiltere Elleçleme Hizmeti
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              Araç boşaltma ve yüklemeden palet ve koli elleçlemeye, ürün sıralama ve
              yeniden paketlemeden etiketleme ve sevkiyat hazırlamaya kadar kapsamlı
              yük elleçleme hizmetleri.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Elleçleme Fiyatı Al
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Elleçleme Hizmeti Kapsamı</h2>
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
