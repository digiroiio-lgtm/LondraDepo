"use client";

import { useState } from "react";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const faqs = [
  {
    q: "İngiltere'de depo hizmetiniz hangi firmalar için uygun?",
    a: "Türkiye'den İngiltere'ye ihracat yapan markalar, e-ticaret satıcıları, toptancılar, gıda üreticileri ve ithalatçılar için uygundur.",
  },
  {
    q: "İngiltere fulfillment hizmeti veriyor musunuz?",
    a: "Evet. Sipariş hazırlama, paketleme ve sevk süreçlerine uygun fulfillment desteği sunuyoruz.",
  },
  {
    q: "Paletli ürün kabul ediyor musunuz?",
    a: "Evet. İngiltere palet depolama ihtiyacı olan işletmelere uygun çözümler sağlıyoruz.",
  },
  {
    q: "Amazon, Etsy ve Shopify satıcıları için uygun musunuz?",
    a: "Evet. İngiltere Amazon prep, sipariş hazırlama ve dağıtım operasyonlarına uygun yapı sunuyoruz.",
  },
  {
    q: "Ürünler Türkiye'den İngiltere'ye geldikten sonra ne oluyor?",
    a: "Ürünleriniz teslim alınır, kontrol edilir, depolanır ve planlanan dağıtım sürecine alınır.",
  },
  {
    q: "Sadece depo mu, dağıtım da sağlıyor musunuz?",
    a: "Depolama ile birlikte dağıtım hazırlığı ve operasyon desteği de sunuyoruz.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            Sık Sorulan Sorular
          </h2>
          <p className="text-slate-600">
            İngiltere depo ve fulfillment hizmetimiz hakkında merak edilenler.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 font-semibold text-[#0b2545] hover:bg-[#f6f8fb] transition"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span
                  className={`flex-shrink-0 text-xl transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
          >
            Daha Fazlası İçin WhatsApp'tan Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
