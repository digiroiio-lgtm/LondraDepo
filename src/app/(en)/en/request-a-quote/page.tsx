import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/HeaderEn";
import FooterEn from "@/components/FooterEn";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import QuoteFormEn from "@/components/QuoteFormEn";
import TrackedLink from "@/components/TrackedLink";
import FaqJsonLd, { type Faq } from "@/components/FaqJsonLd";
import { bookingUrl } from "@/lib/booking";
import { absolute, enAlternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const PATH = "/en/request-a-quote";
const TITLE = "Request a UK Warehousing & Fulfilment Quote";
const DESCRIPTION =
  "Request a quote for UK warehousing, pallet storage, container unloading, fulfilment, Amazon prep or distribution from our Essex warehouse. Pallet storage from £3.50 + VAT per week.";

export const metadata: Metadata = {
  title: `${TITLE} | LondraDepo`,
  description: DESCRIPTION,
  alternates: enAlternates(PATH),
  openGraph: { title: TITLE, description: DESCRIPTION, url: absolute(PATH), siteName: "LondraDepo.com", locale: "en_GB", type: "website" },
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
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/en#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absolute("/en") },
        { "@type": "ListItem", position: 2, name: "Request a Quote", item: absolute(PATH) },
      ],
    },
  ],
};

const STEPS = [
  ["Send your requirements", "Tell us the service, product category and approximate volumes. It takes about two minutes."],
  ["We review your operation", "Our warehouse team checks handling, storage and delivery needs and may ask a few follow-up questions."],
  ["You receive a tailored quote", "Storage, handling, fulfilment and delivery are priced line by line, so you can see exactly what you pay for."],
] as const;

const FAQS: Faq[] = [
  { q: "Is the quote free?", a: "Yes. A LondraDepo quote is free and does not commit you to anything. Fill in the form with your product, volumes and services and the team replies by email with a tailored proposal." },
  { q: "What information do I need for a UK warehousing quote?", a: "Share your product type and sizes, estimated pallets or cartons, monthly orders, sales channels and where the goods ship from. The more detail you give, the more accurate the quote for storage, handling and delivery." },
  { q: "Is there a minimum order or pallet volume for a quote?", a: "There is no fixed minimum. You can start with a single trial pallet, as one of the food producers in our case studies did, and grow from there." },
  { q: "Can freight and customs clearance be included in the quote?", a: "Yes. Arca Trade Group, which operates LondraDepo, can quote international freight and UK customs clearance alongside warehousing, or you can use your own forwarder and quote the warehouse only." },
  { q: "Can I talk to someone before sending the form?", a: "Yes. You can message the team on WhatsApp at +44 7554 195190, call the office on +44 1268 203 283 between 07:45 and 17:30 UK time, or book a 15-minute call." },
];

export default function RequestAQuotePage() {
  return (
    <>
      <HeaderEn />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-10">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
              <Link href="/en" className="hover:text-[#0b2545]">Home</Link>
              <span className="mx-1.5">/</span>
              <span aria-current="page">Request a Quote</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] leading-tight mb-4 max-w-3xl">Request a UK Warehousing Quote</h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
              Tell us what you need to store, fulfil or distribute in the UK. LondraDepo runs a warehouse at Unit 19 Arterial Park,
              Rayleigh, Essex, about 40 minutes from east London. Standard pallet storage starts from £3.50 + VAT per pallet per week;
              goods-in, handling, fulfilment and delivery are quoted for your operation.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <QuoteFormEn />
          </div>
          <aside className="space-y-8">
            <section>
              <h2 className="text-lg font-bold text-[#0b2545] mb-3">What happens next</h2>
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
              <h2 className="text-lg font-bold text-[#0b2545] mb-1">Prefer to talk?</h2>
              <p>
                <TrackedLink kind="whatsapp" source="quote_page" href="https://wa.me/447554195190?text=Hello%2C%20I%27d%20like%20a%20warehousing%20quote." className="font-semibold text-green-700 underline">
                  WhatsApp +44 7554 195190
                </TrackedLink>
              </p>
              <p>
                <TrackedLink kind="phone" source="quote_page" href="tel:+441268203283" className="font-semibold text-[#0b2545] underline">
                  Office +44 1268 203 283
                </TrackedLink>{" "}
                (07:45–17:30 UK time)
              </p>
              <p>
                <TrackedLink kind="booking" source="quote_page" href={bookingUrl("en", PATH)} className="font-semibold text-[#0b2545] underline">
                  Book a 15-minute call
                </TrackedLink>
              </p>
              <p>English and Turkish spoken.</p>
            </section>
            <section className="text-sm text-slate-700">
              <h2 className="text-lg font-bold text-[#0b2545] mb-2">Useful before you ask</h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><Link href="/en/uk-warehousing-pricing" className="underline">UK warehousing pricing</Link></li>
                <li><Link href="/en/pallet-storage" className="underline">Pallet storage</Link></li>
                <li><Link href="/en/uk-fulfilment" className="underline">UK fulfilment</Link></li>
                <li><Link href="/en/case-studies" className="underline">Case studies</Link></li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="max-w-3xl mx-auto px-4 pb-14">
          <FaqJsonLd faqs={FAQS} />
          <h2 className="text-2xl font-bold text-[#0b2545] mb-6">Frequently asked questions</h2>
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
      <FooterEn />
      <StickyWhatsappCta lang="en" />
    </>
  );
}
