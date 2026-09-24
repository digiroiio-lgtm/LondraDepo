import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20nakliye%20ve%20dağıtım%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "İngiltere Nakliye ve Dağıtım Hizmeti | UK Distribution | LondraDepo.com",
  description:
    "İngiltere içi nakliye ve dağıtım hizmetleri. Ürün toplama, depo transferleri, yerel dağıtım ve UK geneli teslimat koordinasyonu. Essex merkezli operasyon.",
  alternates: { canonical: `${SITE_URL}/nakliye-dagitim` },
  openGraph: {
    title: "İngiltere Nakliye ve Dağıtım | LondraDepo.com",
    description: "UK içi nakliye ve dağıtım koordinasyonu. Ürün toplama, yerel dağıtım, UK geneli teslimat.",
    url: `${SITE_URL}/nakliye-dagitim`,
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
        { "@type": "ListItem", position: 2, name: "Nakliye & Dağıtım", item: `${SITE_URL}/nakliye-dagitim` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Nakliye ve Dağıtım Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Distribution",
      description:
        "İngiltere içi nakliye ve dağıtım hizmetleri. Ürün toplama, depo transferleri, yerel dağıtım ve UK geneli teslimat koordinasyonu.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/nakliye-dagitim`,
    },
  ],
};

const features = [
  { icon: "📍", title: "Ürün Toplama (Collection)", desc: "Başka bir UK konumundan ürün toplama ve depoya getirme." },
  { icon: "🔄", title: "Depo Transferleri", desc: "Depo içi ve depolar arası ürün transferi." },
  { icon: "🗺️", title: "Yerel Dağıtım", desc: "Londra ve Essex çevresine yerel dağıtım desteği." },
  { icon: "🇬🇧", title: "UK Geneli Teslimat", desc: "İngiltere'nin farklı bölgelerine teslimat koordinasyonu." },
  { icon: "📋", title: "Sevkiyat Hazırlama", desc: "Ürünlerin dağıtıma hazır hale getirilmesi." },
  { icon: "🔗", title: "Operasyon Koordinasyonu", desc: "Nakliye sürecinin uçtan uca koordinasyonu." },
];

export default function NakliyeDagitimPage() {
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
              <span className="text-white">Nakliye & Dağıtım</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              İngiltere Nakliye ve Dağıtım Hizmeti
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              UK içi nakliye ve dağıtım ihtiyaçlarınız için operasyon koordinasyonu.
              Ürün toplama, depo transferleri ve İngiltere geneline dağıtım desteği.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Dağıtım Teklifi Al
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Nakliye & Dağıtım Kapsamı</h2>
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
