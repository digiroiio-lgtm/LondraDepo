import type { Locale } from "@/lib/locales";
import type { UiStrings } from "./types";
import { en } from "./en";
import { tr } from "./tr";

export type { UiStrings };

/** Interface texts per language. Record<Locale, …> makes a missing language a build error. */
export const UI: Record<Locale, UiStrings> = { tr, en };
