import type { Metadata } from "next";
import { ogLocale } from "@/lib/locales";
import Link from "next/link";
import HeaderEn from "@/components/HeaderEn";
import FooterEn from "@/components/FooterEn";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import QuoteFormEn from "@/components/QuoteFormEn";
import TrackedLink from "@/components/TrackedLink";
import FaqJsonLd, { type Faq } from "@/components/FaqJsonLd";
import { bookingUrl } from "@/lib/booking";
import { absolute, localeAlternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { UI } from "@/i18n/ui";

const PATH = "/de/angebot-anfordern";
const TITLE = "Angebot anfordern: Lager in Großbritannien";
const DESCRIPTION =
  "Angebot für Lagerung, Palettenlager, Containerentladung, Fulfillment, Amazon FBA Prep oder Distribution in UK. Paletten ab 3,50 £ zzgl. MwSt. pro Woche.";

export const metadata: Metadata = {
  title: `${TITLE} | LondraDepo`,
  description: DESCRIPTION,
  alternates: localeAlternates(PATH),
  openGraph: { title: TITLE, description: DESCRIPTION, url: absolute(PATH), siteName: "LondraDepo.com", ...ogLocale("de"), type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${absolute(PATH)}#webpage`,
      url: absolute(PATH),
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "de",
      isPartOf: { "@id": `${SITE_URL}/de#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: absolute("/de") },
        { "@type": "ListItem", position: 2, name: "Angebot anfordern", item: absolute(PATH) },
      ],
    },
  ],
};

const STEPS = [["Anforderungen senden", "Nennen Sie Leistung, Produktkategorie und ungefähre Mengen. Das dauert etwa zwei Minuten."], ["Wir prüfen Ihren Ablauf", "Das Lagerteam prüft Ihre Anforderungen an Handling, Lagerung und Zustellung und stellt gegebenenfalls einige Rückfragen."], ["Sie erhalten ein Angebot", "Lagerung, Handling, Fulfillment und Zustellung werden einzeln ausgewiesen, damit Sie genau sehen, wofür Sie bezahlen."]] as const;

const FAQS: Faq[] = [{"q": "Ist das Angebot kostenlos?", "a": "Ja. Das Angebot von LondraDepo ist kostenlos und unverbindlich. Füllen Sie das Formular mit Angaben zu Produkt, Mengen und Leistungen aus, und unser Team antwortet per E-Mail mit einem Angebot."}, {"q": "Welche Angaben brauchen Sie für ein Angebot?", "a": "Produktart und Abmessungen, geschätzte Anzahl an Paletten oder Kartons, Aufträge pro Monat, Vertriebskanäle und das Versandland. Je mehr Details Sie angeben, desto genauer wird das Angebot."}, {"q": "Gibt es eine Mindestmenge für ein Angebot?", "a": "Es gibt keine feste Mindestmenge. Sie können mit einer einzelnen Testpalette beginnen, den Ablauf im Lager kennenlernen und die Menge anschließend schrittweise erhöhen."}, {"q": "Kann das Angebot auch Transport und Zollabfertigung umfassen?", "a": "Ja. Die Arca Trade Group, Betreiber von LondraDepo und BIFA-Mitglied, kann internationalen Transport per See, Luft, Straße oder Schiene und die britische Zollabfertigung zusammen mit dem Lager anbieten. Sie können auch nur die Lagerung anfragen."}, {"q": "In welcher Sprache kann ich das Formular ausfüllen?", "a": "Sie können Ihre Anfrage auf Deutsch oder Englisch schreiben. Unser Team in Großbritannien arbeitet auf Englisch und Türkisch, daher erstellen wir das Angebot auf Englisch."}];

export default function AngebotAnfordernPage() {
  return (
    <>
      <HeaderEn lang="de" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-10">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
              <Link href="/de" className="hover:text-[#0b2545]">Startseite</Link>
              <span className="mx-1.5">/</span>
              <span aria-current="page">Angebot anfordern</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] leading-tight mb-4 max-w-3xl">Angebot für Lagerung in Großbritannien anfordern</h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
              {"Beschreiben Sie, was Sie in Großbritannien lagern, versenden oder verteilen möchten. LondraDepo betreibt ein Lager in Unit 19 Arterial Park, Rayleigh, Essex. Die Lagerung einer Standardpalette beginnt bei 3,50 £ zzgl. MwSt. pro Woche; Wareneingang, Handling, Fulfillment und Zustellung kalkulieren wir für Ihren konkreten Ablauf."}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <QuoteFormEn lang="de" formId="de_request_a_quote" />
          </div>
          <aside className="space-y-8">
            <section>
              <h2 className="text-lg font-bold text-[#0b2545] mb-3">So geht es weiter</h2>
              <ol className="space-y-4">
                {STEPS.map(([t, d], i) => (
                  <li key={t} className="flex gap-3">
                    <span className="text-xs font-bold text-[#d62839] mt-1">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-semibold text-[#0b2545]">{t}</h3>
                      <p className="text-sm text-slate-600">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 space-y-2">
              <h2 className="text-lg font-bold text-[#0b2545] mb-1">Lieber sprechen?</h2>
              <p>
                <TrackedLink kind="whatsapp" source="quote_page" href={UI.de.sticky.href} className="font-semibold text-green-700 underline">
                  WhatsApp +44 7554 195190
                </TrackedLink>
              </p>
              <p>
                <TrackedLink kind="phone" source="quote_page" href="tel:+441268203283" className="font-semibold text-[#0b2545] underline">
                  Büro +44 1268 203 283
                </TrackedLink>{" "}
                (07:45–17:30 Uhr britischer Zeit)
              </p>
              <p>
                <TrackedLink kind="booking" source="quote_page" href={bookingUrl("en", PATH)} className="font-semibold text-[#0b2545] underline">
                  15-minütiges Gespräch buchen (auf Englisch)
                </TrackedLink>
              </p>
              <p>Betreut auf Englisch und Türkisch. Anfragen gerne auf Deutsch oder Englisch.</p>
            </section>
            <section className="text-sm text-slate-700">
              <h2 className="text-lg font-bold text-[#0b2545] mb-2">Hilfreich vor dem Absenden</h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><Link href="/de/lagerkosten-grossbritannien" className="underline">Lagerkosten in Großbritannien</Link></li>
                <li><Link href="/de/palettenlager-england" className="underline">Palettenlager in England</Link></li>
                <li><Link href="/de/fulfillment-grossbritannien" className="underline">Fulfillment in Großbritannien</Link></li>
                <li><Link href="/de/lager-fuer-deutsche-unternehmen" className="underline">Für deutsche Unternehmen</Link></li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="max-w-3xl mx-auto px-4 pb-14">
          <FaqJsonLd faqs={FAQS} />
          <h2 className="text-2xl font-bold text-[#0b2545] mb-6">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-[#0b2545] mb-2">{f.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterEn lang="de" />
      <StickyWhatsappCta lang="de" />
    </>
  );
}
