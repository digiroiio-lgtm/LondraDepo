const WHATSAPP_SHOPIFY = "https://wa.me/447554195190?text=Merhaba%2C%20Shopify%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const WHATSAPP_AMAZON = "https://wa.me/447554195190?text=Merhaba%2C%20Amazon%20fulfillment%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";

const steps = [
  "Ürün stoğunuzu depomuzda saklayın.",
  "Shopify veya Amazon üzerinden siparişler alınır.",
  "Siparişler depo yönetim sistemine (WMS) girer.",
  "Depo ekibi ürünleri toplar.",
  "Ürünler paketlenir.",
  "Kargo etiketleri oluşturulur.",
  "Siparişler müşterilere sevk edilir.",
];

const platforms = [
  {
    name: "Shopify",
    icon: "🛍️",
    desc: "Shopify mağazanızdan gelen siparişleri depo altyapımızla fulfill edin. Stok depomuzda, siparişler sistemimize entegre.",
    cta: "Shopify Fulfillment Hakkında Bilgi Al",
    href: WHATSAPP_SHOPIFY,
    link: "/shopify-fulfillment",
  },
  {
    name: "Amazon",
    icon: "📦",
    desc: "Amazon üzerinden satış yapan işletmeler için stok depolama ve sipariş fulfillment desteği sunuyoruz.",
    cta: "Amazon Fulfillment Hakkında Bilgi Al",
    href: WHATSAPP_AMAZON,
    link: "/amazon-fulfillment",
  },
];

export default function ShopifyAmazonSection() {
  return (
    <section className="py-20 px-4 bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
            Platform Fulfillment
          </p>
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-4">
            Online Satın. Fulfillment'ı Biz Yapalım.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Shopify ve Amazon üzerinden satış yapan işletmeler için fulfillment desteği sunuyoruz.
            Resmi bir platform ortaklığı bulunmamakla birlikte bu platformlar aracılığıyla gelen
            siparişleri mevcut operasyonumuzla yönetiyoruz.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {platforms.map((p) => (
            <div key={p.name} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-extrabold text-[#0b2545] text-2xl mb-3">{p.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-6 py-3 rounded-full transition text-sm"
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-[#0b2545] rounded-3xl p-8 md:p-12">
          <h3 className="text-white font-extrabold text-xl mb-8 text-center">Süreç Nasıl İşliyor?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.slice(0, 4).map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-green-400 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-white text-sm mt-2 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {steps.slice(4).map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-green-400 font-bold text-sm">{String(i + 5).padStart(2, "0")}</span>
                <p className="text-white text-sm mt-2 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_SHOPIFY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Fulfillment Operasyonu Kur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
