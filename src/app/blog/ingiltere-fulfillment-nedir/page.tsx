import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/blog/ingiltere-fulfillment-nedir`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20fulfillment%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Fulfillment Nedir? Nasıl Çalışır? | LondraDepo.com",
  description:
    "UK fulfillment hizmetinin ne olduğunu, nasıl çalıştığını, Amazon ve e-ticaret satıcıları için neden önemli olduğunu anlatan kapsamlı rehber.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Fulfillment Nedir? | LondraDepo.com",
    description: "UK fulfillment hizmeti nedir, nasıl çalışır ve e-ticaret satıcıları için neden kritik?",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
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
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "İngiltere Fulfillment Nedir?", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "İngiltere Fulfillment Nedir? Nasıl Çalışır?",
      description: "UK fulfillment hizmeti rehberi — e-ticaret satıcıları için sipariş hazırlama ve sevk süreçleri.",
      url: PAGE_URL,
      publisher: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      inLanguage: "tr-TR",
    },
  ],
};

export default function FulfillmentNedirPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0b2545] transition">Blog</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">İngiltere Fulfillment Nedir?</span>
          </div>
        </nav>

        <article className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Fulfillment</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mt-4 mb-4">
              İngiltere Fulfillment Nedir? Nasıl Çalışır?
            </h1>
            <p className="text-slate-500 text-sm mb-8">⏱ 5 dakika okuma · LondraDepo.com</p>

            <div className="prose max-w-none text-slate-700 space-y-6">
              <p className="text-lg leading-relaxed">
                E-ticaret ile İngiltere'ye satış yapıyorsanız, "fulfillment" kavramı operasyonunuzun merkezindedir. Bu rehberde UK fulfillment hizmetinin ne anlama geldiğini, nasıl çalıştığını ve neden önemli olduğunu açıklıyoruz.
              </p>

              <h2 className="text-2xl font-extrabold text-[#0b2545] mt-8">Fulfillment Nedir?</h2>
              <p>
                Fulfillment, bir e-ticaret siparişinin alınmasından müşteriye teslim edilmesine kadar olan tüm operasyonel süreci kapsar. Bu süreç şu adımlardan oluşur: sipariş alımı, ürünün depodan toplanması (picking), paketlenmesi (packing) ve müşteriye sevk edilmesi (shipping).
              </p>

              <h2 className="text-2xl font-extrabold text-[#0b2545] mt-8">3PL Fulfillment Nedir?</h2>
              <p>
                3PL (Third-Party Logistics), lojistik süreçlerinizi kendi deponuzu kurmak yerine üçüncü taraf bir hizmet sağlayıcıya devretmeniz anlamına gelir. İngiltere'de 3PL fulfillment, özellikle henüz UK'da kendi deposu bulunmayan Türk ihracatçılar için kritik bir çözümdür.
              </p>

              <h2 className="text-2xl font-extrabold text-[#0b2545] mt-8">UK Fulfillment&apos;ın Avantajları</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Hızlı teslimat:</strong> İngiltere&apos;de stok tutmak, müşterilere 1-2 gün içinde teslimat imkânı sağlar.</li>
                <li><strong>Düşük operasyon maliyeti:</strong> Kendi deponuzu kiralamak yerine kullandıkça ödeme modeli.</li>
                <li><strong>Ölçeklenebilirlik:</strong> Sipariş hacminize göre kapasite esnek şekilde ayarlanır.</li>
                <li><strong>Amazon Prime uyumu:</strong> FBA dışında FBM ile Prime badge kazanma imkânı.</li>
                <li><strong>İade yönetimi:</strong> UK müşterilerinin iadeleri yerel olarak karşılanır.</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-[#0b2545] mt-8">Amazon FBA ve 3PL Fulfillment Farkı</h2>
              <p>
                Amazon FBA'de ürünlerinizi Amazon deposuna gönderirsiniz, Amazon sipariş yönetimini üstlenir. 3PL fulfillment'ta ise bağımsız bir depo operatörü bu işi yapaz; bu size fiyat esnekliği ve Amazon dışı kanallar için kontrol imkânı verir.
              </p>

              <h2 className="text-2xl font-extrabold text-[#0b2545] mt-8">Hangi Ürün Kategorileri Fulfillment&apos;a Uygundur?</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Giyim ve tekstil</li>
                <li>Ev & dekorasyon ürünleri</li>
                <li>Kişisel bakım ve kozmetik</li>
                <li>Elektronik aksesuarlar</li>
                <li>Gıda dışı tüketim ürünleri</li>
              </ul>
            </div>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 my-10 text-center">
              <p className="text-[#0b2545] font-semibold text-lg mb-4">
                UK fulfillment operasyonunuz için teklif alın
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

            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili içerikler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/ingiltere-depo-rehberi" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Depo Rehberi</Link>
                <Link href="/blog/amazon-prep-uk-rehberi" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK Rehberi</Link>
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ Fulfillment Hizmetimiz</Link>
              </div>
            </div>
          </div>
        </article>

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
