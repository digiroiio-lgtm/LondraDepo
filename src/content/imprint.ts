import type { EnPage } from "./en/types";
import { COMPANY, warehouseRows, type FactLang } from "@/lib/warehouse";

/** Imprint (Impressum / Künye / Dane firmy): who runs the site, how to reach them, and the warehouse specification. */
export const IMPRINT_PATHS: Record<FactLang, string> = { tr: "/kunye", en: "/en/imprint", pl: "/pl/dane-firmy", de: "/de/impressum" };

const MODIFIED = "2026-11-28";

const T = {
  tr: {
    title: "Künye: Arca Trade Group Ltd ve LondraDepo", h1: "Künye",
    description: "LondraDepo.com'u işleten Arca Trade Group Ltd'nin şirket bilgileri: kayıtlı adres, şirket numarası, KDV numarası, yönetici, iletişim ve depo teknik bilgileri.",
    lead: "LondraDepo.com, İngiltere ve Galler'de kayıtlı Arca Trade Group Ltd tarafından işletilir. Şirket bilgileri, iletişim kanalları ve Rayleigh, Essex'teki deponun teknik özellikleri aşağıdadır.",
    company: "Şirket bilgileri", warehouse: "Depo teknik bilgileri", sources: "Kayıtları kendiniz doğrulayın",
    warehouseNote: "Ölçüler bina broşüründeki brüt iç alanlardır.",
    rows: ["Şirket unvanı", "Marka", "Kayıtlı adres ve depo", "Kayıt yeri", "Şirket numarası", "Kuruluş tarihi", "KDV numarası", "Yönetici (Director)", "Operasyon müdürü", "Ofis telefonu", "Mobil / WhatsApp", "Satış e-postası", "Destek e-postası", "Üyelik", "Çalışma saatleri", "İçerikten sorumlu"],
    registered: "İngiltere ve Galler", incorporated: "5 Mart 2021", hours: "Pazartesi–Cuma 07:45–17:30 (İngiltere saati)", member: "BIFA (British International Freight Association) üyesi",
    head: ["Bilgi", "Değer"], updated: "28 Kasım 2026",
    ch: "Companies House şirket kaydı (13247691)", bifa: "BIFA üye kaydı",
  },
  en: {
    title: "Imprint: Arca Trade Group Ltd, LondraDepo", h1: "Imprint",
    description: "Company details of Arca Trade Group Ltd, operator of LondraDepo.com: registered office, company and VAT numbers, director, contact details and warehouse specification.",
    lead: "LondraDepo.com is operated by Arca Trade Group Ltd, registered in England and Wales. Below are the company details, how to reach us and the specification of our warehouse in Rayleigh, Essex.",
    company: "Company details", warehouse: "Warehouse specification", sources: "Verify our registrations",
    warehouseNote: "Areas are gross internal areas from the building's letting brochure.",
    rows: ["Operator", "Trading name", "Registered office and warehouse", "Registered in", "Company number", "Incorporated", "VAT number", "Director", "Operations manager", "Office phone", "Mobile / WhatsApp", "Sales email", "Support email", "Membership", "Office hours", "Responsible for content"],
    registered: "England and Wales", incorporated: "5 March 2021", hours: "Monday–Friday 07:45–17:30 UK time", member: "Member of BIFA (British International Freight Association)",
    head: ["Item", "Details"], updated: "28 November 2026",
    ch: "Companies House record (13247691)", bifa: "BIFA member listing",
  },
  pl: {
    title: "Dane firmy: Arca Trade Group Ltd i LondraDepo", h1: "Dane firmy",
    description: "Dane firmy Arca Trade Group Ltd, operatora LondraDepo.com: adres siedziby, numer spółki i VAT, dyrektor, dane kontaktowe oraz parametry techniczne magazynu.",
    lead: "LondraDepo.com prowadzi Arca Trade Group Ltd, spółka zarejestrowana w Anglii i Walii. Poniżej znajdziesz dane firmy, dane kontaktowe i parametry techniczne magazynu w Rayleigh w Essex.",
    company: "Dane spółki", warehouse: "Parametry techniczne magazynu", sources: "Sprawdź nasze rejestracje",
    warehouseNote: "Powierzchnie to powierzchnie wewnętrzne brutto według prospektu budynku.",
    rows: ["Operator", "Marka", "Siedziba i magazyn", "Rejestracja", "Numer spółki", "Data założenia", "Numer VAT", "Dyrektor (Director)", "Kierownik operacyjny", "Telefon biura", "Telefon / WhatsApp", "E-mail sprzedaży", "E-mail wsparcia", "Członkostwo", "Godziny pracy", "Odpowiedzialny za treść"],
    registered: "Anglia i Walia", incorporated: "5 marca 2021", hours: "Poniedziałek–piątek 07:45–17:30 czasu UK", member: "Członek BIFA (British International Freight Association)",
    head: ["Pozycja", "Dane"], updated: "28 listopada 2026",
    ch: "Rejestr Companies House (13247691)", bifa: "Wpis w rejestrze członków BIFA",
  },
  de: {
    title: "Impressum: Arca Trade Group Ltd und LondraDepo", h1: "Impressum",
    description: "Impressum von LondraDepo.com: Arca Trade Group Ltd, Sitz, Handelsregister- und USt-Nummer, Geschäftsführer, Kontaktdaten und technische Daten des Lagers in Essex.",
    lead: "LondraDepo.com wird von der Arca Trade Group Ltd betrieben, eingetragen in England und Wales. Hier finden Sie die Angaben zum Unternehmen, die Kontaktdaten und die technischen Daten unseres Lagers in Rayleigh, Essex.",
    company: "Angaben zum Unternehmen", warehouse: "Technische Daten des Lagers", sources: "Registereinträge selbst prüfen",
    warehouseNote: "Flächenangaben sind Brutto-Innenflächen laut Vermietungsbroschüre des Gebäudes.",
    rows: ["Betreiber", "Marke", "Sitz und Lager", "Registriert in", "Handelsregisternummer (Companies House)", "Gegründet", "USt-IdNr. (UK VAT)", "Geschäftsführer (Director)", "Betriebsleiter", "Telefon Büro", "Mobil / WhatsApp", "E-Mail Vertrieb", "E-Mail Support", "Mitgliedschaft", "Bürozeiten", "Verantwortlich für den Inhalt"],
    registered: "England und Wales", incorporated: "5. März 2021", hours: "Montag–Freitag 07:45–17:30 Uhr britischer Zeit", member: "Mitglied der BIFA (British International Freight Association)",
    head: ["Angabe", "Wert"], updated: "28. November 2026",
    ch: "Eintrag bei Companies House (13247691)", bifa: "Eintrag im BIFA-Mitgliederverzeichnis",
  },
} as const;

export function imprintText(lang: FactLang) {
  return T[lang];
}

/** Company rows [label, value] in one language. */
export function companyRows(lang: FactLang): [string, string][] {
  const t = T[lang];
  const values = [
    COMPANY.legalName, COMPANY.brand, COMPANY.address, t.registered, COMPANY.companyNo, t.incorporated, COMPANY.vat,
    COMPANY.director, COMPANY.operationsManager, COMPANY.phoneOffice, COMPANY.phoneMobile, COMPANY.emailSales, COMPANY.emailSupport,
    t.member, t.hours, `${COMPANY.director}, ${COMPANY.address}`,
  ];
  return t.rows.map((label, i) => [label, values[i]]);
}

/** Imprint as an EnPage (EN/PL/DE are rendered by EnPageView). */
export function imprintPage(lang: Exclude<FactLang, "tr">): EnPage {
  const t = T[lang];
  return {
    slug: IMPRINT_PATHS[lang],
    ...(lang === "en" ? { tr: IMPRINT_PATHS.tr } : {}),
    kind: "legal",
    modified: MODIFIED,
    updated: t.updated,
    title: t.title,
    description: t.description,
    label: t.h1,
    h1: t.h1,
    lead: t.lead,
    sections: [
      { type: "table", h2: t.company, head: [...t.head], rows: companyRows(lang) },
      { type: "table", h2: t.warehouse, head: [...t.head], rows: warehouseRows(lang), note: t.warehouseNote },
      { type: "sources", h2: t.sources, items: [{ label: t.ch, href: COMPANY.companiesHouse }, { label: t.bifa, href: COMPANY.bifa }] },
    ],
  };
}
