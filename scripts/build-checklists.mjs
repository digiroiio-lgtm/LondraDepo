// Builds the gated import checklist PDFs (EN + TR) into public/downloads/.
// Run: node scripts/build-checklists.mjs  (uses the pre-installed Playwright Chromium)
// Content is limited to facts already published on /en/blog/uk-importing-guide.
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright"); // global install, CommonJS
import { mkdirSync } from "node:fs";

const OUT = new URL("../public/downloads/", import.meta.url);
mkdirSync(OUT, { recursive: true });

const DOCS = [
  {
    file: "uk-import-checklist.pdf",
    lang: "en",
    title: "UK Import Checklist",
    sub: "Before your first shipment to Great Britain",
    updated: "Last updated: 10 November 2026",
    groups: [
      ["1. Set-up", [
        "Agree who is the importer of record (your company, a UK subsidiary or your buyer) and the Incoterms (DAP or DDP)",
        "Apply for a GB EORI number for the importer on GOV.UK",
        "Check whether you need UK VAT registration (for example under DDP or when selling to UK customers)",
        "If VAT-registered, plan to use postponed VAT accounting for import VAT",
      ]],
      ["2. Products", [
        "Find the commodity code for every product in the UK Integrated Online Tariff",
        "Note the duty rate and any import controls attached to each code",
        "Check rules of origin and whether a UK trade agreement (for example with the EU or Turkey) gives reduced or zero duty",
        "Check conformity marking (UKCA, or CE where still accepted), UK labelling and any licences",
        "Food, plant and animal products: check health certificates and IPAFFS pre-notification",
      ]],
      ["3. Documents", [
        "Commercial invoice with value, currency and Incoterms",
        "Packing list with cartons, weights and dimensions",
        "Transport document: bill of lading, CMR or air waybill",
        "Proof of origin if claiming a preferential tariff",
        "Product certificates or licences where your goods require them",
      ]],
      ["4. Shipping and clearance", [
        "Appoint a freight forwarder or customs agent to lodge the declaration in CDS",
        "Budget for customs duty (paid on release) and import VAT (usually 20% on the value including duty)",
        "Confirm the arrival port and the delivery booking at the warehouse",
      ]],
      ["5. Warehouse", [
        "Send the packing list and SKU details to the warehouse before arrival",
        "Agree how goods arrive: palletised, or loose-loaded for container unloading",
        "Agree storage, order and distribution requirements, and how stock will be reported",
      ]],
    ],
    note: "This checklist is general guidance, not legal or tax advice. Check GOV.UK for your product category and take professional advice before the first shipment.",
    footer: "LondraDepo · Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY · +44 7554 195190 · www.londradepo.com/en",
    cta: "Need storage, freight or customs clearance? Request a quote at www.londradepo.com/en/request-a-quote",
  },
  {
    file: "ingiltere-ithalat-kontrol-listesi.pdf",
    lang: "tr",
    title: "İngiltere İthalat Kontrol Listesi",
    sub: "Büyük Britanya'ya ilk sevkiyatınızdan önce",
    updated: "Son güncelleme: 10 Kasım 2026",
    groups: [
      ["1. Hazırlık", [
        "İthalatçının (importer of record) kim olacağını belirleyin: kendi şirketiniz, UK şirketiniz veya alıcınız; teslim şeklini (DAP veya DDP) netleştirin",
        "İthalatçı için GOV.UK üzerinden GB EORI numarası alın",
        "UK KDV (VAT) kaydı gerekip gerekmediğini kontrol edin (örneğin DDP satışta veya UK müşterilere satışta)",
        "KDV kayıtlıysanız ithalat KDV'si için ertelenmiş KDV muhasebesini (postponed VAT accounting) planlayın",
      ]],
      ["2. Ürünler", [
        "Her ürünün UK gümrük tarife kodunu (commodity code) UK Integrated Online Tariff'te bulun",
        "Her kodun gümrük vergisi oranını ve ithalat kısıtlamalarını not edin",
        "Menşe kurallarını ve UK-Türkiye anlaşmasıyla indirimli veya sıfır gümrük vergisi imkânını kontrol edin",
        "Uygunluk işareti (UKCA veya hâlâ kabul edildiği yerde CE), UK etiketleme ve lisans gerekliliklerini kontrol edin",
        "Gıda, bitki ve hayvansal ürünler: sağlık sertifikası ve IPAFFS ön bildirimini kontrol edin",
      ]],
      ["3. Belgeler", [
        "Değer, para birimi ve teslim şeklini içeren ticari fatura",
        "Koli, ağırlık ve ölçüleri içeren ambalaj listesi",
        "Taşıma belgesi: konşimento, CMR veya hava konşimentosu",
        "Tercihli tarife talep ediliyorsa menşe belgesi",
        "Ürününüz gerektiriyorsa sertifika veya lisanslar",
      ]],
      ["4. Nakliye ve gümrükleme", [
        "Beyannameyi CDS'te verecek bir nakliye firması veya gümrük müşaviri belirleyin",
        "Gümrük vergisi (tahliyede ödenir) ve ithalat KDV'si (genellikle vergi dahil değer üzerinden %20) için bütçe ayırın",
        "Varış limanını ve depoya teslim randevusunu teyit edin",
      ]],
      ["5. Depo", [
        "Ambalaj listesini ve ürün (SKU) bilgilerini varıştan önce depoya gönderin",
        "Ürünlerin nasıl geleceğini belirleyin: paletli veya konteyner boşaltma gerektiren dökme yükleme",
        "Depolama, sipariş ve dağıtım ihtiyaçlarını ve stok raporlamasını netleştirin",
      ]],
    ],
    note: "Bu liste genel bilgilendirme amaçlıdır; hukuki veya vergi danışmanlığı değildir. Ürün kategoriniz için GOV.UK'yi kontrol edin ve ilk sevkiyattan önce profesyonel destek alın.",
    footer: "LondraDepo · Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY · +44 7554 195190 · www.londradepo.com",
    cta: "Depolama, nakliye veya gümrükleme mi gerekiyor? Teklif için: www.londradepo.com/iletisim",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function html(d) {
  const groups = d.groups
    .map(([h, items]) => `<section><h2>${esc(h)}</h2>${items.map((i) => `<div class="item"><span class="box"></span><span>${esc(i)}</span></div>`).join("")}</section>`)
    .join("");
  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 16mm 16mm 18mm; }
  body { font-family: Arial, Helvetica, sans-serif; color: #1e293b; font-size: 10.5pt; line-height: 1.45; }
  header { border-bottom: 3px solid #e63946; padding-bottom: 8px; margin-bottom: 14px; }
  .brand { font-weight: 700; font-size: 13pt; color: #0b2545; } .brand b { color: #e63946; }
  h1 { font-size: 20pt; color: #0b2545; margin: 6px 0 2px; } .sub { color: #475569; } .upd { color: #64748b; font-size: 9pt; margin-top: 2px; }
  h2 { font-size: 12pt; color: #0b2545; margin: 14px 0 6px; }
  section { break-inside: avoid; }
  .item { display: flex; gap: 8px; margin: 4px 0; }
  .box { flex: 0 0 11px; height: 11px; border: 1.5px solid #0b2545; border-radius: 2px; margin-top: 2px; }
  .note { margin-top: 16px; font-size: 9pt; color: #475569; border-left: 3px solid #cbd5e1; padding-left: 8px; }
  .cta { margin-top: 12px; background: #0b2545; color: #fff; padding: 9px 12px; border-radius: 6px; font-weight: 700; }
  footer { margin-top: 14px; font-size: 8.5pt; color: #64748b; }
  </style></head><body>
  <header><div class="brand">Londra<b>Depo</b>.com</div><h1>${esc(d.title)}</h1><div class="sub">${esc(d.sub)}</div><div class="upd">${esc(d.updated)}</div></header>
  ${groups}
  <div class="note">${esc(d.note)}</div><div class="cta">${esc(d.cta)}</div><footer>${esc(d.footer)}</footer>
  </body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage();
for (const d of DOCS) {
  await page.setContent(html(d), { waitUntil: "load" });
  await page.pdf({ path: new URL(d.file, OUT).pathname, format: "A4", printBackground: true });
  console.log("wrote", d.file);
}
await browser.close();
