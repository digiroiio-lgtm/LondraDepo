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

const PATH = "/pl/zapytanie-ofertowe";
const TITLE = "Zapytanie ofertowe: magazyn w Wielkiej Brytanii";
const DESCRIPTION =
  "Poproś o wycenę magazynowania, składowania palet, rozładunku kontenerów, fulfillmentu, Amazon FBA prep lub dystrybucji w UK. Palety od 3,50 £ + VAT tygodniowo.";

export const metadata: Metadata = {
  title: `${TITLE} | LondraDepo`,
  description: DESCRIPTION,
  alternates: localeAlternates(PATH),
  openGraph: { title: TITLE, description: DESCRIPTION, url: absolute(PATH), siteName: "LondraDepo.com", ...ogLocale("pl"), type: "website" },
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
      inLanguage: "pl",
      isPartOf: { "@id": `${SITE_URL}/pl#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: absolute("/pl") },
        { "@type": "ListItem", position: 2, name: "Zapytanie ofertowe", item: absolute(PATH) },
      ],
    },
  ],
};

const STEPS = [
  ["Prześlij wymagania", "Podaj usługę, kategorię produktów i przybliżone wolumeny. Zajmuje to około dwóch minut."],
  ["Analizujemy Twoją operację", "Zespół magazynowy sprawdza potrzeby w zakresie obsługi, składowania i dostaw i może zadać kilka pytań."],
  ["Otrzymujesz ofertę", "Składowanie, obsługa, fulfillment i dostawa są wycenione pozycja po pozycji, więc widzisz, za co płacisz."],
] as const;

const FAQS: Faq[] = [
  { q: "Czy wycena jest bezpłatna?", a: "Tak. Wycena LondraDepo jest bezpłatna i do niczego nie zobowiązuje. Wypełnij formularz z opisem produktu, wolumenu i usług, a zespół odpowie e-mailem z ofertą." },
  { q: "Jakie informacje są potrzebne do wyceny?", a: "Rodzaj i wymiary produktu, szacowana liczba palet lub kartonów, liczba zamówień miesięcznie, kanały sprzedaży i kraj nadania. Im więcej szczegółów, tym dokładniejsza wycena." },
  { q: "Czy jest minimalny wolumen do wyceny?", a: "Nie ma stałego minimum. Można zacząć od jednej palety testowej, tak jak jeden z producentów żywności opisanych w naszych studiach przypadków, i zwiększać wolumen." },
  { q: "Czy wycena może obejmować transport i odprawę celną?", a: "Tak. Arca Trade Group, operator LondraDepo, może wycenić transport międzynarodowy i brytyjską odprawę celną razem z magazynem; możesz też wycenić tylko magazyn." },
  { q: "W jakim języku mogę wypełnić formularz?", a: "Opis możesz napisać po polsku lub po angielsku. Zespół w Wielkiej Brytanii pracuje w języku angielskim i tureckim, więc ofertę przygotowujemy po angielsku." },
];

export default function ZapytanieOfertowePage() {
  return (
    <>
      <HeaderEn lang="pl" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-10">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
              <Link href="/pl" className="hover:text-[#0b2545]">Strona główna</Link>
              <span className="mx-1.5">/</span>
              <span aria-current="page">Zapytanie ofertowe</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] leading-tight mb-4 max-w-3xl">Poproś o wycenę magazynowania w Wielkiej Brytanii</h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
              Opisz, co chcesz składować, realizować lub dystrybuować w Wielkiej Brytanii. LondraDepo prowadzi magazyn pod adresem Unit 19
              Arterial Park, Rayleigh, Essex. Składowanie standardowej palety zaczyna się od 3,50 £ + VAT tygodniowo; przyjęcie towaru,
              obsługę, fulfillment i dostawę wyceniamy dla Twojej operacji.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <QuoteFormEn lang="pl" formId="pl_request_a_quote" />
          </div>
          <aside className="space-y-8">
            <section>
              <h2 className="text-lg font-bold text-[#0b2545] mb-3">Co dalej</h2>
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
              <h2 className="text-lg font-bold text-[#0b2545] mb-1">Wolisz porozmawiać?</h2>
              <p>
                <TrackedLink kind="whatsapp" source="quote_page" href={UI.pl.sticky.href} className="font-semibold text-green-700 underline">
                  WhatsApp +44 7554 195190
                </TrackedLink>
              </p>
              <p>
                <TrackedLink kind="phone" source="quote_page" href="tel:+441268203283" className="font-semibold text-[#0b2545] underline">
                  Biuro +44 1268 203 283
                </TrackedLink>{" "}
                (07:45–17:30 czasu UK)
              </p>
              <p>
                <TrackedLink kind="booking" source="quote_page" href={bookingUrl("en", PATH)} className="font-semibold text-[#0b2545] underline">
                  Umów 15-minutową rozmowę (po angielsku)
                </TrackedLink>
              </p>
              <p>Obsługa w języku angielskim i tureckim.</p>
            </section>
            <section className="text-sm text-slate-700">
              <h2 className="text-lg font-bold text-[#0b2545] mb-2">Przydatne przed wysłaniem</h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><Link href="/pl/cennik-magazynowania" className="underline">Cennik magazynowania</Link></li>
                <li><Link href="/pl/skladowanie-palet" className="underline">Składowanie palet</Link></li>
                <li><Link href="/pl/fulfillment-ecommerce" className="underline">Fulfillment e-commerce</Link></li>
                <li><Link href="/pl/magazyn-dla-polskich-firm" className="underline">Dla firm z Polski</Link></li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="max-w-3xl mx-auto px-4 pb-14">
          <FaqJsonLd faqs={FAQS} />
          <h2 className="text-2xl font-bold text-[#0b2545] mb-6">Najczęściej zadawane pytania</h2>
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
      <FooterEn lang="pl" />
      <StickyWhatsappCta lang="pl" />
    </>
  );
}
