"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { completeTask, createTask } from "@/lib/panel/apollo";

const s = (f: FormData, k: string) => String(f.get(k) ?? "").trim();

export async function markDone(f: FormData) {
  let msg = "ok";
  try {
    await completeTask(s(f, "id"));
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  revalidatePath("/panel/gorevler");
  redirect(`/panel/gorevler?m=${encodeURIComponent(msg)}`);
}

export async function followUp(f: FormData) {
  let msg = "ok";
  try {
    await createTask({ contact_id: s(f, "contact_id"), due_at: new Date(`${s(f, "due")}T09:00:00`).toISOString(), note: s(f, "note") || "Takip" });
  } catch (e) {
    msg = e instanceof Error ? e.message : "hata";
  }
  revalidatePath("/panel/gorevler");
  redirect(`/panel/gorevler?m=${encodeURIComponent(msg)}`);
}
