import Link from "next/link";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const featuredPosts = [
  {
    title: "İngiltere Depo Fiyatları 2026: Tam Maliyet Rehberi",
    excerpt: "UK palet depolama, fulfillment ve Amazon prep maliyetleri. Bütçe planlaması için kapsamlı rehber.",
    href: "/blog/ingiltere-depo-fiyatlari-2026",
    category: "Depolama",
    badgeColor: "bg-green-100 text-green-800",
    readTime: "7 dk",
    icon: "💷",
  },
  {
    title: "Amazon FBA mı, UK Fulfillment mı? Hangisi Daha Avantajlı?",
    excerpt: "Maliyet, esneklik ve kontrol açısından iki modelin tam karşılaştırması.",
    href: "/blog/amazon-fba-vs-uk-fulfillment",
    category: "Fulfillment",
    badgeColor: "bg-blue-100 text-blue-800",
    readTime: "8 dk",
    icon: "⚖️",
  },
  {
    title: "Türkiye'den İngiltere'ye İhracat Rehberi 2026",
    excerpt: "Gümrük, GTIP, nakliye ve UK'da operasyon kurma süreçlerini adım adım anlatan rehber.",
    href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi",
    category: "İhracat",
    badgeColor: "bg-purple-100 text-purple-800",
    readTime: "10 dk",
    icon: "🌍",
  },
];

const caseStudy = {
  title: "Krufy Moda Fulfillment: UK E-Ticaret Operasyonu",
  excerpt: "Ünlü futbolcunun koleksiyonunun İngiltere fulfillment ve depolama operasyonu nasıl kuruldu?",
  href: "/case-studies/krufy-uk-fashion-fulfillment",
};

const faq = [
  { q: "İngiltere'de depo maliyeti ne kadardır?", a: "Palet başına haftalık £8–£15 arasında değişir. Ürün tipi ve ek hizmetler fiyatı etkiler." },
  { q: "Türkçe operasyon desteği var mı?", a: "Evet. Tüm operasyon sürecini Türkçe yönetiyoruz." },
];

export default function BlogInsightsSection() {
  return (
    <section className="py-16 px-4 bg-[#f6f8fb] border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e63946] mb-2 block">
              Bilgi Merkezi
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2545]">
              İngiltere İhracat Rehberleri
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl">
              Türkiye&apos;den İngiltere&apos;ye satış yapan firmalar için UK depo, fulfillment
              ve ihracat operasyonu rehberleri.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#0b2545] hover:underline flex-shrink-0"
          >
            Tüm rehberleri gör →
          </Link>
        </div>

        {/* 3 featured articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0b2545]/30 transition flex flex-col"
            >
              <div
                className="h-24 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0b2545 0%, #2d5986 100%)" }}
              >
                <span className="text-3xl opacity-80">{post.icon}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-3 ${post.badgeColor}`}>
                  {post.category}
                </span>
                <h3 className="font-bold text-[#0b2545] text-sm leading-snug mb-2 flex-1 group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-xs text-slate-400">⏱ {post.readTime} okuma</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Case study + FAQ row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Case study */}
          <Link
            href={caseStudy.href}
            className="group bg-[#0b2545] text-white rounded-2xl p-6 hover:bg-[#1e3a5f] transition flex flex-col"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
              Case Study
            </span>
            <h3 className="font-extrabold text-lg leading-snug mb-2 group-hover:underline">
              {caseStudy.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed flex-1">
              {caseStudy.excerpt}
            </p>
            <span className="text-[#e63946] font-semibold text-sm mt-4">Operasyonu incele →</span>
          </Link>

          {/* FAQ snippet */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-extrabold text-[#0b2545] mb-4">Sık Sorulan Sorular</h3>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q}>
                  <p className="font-semibold text-[#0b2545] text-sm mb-1">{item.q}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-5 inline-flex items-center text-sm text-[#0b2545] font-semibold hover:underline"
            >
              Daha fazla soru için blog →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0b2545] rounded-2xl p-6">
          <p className="text-white font-bold text-lg">
            İngiltere operasyonunuzu bugün planlayın
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-full text-sm transition"
            >
              WhatsApp&apos;tan hızlı bilgi alın
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm transition"
            >
              Depo maliyeti öğrenin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
