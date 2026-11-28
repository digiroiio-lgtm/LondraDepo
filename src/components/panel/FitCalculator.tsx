"use client";

import { useState } from "react";
import { OPPORTUNITY_CRITERIA, opportunityFrom, type OpportunityId } from "@/lib/panel/wizard";

const GRADE_TEXT = { A: "Güçlü aday", B: "Potansiyel aday", C: "Zayıf aday" } as const;

/** Manual Company Opportunity Score: tick what you know about a company (e.g. during a call). */
export default function FitCalculator() {
  const [met, setMet] = useState<Set<OpportunityId>>(new Set());
  const { score, grade } = opportunityFrom(met);
  const toggle = (id: OpportunityId) =>
    setMet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-start">
      <ul className="grid gap-2">
        {OPPORTUNITY_CRITERIA.map((c) => (
          <li key={c.id}>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input type="checkbox" checked={met.has(c.id)} onChange={() => toggle(c.id)} className="h-4 w-4" />
              <span className="flex-1">{c.label}</span>
              <span className="text-xs font-semibold text-slate-500">+{c.points}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-slate-200 p-4 text-center min-w-[10rem]" aria-live="polite">
        <div className="text-xs text-slate-500">Fırsat skoru</div>
        <div className="text-3xl font-extrabold">{score}<span className="text-base text-slate-400">/100</span></div>
        <div className="text-sm font-semibold mt-1">{grade} · {GRADE_TEXT[grade]}</div>
      </div>
    </div>
  );
}
