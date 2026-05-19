const WHATSAPP = "https://wa.me/447000000000?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const industries = [
  {
    icon: "🛒",
    title: "E-Ticaret Markaları",
    desc: "İngiltere e-ticaret deposu ihtiyacı olan markalar için hızlı sipariş hazırlama desteği.",
    cta: "E-ticaret çözümü sorun",
  },
  {
    icon: "📦",
    title: "Amazon / Etsy / Shopify Satıcıları",
    desc: "İngiltere Amazon prep ve fulfillment odaklı UK warehouse depo çözümü.",
    cta: "Marketplace çözümü sorun",
  },
  {
    icon: "🍽️",
    title: "Gıda Üreticileri",
    desc: "Düzenli kabul, stok ve dağıtım akışı isteyen firmalar için uygun operasyon yapısı.",
    cta: "Gıda lojistiği sorun",
  },
  {
    icon: "🏗️",
    title: "Toptancılar & İthalatçılar",
    desc: "İngiltere ithalat deposu ve dağıtım merkezi ihtiyacına uygun depolama modeli.",
    cta: "Toptan depo sorun",
  },
  {
    icon: "🚀",
    title: "Türk Girişimciler & İhracatçılar",
    desc: "İngiltere'ye ihracat yapan firmalar için İngiltere Türk deposu çözümü.",
    cta: "İngiltere açılımını başlatın",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 px-4 bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            Hangi Sektörler İçin Uygun?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            E-ticaretten toptana, gıdadan ihracata geniş sektör yelpazesine
            hitap ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#0b2545] text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{item.desc}</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-green-600 hover:text-green-700 transition"
              >
                {item.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
          >
            Sektörünüze Uygun Çözümü Keşfedin
          </a>
        </div>
      </div>
    </section>
  );
}
