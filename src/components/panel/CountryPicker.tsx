"use client";
import { useState } from "react";
import CopyButton from "@/components/panel/CopyButton";
import { COUNTRY_INFO, RECOMMENDED_COUNTRIES, shuffleTarget } from "@/lib/panel/wizard";

const TIERS = [
  { tier: "P1", label: "P1 · İlk satış dalgası", cls: "bg-green-100 text-green-800" },
  { tier: "P2", label: "P2 · İkinci dalga", cls: "bg-amber-100 text-amber-800" },
  { tier: "P3", label: "P3 · Seçici hedefleme", cls: "bg-slate-100 text-slate-700" },
] as const;

/** Country checkboxes grouped by priority, with "recommended 10 / all / clear" shortcuts and a live count. */
export default function CountryPicker({ initial }: { initial: string[] }) {
  const all = COUNTRY_INFO.map((c) => c.name);
  const [sel, setSel] = useState<string[]>(initial.filter((c) => all.includes(c)));
  const toggle = (n: string) => setSel((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));
  const ordered = all.filter((n) => sel.includes(n));
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-sm font-semibold mr-1">{sel.length} / {all.length} seçili</span>
        <button type="button" onClick={() => setSel([...RECOMMENDED_COUNTRIES])} className="pnl-btn-primary !py-1.5 !px-3 text-xs">Önerilen 10</button>
        <button type="button" onClick={() => setSel(shuffleTarget([]).countries)} className="pnl-btn !py-1.5 !px-3 text-xs" title="6 P1 + 3 P2 + 1 P3 ülke, yüksek skorlular daha sık">Karıştır 🎲</button>
        <button type="button" onClick={() => setSel(all)} className="pnl-btn !py-1.5 !px-3 text-xs">Tümünü seç</button>
        <button type="button" onClick={() => setSel([])} className="pnl-btn-ghost !py-1.5 !px-3 text-xs">Temizle</button>
      </div>
      <div className="grid gap-4">
        {TIERS.map(({ tier, label, cls }) => (
          <div key={tier}>
            <div className="text-xs font-semibold text-[var(--pnl-muted)] mb-1.5">{label}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {COUNTRY_INFO.filter((c) => c.tier === tier).map((c) => (
                <label key={c.name} className={`flex items-start gap-2 rounded-2xl border px-3 py-2 text-sm cursor-pointer ${sel.includes(c.name) ? "border-[var(--pnl-primary)] bg-[var(--pnl-primary-soft)]" : "border-[var(--pnl-line-strong)] bg-white"}`}>
                  <input type="checkbox" name="c" value={c.name} checked={sel.includes(c.name)} onChange={() => toggle(c.name)} className="mt-1" />
                  <span className="min-w-0">
                    <span className="font-semibold">{c.flag} {c.name}</span> <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[11px] font-bold ${cls}`}>{c.score}</span>
                    <span className="block text-xs text-[var(--pnl-muted)]">{c.products}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <CopyButton value={ordered.join(", ")} label={`Seçili ülkeleri kopyala (${ordered.length})`} />
      </div>
      <p className="text-xs text-[var(--pnl-muted)] mt-2">Skorlar LondraDepo için stratejik tahmindir (ithalat büyüklüğü %25, depo/fulfilment ihtiyacı %35, müşteri erişimi %25, operasyonel uygunluk %15); gerçekleşmiş satış verisi değildir. Seçilen ülkeler, &quot;Diğer ülkeler&quot; bölgesinde aranan segmentler için kullanılır; görev metnine her ülkenin olası ürünleri ve hariç tutma kuralları eklenir.</p>
    </div>
  );
}
