import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/iletisim`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İletişim | LondraDepo.com — İngiltere Depo Teklif",
  description:
    "LondraDepo.com ile iletişime geçin. İngiltere depo, fulfillment ve UK lojistik için WhatsApp veya telefon ile hızlı teklif alın. Türkçe destek mevcut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İletişim | LondraDepo.com",
    description: "İngiltere depo ve fulfillment için WhatsApp ile hızlı teklif alın. Türkçe destek.",
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
        { "@type": "ListItem", position: 2, name: "İletişim", item: PAGE_URL },
      ],
    },
    {
      "@type": "ContactPage",
      name: "LondraDepo.com İletişim",
      url: PAGE_URL,
      mainEntity: {
        "@type": "Organization",
        name: "LondraDepo.com",
        url: SITE_URL,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Turkish", "English"],
            url: WHATSAPP,
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Essex",
          addressCountry: "GB",
        },
      },
    },
  ],
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">İletişim</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
              İletişim
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              İngiltere depo, fulfillment veya UK lojistik hizmetlerimiz hakkında bilgi almak için WhatsApp veya telefon aracılığıyla doğrudan ulaşabilirsiniz. Türkçe destek veriyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-8 hover:bg-green-100 transition text-center"
              >
                <span className="text-4xl">💬</span>
                <span className="font-bold text-green-700 text-lg">WhatsApp ile Yazın</span>
                <span className="text-green-600 text-sm">+44 7554 195190</span>
                <span className="text-slate-500 text-xs">En hızlı yanıt yöntemi</span>
              </a>

              <a
                href={TEL}
                className="flex flex-col items-center gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-8 hover:bg-blue-100 transition text-center"
              >
                <span className="text-4xl">📞</span>
                <span className="font-bold text-[#0b2545] text-lg">Telefon ile Arayın</span>
                <span className="text-[#0b2545] text-sm">+44 7554 195190</span>
                <span className="text-slate-500 text-xs">Türkçe destek mevcut</span>
              </a>
            </div>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 mb-10">
              <h2 className="text-xl font-bold text-[#0b2545] mb-4">Operasyon Bölgesi</h2>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>📍 <strong>Merkez:</strong> Essex, İngiltere</li>
                <li>🚚 <strong>Dağıtım Bölgesi:</strong> Tüm İngiltere (Londra, Birmingham, Manchester, Leeds ve çevresi)</li>
                <li>🌍 <strong>Kaynak:</strong> Türkiye ve diğer ülkelerden ihracat</li>
                <li>🗣️ <strong>Diller:</strong> Türkçe ve İngilizce</li>
              </ul>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-3">Hızlı teklif için şimdi yazın</h2>
              <p className="text-slate-300 text-sm mb-6">
                Depo ihtiyacınızı, ürün türünüzü ve hacminizi belirtin — size özel fiyat sunalım.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                WhatsApp&apos;tan Teklif Al
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
