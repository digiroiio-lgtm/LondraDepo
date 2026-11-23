import "server-only";
import { enEntries, trEntries } from "@/lib/sitemaps";
import { SITE_URL } from "@/lib/site";

export function sitemapUrls(): string[] {
  return [...trEntries(), ...enEntries()].map((e) => e.alternates.canonical as string);
}

/** Read an llms file from the deployed public folder when available, else from the live site. */
async function readLlms(file: string): Promise<string> {
  try {
    const { readFile } = await import("node:fs/promises");
    const { join } = await import("node:path");
    return await readFile(join(process.cwd(), "public", file), "utf8");
  } catch {
    const res = await fetch(`${SITE_URL}${file}`, { next: { revalidate: 900 } });
    if (!res.ok) throw new Error(String(res.status));
    return res.text();
  }
}

export async function llmsStatus() {
  const urls = new Set(sitemapUrls().map((u) => u.replace(/\/$/, "")));
  const out: { file: string; updated: string | null; ageDays: number | null; missing: number }[] = [];
  for (const f of ["/llms.txt", "/llms-full.txt"]) {
    try {
      const t = await readLlms(f);
      const m = t.match(/Last updated: (\d{4}-\d{2}-\d{2})/);
      const listed = new Set((t.match(/https:\/\/www\.londradepo\.com[^\s)\]>,]*/g) ?? []).map((u) => u.replace(/[/.]$/, "")));
      const missing = [...urls].filter((u) => !listed.has(u)).length;
      out.push({ file: f, updated: m?.[1] ?? null, ageDays: m ? Math.floor((Date.now() - Date.parse(m[1])) / 86400000) : null, missing });
    } catch {
      out.push({ file: f, updated: null, ageDays: null, missing: -1 });
    }
  }
  return out;
}

/** HEAD-check every sitemap URL on the live site; returns the ones that do not answer 200. */
export async function checkUrls(): Promise<{ url: string; status: number }[]> {
  const urls = sitemapUrls();
  const bad: { url: string; status: number }[] = [];
  for (let i = 0; i < urls.length; i += 10) {
    const chunk = await Promise.all(
      urls.slice(i, i + 10).map(async (url) => {
        try {
          const r = await fetch(url, { method: "HEAD", redirect: "manual", cache: "no-store" });
          return { url, status: r.status };
        } catch {
          return { url, status: 0 };
        }
      }),
    );
    bad.push(...chunk.filter((c) => c.status !== 200));
  }
  return bad;
}
