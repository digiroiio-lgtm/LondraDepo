import { SITE_URL } from "@/lib/site";

/**
 * Single source for the Organization / LocalBusiness node, used by both the TR and EN layouts so the
 * same @id always carries the same facts. Only verified facts: Companies House 13247691, VAT
 * GB353315322, office hours Monday–Friday 07:45–17:30 UK time (owner-confirmed), coordinates of
 * SS6 7FY from postcodes.io.
 */
export const ORG_ID = `${SITE_URL}/#organization`;

const DESCRIPTION = {
  en: "UK third-party logistics warehouse in Rayleigh, Essex, near London, providing warehousing, pallet storage, container unloading, ecommerce fulfilment, Amazon FBA prep and UK-wide distribution for international brands. Operated by Arca Trade Group Ltd, which also provides international freight and customs clearance. Not a bonded warehouse; not an official Amazon or Shopify partner.",
  tr: "Rayleigh, Essex'te, Londra yakınında İngiltere depo ve lojistik operasyonu: depolama, palet depolama, konteyner boşaltma, e-ticaret fulfillment, Amazon FBA prep ve UK dağıtım. Uluslararası nakliye ve gümrüklemeyi de sağlayan Arca Trade Group Ltd tarafından işletilir. Antrepo değildir; resmi Amazon veya Shopify partneri değildir.",
} as const;

export function orgNode(lang: "en" | "tr") {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: "LondraDepo.com",
    legalName: "Arca Trade Group Ltd",
    url: lang === "en" ? `${SITE_URL}/en` : SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
    image: `${SITE_URL}/arterial-park-arterial-road-rayleigh_depoici.jpeg`,
    description: DESCRIPTION[lang],
    foundingDate: "2021",
    areaServed: ["London", "Essex", "Birmingham", "Manchester", "United Kingdom"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 19 Arterial Park, Arterial Road",
      addressLocality: "Rayleigh",
      addressRegion: "Essex",
      postalCode: "SS6 7FY",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.590079, longitude: 0.566501 },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Unit+19+Arterial+Park+Rayleigh+SS6+7FY",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:45",
        closes: "17:30",
      },
    ],
    telephone: "+447554195190",
    email: "Sales@arcatrade.co.uk",
    vatID: "GB353315322",
    knowsAbout: ["UK warehousing", "Ecommerce fulfilment", "Pallet storage", "Container unloading", "Amazon FBA prep", "UK distribution", "Customs clearance coordination"],
    knowsLanguage: ["en", "tr"],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer service", telephone: "+447554195190", availableLanguage: ["English", "Turkish"] },
      { "@type": "ContactPoint", contactType: "sales", telephone: "+441268203283", availableLanguage: ["English", "Turkish"], hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:45", closes: "17:30" } },
    ],
    sameAs: [
      "https://find-and-update.company-information.service.gov.uk/company/13247691",
      "https://www.linkedin.com/company/arcatradegroup/",
      "https://bifa.org/members/arca-trade-group-ltd/",
      "https://in.kompass.com/c/arca-trade-group-ltd/gbcs13970309/",
      "https://open.endole.co.uk/insight/company/13247691-arca-trade-group-ltd",
    ],
  };
}
