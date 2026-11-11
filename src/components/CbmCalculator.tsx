"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { trackCtaClick, trackFormStart, trackWhatsappClick } from "@/lib/gtag";

/**
 * Carton → CBM, weight, estimated pallets and container fill. Planning estimate only.
 * Assumptions (shown on the page): pallet base 0.15 m high, 85% of the pallet's cube is usable,
 * container internal volumes are typical nominal figures; real loads depend on carton fit.
 */
const PALLET_BASE_M = 0.15;
const PALLET_FILL = 0.85;
const RATE_GBP = 3.5;
const PALLETS = { uk: { l: 1.2, w: 1.0 }, euro: { l: 1.2, w: 0.8 } } as const;
const CONTAINERS = [
  { key: "20ft", m3: 33 },
  { key: "40ft", m3: 67 },
  { key: "40ft HC", m3: 76 },
] as const;

const TEXT = {
  en: {
    l: "Carton length (cm)", w: "Carton width (cm)", h: "Carton height (cm)", qty: "Number of cartons", kg: "Weight per carton (kg, optional)",
    pallet: "Pallet type", uk: "UK standard 1200 × 1000 mm", euro: "Euro 1200 × 800 mm",
    height: "Maximum pallet height incl. pallet", amazonNote: "1.8 m is the typical cap for Amazon UK fulfilment centres.",
    cbm: "Total volume", weight: "Total weight", pallets: "Estimated pallets", perPallet: "Average weight per pallet",
    heavy: "Above the usual 1,000 kg per pallet: split the load.", containers: "Share of a container's internal volume",
    storage: "Pallet storage from", perWeek: "per week + VAT",
    note: "Planning estimate, not a quote. Assumes a 15 cm pallet base and 85% of each pallet's cube used; typical internal container volumes of about 33, 67 and 76 m³. Real figures depend on how cartons fit and stack.",
    cta: "Get a quote for this shipment", wa: "Send these figures on WhatsApp",
    waText: (c: number, cbm: string, p: number) => `Hello, I'd like a UK warehousing quote: ${c} cartons, ${cbm} m³, about ${p} pallets.`,
    locale: "en-GB", source: "cbm_calculator_en",
  },
  tr: {
    l: "Koli uzunluğu (cm)", w: "Koli genişliği (cm)", h: "Koli yüksekliği (cm)", qty: "Koli sayısı", kg: "Koli başına ağırlık (kg, isteğe bağlı)",
    pallet: "Palet tipi", uk: "UK standart 1200 × 1000 mm", euro: "Euro 1200 × 800 mm",
    height: "Palet dahil en fazla yükseklik", amazonNote: "Amazon UK depoları için tipik sınır 1,8 m'dir.",
    cbm: "Toplam hacim", weight: "Toplam ağırlık", pallets: "Tahmini palet sayısı", perPallet: "Palet başına ortalama ağırlık",
    heavy: "Palet başına genel 1.000 kg sınırının üzerinde: yükü bölün.", containers: "Konteyner iç hacminin kullanılan oranı",
    storage: "Palet depolama", perWeek: "haftalık + KDV'den",
    note: "Planlama tahminidir, teklif değildir. 15 cm palet tabanı ve her paletin hacminin %85'inin kullanıldığı varsayılır; tipik konteyner iç hacmi yaklaşık 33, 67 ve 76 m³'tür. Gerçek sonuç kolilerin yerleşimine ve istiflenmesine bağlıdır.",
    cta: "Bu sevkiyat için teklif iste", wa: "Rakamları WhatsApp'tan gönder",
    waText: (c: number, cbm: string, p: number) => `Merhaba, İngiltere depo teklifi almak istiyorum: ${c} koli, ${cbm} m³, yaklaşık ${p} palet.`,
    locale: "tr-TR", source: "cbm_calculator_tr",
  },
} as const;

function num(v: string, min: number, max: number) {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min;
}

export default function CbmCalculator({ lang = "en" }: { lang?: "en" | "tr" }) {
  const t = TEXT[lang];
  const [l, setL] = useState(60);
  const [w, setW] = useState(40);
  const [h, setH] = useState(40);
  const [qty, setQty] = useState(100);
  const [kg, setKg] = useState(12);
  const [pallet, setPallet] = useState<"uk" | "euro">("uk");
  const [maxH, setMaxH] = useState(1.8);
  const used = useRef(false);
  const mark = () => {
    if (!used.current) { used.current = true; trackFormStart(t.source); }
  };

  const fmt = useMemo(() => new Intl.NumberFormat(t.locale, { maximumFractionDigits: 2 }), [t.locale]);
  const gbp = useMemo(() => new Intl.NumberFormat(t.locale, { style: "currency", currency: "GBP" }), [t.locale]);

  const cbm = (l / 100) * (w / 100) * (h / 100) * qty;
  const p = PALLETS[pallet];
  const perPalletM3 = p.l * p.w * Math.max(maxH - PALLET_BASE_M, 0.1) * PALLET_FILL;
  const pallets = Math.max(1, Math.ceil(cbm / perPalletM3));
  const weight = kg * qty;
  const perPalletKg = weight / pallets;

  const quoteHref = lang === "en" ? `/en/request-a-quote?service=storage&pallets=${pallets}&from=%2Fen%2Fcbm-pallet-calculator` : "#teklif";
  const waHref = `https://wa.me/447554195190?text=${encodeURIComponent(t.waText(qty, fmt.format(cbm), pallets))}`;
  const input = "w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b2545]";

  const field = (id: string, label: string, value: number, set: (n: number) => void, min: number, max: number) => (
    <div>
      <label htmlFor={`cbm-${id}-${lang}`} className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      <input id={`cbm-${id}-${lang}`} type="number" inputMode="decimal" min={min} max={max} value={value}
        onChange={(e) => { mark(); set(num(e.target.value, min, max)); }} className={input} />
    </div>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {field("l", t.l, l, setL, 1, 300)}
          {field("w", t.w, w, setW, 1, 300)}
          {field("h", t.h, h, setH, 1, 300)}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {field("qty", t.qty, qty, (n) => setQty(Math.round(n)), 1, 100000)}
          {field("kg", t.kg, kg, setKg, 0, 1000)}
        </div>
        <fieldset>
          <legend className="block text-sm font-semibold text-slate-700 mb-2">{t.pallet}</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {(["uk", "euro"] as const).map((k) => (
              <label key={k} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                <input type="radio" name={`cbm-pallet-${lang}`} checked={pallet === k} onChange={() => { mark(); setPallet(k); }} className="h-4 w-4" />
                {t[k]}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor={`cbm-maxh-${lang}`} className="block text-sm font-semibold text-slate-700 mb-1.5">{t.height}</label>
          <select id={`cbm-maxh-${lang}`} value={maxH} onChange={(e) => { mark(); setMaxH(Number(e.target.value)); }} className={input}>
            {[1.2, 1.5, 1.8].map((v) => <option key={v} value={v}>{fmt.format(v)} m</option>)}
          </select>
          <p className="text-xs text-slate-500 mt-1">{t.amazonNote}</p>
        </div>
      </div>

      <div className="rounded-xl bg-[#0b2545] text-white p-6 flex flex-col" aria-live="polite">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4"><dt className="text-white/75">{t.cbm}</dt><dd className="text-2xl font-extrabold">{fmt.format(cbm)} m³</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-white/75">{t.pallets}</dt><dd className="text-2xl font-extrabold">{pallets}</dd></div>
          {weight > 0 && (
            <>
              <div className="flex justify-between gap-4"><dt className="text-white/75">{t.weight}</dt><dd className="font-semibold">{fmt.format(weight)} kg</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-white/75">{t.perPallet}</dt><dd className="font-semibold">{fmt.format(Math.round(perPalletKg))} kg</dd></div>
              {perPalletKg > 1000 && <p className="rounded-lg bg-amber-100 text-amber-900 px-3 py-2 text-xs">{t.heavy}</p>}
            </>
          )}
        </dl>
        <p className="mt-4 text-sm font-semibold">{t.containers}</p>
        <ul className="mt-2 space-y-2 text-sm">
          {CONTAINERS.map((c) => {
            const pct = (cbm / c.m3) * 100;
            return (
              <li key={c.key}>
                <div className="flex justify-between"><span className="text-white/75">{c.key} (~{c.m3} m³)</span><span className="font-semibold">{fmt.format(Math.round(pct))}%</span></div>
                <div className="h-2 rounded bg-white/20 mt-1" aria-hidden="true"><div className={`h-2 rounded ${pct > 100 ? "bg-amber-300" : "bg-green-400"}`} style={{ width: `${Math.min(pct, 100)}%` }} /></div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-sm text-white/85">{t.storage} {gbp.format(pallets * RATE_GBP)} {t.perWeek}</p>
        <p className="mt-3 text-xs text-white/70">{t.note}</p>
        <div className="mt-auto pt-6 flex flex-col gap-3">
          <Link href={quoteHref} data-tracked="1" onClick={() => trackCtaClick(quoteHref, t.source)} className="text-center bg-[#d62839] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">{t.cta}</Link>
          <a href={waHref} target="_blank" rel="noopener noreferrer" data-tracked="1" onClick={() => trackWhatsappClick(t.source)} className="text-center bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition">{t.wa}</a>
        </div>
      </div>
    </div>
  );
}
