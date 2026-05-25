import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/amazon-prep-uk`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Amazon%20Prep%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Amazon Prep UK | İngiltere Amazon FBA Hazırlık | LondraDepo.com",
  description:
    "İngiltere'de Amazon FBA prep hizmeti. Ürün etiketleme, paketleme, FBA uyumluluk ve Amazon UK deposuna sevk. Türk ihracatçıları için UK Amazon prep partneri.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Amazon Prep UK | LondraDepo.com",
    description: "UK'da Amazon FBA prep, etiketleme ve sevk hizmeti. Türk ihracatçıları için İngiltere Amazon prep operasyonu.",
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
        { "@type": "ListItem", position: 2, name: "Amazon Prep UK", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Amazon Prep UK",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Amazon FBA Preparation",
      description: "Amazon UK FBA uyumlu ürün hazırlama, etiketleme ve sevk hizmeti. İngiltere'de Amazon prep partneri.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Amazon FBA prep hizmeti nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amazon FBA prep, ürünlerinizin Amazon UK deposuna kabul edilmesi için gerekli etiketleme, paketleme ve hazırlık süreçlerini kapsar.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon UK deposuna ürün göndermek ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürünleriniz Essex depomuzda prep tamamlandıktan sonra genellikle 2-5 iş günü içinde Amazon deposuna ulaşır.",
          },
        },
        {
          "@type": "Question",
          name: "Hangi Amazon marketplace'lere hizmet veriyorsunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Öncelikli olarak Amazon UK (amazon.co.uk) için prep ve sevk hizmeti veriyoruz. Amazon EU marketplace'leri için de destek sağlıyoruz.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Amazon FBA prep hizmeti nedir?",
    a: "Amazon FBA prep, ürünlerinizin Amazon UK deposuna kabul edilmesi için gerekli etiketleme, paketleme ve hazırlık süreçlerini kapsar.",
  },
  {
    q: "Amazon UK deposuna ürün göndermek ne kadar sürer?",
    a: "Ürünleriniz Essex depomuzda prep tamamlandıktan sonra genellikle 2-5 iş günü içinde Amazon deposuna ulaşır.",
  },
  {
    q: "Hangi Amazon marketplace'lere hizmet veriyorsunuz?",
    a: "Öncelikli olarak Amazon UK (amazon.co.uk) için prep ve sevk hizmeti veriyoruz. Amazon EU marketplace'leri için de destek sağlıyoruz.",
  },
  {
    q: "FNSKU etiketleme yapıyor musunuz?",
    a: "Evet. Amazon'un gerektirdiği FNSKU ve barkod etiketleme işlemleri servis kapsamımızdadır.",
  },
];

export default function AmazonPrepPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Amazon Prep UK</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
              Amazon Prep UK — İngiltere Amazon FBA Hazırlık Hizmeti
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Türkiye'den İngiltere'ye gelen ürünlerinizi Amazon UK deposuna uyumlu hale getiriyoruz. FNSKU etiketleme, paketleme, uyum kontrolü ve Amazon deposuna sevk işlemlerini Essex operasyonumuzdan yönetiyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "FNSKU Etiketleme", desc: "Amazon'un gerektirdiği FNSKU ve barkod etiketlerini uyguluyoruz." },
                { title: "FBA Uyumluluk Kontrolü", desc: "Ürünlerinizin Amazon FBA gereksinimlerini karşılaması sağlanır." },
                { title: "Paketleme & Hazırlık", desc: "Ürünler Amazon'un ambalaj ve kutu kurallarına göre hazırlanır." },
                { title: "Shipment Plan Oluşturma", desc: "Amazon Seller Central üzerinden shipment planları oluşturulur." },
                { title: "Amazon Deposuna Sevk", desc: "Hazır ürünler belirlenen Amazon UK deposuna teslim edilir." },
                { title: "Takip ve Raporlama", desc: "Sevk sonrası Amazon deposuna kabul süreci takip edilir." },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                  <h2 className="font-bold text-[#0b2545] mb-2">{item.title}</h2>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 mb-12 text-center">
              <p className="text-[#0b2545] font-semibold text-lg mb-4">
                Amazon prep sürecinizi başlatmak için yazın
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                WhatsApp ile Bilgi Alın
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
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/essex-depo" className="text-sm text-[#0b2545] hover:underline">→ Essex Depo</Link>
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
