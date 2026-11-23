"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { pushLeadsToApollo } from "@/lib/panel/wizard-apollo";
import { STATUSES, parseAgentOutput, targetFrom, toLead, type Lead, type Status } from "@/lib/panel/wizard";
import { addRun, saveLeads, setStatus } from "@/lib/panel/wizard-store";

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

/** Creates an Apollo contact plus a first-email task dated by tier for each selected lead (no Apollo credits used). */
export async function pushToApollo(f: FormData) {
  let msg: string;
  try {
    const domains = f.getAll("d") as string[];
    if (!domains.length) throw new Error("Önce listeden şirket seçin");
    const { ok, fails } = await pushLeadsToApollo(domains);
    msg = fails.length ? `${ok} şirket aktarıldı. Hatalar: ${fails.slice(0, 3).join("; ")}` : `ok:${ok} şirket Apollo'ya aktarıldı; her biri için önceliğine göre tarihli ilk e-posta görevi açıldı (A: ertesi iş günü, B: 3, C: 7 iş günü).`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}
