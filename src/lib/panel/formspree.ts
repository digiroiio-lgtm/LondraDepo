import "server-only";

/** Formspree submissions API (needs an account API key on a plan with API access). */
export const FORMSPREE_FORM = process.env.FORMSPREE_FORM_ID || "xoejvawy";

export function formspreeConfigured(): boolean {
  return Boolean(process.env.FORMSPREE_API_KEY);
}

export type Submission = Record<string, unknown> & { _date?: string };

export async function formspreeSubmissions(limit = 100): Promise<Submission[]> {
  const res = await fetch(`https://formspree.io/api/0/forms/${FORMSPREE_FORM}/submissions?limit=${limit}`, {
    headers: { Authorization: `Bearer ${process.env.FORMSPREE_API_KEY}`, Accept: "application/json" },
    next: { revalidate: 300 },
  });
  const text = await res.text();
  let json: { submissions?: Submission[]; error?: string } = {};
  try { json = JSON.parse(text); } catch { /* non-JSON error page */ }
  if (!res.ok) throw new Error(json.error || `Formspree ${res.status}`);
  return json.submissions ?? [];
}

/** Pick the first present field among several possible names (forms differ between TR, EN and checklist). */
export function field(s: Submission, ...names: string[]): string {
  for (const n of names) {
    const v = s[n];
    if (v !== undefined && v !== null && String(v).trim()) return Array.isArray(v) ? v.join(", ") : String(v);
  }
  return "";
}
