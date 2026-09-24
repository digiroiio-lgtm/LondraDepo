import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20İngiltere%20e-ticaret%20lojistiği%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "İngiltere E-Ticaret Lojistiği | Sipariş Karşılama UK | LondraDepo.com",
  description:
    "İngiltere e-ticaret lojistiği ve sipariş karşılama hizmeti. Shopify, Amazon ve online mağazanızdan gelen UK siparişleri için depolama, pick & pack ve İngiltere teslimat.",
  keywords: [
    "ingiltere e ticaret lojistigi",
    "ingiltere sipariş karşılama",
    "ingiltere fulfillment",
    "uk e-ticaret lojistik",
    "ingiltere online satış lojistik",
    "uk sipariş karşılama",
    "ingiltere depo fulfillment",
    "ingiltere e ticaret depo",
    "londra e ticaret fulfillment",
    "shopify ingiltere fulfillment",
    "amazon ingiltere fulfillment",
    "uk lojistik hizmeti",
  ],
  alternates: { canonical: `${SITE_URL}/ingiltere-e-ticaret-lojistigi` },
  openGraph: {
    title: "İngiltere E-Ticaret Lojistiği | LondraDepo.com",
    description: "UK e-ticaret lojistiği ve sipariş karşılama. Shopify, Amazon ve online mağaza entegrasyonu.",
    url: `${SITE_URL}/ingiltere-e-ticaret-lojistigi`,
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
        { "@type": "ListItem", position: 2, name: "İngiltere E-Ticaret Lojistiği", item: `${SITE_URL}/ingiltere-e-ticaret-lojistigi` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere E-Ticaret Lojistiği ve Sipariş Karşılama",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Ecommerce Logistics",
      description:
        "İngiltere e-ticaret lojistiği: depolama, sipariş karşılama (fulfillment), pick & pack, kargo ve UK teslimat. Shopify ve Amazon satıcıları için.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/ingiltere-e-ticaret-lojistigi`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere e-ticaret lojistiği nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İngiltere e-ticaret lojistiği; online mağazanızdan gelen siparişlerin UK'deki bir depodan toplanması, paketlenmesi ve müşteriye teslim edilmesi sürecinin tamamıdır. LondraDepo bu süreci Essex depomuzdan yönetir.",
          },
        },
        {
          "@type": "Question",
          name: "Sipariş karşılama (fulfillment) ile lojistik arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lojistik, ürünlerin taşınması ve depolanmasını kapsar. Sipariş karşılama (fulfillment) ise müşteri siparişinin alınmasından teslimata kadar tüm süreci: stok yönetimi, pick & pack, kargo etiketleme ve sevkiyatı içerir.",
          },
        },
        {
          "@type": "Question",
          name: "Shopify ve Amazon siparişlerini karşılayabilir misiniz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Shopify mağazanızdan ve Amazon FBM (Satıcı Tarafından Karşılama) siparişlerinizi Essex depomuzdan karşılıyoruz. Sipariş geldiğinde depo ekibi ürünü toplar, paketler ve sevk eder.",
          },
        },
        {
          "@type": "Question",
          name: "Stokum İngiltere'de nasıl yönetilir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stoklar Mintsoft WMS (depo yönetim sistemi) üzerinden takip edilir. Stok seviyeleri anlık olarak izlenir, mal girişi ve çıkışları sisteme yansıtılır.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere'de e-ticaret lojistik hizmeti almak için ne yapmalıyım?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp veya telefon üzerinden bizimle iletişime geçin. Ürün türü, tahmini stok miktarı, aylık sipariş hacmi ve satış kanallarınız hakkında bilgi vererek fiyat teklifi alabilirsiniz.",
          },
        },
      ],
    },
  ],
};

const workflow = [
  { num: "01", label: "Sipariş Gelir", desc: "Online mağazanızdan (Shopify, Amazon vb.) sipariş alınır." },
  { num: "02", label: "WMS'e Girer", desc: "Sipariş depo yönetim sistemine (Mintsoft) aktarılır." },
  { num: "03", label: "Stoktan Toplanır", desc: "Depo ekibi siparişteki ürünleri stoktan toplar (Pick)." },
  { num: "04", label: "Paketlenir", desc: "Ürün sevkiyata uygun şekilde paketlenir (Pack)." },
  { num: "05", label: "Etiketlenir", desc: "Kargo etiketi oluşturulur ve kutuya yapıştırılır." },
  { num: "06", label: "Sevk Edilir", desc: "Sipariş müşteriye teslim edilmek üzere kargoya verilir." },
];

const services = [
  { icon: "🏭", title: "Ürün Depolama", desc: "UK'deki depomuzda stok tutun, İngiltere'den satış yapın." },
  { icon: "📊", title: "Stok Yönetimi", desc: "Mintsoft WMS ile anlık stok takibi ve raporlama." },
  { icon: "🔍", title: "Pick & Pack", desc: "Siparişe göre ürün toplama ve paketleme operasyonu." },
  { icon: "🏷️", title: "Kargo Etiketleme", desc: "Sevkiyat etiketlerinin oluşturulması ve yapıştırılması." },
  { icon: "🚚", title: "UK Teslimat", desc: "İngiltere'nin her yerine teslimat koordinasyonu." },
  { icon: "↩️", title: "İade Yönetimi", desc: "Müşteri iadelerinin kabulü ve işlenmesi." },
];

const channels = [
  {
    icon: "🛍️",
    title: "Shopify",
    desc: "Shopify mağazanızdan gelen UK siparişlerini karşılıyoruz.",
    note: "LondraDepo, Shopify'ın resmi partneri değildir.",
    link: "/shopify-ingiltere-depo",
    linkLabel: "Shopify Depo →",
  },
  {
    icon: "📦",
    title: "Amazon FBM",
    desc: "Amazon FBM siparişlerinizi Essex depomuzdan karşılıyoruz.",
    note: "LondraDepo, Amazon'un resmi partneri değildir.",
    link: "/amazon-ingiltere-depo",
    linkLabel: "Amazon Depo →",
  },
  {
    icon: "🌐",
    title: "Diğer Online Kanallar",
    desc: "Kendi web siteniz veya diğer e-ticaret platformlarından gelen siparişler.",
    note: null,
    link: "/e-ticaret-fulfillment",
    linkLabel: "E-Ticaret Fulfillment →",
  },
];

const faqs = [
  {
    q: "İngiltere e-ticaret lojistiği nedir?",
    a: "İngiltere e-ticaret lojistiği; online mağazanızdan gelen siparişlerin UK'deki bir depodan toplanması, paketlenmesi ve müşteriye teslim edilmesi sürecinin tamamıdır. LondraDepo bu süreci Essex depomuzdan yönetir.",
  },
  {
    q: "Sipariş karşılama (fulfillment) ile lojistik arasındaki fark nedir?",
    a: "Lojistik, ürünlerin taşınması ve depolanmasını kapsar. Sipariş karşılama (fulfillment) ise müşteri siparişinin alınmasından teslimata kadar tüm süreci: stok yönetimi, pick & pack, kargo etiketleme ve sevkiyatı içerir.",
  },
  {
    q: "Shopify ve Amazon siparişlerini karşılayabilir misiniz?",
    a: "Evet. Shopify mağazanızdan ve Amazon FBM siparişlerinizi Essex depomuzdan karşılıyoruz. Sipariş geldiğinde depo ekibi ürünü toplar, paketler ve sevk eder.",
  },
  {
    q: "Stokum İngiltere'de nasıl yönetilir?",
    a: "Stoklar Mintsoft WMS (depo yönetim sistemi) üzerinden takip edilir. Stok seviyeleri anlık olarak izlenir, mal girişi ve çıkışları sisteme yansıtılır.",
  },
  {
    q: "İngiltere'de e-ticaret lojistik hizmeti almak için ne yapmalıyım?",
    a: "WhatsApp veya telefon üzerinden bizimle iletişime geçin. Ürün türü, tahmini stok miktarı, aylık sipariş hacmi ve satış kanallarınız hakkında bilgi vererek fiyat teklifi alabilirsiniz.",
  },
];

export default function IngiltereETicaretLojistigi() {
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
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-white">İngiltere E-Ticaret Lojistiği</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              İngiltere{" "}
              <span className="text-[#e63946]">E-Ticaret Lojistiği</span>{" "}
              ve Sipariş Karşılama
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Online mağazanızdan gelen UK siparişleri için eksiksiz lojistik çözümü.
              Ürün depolama, sipariş karşılama (fulfillment), pick & pack ve
              İngiltere geneli teslimat — tek operasyon ortağından.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Essex depomuzdan Shopify, Amazon FBM ve tüm online satış kanalları için hizmet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Lojistik Teklifi Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Sipariş Geldiğinde Ne Olur?
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              Siparişten teslimatına — her adım depomuzda yönetilir.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {workflow.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-sm mb-2">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-sm mb-1">{step.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              E-Ticaret Lojistiği Kapsamı
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              Hangi Satış Kanallarını Destekliyoruz?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {channels.map((ch) => (
                <div key={ch.title} className="bg-white border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{ch.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{ch.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">{ch.desc}</p>
                  {ch.note && (
                    <p className="text-slate-400 text-xs mb-3">{ch.note}</p>
                  )}
                  <Link href={ch.link} className="text-[#e63946] text-sm font-semibold hover:underline">
                    {ch.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA dark */}
        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              İngiltere'de Kendi Deponuzu Kurmadan Satış Yapın
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              UK lojistik altyapımızı kullanın. Depo, personel, WMS — hepsi bizde.
              Siz satışa odaklanın.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              E-Ticaret Lojistik Teklifi Al
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0b2545] mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-[#0b2545] mb-4">İlgili Sayfalar</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/e-ticaret-fulfillment", label: "E-Ticaret Fulfillment" },
                { href: "/shopify-fulfillment", label: "Shopify Fulfillment" },
                { href: "/amazon-fulfillment", label: "Amazon Fulfillment" },
                { href: "/siparis-toplama-paketleme", label: "Sipariş Toplama & Paketleme" },
                { href: "/ingiltere-depo-fiyatlari", label: "Depo Fiyatları" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-[#0b2545] hover:border-[#0b2545] transition"
                >
                  {link.label}
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
