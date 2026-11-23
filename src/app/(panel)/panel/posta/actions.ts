"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { gmailConfigured, sendMail } from "@/lib/panel/gmail";
import { DAILY_SEND_LIMIT, countSend, sentToday, syncInbox } from "@/lib/panel/mail-sync";
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
    msg = `ok:${r.scanned} e-posta tarandı; ${r.fresh} yeni. ${r.replies} şirket yanıtı, ${r.acks} otomatik teyit eşleşti${r.unmatched ? `; ${r.unmatched} e-posta bir şirketle eşleşmedi` : ""}.`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg);
}

export async function sendEmail(f: FormData) {
  const d = String(f.get("d") ?? "");
  let msg: string;
  let ok = false;
  try {
    if (!gmailConfigured()) throw new Error("Gmail bağlı değil");
    if (f.get("confirm") !== "on") throw new Error("Göndermeden önce \"Mesajı kontrol ettim\" kutusunu işaretleyin");
    if ((await sentToday()) >= DAILY_SEND_LIMIT) throw new Error(`Günlük gönderim sınırı (${DAILY_SEND_LIMIT}) doldu; yarın devam edin`);
    const to = String(f.get("to") ?? "").trim();
    const subject = String(f.get("subject") ?? "").trim().slice(0, 200);
    const body = String(f.get("body") ?? "").trim().slice(0, 8000);
    const c = d ? await getContact(d) : null;
    const res = await sendMail({ to, subject, body, threadId: c?.thread_id || undefined });
    await countSend();
    if (c) {
      await updateContact(d, { channel: "email", emailed_at: new Date().toISOString(), thread_id: res.threadId }, { type: "email_sent", note: `Panelden: ${subject} → ${to}` });
      const l = await getLead(d);
      if (l && (l.status === "yeni" || l.status === "apollo")) await updateLead(d, { status: "iletisim" });
    }
    ok = true;
    msg = `ok:E-posta ${to} adresine gönderildi${c ? ` ve ${c.company} geçmişine işlendi` : ""}.`;
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  back(msg, ok ? "gelen" : "yaz", ok || !d ? "" : `d=${encodeURIComponent(d)}`);
}
