import { SITE_URL } from "@/lib/site";
import { TR_TO_EN, EN_TO_TR } from "@/lib/i18n-pairs";

/**
 * hreflang + canonical for both languages, built from the 1:1 pairs in i18n-pairs.ts.
 * Turkish pages without an English equivalent get a self-referencing tr-TR alternate only.
 */

export function absolute(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export type Alternates = { canonical: string; languages: Record<string, string> };

function pairLanguages(tr: string, en: string): Record<string, string> {
  return { "tr-TR": absolute(tr), en: absolute(en), "x-default": absolute(en) };
}

export function trAlternates(trPath: string): Alternates {
  const en = TR_TO_EN.get(trPath);
  return {
    canonical: absolute(trPath),
    languages: en ? pairLanguages(trPath, en) : { "tr-TR": absolute(trPath) },
  };
}

export function enAlternates(enPath: string): Alternates {
  const tr = EN_TO_TR.get(enPath);
  return {
    canonical: absolute(enPath),
    languages: tr ? pairLanguages(tr, enPath) : { en: absolute(enPath) },
  };
}
