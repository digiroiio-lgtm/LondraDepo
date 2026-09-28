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
    { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}/#webpage`,
      name: "LondraDepo.com Hakkında",
      url: PAGE_URL,
      description:
        "Essex merkezli İngiltere depo, fulfillment ve UK lojistik operasyonumuz. Türkiye'den İngiltere'ye ihracat yapan markaların UK lojistik partneri.",
      about: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "tr",
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
                LondraDepo.com, Türkiye'den İngiltere'ye ihracat yapan markalar için fiziksel bir UK lojistik altyapısı sunar. <strong>Arca Trade Group Ltd</strong> çatısı altında 2021'den beri faaliyet gösteren Essex depo operasyonumuz; ürünlerin İngiltere'ye gelişinden müşteriye teslimatına kadar tüm süreci tek noktadan yönetir.
              </p>
              <p>
                Depomuz Rayleigh, Essex'teki Arterial Park sanayi bölgesinde yer alıyor: <strong>Unit 19 Arterial Park, Arterial Road, Rayleigh SS6 7FY</strong>. Bu konum, Londra'ya ~40 dakika, Felixstowe Limanı'na ~1 saat, Tilbury Limanı'na ~30 dakika mesafede. Türkiye'den gelen FCL konteynerlerin doğrudan teslim alındığı bu nokta; M25 üzerinden İngiltere'nin tamamına dağıtım yapabilmemizi sağlıyor.
              </p>
              <p>
                Operasyonumuz Mintsoft WMS üzerinde çalışıyor. Stok seviyeleri, gelen ve çıkan sevkiyatlar, sipariş durumları gerçek zamanlı takip edilebiliyor. Bu altyapı, hem Amazon FBA prep hem Shopify/e-ticaret fulfillment hem de B2B toptancı dağıtım modellerini destekliyor.
              </p>
              <p>
                Türkçe operasyon iletişimi sunuyoruz. İhracat belgelerinden gümrük koordinasyonuna, ürün kabulünden stok raporlamasına kadar her adımda Türkçe destek sağlanıyor. Bu, İngiltere'de ilk kez operasyon kuran Türk markaları için kritik bir farklılaştırıcı.
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

            <div className="mb-12">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Depo Tesisimiz — Unit 19 Arterial Park, Rayleigh, Essex
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <img
                  src="/arterial-park-arterial-road-rayleigh_depoici.jpeg"
                  alt="LondraDepo.com — Arterial Park Rayleigh Essex depo içi"
                  className="rounded-xl object-cover w-full h-48"
                  loading="lazy"
                />
                <img
                  src="/arterial-park-arterial-road-rayleigh_distankosecekimi.jpeg"
                  alt="LondraDepo.com — Arterial Park Rayleigh Essex depo uzak çekim"
                  className="rounded-xl object-cover w-full h-48"
                  loading="lazy"
                />
                <img
                  src="/arterial-park-arterial-road-rayleigh_officespace.jpeg"
                  alt="LondraDepo.com — Arterial Park Rayleigh Essex ofis alanı"
                  className="rounded-xl object-cover w-full h-48"
                  loading="lazy"
                />
              </div>
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

            <div className="bg-[#f6f8fb] border border-slate-200 rounded-2xl p-6 mb-8">
              <h2 className="text-lg font-bold text-[#0b2545] mb-3">Sektör Bağlantıları</h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  🌐 <strong>GLA (Global Logistics Alliance)</strong> — Kurucumuz Sertaç Yılmaz, uluslararası yük taşımacılığı ağı GLA&apos;nın konferanslarına katılım sağlamaktadır. GLA üyesi olan kurucumuz, 15. GLA Global Lojistik Konferansı&apos;na (Bangkok, 2026) katılım sağlamaktadır.
                </li>
                <li>
                  🏛️ <strong>BIFA (British International Freight Association):</strong>{" "}
                  <a href="https://bifa.org/members/arca-trade-group-ltd/" target="_blank" rel="noopener noreferrer" className="text-[#0b2545] underline">
                    Arca Trade Group Ltd — Kayıtlı BIFA Üyesi
                  </a>
                </li>
                <li>
                  🏢 <strong>LinkedIn:</strong>{" "}
                  <a href="https://www.linkedin.com/company/arcatradegroup/" target="_blank" rel="noopener noreferrer" className="text-[#0b2545] underline">
                    linkedin.com/company/arcatradegroup
                  </a>
                </li>
                <li>
                  🏛️ <strong>Companies House:</strong>{" "}
                  <a href="https://find-and-update.company-information.service.gov.uk/company/13247691" target="_blank" rel="noopener noreferrer" className="text-[#0b2545] underline">
                    Arca Trade Group Ltd · No: 13247691
                  </a>
                </li>
              </ul>
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
