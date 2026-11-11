import PageFaq from "@/components/PageFaq";
import Emoji from "@/components/visual/Emoji";
import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";
import { bookingUrl } from "@/lib/booking";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";
const PAGE_URL = `${SITE_URL}/iletisim`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İletişim | LondraDepo.com — İngiltere Depo Teklif",
  description:
    "LondraDepo.com ile iletişime geçin. İngiltere depo, fulfillment ve UK lojistik için WhatsApp veya telefon ile hızlı teklif alın. Türkçe destek mevcut.",
  alternates: trAlternates("/iletisim"),
  openGraph: {
    title: "İletişim | LondraDepo",
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
      mainEntity: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+447554195190",
        availableLanguage: ["Turkish", "English"],
        url: WHATSAPP,
      },
    },
  ],
};


const faqs = [
  { q: "LondraDepo'ya en hızlı nasıl ulaşırım?", a: "En hızlı yol WhatsApp: +44 7554 195190. Aynı numarayı arayabilir, ofisi +44 1268 203 283 numarasından arayabilir, teklif formunu doldurabilir veya 15 dakikalık bir görüşme ayarlayabilirsiniz." },
  { q: "Ofis çalışma saatleriniz nedir?", a: "Ofisimiz İngiltere saatiyle 07:45–17:30 arası açıktır. Bu saatler dışında gönderilen mesaj ve teklif talepleri, ofis açıldığında ekibimiz tarafından cevaplanır." },
  { q: "Türkçe destek veriyor musunuz?", a: "Evet. LondraDepo ekibi Türkçe ve İngilizce çalışır; UK operasyonunuzu, belgelerinizi ve stok raporlarınızı Türkçe konuşabilir, UK müşterileriniz ve taşıyıcılarla İngilizce iletişim kurulmasını bize bırakabilirsiniz." },
  { q: "Depoyu ürün göndermeden önce görebilir miyim?", a: "Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY adresindeki depomuzu ziyaret veya görüntülü tur için ekibimizle iletişime geçin. Önce operasyonunuzu konuşmak isterseniz 15 dakikalık görüşme de ayarlayabilirsiniz." },
];

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
                <span className="text-4xl"><Emoji e="💬" /></span>
                <span className="font-bold text-green-700 text-lg">WhatsApp ile Yazın</span>
                <span className="text-green-700 text-sm">+44 7554 195190</span>
                <span className="text-slate-500 text-xs">En hızlı yanıt yöntemi</span>
              </a>

              <a
                href={TEL}
                className="flex flex-col items-center gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-8 hover:bg-blue-100 transition text-center"
              >
                <span className="text-4xl"><Emoji e="📞" /></span>
                <span className="font-bold text-[#0b2545] text-lg">Telefon ile Arayın</span>
                <span className="text-[#0b2545] text-sm">+44 7554 195190</span>
                <span className="text-slate-500 text-xs">Türkçe destek mevcut</span>
              </a>

              <TrackedLink
                kind="booking"
                source="tr_contact_card"
                href={bookingUrl("tr", "tr_contact_card")}
                className="sm:col-span-2 flex flex-col items-center gap-2 bg-white border border-[#e63946]/40 rounded-2xl p-6 hover:bg-red-50 transition text-center"
              >
                <span className="text-3xl"><Emoji e="📅" /></span>
                <span className="font-bold text-[#0b2545] text-lg">15 Dakikalık Görüşme Ayarlayın</span>
                <span className="text-slate-500 text-xs">Size uygun saati seçin, görüntülü görüşme bağlantısı e-postanıza gelsin</span>
              </TrackedLink>
            </div>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 mb-10">
              <h2 className="text-xl font-bold text-[#0b2545] mb-4">Depo Adresi & Operasyon Bölgesi</h2>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <span><Emoji e="📍" /></span>
                  <span>
                    <strong>Depo Adresi:</strong><br />
                    Unit 19 Arterial Park, Arterial Road<br />
                    Rayleigh, Essex SS6 7FY, United Kingdom
                  </span>
                </li>
                <li><Emoji e="🚚" /> <strong>Dağıtım Bölgesi:</strong> Tüm İngiltere (Londra, Birmingham, Manchester, Leeds ve çevresi)</li>
                <li><Emoji e="🌍" /> <strong>Kaynak:</strong> Türkiye ve diğer ülkelerden ihracat</li>
                <li><Emoji e="🗣️" /> <strong>Diller:</strong> Türkçe ve İngilizce</li>
              </ul>
              <a
                href="https://maps.google.com/?q=Unit+19+Arterial+Park+Arterial+Road+Rayleigh+Essex+SS6+7FY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs text-[#0b2545] font-semibold hover:underline"
              >
                Google Maps&apos;te Aç →
              </a>
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
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition"
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
        <PageFaq faqs={faqs} />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
