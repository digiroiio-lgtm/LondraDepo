"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { REPLIES, toContact, type Contact, type Reply } from "@/lib/panel/webcontact";
import { addContactRun, getContact, saveContacts, setReply, updateContact } from "@/lib/panel/webcontact-store";
import { parseAgentOutput, targetFrom, toLead, type Lead } from "@/lib/panel/wizard";
import { pushLeadsToApollo, workdaysFromNow } from "@/lib/panel/wizard-apollo";
import { getLead, saveLeads, updateLead } from "@/lib/panel/wizard-store";

/** Back to the page the form was sent from (hidden "ret" = its query string), with a status message. */
const back = (msg: string, anchor = "temaslar", ret = "") => {
  revalidatePath("/panel/webcontact");
  revalidatePath("/panel/sihirbaz");
  const q = new URLSearchParams(ret.replace(/^\?/, ""));
  q.delete("m");
  q.set("m", msg);
  redirect(`/panel/webcontact?${q.toString()}#${anchor}`);
};
const retOf = (f: FormData) => String(f.get("ret") ?? "");

/** Marks the shared prospect as contacted (customer wizard status "iletisim") once a form was sent. */
async function markLeadContacted(domain: string) {
  const l = await getLead(domain);
  if (l && (l.status === "yeni" || l.status === "apollo")) await updateLead(domain, { status: "iletisim" });
}

export async function importLog(f: FormData) {
  let msg: string;
  let importedOk = false;
  try {
    const raw = String(f.get("data") ?? "").slice(0, 2_000_000);
    const mode = f.get("mode") === "b" ? "b" : f.get("mode") === "c" ? "c" : "a";
    const t = targetFrom((k) => (["s", "c", "k"].includes(k) ? (f.getAll(k) as string[]) : (f.get(k) as string | undefined) ?? undefined));
    const { records, error } = parseAgentOutput(raw);
    if (error) throw new Error(error);
    const runId = `w${Date.now().toString(36)}`;
    const at = new Date().toISOString();
    const contacts: Contact[] = [];
    const recByDomain = new Map<string, Record<string, string>>();
    const errors: string[] = [];
    for (const rec of records.slice(0, 300)) {
      const c = toContact(rec, runId, at);
      if ("error" in c) errors.push(c.error);
      else { contacts.push(c); recByDomain.set(c.domain, rec); }
    }
    const { saved, duplicates, reviewed } = await saveContacts(contacts);

    // Keep one shared prospect list: new companies from research runs join the customer wizard list.
    const newLeads: Lead[] = [];
    for (const c of saved) {
      const existing = await getLead(c.domain);
      if (existing) {
        if (c.form_status === "sent") await markLeadContacted(c.domain);
        continue;
      }
      const l = toLead({ ...recByDomain.get(c.domain), website: c.website }, t, runId, at);
      if (!("error" in l)) newLeads.push({ ...l, status: c.form_status === "sent" ? "iletisim" : c.form_status === "no_solicitation" ? "elendi" : "yeni" });
    }
    if (newLeads.length) await saveLeads(newLeads);

    const count = (s: string[]) => saved.filter((c) => s.includes(c.form_status)).length;
    const run = { id: runId, at, mode: mode as "a" | "b" | "c", sent: count(["sent"]), blocked: count(["captcha"]), manual: count(["error", "phone_rejected"]), noForm: count(["no_form"]), skipped: count(["skipped", "no_solicitation"]), duplicates, errors: errors.length };
    await addContactRun(run);
    importedOk = true;
    msg = `ok:Son çalıştırma · ${run.sent + (run.blocked ?? 0) + run.manual + run.noForm + run.skipped} şirket: ${run.sent} form gönderildi, ${run.blocked} doğrulama engeline takıldı, ${run.manual} elle gönderilecek, ${run.noForm} formsuz, ${run.skipped} atlandı; ${duplicates} daha önce temas edilmiş olduğu için atlandı${reviewed ? `; ${reviewed} kayıt incelenmeli (zaten ulaşılmıştı, ajan yeniden gönderdi)` : ""}${newLeads.length ? `; ${newLeads.length} yeni şirket müşteri listesine eklendi` : ""}${errors.length ? `; ${errors.length} satır okunamadı` : ""}.`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, importedOk ? "isler" : "ice-aktar", importedOk ? "tab=is" : retOf(f));
}

export async function changeReply(f: FormData) {
  const reply = String(f.get("reply")) as Reply;
  const d = String(f.get("d"));
  let msg = "ok:Durum güncellendi.";
  try {
    if (!(reply in REPLIES)) throw new Error("Geçersiz durum");
    await setReply(d, reply, REPLIES[reply]);
    const l = await getLead(d);
    if (l && ["olumlu", "gorusme", "teklif"].includes(reply)) await updateLead(d, { status: "olumlu" });
    if (l && reply === "ilgisiz") await updateLead(d, { status: "elendi" });
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** A captcha/error form was sent by hand. */
export async function markSent(f: FormData) {
  const d = String(f.get("d"));
  let msg = "ok:Gönderildi olarak işaretlendi.";
  try {
    if (!(await getContact(d))) throw new Error("Kayıt bulunamadı");
    await updateContact(d, { form_status: "sent", channel: "form", sent_at: new Date().toISOString().slice(0, 16).replace("T", " ") }, { type: "form_sent", note: "Elle gönderildi" });
    await markLeadContacted(d);
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** Give up on a blocked/failed form (kept in the list as skipped, with the reason). */
export async function markSkipped(f: FormData) {
  const d = String(f.get("d"));
  let msg = "ok:Atlandı olarak işaretlendi.";
  try {
    const c = await getContact(d);
    if (!c) throw new Error("Kayıt bulunamadı");
    await updateContact(d, { form_status: "skipped", notes: [c.notes, "Elle vazgeçildi"].filter(Boolean).join(" · ") }, { type: "skipped", note: "Elle vazgeçildi" });
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** No reply after 5 working days: Apollo follow-up task for the next working day (no credits). */
export async function followUp(f: FormData) {
  let msg: string;
  try {
    const domains = (f.getAll("d") as string[]).slice(0, 25);
    if (!domains.length) throw new Error("Takip edilecek şirket yok");
    const contacts = new Map<string, Contact>();
    for (const d of domains) {
      const c = await getContact(d);
      if (c) contacts.set(d, c);
    }
    const { ok, fails, done } = await pushLeadsToApollo(domains, (l) => {
      const c = contacts.get(l.domain);
      return {
        title: "Form takibi",
        due: workdaysFromNow(1),
        extra: c ? `İletişim formu ${c.sent_at || c.imported_at.slice(0, 10)} tarihinde gönderildi (${c.contact_page_url}). Yanıt yok: e-posta (${c.email_fallback || l.email || "—"}) veya telefonla kısa takip yap.` : undefined,
      };
    });
    const now = new Date().toISOString();
    for (const d of done) await updateContact(d, { followup_at: now }, { type: "followup", note: "Apollo takip görevi" });
    msg = fails.length ? `${ok} takip görevi açıldı. Hatalar: ${fails.slice(0, 3).join("; ")}` : `ok:${ok} şirket için Apollo'da ertesi iş günü takip görevi açıldı.`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** The user emailed a company without a form from their own mailbox. */
export async function markEmailed(f: FormData) {
  const d = String(f.get("d"));
  let msg = "ok:E-posta gönderildi olarak kaydedildi.";
  try {
    const c = await getContact(d);
    if (!c) throw new Error("Kayıt bulunamadı");
    await updateContact(d, { channel: "email", emailed_at: new Date().toISOString() }, { type: "email_sent", note: c.email_fallback });
    await markLeadContacted(d);
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** Free-text note on a company (e.g. why a form failed, phone call outcome). */
export async function addNote(f: FormData) {
  const d = String(f.get("d"));
  const note = String(f.get("note") ?? "").trim().slice(0, 500);
  let msg = "ok:Not eklendi.";
  try {
    if (!note) throw new Error("Not boş");
    const c = await getContact(d);
    if (!c) throw new Error("Kayıt bulunamadı");
    await updateContact(d, { notes: [c.notes, note].filter(Boolean).join(" · ") }, { type: "note", note });
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** An uncertain form send was checked and did reach the company (no second send). */
export async function confirmDelivery(f: FormData) {
  const d = String(f.get("d"));
  let msg = "ok:Ulaştı olarak işaretlendi; takip tarihi buna göre hesaplanır.";
  try {
    if (!(await updateContact(d, { delivery_ok: true }, { type: "note", note: "Gönderim kontrol edildi: ulaştı" }))) throw new Error("Kayıt bulunamadı");
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}

/** A reply was a no: the company leaves active follow-up with the reason, and stays on record. */
export async function closeWithReason(f: FormData) {
  const d = String(f.get("d"));
  const reason = String(f.get("reason") ?? "").trim().slice(0, 120) || "İlgilenmiyor";
  let msg = `ok:Kapatıldı: ${reason}. Şirket aktif takipten çıktı, kaydı duruyor.`;
  try {
    if (!(await updateContact(d, { reply: "ilgisiz", close_reason: reason }, { type: "reply", note: `Olumsuz: ${reason}` }))) throw new Error("Kayıt bulunamadı");
    // The shared prospect leaves the first-contact list too.
    if (await getLead(d)) await updateLead(d, { status: "elendi" });
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, "isler", retOf(f));
}
