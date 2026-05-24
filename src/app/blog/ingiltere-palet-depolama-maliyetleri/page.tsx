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
const PAGE_URL = `${SITE_URL}/blog/ingiltere-palet-depolama-maliyetleri`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20palet%20depolama%20maliyet%20bilgisi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Palet Depolama Maliyetleri 2026 | UK Pallet Storage | LondraDepo.com",
  description:
    "İngiltere palet depolama maliyetleri 2026: haftalık ve aylık palet depo ücretleri, fiyatı etkileyen faktörler ve bütçe planlaması. UK pallet storage rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Palet Depolama Maliyetleri 2026 | LondraDepo.com",
    description: "UK palet depolama ücretleri ve maliyet yapısı. İngiltere pallet storage rehberi.",
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
        { "@type": "ListItem", position: 3, name: "İngiltere Palet Depolama Maliyetleri", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "İngiltere Palet Depolama Maliyetleri 2026",
      description: "UK palet depolama ücretleri, fiyatı etkileyen faktörler ve bütçe planlaması.",
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
          name: "İngiltere'de 1 palet depolama haftalık maliyeti nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İngiltere'de standart euro palet (120×80 cm) depolama haftalık ortalama £8–£15 arasındadır. Yüksek yığın, iklim kontrolü veya güvenli depolama gereken ürünlerde bu ücret artabilir.",
          },
        },
        {
          "@type": "Question",
          name: "Palet depolama fiyatını etkileyen faktörler nelerdir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palet boyutu ve ağırlığı, ürün tipi (standart/hassas/soğuk), stok süresi, erişim sıklığı, depo lokasyonu ve ek hizmetler (pick&pack, repack) fiyatı etkiler.",
          },
        },
      ],
    },
  ],
};

const relatedArticles = [
  { href: "/blog/ingiltere-depo-fiyatlari-2026", title: "İngiltere Depo Fiyatları 2026: Tam Maliyet Rehberi", category: "Depolama", readTime: "7 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-depo-rehberi", title: "İngiltere Depo Hizmeti: Kapsamlı Rehber", category: "Depolama", readTime: "6 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-ara-depo-nedir", title: "İngiltere Ara Depo Nedir?", category: "Depolama", readTime: "5 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-fulfillment-nedir", title: "İngiltere Fulfillment Nedir?", category: "Fulfillment", readTime: "5 dk", categoryColor: "bg-blue-50 text-blue-700" },
];

export default function PaletDepolamaPage() {
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
            <span className="text-[#0b2545] font-medium">İngiltere Palet Depolama Maliyetleri</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Depolama"
              categoryColor="text-green-700 bg-green-50"
              title="İngiltere Palet Depolama Maliyetleri 2026"
              readTime="5 dakika"
              date="Ocak 2026"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              İngiltere&apos;de palet depolama bütçenizi planlamak için önce fiyat yapısını
              anlamak gerekir. Haftalık palet ücreti ne kadardır, hangi faktörler fiyatı
              etkiler ve toplam maliyeti nasıl minimize edersiniz? Bu rehberde her şeyi açık
              bir şekilde ele alıyoruz.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>İngiltere&apos;de Palet Depolama Ücreti — 2026</h2>
              <p>
                İngiltere&apos;de standart euro palet (120×80 cm, maks. 1.000 kg) için haftalık
                depolama ücreti ortalama <strong>£8–£15</strong> arasındadır. Bu fiyat
                aşağıdaki koşullar için geçerlidir:
              </p>
              <ul>
                <li>Standart boyut ve ağırlık (1×1.2m taban, maks. 1.8m yükseklik)</li>
                <li>Kuru, ısıtmalı depo</li>
                <li>Haftalık erişim</li>
                <li>Pick&amp;pack dahil değil</li>
              </ul>

              <h2>Palet Depolama Fiyatını Etkileyen Faktörler</h2>
              <ul>
                <li><strong>Palet boyutu ve ağırlığı:</strong> Jumbo palet veya ağır yük için ek ücret uygulanabilir.</li>
                <li><strong>Ürün tipi:</strong> Hassas, yüksek değerli, gıda veya soğuk zincir ürünler için özel koşullar gerekir.</li>
                <li><strong>Stok süresi:</strong> Uzun vadeli stok tutma için indirimli fiyat mümkündür.</li>
                <li><strong>Erişim sıklığı:</strong> Çok sık erişim (günlük) ek işlem ücreti getirebilir.</li>
                <li><strong>Depo lokasyonu:</strong> Essex, Londra çevresi ve diğer bölgeler arasında fiyat farkı vardır.</li>
                <li><strong>Ek hizmetler:</strong> Pick&amp;pack, yeniden paketleme, etiketleme eklenirse toplam ücret artar.</li>
              </ul>

              <blockquote>
                Yalnızca "haftalık palet ücreti" sormak yetersizdir. Toplam operasyon maliyetini
                anlamak için giriş işlemi, pick&amp;pack ve ek hizmetleri de hesaba katın.
              </blockquote>

              <h2>Palet Depolama Maliyet Hesaplama — Örnek</h2>
              <p>
                10 palet, 4 haftalık depolama senaryosu:
              </p>
              <ul>
                <li>10 palet × £10/hafta × 4 hafta = <strong>£400 depolama</strong></li>
                <li>Giriş işlemi: 10 palet × £8 = <strong>£80</strong></li>
                <li>Çıkış pick&amp;pack (sipariş bazlı): ayrıca hesaplanır</li>
                <li><strong>Toplam depolama alt toplamı: ~£480</strong></li>
              </ul>

              <h2>Palet Depolama Maliyetini Optimize Etme</h2>
              <ul>
                <li>Toplu gönderimlerle birim başı nakliye maliyetini düşürün</li>
                <li>Yavaş dönen ürünler için minimum stok seviyesi tutun</li>
                <li>Fulfillment ve depolamayı tek sağlayıcıdan alarak çifte işlem ücretinden kaçının</li>
                <li>Uzun vadeli stok anlaşmalarında indirim müzakeresi yapın</li>
                <li>Türkçe iletişim: operasyon hataları ve gecikmelerin maliyetini minimize eder</li>
              </ul>

              <h2>LondraDepo.com Palet Depolama Özellikleri</h2>
              <ul>
                <li>Essex merkezli, Londra&apos;ya yakın stratejik konum</li>
                <li>Standart ve büyük boy palet kabulü</li>
                <li>Konteyner kabulü (FCL ve LCL)</li>
                <li>Esnek haftalık ücretlendirme</li>
                <li>Düzenli stok raporu ve Türkçe iletişim</li>
                <li>Fulfillment + Amazon prep entegrasyonu</li>
              </ul>

              <h2>Sık Sorulan Sorular</h2>

              <h3>İngiltere&apos;de 1 palet depolama haftalık maliyeti nedir?</h3>
              <p>
                İngiltere&apos;de standart euro palet (120×80 cm) depolama haftalık ortalama
                £8–£15 arasındadır. Yüksek yığın, iklim kontrolü veya güvenli depolama
                gereken ürünlerde bu ücret artabilir.
              </p>

              <h3>Palet depolama fiyatını etkileyen faktörler nelerdir?</h3>
              <p>
                Palet boyutu ve ağırlığı, ürün tipi, stok süresi, erişim sıklığı, depo
                lokasyonu ve ek hizmetler fiyatı etkiler.
              </p>

              <h3>Minimum kaç palet ile çalışabilirsiniz?</h3>
              <p>
                Sabit minimum palet gereksiniimimiz yoktur. 1 paletten başlayarak esnek
                depolama çözümleri sunuyoruz.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">Palet depolama fiyatınızı öğrenin</p>
              <p className="text-slate-300 text-sm mb-6">
                Palet sayısı ve ürün tipinizi belirtin — size özel fiyat bilgisi verelim.
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
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama Hizmeti</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
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
