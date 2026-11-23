/**
 * Customer-finding wizard: target options, the agent task text, CSV/JSON import and the fit score.
 * Pure functions only (no storage) so the logic is easy to check. Facts about LondraDepo are the verified ones
 * used across the site; never add partner/bonded claims or unconfirmed prices here.
 */

export const SECTORS = [
  { id: "amazon", label: "Amazon / e-ticaret satıcıları", hint: "Amazon.co.uk'ta veya kendi e-ticaret sitesiyle İngiltere'ye satan markalar" },
  { id: "exporter", label: "İngiltere'ye ihracat yapan üreticiler", hint: "İngiltere'deki toptancı, distribütör veya perakendecilere düzenli ihracat yapan üreticiler" },
  { id: "food", label: "Gıda (kuru, ortam sıcaklığı)", hint: "kuru gıda, şekerleme, bakliyat, konserve, zeytinyağı gibi soğuk zincir gerektirmeyen gıda" },
  { id: "textile", label: "Tekstil ve hazır giyim", hint: "hazır giyim, ev tekstili, havlu, halı" },
  { id: "furniture", label: "Mobilya ve ev ürünleri", hint: "mobilya, ev dekorasyonu, mutfak eşyası" },
  { id: "auto", label: "Otomotiv yedek parça", hint: "otomotiv yedek parça ve aksesuar" },
  { id: "cosmetics", label: "Kozmetik ve kişisel bakım", hint: "kozmetik, kişisel bakım ve temizlik ürünleri (tehlikeli madde sınıfı olmayanlar)" },
  { id: "building", label: "Yapı malzemesi ve hırdavat", hint: "seramik, yapı malzemesi, hırdavat, el aletleri" },
  { id: "wholesale", label: "B2B toptancı / distribütör", hint: "İngiltere'de mağazalara ve toptancılara satış yapan veya yapmak isteyen dağıtıcılar" },
  { id: "packaging", label: "Ambalaj", hint: "karton, plastik ve kâğıt ambalaj üreticileri" },
] as const;

export const COUNTRIES = ["Almanya", "Hollanda", "Polonya", "İtalya", "İspanya", "Fransa", "Portekiz", "Yunanistan", "Çin", "Hindistan", "Pakistan", "Vietnam", "ABD", "BAE"] as const;

export const SIZES = {
  any: { label: "Fark etmez (10–500 çalışan)", min: 10, max: 500 },
  small: { label: "Küçük (10–50 çalışan)", min: 10, max: 50 },
  medium: { label: "Orta (50–250 çalışan)", min: 50, max: 250 },
  large: { label: "Büyük (250+ çalışan)", min: 250, max: 100000 },
} as const;
export type SizeKey = keyof typeof SIZES;

export type Target = {
  region: "tr" | "global";
  sectors: string[];
  other: string;
  countries: string[];
  size: SizeKey;
  count: number;
  exclude: string[];
};

export const COLUMNS = [
  "company", "website", "country", "city", "sector", "products", "employees",
  "contact_name", "contact_title", "email", "email_source_url", "phone", "linkedin_url",
  "uk_evidence", "uk_evidence_url", "amazon_uk", "ecommerce_url", "uk_warehouse", "palletisable", "turkish_origin",
  "reason", "agent_score",
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

export type Lead = Record<Col, string> & {
  domain: string;
  score: number;
  agent: number | null;
  flags: string[];
  status: Status;
  region: Target["region"];
  run_id: string;
  added_at: string;
  apollo_contact_id?: string;
};

// ---------- Target from form/query ----------

const list = (v: string | string[] | undefined) => (Array.isArray(v) ? v : v ? [v] : []).map((s) => s.trim()).filter(Boolean);

export function targetFrom(get: (k: string) => string | string[] | undefined): Target {
  const size = String(get("size") ?? "any") as SizeKey;
  const n = Number(get("n"));
  const extra = String(get("cx") ?? "").split(/[,\n]/).map((s) => s.trim()).filter(Boolean);
  return {
    region: get("region") === "global" ? "global" : "tr",
    sectors: list(get("s")).filter((id) => SECTORS.some((x) => x.id === id)),
    other: String(get("other") ?? "").trim().slice(0, 200),
    countries: [...list(get("c")), ...extra].slice(0, 20),
    size: size in SIZES ? size : "any",
    count: [25, 50, 100].includes(n) ? n : 50,
    exclude: String(get("ex") ?? "").split(/[\s,;]+/).map(normDomain).filter(Boolean).slice(0, 500),
  };
}

// ---------- Agent task text ----------

export function buildPrompt(t: Target, existing: string[] = []): string {
  const sectors = [...SECTORS.filter((s) => t.sectors.includes(s.id)).map((s) => `- ${s.label}: ${s.hint}`), ...(t.other ? [`- ${t.other}`] : [])];
  const size = SIZES[t.size];
  const exclude = [...new Set([...t.exclude, ...existing])];
  const region =
    t.region === "tr"
      ? "Türkiye merkezli şirketler (öncelik: İngiltere'ye satan veya satmaya hazırlananlar)."
      : `Türkiye dışındaki şirketler${t.countries.length ? `, şu ülkelerden: ${t.countries.join(", ")}` : " (İngiltere'ye satan herhangi bir ülke)"}. İngiltere merkezli şirketleri listeye alma.`;
  const where =
    t.region === "tr"
      ? [
          "Türkiye İhracatçılar Meclisi (TİM) ve sektör ihracatçı birliklerinin herkese açık üye listeleri",
          "İSO 500 / İSO İkinci 500 listeleri",
          "Amazon.co.uk'ta Türkiye adresli satıcı mağazaları (satıcı profilindeki işletme adresi)",
          "İngiltere'deki sektör fuarlarının Türk katılımcı listeleri",
          "Ürünlerini .co.uk alan adıyla veya İngiltere'ye gönderimle satan Türk markaları",
          "LinkedIn şirket sayfaları, Kompass ve Europages Türkiye listeleri",
        ]
      : [
          "Hedef ülkelerin ihracatçı dizinleri (Europages, Kompass) ve ihracat ajansı / ticaret odası listeleri",
          "Amazon.co.uk'ta yabancı adresli satıcı mağazaları",
          "İngiltere'deki sektör fuarlarının yabancı katılımcı listeleri",
          "LinkedIn şirket sayfaları",
        ];
  const origin = t.region === "tr" ? "Türkiye kökenli şirket" : "Hedef ülkelerden birinde merkezli";

  return `GÖREV: LondraDepo için ${t.count} potansiyel müşteri şirket bul, doğrula ve puanla.

## Biz kimiz
LondraDepo.com, Arca Trade Group Ltd'nin (İngiltere, şirket no. 13247691) depo markasıdır.
Depo adresi: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, İngiltere.
Uzaklıklar: London Gateway limanı ~13 mil, Tilbury limanı ~16 mil, Felixstowe ~62 mil, Londra merkezi ~37 mil.
Sunduklarımız:
- Paletli ve koli depolama, istifleme. Standart palet depolama haftalık £3.50 + KDV'den başlar. Asgari hacim yok; tek paletle başlanabilir.
- FCL/LCL konteyner boşaltma, mal kabul, sayım.
- İngiltere'deki online satış operasyonu: e-ticaret fulfillment (Shopify, Amazon FBM, kendi sitesi), Amazon FBA hazırlık (etiketleme, paketleme, Amazon depolarına sevk).
- Fiziksel satış operasyonu: İngiltere'deki mağazalara, toptancılara ve distribütörlere dağıtım.
- Uluslararası nakliye ve İngiltere gümrüklemesi Arca Trade Group üzerinden.
Önemli: Antrepo (bonded warehouse) değiliz. Amazon veya Shopify'ın resmi partneri değiliz. Bu iddiaları hiçbir yerde kullanma.

## Kimi arıyoruz
Bölge: ${region}
Sektörler:
${sectors.length ? sectors.join("\n") : "- Ürünleri palet/koli ile depolanabilen her sektör"}
Büyüklük: ${size.label}.
İdeal aday: İngiltere'ye zaten satan veya satmaya hazırlanan, ürünleri palet ya da koli ile depolanabilen, İngiltere'de kendi deposu olmayan ve stoğunu İngiltere'de tutarak online (Amazon.co.uk, kendi sitesi) veya fiziksel kanallardan (mağaza, toptancı, distribütör) satmak isteyen şirket.

## Listeye ALMA
- Lojistik, nakliye, depo, gümrük ve fulfillment firmaları (rakiplerimiz).
- Soğuk zincir gerektiren ürünler (taze/donuk gıda), tehlikeli madde (ADR/IMDG sınıfı), ilaç.
- İngiltere'de zaten büyük kendi deposu olan şirketler.
- Tek kişilik dropshipping hesapları, şirket bilgisi doğrulanamayan satıcılar.
${exclude.length ? `- Şu alan adları (zaten listemizde): ${exclude.slice(0, 400).join(", ")}` : ""}

## Nerede ara (öneri)
${where.map((w) => `- ${w}`).join("\n")}

## Doğrulama kuralları
1. Her şirketin web sitesini aç ve gerçekten faaliyette olduğunu doğrula.
2. E-posta: yalnızca şirketin kendi web sitesinde, LinkedIn şirket sayfasında veya resmi bir dizinde herkese açık yayımlanmış kurumsal e-posta (info@, sales@, export@, ihracat@ gibi). E-postayı TAHMİN ETME, UYDURMA, isim kalıbından türetme. Bulamazsan boş bırak. Her e-posta için bulduğun sayfanın adresini email_source_url sütununa yaz.
3. Kişi adı ve unvanı yalnızca şirket sitesinde veya resmi profilde açıkça yazıyorsa ekle (ihracat, e-ticaret, lojistik veya satın alma sorumlusu, kurucu). Kişisel cep telefonu veya kişisel e-posta toplama; phone sütununa yalnızca şirket santral numarasını yaz.
4. İngiltere kanıtı için somut kaynak göster: İngiltere'deki distribütör veya mağaza, .co.uk sitesi, Amazon.co.uk mağaza linki, İngiltere fuar katılımı, İngiltere'ye ihracat beyanı. Linkini uk_evidence_url sütununa yaz.
5. Emin olmadığın evet/hayır alanlarına unknown yaz. Tahmini bilgiyi kesin gibi yazma.
6. Aynı şirketi iki kez listeleme.

## Puanlama (agent_score, 0–100)
- İngiltere'ye satış/ihracat kanıtı: 25
- Ürün palet/koli ile depolanabilir: 15
- E-ticaret varlığı (Amazon.co.uk veya İngiltere'ye satan site): 15
- İngiltere'de kendi deposu yok: 15 (bilinmiyorsa 7)
- ${origin}: 10
- Büyüklük uygun (${size.label}): 10
- Kaynaklı kurumsal e-posta var: 10

## Çıktı formatı
Sonucu TEK bir CSV kod bloğu olarak ver (ayrıca indirilebilir .csv dosyası da oluşturabilirsin). İlk satır tam olarak şu başlık olsun:
${COLUMNS.join(",")}
Kurallar:
- Virgül içeren değerleri çift tırnak içine al.
- amazon_uk, uk_warehouse, palletisable, turkish_origin sütunlarında yalnızca yes, no veya unknown yaz.
- employees: sayı veya aralık (örn. 50-100).
- reason: en fazla 2 cümle, Türkçe; bu şirketin neden bizim için uygun olduğunu somut gerekçeyle yaz.
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

const yes = (v: string) => /^(yes|y|evet|true|1)$/i.test(v.trim());
const no = (v: string) => /^(no|n|hayır|hayir|false|0)$/i.test(v.trim());
const isUrl = (v: string) => /^https?:\/\/\S+\.\S+/i.test(v.trim());

function employeesRange(v: string): [number, number] | null {
  const nums = (v.replace(/[.,](?=\d{3}\b)/g, "").match(/\d+/g) ?? []).map(Number);
  if (!nums.length) return null;
  return [Math.min(...nums), /\+/.test(v) ? 100000 : Math.max(...nums)];
}

/** The panel's own fit score (0–100). The agent's score is kept for comparison but never trusted on its own. */
export function scoreLead(l: Record<Col, string>, t: Pick<Target, "region" | "countries" | "size">): { score: number; flags: string[] } {
  let s = 0;
  const flags: string[] = [];
  if (l.uk_evidence.trim() && !/^(unknown|no|yok|-)$/i.test(l.uk_evidence.trim())) {
    if (isUrl(l.uk_evidence_url)) s += 25;
    else { s += 12; flags.push("İngiltere kanıtının linki yok"); }
  }
  if (yes(l.palletisable)) s += 15;
  else if (no(l.palletisable)) flags.push("Paletlenemeyen ürün");
  else s += 5;
  if (yes(l.amazon_uk) || isUrl(l.ecommerce_url)) s += 15;
  if (no(l.uk_warehouse)) s += 15;
  else if (yes(l.uk_warehouse)) flags.push("İngiltere'de kendi deposu var");
  else s += 7;
  if (t.region === "tr") {
    if (yes(l.turkish_origin)) s += 10;
    else if (!no(l.turkish_origin)) s += 3;
  } else {
    const c = l.country.toLowerCase();
    if (!t.countries.length || t.countries.some((x) => c && (c.includes(x.toLowerCase()) || x.toLowerCase().includes(c)))) s += 10;
    if (/united kingdom|england|ingiltere|i̇ngiltere|^uk$|^gb$/i.test(l.country.trim())) flags.push("İngiltere merkezli");
  }
  const r = employeesRange(l.employees);
  const sz = SIZES[t.size];
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
  return { score: Math.min(100, s), flags };
}

export function toLead(rec: Record<string, string>, t: Pick<Target, "region" | "countries" | "size">, runId: string, at: string): Lead | { error: string } {
  const l = Object.fromEntries(COLUMNS.map((c) => [c, String(rec[c] ?? "").trim().slice(0, c === "reason" || c === "uk_evidence" ? 600 : 300)])) as Record<Col, string>;
  if (l.website && !/^https?:\/\//i.test(l.website)) l.website = `https://${l.website}`;
  const fromEmail = normDomain(l.email);
  const domain = normDomain(l.website) || (fromEmail && !FREE_MAIL.test(fromEmail) ? fromEmail : "");
  if (!l.company && !domain) return { error: "şirket adı ve web sitesi yok" };
  if (!domain) return { error: `${l.company}: web sitesi yok` };
  if (!l.company) l.company = domain;
  const { score, flags } = scoreLead(l, t);
  const agentNum = Number(String(l.agent_score).replace(/[^\d.]/g, ""));
  return { ...l, domain, score, agent: Number.isFinite(agentNum) && l.agent_score ? Math.round(agentNum) : null, flags, status: "yeni", region: t.region, run_id: runId, added_at: at };
}

// ---------- CSV export ----------

export function leadsToCsv(leads: Lead[]): string {
  const head = ["score", "status", ...COLUMNS, "flags", "added_at"];
  const esc = (v: unknown) => {
    const s = String(v ?? "");
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = leads.map((l) => [l.score, STATUSES[l.status], ...COLUMNS.map((c) => l[c]), l.flags.join(" | "), l.added_at].map(esc).join(","));
  return "﻿" + [head.join(","), ...rows].join("\r\n");
}
