const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20İngiltere%20lojistik%20operasyonumu%20konuşmak%20istiyorum.";

const services = [
  "Gümrükleme süreci koordinasyonu",
  "Depolama",
  "Ürün kabul",
  "Yükleme ve boşaltma",
  "Ürün elleçleme",
  "Stok yönetimi",
  "Pick & pack",
  "Etiketleme",
  "Sipariş fulfillment",
  "Shopify fulfillment",
  "Amazon fulfillment",
  "UK içi nakliye ve dağıtım",
];

export default function ValuePropositionSection() {
  return (
    <section className="py-20 px-4 bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
              Neden LondraDepo?
            </p>
            <h2 className="text-3xl font-extrabold text-[#0b2545] mb-5 leading-tight">
              İngiltere'de Kendi Deponuzu Kurmadan Satış Yapın
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              İngiltere pazarına girmek için kendi lojistik altyapınızı kurmanız gerekmiyor. Ürünlerinizi
              bize gönderin; gümrükleme aşamasından depolamaya, sipariş hazırlamadan İngiltere içi
              teslimatına kadar operasyonel süreci tek noktadan yönetmenize yardımcı oluyoruz.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              İşletmelerin ihtiyaç duyduğu UK lojistik altyapısını, kendi depo ve ekip yatırımı
              yapmadan kullanmalarını mümkün kılıyoruz.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              İngiltere Lojistinizi Konuşalım
            </a>
          </div>

          <div className="mt-12 lg:mt-0">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
              Destek verdiğimiz süreçler:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
