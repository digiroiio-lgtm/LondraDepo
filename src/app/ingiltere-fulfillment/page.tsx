import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/ingiltere-fulfillment`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20fulfillment%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Fulfillment Hizmeti | UK Sipariş Hazırlama | LondraDepo.com",
  description:
    "Türkiye'den İngiltere'ye ihracat yapan markalar için UK fulfillment hizmeti. Sipariş toplama, paketleme, Amazon, Etsy ve Shopify entegrasyonu. Essex merkezli operasyon.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Fulfillment Hizmeti | LondraDepo.com",
    description:
      "Amazon, Etsy ve Shopify satıcıları için İngiltere fulfillment ve sipariş hazırlama. Essex merkezli UK operasyon.",
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
        { "@type": "ListItem", position: 2, name: "İngiltere Fulfillment", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Fulfillment Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Fulfillment",
      description:
        "Sipariş toplama, paketleme ve sevk süreçlerinizi UK'dan yönetin. Amazon, Etsy ve Shopify uyumlu fulfillment operasyonu.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere fulfillment hizmeti nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fulfillment, müşteri siparişlerinin depodan toplanması, paketlenmesi ve gönderilmesi sürecidir. İngiltere'deki depomuzdaürünlerinizi stoklar, siparişleri hazırlayarak müşterilerinize gönderiyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon FBA için UK fulfillment desteği veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Amazon prep hizmetimiz kapsamında ürünlerinizi FBA uyumlu hale getiriyor, etiketliyor ve Amazon deposuna sevk ediyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Shopify ve Etsy siparişlerini de karşılıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Shopify, Etsy ve diğer e-ticaret platformlarından gelen siparişleri operasyon sürecimize dahil ediyoruz.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "İngiltere fulfillment hizmeti nedir?",
    a: "Fulfillment, müşteri siparişlerinin depodan toplanması, paketlenmesi ve gönderilmesi sürecidir. UK depomuzdaki ürünlerinizi stoklar, siparişleri hazırlayarak müşterilerinize gönderiyoruz.",
  },
  {
    q: "Amazon FBA için UK fulfillment desteği veriyor musunuz?",
    a: "Evet. Amazon prep hizmetimiz kapsamında ürünlerinizi FBA uyumlu hale getiriyor, etiketliyor ve Amazon deposuna sevk ediyoruz.",
  },
  {
    q: "Shopify ve Etsy siparişlerini de karşılıyor musunuz?",
    a: "Evet. Shopify, Etsy ve diğer e-ticaret platformlarından gelen siparişleri operasyon sürecimize dahil ediyoruz.",
  },
  {
    q: "Fulfillment için minimum stok miktarı var mı?",
    a: "Sabit bir minimum stok zorunluluğumuz bulunmamaktadır. İhtiyaçlarınıza göre esnek çözümler sunuyoruz.",
  },
];

export default function FulfillmentPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">İngiltere Fulfillment</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
              İngiltere Fulfillment Hizmeti
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Türkiye'den İngiltere'ye gelen ürünlerinizin sipariş bazında hazırlanması, paketlenmesi ve müşterilerinize ulaştırılması süreçlerini Essex merkezli UK operasyonumuzdan yönetiyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Sipariş Toplama (Picking)", desc: "Gelen her sipariş depo raflarından doğru şekilde toplanır." },
                { title: "Paketleme (Packing)", desc: "Ürünler marka standartlarınıza uygun şekilde paketlenir." },
                { title: "Amazon FBA Prep", desc: "FBA uyumlu etiketleme, hazırlık ve Amazon deposuna sevk." },
                { title: "Shopify & Etsy Entegrasyonu", desc: "E-ticaret platformlarınızdan gelen siparişler otomatik işlenir." },
                { title: "İade Yönetimi", desc: "UK'dan gelen iadeler alınır, kontrol edilir ve raporlanır." },
                { title: "Stok Takibi", desc: "Depo stok seviyeleri düzenli raporlanır ve uyarılar verilir." },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                  <h2 className="font-bold text-[#0b2545] mb-2">{item.title}</h2>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 mb-12 text-center">
              <p className="text-[#0b2545] font-semibold text-lg mb-4">
                Fulfillment operasyonunuz için hemen teklif alın
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

            <section>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#0b2545] mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
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
