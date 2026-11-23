import type { ReactNode } from "react";
import { CATEGORIES, COUNTRIES, REGIONS, SEGMENTS, SIZES, type Target } from "@/lib/panel/wizard";

const input = "pnl-input";
const TIER_CLASS = { A: "bg-green-100 text-green-800", B: "bg-amber-100 text-amber-800", C: "bg-slate-100 text-slate-700" };

/**
 * Step-1 targeting form shared by the customer wizard and the WebContact wizard (GET form, so the
 * choice stays in the URL). `hidden` adds the caller's own fields; `count` replaces the default
 * "how many companies" select.
 */
export default function TargetForm({ t, hidden, count, submitLabel = "Görev metnini oluştur" }: { t: Target; hidden?: ReactNode; count?: ReactNode; submitLabel?: string }) {
  return (
    <form method="get" className="grid gap-4">
      {hidden}
      <fieldset>
        <legend className="text-sm font-semibold mb-2">Segment (ticari öncelik sırasıyla; birden fazla seçilebilir)</legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {SEGMENTS.map((s) => (
            <label key={s.id} className={`flex items-start gap-2 pnl-card p-3 text-sm !shadow-none ${s.low ? "opacity-70" : ""}`}>
              <input type="checkbox" name="s" value={s.id} defaultChecked={t.segments.includes(s.id)} className="mt-1" />
              <span>
                <span className="font-semibold">{s.label}</span> <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-bold ${s.prior >= 90 ? TIER_CLASS.A : s.prior >= 80 ? TIER_CLASS.B : TIER_CLASS.C}`}>{s.prior}</span>
                <span className="block text-xs text-slate-500">{s.services} · Potansiyel: {s.potential}{s.low ? " · düşük öncelik" : ""}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold mb-2">Ürün kategorisi (isteğe bağlı)</legend>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {CATEGORIES.map((c) => <label key={c.id} className="flex items-center gap-2"><input type="checkbox" name="k" value={c.id} defaultChecked={t.cats.includes(c.id)} /> {c.label}</label>)}
        </div>
        <label className="text-sm block mt-3">Başka kategori (serbest metin)<input name="other" defaultValue={t.other} placeholder="Örn. bahçe mobilyası, oyuncak" className={input} /></label>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold mb-2">Bölge</legend>
        <div className="flex flex-wrap gap-4 text-sm">
          {Object.entries(REGIONS).map(([k, v]) => <label key={k} className="flex items-center gap-2"><input type="radio" name="region" value={k} defaultChecked={t.region === k} /> {v}</label>)}
        </div>
        <p className="text-xs text-slate-500 mt-1">&quot;Segmente göre&quot;: Türk ihracatçılar Türkiye&apos;de, UK ithalatçılar ve sezonluk perakendeciler İngiltere&apos;de, yeni giren markalar diğer ülkelerde aranır.</p>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold mb-2">Ülkeler (diğer ülkeler için)</legend>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {COUNTRIES.map((c) => <label key={c} className="flex items-center gap-2"><input type="checkbox" name="c" value={c} defaultChecked={t.countries.includes(c)} /> {c}</label>)}
        </div>
        <label className="text-sm block mt-3">Başka ülke (virgülle)<input name="cx" defaultValue={t.countries.filter((c) => !(COUNTRIES as readonly string[]).includes(c)).join(", ")} className={input} /></label>
      </fieldset>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-sm">Şirket büyüklüğü
          <select name="size" defaultValue={t.size} className={input}>{Object.entries(SIZES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}</select>
        </label>
        {count ?? (
          <label className="text-sm">Kaç şirket
            <select name="n" defaultValue={String(t.count)} className={input}>{[25, 50, 100].map((n) => <option key={n} value={n}>{n}</option>)}</select>
          </label>
        )}
      </div>
      <label className="text-sm">Hariç tutulacak alan adları (mevcut müşteriler; boşluk veya virgülle)
        <textarea name="ex" defaultValue={t.exclude.join(", ")} rows={2} className={input} placeholder="ornekfirma.com, digerfirma.com.tr" />
        <span className="text-xs text-slate-500">Listede zaten olan şirketler otomatik olarak hariç tutulur.</span>
      </label>
      <div><button className="pnl-btn-primary">{submitLabel}</button></div>
    </form>
  );
}
