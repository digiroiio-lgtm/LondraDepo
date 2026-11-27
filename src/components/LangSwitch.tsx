"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { languageTargets } from "@/lib/i18n-pairs";
import { LOCALES, localeOf } from "@/lib/locales";
import { trackLanguageSwitch } from "@/lib/gtag";
import { UI } from "@/i18n/ui";

const pill = "inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold text-[#0b2545] hover:border-[#0b2545] transition";

/**
 * Language switch. With two languages it is a single link to the other language's version of the page
 * (or its home page); with more it becomes a menu listing every language.
 */
export default function LangSwitch({ className = "" }: { className?: string }) {
  const path = usePathname() || "/";
  const here = localeOf(path);
  const targets = languageTargets(path);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !box.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  if (targets.length === 1) {
    const t = targets[0];
    const info = LOCALES[t.locale];
    return (
      <Link
        href={t.href}
        hrefLang={info.hreflang}
        lang={info.htmlLang}
        onClick={() => trackLanguageSwitch(here, t.locale)}
        className={`${pill} ${className}`}
        aria-label={UI[t.locale].langMenu.switchTo}
      >
        {info.short}
      </Link>
    );
  }

  return (
    <div ref={box} className={`relative ${className}`}>
      <button type="button" className={pill} aria-haspopup="true" aria-expanded={open} aria-label={UI[here].langMenu.label} onClick={() => setOpen((o) => !o)}>
        {LOCALES[here].short} <span aria-hidden="true" className="ml-1">▾</span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 min-w-[10rem] rounded-xl border border-slate-200 bg-white py-1 shadow-lg z-50">
          {targets.map((t) => {
            const info = LOCALES[t.locale];
            return (
              <li key={t.locale}>
                <Link
                  href={t.href}
                  hrefLang={info.hreflang}
                  lang={info.htmlLang}
                  onClick={() => { trackLanguageSwitch(here, t.locale); setOpen(false); }}
                  className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-[#0b2545] hover:bg-slate-50"
                >
                  <span>{info.label}</span>
                  <span className="text-xs font-bold text-slate-400">{info.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
