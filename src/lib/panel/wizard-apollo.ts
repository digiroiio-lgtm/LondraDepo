import "server-only";
import { apolloConfigured, createContact, createTask } from "@/lib/panel/apollo";
import { segmentById, type Lead, type Tier } from "@/lib/panel/wizard";
import { getLead, updateLead } from "@/lib/panel/wizard-store";

/** Due date N working days from now at 09:00 UTC. */
export function workdaysFromNow(n: number): string {
  const d = new Date();
  let left = n;
  while (left > 0) {
    d.setUTCDate(d.getUTCDate() + 1);
    if (![0, 6].includes(d.getUTCDay())) left--;
  }
  d.setUTCHours(9, 0, 0, 0);
  return d.toISOString();
}

/** First contact by tier: A next working day, B in 3, C in 7. */
export const dueForTier = (tier: Tier) => workdaysFromNow(tier === "A" ? 1 : tier === "B" ? 3 : 7);

function leadNote(l: Lead, title: string, extra?: string): string {
  const seg = segmentById(l.segment);
  return [
    `${title} · Öncelik ${l.tier} (${l.priority}/100)`,
    seg && `Segment: ${seg.label}`,
    l.decision_maker_title && `Karar verici: ${l.decision_maker_title}`,
    seg && `Satış açısı: ${seg.angle}`,
    l.revenue && `Tahmini depolama: ~£${l.revenue}/ay (KDV hariç)`,
    l.reason && `Neden: ${l.reason}`,
    extra,
  ].filter(Boolean).join("\n").slice(0, 1500);
}

/**
 * Pushes wizard leads to Apollo (no credits used): creates the contact when it is not there yet,
 * then a task. `task` sets the task title, due date and an extra note line (used for form follow-ups).
 */
export async function pushLeadsToApollo(
  domains: string[],
  task?: (l: Lead) => { title: string; due: string; extra?: string },
): Promise<{ ok: number; fails: string[]; done: string[] }> {
  if (!apolloConfigured()) throw new Error("Apollo bağlı değil: APOLLO_API_KEY ekleyin");
  let ok = 0;
  const fails: string[] = [];
  const done: string[] = [];
  for (const d of domains.slice(0, 25)) {
    const l = await getLead(d);
    if (!l) { fails.push(`${d}: listede yok`); continue; }
    if (l.apollo_contact_id && !task) continue;
    try {
      let contactId = l.apollo_contact_id && l.apollo_contact_id !== "?" ? l.apollo_contact_id : "";
      if (!contactId) {
        const seg = segmentById(l.segment);
        const [first, ...rest] = l.contact_name.split(/\s+/).filter(Boolean);
        const c = await createContact({
          first_name: first || "İletişim",
          last_name: rest.join(" ") || l.company,
          organization_name: l.company,
          title: l.contact_title || l.decision_maker_title || undefined,
          email: l.email || undefined,
          website_url: l.website || undefined,
          linkedin_url: l.linkedin_url || undefined,
          label_names: ["Müşteri sihirbazı", `Sihirbaz – ${seg?.label ?? "segmentsiz"}`, `Öncelik ${l.tier}`],
        });
        contactId = c?.id ?? "";
      }
      const tk = task?.(l) ?? { title: "İlk e-posta", due: dueForTier(l.tier) };
      if (contactId) await createTask({ contact_id: contactId, due_at: tk.due, note: leadNote(l, tk.title, tk.extra) });
      await updateLead(d, { status: l.status === "yeni" ? "apollo" : l.status, apollo_contact_id: contactId || "?" });
      ok++;
      done.push(d);
    } catch (e) {
      fails.push(`${l.company}: ${e instanceof Error ? e.message : "hata"}`);
    }
  }
  return { ok, fails, done };
}
