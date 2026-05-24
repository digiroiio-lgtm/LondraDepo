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
  title: "Blog & Rehberler | İngiltere Depo ve Lojistik | LondraDepo.com",
  description:
    "İngiltere depo, fulfillment, Amazon prep ve UK lojistik hakkında rehber yazılar. Türkiye'den İngiltere'ye ihracat yapanlar için kapsamlı bilgi kaynağı.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Blog & Rehberler | LondraDepo.com",
    description: "UK depo, fulfillment ve Amazon prep hakkında rehber içerikler.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const posts = [
  {
    title: "İngiltere Depo Hizmeti: Kapsamlı Rehber",
    desc: "Türkiye'den İngiltere'ye ihracat yapan markalar için UK depolama süreçleri, maliyetler ve doğru partner seçimi hakkında kapsamlı rehber.",
    href: "/blog/ingiltere-depo-rehberi",
    category: "Depolama",
    readTime: "6 dk",
  },
  {
    title: "İngiltere Fulfillment Nedir? Nasıl Çalışır?",
    desc: "UK fulfillment hizmetinin ne olduğunu, nasıl çalıştığını ve e-ticaret satıcıları için neden kritik olduğunu anlatan rehber.",
    href: "/blog/ingiltere-fulfillment-nedir",
    category: "Fulfillment",
    readTime: "5 dk",
  },
  {
    title: "Amazon Prep UK: Adım Adım Rehber",
    desc: "Amazon FBA için İngiltere'de prep hizmeti nedir, nasıl alınır, hangi süreçler dahildir? Türk ihracatçıları için kapsamlı rehber.",
    href: "/blog/amazon-prep-uk-rehberi",
    category: "Amazon",
    readTime: "7 dk",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Blog</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
                İngiltere Depo & Lojistik Rehberleri
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Türkiye'den İngiltere'ye ihracat yapanlar için UK depo, fulfillment ve Amazon operasyonu hakkında kapsamlı bilgi kaynakları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {posts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
                >
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-bold text-[#0b2545] text-lg mb-2 flex-1">{post.title}</h2>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{post.desc}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>⏱ {post.readTime} okuma</span>
                    <span className="text-[#0b2545] font-semibold">Okumaya devam →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-3">Operasyonunuzu başlatmaya hazır mısınız?</h2>
              <p className="text-slate-300 text-sm mb-6">
                İngiltere depo ve fulfillment ihtiyacınız için hemen teklif alın.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                WhatsApp ile Teklif Al
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
