"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createContact, createTask, updateContactStage } from "@/lib/panel/apollo";

const s = (f: FormData, k: string) => String(f.get(k) ?? "").trim();

export async function addProspect(f: FormData) {
  let msg = "ok";
  try {
    const c = await createContact({ first_name: s(f, "first_name"), last_name: s(f, "last_name"), organization_name: s(f, "organization_name") || undefined, title: s(f, "title") || undefined, email: s(f, "email") || undefined, contact_stage_id: s(f, "stage") || undefined });
    if (s(f, "due") && c?.id) await createTask({ contact_id: c.id, due_at: new Date(`${s(f, "due")}T09:00:00`).toISOString(), note: s(f, "note") || "İlk temas" });
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  revalidatePath("/panel/adaylar");
  redirect(`/panel/adaylar?m=${encodeURIComponent(msg)}`);
}

export async function changeStage(f: FormData) {
  let msg = "ok";
  try {
    await updateContactStage(s(f, "id"), s(f, "stage"));
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  revalidatePath("/panel/adaylar");
  redirect(`/panel/adaylar?m=${encodeURIComponent(msg)}`);
}
