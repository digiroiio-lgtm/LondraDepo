import Emoji from "@/components/visual/Emoji";
import FooterLegal from "@/components/FooterLegal";
import Link from "next/link";
import TrackedLink from "./TrackedLink";
import { NAV } from "@/i18n/nav";
import { UI } from "@/i18n/ui";
import type { ViewLocale } from "@/i18n/view";
import { LOCALES, LOCALE_ORDER } from "@/lib/locales";

const TEL = "tel:+447554195190";

/** Footer for the template languages (EN, PL); links and texts come from src/i18n/nav.ts. */
export default function FooterEn({ lang = "en" }: { lang?: ViewLocale }) {
  const n = NAV[lang].footer;
  const col = (items: [string, string][]) => (
    <ul className="space-y-2 text-sm">
      {items.map(([href, label]) => (
        <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
      ))}
    </ul>
  );
  return (
    <footer className="bg-[#0b2545] text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div>
          <div className="text-white font-bold text-xl mb-3">
            Londra<span className="text-red-400">Depo</span>.com
          </div>
          <p className="text-sm leading-relaxed">{n.intro}</p>
          <p className="text-sm leading-relaxed mt-3">{n.address}</p>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">{n.headings.services}</div>
          {col(n.services)}
        </div>

        <div>
          <div className="text-white font-semibold mb-3">{n.headings.company}</div>
          {col(n.company)}
          <div className="text-white font-semibold mt-5 mb-2">{n.headings.otherLanguages}</div>
          <ul className="space-y-2 text-sm">
            {LOCALE_ORDER.filter((l) => l !== lang).map((l) => (
              <li key={l}>
                <Link href={LOCALES[l].home} className="hover:text-white transition" lang={LOCALES[l].htmlLang} hrefLang={LOCALES[l].hreflang}>{LOCALES[l].label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">{n.headings.guides}</div>
          {col(n.guides)}
        </div>

        <div>
          <div className="text-white font-semibold mb-3">{n.headings.contact}</div>
          <div className="space-y-3 text-sm">
            <p>{n.contactText}</p>
            <TrackedLink
              kind="whatsapp"
              source="footer"
              href={UI[lang].sticky.href}
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
            >
              {n.whatsappCta}
            </TrackedLink>
            <TrackedLink kind="phone" source="footer" href={TEL} className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Emoji e="📞" /> +44 7554 195190
            </TrackedLink>
            <TrackedLink kind="email" source="footer" href="mailto:support@londradepo.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Emoji e="📧" /> support@londradepo.com
            </TrackedLink>
            <p className="text-xs text-slate-400">{n.office}</p>
          </div>
        </div>
      </div>

      <FooterLegal lang={lang} intro={n.legalIntro} />
    </footer>
  );
}
