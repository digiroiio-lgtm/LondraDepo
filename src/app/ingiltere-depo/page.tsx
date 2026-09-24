import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20İngiltere%20depo%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "İngiltere Depo Hizmeti | UK Depolama | LondraDepo.com",
  description:
    "İngiltere'de güvenli depo hizmeti. Ürünlerinizi Essex merkezli UK depomuza gönderin; mal kabul, palet ve koli depolama, stok yönetimi, sipariş karşılama ve UK dağıtım. Teklif için WhatsApp'tan yazın.",
  keywords: [
    "ingiltere depo",
    "ingiltere depo hizmeti",
    "ingiltere depolama",
    "uk depo",
    "uk depo hizmeti",
    "ingiltere ürün depolama",
    "ingiltere stok depolama",
    "ingiltere palet depolama",
    "ingiltere koli depolama",
    "ingiltere ticari depo",
    "ingiltere mal kabul",
    "ingiltere stok yönetimi",
    "ingiltere 3pl",
    "ingilterede depo kiralama",
  ],
  alternates: { canonical: `${SITE_URL}/ingiltere-depo` },
  openGraph: {
    title: "İngiltere Depo Hizmeti | LondraDepo.com",
    description: "UK depolama, mal kabul, stok yönetimi ve sipariş karşılama. Essex merkezli İngiltere depo hizmeti.",
    url: `${SITE_URL}/ingiltere-depo`,
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
        { "@type": "ListItem", position: 2, name: "İngiltere Depo", item: `${SITE_URL}/ingiltere-depo` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Depo ve Depolama Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing",
      description:
        "İngiltere'de ürün depolama, mal kabul, palet ve koli depolama, stok yönetimi, sipariş karşılama ve UK dağıtım hizmeti.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/ingiltere-depo`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere depo hizmetiniz hangi bölgelere hizmet veriyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essex merkezli depomuz İngiltere geneline hizmet vermektedir. Londra başta olmak üzere Birmingham, Manchester ve tüm UK'e dağıtım koordinasyonu sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Türkiye'den İngiltere depoma ürün gönderebilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Türkiye'deki tedarikçinizden veya üretim noktanızdan ürünlerinizi doğrudan depo adresimize gönderebilirsiniz. UK ithalat gümrükleme sürecinde koordinasyon desteği de sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere depo fiyatlarınız nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fiyatlar ürün türü, hacim, stok miktarı ve ihtiyaç duyulan hizmetlere göre değişmektedir. WhatsApp üzerinden bizimle iletişime geçin, size özel teklif hazırlayalım.",
          },
        },
        {
          "@type": "Question",
          name: "Sadece depolama mı yapıyorsunuz yoksa sipariş karşılama da var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hem depolama hem de tam sipariş karşılama (fulfilment) hizmeti sunuyoruz. Sipariş geldiğinde ürünü depomuzdan toplar, paketler, etiketler ve UK müşterilerinize sevk ederiz.",
          },
        },
        {
          "@type": "Question",
          name: "Palet ve koli depolama kabul ediyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Hem paletli hem de kolili ürünler için depolama hizmeti sunuyoruz. Kısa ve uzun dönemli depolama seçenekleri mevcuttur.",
          },
        },
      ],
    },
  ],
};

const services = [
  { icon: "📦", title: "Mal Kabul", desc: "Ürünleriniz depoya geldiğinde sayılır, kontrol edilir ve sisteme dahil edilir." },
  { icon: "🏢", title: "Palet Depolama", desc: "Paletli ürünler için kısa ve uzun vadeli depolama. Stok düzeyleri anlık takip edilir." },
  { icon: "📋", title: "Koli Depolama", desc: "Kolili ürünler için güvenli depolama. Ürün bazlı stok yönetimi sağlanır." },
  { icon: "📊", title: "Stok Yönetimi", desc: "Mintsoft WMS ile stok seviyeleri anlık takip edilir. Düşük stok uyarıları yapılabilir." },
  { icon: "🔍", title: "Sipariş Karşılama", desc: "Sipariş geldiğinde ürün toplanır, paketlenir, etiketlenir ve müşteriye gönderilir." },
  { icon: "🚚", title: "UK Dağıtım", desc: "Essex depomuzdaki ürünler tüm İngiltere'ye teslimat koordinasyonu ile sevk edilir." },
];

const whoWeServe = [
  { icon: "🏭", title: "Üreticiler", desc: "Türkiye'de üretip İngiltere'de satmak isteyen üreticiler." },
  { icon: "🛍️", title: "E-Ticaret Markaları", desc: "Shopify, Amazon veya kendi sitesinden UK'e satan markalar." },
  { icon: "📦", title: "Amazon Satıcıları", desc: "Amazon.co.uk üzerinden FBM ile sipariş karşılayan satıcılar." },
  { icon: "🏪", title: "Toptancılar", desc: "UK perakendecilere toplu ürün dağıtımı yapan toptancılar." },
  { icon: "🚢", title: "İthalatçılar", desc: "Türkiye'den İngiltere'ye düzenli ürün ithal eden işletmeler." },
  { icon: "🛒", title: "Shopify Mağazaları", desc: "Shopify mağazasından UK müşterilerine sipariş gönderen satıcılar." },
];

const faqs = [
  {
    q: "İngiltere depo hizmetiniz hangi bölgelere hizmet veriyor?",
    a: "Essex merkezli depomuz İngiltere geneline hizmet vermektedir. Londra başta olmak üzere Birmingham, Manchester ve tüm UK'e dağıtım koordinasyonu sağlıyoruz.",
  },
  {
    q: "Türkiye'den İngiltere depoma ürün gönderebilir miyim?",
    a: "Evet. Türkiye'deki tedarikçinizden veya üretim noktanızdan ürünlerinizi doğrudan depo adresimize gönderebilirsiniz. UK ithalat gümrükleme sürecinde koordinasyon desteği de sağlıyoruz.",
  },
  {
    q: "İngiltere depo fiyatlarınız nedir?",
    a: "Fiyatlar ürün türü, hacim, stok miktarı ve ihtiyaç duyulan hizmetlere göre değişmektedir. WhatsApp üzerinden bizimle iletişime geçin, size özel teklif hazırlayalım.",
  },
  {
    q: "Sadece depolama mı yapıyorsunuz yoksa sipariş karşılama da var mı?",
    a: "Hem depolama hem de tam sipariş karşılama (fulfilment) hizmeti sunuyoruz. Sipariş geldiğinde ürünü depomuzdan toplar, paketler, etiketler ve UK müşterilerinize sevk ederiz.",
  },
  {
    q: "Palet ve koli depolama kabul ediyor musunuz?",
    a: "Evet. Hem paletli hem de kolili ürünler için depolama hizmeti sunuyoruz. Kısa ve uzun dönemli depolama seçenekleri mevcuttur.",
  },
];

export default function IngiltereDepoPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
              🇬🇧 Essex, Londra Yakını • UK Depo Operasyonu
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-balance mb-6">
              İngiltere Depo ve{" "}
              <span className="text-red-400">Depolama Hizmeti</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Ürünlerinizi İngiltere'ye gönderin, depolamasını ve operasyonunu bize bırakın. Mal kabulünden
              stok yönetimine, sipariş karşılamadan UK dağıtımına kadar tam operasyon altyapısı.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg"
              >
                Depo Teklifi Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition"
              >
                📞 Hemen Arayın
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Mal Kabul • Palet Depolama • Stok Yönetimi • Sipariş Karşılama • UK Dağıtım
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">
                İngiltere Depo Hizmetleri
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Depolamadan sipariş karşılamaya, stok yönetiminden UK dağıtımına kadar eksiksiz operasyon altyapısı.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#0b2545] text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="py-20 px-4 bg-[#f6f8fb]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">
                İngiltere Depo Hizmetimizden Kimler Yararlanıyor?
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Türkiye'den İngiltere pazarına girmek isteyen her ölçekteki işletme için hazır depo altyapısı.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whoWeServe.map((w) => (
                <div key={w.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{w.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-2">{w.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value prop */}
        <section className="py-20 px-4 bg-[#0b2545]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-white mb-5">
              İngiltere'de Kendi Deponuzu Kurmadan Satış Yapın
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
              İngiltere'de depo kiralamak, ekip kurmak ve lojistik altyapı oluşturmak büyük bir yatırım gerektirir.
              LondraDepo ile hazır depo altyapısından yararlanın; operasyonu bize bırakın, siz satışa odaklanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Teklif Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition"
              >
                📞 Arayın
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-[#f6f8fb] border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0b2545] mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-10 px-4 bg-[#f6f8fb] border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-500 text-sm mb-4">İlgili Sayfalar</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/depolama", label: "Depolama Hizmeti" },
                { href: "/palet-depolama", label: "Palet Depolama" },
                { href: "/gumrukleme", label: "Gümrükleme Desteği" },
                { href: "/e-ticaret-fulfillment", label: "E-Ticaret Fulfillment" },
                { href: "/essex-depo", label: "Essex Depo" },
                { href: "/ingiltere-depo-fiyatlari", label: "Depo Fiyatları" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#0b2545] border border-slate-300 rounded-full px-4 py-2 hover:bg-white transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
