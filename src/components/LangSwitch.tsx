"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchTarget } from "@/lib/i18n-pairs";

/** Links to the 1:1 counterpart page, or the other language's home page when none exists. */
export default function LangSwitch({ className = "" }: { className?: string }) {
  const path = usePathname() || "/";
  const { href, lang } = switchTarget(path);
  return (
    <Link
      href={href}
      hrefLang={lang === "en" ? "en" : "tr-TR"}
      lang={lang}
      className={`inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold text-[#0b2545] hover:border-[#0b2545] transition ${className}`}
      aria-label={lang === "en" ? "English version" : "Türkçe sürüm"}
    >
      {lang === "en" ? "EN" : "TR"}
    </Link>
  );
}
