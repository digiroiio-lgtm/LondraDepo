import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/hakkimizda`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hakkımızda | LondraDepo.com — İngiltere Depo ve Fulfillment",
  description:
    "LondraDepo.com hakkında. Essex merkezli İngiltere depo, fulfillment ve UK lojistik operasyonumuz. Türkiye'den İngiltere'ye ihracat yapan markaların güvenilir UK lojistik partneri.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Hakkımızda | LondraDepo.com",
    description: "Essex merkezli UK depo ve lojistik operasyonumuz hakkında bilgi alın.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Hakkımızda", item: PAGE_URL },
      ],
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "LondraDepo.com",
      url: SITE_URL,
      description:
        "İngiltere depo, fulfillment ve dağıtım çözümleri sunan Essex merkezli UK operasyon partneri.",
      foundingLocation: { "@type": "Place", name: "Essex, United Kingdom" },
      areaServed: ["London", "Essex", "Birmingham", "Manchester", "United Kingdom"],
      knowsAbout: [
        "UK Warehousing",
        "Fulfillment",
        "Pallet Storage",
        "Amazon Prep",
        "UK Distribution",
        "Turkish Export to UK",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        url: WHATSAPP,
      },
    },
  ],
};

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Hakkımızda</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
              LondraDepo.com Hakkında
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              LondraDepo.com, Türkiye'den İngiltere'ye ihracat yapan markalar için Essex merkezli depolama, fulfillment ve UK lojistik çözümleri sunan bir operasyon platformudur.
            </p>

            <div className="prose max-w-none text-slate-600 mb-10 space-y-4">
              <p>
                İngiltere'de fiziksel operasyon yürüten bir yapı olarak; ürünlerinizin İngiltere'ye gümrüksüz girişinden itibaren depolanması, siparişlerinizin hazırlanması ve dağıtımınızın sağlanması süreçlerini tek noktadan yönetiyoruz.
              </p>
              <p>
                Essex konumumuz, Londra'ya yakınlığı ve liman erişimiyle stratejik bir üs görevi görüyor. Felixstowe ve Tilbury limanlarından gelen konteyner yükleri doğrudan depomuzda karşılanıyor.
              </p>
              <p>
                Türk ihracatçılarına, e-ticaret satıcılarına, toptancılara ve ithalatçılara UK'da güvenilir bir lojistik partner sunuyoruz. Amazon, Etsy, Shopify satıcıları ile perakende markaları için özelleştirilmiş operasyon modelleri geliştiriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Operasyon Merkezi", value: "Essex, İngiltere" },
                { label: "Hizmet Dilleri", value: "Türkçe & İngilizce" },
                { label: "Hizmet Bölgesi", value: "Tüm İngiltere" },
              ].map((item) => (
                <div key={item.label} className="bg-[#f6f8fb] rounded-xl p-6 text-center">
                  <div className="text-[#0b2545] font-bold text-lg mb-1">{item.value}</div>
                  <div className="text-slate-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Hizmet Alanlarımız</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { title: "İngiltere Depo", href: "/ingiltere-depo-avantajlari" },
                { title: "İngiltere Fulfillment", href: "/ingiltere-fulfillment" },
                { title: "Palet Depolama", href: "/palet-depolama" },
                { title: "Amazon Prep UK", href: "/amazon-prep-uk" },
                { title: "Essex Depo", href: "/essex-depo" },
                { title: "UK Dağıtım", href: "/#hizmetler" },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="border border-slate-200 rounded-xl px-5 py-4 text-[#0b2545] font-semibold hover:bg-[#f6f8fb] transition flex items-center justify-between"
                >
                  {service.title}
                  <span className="text-slate-400">→</span>
                </Link>
              ))}
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-3">Operasyonunuzu birlikte planlayalım</h2>
              <p className="text-slate-300 text-sm mb-6">
                İngiltere operasyonunuz için ihtiyacınıza özel çözüm sunarız. Türkçe destek mevcut.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
