import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/blog`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo & Lojistik Rehberleri | UK İhracat Bilgi Merkezi | LondraDepo.com",
  description:
    "İngiltere depo fiyatları, UK fulfillment, Amazon prep, palet depolama ve ihracat rehberleri. Türkiye'den İngiltere'ye satış yapan firmalar için operasyon bilgi merkezi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Depo & Lojistik Rehberleri | LondraDepo.com",
    description:
      "UK depo, fulfillment ve Amazon prep rehberleri. Türkiye'den İngiltere'ye ihracat bilgi merkezi.",
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
        { "@type": "ListItem", position: 2, name: "Blog & Rehberler", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "İngiltere Depo & Lojistik Rehberleri — LondraDepo.com",
      url: PAGE_URL,
      description:
        "Türkiye'den İngiltere'ye ihracat yapan firmalar için UK depo, fulfillment ve lojistik bilgi merkezi.",
    },
  ],
};

type BadgeVariant = "red" | "blue" | "green" | "amber" | "purple" | "slate";

interface Post {
  title: string;
  desc: string;
  href: string;
  category: string;
  badge: BadgeVariant;
  readTime: string;
  icon: string;
  tag?: "Popüler" | "Yeni";
}

const badgeClasses: Record<BadgeVariant, string> = {
  red: "bg-red-50 text-red-700",
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  amber: "bg-amber-50 text-amber-700",
  purple: "bg-purple-50 text-purple-700",
  slate: "bg-slate-100 text-slate-600",
};

const posts: Post[] = [
  {
    title: "İngiltere Depo Hizmeti: Kapsamlı Rehber 2026",
    desc: "UK depolama süreçleri, lokasyon seçimi ve doğru partner bulma. Türkiye'den ihracat yapan markalar için pillar rehber.",
    href: "/blog/ingiltere-depo-rehberi",
    category: "Depolama",
    badge: "green",
    readTime: "6 dk",
    icon: "🏭",
    tag: "Popüler",
  },
  {
    title: "İngiltere Depo Fiyatları 2026: Tam Maliyet Rehberi",
    desc: "UK palet depolama, fulfillment ve Amazon prep maliyetleri. Fiyat yapısını anlamak için kapsamlı rehber.",
    href: "/blog/ingiltere-depo-fiyatlari-2026",
    category: "Depolama",
    badge: "green",
    readTime: "7 dk",
    icon: "💷",
    tag: "Yeni",
  },
  {
    title: "İngiltere Ara Depo Nedir? Kimler İçin Uygundur?",
    desc: "İngiltere ara depo kavramı, transit depolama farkı, hangi firmalar ihtiyaç duyar ve nasıl kurulur.",
    href: "/blog/ingiltere-ara-depo-nedir",
    category: "Depolama",
    badge: "green",
    readTime: "5 dk",
    icon: "🔄",
    tag: "Yeni",
  },
  {
    title: "İngiltere Fulfillment Nedir? Nasıl Çalışır?",
    desc: "UK fulfillment hizmetinin ne olduğu, nasıl çalıştığı ve e-ticaret satıcıları için neden kritik olduğu.",
    href: "/blog/ingiltere-fulfillment-nedir",
    category: "Fulfillment",
    badge: "blue",
    readTime: "5 dk",
    icon: "📬",
    tag: "Popüler",
  },
  {
    title: "Amazon FBA mı, UK Fulfillment mı? Hangisi Daha Avantajlı?",
    desc: "Amazon FBA ve 3PL fulfillment arasındaki farklar, maliyet karşılaştırması ve hangi durumda hangisi tercih edilmeli.",
    href: "/blog/amazon-fba-vs-uk-fulfillment",
    category: "Fulfillment",
    badge: "blue",
    readTime: "8 dk",
    icon: "⚖️",
    tag: "Yeni",
  },
  {
    title: "Amazon Prep UK: Adım Adım Rehber",
    desc: "Amazon FBA için İngiltere'de prep hizmeti nedir, nasıl alınır ve hangi süreçler dahildir.",
    href: "/blog/amazon-prep-uk-rehberi",
    category: "Amazon",
    badge: "amber",
    readTime: "7 dk",
    icon: "📦",
    tag: "Popüler",
  },
  {
    title: "İngiltere Palet Depolama Maliyetleri 2026",
    desc: "UK palet depolama ücretleri, fiyatı etkileyen faktörler ve bütçe planlaması için pratik rehber.",
    href: "/blog/ingiltere-palet-depolama-maliyetleri",
    category: "Depolama",
    badge: "green",
    readTime: "5 dk",
    icon: "🧱",
    tag: "Yeni",
  },
  {
    title: "Türkiye'den İngiltere'ye İhracat Rehberi 2026",
    desc: "İhracat süreci, gümrük, GTIP, nakliye ve İngiltere'de operasyon kurma rehberi.",
    href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi",
    category: "İhracat",
    badge: "purple",
    readTime: "10 dk",
    icon: "🌍",
    tag: "Yeni",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Blog & Rehberler</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-[#0b2545] text-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 mb-4 inline-block">
              Bilgi Merkezi
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
              İngiltere Depo & Lojistik Rehberleri
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Türkiye&apos;den İngiltere&apos;ye satış yapan firmalar için UK depo, fulfillment ve
              ihracat operasyonu hakkında derinlemesine rehberler. E-E-A-T güçlü, operasyon odaklı.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-slate-200 py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm text-slate-600 justify-center md:justify-start">
            <span>✅ Essex merkezli UK depo</span>
            <span>✅ Türkçe operasyon iletişimi</span>
            <span>✅ 8+ yıl UK lojistik deneyimi</span>
            <span>✅ Gerçek operasyon örnekleri</span>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Category filter tabs (static) */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Tümü", "Depolama", "Fulfillment", "Amazon", "İhracat"].map((cat) => (
                <span
                  key={cat}
                  className={`text-sm px-4 py-1.5 rounded-full border font-medium cursor-default ${
                    cat === "Tümü"
                      ? "bg-[#0b2545] text-white border-[#0b2545]"
                      : "border-slate-200 text-slate-600 hover:border-[#0b2545]/40"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {posts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0b2545]/30 transition flex flex-col"
                >
                  {/* Card header */}
                  <div
                    className="h-28 flex items-center justify-center relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0b2545 0%, #2d5986 100%)" }}
                  >
                    <span className="text-4xl opacity-80">{post.icon}</span>
                    {post.tag && (
                      <span
                        className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${
                          post.tag === "Popüler"
                            ? "bg-[#e63946] text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {post.tag}
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-3 ${badgeClasses[post.badge]}`}
                    >
                      {post.category}
                    </span>
                    <h2 className="font-bold text-[#0b2545] text-sm leading-snug mb-2 flex-1 group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-xs mb-4 leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>⏱ {post.readTime} okuma</span>
                      <span className="text-[#e63946] font-semibold group-hover:underline">
                        Okumaya devam →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Case Studies promo */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 mb-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#0b2545] text-white mb-3 inline-block">
                  Case Studies
                </span>
                <h2 className="text-xl font-extrabold text-[#0b2545] mb-2">
                  Gerçek Operasyon Hikayeleri
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Krufy moda fulfillment, OEM yedek parça deposu ve pizza kutusu B2B dağıtımı gibi
                  gerçek operasyonları inceleyin.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-full transition flex-shrink-0"
              >
                Başarı Hikayelerini Gör →
              </Link>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#0b2545] text-white rounded-2xl p-8 text-center">
              <h2 className="text-xl font-extrabold mb-3">
                İngiltere operasyonunuzu bugün başlatın
              </h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Depo, fulfillment veya Amazon prep ihtiyacınız için 30 saniyede teklif alın.
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

            {/* Internal links */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
                <Link href="/case-studies" className="text-sm text-[#0b2545] hover:underline">→ Başarı Hikayeleri</Link>
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
