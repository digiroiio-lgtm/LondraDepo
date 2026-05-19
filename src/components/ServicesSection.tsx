const WHATSAPP = "https://wa.me/447000000000?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const services = [
  {
    icon: "🏢",
    title: "İngiltere'de Depo Hizmeti",
    desc: "İngiltere'de depo arayan işletmeler için güvenli, düzenli ve ölçeklenebilir alan sunuyoruz. Ürünleriniz İngiltere ürün deposu altyapısında kontrollü şekilde kabul edilir, saklanır ve sevke hazırlanır.",
    cta: "Depo teklifi alın",
  },
  {
    icon: "📬",
    title: "İngiltere Fulfillment",
    desc: "Sipariş toplama, paketleme ve sevk süreçlerinizi tek merkezden yönetiyoruz. Amazon, Etsy ve Shopify satıcıları için İngiltere fulfillment ve İngiltere sipariş hazırlama operasyonlarını hızlandırıyoruz.",
    cta: "Fulfillment sorun",
  },
  {
    icon: "🎯",
    title: "İngiltere Palet Depolama",
    desc: "Paletli ürünleriniz için güvenli ve düzenli İngiltere palet depolama hizmeti sağlıyoruz. Toptancı, ithalatçı ve üreticiler için maliyet kontrollü depolama sunuyoruz.",
    cta: "Palet kapasitesi sorun",
  },
  {
    icon: "📋",
    title: "Ürün Kabul & Stok Yönetimi",
    desc: "İngiltere'ye ulaşan ürünleriniz kontrollü şekilde teslim alınır, sayılır ve stok düzenine dahil edilir. İngiltere stok deposu ihtiyacınız tek operasyon hattında çözülür.",
    cta: "Stok yönetimi sorun",
  },
  {
    icon: "🚚",
    title: "İngiltere Dağıtım Merkezi",
    desc: "İngiltere dağıtım merkezi altyapımız sayesinde siparişleriniz doğru noktaya hızlı çıkar. İngiltere dağıtım ağına yakın operasyon yapımızla teslimat süreçlerinizi kısaltıyoruz.",
    cta: "Dağıtım sorun",
  },
  {
    icon: "🍽️",
    title: "İngiltere Gıda Deposu",
    desc: "Uygun ürün grupları için operasyon disiplini yüksek İngiltere gıda deposu desteği sunuyoruz. Kabul, depolama ve dağıtım süreçlerinde düzen ve takip önceliğimizdir.",
    cta: "Gıda lojistiği sorun",
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            İngiltere Depo & Lojistik Hizmetleri
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Türkiye'den İngiltere'ye ihracat yapan markalar için uçtan uca
            depolama, fulfillment ve dağıtım çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-[#0b2545] text-lg mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.desc}</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700 transition"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
          >
            Tüm Hizmetler İçin Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
}
