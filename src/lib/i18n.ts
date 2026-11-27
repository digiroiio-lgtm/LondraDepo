import { SITE_URL } from "@/lib/site";
import { pageSet } from "@/lib/i18n-pairs";
import { LOCALES, LOCALE_ORDER, X_DEFAULT } from "@/lib/locales";

/**
 * hreflang + canonical for every language, built from the page sets in i18n-pairs.ts.
 * A page that exists in one language only gets a self-referencing alternate and no x-default.
 */

export function absolute(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export type Alternates = { canonical: string; languages: Record<string, string> };

/** Canonical plus one hreflang per language version; x-default points to X_DEFAULT when it exists. */
export function localeAlternates(path: string): Alternates {
  const set = pageSet(path);
  const languages: Record<string, string> = {};
  for (const l of LOCALE_ORDER) {
    const p = set[l];
    if (p) languages[LOCALES[l].hreflang] = absolute(p);
  }
  const versions = Object.keys(languages).length;
  const xd = set[X_DEFAULT];
  if (versions > 1 && xd) languages["x-default"] = absolute(xd);
  return { canonical: absolute(path), languages };
}

/** Kept for existing callers; both are the same as localeAlternates. */
export const trAlternates = localeAlternates;
export const enAlternates = localeAlternates;
