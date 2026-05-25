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
const PAGE_URL = `${SITE_URL}/blog/amazon-fba-vs-uk-fulfillment`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20UK%20fulfillment%20modeli%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Amazon FBA mı, UK Fulfillment mı? Hangisi Daha Avantajlı? | LondraDepo.com",
  description:
    "Amazon FBA ve 3PL UK fulfillment arasındaki farklar, maliyet karşılaştırması, esneklik ve kontrol açısından hangisini seçmeli? Türk ihracatçılar için rehber.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Amazon FBA mı, UK Fulfillment mı? | LondraDepo.com",
    description: "Amazon FBA ve 3PL UK fulfillment karşılaştırması — hangisi daha avantajlı?",
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
        { "@type": "ListItem", position: 3, name: "Amazon FBA mı, UK Fulfillment mı?", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Amazon FBA mı, UK Fulfillment mı? Hangisi Daha Avantajlı?",
      description: "Amazon FBA ve 3PL UK fulfillment karşılaştırması — maliyet, esneklik ve kontrol.",
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
          name: "Amazon FBA yerine 3PL fulfillment kullanmanın avantajı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "3PL fulfillment ile Amazon dışı kanalları da (web sitesi, Etsy, B2B müşteriler) tek depodan yönetebilir, paketleme markanızı özelleştirebilir ve Amazon'un uzun süreli depolama ücretlerinden kaçınabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon FBA ve UK 3PL fulfillment birlikte kullanılabilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Hibrit model: ürünlerin bir kısmını Amazon FBA'de, diğerlerini 3PL fulfillment üzerinden yönetmek hem maliyet hem erişim açısından avantaj sağlayabilir.",
          },
        },
      ],
    },
  ],
};

const relatedArticles = [
  { href: "/blog/ingiltere-fulfillment-nedir", title: "İngiltere Fulfillment Nedir? Nasıl Çalışır?", category: "Fulfillment", readTime: "5 dk", categoryColor: "bg-blue-50 text-blue-700" },
  { href: "/blog/amazon-prep-uk-rehberi", title: "Amazon Prep UK: Adım Adım Rehber", category: "Amazon", readTime: "7 dk", categoryColor: "bg-amber-50 text-amber-700" },
  { href: "/blog/ingiltere-depo-fiyatlari-2026", title: "İngiltere Depo Fiyatları 2026", category: "Depolama", readTime: "7 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-depo-rehberi", title: "İngiltere Depo Hizmeti: Kapsamlı Rehber", category: "Depolama", readTime: "6 dk", categoryColor: "bg-green-50 text-green-700" },
];

export default function FbaVsFulfillmentPage() {
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
            <span className="text-[#0b2545] font-medium">Amazon FBA mı, UK Fulfillment mı?</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Fulfillment"
              categoryColor="text-blue-700 bg-blue-50"
              title="Amazon FBA mı, UK Fulfillment mı? Hangisi Daha Avantajlı?"
              readTime="8 dakika"
              date="Ocak 2026"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              İngiltere&apos;ye satış yapan Türk ihracatçıların en sık sorduğu soru: Amazon
              FBA mı kullansam, yoksa bağımsız UK fulfillment hizmetine mi geçeyim? Her iki
              modelin avantajlarını, maliyetlerini ve hangi durumlarda hangisinin tercih
              edilmesi gerektiğini bu rehberde ele alıyoruz.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>Amazon FBA Nedir?</h2>
              <p>
                Amazon FBA (Fulfillment by Amazon), ürünlerinizi Amazon&apos;un deposuna
                göndermeniz ve sipariş yönetimi, paketleme, sevkiyat ile iade işlemlerini
                Amazon&apos;un üstlenmesi anlamına gelir. Büyük avantajı Prime badge ve
                Amazon logistik ağına erişimdir.
              </p>

              <h2>3PL UK Fulfillment Nedir?</h2>
              <p>
                3PL (Third-Party Logistics) fulfillment&apos;ta ürünleriniz bağımsız bir
                UK deposunda tutulur. Sipariş geldiğinde bu depo ürünü hazırlayıp müşteriye
                gönderir. LondraDepo.com gibi 3PL sağlayıcılar, Amazon&apos;a ek olarak
                web siteniz, Etsy, B2B müşteriler gibi tüm kanalları tek merkezden yönetir.
              </p>

              <blockquote>
                Amazon FBA, Amazon kanalına odaklananlar için güçlüdür. 3PL fulfillment ise
                çok kanallı büyüme stratejisi izleyenler için daha esnek ve kontrollü bir
                altyapı sunar.
              </blockquote>

              <h2>Amazon FBA vs 3PL Fulfillment — Karşılaştırma</h2>

              <h3>Maliyet</h3>
              <p>
                Amazon FBA&apos;de depolama, fulfillment ve kargo ücretleri Amazon tarafından
                belirlenir ve ürün boyutuna göre değişir. Uzun süreli depolama ücretleri
                yavaş dönen ürünlerde maliyeti ciddi artırabilir. 3PL fulfillment&apos;ta
                palet başına haftalık sabit ücret ve sipariş başına pick&amp;pack ücreti ödenir;
                genellikle daha öngörülebilir bir yapıdır.
              </p>

              <h3>Kanallar</h3>
              <ul>
                <li><strong>Amazon FBA:</strong> Yalnızca Amazon kanalı (FBM ile diğer kanallar mümkün ama karmaşık)</li>
                <li><strong>3PL Fulfillment:</strong> Amazon, Shopify, Etsy, web sitesi, B2B müşteriler — tümü tek depodan</li>
              </ul>

              <h3>Paketleme ve Marka</h3>
              <ul>
                <li><strong>Amazon FBA:</strong> Amazon standart ambalajı kullanılır; marka deneyimi sınırlıdır</li>
                <li><strong>3PL Fulfillment:</strong> Markanıza özgü ambalaj, özel teşekkür kartları, hediye paketi mümkündür</li>
              </ul>

              <h3>Kontrol</h3>
              <ul>
                <li><strong>Amazon FBA:</strong> Amazon kurallara uymayan ürünleri reddedebilir, stok erişimi kısıtlıdır</li>
                <li><strong>3PL Fulfillment:</strong> Stok üzerinde tam kontrol; anında erişim, iade yönetimi esnek</li>
              </ul>

              <h3>Prime Badge</h3>
              <ul>
                <li><strong>Amazon FBA:</strong> Otomatik Prime</li>
                <li><strong>3PL Fulfillment:</strong> Seller Fulfilled Prime (SFP) uygunluğu ile Prime mümkün; ancak performans gereksinimleri var</li>
              </ul>

              <h2>Hangisi Daha Avantajlı? Karar Faktörleri</h2>
              <p>
                <strong>Amazon FBA tercih edin:</strong> Yalnızca Amazon kanalında büyüyorsanız, Prime rozeti kritikse ve operasyon yönetimiyle uğraşmak istemiyorsanız.
              </p>
              <p>
                <strong>3PL UK Fulfillment tercih edin:</strong> Amazon dışı kanallara da satış yapıyorsanız, marka deneyimine önem veriyorsanız, maliyet esnekliği istiyorsanız veya B2B müşterileriniz varsa.
              </p>
              <p>
                <strong>Hibrit model:</strong> Amazon&apos;a satılan ürünlerin bir kısmını FBA&apos;de tutarken, web sitesi ve B2B siparişlerini 3PL fulfillment üzerinden karşılayabilirsiniz. Bu model özellikle büyüme aşamasındaki markalar için güçlüdür.
              </p>

              <h2>Sık Sorulan Sorular</h2>

              <h3>Amazon FBA yerine 3PL fulfillment kullanmanın avantajı nedir?</h3>
              <p>
                3PL fulfillment ile Amazon dışı kanalları da (web sitesi, Etsy, B2B müşteriler)
                tek depodan yönetebilir, paketleme markanızı özelleştirebilir ve Amazon&apos;un
                uzun süreli depolama ücretlerinden kaçınabilirsiniz.
              </p>

              <h3>Amazon FBA ve UK 3PL fulfillment birlikte kullanılabilir mi?</h3>
              <p>
                Evet. Hibrit model: ürünlerin bir kısmını Amazon FBA&apos;de, diğerlerini
                3PL fulfillment üzerinden yönetmek hem maliyet hem erişim açısından avantaj
                sağlayabilir.
              </p>

              <h3>LondraDepo.com Amazon prep yapıyor mu?</h3>
              <p>
                Evet. Amazon FBA&apos;ye hazırlık (etiketleme, ambalaj, polybag vb.) hizmetini
                3PL fulfillment operasyonumuzla entegre olarak sunuyoruz.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">
                UK fulfillment modelinizi belirleyin
              </p>
              <p className="text-slate-300 text-sm mb-6">
                Satış kanallarınızı ve ürün hacminizi paylaşın — size en uygun modeli önerelim.
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
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
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
