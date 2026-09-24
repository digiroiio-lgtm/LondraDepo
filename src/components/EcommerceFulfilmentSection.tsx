const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20e-ticaret%20fulfillment%20operasyonumu%20kurmak%20istiyorum.";

const workflow = [
  { icon: "🛒", label: "Sipariş alınır" },
  { icon: "📋", label: "WMS'e girer" },
  { icon: "🔍", label: "Ürün toplanır" },
  { icon: "📦", label: "Paketlenir" },
  { icon: "🏷️", label: "Etiket oluşturulur" },
  { icon: "🚚", label: "Müşteriye teslim" },
];

const features = [
  "Sipariş yönetimi",
  "Stok takibi",
  "Pick & pack operasyonu",
  "Kargo etiketleme",
  "Paketleme",
  "Sevkiyat",
  "İade yönetimi",
];

export default function EcommerceFulfilmentSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
            E-Ticaret Fulfillment
          </p>
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-4">
            Online Siparişten Müşteri Teslimatına
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Online satış operasyonunuzu depo fulfillment altyapımızla birleştirin. Sipariş geldiğinde
            depo ekibi süreci devralır, ürünleri toplar, paketler ve müşterinize sevk eder.
          </p>
        </div>

        {/* Workflow visual */}
        <div className="bg-[#f6f8fb] rounded-3xl p-8 mb-12">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            Fulfillment Süreci
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {workflow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center text-center min-w-[80px]">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-2 border border-slate-100">
                    {step.icon}
                  </div>
                  <span className="text-xs text-slate-600 font-medium leading-tight">{step.label}</span>
                </div>
                {i < workflow.length - 1 && (
                  <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h3 className="font-bold text-[#0b2545] text-xl mb-4">Süreç kapsamı:</h3>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 lg:mt-0 bg-[#0b2545] rounded-3xl p-8 text-white">
            <h3 className="font-bold text-xl mb-3">Fulfillment Operasyonunuzu Kurun</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Kendi depo ve ekip yatırımı yapmadan UK fulfillment altyapısından yararlanın.
              Ürünleriniz depomuzda, siparişleriniz sistemde — teslimat bize kalıyor.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-6 py-3 rounded-full transition text-sm"
            >
              Fulfillment Operasyonumu Kuralım
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
