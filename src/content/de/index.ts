import type { EnPage } from "../en/types";
import { deLegalPages, dePages } from "./pages";
import { PAGE_SETS } from "@/lib/i18n-pairs";

/** German pages rendered by EnPageView. The quote page has its own route (/de/angebot-anfordern). */
export const DE_PAGES: EnPage[] = [...dePages, ...deLegalPages];

const bySlug = new Map(DE_PAGES.map((p) => [p.slug, p]));

export function getDePage(slug: string): EnPage | undefined {
  return bySlug.get(slug);
}

// Build-time guard: every DE path in the page sets must be a real DE page, and slugs must be unique.
{
  const STANDALONE = new Set(["/de/angebot-anfordern"]);
  const missing = PAGE_SETS.map((s) => s.de).filter((p): p is string => Boolean(p) && !STANDALONE.has(p as string) && !bySlug.has(p as string));
  if (missing.length) throw new Error(`i18n-pairs.ts lists DE pages that do not exist: ${missing.join(", ")}`);
  if (bySlug.size !== DE_PAGES.length) throw new Error("Duplicate DE page slug");
}
