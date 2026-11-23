/**
 * WebContact wizard: the agent opens each company's contact page and fills the form with a personalised
 * message from Yusuf Barış. Pure functions only. Reuses the customer wizard's segments, research brief and
 * parser so both wizards share one prospect list. Only verified facts; no CAPTCHA bypass; no email sending.
 */
import { COLUMNS, POSITIONING_EN, buildPrompt, normDomain, segmentById, type Group, type Lead, type Target } from "@/lib/panel/wizard";

export const SENDER = {
  first: "Yusuf",
  last: "Barış",
  name: "Yusuf Barış",
  title: "Operations Manager",
  company: "LondraDepo",
  email: "support@londradepo.com",
  phone: "+44 7554 195190",
  website: "https://www.londradepo.com",
  country: "United Kingdom",
};

export const SIGNATURE = `${SENDER.name}
${SENDER.company} ${SENDER.title}
${SENDER.email}
${SENDER.phone}
londradepo.com`;

export const FORM_STATUSES = {
  sent: "Gönderildi",
  captcha: "CAPTCHA: elle gönder",
  error: "Hata: elle gönder",
  no_form: "Form yok (yalnız e-posta)",
  no_solicitation: "Satış mesajı kabul etmiyor",
  skipped: "Atlandı",
} as const;
export type FormStatus = keyof typeof FORM_STATUSES;

export const REPLIES = { yok: "Yanıt yok", yanit: "Yanıt geldi", olumlu: "Olumlu", ilgisiz: "İlgilenmiyor" } as const;
export type Reply = keyof typeof REPLIES;

export const APPROVAL = {
  first2: "İlk 2 formu göndermeden önce bana göster, sonra devam et",
  each: "Her formu göndermeden önce bana sor",
} as const;
export type Approval = keyof typeof APPROVAL;

export const LOG_COLUMNS = [
  "company", "website", "segment", "country", "contact_page_url", "form_status", "language", "subject", "message",
  "sent_at", "confirmation_text", "email_fallback", "reason",
] as const;

export type Contact = {
  domain: string;
  company: string;
  website: string;
  segment: string;
  country: string;
  contact_page_url: string;
  form_status: FormStatus;
  language: string;
  subject: string;
  message: string;
  sent_at: string;
  confirmation_text: string;
  email_fallback: string;
  reason: string;
  reply: Reply;
  run_id: string;
  imported_at: string;
  followup_at?: string;
};

// ---------- Message guidance per segment group ----------

const ANGLE: Record<Exclude<Group, "other">, { tr: string; en: string }> = {
  exporter: {
    tr: "Stoğunuzu İngiltere'de tutup siparişleri Essex'teki depomuzdan teslim edebilirsiniz; konteyner boşaltma, palet depolama ve İngiltere içi dağıtımı biz yürütürüz.",
    en: "You can hold stock in the UK and deliver from our Essex warehouse instead of shipping every order from abroad; we handle container unloading, pallet storage and UK distribution.",
  },
  amazon: {
    tr: "Stoğunuzu Essex'te tutup FNSKU etiketleme ve paketlemeyi yapıyor, Amazon depolarına partiler halinde gönderiyoruz (Amazon LCY2 Tilbury'ye ~16 mil).",
    en: "We hold your stock in Essex, handle FNSKU labelling and packing, and send batches into Amazon as needed (about 16 miles from Amazon LCY2 Tilbury).",
  },
  shopify: {
    tr: "Kendi depo ekibi kurmadan İngiltere siparişlerinizi stoğunuzdan hazırlayıp gönderiyoruz (pick & pack).",
    en: "Without building your own warehouse team, we pick, pack and ship your UK orders from stock.",
  },
  importer: {
    tr: "Konteynerleri London Gateway, Tilbury veya Felixstowe'dan teslim alıp boşaltıyor, palet olarak depoluyor ve dağıtım noktalarınıza sevk ediyoruz.",
    en: "We unload containers from London Gateway, Tilbury or Felixstowe, store the stock on pallets and deliver to your customers and sites.",
  },
  packauto: {
    tr: "Ürünlerinizi İngiltere'de palet olarak stoklayıp müşterilerinize, bayilere ve servislere yerel stoktan düzenli teslim ediyoruz.",
    en: "We store your products on pallets in the UK and deliver regularly from local stock to your customers, dealers and workshops.",
  },
  forwarder: {
    tr: "Müşterilerinizin İngiltere'ye gelen yükleri için Essex'te boşaltma, depolama ve İngiltere içi dağıtımda yerel depo partneriniz olabiliriz.",
    en: "We can be your local warehouse partner in Essex for your customers' UK loads: unloading, storage and UK distribution.",
  },
};
const GENERIC = {
  tr: "İngiltere'de kendi deponuzu kurmadan ürünlerinizi depolamanız, siparişlerinizi hazırlamanız ve İngiltere genelinde dağıtmanız için depo ve operasyon desteği veriyoruz.",
  en: "We help you store, fulfil and distribute your products across the UK without running your own warehouse.",
};

const angleFor = (group: Group | undefined, lang: "tr" | "en") => (group && group !== "other" ? ANGLE[group][lang] : GENERIC[lang]);

/** A model message (also used for manual sending). [..] parts are personalised per company. */
export function contactTemplate(group: Group | undefined, lang: "tr" | "en"): string {
  if (lang === "tr")
    return `Merhaba [Şirket] ekibi,

[Şirkete özel ilk cümle: ürünleri, İngiltere'deki satış/ithalat kanıtı veya Amazon mağazası]. ${angleFor(group, "tr")} Depomuz Essex, Rayleigh'de, London Gateway limanına yaklaşık 13 mil uzaklıkta. Palet depolama haftalık £3.50 + KDV'den başlar; asgari hacim yok, tek paletle başlanabilir.

Uygunsa 15 dakikalık kısa bir görüşmede İngiltere operasyonunuzu konuşmak isteriz.

Konu sizin için uygun değilse kısa bir yanıt yeterli; tekrar yazmayız.

${SIGNATURE}`;
  return `Hello [Company] team,

[Company-specific first sentence: their products, UK sales/import evidence or Amazon store]. ${angleFor(group, "en")} Our warehouse is in Rayleigh, Essex, about 13 miles from London Gateway. Pallet storage starts from £3.50 + VAT per week, with no fixed minimum, so you can start with a single pallet.

Would a 15-minute call about your UK operation be useful?

If this isn't relevant, a short reply is enough and we won't write again.

${SIGNATURE}`;
}

// ---------- Agent task text ----------

export type ContactOpts = { count: number; approval: Approval };

const fieldRules = (o: ContactOpts) => `## Form doldurma kuralları
1. Şirketin web sitesinde iletişim sayfasını bul (Contact, Contact us, Get in touch, İletişim, Bize ulaşın). Satış veya genel iletişim formunu kullan.
2. Şu formlara GÖNDERME, form_status = skipped yaz: iş başvurusu, şikâyet, destek/teknik servis bileti, sipariş takibi, bayi başvurusu.
3. Formda veya sayfada "satış teklifi / solicitation / vendor pitch kabul etmiyoruz" benzeri bir ifade varsa gönderme, form_status = no_solicitation yaz.
4. Alanları şöyle doldur:
   - Ad / Name: ${SENDER.name} (ayrı alanlar varsa First name: ${SENDER.first}, Last name: ${SENDER.last})
   - Şirket / Company: ${SENDER.company}
   - Unvan / Job title: ${SENDER.title}
   - E-posta / Email: ${SENDER.email}
   - Telefon / Phone: ${SENDER.phone}
   - Web sitesi / Website: ${SENDER.website}
   - Ülke / Country: ${SENDER.country}
   - Konu / Subject veya "Nedeniniz" listesi: Business / Partnership / Sales / Other (hangisi en uygunsa)
   - Mesaj: aşağıdaki mesaj kurallarına göre bu şirkete özel yaz.
5. Zorunlu gizlilik/KVKK/şartlar onay kutusunu işaretleyebilirsin. Bülten, pazarlama veya üçüncü taraf onay kutularını İŞARETLEME.
6. CAPTCHA, "robot değilim" veya benzeri doğrulama çıkarsa geçmeye ÇALIŞMA: gönderme, form_status = captcha yaz, mesajı yine message sütununa koy (elle göndereceğiz) ve sonraki şirkete geç.
7. Form yoksa yalnızca sayfada yayımlanan kurumsal e-posta adresini email_fallback sütununa yaz, form_status = no_form. E-POSTA GÖNDERME.
8. Her şirkete yalnızca BİR kez gönder. Gönderimden sonra çıkan teyit mesajını confirmation_text sütununa kopyala.
9. Bu çalışmada en fazla ${o.count} form gönder.
10. Onay: ${o.approval === "each" ? "Her formu Gönder'e basmadan önce doldurulmuş hâlini bana göster ve onayımı bekle." : "İlk 2 formu Gönder'e basmadan önce doldurulmuş hâlini bana göster ve onayımı bekle; onaylarsam kalanları aynı kurallarla onay sormadan gönder."}

## Mesaj kuralları
- Dil: Türkiye merkezli şirketlere Türkçe, diğerlerine İngilizce.
- Uzunluk 500–900 karakter. Alan daha kısaysa sığacak şekilde kısalt; imza ve çıkma cümlesi kalsın.
- İlk cümle o şirkete özel olsun: ürünleri, İngiltere'deki satış/ithalat kanıtı veya Amazon mağazası. Genel övgü ve abartı kullanma.
- Ardından şirketin segmentine uygun satış açısı, tek bir öneri ve tek bir çağrı (15 dakikalık görüşme veya kısa yanıt).
- Yalnızca şu doğrulanmış bilgileri kullan: Essex, Rayleigh'deki depo; London Gateway ~13 mil, Tilbury ~16 mil; palet depolama haftalık £3.50 + KDV'den; asgari hacim yok, tek paletle başlanabilir; konteyner boşaltma, depolama, pick & pack, e-ticaret fulfilment, Amazon FBA hazırlık, İngiltere içi dağıtım; nakliye ve gümrükleme Arca Trade Group üzerinden.
- Antrepo (bonded) olduğumuzu, Amazon/Shopify partneri olduğumuzu veya başka fiyatlar YAZMA.
- Sonda tek satır çıkma cümlesi: "Konu sizin için uygun değilse kısa bir yanıt yeterli; tekrar yazmayız." / "If this isn't relevant, a short reply is enough and we won't write again."
- İmza tam olarak:
${SIGNATURE}

Örnek mesaj (Türkçe):
${contactTemplate("exporter", "tr")}
`;

const output = (extra: readonly string[]) => `## Çıktı formatı
Bitince TEK bir CSV kod bloğu ver (ayrıca indirilebilir .csv dosyası da oluşturabilirsin). İlk satır tam olarak şu başlık olsun:
${[...new Set([...LOG_COLUMNS, ...extra])].join(",")}
Kurallar:
- form_status: sent, captcha, error, no_form, no_solicitation veya skipped.
- language: tr veya en.
- sent_at: gönderim zamanı (YYYY-MM-DD HH:MM), gönderilmediyse boş.
- message: gönderdiğin (veya captcha/error ise göndereceğin) mesajın tam metni.
- Virgül veya satır sonu içeren değerleri çift tırnak içine al.
- Gönderemediğin şirketleri de listede tut.
`;

const header = (n: number) => `GÖREV: LondraDepo adına ${n} şirketin web sitesindeki iletişim formunu, şirkete özel kısa bir mesajla doldur ve gönder. Sonunda yaptığın her şeyin kaydını CSV olarak ver.

## Gönderen
${POSITIONING_EN}
Formları LondraDepo Operasyon Müdürü ${SENDER.name} adına dolduruyorsun. LondraDepo.com, Arca Trade Group Ltd'nin (İngiltere, şirket no. 13247691) depo markasıdır; depo: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY.
`;

/** Mode a: companies already researched by the customer wizard. */
export function buildContactPromptFromLeads(leads: Lead[], o: ContactOpts): string {
  const rows = leads.map((l, i) => {
    const seg = segmentById(l.segment);
    return `${i + 1}. ${l.company} — ${l.website} — ${l.country || "?"} — segment: ${l.segment || "?"}${seg ? ` (${seg.label})` : ""}
   Neden uygun: ${l.reason || "—"}${l.uk_evidence ? ` · İngiltere kanıtı: ${l.uk_evidence}` : ""}${l.products ? ` · Ürünler: ${l.products}` : ""}
   Mesajda kullanılacak açı: ${seg?.angle ?? GENERIC.tr}`;
  });
  return `${header(Math.min(o.count, leads.length))}
## Şirketler (sırayla; araştırma yapıldı, doğrudan iletişim sayfasına git)
${rows.join("\n")}

${fieldRules(o)}
${output([])}`;
}

/** Mode b: research new companies first (same brief as the customer wizard), then fill their forms. */
export function buildContactPromptResearch(t: Target, existing: string[], o: ContactOpts): string {
  const full = buildPrompt({ ...t, count: o.count }, existing);
  const brief = full.slice(full.indexOf("## Aranacak segmentler"), full.indexOf("## Puanlama"));
  return `${header(o.count)}
Önce aşağıdaki kurallarla uygun şirketleri bul ve doğrula, sonra her birinin iletişim formunu doldur.

${brief}
${fieldRules(o)}
${output(COLUMNS)}`;
}

// ---------- Import ----------

const FS = Object.keys(FORM_STATUSES) as FormStatus[];

export function toContact(rec: Record<string, string>, runId: string, at: string): Contact | { error: string } {
  const get = (k: string) => String(rec[k] ?? "").trim();
  let website = get("website");
  if (website && !/^https?:\/\//i.test(website)) website = `https://${website}`;
  const domain = normDomain(website) || normDomain(get("contact_page_url"));
  if (!domain) return { error: `${get("company") || "?"}: web sitesi yok` };
  const st = get("form_status").toLowerCase().replace(/[\s-]+/g, "_") as FormStatus;
  return {
    domain,
    company: get("company") || domain,
    website: website || `https://${domain}`,
    segment: get("segment"),
    country: get("country"),
    contact_page_url: get("contact_page_url"),
    form_status: FS.includes(st) ? st : "error",
    language: get("language").toLowerCase().startsWith("tr") ? "tr" : "en",
    subject: get("subject").slice(0, 300),
    message: get("message").slice(0, 4000),
    sent_at: get("sent_at"),
    confirmation_text: get("confirmation_text").slice(0, 500),
    email_fallback: get("email_fallback"),
    reason: get("reason").slice(0, 600),
    reply: "yok",
    run_id: runId,
    imported_at: at,
  };
}

/** Working days between a date and now (weekends excluded). */
export function workdaysSince(iso: string): number {
  const start = new Date(iso.replace(" ", "T"));
  if (Number.isNaN(start.getTime())) return 0;
  let n = 0;
  const d = new Date(start);
  const now = new Date();
  while (d < now) {
    d.setUTCDate(d.getUTCDate() + 1);
    if (d <= now && ![0, 6].includes(d.getUTCDay())) n++;
  }
  return n;
}

export const needsManual = (c: Contact) => c.form_status === "captcha" || c.form_status === "error";
export const followUpDue = (c: Contact) => c.form_status === "sent" && c.reply === "yok" && !c.followup_at && workdaysSince(c.sent_at || c.imported_at) >= 5;

export function contactsToCsv(cs: Contact[]): string {
  const head = [...LOG_COLUMNS, "reply", "imported_at", "followup_at"];
  const esc = (v: unknown) => {
    const s = String(v ?? "");
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = cs.map((c) => [...LOG_COLUMNS.map((k) => (k === "form_status" ? FORM_STATUSES[c.form_status] : c[k])), REPLIES[c.reply], c.imported_at, c.followup_at ?? ""].map(esc).join(","));
  return "﻿" + [head.join(","), ...rows].join("\r\n");
}
