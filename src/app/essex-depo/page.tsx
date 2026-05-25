import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/essex-depo`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Essex%20depo%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Essex Depo Hizmeti | Essex Warehouse UK | LondraDepo.com",
  description:
    "Essex'te depo hizmeti. Londra yakını Essex depo alanlarımızda ürünlerinizi güvenle depolayın. Türkiye'den İngiltere'ye gelen yükler için Essex warehouse çözümleri.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Essex Depo Hizmeti | LondraDepo.com",
    description: "Essex, Londra yakını depo ve lojistik çözümleri. Türk ihracatçıları için UK warehouse operasyonu.",
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
        { "@type": "ListItem", position: 2, name: "Essex Depo", item: PAGE_URL },
      ],
    },
    {
      "@type": ["LocalBusiness", "WarehouseOrDistributionFacility"],
      name: "LondraDepo.com — Essex Warehouse",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      description: "Essex merkezli UK depo ve lojistik operasyonu. Türkiye'den gelen yükler için İngiltere depolama ve dağıtım.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Essex",
        addressCountry: "GB",
      },
      areaServed: ["Essex", "London", "United Kingdom"],
      url: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Essex deponuz Londra'ya ne kadar uzakta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essex merkezli operasyonumuz Londra'ya yakın konumuyla İngiltere genelinde hızlı dağıtım imkânı sunar.",
          },
        },
        {
          "@type": "Question",
          name: "Essex deponuza Türkiye'den konteyner gönderebilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Türkiye'den gelen FCL (tam konteyner) ve LCL (parsiyel yük) sevkiyatları Essex depomuzda teslim alıyoruz.",
          },
        },
      ],
    },
  ],
};

export default function EssexDepoPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Essex Depo</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
              Essex Depo Hizmeti — Londra Yakını UK Warehouse
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Essex merkezli depomuz, Türkiye'den İngiltere'ye ihracat yapan markalar için stratejik bir konumda yer alıyor. Londra'ya yakınlığı sayesinde İngiltere genelinde hızlı dağıtım imkânı sunan operasyonumuz, palet depolama, fulfillment ve Amazon prep hizmetlerini tek çatı altında sağlıyor.
            </p>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 mb-10">
              <h2 className="text-xl font-bold mb-4">Neden Essex?</h2>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>✓ Londra'ya yakın stratejik konum</li>
                <li>✓ Felixstowe ve Tilbury limanlarına yakın erişim</li>
                <li>✓ İngiltere kuzey ve güneye kolay dağıtım</li>
                <li>✓ Amazon UK depolarına hızlı teslimat</li>
                <li>✓ Türkiye'den gelen konteyner ve parsiyel yük kabulü</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Konteyner Kabulü", desc: "FCL ve LCL sevkiyatlar teslim alınır, boşaltılır ve stoka alınır." },
                { title: "Palet Depolama", desc: "Paletsiz veya paletli ürünler güvenli depo alanında muhafaza edilir." },
                { title: "Fulfillment", desc: "Siparişler hazırlanır, paketlenir ve müşterilere sevk edilir." },
                { title: "Amazon Prep", desc: "FBA uyumlu hazırlık ve Amazon deposuna sevk yapılır." },
                { title: "Gümrük Danışmanlığı", desc: "GTIP kodu ve gümrük süreçleri için yönlendirme yapılır." },
                { title: "Dağıtım Ağı", desc: "Tüm İngiltere'ye dağıtım için taşıyıcı ortaklarımıza entegre." },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                  <h2 className="font-bold text-[#0b2545] mb-2">{item.title}</h2>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 mb-12 text-center">
              <p className="text-[#0b2545] font-semibold text-lg mb-4">
                Essex depo kapasitesi ve fiyat için hemen yazın
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                WhatsApp ile Teklif Al
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
              </div>
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
