const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const customers = [
  {
    icon: "🏭",
    title: "Üreticiler",
    desc: "Kendi deponuzu kurmadan ürünlerinizi İngiltere pazarına ihraç edin. Stok ve dağıtım süreçlerinizi bize bırakın.",
  },
  {
    icon: "🛍️",
    title: "E-Ticaret Markaları",
    desc: "Ürünlerinizi depomuzda saklayın, müşteri siparişlerini bizim aracılığımızla karşılayın.",
  },
  {
    icon: "📦",
    title: "Amazon Satıcıları",
    desc: "Amazon üzerinden satış için UK stok depolama ve sipariş fulfillment operasyonunuzu destekliyoruz.",
  },
  {
    icon: "🛒",
    title: "Shopify Mağazaları",
    desc: "Shopify mağazanızdan gelen siparişleri depo altyapımızla yönetin.",
  },
  {
    icon: "🏪",
    title: "Toptancılar",
    desc: "Ürün stoğunuzu İngiltere'de depolayın, UK müşterilerinize ve bayilerinize dağıtın.",
  },
  {
    icon: "🚢",
    title: "İthalatçılar",
    desc: "Ürün kabulü, depolama ve İngiltere içi dağıtımı tek operasyon partnerinden alın.",
  },
];

export default function WhoWeWorkWithSection() {
  return (
    <section className="py-20 px-4 bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
            Müşterilerimiz
          </p>
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-4">
            UK Lojistik Altyapısına İhtiyaç Duyan İşletmeler İçin
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kendi depo ve lojistik operasyonu kurmak yerine hazır UK altyapısından yararlanmak
            isteyen işletmelerle çalışıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {customers.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-[#0b2545] text-lg mb-2">{c.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
          >
            İşletmeniz İçin Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
}
