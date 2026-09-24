"use client";

import { useState } from "react";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const faqs = [
  {
    q: "Türkiye'den ürünlerimi doğrudan deponuza gönderebilir miyim?",
    a: "Evet. Türkiye'deki tedarikçinizden veya üretim noktanızdan ürünlerinizi depo adresimize gönderebilirsiniz. Ürün kabulü, sayımı ve depoya alınması operasyonumuz tarafından gerçekleştirilir.",
  },
  {
    q: "UK gümrükleme sürecinde destek sağlıyor musunuz?",
    a: "İngiltere'ye yapılan ithalatlarda gümrükleme süreci koordinasyonunda destek sağlıyoruz. Gümrük işlemleri doğası gereği uzman gümrükçüler gerektirdiğinden, bu alanda koordinasyon desteği ve yönlendirme sunuyoruz.",
  },
  {
    q: "Paletli ve kolili ürün kabul ediyor musunuz?",
    a: "Evet. Paletli ve kolili ürünlerin her ikisini de kabul ediyoruz. Kısa ve uzun vadeli depolama seçenekleri mevcuttur.",
  },
  {
    q: "Shopify siparişlerini fulfill edebilir misiniz?",
    a: "Evet. Shopify üzerinden satış yapan işletmeler için fulfillment desteği sunuyoruz. Sipariş sisteminizle koordineli çalışarak ürünleri toplayıp, paketleyip müşterilerinize sevk ediyoruz.",
  },
  {
    q: "Amazon siparişlerini fulfill edebilir misiniz?",
    a: "Evet. Amazon üzerinden satış yapan işletmeler için stok depolama ve sipariş fulfillment desteği sunuyoruz. Amazon FBA hazırlık hizmetimiz de ayrıca mevcuttur.",
  },
  {
    q: "Pick and pack nasıl çalışıyor?",
    a: "Müşteri siparişi alındığında, sipariş depo sistemimuze girer. Depo ekibi ilgili ürünleri stoktan toplar (pick), ardından uygun şekilde paketler (pack), kargo etiketi oluşturulur ve sevk edilir.",
  },
  {
    q: "Sevkiyat öncesi ürünleri etiketleyebilir misiniz?",
    a: "Evet. Sevkiyat öncesi ürün etiketleme ve yeniden etiketleme hizmeti sunuyoruz. Etiketleme gereksinimlerinizi önceden paylaşmanız yeterlidir.",
  },
  {
    q: "Başka bir UK konumundan ürün toplayabilir misiniz?",
    a: "Evet. Başka bir UK konumundan ürün toplama (collection) hizmetimiz bulunmaktadır. Detaylar ve koşullar için bizimle iletişime geçin.",
  },
  {
    q: "Tüm İngiltere'ye dağıtım yapıyor musunuz?",
    a: "Evet. Essex merkezli operasyonumuzdan UK geneline dağıtım koordinasyonu sağlıyoruz. Londra ve çevresi başta olmak üzere İngiltere'nin farklı bölgelerine sevkiyat yapılmaktadır.",
  },
  {
    q: "Stok nasıl yönetiliyor?",
    a: "Depomuz Mintsoft depo yönetim yazılımı (WMS) kullanmaktadır. Bu sistem sayesinde stok seviyeleri, ürün giriş/çıkışları ve sipariş durumları kayıt altında tutulmaktadır.",
  },
  {
    q: "Teklif için ne tür bilgi gerekiyor?",
    a: "Ürün türü, tahmini stok hacmi (palet veya koli sayısı), aylık sipariş tahmini ve ihtiyaç duyduğunuz hizmetler (depolama, fulfillment, dağıtım vb.) yeterlidir. Bu bilgilerle size uygun bir teklif hazırlayabiliriz.",
  },
  {
    q: "Mintsoft nedir ve ne işe yarıyor?",
    a: "Mintsoft, bir depo yönetim yazılımıdır (WMS). Operasyonumuzda stok ve fulfillment süreçlerini yönetmek için bu sistemi kullanıyoruz. Mintsoft, LondraDepo'ya ait değildir; üçüncü taraf bir yazılımdır.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-3">
            SSS
          </p>
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            Sık Sorulan Sorular
          </h2>
          <p className="text-slate-600">
            UK depolama, gümrükleme ve fulfillment hizmetleri hakkında merak edilenler.
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
