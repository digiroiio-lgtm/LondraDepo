"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apolloConfigured, createContact, createTask } from "@/lib/panel/apollo";
import { STATUSES, parseAgentOutput, segmentById, targetFrom, toLead, type Lead, type Status, type Tier } from "@/lib/panel/wizard";
import { addRun, getLead, saveLeads, setStatus, updateLead } from "@/lib/panel/wizard-store";

const back = (msg: string, anchor = "liste") => {
  revalidatePath("/panel/sihirbaz");
  redirect(`/panel/sihirbaz?m=${encodeURIComponent(msg)}#${anchor}`);
};

export async function importLeads(f: FormData) {
  let msg: string;
  try {
    const raw = String(f.get("data") ?? "").slice(0, 1_000_000);
    const t = targetFrom((k) => (["s", "c", "k"].includes(k) ? (f.getAll(k) as string[]) : (f.get(k) as string | undefined) ?? undefined));
    const { records, error } = parseAgentOutput(raw);
    if (error) throw new Error(error);
    const runId = `r${Date.now().toString(36)}`;
    const at = new Date().toISOString();
    const leads: Lead[] = [];
    const errors: string[] = [];
    for (const rec of records.slice(0, 300)) {
      const l = toLead(rec, t, runId, at);
      if ("error" in l) errors.push(l.error);
      else leads.push(l);
    }
    const { added, duplicates } = await saveLeads(leads);
    await addRun({ id: runId, at, region: t.region, sectors: t.segments, countries: t.countries, added, duplicates, errors: errors.length });
    msg = `ok:${added} yeni şirket eklendi, ${duplicates} tekrar atlandı${errors.length ? `, ${errors.length} satır okunamadı (${errors.slice(0, 3).join("; ")})` : ""}.`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}

export async function changeStatus(f: FormData) {
  const status = String(f.get("status")) as Status;
  let msg = "ok:Durum güncellendi.";
  try {
    if (!(status in STATUSES)) throw new Error("Geçersiz durum");
    await setStatus(String(f.get("d")), status);
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}

/** First contact due date by tier: A next working day, B in 3 working days, C in 7. */
function dueFor(tier: Tier): string {
  const d = new Date();
  let left = tier === "A" ? 1 : tier === "B" ? 3 : 7;
  while (left > 0) {
    d.setUTCDate(d.getUTCDate() + 1);
    if (![0, 6].includes(d.getUTCDay())) left--;
  }
  d.setUTCHours(9, 0, 0, 0);
  return d.toISOString();
}

/** Creates an Apollo contact plus a follow-up task for each selected lead (no Apollo credits used). */
export async function pushToApollo(f: FormData) {
  let msg: string;
  try {
    if (!apolloConfigured()) throw new Error("Apollo bağlı değil: APOLLO_API_KEY ekleyin");
    const domains = (f.getAll("d") as string[]).slice(0, 25);
    if (!domains.length) throw new Error("Önce listeden şirket seçin");
    let ok = 0;
    const fails: string[] = [];
    for (const d of domains) {
      const l = await getLead(d);
      if (!l || l.apollo_contact_id) continue;
      try {
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
        const note = [
          `İlk e-posta · Öncelik ${l.tier} (${l.priority}/100)`,
          seg && `Segment: ${seg.label}`,
          l.decision_maker_title && `Karar verici: ${l.decision_maker_title}`,
          seg && `Satış açısı: ${seg.angle}`,
          l.revenue && `Tahmini depolama: ~£${l.revenue}/ay (KDV hariç)`,
          l.reason && `Neden: ${l.reason}`,
        ].filter(Boolean).join("\n");
        if (c?.id) await createTask({ contact_id: c.id, due_at: dueFor(l.tier), note: note.slice(0, 1500) });
        await updateLead(d, { status: "apollo", apollo_contact_id: c?.id ?? "?" });
        ok++;
      } catch (e) {
        fails.push(`${l.company}: ${e instanceof Error ? e.message : "hata"}`);
      }
    }
    msg = fails.length ? `${ok} şirket aktarıldı. Hatalar: ${fails.slice(0, 3).join("; ")}` : `ok:${ok} şirket Apollo'ya aktarıldı; her biri için önceliğine göre tarihli ilk e-posta görevi açıldı (A: ertesi iş günü, B: 3, C: 7 iş günü).`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}
