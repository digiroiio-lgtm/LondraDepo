import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import CtaCards from "@/components/CtaCards";

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

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Fulfillment"
              categoryColor="text-blue-700 bg-blue-50"
              title="İngiltere Fulfillment Nedir? Nasıl Çalışır?"
              readTime="5 dakika"
              date="2025"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              E-ticaret ile İngiltere&apos;ye satış yapıyorsanız, &quot;fulfillment&quot; kavramı
              operasyonunuzun merkezindedir. Bu rehberde UK fulfillment hizmetinin ne
              anlama geldiğini, nasıl çalıştığını ve neden önemli olduğunu açıklıyoruz.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>Fulfillment Nedir?</h2>
              <p>
                Fulfillment, bir e-ticaret siparişinin alınmasından müşteriye teslim
                edilmesine kadar olan tüm operasyonel süreci kapsar. Bu süreç şu
                adımlardan oluşur: sipariş alımı, ürünün depodan toplanması (picking),
                paketlenmesi (packing) ve müşteriye sevk edilmesi (shipping).
              </p>

              <blockquote>
                Fulfillment, müşteri deneyiminin görünmez kahramanıdır — doğru
                çalıştığında kimse fark etmez, yanlış çalıştığında herkes konuşur.
              </blockquote>

              <h2>3PL Fulfillment Nedir?</h2>
              <p>
                3PL (Third-Party Logistics), lojistik süreçlerinizi kendi deponuzu
                kurmak yerine üçüncü taraf bir hizmet sağlayıcıya devretmeniz
                anlamına gelir. İngiltere&apos;de 3PL fulfillment, özellikle henüz
                UK&apos;da kendi deposu bulunmayan Türk ihracatçılar için kritik
                bir çözümdür.
              </p>

              <h2>UK Fulfillment&apos;ın Avantajları</h2>
              <ul>
                <li><strong>Hızlı teslimat:</strong> İngiltere&apos;de stok tutmak, müşterilere 1-2 gün içinde teslimat imkânı sağlar.</li>
                <li><strong>Düşük operasyon maliyeti:</strong> Kendi deponuzu kiralamak yerine kullandıkça ödeme modeli.</li>
                <li><strong>Ölçeklenebilirlik:</strong> Sipariş hacminize göre kapasite esnek şekilde ayarlanır.</li>
                <li><strong>Amazon Prime uyumu:</strong> FBA dışında FBM ile Prime badge kazanma imkânı.</li>
                <li><strong>İade yönetimi:</strong> UK müşterilerinin iadeleri yerel olarak karşılanır.</li>
              </ul>

              <h2>Amazon FBA ve 3PL Fulfillment Farkı</h2>
              <p>
                Amazon FBA&apos;de ürünlerinizi Amazon deposuna gönderirsiniz, Amazon
                sipariş yönetimini üstlenir. 3PL fulfillment&apos;ta ise bağımsız bir
                depo operatörü bu işi yapar; bu size fiyat esnekliği ve Amazon
                dışı kanallar için kontrol imkânı verir.
              </p>

              <h2>Hangi Ürün Kategorileri Fulfillment&apos;a Uygundur?</h2>
              <ul>
                <li>Giyim ve tekstil</li>
                <li>Ev &amp; dekorasyon ürünleri</li>
                <li>Kişisel bakım ve kozmetik</li>
                <li>Elektronik aksesuarlar</li>
                <li>Gıda dışı tüketim ürünleri</li>
              </ul>

              <h2>Sık Sorulan Sorular</h2>

              <h3>İngiltere fulfillment hizmeti nedir?</h3>
              <p>
                Fulfillment, müşteri siparişlerinin depodan toplanması, paketlenmesi
                ve gönderilmesi sürecidir. UK depomuzdaki ürünlerinizi stoklar,
                siparişleri hazırlayarak müşterilerinize gönderiyoruz.
              </p>

              <h3>Amazon FBA için UK fulfillment desteği veriyor musunuz?</h3>
              <p>
                Evet. Amazon prep hizmetimiz kapsamında ürünlerinizi FBA uyumlu hale
                getiriyor, etiketliyor ve Amazon deposuna sevk ediyoruz.
              </p>

              <h3>Shopify ve Etsy siparişlerini de karşılıyor musunuz?</h3>
              <p>
                Evet. Shopify, Etsy ve diğer e-ticaret platformlarından gelen
                siparişleri operasyon sürecimize dahil ediyoruz.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">UK fulfillment operasyonunuz için teklif alın</p>
              <p className="text-slate-300 text-sm mb-6">
                Platformunuzu ve sipariş hacminizi belirtin, size uygun plan sunalım.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-3.5 rounded-full transition"
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
