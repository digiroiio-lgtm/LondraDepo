import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depolama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "İngiltere Depolama Hizmeti | UK Stok Depolama | LondraDepo.com",
  description:
    "İngiltere'de kısa ve uzun vadeli depolama hizmeti. Palet ve koli kabulü, ürün teslim alma, stok yönetimi. Londra yakınında Essex'te güvenli UK depo operasyonu.",
  alternates: { canonical: `${SITE_URL}/depolama` },
  openGraph: {
    title: "İngiltere Depolama Hizmeti | LondraDepo.com",
    description: "UK depolama çözümleri. Kısa/uzun vadeli depo, palet ve koli kabulü, stok yönetimi.",
    url: `${SITE_URL}/depolama`,
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
        { "@type": "ListItem", position: 2, name: "Depolama Hizmeti", item: `${SITE_URL}/depolama` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Depolama Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing",
      description:
        "İngiltere'de kısa ve uzun vadeli depolama hizmeti. Palet ve koli kabulü, ürün teslim alma, stok yönetimi. Essex merkezli UK depo operasyonu.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/depolama`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kısa vadeli depolama mümkün mü?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Hem kısa hem de uzun vadeli depolama seçenekleri mevcuttur. İhtiyacınıza göre esneklik sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Palet depolama kabul ediyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Hem paletli hem de kolili ürünleri kabul ediyoruz. Ayrıca ayrı palet depolama hizmetimiz de mevcuttur.",
          },
        },
      ],
    },
  ],
};

const features = [
  { icon: "📦", title: "Kısa Vadeli Depolama", desc: "Geçici veya sezonluk stok ihtiyaçları için esnek kısa vadeli depolama." },
  { icon: "🏢", title: "Uzun Vadeli Depolama", desc: "UK pazarınızdaki kalıcı stok için güvenli uzun vadeli depo alanı." },
  { icon: "🔢", title: "Palet & Koli Depolama", desc: "Hem paletli hem kolili ürünler için düzenli, güvenli depolama." },
  { icon: "✅", title: "Ürün Kabul & Sayım", desc: "Depoya gelen ürünler kontrollü şekilde teslim alınır ve sayılır." },
  { icon: "📊", title: "Stok Yönetimi", desc: "Mintsoft WMS aracılığıyla stok seviyeleri ve hareketleri kayıt altına alınır." },
  { icon: "👁️", title: "Stok İzleme", desc: "Depodaki ürünlerinizin durumu sistematik olarak takip edilir." },
];

const faqs = [
  {
    q: "Kısa vadeli depolama mümkün mü?",
    a: "Evet. Hem kısa hem de uzun vadeli depolama seçenekleri mevcuttur.",
  },
  {
    q: "Palet depolama kabul ediyor musunuz?",
    a: "Evet. Hem paletli hem de kolili ürünleri kabul ediyoruz.",
  },
  {
    q: "Stok takibi nasıl yapılıyor?",
    a: "Mintsoft depo yönetim yazılımı (WMS) üzerinden stok seviyeleri ve ürün hareketleri kayıt altında tutulmaktadır.",
  },
  {
    q: "Türkiye'den gelen ürünleri kabul ediyor musunuz?",
    a: "Evet. Türkiye veya herhangi bir tedarikçiden gelen ürünleri depo adresimizde kabul ediyoruz.",
  },
];

export default function DepolamaPage() {
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
              <span className="text-white">Depolama Hizmeti</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              İngiltere Depolama Hizmeti
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              İngiltere pazarındaki ürünleriniz için güvenli, düzenli ve ölçeklenebilir depolama
              çözümleri. Kısa veya uzun vadeli ihtiyaçlarınıza göre esnek depo kapasitesi.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Depo Fiyatı Al
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Depolama Hizmeti Kapsamı</h2>
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

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8">Sık Sorulan Sorular</h2>
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

        <CtaCards />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
