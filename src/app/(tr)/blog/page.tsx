import Emoji from "@/components/visual/Emoji";
import FaqJsonLd from "@/components/FaqJsonLd";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/visual/Icon";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";
const PAGE_URL = `${SITE_URL}/blog`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo ve Lojistik Rehberleri | LondraDepo",
  description:
    "İngiltere depo fiyatları, UK fulfillment, Amazon prep, palet depolama ve ihracat rehberleri. Türkiye'den İngiltere'ye satış yapanlar için bilgi merkezi.",
  alternates: trAlternates("/blog"),
  openGraph: {
    title: "İngiltere Depo & Lojistik Rehberleri | LondraDepo",
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
      mainEntity: { "@id": `${PAGE_URL}#items` },
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
  {
    title: "İngiltere'de 3PL Depo Nasıl Seçilir? Sorulacak 12 Soru",
    desc: "Konum, fiyat yapısı, stok görünürlüğü, kanallar, iade, sözleşme ve gümrük desteği: teklifleri karşılaştırma rehberi.",
    href: "/blog/ingiltere-3pl-nasil-secilir",
    category: "Partner Seçimi",
    badge: "blue",
    readTime: "7 dk",
    icon: "🔎",
    tag: "Yeni",
  },
  {
    title: "İngiltere'ye İthalatın Maliyeti Nedir?",
    desc: "Gümrük vergisi, %20 ithalat KDV'si ve lojistik kalemleri; örnek KDV hesabıyla.",
    href: "/blog/ingiltere-ithalat-maliyetleri",
    category: "İhracat",
    badge: "purple",
    readTime: "7 dk",
    icon: "🧾",
    tag: "Yeni",
  },
  {
    title: "Incoterms Rehberi: İngiltere'ye Satışta Kim Neyi Öder?",
    desc: "EXW, FCA, FOB, CIF, DAP ve DDP'de navlun, gümrük, vergi ve ithalat KDV'si kimde.",
    href: "/blog/incoterms-rehberi",
    category: "İhracat",
    badge: "purple",
    readTime: "6 dk",
    icon: "📄",
    tag: "Yeni",
  },
  {
    title: "Antrepo (Bonded Warehouse) Nedir?",
    desc: "Gümrük vergisi ve KDV'nin askıya alındığı antrepo ile gümrüklenmiş depo farkı; ertelenmiş KDV.",
    href: "/blog/antrepo-nedir",
    category: "İhracat",
    badge: "purple",
    readTime: "6 dk",
    icon: "🏢",
    tag: "Yeni",
  },
  {
    title: "Amazon Private Label, Toptan ve Arbitraj",
    desc: "Her satıcı modelinde stok İngiltere'ye nasıl gelir, depo ne yapar, Amazon'a partiler nasıl gönderilir.",
    href: "/blog/amazon-private-label-toptan",
    category: "Amazon",
    badge: "amber",
    readTime: "6 dk",
    icon: "📦",
    tag: "Yeni",
  },
  {
    title: "Amazon FBA Prep Kontrol Listesi",
    desc: "FNSKU etiketleri, ambalaj, koli etiketleri ve Amazon UK deposuna teslimat adım adım.",
    href: "/blog/amazon-fba-prep-kontrol-listesi",
    category: "Amazon",
    badge: "amber",
    readTime: "5 dk",
    icon: "✅",
    tag: "Yeni",
  },
];

const GROUPS = [
  { id: "depolama", label: "Depolama ve maliyetler", cats: ["Depolama"] },
  { id: "fulfillment", label: "Fulfillment ve partner seçimi", cats: ["Fulfillment", "Partner Seçimi"] },
  { id: "amazon", label: "Amazon satıcıları", cats: ["Amazon"] },
  { id: "ihracat", label: "İhracat ve ithalat", cats: ["İhracat"] },
];

const TOOLS = [
  { href: "/ingiltere-depo-maliyet-hesaplama", title: "Depo Maliyet Hesaplama", text: "Palet × hafta × £3,50 + KDV; KDV dahil toplamı görün.", tag: "Ücretsiz araç" },
  { href: "/cbm-palet-hesaplama", title: "CBM ve Palet Hesaplama", text: "Koli ölçüsünden metreküp, palet sayısı ve konteyner doluluğu.", tag: "Ücretsiz araç" },
  { href: "/konteyner-varis-planlayici", title: "Konteyner Varış Planlayıcı", text: "ETA'ya göre limandan Essex deposuna tarihli kontrol listesi.", tag: "Ücretsiz araç" },
  { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", title: "İthalat Kontrol Listesi (PDF)", text: "Hazırlık, ürün, belge, gümrük ve depo adımları iki A4 sayfada.", tag: "İndir" },
  { href: "/blog/amazon-fba-prep-kontrol-listesi", title: "Amazon FBA Prep Kontrol Listesi (PDF)", text: "Ürün hazırlığı, koliler ve Amazon UK teslimatı tek sayfada.", tag: "İndir" },
];

const faqs = [
  { q: "İngiltere depoya yeni başlıyorsam hangi rehberden başlamalıyım?", a: "Önce İngiltere Depo Rehberi ile sürecin nasıl işlediğini, sonra İngiltere Depo Fiyatları 2026 ile maliyet kalemlerini okuyun; partner seçmeden önce 3PL seçim rehberindeki 12 soruyu kullanın." },
  { q: "İngiltere'de depolama ne kadar tutar?", a: "LondraDepo'da standart palet depolama haftalık palet başına £3,50 + KDV'den başlar; 10 palet 4 hafta için £140 + KDV. Mal kabul, pick & pack, teslimat ve gümrükleme ayrıca fiyatlandırılır." },
  { q: "Gümrük vergisi ve ithalat KDV'si hangi rehberde anlatılıyor?", a: "İngiltere İthalat Maliyetleri rehberi gümrük vergisini, genellikle %20 olan ithalat KDV'sini ve ertelenmiş KDV muhasebesini örnek hesapla anlatır; ihracat rehberi EORI, GTİP ve beyanname adımlarını kapsar." },
  { q: "Amazon FBA hazırlığını hangi rehber anlatıyor?", a: "Amazon Prep UK Rehberi süreci adım adım anlatır; Amazon FBA Prep Kontrol Listesi ise ürün hazırlığı, koli etiketleri ve Amazon UK teslimatını kapsar. Kontrol listesinin yazdırılabilir PDF sürümü de mevcuttur." },
  { q: "Rehberleri kim yazıyor?", a: "Rehberler LondraDepo'nun Rayleigh, Essex'teki depo operasyon deneyimiyle Arca Trade Group Kurucu Ortağı Sertaç Yılmaz tarafından yazılır ve Operasyon Müdürü Yusuf Barış tarafından incelenir." },
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
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Bu rehberler İngiltere&apos;de stok tutmadan önce sorulan soruları cevaplar: UK depo nasıl işler ve ne tutar,
              fulfillment ve Amazon FBA hazırlığı nasıl yapılır, ürünler nasıl ithal edilir ve gümrük vergisi ile ithalat
              KDV&apos;si nasıl hesaplanır, doğru 3PL nasıl seçilir. Hepsi Essex&apos;teki depomuzu işletme deneyimimizle yazıldı ve
              ilgili hizmet ile ücretsiz araçlara bağlanır.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-slate-200 py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-sm text-slate-600 justify-center md:justify-start">
            <span><Emoji e="✅" /> Essex merkezli UK depo</span>
            <span><Emoji e="✅" /> Türkçe operasyon iletişimi</span>
            <span><Emoji e="✅" /> 18 yıl lojistik sektörü deneyimi</span>
            <span><Emoji e="✅" /> Gerçek operasyon örnekleri</span>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Topic navigation (links to the topic sections below) */}
            <nav aria-label="Konular" className="flex flex-wrap gap-2 mb-10">
              {GROUPS.map((g) => (
                <a key={g.id} href={`#${g.id}`} className="text-sm px-4 py-1.5 rounded-full border border-slate-300 font-medium text-[#0b2545] hover:border-[#0b2545] hover:bg-slate-50 transition">
                  {g.label}
                </a>
              ))}
              <a href="#araclar" className="text-sm px-4 py-1.5 rounded-full border border-slate-300 font-medium text-[#0b2545] hover:border-[#0b2545] hover:bg-slate-50 transition">Ücretsiz araçlar</a>
            </nav>

            {GROUPS.map((g) => (
            <section key={g.id} id={g.id} className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">{g.label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.filter((post) => g.cats.includes(post.category)).map((post) => (
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
                    <span className="text-4xl text-white opacity-90"><Emoji e={post.icon} /></span>
                    {post.tag && (
                      <span
                        className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${
                          post.tag === "Popüler"
                            ? "bg-[#d62839] text-white"
                            : "bg-green-700 text-white"
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
                    <h3 className="font-bold text-[#0b2545] text-sm leading-snug mb-2 flex-1 group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs mb-4 leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1"><Icon name="clock" className="h-3.5 w-3.5" /> {post.readTime} okuma</span>
                      <span className="text-[#d62839] font-semibold group-hover:underline">
                        Okumaya devam →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </section>
            ))}

            {/* Free tools and downloads */}
            <section id="araclar" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">Ücretsiz araçlar ve indirmeler</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {TOOLS.map((t) => (
                  <Link key={t.title} href={t.href} className="flex gap-4 border border-slate-200 rounded-2xl p-5 hover:border-[#0b2545] transition">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#d62839]">
                      <Icon name={t.tag === "İndir" ? "document" : "pound"} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-[#d62839]">{t.tag}</span>
                      <span className="block font-bold text-[#0b2545]">{t.title}</span>
                      <span className="block text-sm text-slate-600">{t.text}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#0b2545] mb-2">{f.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

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
                Operasyon Örneklerine Bak →
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

            {/* Internal links */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
                <Link href="/case-studies" className="text-sm text-[#0b2545] hover:underline">→ Operasyon Örnekleri</Link>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FaqJsonLd faqs={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "@id": `${PAGE_URL}#items`,
              name: "İngiltere Depo ve Lojistik Rehberleri",
              numberOfItems: posts.length,
              itemListElement: posts.map((post, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}${post.href}`, name: post.title })),
            }).replace(/</g, "\\u003c"),
          }}
        />
        <QuoteForm
          formId="tr_blog_quote"
          heading="Sorunuz Rehberlerde Yok mu?"
          intro="Ürününüzü ve ihtiyacınızı yazın; ekibimiz İngiltere depolama, fulfillment veya ithalat sorunuzu cevaplasın ve size özel teklif hazırlasın."
          presetServices={[]}
        />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
