"use client";

import { useState, FormEvent } from "react";

const WA_NUMBER = "447554195190";

const salesChannels = ["Shopify", "Amazon", "Toptan Satış", "Diğer"];
const servicesNeeded = [
  "Depolama",
  "Gümrükleme Koordinasyonu",
  "Yükleme / Boşaltma",
  "Ürün Elleçleme",
  "Pick & Pack",
  "E-Ticaret Fulfillment",
  "Nakliye",
  "Dağıtım",
];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productType: string;
  stockEstimate: string;
  pallets: string;
  monthlyOrders: string;
  channels: string[];
  services: string[];
  message: string;
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    productType: "",
    stockEstimate: "",
    pallets: "",
    monthlyOrders: "",
    channels: [],
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function handleText(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  function toggleCheck(field: "channels" | "services", value: string) {
    setForm((f) => {
      const arr = f[field] as string[];
      return {
        ...f,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Ad Soyad zorunludur.";
    if (!form.email.trim()) e.email = "E-posta zorunludur.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Geçerli bir e-posta girin.";
    if (!form.phone.trim()) e.phone = "Telefon / WhatsApp zorunludur.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    const lines = [
      "🏭 *YENİ TEKLİF TALEBİ — LondraDepo.com*",
      "",
      `👤 Ad Soyad: ${form.name}`,
      form.company ? `🏢 Şirket: ${form.company}` : "",
      `📧 E-posta: ${form.email}`,
      `📱 Telefon/WA: ${form.phone}`,
      form.country ? `🌍 Ülke: ${form.country}` : "",
      "",
      form.productType ? `📦 Ürün Türü: ${form.productType}` : "",
      form.stockEstimate ? `📊 Tahmini Stok: ${form.stockEstimate}` : "",
      form.pallets ? `🔢 Palet/Koli Sayısı: ${form.pallets}` : "",
      form.monthlyOrders ? `🛒 Aylık Sipariş: ${form.monthlyOrders}` : "",
      form.channels.length ? `📲 Satış Kanalı: ${form.channels.join(", ")}` : "",
      form.services.length ? `⚙️ İhtiyaç Duyulan Hizmetler: ${form.services.join(", ")}` : "",
      "",
      form.message ? `💬 Mesaj: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent transition";
  const errorCls = "text-red-500 text-xs mt-1";
  const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";

  return (
    <section id="teklif" className="py-20 px-4 bg-[#0b2545]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Teklif Talebi
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">Teklifinizi Talep Edin</h2>
          <p className="text-slate-300 leading-relaxed">
            Formu doldurun, ekibimiz ihtiyaçlarınıza uygun bir teklif hazırlasın.
            Zorunlu alanlar dışındakileri boş bırakabilirsiniz.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-3xl p-6 sm:p-10 space-y-6"
        >
          {/* Row: Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qf-name" className={labelCls}>
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                id="qf-name"
                type="text"
                autoComplete="name"
                placeholder="Adınız Soyadınız"
                className={inputCls}
                value={form.name}
                onChange={(e) => handleText("name", e.target.value)}
              />
              {errors.name && <p className={errorCls}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="qf-company" className={labelCls}>
                Şirket
              </label>
              <input
                id="qf-company"
                type="text"
                autoComplete="organization"
                placeholder="Şirket adı"
                className={inputCls}
                value={form.company}
                onChange={(e) => handleText("company", e.target.value)}
              />
            </div>
          </div>

          {/* Row: Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qf-email" className={labelCls}>
                E-posta <span className="text-red-500">*</span>
              </label>
              <input
                id="qf-email"
                type="email"
                autoComplete="email"
                placeholder="isim@sirket.com"
                className={inputCls}
                value={form.email}
                onChange={(e) => handleText("email", e.target.value)}
              />
              {errors.email && <p className={errorCls}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="qf-phone" className={labelCls}>
                Telefon / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="qf-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+90 555 000 00 00"
                className={inputCls}
                value={form.phone}
                onChange={(e) => handleText("phone", e.target.value)}
              />
              {errors.phone && <p className={errorCls}>{errors.phone}</p>}
            </div>
          </div>

          {/* Row: Country + Product Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qf-country" className={labelCls}>
                Ülke
              </label>
              <input
                id="qf-country"
                type="text"
                placeholder="Türkiye"
                className={inputCls}
                value={form.country}
                onChange={(e) => handleText("country", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="qf-product" className={labelCls}>
                Ürün Türü
              </label>
              <input
                id="qf-product"
                type="text"
                placeholder="Tekstil, elektronik, gıda vb."
                className={inputCls}
                value={form.productType}
                onChange={(e) => handleText("productType", e.target.value)}
              />
            </div>
          </div>

          {/* Row: Stock + Pallets + Monthly Orders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="qf-stock" className={labelCls}>
                Tahmini Stok Miktarı
              </label>
              <input
                id="qf-stock"
                type="text"
                placeholder="500 koli, 20 palet vb."
                className={inputCls}
                value={form.stockEstimate}
                onChange={(e) => handleText("stockEstimate", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="qf-pallets" className={labelCls}>
                Palet / Koli Sayısı
              </label>
              <input
                id="qf-pallets"
                type="text"
                placeholder="10 palet"
                className={inputCls}
                value={form.pallets}
                onChange={(e) => handleText("pallets", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="qf-orders" className={labelCls}>
                Tahmini Aylık Sipariş
              </label>
              <input
                id="qf-orders"
                type="text"
                placeholder="200 sipariş/ay"
                className={inputCls}
                value={form.monthlyOrders}
                onChange={(e) => handleText("monthlyOrders", e.target.value)}
              />
            </div>
          </div>

          {/* Sales channels */}
          <div>
            <p className={labelCls}>Satış Kanalı</p>
            <div className="flex flex-wrap gap-3">
              {salesChannels.map((ch) => (
                <label
                  key={ch}
                  className={`flex items-center gap-2 cursor-pointer border rounded-full px-4 py-2 text-sm font-medium transition select-none ${
                    form.channels.includes(ch)
                      ? "bg-[#0b2545] border-[#0b2545] text-white"
                      : "border-slate-300 text-slate-600 hover:border-[#0b2545] hover:text-[#0b2545]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={form.channels.includes(ch)}
                    onChange={() => toggleCheck("channels", ch)}
                  />
                  {ch}
                </label>
              ))}
            </div>
          </div>

          {/* Services needed */}
          <div>
            <p className={labelCls}>İhtiyaç Duyulan Hizmetler</p>
            <div className="flex flex-wrap gap-3">
              {servicesNeeded.map((s) => (
                <label
                  key={s}
                  className={`flex items-center gap-2 cursor-pointer border rounded-full px-4 py-2 text-sm font-medium transition select-none ${
                    form.services.includes(s)
                      ? "bg-[#e63946] border-[#e63946] text-white"
                      : "border-slate-300 text-slate-600 hover:border-[#e63946] hover:text-[#e63946]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={form.services.includes(s)}
                    onChange={() => toggleCheck("services", s)}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="qf-message" className={labelCls}>
              Mesaj
            </label>
            <textarea
              id="qf-message"
              rows={4}
              placeholder="Operasyonunuz veya ihtiyaçlarınız hakkında ek bilgi paylaşabilirsiniz."
              className={`${inputCls} resize-none`}
              value={form.message}
              onChange={(e) => handleText("message", e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e63946] hover:bg-[#c1121f] text-white font-extrabold py-4 rounded-full text-base transition shadow-lg"
          >
            Teklifimi İste →
          </button>

          <p className="text-center text-xs text-slate-400">
            Formu göndererek WhatsApp üzerinden ekibimizle iletişime geçmiş olursunuz.
          </p>
        </form>
      </div>
    </section>
  );
}
