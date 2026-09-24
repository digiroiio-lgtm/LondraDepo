const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const steps = [
  {
    num: "01",
    label: "GÖNDERİN",
    title: "Ürünlerinizi UK'e Gönderin",
    desc: "Türkiye veya tedarikçinizden ürünlerinizi depomuzun adresine gönderin.",
    icon: "📦",
  },
  {
    num: "02",
    label: "GÜMRÜK",
    title: "Gümrük Süreci",
    desc: "UK gümrük sürecinin koordinasyonunda destek sağlıyoruz.",
    icon: "📋",
  },
  {
    num: "03",
    label: "DEPOLAMA",
    title: "Ürünler Depoya Alınır",
    desc: "Ürünleriniz teslim alınır, sayılır ve depo sistemine dahil edilir.",
    icon: "🏢",
  },
  {
    num: "04",
    label: "SATIŞ",
    title: "Mevcut Kanallarınızdan Satın",
    desc: "Shopify, Amazon veya toptan satış kanallarınızdan satmaya devam edin.",
    icon: "🛒",
  },
  {
    num: "05",
    label: "FULFILLMENT",
    title: "Pick, Pack & Etiketleme",
    desc: "Siparişler, depo sistemi üzerinden işlenir; ürünler toplanır, paketlenir ve etiketlenir.",
    icon: "📬",
  },
  {
    num: "06",
    label: "TESLİMAT",
    title: "Müşteriye Teslim",
    desc: "Siparişler müşterilerinize ulaşmak üzere UK genelinde sevk edilir.",
    icon: "🚚",
  },
];

export default function CustomerJourneySection() {
  return (
    <section id="surec" className="py-20 px-4 bg-[#0b2545]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Uçtan Uca Süreç
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            İthalattan Teslimatına Tek Operasyon Partneri
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Türkiye veya tedarikçinizden UK müşterinize kadar her adımda yanınızdayız.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:grid md:grid-cols-6 md:gap-4 mb-12">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-2xl mb-3">
                  {step.icon}
                </div>
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {step.num}
                </span>
                <span className="text-white text-xs font-semibold mb-2">{step.label}</span>
                <h3 className="text-white text-sm font-bold mb-1 leading-tight">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-full w-4 flex items-center justify-center z-10 -translate-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="md:hidden space-y-4 mb-12">
          {steps.map((step, i) => (
            <div key={step.num}>
              <div className="flex gap-4 items-start bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                <div>
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">{step.num} — {step.label}</span>
                  <h3 className="text-white font-bold text-sm mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition shadow-lg"
          >
            Depo Teklifi Alın
          </a>
        </div>
      </div>
    </section>
  );
}
