/**
 * Customer-finding wizard: segments, the agent task text, CSV/JSON import and the commercial priority score.
 * Pure functions only (no storage). Facts about LondraDepo are the verified ones used across the site; never add
 * partner/bonded/returns/cross-dock claims or unconfirmed prices here. The only price used is pallet storage
 * from £3.50 + VAT per pallet per week.
 */

export const PALLET_WEEK_GBP = 3.5;
export const PALLET_MONTH_GBP = (PALLET_WEEK_GBP * 52) / 12; // ≈ £15.17

export const POSITIONING_EN = "We help international brands and exporters store, fulfil and distribute their products across the UK without the cost of running their own warehouse.";
export const POSITIONING_TR = "İngiltere'de kendi deponuzu kurmadan ürünlerinizi depolayın, siparişlerinizi hazırlayın ve İngiltere genelindeki müşterilerinize ulaştırın.";

export type Region = "tr" | "global" | "uk";
export type Group = "exporter" | "amazon" | "shopify" | "importer" | "packauto" | "forwarder" | "other";

export type Segment = {
  id: string;
  label: string;
  prior: number; // commercial fit of the segment (business analysis, 0–100)
  potential: "Yüksek" | "Orta–yüksek" | "Orta" | "Düşük";
  region: Region;
  group: Group;
  services: string;
  dm: string; // decision makers
  angle: string; // sales angle (TR)
  hint: string; // what to look for
  ecommerce?: boolean;
  partner?: boolean;
  low?: boolean;
};

/** The 12 segments of the business analysis, highest commercial fit first. */
export const SEGMENTS: Segment[] = [
  { id: "tr_exporter", label: "Türkiye'den İngiltere'ye ihracat yapan üreticiler", prior: 97, potential: "Yüksek", region: "tr", group: "exporter", services: "Palet depolama · Konteyner boşaltma · B2B dağıtım", dm: "Export Manager / İhracat Müdürü, CEO / Genel Müdür", angle: "İngiltere'de yerel stok ve dağıtım: siparişleri her seferinde Türkiye'den göndermek yerine yerel depodan teslim", hint: "İngiltere'deki toptancı, distribütör veya perakendecilere düzenli ihracat yapan; İngiltere'de stok tutup yerel dağıtım yapmak isteyen üreticiler" },
  { id: "amazon_uk", label: "Amazon UK satıcıları", prior: 95, potential: "Orta–yüksek", region: "tr", group: "amazon", services: "Amazon FBA hazırlık · Depolama · Fulfilment", dm: "Founder / Kurucu, Operations Manager", angle: "FBA hazırlık (etiketleme, paketleme) ve stoğu bizde tutup Amazon depolarına partiler halinde gönderme", hint: "Amazon.co.uk'ta satan, FBA hazırlık, stok kabulü veya Amazon dışı depolama ihtiyacı olan markalar", ecommerce: true },
  { id: "shopify_dtc", label: "Shopify ve DTC e-ticaret markaları", prior: 94, potential: "Orta–yüksek", region: "tr", group: "shopify", services: "Pick & pack · E-ticaret fulfilment", dm: "Head of E-commerce / E-ticaret Müdürü, Founder", angle: "Sipariş bazlı fulfilment: kendi depo ekibi olmadan İngiltere müşterilerine gönderim", hint: "İngiltere'deki müşterilerine kendi sitesinden (Shopify, WooCommerce vb.) satan, kendi depo ekibi olmayan markalar", ecommerce: true },
  { id: "uk_importer", label: "İngiltere distribütörleri ve ithalatçılar", prior: 93, potential: "Yüksek", region: "uk", group: "importer", services: "Konteyner boşaltma · Palet depolama · Dağıtım", dm: "Supply Chain Director, Operations Manager, Managing Director", angle: "Konteynerden depoya: London Gateway, Tilbury ve Felixstowe'a yakın boşaltma, palet depolama ve dağıtım", hint: "Düzenli konteyner ithalatı yapan ve stoğunu dağıtım noktalarına sevk eden İngiltere firmaları" },
  { id: "packaging", label: "Ambalaj ve gıda ambalajı üreticileri", prior: 92, potential: "Yüksek", region: "tr", group: "packauto", services: "Toplu depolama · Palet dağıtımı", dm: "Export Sales Director, İhracat Müdürü", angle: "Palet bazlı İngiltere stoku: müşterilerinize yerel stoktan düzenli palet teslimi", hint: "Koli, pizza kutusu, karton ve gıda ambalajı üreten ve İngiltere'ye sevkiyat yapan şirketler" },
  { id: "auto_parts", label: "Otomotiv yedek parça şirketleri", prior: 90, potential: "Yüksek", region: "tr", group: "packauto", services: "Depolama · Stok yönetimi · B2B teslimat", dm: "Export Manager, Satış Direktörü, Operations Manager", angle: "İngiltere'de yerel yedek parça stoku ve bayi/servislere dağıtım", hint: "İngiltere pazarında yedek parça stoku tutup bayi ve servislere dağıtım yapan veya yapmak isteyen şirketler" },
  { id: "forwarder", label: "Uluslararası freight forwarder'lar (partner)", prior: 89, potential: "Yüksek", region: "tr", group: "forwarder", services: "Konteyner elleçleme · Depolama · Dağıtım", dm: "UK Operations Manager, Genel Müdür, İş Geliştirme Müdürü", angle: "Yerel depo partnerliği: müşterilerinizin İngiltere'ye gelen yükleri için Essex'te boşaltma, depolama ve dağıtım", hint: "İngiltere'ye düzenli yük taşıyan ama İngiltere'de (özellikle Essex / Güneydoğu İngiltere) kendi deposu olmayan nakliye organizatörleri", partner: true },
  { id: "market_entry", label: "İngiltere pazarına yeni giren yabancı markalar", prior: 88, potential: "Orta–yüksek", region: "global", group: "other", services: "Pazara giriş · Depolama · Fulfilment", dm: "Founder, International Expansion / Export Manager", angle: "İngiltere'de depo ve dağıtım ağı kurmadan pazarı tek paletle test etme", hint: "İngiltere'de yeni distribütör, mağaza veya Amazon.co.uk listesi açan; İngiltere'ye yeni giren markalar" },
  { id: "furniture_home", label: "Mobilya ve ev yaşam ürünleri markaları", prior: 87, potential: "Yüksek", region: "tr", group: "other", services: "Toplu depolama · Dağıtım", dm: "Export Manager, Operations Manager", angle: "Hacimli ürünler için palet depolama ve İngiltere geneli dağıtım", hint: "Hacimli ürünlerinin İngiltere stok ve dağıtımını dış kaynakla yönetmek isteyen mobilya, ev ve fitness markaları" },
  { id: "electronics_energy", label: "Elektronik ve taşınabilir enerji markaları", prior: 85, potential: "Orta–yüksek", region: "global", group: "other", services: "Depolama · Pick & pack · Dağıtım", dm: "Operations Manager, Head of E-commerce", angle: "Elektronik ve enerji ürünleri için stok, sipariş hazırlama ve dağıtım", hint: "Elektronik cihaz, aksesuar, taşınabilir güç istasyonu ve enerji ürünleri satan markalar", ecommerce: true },
  { id: "seasonal", label: "Sezonluk stok ihtiyacı olan perakendeciler", prior: 83, potential: "Orta", region: "uk", group: "other", services: "Taşma (overflow) depolama · Sezonluk fulfilment", dm: "Supply Chain / Operations Manager, Buying Director", angle: "Black Friday ve Noel dönemi için ek palet depolama ve kampanya dönemi sipariş hazırlama", hint: "Black Friday, Noel ve kampanya dönemlerinde ilave depolama ihtiyacı olan İngiltere perakendecileri (en iyi zaman: Ağustos–Ekim)" },
  { id: "ebay_micro", label: "Küçük ölçekli bireysel eBay satıcıları", prior: 65, potential: "Düşük", region: "uk", group: "other", services: "Küçük depolama · Pick & pack", dm: "Kurucu / satıcı", angle: "Küçük hacimli depolama ve sipariş hazırlama", hint: "Düzenli siparişi olan küçük eBay ve marketplace satıcıları", ecommerce: true, low: true },
];

export const segmentById = (id?: string) => SEGMENTS.find((s) => s.id === id);

/** Suggested mix for the first 100 prospects (estimate based on the business analysis). */
export const MIX: { group: Group; label: string; target: number; segments: string[] }[] = [
  { group: "exporter", label: "Türk ihracatçılar", target: 30, segments: ["tr_exporter"] },
  { group: "amazon", label: "Amazon UK", target: 20, segments: ["amazon_uk"] },
  { group: "shopify", label: "Shopify / DTC", target: 15, segments: ["shopify_dtc"] },
  { group: "importer", label: "UK ithalatçılar", target: 15, segments: ["uk_importer"] },
  { group: "packauto", label: "Ambalaj / otomotiv", target: 12, segments: ["packaging", "auto_parts"] },
  { group: "forwarder", label: "Freight forwarder", target: 8, segments: ["forwarder"] },
];

/** Product categories (strongest sectors from the analysis first). */
export const CATEGORIES = [
  { id: "packaging", label: "Ambalaj ve karton", prior: 95 },
  { id: "auto", label: "Otomotiv parçaları", prior: 92 },
  { id: "textile", label: "Tekstil ve ayakkabı", prior: 91 },
  { id: "home_fitness", label: "Ev ve fitness ürünleri", prior: 87 },
  { id: "furniture", label: "Mobilya", prior: 87 },
  { id: "food", label: "Gıda (kuru, ortam sıcaklığı)", prior: 80 },
  { id: "cosmetics", label: "Kozmetik ve kişisel bakım", prior: 78 },
  { id: "building", label: "Yapı malzemesi ve hırdavat", prior: 78 },
  { id: "electronics", label: "Elektronik ve aksesuar", prior: 80 },
] as const;

/**
 * Source countries for "other countries" searches, scored for LondraDepo (strategic estimate, not trade data):
 * import size 25% · storage/fulfilment need 35% · reachability 25% · operational fit 15%.
 * P1: active first sales wave · P2: second wave · P3: selective.
 */
export type CountryInfo = { name: string; flag: string; score: number; tier: "P1" | "P2" | "P3"; products: string };
export const COUNTRY_INFO: CountryInfo[] = [
  { name: "Türkiye", flag: "🇹🇷", score: 99, tier: "P1", products: "tekstil, mobilya, ev eşyası, ambalaj" },
  { name: "Çin", flag: "🇨🇳", score: 98, tier: "P1", products: "elektronik, ev ürünleri, aksesuar (Amazon/Shopify satıcıları)" },
  { name: "Almanya", flag: "🇩🇪", score: 95, tier: "P1", products: "makine, otomotiv yan sanayi, tüketim ürünleri" },
  { name: "Hollanda", flag: "🇳🇱", score: 94, tier: "P1", products: "e-ticaret, distribütörlük, transit (AB depoları)" },
  { name: "Belçika", flag: "🇧🇪", score: 94, tier: "P1", products: "Antwerp lojistik merkezi, AB→UK dağıtım, ihracat distribütörleri" },
  { name: "Polonya", flag: "🇵🇱", score: 93, tier: "P1", products: "mobilya, ev eşyası, ambalaj" },
  { name: "İtalya", flag: "🇮🇹", score: 91, tier: "P1", products: "mobilya, moda, tasarım ürünleri" },
  { name: "Hindistan", flag: "🇮🇳", score: 90, tier: "P1", products: "tekstil, ev ürünleri, aksesuar" },
  { name: "Çekya", flag: "🇨🇿", score: 90, tier: "P1", products: "üretim, otomotiv parçaları, endüstriyel ürünler" },
  { name: "Güney Kore", flag: "🇰🇷", score: 89, tier: "P1", products: "K-beauty, elektronik, tüketim markaları" },
  { name: "Fransa", flag: "🇫🇷", score: 88, tier: "P2", products: "kozmetik, moda, tüketim ürünleri" },
  { name: "Vietnam", flag: "🇻🇳", score: 88, tier: "P2", products: "mobilya, tekstil, tüketim elektroniği" },
  { name: "İsveç", flag: "🇸🇪", score: 87, tier: "P2", products: "mobilya, ev yaşam, DTC markaları" },
  { name: "İspanya", flag: "🇪🇸", score: 86, tier: "P2", products: "ev ürünleri, seramik, moda" },
  { name: "Danimarka", flag: "🇩🇰", score: 86, tier: "P2", products: "tasarım, mobilya, yaşam ürünleri" },
  { name: "ABD", flag: "🇺🇸", score: 85, tier: "P2", products: "DTC markaları, kozmetik, teknoloji" },
  { name: "İrlanda", flag: "🇮🇪", score: 85, tier: "P2", products: "UK ile entegre distribütörler" },
  { name: "Tayvan", flag: "🇹🇼", score: 85, tier: "P2", products: "elektronik, aksesuar, endüstriyel parçalar" },
  { name: "Japonya", flag: "🇯🇵", score: 84, tier: "P2", products: "elektronik, yaşam ürünleri, aksesuar" },
  { name: "Romanya", flag: "🇷🇴", score: 83, tier: "P2", products: "mobilya, tekstil, yan sanayi" },
  { name: "Portekiz", flag: "🇵🇹", score: 82, tier: "P2", products: "tekstil, ayakkabı, ev tekstili" },
  { name: "BAE", flag: "🇦🇪", score: 80, tier: "P2", products: "uluslararası ticaret, yeniden ihracat" },
  { name: "Pakistan", flag: "🇵🇰", score: 79, tier: "P3", products: "tekstil, ev tekstili, spor ürünleri" },
  { name: "Yunanistan", flag: "🇬🇷", score: 75, tier: "P3", products: "gıda, kozmetik, tüketim ürünleri" },
  { name: "Bangladeş", flag: "🇧🇩", score: 82, tier: "P3", products: "hazır giyim, tekstil üreticileri" },
  { name: "Malezya", flag: "🇲🇾", score: 79, tier: "P3", products: "elektronik, kauçuk ve tüketim ürünleri" },
];
export const COUNTRIES = COUNTRY_INFO.map((c) => c.name);
export const RECOMMENDED_COUNTRIES = COUNTRY_INFO.filter((c) => c.tier === "P1").map((c) => c.name);
export const countryInfo = (name: string) => COUNTRY_INFO.find((c) => c.name.toLocaleLowerCase("tr") === name.trim().toLocaleLowerCase("tr"));

export const SIZES = {
  any: { label: "Fark etmez (10–500 çalışan)", min: 10, max: 500 },
  small: { label: "Küçük (10–50 çalışan)", min: 10, max: 50 },
  medium: { label: "Orta (50–250 çalışan)", min: 50, max: 250 },
  large: { label: "Büyük (250+ çalışan)", min: 250, max: 100000 },
} as const;
export type SizeKey = keyof typeof SIZES;

export const REGIONS: Record<Region | "auto", string> = {
  auto: "Segmente göre (önerilen)",
  tr: "Türkiye → İngiltere",
  global: "Diğer ülkeler → İngiltere",
  uk: "İngiltere merkezli firmalar",
};

export type Target = {
  region: Region | "auto";
  segments: string[];
  cats: string[];
  other: string;
  countries: string[];
  size: SizeKey;
  count: number;
  exclude: string[];
};

export const COLUMNS = [
  "company", "website", "segment", "country", "city", "sector", "products", "employees",
  "decision_maker_title", "contact_name", "contact_title", "email", "email_source_url", "phone", "linkedin_url",
  "uk_evidence", "uk_evidence_url", "amazon_uk", "ecommerce_url", "uk_warehouse", "palletisable", "turkish_origin",
  "est_pallets", "containers_per_year", "monthly_orders", "sku_count", "seasonal", "lithium_battery",
  "volume_evidence", "volume_evidence_url", "reason", "agent_score",
] as const;
type Col = (typeof COLUMNS)[number];

export const STATUSES = {
  yeni: "Yeni",
  apollo: "Apollo'da",
  iletisim: "İletişime geçildi",
  olumlu: "Olumlu",
  elendi: "Elendi",
} as const;
export type Status = keyof typeof STATUSES;
export type Tier = "A" | "B" | "C";

export type Lead = Record<Col, string> & {
  domain: string;
  score: number; // = priority (kept for the sorted index)
  priority: number;
  tier: Tier;
  fit: number;
  value: number;
  prior: number;
  revenue: number | null; // estimated monthly storage revenue, £ ex VAT (pallets × £15.17)
  agent: number | null;
  flags: string[];
  status: Status;
  region: Region;
  countries?: string[];
  size?: SizeKey;
  run_id: string;
  added_at: string;
  apollo_contact_id?: string;
};

// ---------- Target from form/query ----------

const list = (v: string | string[] | undefined) => (Array.isArray(v) ? v : v ? [v] : []).map((s) => s.trim()).filter(Boolean);

export function targetFrom(get: (k: string) => string | string[] | undefined): Target {
  const size = String(get("size") ?? "any") as SizeKey;
  const n = Number(get("n"));
  const region = String(get("region") ?? "auto");
  const extra = String(get("cx") ?? "").split(/[,\n]/).map((s) => s.trim()).filter(Boolean);
  return {
    region: (["tr", "global", "uk"].includes(region) ? region : "auto") as Target["region"],
    segments: list(get("s")).filter((id) => segmentById(id)),
    cats: list(get("k")).filter((id) => CATEGORIES.some((c) => c.id === id)),
    other: String(get("other") ?? "").trim().slice(0, 200),
    countries: [...new Set([...list(get("c")), ...extra])].slice(0, 30),
    size: size in SIZES ? size : "any",
    count: [25, 50, 100].includes(n) ? n : 50,
    exclude: String(get("ex") ?? "").split(/[\s,;]+/).map(normDomain).filter(Boolean).slice(0, 500),
  };
}

/** Region a segment is searched in: the explicit choice, else the segment's natural region. */
export const regionFor = (t: Pick<Target, "region">, seg?: Segment): Region => (t.region !== "auto" ? t.region : seg?.region ?? "tr");

/** Splits the requested count across the chosen segments by the suggested mix (low-priority segments get little). */
export function allocate(segments: string[], count: number): Record<string, number> {
  if (!segments.length) return {};
  const w = (id: string) => MIX.find((m) => m.segments.includes(id))?.target ?? (segmentById(id)?.low ? 2 : 6);
  const weights = segments.map((id) => [id, w(id) / (MIX.find((m) => m.segments.includes(id))?.segments.length ?? 1)] as const);
  const total = weights.reduce((a, [, x]) => a + x, 0);
  const out: Record<string, number> = {};
  let used = 0;
  for (const [id, x] of weights) used += out[id] = Math.max(1, Math.floor((count * x) / total));
  const order = [...weights].sort((a, b) => b[1] - a[1]);
  for (let i = 0; used < count; i++, used++) out[order[i % order.length][0]]++;
  return out;
}

// ---------- Agent task text ----------

function whereToLook(region: Region, seg: Segment): string[] {
  const base: Record<Region, string[]> = {
    tr: [
      "Türkiye İhracatçılar Meclisi (TİM) ve sektör ihracatçı birliklerinin herkese açık üye listeleri",
      "İSO 500 / İSO İkinci 500 listeleri",
      "İngiltere'deki sektör fuarlarının Türk katılımcı listeleri",
      "LinkedIn şirket sayfaları, Kompass ve Europages Türkiye listeleri",
    ],
    global: [
      "Hedef ülkelerin ihracatçı dizinleri (Europages, Kompass) ve ihracat ajansı / ticaret odası listeleri",
      "İngiltere'deki sektör fuarlarının yabancı katılımcı listeleri",
      "LinkedIn şirket sayfaları",
    ],
    uk: [
      "Companies House (SIC kodları: toptan ticaret, ithalat), İngiltere sektör dernekleri ve fuar katılımcı listeleri",
      "LinkedIn şirket sayfaları ve iş ilanları (depo / lojistik ihtiyacı sinyali)",
      "Kompass ve Europages İngiltere listeleri",
    ],
  };
  const extra: string[] = [];
  if (seg.id === "amazon_uk") extra.push("Amazon.co.uk satıcı profilleri (Satıcı bilgileri bölümündeki işletme adresi ve unvanı)");
  if (seg.ecommerce && seg.id !== "amazon_uk") extra.push("İngiltere'ye gönderim yapan Shopify / WooCommerce mağazaları (.co.uk alan adı, £ fiyat, UK kargo sayfası)");
  if (seg.id === "forwarder") extra.push("FIATA / UTİKAD / BIFA üye listeleri; Türkiye–İngiltere parsiyel ve FTL hattı ilanları");
  if (seg.id === "seasonal") extra.push("Geçen yıl Black Friday / Noel döneminde geçici depo veya depo personeli ilanı veren perakendeciler");
  return [...extra, ...base[region]];
}

export function buildPrompt(t: Target, existing: string[] = []): string {
  const segs = (t.segments.length ? t.segments : ["tr_exporter"]).map((id) => segmentById(id)!);
  const alloc = allocate(segs.map((s) => s.id), t.count);
  const cats: string[] = CATEGORIES.filter((c) => t.cats.includes(c.id)).map((c) => c.label);
  if (t.other) cats.push(t.other);
  const size = SIZES[t.size];
  const exclude = [...new Set([...t.exclude, ...existing])];
  const hasPartner = segs.some((s) => s.partner);
  const hasLithium = segs.some((s) => s.id === "electronics_energy") || t.cats.includes("electronics");

  const regionText = (r: Region) =>
    r === "tr"
      ? "Türkiye merkezli şirketler"
      : r === "uk"
        ? "İngiltere merkezli şirketler"
        : t.countries.length
          ? `İngiltere dışındaki şirketler, yalnız şu ülkelerde: ${t.countries.join(", ")} (ülke odağı bölümüne bak)`
          : "Türkiye ve İngiltere dışındaki şirketler";
  const countryFocus = t.countries.length
    ? `## Ülke odağı (her ülkede sektör + şirket profili + UK depo ihtiyacı birlikte aranır)
${t.countries.map((n) => { const ci = countryInfo(n); return `- ${n}${ci ? ` (${ci.tier}, skor ${ci.score}): UK'ye giden olası ürünler: ${ci.products}` : ""}`; }).join("\n")}
Öncelik sinyalleri: UK'ye gönderim veya UK fiyatı (£), İngilizce web sitesi, UK distribütörü / bayi arayışı, mevcut UK satış kanalı (Amazon.co.uk, UK perakendeci, UK distribütörü).
Hariç tut: yalnız hizmet satan firmalar; tehlikeli veya özel izin gerektiren ürünler (ADR sınıfı kimyasal, ilaç, soğuk zincir gıda); UK'de zaten kendi deposu olan ve depo ihtiyacı görünmeyen şirketler.
Ülke başına adetleri dengeli dağıt; bir ülkede yeterli nitelikli aday yoksa sayıyı doldurmak için zayıf aday ekleme.
`
    : "";

  const segBlocks = segs
    .map((s, i) => {
      const r = regionFor(t, s);
      return `### ${i + 1}. ${s.label} — ${alloc[s.id]} şirket
- Bölge: ${regionText(r)}
- Kimi arıyoruz: ${s.hint}${cats.length ? `; öncelikli ürün kategorileri: ${cats.join(", ")}` : ""}
- Karar verici (decision_maker_title): ${s.dm}
- Bizim satış açımız: ${s.angle}
- Nerede ara: ${whereToLook(r, s).join("; ")}`;
    })
    .join("\n\n");

  return `GÖREV: LondraDepo için ${t.count} potansiyel müşteri şirket bul, doğrula ve ticari değerine göre puanla.
Amaç: Düzenli ve tekrar eden depo geliri getirecek, İngiltere'de stok tutması gereken ama kendi depo operasyonunu kurmak istemeyen şirketleri bulmak.

## Biz kimiz
${POSITIONING_EN}
LondraDepo.com, Arca Trade Group Ltd'nin (İngiltere, şirket no. 13247691) depo markasıdır.
Depo: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, İngiltere. London Gateway limanı ~13 mil, Tilbury limanı ve Amazon LCY2 ~16 mil, Felixstowe ~62 mil, Londra merkezi ~37 mil.
Hizmetler:
- mal kabul;
- palet ve koli depolama;
- FCL/LCL konteyner boşaltma;
- pick & pack;
- e-ticaret fulfilment (Shopify, Amazon FBM, kendi sitesi);
- Amazon FBA hazırlık (etiketleme, paketleme, Amazon depolarına sevk);
- İngiltere içi dağıtım (mağaza, toptancı, bayi, son müşteri).
Uluslararası nakliye ve İngiltere gümrüklemesi Arca Trade Group üzerinden sağlanır.
Standart palet depolama haftalık £3.50 + KDV'den başlar. Asgari hacim yok; tek paletle başlanabilir.
Önemli: Antrepo (bonded warehouse) değiliz. Amazon veya Shopify'ın resmi partneri değiliz. Bu iddiaları hiçbir yerde kullanma.

## Aranacak segmentler ve adetler
${segBlocks}

${countryFocus}
Şirket büyüklüğü: ${size.label}.
İdeal aday: İngiltere'ye zaten düzenli satan veya ithalat yapan; ürünleri palet ya da koli ile depolanabilen; İngiltere'de kendi deposu olmayan şirket. Ticari değeri en yüksek olanlar, düzenli konteyner veya palet hacmi olanlardır.

## Listeye ALMA
- ${hasPartner ? "Depo, 3PL ve fulfillment işletmeleri (rakiplerimiz). Freight forwarder segmenti hariç diğer segmentlerde nakliye ve gümrük firmalarını da alma. Forwarder segmentinde yalnızca İngiltere'de kendi deposu OLMAYAN forwarder'lar hedeftir." : "Lojistik, nakliye, depo, gümrük ve fulfillment firmaları (rakiplerimiz)."}
- Soğuk zincir gerektiren ürünler (taze/donuk gıda), ilaç, ADR/IMDG sınıfı tehlikeli maddeler.${hasLithium ? " Lityum pilli ürünleri hariç tutma, ancak lithium_battery sütununu doldur." : ""}
- İngiltere'de zaten büyük kendi deposu olan şirketler.
- Tek kişilik dropshipping hesapları ve şirket bilgisi doğrulanamayan satıcılar.
${exclude.length ? `- Şu alan adları (zaten listemizde): ${exclude.slice(0, 400).join(", ")}` : ""}

## Doğrulama kuralları
1. Her şirketin web sitesini aç ve faaliyette olduğunu doğrula.
2. E-posta:
   - Yalnızca şirketin kendi sitesinde, LinkedIn şirket sayfasında veya resmi bir dizinde herkese açık yayımlanmış kurumsal e-postayı al (info@, sales@, export@, ihracat@ gibi).
   - E-postayı TAHMİN ETME, UYDURMA, isim kalıbından türetme. Bulamazsan boş bırak.
   - Her e-posta için bulduğun sayfanın adresini email_source_url sütununa yaz.
3. Kişi ve unvan:
   - decision_maker_title sütununa bu şirkette konuşulması gereken rolü yaz.
   - contact_name ve contact_title yalnızca şirket sitesinde veya resmi profilde açıkça yazıyorsa doldurulur.
   - Kişisel cep telefonu veya kişisel e-posta toplama. phone sütununa yalnızca şirket santral numarasını yaz.
4. İngiltere kanıtı: somut kaynak göster ve linkini uk_evidence_url sütununa yaz. Örnekler:
   - İngiltere'deki distribütör, stokist veya mağaza;
   - .co.uk sitesi;
   - Amazon.co.uk mağazası;
   - İngiltere fuar katılımı;
   - ithalat kaydı.
5. Hacim tahmini (ticari değer için en önemli bilgi): yalnızca kanıta dayanarak yaz, kanıtın linkini volume_evidence_url sütununa koy. Kanıt yoksa unknown yaz.
   - est_pallets: İngiltere'de aynı anda tutulması muhtemel palet sayısı.
   - containers_per_year: İngiltere'ye yıllık konteyner sayısı.
   - monthly_orders: aylık e-ticaret siparişi.
   - sku_count: ürün çeşidi sayısı.
   - Kanıt örnekleri: fuar stand büyüklüğü, İngiltere'deki stokist/mağaza sayısı, ithalat kayıtları, Amazon yorum sayısı ve satıcı büyüklüğü, ürün çeşidi sayısı.
6. Emin olmadığın evet/hayır alanlarına unknown yaz. Tahmini bilgiyi kesin gibi yazma.
7. Aynı şirketi iki kez listeleme.

## Puanlama (agent_score, 0–100)
- Uygunluk (%45): İngiltere'ye satış/ithalat kanıtı, palet/koli ile depolanabilir ürün, e-ticaret varlığı, İngiltere'de kendi deposunun olmaması, doğru bölge ve büyüklük, kaynaklı kurumsal e-posta.
- Hacim değeri (%35): palet, konteyner ve sipariş hacmi; düzenli (sezonluk olmayan) akış.
- Segment önceliği (%20): yukarıdaki segment sırası.

## Çıktı formatı
Sonucu TEK bir CSV kod bloğu olarak ver. Ayrıca indirilebilir bir .csv dosyası da oluşturabilirsin. İlk satır tam olarak şu başlık olsun:
${COLUMNS.join(",")}
Kurallar:
- segment sütununa şu kodlardan birini yaz: ${segs.map((s) => s.id).join(", ")}.
- Virgül içeren değerleri çift tırnak içine al.
- amazon_uk, uk_warehouse, palletisable, turkish_origin, seasonal ve lithium_battery sütunlarında yalnızca yes, no veya unknown kullan.
- employees, est_pallets, containers_per_year, monthly_orders ve sku_count sütunlarında sayı veya aralık (örn. 20-40) ya da unknown yaz.
- reason: en fazla 2 cümle, Türkçe. Şirketin neden bizim için değerli olduğunu somut gerekçeyle yaz (hangi hizmet, hangi hacim).
- Satırları agent_score'a göre büyükten küçüğe sırala.
`;
}

// ---------- Import ----------

export function normDomain(s: string): string {
  const v = String(s || "").trim().toLowerCase();
  if (!v) return "";
  const host = v.includes("@") ? v.split("@").pop()! : v.replace(/^[a-z]+:\/\//, "").split(/[/?#]/)[0];
  return host.replace(/^www\./, "").replace(/\.$/, "");
}

const FREE_MAIL = /^(gmail|googlemail|hotmail|outlook|live|yahoo|yandex|icloud|me|aol|protonmail|mail)\./;

const ALIASES: Record<string, Col> = {
  company_name: "company", sirket: "company", name: "company", web: "website", website_url: "website", url: "website",
  e_mail: "email", mail: "email", eposta: "email", e_posta: "email", email_source: "email_source_url", source_url: "email_source_url",
  linkedin: "linkedin_url", score: "agent_score", fit_score: "agent_score", uygunluk_skoru: "agent_score", neden: "reason",
  decision_maker: "decision_maker_title", pallets: "est_pallets", containers: "containers_per_year", orders_per_month: "monthly_orders",
};

function normHeader(h: string): string {
  const k = h.trim().toLowerCase().replace(/^﻿/, "").replace(/ş/g, "s").replace(/ı/g, "i").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return (ALIASES[k] as string) ?? k;
}

/** RFC 4180 CSV with auto-detected delimiter (comma, semicolon or tab). */
export function parseCsv(text: string): string[][] {
  const first = text.split("\n", 1)[0];
  const delim = [",", ";", "\t"].map((d) => [d, first.split(d).length] as const).sort((a, b) => b[1] - a[1])[0][0];
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"') {
        if (text[i + 1] === '"') { cell += '"'; i++; } else q = false;
      } else cell += ch;
    } else if (ch === '"' && cell === "") q = true;
    else if (ch === delim) { row.push(cell); cell = ""; }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some((c) => c.trim())) rows.push(row);
      row = [];
    } else cell += ch;
  }
  row.push(cell);
  if (row.some((c) => c.trim())) rows.push(row);
  return rows;
}

/** Accepts the agent's raw answer: a CSV (optionally inside ``` fences) or a JSON array of objects. */
export function parseAgentOutput(raw: string): { records: Record<string, string>[]; error?: string } {
  let text = raw.trim();
  const fence = text.match(/```(?:csv|json)?\s*\n([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();
  if (!text) return { records: [], error: "Metin boş." };
  if (text.startsWith("[") || text.startsWith("{")) {
    try {
      const j = JSON.parse(text);
      const arr = (Array.isArray(j) ? j : j.companies ?? j.results ?? j.data ?? []) as Record<string, unknown>[];
      return { records: arr.map((o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [normHeader(k), v == null ? "" : String(v)]))) };
    } catch {
      return { records: [], error: "JSON okunamadı." };
    }
  }
  const rows = parseCsv(text);
  if (rows.length < 2) return { records: [], error: "CSV'de başlık ve en az bir satır olmalı." };
  const head = rows[0].map(normHeader);
  if (!head.includes("company") && !head.includes("website")) return { records: [], error: "Başlık satırında company veya website sütunu yok. Görev metnindeki başlığı kullanın." };
  return { records: rows.slice(1).map((r) => Object.fromEntries(head.map((h, i) => [h, (r[i] ?? "").trim()]))) };
}

const yes = (v = "") => /^(yes|y|evet|true|1)$/i.test(v.trim());
const no = (v = "") => /^(no|n|hayır|hayir|false|0)$/i.test(v.trim());
const isUrl = (v = "") => /^https?:\/\/\S+\.\S+/i.test(v.trim());

/** Numbers from "20-40", "1,200", "50+" → [low, high]; null when unknown. */
export function numRange(v = ""): [number, number] | null {
  const nums = (v.replace(/(\d)[.,](?=\d{3}\b)/g, "$1").match(/\d+(?:\.\d+)?/g) ?? []).map(Number);
  if (!nums.length) return null;
  return [Math.min(...nums), /\+/.test(v) ? Math.max(...nums) * 2 : Math.max(...nums)];
}
const low = (v = "") => numRange(v)?.[0] ?? null;

export function resolveSegment(v: string, fallback: string[]): string {
  const s = v.trim().toLowerCase();
  const hit = SEGMENTS.find((x) => x.id === s || x.label.toLowerCase() === s || String(SEGMENTS.indexOf(x) + 1) === s);
  if (hit) return hit.id;
  return fallback.length === 1 ? fallback[0] : fallback[0] ?? "";
}

type Ctx = { region: Region; countries: string[]; size: SizeKey };

/** Fit (0–100): is this company a match for what we sell? Forwarders are scored as channel partners. */
export function fitScore(l: Record<Col, string>, seg: Segment | undefined, c: Ctx): { fit: number; flags: string[] } {
  let s = 0;
  const flags: string[] = [];
  const ukEvidence = l.uk_evidence.trim() && !/^(unknown|no|yok|-)$/i.test(l.uk_evidence.trim());
  if (ukEvidence) {
    if (isUrl(l.uk_evidence_url)) s += 25;
    else { s += 12; flags.push("İngiltere kanıtının linki yok"); }
  }
  if (seg?.partner) {
    if (no(l.uk_warehouse)) s += 30;
    else if (yes(l.uk_warehouse)) flags.push("Kendi İngiltere deposu var (partner olmayabilir)");
    else s += 12;
    if (isUrl(l.volume_evidence_url)) s += 15;
  } else {
    if (yes(l.palletisable)) s += 15;
    else if (no(l.palletisable)) flags.push("Paletlenemeyen ürün");
    else s += 5;
    if (yes(l.amazon_uk) || isUrl(l.ecommerce_url)) s += 15;
    else if (!seg?.ecommerce) s += 5;
    if (no(l.uk_warehouse)) s += 15;
    else if (yes(l.uk_warehouse)) flags.push("İngiltere'de kendi deposu var");
    else s += 7;
  }
  const country = l.country.trim().toLowerCase();
  const isUk = /united kingdom|england|ingiltere|i̇ngiltere|scotland|wales|^uk$|^gb$/i.test(country);
  if (c.region === "tr") {
    if (yes(l.turkish_origin) || /türkiye|turkey|turkiye/i.test(country)) s += 10;
    else if (!no(l.turkish_origin)) s += 3;
  } else if (c.region === "uk") {
    if (isUk) s += 10;
  } else {
    if (!c.countries.length || c.countries.some((x) => country && (country.includes(x.toLowerCase()) || x.toLowerCase().includes(country)))) s += 10;
    if (isUk) flags.push("İngiltere merkezli");
  }
  const r = numRange(l.employees);
  const sz = SIZES[c.size];
  if (!r) s += 5;
  else if (r[1] >= sz.min && r[0] <= sz.max) s += 10;
  else s += 3;
  const email = l.email.trim();
  if (email) {
    const ed = normDomain(email);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) flags.push("E-posta biçimi hatalı");
    else if (!isUrl(l.email_source_url)) flags.push("E-postanın kaynağı yok");
    else s += 10;
    if (FREE_MAIL.test(ed)) flags.push("Kişisel e-posta servisi");
    else if (l.website && ed !== normDomain(l.website) && !ed.endsWith(`.${normDomain(l.website)}`)) flags.push("E-posta alan adı siteyle farklı");
  }
  if (yes(l.lithium_battery)) flags.push("Lityum pil: tehlikeli madde kontrolü gerekir");
  return { fit: Math.min(100, s), flags };
}

/** Volume value (0–100): how much recurring revenue the account could bring. */
export function valueScore(l: Record<Col, string>, seg: Segment | undefined): number {
  const containers = low(l.containers_per_year);
  const regular = no(l.seasonal) ? 10 : yes(l.seasonal) ? (seg?.id === "seasonal" ? 5 : 0) : 5;
  if (seg?.partner) {
    const c = containers == null ? 20 : containers >= 50 ? 70 : containers >= 12 ? 55 : containers >= 4 ? 35 : 20;
    return Math.min(100, c + (isUrl(l.volume_evidence_url) ? 20 : 0) + regular);
  }
  const pallets = low(l.est_pallets);
  const p = pallets == null ? 12 : pallets >= 100 ? 40 : pallets >= 30 ? 30 : pallets >= 10 ? 20 : 8;
  const c = containers == null ? 8 : containers >= 12 ? 30 : containers >= 4 ? 20 : containers >= 1 ? 10 : 4;
  const orders = low(l.monthly_orders);
  const o = !seg?.ecommerce ? 10 : orders == null ? 6 : orders >= 1000 ? 20 : orders >= 200 ? 14 : 6;
  return Math.min(100, p + c + o + regular);
}

export const tierOf = (p: number): Tier => (p >= 75 ? "A" : p >= 60 ? "B" : "C");

/** Conservative monthly storage revenue: lower bound of the pallet estimate × £15.17 (storage only, ex VAT). */
export const storageRevenue = (l: Pick<Lead, "est_pallets">): number | null => {
  const p = low(l.est_pallets);
  return p == null || p <= 0 ? null : Math.round(p * PALLET_MONTH_GBP);
};

/** Computes every derived score of a lead (also used to re-score leads saved before a scoring change). */
export function rescore<T extends Record<Col, string> & { segment: string }>(l: T, c: Ctx) {
  const seg = segmentById(l.segment);
  const { fit, flags } = fitScore(l, seg, c);
  const value = valueScore(l, seg);
  const prior = seg?.prior ?? 80;
  const priority = Math.round(0.45 * fit + 0.35 * value + 0.2 * prior);
  return { fit, value, prior, priority, score: priority, tier: tierOf(priority), revenue: storageRevenue(l), flags };
}

export function toLead(rec: Record<string, string>, t: Target, runId: string, at: string): Lead | { error: string } {
  const l = Object.fromEntries(COLUMNS.map((c) => [c, String(rec[c] ?? "").trim().slice(0, ["reason", "uk_evidence", "volume_evidence"].includes(c) ? 600 : 300)])) as Record<Col, string>;
  if (l.website && !/^https?:\/\//i.test(l.website)) l.website = `https://${l.website}`;
  const fromEmail = normDomain(l.email);
  const domain = normDomain(l.website) || (fromEmail && !FREE_MAIL.test(fromEmail) ? fromEmail : "");
  if (!l.company && !domain) return { error: "şirket adı ve web sitesi yok" };
  if (!domain) return { error: `${l.company}: web sitesi yok` };
  if (!l.company) l.company = domain;
  l.segment = resolveSegment(l.segment, t.segments);
  const region = regionFor(t, segmentById(l.segment));
  const ctx = { region, countries: t.countries, size: t.size };
  const agentNum = Number(String(l.agent_score).replace(/[^\d.]/g, ""));
  return {
    ...l,
    domain,
    ...rescore(l, ctx),
    agent: Number.isFinite(agentNum) && l.agent_score ? Math.round(agentNum) : null,
    status: "yeni",
    region,
    countries: t.countries,
    size: t.size,
    run_id: runId,
    added_at: at,
  };
}

/** Brings a stored lead up to the current scoring (older leads lack the newer columns). */
export function normaliseLead(raw: Partial<Lead> & { domain: string }): Lead {
  const l = { ...Object.fromEntries(COLUMNS.map((c) => [c, ""])), ...raw } as Lead;
  const ctx = { region: (l.region ?? "tr") as Region, countries: l.countries ?? [], size: (l.size ?? "any") as SizeKey };
  return { ...l, ...rescore(l, ctx), status: l.status ?? "yeni" };
}

// ---------- Mix, performance, next search ----------

export function mixProgress(leads: Lead[]) {
  return MIX.map((m) => {
    const have = leads.filter((l) => m.segments.includes(l.segment) && l.status !== "elendi").length;
    return { ...m, have, gap: Math.max(0, m.target - have) };
  });
}

/** The most under-filled group of the suggested mix, as a step-1 query string. */
export function nextSearch(leads: Lead[]): { label: string; href: string } | null {
  const rows = mixProgress(leads).filter((r) => r.gap > 0).sort((a, b) => b.gap / b.target - a.gap / a.target || b.target - a.target);
  const r = rows[0];
  if (!r) return null;
  const q = new URLSearchParams({ go: "1", region: "auto", n: String(r.gap > 25 ? 50 : 25) });
  r.segments.forEach((s) => q.append("s", s));
  return { label: `${r.label}: ${r.gap} eksik`, href: `/panel/sihirbaz?${q.toString()}` };
}

export function segmentPerformance(leads: Lead[]) {
  return SEGMENTS.map((s) => {
    const ls = leads.filter((l) => l.segment === s.id);
    const contacted = ls.filter((l) => ["apollo", "iletisim", "olumlu"].includes(l.status) || l.apollo_contact_id).length;
    const positive = ls.filter((l) => l.status === "olumlu").length;
    return {
      seg: s,
      total: ls.length,
      a: ls.filter((l) => l.tier === "A").length,
      contacted,
      positive,
      rate: contacted ? Math.round((positive / contacted) * 100) : null,
      revenue: ls.filter((l) => l.tier !== "C" && l.status !== "elendi").reduce((a, l) => a + (l.revenue ?? 0), 0),
    };
  }).filter((r) => r.total > 0);
}

// ---------- First-email templates per group ----------

const TPL: Record<Exclude<Group, "other">, { tr: [string, string, string]; en: [string, string, string] }> = {
  exporter: {
    tr: ["İngiltere'deki müşterilerinize yerel stoktan teslim", "'in İngiltere'ye [ürün] ihraç ettiğini gördük.", "Stoğunuzu İngiltere'de tutarak siparişleri her seferinde Türkiye'den göndermek yerine Essex'teki depomuzdan teslim edebilirsiniz. Konteyner boşaltma, palet depolama ve İngiltere içi dağıtımı biz yürütürüz; nakliye ve gümrüklemeyi de Arca Trade Group üzerinden tek elden sağlarız."],
    en: ["Local UK stock for your British customers", " exports [product] to the UK.", "By holding stock in the UK you can deliver from our Essex warehouse instead of shipping every order from abroad. We handle container unloading, pallet storage and UK distribution, and freight and UK customs clearance are available through Arca Trade Group."],
  },
  amazon: {
    tr: ["Amazon UK için FBA hazırlık ve stok", "'in Amazon.co.uk'ta satış yaptığını gördük.", "Ürünlerinizi Essex'teki depomuzda tutuyor, FNSKU etiketleme ve paketlemeyi yapıp Amazon depolarına partiler halinde gönderiyoruz. Depomuz Amazon LCY2 Tilbury'ye yaklaşık 16 mil."],
    en: ["FBA prep and UK stock for your Amazon business", " sells on Amazon.co.uk.", "We hold your stock in Essex, handle FNSKU labelling and packing, and send batches into Amazon as you need them. We are about 16 miles from Amazon LCY2 Tilbury."],
  },
  shopify: {
    tr: ["İngiltere siparişleriniz için fulfillment", "'in İngiltere'ye online satış yaptığını gördük.", "Kendi depo ekibi kurmadan İngiltere'deki siparişlerinizi stoğunuzdan hazırlayıp gönderiyoruz (pick & pack). Shopify, Amazon FBM ve kendi sitenizden gelen siparişleri tek depodan yönetebilirsiniz."],
    en: ["UK fulfilment for your online orders", " sells online to UK customers.", "Without building your own warehouse team, we pick, pack and ship your UK orders from stock, whether they come from Shopify, Amazon FBM or your own site."],
  },
  importer: {
    tr: ["Konteynerleriniz için Essex'te boşaltma ve depolama", "'in İngiltere'ye düzenli konteyner ithal ettiğini gördük.", "Konteynerleri London Gateway, Tilbury veya Felixstowe'dan teslim alıp boşaltıyor, sayıyor, palet olarak depoluyor ve dağıtım noktalarınıza sevk ediyoruz. Depomuz London Gateway'e yaklaşık 13 mil."],
    en: ["Container unloading and pallet storage in Essex", " imports containers into the UK.", "We unload containers from London Gateway, Tilbury or Felixstowe, count and store the stock on pallets, and deliver to your customers and sites. We are about 13 miles from London Gateway."],
  },
  packauto: {
    tr: ["İngiltere'ye palet bazlı stok ve dağıtım", "'in İngiltere'ye [ambalaj / yedek parça] sattığını gördük.", "Ürünlerinizi İngiltere'de palet olarak stoklayıp müşterilerinize, bayilere ve servislere yerel stoktan düzenli teslim ediyoruz."],
    en: ["Pallet stock and distribution in the UK", " supplies [packaging / parts] to UK customers.", "We store your products on pallets in the UK and deliver regularly from local stock to your customers, dealers and workshops."],
  },
  forwarder: {
    tr: ["İngiltere'de depo partneri: Essex", "'in İngiltere'ye düzenli yük taşıdığını gördük.", "Müşterilerinizin İngiltere'ye gelen yükleri için boşaltma, depolama ve İngiltere içi dağıtımda Essex'te yerel depo partneriniz olabiliriz. London Gateway'e yaklaşık 13 mil, Tilbury'ye 16 mil uzaktayız."],
    en: ["A warehouse partner in Essex for your UK loads", " moves freight into the UK.", "We can be your local warehouse partner in Essex for your customers' UK loads: unloading, storage and UK distribution. We are about 13 miles from London Gateway and 16 miles from Tilbury."],
  },
};

export const TEMPLATE_GROUPS = MIX.map((m) => ({ group: m.group as Exclude<Group, "other">, label: m.label }));

export function emailTemplate(group: Exclude<Group, "other">, lang: "tr" | "en"): string {
  const [subject, hook, body] = TPL[group][lang];
  if (lang === "tr")
    return `Konu: ${subject}

Merhaba [İsim],

[Şirket]${hook} ${body}

${POSITIONING_TR} Palet depolama haftalık £3.50 + KDV'den başlar. Asgari hacim yok; tek paletle deneyebilirsiniz.

Uygunsa 15 dakikalık bir görüşmede mevcut İngiltere operasyonunuzu konuşabiliriz: https://www.londradepo.com/teklif-al

Saygılarımızla,
[Ad Soyad] · LondraDepo · +44 7554 195190 · support@londradepo.com

Bu tür e-postalar almak istemiyorsanız "çıkar" yazmanız yeterli; tekrar yazmayız.`;
  return `Subject: ${subject}

Hi [Name],

I noticed [Company]${hook} ${body}

${POSITIONING_EN} Pallet storage starts from £3.50 + VAT per week, with no fixed minimum, so you can start with a single trial pallet.

Would a 15-minute call about your current UK operation be useful? https://www.londradepo.com/en/request-a-quote

Best regards,
[Name] · LondraDepo · +44 7554 195190 · support@londradepo.com

If you'd rather not hear from us, just reply "remove" and we won't email again.`;
}

// ---------- CSV export ----------

export function leadsToCsv(leads: Lead[]): string {
  const head = ["priority", "tier", "fit", "value", "est_storage_gbp_month", "status", ...COLUMNS, "flags", "added_at"];
  const esc = (v: unknown) => {
    const s = String(v ?? "");
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = leads.map((l) => [l.priority, l.tier, l.fit, l.value, l.revenue ?? "", STATUSES[l.status], ...COLUMNS.map((c) => l[c]), l.flags.join(" | "), l.added_at].map(esc).join(","));
  return "﻿" + [head.join(","), ...rows].join("\r\n");
}
