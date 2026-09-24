import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaCards from "@/components/CtaCards";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20UK%20gümrükleme%20desteği%20hakkında%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "İngiltere Gümrükleme Desteği | UK İthalat Koordinasyonu | LondraDepo.com",
  description:
    "İngiltere'ye ithalat için gümrükleme süreci koordinasyonu. UK gümrük belgesi desteği, sevkiyat varış koordinasyonu. Türkiye'den İngiltere'ye ihracat eden işletmeler için.",
  alternates: { canonical: `${SITE_URL}/gumrukleme` },
  openGraph: {
    title: "İngiltere Gümrükleme Desteği | LondraDepo.com",
    description: "UK ithalat gümrükleme koordinasyonu. Türkiye'den İngiltere'ye ihracat için destek.",
    url: `${SITE_URL}/gumrukleme`,
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
        { "@type": "ListItem", position: 2, name: "Gümrükleme Desteği", item: `${SITE_URL}/gumrukleme` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Gümrükleme Süreci Koordinasyonu",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Customs Clearance Coordination",
      description:
        "İngiltere'ye ithalat için gümrükleme süreci koordinasyonu ve desteği. UK gümrük belgesi koordinasyonu ve sevkiyat-depo operasyonu.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/gumrukleme`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "UK gümrükleme sürecinde nasıl destek sağlıyorsunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gümrükleme sürecinde koordinasyon desteği sağlıyoruz. Gümrük işlemleri uzman gümrükçüler gerektirdiğinden, bu alanda yönlendirme ve süreç koordinasyonu sunmaktayız.",
          },
        },
      ],
    },
  ],
};

const features = [
  { icon: "📋", title: "İthalat Gümrükleme Koordinasyonu", desc: "İngiltere'ye yapılan ithalatlarda gümrükleme süreci koordinasyonunu destekliyoruz." },
  { icon: "📄", title: "Belge Koordinasyonu", desc: "Gümrük sürecinde gerekli belgeler konusunda koordinasyon ve yönlendirme." },
  { icon: "🚢", title: "Sevkiyat Varış Koordinasyonu", desc: "Ürünlerinizin İngiltere'ye varışında gerekli süreç koordinasyonu." },
  { icon: "🏢", title: "Gümrük→Depo Operasyonu", desc: "Gümrükten çıkan ürünlerin depoya alınmasına kadar süreç yönetimi." },
];

const faqs = [
  {
    q: "UK gümrükleme sürecinde nasıl destek sağlıyorsunuz?",
    a: "Gümrükleme sürecinde koordinasyon desteği sağlıyoruz. Gümrük işlemleri uzman gümrükçüler gerektirdiğinden, bu alanda yönlendirme ve süreç koordinasyonu sunmaktayız. Doğrudan gümrükleme hizmetinin kapsamı hakkında daha fazla bilgi için bizimle iletişime geçin.",
  },
  {
    q: "Türkiye'den gönderdiğim ürünler için UK gümrük desteği alabilir miyim?",
    a: "Evet. Türkiye'den İngiltere'ye gönderilen ürünlerin gümrükleme sürecinde koordinasyon desteği sağlıyoruz.",
  },
  {
    q: "Gümrük sonrası ürünler depoya nasıl alınıyor?",
    a: "Gümrük sürecinin tamamlanmasının ardından ürünleriniz depo adresimize teslim edilir, sayılır ve depo sistemine dahil edilir.",
  },
];

export default function GumruklernePage() {
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
              <span className="text-white">Gümrükleme Desteği</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              İngiltere Gümrükleme Desteği
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-6">
              Ürünlerinizi İngiltere'ye getirme sürecinde gümrükleme koordinasyonu desteği sunuyoruz.
              Türkiye'den veya herhangi bir ülkeden UK'e yapılan ithalatlarda süreç koordinasyonu
              ve yönlendirme sağlıyoruz.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8 text-sm text-slate-300 max-w-2xl">
              <strong className="text-white">Önemli Not:</strong> Gümrük işlemleri doğası gereği
              lisanslı gümrükçüler gerektirmektedir. Sunduğumuz hizmet, gümrükleme sürecine
              koordinasyon ve destek niteliğinde olup doğrudan gümrük beyanı içermeyebilir.
              Detaylar için bizimle iletişime geçin.
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Gümrükleme Hakkında Bilgi Al
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Gümrükleme Desteği Kapsamı</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
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
