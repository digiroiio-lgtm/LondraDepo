"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { GMAIL_USER, gmailConfigured, sendMail } from "@/lib/panel/gmail";
import { remainingPlaceholders } from "@/lib/panel/mail-compose";
import { DAILY_SEND_LIMIT, countSend, ignoreInboxItem, linkInboxItem, sentToday, syncInbox } from "@/lib/panel/mail-sync";
import { getContact, updateContact } from "@/lib/panel/webcontact-store";
import { getLead, updateLead } from "@/lib/panel/wizard-store";

const back = (msg: string, anchor = "gelen", q = "") => {
  revalidatePath("/panel/posta");
  revalidatePath("/panel/webcontact");
  redirect(`/panel/posta?${q ? `${q}&` : ""}m=${encodeURIComponent(msg)}#${anchor}`);
};

export async function syncNow() {
  let msg: string;
  try {
    if (!gmailConfigured()) throw new Error("Gmail bağlı değil");
    const r = await syncInbox(30);
    msg = `ok:${r.scanned} e-posta tarandı; ${r.fresh} yeni. ${r.replies} şirket yanıtı, ${r.acks} otomatik teyit eşleşti${r.rematched ? `; önceki ${r.rematched} e-posta şimdi şirketiyle eşleşti` : ""}${r.suggested ? `; ${r.suggested} e-posta için şirket önerisi var (onayınızı bekliyor)` : ""}${r.unmatched ? `; ${r.unmatched} e-posta bir şirketle eşleşmedi` : ""}${r.system ? `; ${r.system} sistem/deneme e-postası satış sayılarına katılmadı` : ""}.`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}

export async function sendEmail(f: FormData) {
  const d = String(f.get("d") ?? "");
  const test = f.get("mode") === "test";
  const kind = String(f.get("kind") ?? "first");
  let msg: string;
  let ok = false;
  try {
    if (!gmailConfigured()) throw new Error("Gmail bağlı değil");
    const subject = String(f.get("subject") ?? "").trim().slice(0, 200);
    const body = String(f.get("body") ?? "").trim().slice(0, 8000);
    const left = remainingPlaceholders(`${subject}\n${body}`);
    if (left.length && !test) throw new Error(`Doldurulmamış alan var: ${left.join(", ")}. Bunları düzenleyin; şirkete bu hâliyle gitmez.`);
    if (!test && f.get("confirm") !== "on") throw new Error("Göndermeden önce \"Mesajı kontrol ettim\" kutusunu işaretleyin");
    if ((await sentToday()) >= DAILY_SEND_LIMIT) throw new Error(`Günlük gönderim sınırı (${DAILY_SEND_LIMIT}) doldu; yarın devam edin`);
    if (test) {
      // Rehearsal: goes to our own mailbox only; the company record is not touched.
      const realTo = String(f.get("to") ?? "").trim();
      await sendMail({ to: GMAIL_USER, subject: `[DENEME] ${subject}`, body: `(Deneme. Gerçek alıcı: ${realTo || "—"})\n\n${body}` });
      await countSend();
      msg = `ok:Deneme e-postası ${GMAIL_USER} adresine gönderildi. Gmail'de nasıl göründüğüne bakın${left.length ? `; doldurulmamış alan: ${left.join(", ")}` : ""}.`;
    } else {
      const to = String(f.get("to") ?? "").trim();
      const c = d ? await getContact(d) : null;
      const res = await sendMail({ to, subject, body, threadId: c?.thread_id || undefined });
      await countSend();
      if (c) {
        const now = new Date().toISOString();
        if (kind === "followup") await updateContact(d, { channel: "email", emailed_at: now, thread_id: res.threadId, followup_at: now }, { type: "followup", note: `Takip e-postası: ${subject} → ${to}` });
        else if (kind === "meeting") await updateContact(d, { thread_id: res.threadId }, { type: "email_sent", note: `Görüşme linki gönderildi → ${to}` });
        else await updateContact(d, { channel: "email", emailed_at: now, thread_id: res.threadId }, { type: "email_sent", note: `Panelden: ${subject} → ${to}` });
        const l = await getLead(d);
        if (l && (l.status === "yeni" || l.status === "apollo")) await updateLead(d, { status: "iletisim" });
      }
      ok = true;
      msg = `ok:${kind === "followup" ? "Takip e-postası" : kind === "meeting" ? "Görüşme linki" : "E-posta"} ${to} adresine gönderildi${c ? ` ve ${c.company} geçmişine işlendi` : ""}.`;
    }
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, ok ? "gelen" : "yaz", ok || !d ? "" : `d=${encodeURIComponent(d)}${kind !== "first" ? `&t=${kind}` : ""}`);
}

/** Links an inbox email to a company (panel record only; nothing is sent). */
export async function linkMail(f: FormData) {
  const id = String(f.get("id") ?? "");
  const d = String(f.get("d") ?? "");
  const as = f.get("as") === "auto_ack" ? "auto_ack" : "reply";
  let msg: string;
  try {
    if (!d) throw new Error("Bağlanacak şirketi seçin");
    const { company } = await linkInboxItem(id, d, as);
    msg = as === "reply" ? `ok:Yanıt ${company} geçmişine eklendi; şirket "Yanıt geldi" oldu. WebContact → Yanıtı değerlendir'den sonucunu işaretleyin.` : `ok:${company} geçmişine otomatik form teyidi olarak eklendi (yanıt sayılmadı).`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}

export async function ignoreMail(f: FormData) {
  let msg = "ok:E-posta listeden gizlendi.";
  try {
    await ignoreInboxItem(String(f.get("id") ?? ""));
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}
