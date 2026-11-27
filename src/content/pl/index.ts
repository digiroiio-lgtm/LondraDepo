import type { EnPage } from "../en/types";
import { plLegalPages, plPages } from "./pages";

/** Polish pages rendered by EnPageView. The quote page has its own route (/pl/zapytanie-ofertowe). */
export const PL_PAGES: EnPage[] = [...plPages, ...plLegalPages];

const bySlug = new Map(PL_PAGES.map((p) => [p.slug, p]));

export function getPlPage(slug: string): EnPage | undefined {
  return bySlug.get(slug);
}
