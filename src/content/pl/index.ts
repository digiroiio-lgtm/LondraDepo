import type { EnPage } from "../en/types";
import { plLegalPages, plPages } from "./pages";
import { plCoreServicesA } from "./core-services-a";
import { plServicesB } from "./services-b";
import { plGrowth } from "./growth";
import { plBlogA } from "./blog-a";
import { plBlogB } from "./blog-b";
import { plCases } from "./cases";
import { PAGE_SETS } from "@/lib/i18n-pairs";
import { imprintPage } from "../imprint";

/** Polish pages rendered by EnPageView. The quote page has its own route (/pl/zapytanie-ofertowe). */
export const PL_PAGES: EnPage[] = [...plPages, ...plCoreServicesA, ...plServicesB, ...plGrowth, ...plCases, ...plBlogA, ...plBlogB, ...plLegalPages, imprintPage("pl")];

const bySlug = new Map(PL_PAGES.map((p) => [p.slug, p]));

export function getPlPage(slug: string): EnPage | undefined {
  return bySlug.get(slug);
}

// Build-time guard: every PL path in the page sets must be a real PL page, and slugs must be unique.
{
  const STANDALONE = new Set(["/pl/zapytanie-ofertowe"]);
  const missing = PAGE_SETS.map((s) => s.pl).filter((p): p is string => Boolean(p) && !STANDALONE.has(p as string) && !bySlug.has(p as string));
  if (missing.length) throw new Error(`i18n-pairs.ts lists PL pages that do not exist: ${missing.join(", ")}`);
  if (bySlug.size !== PL_PAGES.length) throw new Error("Duplicate PL page slug");
}
