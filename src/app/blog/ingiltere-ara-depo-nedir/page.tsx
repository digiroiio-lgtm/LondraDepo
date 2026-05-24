import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import CtaCards from "@/components/CtaCards";
import AuthorBox from "@/components/AuthorBox";
import RelatedArticles from "@/components/RelatedArticles";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/blog/ingiltere-ara-depo-nedir`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20ara%20depo%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Ara Depo Nedir? | UK Transit Depolama Rehberi | LondraDepo.com",
  description:
    "İngiltere ara depo nedir, kimler için uygundur, normal depodan farkı nedir? UK transit depolama ve geçici depo çözümleri rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Ara Depo Nedir? | LondraDepo.com",
    description: "UK ara depo ve transit depolama hizmetinin ne olduğu, nasıl çalıştığı ve hangi firmalar için uygun olduğu.",
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
        { "@type": "ListItem", position: 3, name: "İngiltere Ara Depo Nedir?", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "İngiltere Ara Depo Nedir? Kimler İçin Uygundur?",
      description: "UK ara depo ve transit depolama hizmetinin ne olduğu ve hangi firmalar için uygun olduğu.",
      url: PAGE_URL,
      author: { "@type": "Person", name: "Sertaç Y." },
      publisher: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      dateModified: "2026-01-01",
      inLanguage: "tr-TR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere ara depo ile normal depo arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ara depo, ürünlerin kısa süreli (geçici) olarak stoklandığı ve buradan başka bir noktaya sevk edildiği transit depolama çözümüdür. Normal depoda ise ürünler uzun süreli tutulur ve sipariş bazlı dağıtım yapılır.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere ara depo hizmeti hangi firmalar için uygundur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türkiye'den konteynerle toplu ürün gönderip bunları İngiltere içinde farklı noktalara dağıtmak isteyen firmalar, sezonluk stok yönetimi yapanlar ve UK ithalat sürecinde ürünlerini geçici olarak depolamak isteyenler için uygundur.",
          },
        },
      ],
    },
  ],
};

const relatedArticles = [
  { href: "/blog/ingiltere-depo-rehberi", title: "İngiltere Depo Hizmeti: Kapsamlı Rehber", category: "Depolama", readTime: "6 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-depo-fiyatlari-2026", title: "İngiltere Depo Fiyatları 2026", category: "Depolama", readTime: "7 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", title: "Türkiye'den İngiltere'ye İhracat Rehberi", category: "İhracat", readTime: "10 dk", categoryColor: "bg-purple-50 text-purple-700" },
  { href: "/blog/ingiltere-palet-depolama-maliyetleri", title: "İngiltere Palet Depolama Maliyetleri", category: "Depolama", readTime: "5 dk", categoryColor: "bg-green-50 text-green-700" },
];

export default function AraDepoNedirPage() {
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
            <span className="text-[#0b2545] font-medium">İngiltere Ara Depo Nedir?</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Depolama"
              categoryColor="text-green-700 bg-green-50"
              title="İngiltere Ara Depo Nedir? Kimler İçin Uygundur?"
              readTime="5 dakika"
              date="Ocak 2026"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              Türkiye&apos;den İngiltere&apos;ye ürün gönderiyorsunuz, ancak ürünlerinizi
              uzun süreli stoklamak yerine UK içinde belirli noktalara dağıtmak istiyorsunuz.
              İşte bu noktada&nbsp;<strong>İngiltere ara depo</strong> devreye girer. Bu rehberde
              ara deponun ne olduğunu, nasıl çalıştığını ve hangi firmalar için uygun olduğunu
              açıklıyoruz.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>İngiltere Ara Depo Nedir?</h2>
              <p>
                Ara depo (İngilizce: cross-dock veya transit warehouse), ürünlerin nihai
                depolanma noktasına gitmeden önce kısa süreli tutulduğu ve buradan farklı
                lokasyonlara dağıtıldığı lojistik noktasıdır. İngiltere&apos;deki ara depo
                hizmetinde ürünleriniz Essex deposumuza gelir, burada ayrıştırılır,
                etiketlenir ve UK&apos;nın farklı bölgelerine — ya da Amazon deposuna — sevk edilir.
              </p>

              <h2>Ara Depo ile Normal Depo Arasındaki Fark</h2>
              <p>
                İki model arasındaki temel fark, stok süresi ve operasyon amacıdır:
              </p>
              <ul>
                <li><strong>Ara Depo:</strong> Kısa süreli tutma, transit operasyon, hızlı dağıtım odağı</li>
                <li><strong>Normal Depo:</strong> Uzun süreli stok tutma, sipariş bazlı fulfillment, stok yönetimi</li>
              </ul>
              <p>
                Ara depo modeli özellikle büyük toplu gönderimlerden sipariş bazlı dağıtıma
                geçen firmalar için maliyet avantajı sağlar.
              </p>

              <blockquote>
                İngiltere ara depo, Türkiye&apos;deki üreticiyle UK müşterisi arasındaki
                lojistik köprüdür.
              </blockquote>

              <h2>İngiltere Ara Depo Hizmeti Nasıl Çalışır?</h2>
              <ol>
                <li><strong>Türkiye&apos;den konteyner gelişi:</strong> Ürünleriniz Essex deposumuza teslim alınır.</li>
                <li><strong>Sayım ve kontrol:</strong> Tüm ürünler sayılır, hasar kontrolü yapılır.</li>
                <li><strong>Ayrıştırma ve paketleme:</strong> Ürünler sipariş veya dağıtım planına göre hazırlanır.</li>
                <li><strong>Dağıtım:</strong> UK&apos;nın farklı noktalarına, depolara veya Amazon&apos;a sevk edilir.</li>
              </ol>

              <h2>Kimler İçin Uygundur?</h2>
              <ul>
                <li>Türkiye&apos;den düzenli konteyner gönderip UK içinde birden fazla noktaya dağıtmak isteyen firmalar</li>
                <li>Sezonluk ürünlerini UK&apos;da geçici olarak depolamak isteyen markalar</li>
                <li>Amazon FBA deposuna toplu göndermeden önce ürünlerini hazırlatmak isteyenler</li>
                <li>UK&apos;da kendi deposu olmayan ve hızlı UK&apos;ya giriş yapmak isteyen ihracatçılar</li>
                <li>İngiltere toptancı veya bayilerine düzenli sevkiyat yapanlar</li>
              </ul>

              <h2>İngiltere Ara Depo Avantajları</h2>
              <ul>
                <li><strong>Hız:</strong> Ürünler UK içinde çok daha hızlı dağıtılır</li>
                <li><strong>Maliyet optimizasyonu:</strong> Uzun vadeli depolama ücretinden tasarruf</li>
                <li><strong>Esneklik:</strong> Dağıtım noktaları sipariş akışına göre değiştirilebilir</li>
                <li><strong>Türkçe koordinasyon:</strong> Tüm operasyon Türkçe yönetilir</li>
                <li><strong>UK altyapısı:</strong> Essex&apos;ten tüm İngiltere&apos;ye hızlı erişim</li>
              </ul>

              <h2>Sık Sorulan Sorular</h2>

              <h3>İngiltere ara depo ile normal depo arasındaki fark nedir?</h3>
              <p>
                Ara depo, ürünlerin kısa süreli (geçici) olarak stoklandığı ve buradan başka
                bir noktaya sevk edildiği transit depolama çözümüdür. Normal depoda ise ürünler
                uzun süreli tutulur ve sipariş bazlı dağıtım yapılır.
              </p>

              <h3>İngiltere ara depo hizmeti hangi firmalar için uygundur?</h3>
              <p>
                Türkiye&apos;den konteynerle toplu ürün gönderip bunları İngiltere içinde farklı
                noktalara dağıtmak isteyen firmalar, sezonluk stok yönetimi yapanlar ve UK
                ithalat sürecinde ürünlerini geçici olarak depolamak isteyenler için uygundur.
              </p>

              <h3>Ara depo ile Amazon prep birlikte kullanılabilir mi?</h3>
              <p>
                Evet. Ürünleriniz Essex deposumuza geldiğinde hem ara depo hem Amazon prep
                süreçleri aynı operasyon içinde yönetilebilir.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">
                İngiltere ara depo ihtiyacınızı değerlendirin
              </p>
              <p className="text-slate-300 text-sm mb-6">
                Ürün hacminizi ve dağıtım ihtiyacınızı paylaşın — size özel operasyon modeli hazırlayalım.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition"
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

            <AuthorBox updatedDate="Ocak 2026" />

            <RelatedArticles articles={relatedArticles} />

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/essex-depo" className="text-sm text-[#0b2545] hover:underline">→ Essex Depo</Link>
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
