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
  captcha: "Doğrulama engeli (CAPTCHA / güvenlik kodu)",
  error: "Hata: elle gönder",
  phone_rejected: "Telefon formatı kabul edilmedi: elle gönder",
  no_form: "Form yok (yalnız e-posta)",
  no_solicitation: "Satış mesajı kabul etmiyor",
  skipped: "Atlandı",
} as const;
export type FormStatus = keyof typeof FORM_STATUSES;

/**
 * The same UK mobile written the ways contact forms accept it, most common first. Forms differ: some reject
 * "+", spaces or the country code, some want 10/11 digits, some have a separate country-code dropdown.
 */
export const PHONE_FORMATS: { value: string; when: string }[] = [
  { value: "+44 7554 195190", when: "varsayılan, uluslararası" },
  { value: "+447554195190", when: "boşluk kabul edilmiyorsa" },
  { value: "+44-7554-195190", when: "tire kabul ediliyor, boşluk edilmiyorsa" },
  { value: "00447554195190", when: "\"+\" kabul edilmiyorsa (TR/AB formlarında yaygın)" },
  { value: "447554195190", when: "yalnız rakam, ülke koduyla" },
  { value: "07554 195190", when: "İngiltere yerel biçimi" },
  { value: "07554195190", when: "yerel biçim, 11 hane, boşluksuz" },
  { value: "7554195190", when: "ülke kodu ayrı listeden United Kingdom (+44) seçildiyse ya da alan 10 hane istiyorsa" },
  { value: "0044 7554 195190", when: "örnek/placeholder 00 ile gruplu gösteriyorsa" },
];

export const REPLIES = { yok: "Yanıt yok", yanit: "Yanıt geldi", olumlu: "Olumlu", ilgisiz: "İlgilenmiyor" } as const;
export type Reply = keyof typeof REPLIES;

export const APPROVAL = {
  first2: "İlk 2 formu göndermeden önce bana göster, sonra devam et",
  each: "Her formu göndermeden önce bana sor",
} as const;
export type Approval = keyof typeof APPROVAL;

/** What stopped the agent on a "captcha" row, so blocked forms can be worked through later by hand. */
export const BLOCK_TYPES = {
  recaptcha: "Google reCAPTCHA (\"Ben robot değilim\" / resim seçme)",
  recaptcha_invisible: "Görünmez reCAPTCHA v3 (gönderim reddedildi)",
  hcaptcha: "hCaptcha",
  turnstile: "Cloudflare Turnstile / güvenlik kontrolü",
  image_code: "Resimdeki güvenlik kodu (harf/rakam)",
  math: "Matematik / soru doğrulaması",
  otp: "E-posta veya SMS doğrulama kodu",
  login: "Giriş / üyelik gerekiyor",
  other: "Diğer doğrulama",
} as const;
export type BlockType = keyof typeof BLOCK_TYPES;

export const LOG_COLUMNS = [
  "company", "website", "segment", "country", "contact_page_url", "form_status", "language", "subject", "message",
  "sent_at", "confirmation_text", "email_fallback", "phone_used", "notes", "block_type", "block_detail", "reason",
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
  phone_used: string;
  notes: string;
  block_type: string;
  block_detail: string;
  attempts?: number;
  email_fallback: string;
  reason: string;
  reply: Reply;
  run_id: string;
  imported_at: string;
  followup_at?: string;
  /** Channel that actually reached the company (form or a manual email). */
  channel?: "form" | "email";
  emailed_at?: string;
  /** Gmail thread of the last email we sent from the panel (replies in it are matched to this company). */
  thread_id?: string;
  /** Everything that happened to this company, oldest first. */
  events?: ContactEvent[];
};

export const EVENT_LABELS = {
  imported: "Ajan inceledi",
  form_sent: "Form gönderildi",
  blocked: "Doğrulama engeli",
  error: "Hata / teyit yok",
  phone_rejected: "Telefon formatı reddedildi",
  no_form: "Form yok, e-posta kaydedildi",
  skipped: "Atlandı",
  email_sent: "E-posta gönderildi",
  followup: "Takip görevi açıldı",
  reply: "Yanıt durumu",
  note: "Not",
  auto_ack: "Otomatik teyit e-postası",
  mail_in: "Gelen e-posta",
} as const;
export type EventType = keyof typeof EVENT_LABELS;
export type ContactEvent = { at: string; type: EventType; note?: string };

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
   - Telefon / Phone: ${SENDER.phone} (alan bu biçimi kabul etmezse aşağıdaki "Telefon alanı" kurallarını uygula)
   - Web sitesi / Website: ${SENDER.website}
   - Ülke / Country: ${SENDER.country}
   - Konu / Subject veya "Nedeniniz" listesi: Business / Partnership / Sales / Other (hangisi en uygunsa)
   - Mesaj: aşağıdaki mesaj kurallarına göre bu şirkete özel yaz.
5. Telefon alanı (formların çoğu burada takılır; dikkatle uygula):
   a. Yazmadan ÖNCE alanın placeholder'ına, etiketine, örneğine ve karakter sınırına bak; gösterilen biçime en uygun seçeneği kullan.
   b. Ülke kodu için ayrı bir liste/bayrak varsa United Kingdom (+44) seç ve numara alanına 7554195190 yaz.
   c. Yoksa şu biçimleri sırayla dene; her denemeden sonra alanın altındaki/üstündeki doğrulama mesajını kontrol et, hata varken Gönder'e BASMA (en fazla 6 deneme):
${PHONE_FORMATS.map((f, i) => `      ${i + 1}) ${f.value}  — ${f.when}`).join("\n")}
   d. Alan yalnızca Türkiye cep telefonu maskesi kabul ediyorsa (ör. 0 (5__) ___ __ __) Türk numarası UYDURMA veya numarayı maskeye uydurmaya çalışma: alan isteğe bağlıysa boş bırak; zorunluysa gönderme, form_status = phone_rejected yaz.
   e. Telefon alanı isteğe bağlıysa ve hiçbir biçim kabul edilmezse alanı boş bırakıp gönder.
   f. Gönder'e bastıktan sonra genel bir hata çıkarsa ("An error occurred", "Bir hata oluştu") bir kez daha sıradaki telefon biçimiyle dene; yine olursa form_status = error yaz ve hata metnini notes sütununa kopyala.
   g. Kabul edilen biçimi phone_used sütununa yaz; denediğin ama reddedilen biçimleri kısaca notes sütununa yaz.
6. Zorunlu gizlilik/KVKK/şartlar onay kutusunu işaretleyebilirsin. Bülten, pazarlama veya üçüncü taraf onay kutularını İŞARETLEME.
7. CAPTCHA, "robot değilim", resimdeki güvenlik kodu, matematik sorusu, Cloudflare kontrolü, SMS/e-posta kodu veya üyelik şartı gibi bir doğrulama çıkarsa geçmeye ÇALIŞMA ve çözmeye uğraşma:
   - Formun diğer alanlarını ve mesajı doldurmuş olsan bile Gönder'e basma.
   - form_status = captcha yaz, mesajı yine message sütununa koy (sonra birlikte elle göndereceğiz).
   - block_type sütununa şunlardan birini yaz: ${Object.keys(BLOCK_TYPES).join(", ")}.
   - block_detail sütununa nerede takıldığını kısaca yaz (ör. "Gönder düğmesinin üstünde reCAPTCHA kutusu", "Formun altında 5 haneli resim kodu", "Gönderince 'spam şüphesi' hatası").
   - Sonraki şirkete geç.
8. Form yoksa yalnızca sayfada yayımlanan kurumsal e-posta adresini email_fallback sütununa yaz, form_status = no_form. E-POSTA GÖNDERME.
9. Her şirkete yalnızca BİR kez gönder. Gönderimden sonra çıkan teyit mesajını confirmation_text sütununa kopyala.
10. Bu çalışmada en fazla ${o.count} form gönder.
11. Onay: ${o.approval === "each" ? "Her formu Gönder'e basmadan önce doldurulmuş hâlini bana göster ve onayımı bekle." : "İlk 2 formu Gönder'e basmadan önce doldurulmuş hâlini bana göster ve onayımı bekle; onaylarsam kalanları aynı kurallarla onay sormadan gönder."}

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
- form_status: sent, captcha, phone_rejected, error, no_form, no_solicitation veya skipped.
- block_type / block_detail: yalnızca captcha satırlarında; türü ve nerede takıldığın.
- phone_used: formda kabul edilen telefon biçimi (boş bıraktıysan "boş").
- notes: hata mesajı, reddedilen telefon biçimleri veya kısa açıklama.
- language: tr veya en.
- sent_at: gönderim zamanı (YYYY-MM-DD HH:MM), gönderilmediyse boş.
- message: gönderdiğin mesajın tam metni; captcha/error/phone_rejected ise göndereceğin mesaj; no_form ise e-postayla göndereceğimiz mesaj (konu satırını subject sütununa yaz).
- error satırlarında notes sütununa ne olduğunu ayrıntılı yaz: ekranda çıkan hata metni, Gönder'e bastıktan sonra ne oldu (sayfa değişmedi, teyit çıkmadı, alan kırmızı oldu vb.).
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
  let st = get("form_status").toLowerCase().replace(/[\s-]+/g, "_") as FormStatus;
  const rawBlock = get("block_type").toLowerCase().replace(/[\s-]+/g, "_");
  const hint = `${rawBlock} ${get("block_detail")} ${get("notes")}`.toLowerCase();
  if (st !== "captcha" && st !== "sent" && /captcha|güvenlik kodu|guvenlik kodu|security code|robot/.test(hint)) st = "captcha";
  const blockType: string = st !== "captcha" ? "" : rawBlock in BLOCK_TYPES ? rawBlock : guessBlock(hint);
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
    phone_used: get("phone_used").slice(0, 40),
    notes: get("notes").slice(0, 500),
    block_type: blockType,
    block_detail: get("block_detail").slice(0, 300),
    reason: get("reason").slice(0, 600),
    reply: "yok",
    run_id: runId,
    imported_at: at,
  };
}

/** Best guess of the block type from the agent's words when it did not use one of the codes. */
function guessBlock(t: string): BlockType {
  if (/hcaptcha/.test(t)) return "hcaptcha";
  if (/turnstile|cloudflare/.test(t)) return "turnstile";
  if (/invisible|görünmez|v3|spam/.test(t)) return "recaptcha_invisible";
  if (/recaptcha|robot/.test(t)) return "recaptcha";
  if (/güvenlik kodu|guvenlik kodu|security code|resim|image|kod/.test(t)) return "image_code";
  if (/matemat|math|toplam|soru/.test(t)) return "math";
  if (/sms|otp|doğrulama kodu|verification code/.test(t)) return "otp";
  if (/login|giriş|üye|sign in/.test(t)) return "login";
  return "other";
}

export const isBlocked = (c: Contact) => c.form_status === "captcha";

/**
 * Task text for working through blocked forms together: the agent fills each form, stops at the
 * verification step and hands control to the user, then submits after the user has solved it.
 */
export function buildBlockedPrompt(cs: Contact[]): string {
  const rows = cs.map((c, i) => `${i + 1}. ${c.company} — form: ${c.contact_page_url || c.website}
   Engel: ${BLOCK_TYPES[(c.block_type || "other") as BlockType] ?? c.block_type}${c.block_detail ? ` · ${c.block_detail}` : ""}
   Dil: ${c.language === "tr" ? "Türkçe" : "İngilizce"}
   Gönderilecek mesaj (aynen kullan, gerekirse yalnızca karakter sınırına göre kısalt):
${(c.message || "—").split("\n").map((l) => `   | ${l}`).join("\n")}`);
  return `GÖREV: Aşağıdaki ${cs.length} şirketin iletişim formunda daha önce bir doğrulama (CAPTCHA / güvenlik kodu) yüzünden takıldık. Şimdi birlikte, tek tek ve benim onayımla göndereceğiz.

## Çalışma şekli (her şirket için)
1. Form sayfasını aç ve alanları LondraDepo bilgileriyle doldur (kurallar aşağıda), mesajı yapıştır.
2. Doğrulama adımına gelince DUR. Doğrulamayı kendin çözmeye ÇALIŞMA. Tarayıcının kontrolünü bana ver ve "Doğrulamayı çözüp bana haber ver" de.
3. Ben çözüp haber verince alanların hâlâ dolu olduğunu kontrol et, Gönder'e bas ve teyit mesajını kaydet.
4. Teyit gelmezse ya da yeni bir doğrulama çıkarsa bana sor; yine olmuyorsa form_status = captcha bırak ve block_detail'e ne olduğunu yaz.
5. Sonraki şirkete geçmeden önce bana kısa bir özet ver.

## Şirketler
${rows.join("\n\n")}

${fieldRules({ count: cs.length, approval: "each" })}
${output([])}`;
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

export const needsManual = (c: Contact) => c.form_status === "error" || c.form_status === "phone_rejected";
export const followUpDue = (c: Contact) => c.form_status === "sent" && c.reply === "yok" && !c.followup_at && workdaysSince(c.sent_at || c.imported_at) >= 5;

export function contactsToCsv(cs: Contact[]): string {
  const head = [...LOG_COLUMNS, "block_type_label", "attempts", "reply", "imported_at", "followup_at"];
  const esc = (v: unknown) => {
    const s = String(v ?? "");
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = cs.map((c) => [...LOG_COLUMNS.map((k) => (k === "form_status" ? FORM_STATUSES[c.form_status] : c[k] ?? "")), c.block_type ? BLOCK_TYPES[c.block_type as BlockType] ?? c.block_type : "", c.attempts ?? 1, REPLIES[c.reply], c.imported_at, c.followup_at ?? ""].map(esc).join(","));
  return "﻿" + [head.join(","), ...rows].join("\r\n");
}
