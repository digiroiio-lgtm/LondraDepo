"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { trackCtaClick, trackFormStart, trackWhatsappClick } from "@/lib/gtag";

/** Published starting rate. Everything else is quoted per operation and never estimated here. */
const RATE_GBP = 3.5;
const VAT = 0.2;

const TEXT = {
  en: {
    pallets: "Number of standard pallets",
    weeks: "Storage period (weeks)",
    extras: "Other services you need (quoted separately)",
    services: {
      goodsIn: "Goods-in / container unloading",
      pickPack: "Pick and pack (ecommerce orders)",
      amazon: "Amazon FBA prep",
      distribution: "UK distribution",
    },
    weekly: "Weekly storage",
    total: "Storage for the period",
    vat: "VAT (20%)",
    gross: "Total incl. VAT",
    perPallet: "per pallet per week",
    quoted: "Quoted separately for your operation:",
    none: "Storage only. Goods-in, handling and delivery are quoted separately.",
    note: "Starting-price estimate for standard pallets, not a final quote. Pallet size, product type and activity change the total.",
    cta: "Get a full quote with this estimate",
    wa: "Send this estimate on WhatsApp",
    waText: (p: number, w: number, t: string) =>
      `Hello, I'd like a UK warehousing quote: ${p} pallets for ${w} weeks (storage estimate ${t} + VAT).`,
    locale: "en-GB",
    vatWord: "VAT",
  },
  tr: {
    pallets: "Standart palet sayısı",
    weeks: "Depolama süresi (hafta)",
    extras: "İhtiyaç duyduğunuz diğer hizmetler (ayrıca tekliflendirilir)",
    services: {
      goodsIn: "Mal kabul / konteyner boşaltma",
      pickPack: "Pick & pack (e-ticaret siparişleri)",
      amazon: "Amazon FBA hazırlık",
      distribution: "UK dağıtım",
    },
    weekly: "Haftalık depolama",
    total: "Dönem boyunca depolama",
    vat: "KDV (%20)",
    gross: "KDV dahil toplam",
    perPallet: "palet başına haftalık",
    quoted: "Operasyonunuza göre ayrıca tekliflendirilir:",
    none: "Sadece depolama. Mal kabul, elleçleme ve teslimat ayrıca tekliflendirilir.",
    note: "Standart paletler için başlangıç fiyatıyla yapılan tahmindir, kesin teklif değildir. Palet ölçüsü, ürün türü ve işlem hacmi toplamı değiştirir.",
    cta: "Bu tahminle teklif iste",
    wa: "Tahmini WhatsApp'tan gönder",
    waText: (p: number, w: number, t: string) =>
      `Merhaba, İngiltere depo teklifi almak istiyorum: ${p} palet, ${w} hafta (depolama tahmini ${t} + KDV).`,
    locale: "tr-TR",
    vatWord: "KDV",
  },
} as const;

type ServiceKey = keyof (typeof TEXT)["en"]["services"];
const SERVICE_KEYS: ServiceKey[] = ["goodsIn", "pickPack", "amazon", "distribution"];

function clamp(n: number, min: number, max: number) {
  return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : min;
}

export default function CostCalculator({ lang = "en" }: { lang?: "en" | "tr" }) {
  const t = TEXT[lang];
  const [pallets, setPallets] = useState(10);
  const [weeks, setWeeks] = useState(4);
  const [extras, setExtras] = useState<ServiceKey[]>([]);
  const used = useRef(false);

  const gbp = useMemo(
    () => new Intl.NumberFormat(t.locale, { style: "currency", currency: "GBP", minimumFractionDigits: 2 }),
    [t.locale],
  );

  const weekly = pallets * RATE_GBP;
  const total = weekly * weeks;
  const vat = total * VAT;

  const markUsed = () => {
    if (!used.current) {
      used.current = true;
      trackFormStart(`calculator_${lang}`);
    }
  };

  const toggle = (k: ServiceKey) => {
    markUsed();
    setExtras((x) => (x.includes(k) ? x.filter((y) => y !== k) : [...x, k]));
  };

  const summary = `${pallets} ${lang === "en" ? "pallets" : "palet"} × ${weeks} ${lang === "en" ? "weeks" : "hafta"} = ${gbp.format(total)} + ${t.vatWord}`;
  const quoteHref =
    lang === "en"
      ? `/en/request-a-quote?service=${extras.includes("pickPack") ? "fulfilment" : extras.includes("amazon") ? "amazon-prep" : "storage"}&pallets=${pallets}&from=%2Fen%2Fuk-storage-cost-calculator`
      : "#teklif";
  const waHref = `https://wa.me/447554195190?text=${encodeURIComponent(t.waText(pallets, weeks, gbp.format(total)))}`;

  const input = "w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b2545]";

  return (
    <div className="grid gap-6 lg:grid-cols-2 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="space-y-5">
        <div>
          <label htmlFor={`calc-pallets-${lang}`} className="block text-sm font-semibold text-slate-700 mb-1.5">{t.pallets}</label>
          <input
            id={`calc-pallets-${lang}`}
            type="number"
            inputMode="numeric"
            min={1}
            max={2000}
            value={pallets}
            onChange={(e) => { markUsed(); setPallets(clamp(Number(e.target.value), 1, 2000)); }}
            className={input}
          />
        </div>
        <div>
          <label htmlFor={`calc-weeks-${lang}`} className="block text-sm font-semibold text-slate-700 mb-1.5">{t.weeks}</label>
          <input
            id={`calc-weeks-${lang}`}
            type="number"
            inputMode="numeric"
            min={1}
            max={104}
            value={weeks}
            onChange={(e) => { markUsed(); setWeeks(clamp(Number(e.target.value), 1, 104)); }}
            className={input}
          />
        </div>
        <fieldset>
          <legend className="block text-sm font-semibold text-slate-700 mb-2">{t.extras}</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICE_KEYS.map((k) => (
              <label key={k} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                <input type="checkbox" checked={extras.includes(k)} onChange={() => toggle(k)} className="h-4 w-4" />
                {t.services[k]}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="rounded-xl bg-[#0b2545] text-white p-6 flex flex-col" aria-live="polite">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4"><dt className="text-white/70">{t.weekly}</dt><dd className="font-semibold">{gbp.format(weekly)}</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-white/70">{t.total}</dt><dd className="font-semibold">{gbp.format(total)}</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-white/70">{t.vat}</dt><dd className="font-semibold">{gbp.format(vat)}</dd></div>
          <div className="flex justify-between gap-4 border-t border-white/20 pt-3"><dt>{t.gross}</dt><dd className="text-2xl font-extrabold">{gbp.format(total + vat)}</dd></div>
        </dl>
        <p className="mt-2 text-xs text-white/60">{gbp.format(RATE_GBP)} + {t.vatWord} {t.perPallet} · {summary}</p>
        <div className="mt-4 text-sm text-white/80">
          {extras.length ? (
            <>
              <p className="font-semibold">{t.quoted}</p>
              <ul className="list-disc pl-5 mt-1">{extras.map((k) => <li key={k}>{t.services[k]}</li>)}</ul>
            </>
          ) : (
            <p>{t.none}</p>
          )}
        </div>
        <p className="mt-4 text-xs text-white/60">{t.note}</p>
        <div className="mt-auto pt-6 flex flex-col gap-3">
          <Link href={quoteHref} data-tracked="1" onClick={() => trackCtaClick(quoteHref, `calculator_${lang}`)} className="text-center bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">
            {t.cta}
          </Link>
          <a href={waHref} target="_blank" rel="noopener noreferrer" data-tracked="1" onClick={() => trackWhatsappClick(`calculator_${lang}`)} className="text-center bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full transition">
            {t.wa}
          </a>
        </div>
      </div>
    </div>
  );
}
