/**
 * Facts about the LondraDepo warehouse building (Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY) and the operating
 * company, shown on the imprint pages, under the photo gallery and in the Organization schema.
 *
 * Source: the Arterial Park Unit 19 letting brochure (2026) and Companies House, collected and confirmed by the owner
 * on 28 November 2026. Areas are gross internal; sq ft are converted from m² (1 m² = 10.7639 sq ft).
 * Design targets (EPC, BREEAM) and estimated capacities are deliberately not published.
 */
export const WAREHOUSE = {
  totalM2: 1003.78,
  warehouseM2: 870.5,
  officeM2: 133.32,
  eavesM: 10,
  floorKnM2: 50,
  powerKva: 150,
  loadingDoors: 1,
  parking: 7,
  yardM: 21,
  completed: "2025-01",
} as const;

export const COMPANY = {
  legalName: "Arca Trade Group Ltd",
  brand: "LondraDepo.com",
  companyNo: "13247691",
  incorporated: "2021-03-05",
  vat: "GB353315322",
  director: "Sertaç Yılmaz",
  operationsManager: "Yusuf Barış",
  address: "Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom",
  phoneOffice: "+44 1268 203 283",
  phoneMobile: "+44 7554 195190",
  emailSales: "Sales@arcatrade.co.uk",
  emailSupport: "support@londradepo.com",
  companiesHouse: "https://find-and-update.company-information.service.gov.uk/company/13247691",
  bifa: "https://bifa.org/members/arca-trade-group-ltd/",
} as const;

export type FactLang = "tr" | "en" | "pl" | "de";

const sqft = (m2: number) => Math.round(m2 * 10.7639).toLocaleString("en-GB");
const num = (n: number, lang: FactLang) => n.toLocaleString({ tr: "tr-TR", en: "en-GB", pl: "pl-PL", de: "de-DE" }[lang], { maximumFractionDigits: 2 });
const area = (m2: number, lang: FactLang) => `${num(m2, lang)} m² (${sqft(m2)} sq ft)`;

const LABELS: Record<FactLang, Record<keyof typeof WAREHOUSE, string>> = {
  tr: { totalM2: "Toplam kapalı alan", warehouseM2: "Depo alanı", officeM2: "Ofis alanı", eavesM: "Depo iç yüksekliği", floorKnM2: "Zemin taşıma kapasitesi", powerKva: "Elektrik kapasitesi", loadingDoors: "Yükleme kapısı", parking: "Otopark", yardM: "Ön manevra alanı derinliği", completed: "Bina tamamlanma" },
  en: { totalM2: "Total internal area", warehouseM2: "Warehouse area", officeM2: "Office area", eavesM: "Clear internal height", floorKnM2: "Floor loading", powerKva: "Power supply", loadingDoors: "Loading door", parking: "Car parking", yardM: "Yard depth", completed: "Building completed" },
  pl: { totalM2: "Łączna powierzchnia wewnętrzna", warehouseM2: "Powierzchnia magazynowa", officeM2: "Powierzchnia biurowa", eavesM: "Wysokość wewnętrzna", floorKnM2: "Nośność posadzki", powerKva: "Moc przyłącza", loadingDoors: "Brama załadunkowa", parking: "Miejsca parkingowe", yardM: "Głębokość placu manewrowego", completed: "Ukończenie budynku" },
  de: { totalM2: "Gesamte Innenfläche", warehouseM2: "Lagerfläche", officeM2: "Bürofläche", eavesM: "Lichte Innenhöhe", floorKnM2: "Bodenbelastbarkeit", powerKva: "Stromanschluss", loadingDoors: "Ladetor", parking: "Pkw-Stellplätze", yardM: "Tiefe der Hoffläche", completed: "Fertigstellung des Gebäudes" },
};

const DOOR: Record<FactLang, string> = { tr: "1 adet, zemin seviyesinde", en: "1 level-access door", pl: "1 brama na poziomie posadzki", de: "1 ebenerdiges Tor" };
const SPACES: Record<FactLang, (n: number) => string> = { tr: (n) => `${n} araç`, en: (n) => `${n} spaces`, pl: (n) => `${n} miejsc`, de: (n) => `${n} Stellplätze` };
const DONE: Record<FactLang, string> = { tr: "Ocak 2025 (Grade A yeni bina)", en: "January 2025 (new Grade A building)", pl: "Styczeń 2025 (nowy budynek klasy A)", de: "Januar 2025 (neues Grade-A-Gebäude)" };
const APPROX: Record<FactLang, string> = { tr: "yaklaşık", en: "approx.", pl: "ok.", de: "ca." };

/** Rows [label, value] of the warehouse specification in one language. */
export function warehouseRows(lang: FactLang): [string, string][] {
  const L = LABELS[lang];
  return [
    [L.totalM2, area(WAREHOUSE.totalM2, lang)],
    [L.warehouseM2, area(WAREHOUSE.warehouseM2, lang)],
    [L.officeM2, area(WAREHOUSE.officeM2, lang)],
    [L.eavesM, `${WAREHOUSE.eavesM} m`],
    [L.floorKnM2, `${WAREHOUSE.floorKnM2} kN/m²`],
    [L.powerKva, `${WAREHOUSE.powerKva} kVA`],
    [L.loadingDoors, DOOR[lang]],
    [L.parking, SPACES[lang](WAREHOUSE.parking)],
    [L.yardM, `${APPROX[lang]} ${WAREHOUSE.yardM} m`],
    [L.completed, DONE[lang]],
  ];
}

/** schema.org PropertyValue list for the Organization/LocalBusiness node (English names). */
export function warehouseProperties() {
  return warehouseRows("en").map(([name, value]) => ({ "@type": "PropertyValue", name, value }));
}
