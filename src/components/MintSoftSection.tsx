const capabilities = [
  { icon: "📊", label: "Stok görünürlüğü", desc: "Depodaki ürün miktarını anlık takip edin." },
  { icon: "📋", label: "Sipariş yönetimi", desc: "Gelen siparişleri sistemde takip edin." },
  { icon: "⚙️", label: "Fulfillment iş akışı", desc: "Sipariş hazırlama sürecini sistematik yönetin." },
  { icon: "🔍", label: "Pick & pack operasyonu", desc: "Toplama ve paketleme adımlarını takip edin." },
  { icon: "🏷️", label: "Kargo etiketi iş akışı", desc: "Sevkiyat etiketleri oluşturulur ve yönetilir." },
  { icon: "🚚", label: "Sevkiyat yönetimi", desc: "Çıkan siparişlerin kayıtları sistematik tutulur." },
];

export default function MintSoftSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
              Teknoloji Altyapısı
            </p>
            <h2 className="text-3xl font-extrabold text-[#0b2545] mb-5 leading-tight">
              Teknoloji Destekli Depo Yönetimi
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depo operasyonumuz, stok ve fulfillment süreçlerini yönetmek için{" "}
              <strong className="text-[#0b2545]">Mintsoft</strong> depo yönetim yazılımını
              (WMS) kullanmaktadır.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Bu sistem sayesinde stok seviyeleri, sipariş durumları ve fulfillment süreçleri
              kayıt altına alınır ve yönetilir. Mintsoft'un LondraDepo'ya ait olmadığını;
              bir üçüncü taraf yazılım olduğunu belirtmek isteriz.
            </p>
            <div className="bg-[#f6f8fb] border border-slate-200 rounded-2xl p-5">
              <p className="text-sm text-slate-600 italic">
                "Depo operasyonumuz, stok ve fulfillment süreçlerini yönetmek için Mintsoft
                kullanmaktadır."
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-5">
              Sistem kapsamındaki işlevler:
            </h3>
            <div className="space-y-3">
              {capabilities.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 bg-[#f6f8fb] border border-slate-200 rounded-xl p-4"
                >
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <h4 className="font-semibold text-[#0b2545] text-sm mb-0.5">{c.label}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
