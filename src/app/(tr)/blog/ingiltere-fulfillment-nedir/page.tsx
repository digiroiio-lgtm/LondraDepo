import FaqJsonLd from "@/components/FaqJsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import ArticleSources from "@/components/ArticleSources";
import { TR_ARTICLES } from "@/content/tr-articles";
import CtaCards from "@/components/CtaCards";
import AuthorBox from "@/components/AuthorBox";
import RelatedArticles from "@/components/RelatedArticles";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";
const ARTICLE = TR_ARTICLES["/blog/ingiltere-fulfillment-nedir"];
const PAGE_URL = `${SITE_URL}/blog/ingiltere-fulfillment-nedir`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20fulfillment%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Fulfillment Nedir? Nasıl Çalışır? | LondraDepo",
  description:
    "UK fulfillment hizmetinin ne olduğunu, nasıl çalıştığını, Amazon ve e-ticaret satıcıları için neden önemli olduğunu anlatan kapsamlı rehber.",
  alternates: trAlternates("/blog/ingiltere-fulfillment-nedir"),
  openGraph: {
    title: "İngiltere Fulfillment Nedir? | LondraDepo",
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
      headline: ARTICLE.headline,
      description: "UK fulfillment hizmeti rehberi — e-ticaret satıcıları için sipariş hazırlama ve sevk süreçleri.",
      url: PAGE_URL,
      datePublished: ARTICLE.published,
      dateModified: ARTICLE.modified,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      author: { "@type": "Person", name: "Sertaç Yılmaz", jobTitle: "Arca Trade Group Kurucu Ortağı", url: `${SITE_URL}/hakkimizda` },
      contributor: { "@type": "Person", name: "Yusuf Barış", jobTitle: "Operasyon Müdürü" },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      image: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg`, width: 640, height: 160 },
      inLanguage: "tr-TR",
    },
  ],
};

const relatedArticles = [
  { href: "/blog/ingiltere-depo-rehberi", title: "İngiltere Depo Hizmeti: Kapsamlı Rehber", category: "Depolama", readTime: "6 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/amazon-fba-vs-uk-fulfillment", title: "Amazon FBA mı, UK Fulfillment mı?", category: "Fulfillment", readTime: "8 dk", categoryColor: "bg-blue-50 text-blue-700" },
  { href: "/blog/ingiltere-depo-fiyatlari-2026", title: "İngiltere Depo Fiyatları 2026", category: "Depolama", readTime: "7 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/amazon-prep-uk-rehberi", title: "Amazon Prep UK Rehberi", category: "Amazon", readTime: "7 dk", categoryColor: "bg-amber-50 text-amber-700" },
];


const faqs = [
  { q: "Fulfillment nedir, basitçe nasıl çalışır?", a: "Fulfillment, bir siparişin alınmasından müşteriye teslimine kadar olan depo sürecidir: stok tutulur, sipariş gelince ürün raftan toplanır, paketlenir, etiketlenir ve kargoya verilir; iadeler de geri alınıp kontrol edilir." },
  { q: "Fulfillment ile depolama arasındaki fark nedir?", a: "Depolama stoğun teslim alınıp saklanmasıdır. Fulfillment buna müşteri sipariş verdiğinde olanları ekler: toplama, paketleme, etiketleme, sevk ve iade. LondraDepo ikisini de aynı Essex deposundan yapar." },
  { q: "3PL fulfillment kimler için uygun?", a: "3PL fulfillment, İngiltere'de kendi deposu olmayan ve siparişlerini UK'den göndermek isteyen markalar için uygundur; özellikle Türk ihracatçılar kendi depo ve personel yatırımı yapmadan UK müşterilerine yurt içi teslimat sunabilir." },
  { q: "Amazon ve Shopify siparişleri aynı depodan karşılanabilir mi?", a: "Evet. Aynı UK stoğu Shopify ve diğer online mağaza siparişlerine, Amazon FBM siparişlerine ve Amazon FBA'ya gidecek hazırlanmış partilere hizmet verebilir; her kanal için ayrı stok gerekmez." },
  { q: "İngiltere'de fulfillment maliyeti nasıl oluşur?", a: "Maliyet depolama, mal kabul, sipariş başına pick & pack, ambalaj, kargo ve iade kalemlerinden oluşur. LondraDepo'da depolama haftalık palet başına £3,50 + KDV'den başlar; diğer kalemler sipariş yapınıza göre tekliflendirilir." },
];

export default function FulfillmentNedirPage() {
  return (
    <>
      <Header />
      <main>
        <FaqJsonLd faqs={faqs} />
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
              path="/blog/ingiltere-fulfillment-nedir"
              category="Fulfillment"
              categoryColor="text-blue-700 bg-blue-50"
              title="İngiltere Fulfillment Nedir? Nasıl Çalışır?"
              readTime="5 dakika"
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

              <ArticleSources path="/blog/ingiltere-fulfillment-nedir" />

              <h2>Sık Sorulan Sorular</h2>
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">UK fulfillment operasyonunuz için teklif alın</p>
              <p className="text-slate-300 text-sm mb-6">
                Platformunuzu ve sipariş hacminizi belirtin, size uygun plan sunalım.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3.5 rounded-full transition"
                >
                  WhatsApp&apos;tan hızlı bilgi alın
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition"
                >
                  Operasyon danışmanı ile görüşün
                </Link>
              </div>
            </div>

            <AuthorBox path="/blog/ingiltere-fulfillment-nedir" />

            <RelatedArticles articles={relatedArticles} />

            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
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
