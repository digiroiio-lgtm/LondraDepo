import "server-only";

/** Apollo.io REST API (https://docs.apollo.io). Reads are cached briefly; writes only run on an explicit panel action. */
const BASE = "https://api.apollo.io/api/v1";

export function apolloConfigured(): boolean {
  return Boolean(process.env.APOLLO_API_KEY);
}

async function call<T>(path: string, init: { method?: string; body?: unknown; revalidate?: number } = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: init.method ?? "GET",
    headers: { "X-Api-Key": process.env.APOLLO_API_KEY as string, "Content-Type": "application/json", "Cache-Control": "no-cache" },
    body: init.body ? JSON.stringify(init.body) : undefined,
    ...(init.method && init.method !== "GET" && init.revalidate === undefined ? { cache: "no-store" as const } : { next: { revalidate: init.revalidate ?? 120 } }),
  });
  const text = await res.text();
  let json: Record<string, unknown> = {};
  try { json = JSON.parse(text); } catch { /* ignore */ }
  if (!res.ok) throw new Error(String(json.error || json.message || `Apollo ${res.status}`));
  return json as T;
}

export type ApolloContact = { id: string; first_name?: string; last_name?: string; name?: string; title?: string; organization_name?: string; email?: string; contact_stage_id?: string; last_activity_date?: string; linkedin_url?: string };
export type ApolloTask = { id: string; note?: string; type?: string; status?: string; due_at?: string; priority?: string; contact_id?: string; contact?: ApolloContact };
export type ApolloStage = { id: string; name: string; display_order?: number };

export async function contactStages(): Promise<ApolloStage[]> {
  const j = await call<{ contact_stages?: ApolloStage[] }>("/contact_stages", { revalidate: 3600 });
  return (j.contact_stages ?? []).sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
}

export async function searchContacts(q = "", page = 1): Promise<{ contacts: ApolloContact[]; total: number }> {
  const j = await call<{ contacts?: ApolloContact[]; pagination?: { total_entries?: number } }>("/contacts/search", {
    method: "POST",
    revalidate: 60,
    body: { q_keywords: q || undefined, page, per_page: 50, sort_by_field: "contact_last_activity_date", sort_ascending: false },
  });
  return { contacts: j.contacts ?? [], total: j.pagination?.total_entries ?? 0 };
}

export async function createContact(c: { first_name: string; last_name: string; organization_name?: string; title?: string; email?: string; contact_stage_id?: string }): Promise<ApolloContact> {
  const j = await call<{ contact: ApolloContact }>("/contacts", { method: "POST", body: c });
  return j.contact;
}

export async function updateContactStage(contactId: string, stageId: string): Promise<void> {
  await call("/contacts/update_stages", { method: "POST", body: { contact_ids: [contactId], contact_stage_id: stageId } });
}

export async function searchTasks(): Promise<ApolloTask[]> {
  const j = await call<{ tasks?: ApolloTask[] }>("/tasks/search", {
    method: "POST",
    revalidate: 60,
    body: { per_page: 100, sort_by_field: "task_due_at", sort_ascending: true, open_factor_names: ["task_types"] },
  });
  return j.tasks ?? [];
}

/** Apollo needs the owning user for new tasks: APOLLO_USER_ID, else the first user on the team. */
async function ownerId(): Promise<string> {
  if (process.env.APOLLO_USER_ID) return process.env.APOLLO_USER_ID;
  const j = await call<{ users?: { id: string }[] }>("/users/search", { revalidate: 86400 });
  const id = j.users?.[0]?.id;
  if (!id) throw new Error("Apollo kullanıcı bulunamadı; APOLLO_USER_ID ekleyin");
  return id;
}

export async function createTask(t: { contact_id: string; due_at: string; note: string; type?: string }): Promise<void> {
  await call("/tasks", {
    method: "POST",
    body: { user_id: await ownerId(), contact_ids: [t.contact_id], due_at: t.due_at, note: t.note, type: t.type || "action_item", priority: "medium", status: "scheduled" },
  });
}

export async function completeTask(taskId: string): Promise<void> {
  await call(`/tasks/${taskId}`, { method: "PUT", body: { status: "completed" } });
}

export function contactName(c?: ApolloContact): string {
  if (!c) return "";
  return c.name || [c.first_name, c.last_name].filter(Boolean).join(" ");
}
