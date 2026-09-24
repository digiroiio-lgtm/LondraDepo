import Link from "next/link";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const services = [
  {
    icon: "🏢",
    title: "Depolama & Stoklama",
    desc: "İşletmenizin ihtiyacına göre kısa veya uzun vadeli depolama. Palet ve koli kabulü, ürün teslim alma, stok yönetimi ve izleme.",
    cta: "Depo Fiyatı Al",
    waMsg: "Depo%20fiyatı%20almak%20istiyorum.",
    href: "/depolama",
  },
  {
    icon: "📋",
    title: "Gümrükleme Desteği",
    desc: "Ürünlerinizi İngiltere'ye getirme sürecinde gümrükleme koordinasyonu desteği. İthalat belgesi koordinasyonu ve sevkiyat varış süreci.",
    cta: "Gümrükleme Hakkında Bilgi Al",
    waMsg: "Gümrükleme%20desteği%20hakkında%20bilgi%20almak%20istiyorum.",
    href: "/gumrukleme",
  },
  {
    icon: "🔄",
    title: "Yükleme, Boşaltma & Elleçleme",
    desc: "Araç boşaltma ve yükleme, palet ve koli elleçleme, ürün kabul, sıralama, yeniden paketleme, etiketleme ve sevkiyat hazırlama.",
    cta: "Elleçleme Fiyatı Al",
    waMsg: "Elleçleme%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.",
    href: "/ellecleme",
  },
  {
    icon: "🚚",
    title: "Nakliye & UK Dağıtım",
    desc: "Toplama hizmetleri, depo transferleri, yerel dağıtım ve İngiltere geneli teslimat koordinasyonu.",
    cta: "Dağıtım Teklifi Al",
    waMsg: "Dağıtım%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.",
    href: "/nakliye-dagitim",
  },
  {
    icon: "📬",
    title: "E-Ticaret Fulfillment",
    desc: "Sipariş yönetimi, stok takibi, pick & pack, kargo etiketleme, paketleme ve sevkiyat. Online mağazanızdan gelen siparişleri biz hazırlayalım.",
    cta: "Fulfillment Operasyonu Kur",
    waMsg: "E-ticaret%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.",
    href: "/e-ticaret-fulfillment",
  },
  {
    icon: "🛍️",
    title: "Shopify & Amazon Fulfillment",
    desc: "Shopify ve Amazon üzerinden satış yapan işletmeler için fulfillment desteği. Stok depomuzda, siparişler sistemde, teslimat bize kalıyor.",
    cta: "Platform Fulfillment Kur",
    waMsg: "Shopify%20veya%20Amazon%20fulfillment%20hakkında%20bilgi%20almak%20istiyorum.",
    href: "/shopify-fulfillment",
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            UK Depo & Lojistik Hizmetleri
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Gümrükleme koordinasyonundan depolamaya, fulfillment'tan UK geneli dağıtıma kadar
            UK lojistik süreçlerinizi tek operasyon partnerinden alın.
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
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/447554195190?text=Merhaba%2C%20${s.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-green-600 hover:text-green-700 transition"
                >
                  {s.cta} →
                </a>
                <Link
                  href={s.href}
                  className="inline-block text-xs text-slate-400 hover:text-[#0b2545] transition"
                >
                  Detaylı bilgi
                </Link>
              </div>
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
