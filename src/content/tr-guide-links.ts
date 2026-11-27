/**
 * "Sıradaki adım" for the hand-written Turkish guides: the money pages each guide should send readers to,
 * the services preselected in its quote form, and the form heading. Keeps guide → service → quote links in one place.
 */
export type GuideLink = { href: string; label: string };
export type GuideNext = { links: GuideLink[]; services: string[]; heading: string; intro: string };

const QUOTE: GuideLink = { href: "/teklif-al", label: "Teklif al" };

export const GUIDE_NEXT: Record<string, GuideNext> = {
  "ingiltere-depo-rehberi": {
    links: [
      { href: "/ingiltere-depo", label: "İngiltere Depo hizmeti" },
      { href: "/ingiltere-3pl", label: "İngiltere 3PL depo" },
      { href: "/palet-depolama", label: "Palet depolama (£3.50 + KDV / hafta)" },
      { href: "/ingiltere-depo-fiyatlari", label: "İngiltere depo fiyatları" },
      { href: "/essex-depo", label: "Essex depomuz" },
      QUOTE,
    ],
    services: ["Depolama"],
    heading: "İngiltere'de depo için teklif alın",
    intro: "Ürününüzü, tahmini palet veya koli sayınızı yazın; depolama, mal kabul ve dağıtımı fiyatlandıralım.",
  },
  "ingiltere-fulfillment-nedir": {
    links: [
      { href: "/ingiltere-fulfillment", label: "İngiltere Fulfillment hizmeti" },
      { href: "/ingiltere-3pl", label: "İngiltere 3PL depo" },
      { href: "/e-ticaret-fulfillment", label: "E-ticaret fulfillment" },
      { href: "/siparis-toplama-paketleme", label: "Sipariş toplama ve paketleme" },
      { href: "/shopify-ingiltere-depo", label: "Shopify için İngiltere depo" },
      QUOTE,
    ],
    services: ["E-Ticaret Fulfillment", "Pick & Pack"],
    heading: "Fulfillment teklifi alın",
    intro: "Aylık sipariş sayınızı ve satış kanallarınızı yazın; depolama ve sipariş başı fiyatı çıkaralım.",
  },
  "amazon-prep-uk-rehberi": {
    links: [
      { href: "/amazon-prep-uk", label: "Amazon Prep UK (FBA hazırlık)" },
      { href: "/amazon-fulfillment", label: "Amazon İngiltere fulfillment: FBA mı FBM mi?" },
      { href: "/amazon-ingiltere-depo-konumlari", label: "Amazon UK depo konumları" },
      { href: "/blog/amazon-fba-prep-kontrol-listesi", label: "FBA prep kontrol listesi" },
      QUOTE,
    ],
    services: ["Ürün Elleçleme", "Depolama"],
    heading: "Amazon FBA prep teklifi alın",
    intro: "SKU, adet ve koli sayısını yazın; etiketleme, paketleme ve Amazon'a sevkiyatı fiyatlandıralım.",
  },
  "ingiltere-ara-depo-nedir": {
    links: [
      { href: "/ingiltere-depo", label: "İngiltere Depo hizmeti" },
      { href: "/palet-depolama", label: "Palet depolama" },
      { href: "/limandan-depoya-lojistik", label: "Limandan depoya lojistik" },
      { href: "/essex-depo", label: "Essex depomuz" },
      QUOTE,
    ],
    services: ["Depolama", "Yükleme / Boşaltma"],
    heading: "Ara depo için teklif alın",
    intro: "Ürünün nereden geleceğini ve kaç palet olacağını yazın; boşaltma, ara depolama ve sevkiyatı fiyatlandıralım.",
  },
  "ingiltere-depo-fiyatlari-2026": {
    links: [
      { href: "/ingiltere-depo-fiyatlari", label: "İngiltere depo fiyatları (güncel tablo)" },
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Depo maliyet hesaplama aracı" },
      { href: "/palet-depolama", label: "Palet depolama" },
      { href: "/ingiltere-depo", label: "İngiltere Depo hizmeti" },
      QUOTE,
    ],
    services: ["Depolama"],
    heading: "Size özel depo fiyatı alın",
    intro: "Palet sayınızı ve aylık hareketinizi yazın; toplam aylık maliyeti netleştirelim.",
  },
  "ingiltere-palet-depolama-maliyetleri": {
    links: [
      { href: "/palet-depolama", label: "Palet depolama hizmeti" },
      { href: "/ingiltere-depo-fiyatlari", label: "İngiltere depo fiyatları" },
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Depo maliyet hesaplama aracı" },
      { href: "/cbm-palet-hesaplama", label: "CBM ve palet hesaplama" },
      QUOTE,
    ],
    services: ["Depolama"],
    heading: "Palet depolama teklifi alın",
    intro: "Palet sayısını, ölçüsünü ve kalış süresini yazın; haftalık ve toplam maliyeti çıkaralım.",
  },
  "amazon-fba-vs-uk-fulfillment": {
    links: [
      { href: "/amazon-fulfillment", label: "Amazon İngiltere fulfillment" },
      { href: "/amazon-ingiltere-depo", label: "Amazon için İngiltere depo (FBM)" },
      { href: "/amazon-prep-uk", label: "Amazon Prep UK" },
      { href: "/ingiltere-fulfillment", label: "İngiltere Fulfillment" },
      QUOTE,
    ],
    services: ["E-Ticaret Fulfillment", "Depolama"],
    heading: "FBA / FBM için teklif alın",
    intro: "Satış kanallarınızı ve aylık sipariş sayınızı yazın; en uygun modeli ve maliyeti birlikte çıkaralım.",
  },
  "turkiyeden-ingiltereye-ihracat-rehberi": {
    links: [
      { href: "/turk-sirketleri-icin-ingiltere-depo", label: "Türk şirketleri için İngiltere depo" },
      { href: "/turkiye-ingiltere-lojistik", label: "Türkiye–İngiltere lojistik" },
      { href: "/turkiyeden-ingiltereye-depolama", label: "Türkiye'den İngiltere'ye depolama" },
      { href: "/gumrukleme", label: "İngiltere gümrükleme" },
      QUOTE,
    ],
    services: ["Depolama", "Gümrükleme Koordinasyonu", "Dağıtım"],
    heading: "İhracatınız için İngiltere'de depo teklifi alın",
    intro: "Ürününüzü, sevkiyat sıklığını ve İngiltere'deki müşteri tipinizi yazın; gümrük, depolama ve dağıtımı fiyatlandıralım.",
  },
};
