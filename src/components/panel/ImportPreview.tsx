"use client";
import { useMemo, useState } from "react";
import { IMPORT_KINDS, importDecision, type ImportKind } from "@/lib/panel/outreach";
import { FORM_STATUSES, LOG_COLUMNS, toContact, type Contact } from "@/lib/panel/webcontact";
import { parseAgentOutput } from "@/lib/panel/wizard";

const KIND_CLASS: Record<ImportKind, string> = {
  new: "bg-green-100 text-green-800",
  update: "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]",
  contacted: "bg-slate-100 text-slate-600",
  review: "bg-amber-100 text-amber-800",
};

/**
 * The CSV box of the import form, with a live preview of what each row will do before anything is saved:
 * new, updated (earlier failed attempt), already contacted (skipped) or needs review.
 */
export default function ImportPreview({ existing, leadStatus }: { existing: Contact[]; leadStatus: Record<string, string> }) {
  const [raw, setRaw] = useState("");
  const byDomain = useMemo(() => new Map(existing.map((c) => [c.domain, c])), [existing]);
  const preview = useMemo(() => {
    if (raw.trim().length < 20) return null;
    const { records, error } = parseAgentOutput(raw);
    if (error) return { error, rows: [] as { company: string; domain: string; status: string; kind: ImportKind; why: string }[] };
    const at = new Date().toISOString();
    const seen = new Set<string>();
    const rows = records.slice(0, 300).map((rec) => {
      const c = toContact(rec, "preview", at);
      if ("error" in c) return { company: rec.company ?? "?", domain: "", status: "", kind: "review" as ImportKind, why: `Okunamadı: ${c.error}` };
      if (seen.has(c.domain)) return { company: c.company, domain: c.domain, status: FORM_STATUSES[c.form_status], kind: "contacted" as ImportKind, why: "Aynı yüklemede tekrar" };
      seen.add(c.domain);
      const d = importDecision(byDomain.get(c.domain), c, leadStatus[c.domain]);
      return { company: c.company, domain: c.domain, status: FORM_STATUSES[c.form_status], ...{ kind: d.kind, why: d.why } };
    });
    return { error: "", rows };
  }, [raw, byDomain, leadStatus]);

  const counts = preview ? (Object.keys(IMPORT_KINDS) as ImportKind[]).map((k) => [k, preview.rows.filter((r) => r.kind === k).length] as const) : [];
  return (
    <div className="grid gap-3">
      <label className="text-sm">Ajanın verdiği CSV
        <textarea name="data" required rows={8} value={raw} onChange={(e) => setRaw(e.target.value)} className="pnl-input font-mono text-xs" placeholder={LOG_COLUMNS.join(",")} />
      </label>
      {preview?.error && <p className="text-sm text-red-700">{preview.error}</p>}
      {preview && !preview.error && (
        <div className="rounded-2xl border border-[var(--pnl-line-strong)] p-3">
          <p className="text-sm font-semibold mb-2">İçe aktarma önizlemesi · {preview.rows.length} satır</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {counts.map(([k, n]) => <span key={k} className={`rounded-full px-2.5 py-0.5 text-xs ${KIND_CLASS[k]}`}>{IMPORT_KINDS[k]}: {n}</span>)}
          </div>
          <div className="overflow-x-auto">
            <table className="pnl-table text-xs">
              <thead><tr><th>Şirket</th><th>Ajanın sonucu</th><th>Ne olacak</th><th>Neden</th></tr></thead>
              <tbody>
                {preview.rows.map((r, i) => (
                  <tr key={`${r.domain}-${i}`}>
                    <td className="min-w-[9rem]">{r.company}<div className="text-[var(--pnl-muted)]">{r.domain}</div></td>
                    <td className="min-w-[7rem]">{r.status}</td>
                    <td><span className={`whitespace-nowrap rounded-full px-2 py-0.5 ${KIND_CLASS[r.kind]}`}>{IMPORT_KINDS[r.kind]}</span></td>
                    <td className="min-w-[12rem]">{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
