import type { EnPage } from "./types";
import { PAIRS } from "@/lib/i18n-pairs";
import { corePages } from "./core";
import { servicePages } from "./services";
import { casePages, caseHub } from "./cases";
import { blogPages, blogHub } from "./blog";
import { legalPages } from "./legal";
import { growthPages, growthPagesP2, calculatorPages, portPages } from "./growth";

export const EN_PAGES: EnPage[] = [...corePages, ...servicePages, ...growthPages, ...growthPagesP2, ...calculatorPages, ...portPages, caseHub, ...casePages, blogHub, ...blogPages, ...legalPages];

const bySlug = new Map(EN_PAGES.map((p) => [p.slug, p]));

export function getEnPage(slug: string): EnPage | undefined {
  return bySlug.get(slug);
}

// Build-time guard: page registry and the lightweight pair list must stay identical.
{
  const a = EN_PAGES.filter((p) => p.tr).map((p) => `${p.tr}>${p.slug}`).sort().join("|");
  const b = PAIRS.map(([tr, en]) => `${tr}>${en}`).sort().join("|");
  if (a !== b) throw new Error("src/lib/i18n-pairs.ts is out of sync with src/content/en");
}
