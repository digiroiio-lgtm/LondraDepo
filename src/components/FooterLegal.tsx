import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { UI } from "@/i18n/ui";
import type { Locale } from "@/lib/locales";

/** Footer bottom row shared by every language: company line, registered office, legal links, cookie settings. */
export default function FooterLegal({ lang, intro }: { lang: Locale; intro: string }) {
  const t = UI[lang].footer;
  return (
    <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-400 space-y-2">
      <p>© {new Date().getFullYear()} {intro} {t.rights}</p>
      <p className="text-slate-400">{t.companyLine}</p>
      <p className="text-slate-400">
        {t.registeredOffice} ·{" "}
        <a href="mailto:support@londradepo.com" className="hover:text-white transition">support@londradepo.com</a>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {t.legal.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-white transition">{l.label}</Link>
        ))}
        <a href="https://www.linkedin.com/company/arcatradegroup/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
        <a href="https://bifa.org/members/arca-trade-group-ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{t.bifa}</a>
        <CookieSettingsButton label={t.cookieSettings} />
      </div>
    </div>
  );
}
