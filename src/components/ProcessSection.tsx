const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const steps = [
  {
    num: "01",
    title: "İhtiyaç Analizi",
    desc: "Ürün tipinizi, hacminizi ve dağıtım planınızı analiz ediyoruz.",
  },
  {
    num: "02",
    title: "Ürün Kabul Planı",
    desc: "Türkiye'den çıkış ve İngiltere varış sürecinizi birlikte netleştiriyoruz.",
  },
  {
    num: "03",
    title: "Depolama & Yerleşim",
    desc: "Ürünleriniz uygun alanlarda güvenle depolanıyor.",
  },
  {
    num: "04",
    title: "Sipariş / Dağıtım Operasyonu",
    desc: "Siparişler hazırlanıyor, sevk planı yapılıyor ve yola çıkıyor.",
  },
  {
    num: "05",
    title: "Süreç Takibi",
    desc: "Operasyonunuzu sürdürülebilir şekilde birlikte yönetiyoruz.",
  },
];

export default function ProcessSection() {
  return (
    <section id="surec" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            Süreç Nasıl İşliyor?
          </h2>
          <p className="text-slate-600">
            5 adımda İngiltere depo ve dağıtım operasyonunuzu başlatıyoruz.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-lg shadow-md">
                  {step.num}
                </div>
                <div className="bg-[#f6f8fb] rounded-2xl p-5 flex-1">
                  <h3 className="font-bold text-[#0b2545] text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
          >
            Süreci Başlatmak İçin WhatsApp'tan Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
