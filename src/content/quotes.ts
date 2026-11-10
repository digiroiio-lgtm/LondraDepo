/**
 * Team quotes (EN + TR). One place to review and edit.
 * Drafted from facts already published on the site; each person must approve
 * their wording before these go live (merge = approval).
 */
export type QuoteKey = "sertacFounder" | "sertacExporters" | "yusufGoodsIn" | "yusufStock";

const SERTAC = { name: "Sertaç Yılmaz", en: "Founder, LondraDepo · Co-founder, Arca Trade Group", tr: "LondraDepo Kurucusu · Arca Trade Group Kurucu Ortağı" };
const YUSUF = { name: "Yusuf Barış", en: "Operations Manager, LondraDepo", tr: "Operasyon Müdürü, LondraDepo" };

export const QUOTES: Record<QuoteKey, { person: typeof SERTAC; en: string; tr: string }> = {
  sertacFounder: {
    person: SERTAC,
    en: "In 18 years of moving goods into the UK, I have seen that the hardest part for overseas businesses is often what happens after the goods arrive. We set up LondraDepo so they have one team in Essex that receives, stores and ships their stock, in English or Turkish.",
    tr: "18 yıldır İngiltere'ye yük taşıyoruz ve yurt dışındaki firmalar için en zor kısmın çoğu zaman mallar geldikten sonrası olduğunu gördük. LondraDepo'yu, stoğunuzu Essex'te teslim alan, depolayan ve gönderen tek bir ekip olsun diye kurduk; İngilizce ya da Türkçe.",
  },
  sertacExporters: {
    person: SERTAC,
    en: "The first question Turkish exporters ask us is usually whether they need a UK company before they can hold stock here. An overseas business with a GB EORI number can act as the importer; what matters is getting the commodity codes, documents and VAT position right before the first shipment.",
    tr: "Türk ihracatçıların bize ilk sorusu genellikle İngiltere'de stok tutmak için UK şirketi gerekip gerekmediği oluyor. GB EORI numarası olan yurt dışı bir firma ithalatçı olabilir; asıl önemli olan ilk sevkiyattan önce GTİP, belgeler ve KDV durumunu doğru kurmak.",
  },
  yusufGoodsIn: {
    person: YUSUF,
    en: "Most goods-in problems start with paperwork, not with the container. If we have the packing list and SKU details before the goods arrive, we can plan the unloading, count the stock against the list and flag any differences straight away.",
    tr: "Mal kabulündeki sorunların çoğu konteynerden değil, evraktan başlar. Ambalaj listesi ve ürün (SKU) bilgileri mallar gelmeden elimizde olursa boşaltmayı planlıyor, stoğu listeyle karşılaştırarak sayıyor ve farkları hemen bildiriyoruz.",
  },
  yusufStock: {
    person: YUSUF,
    en: "Clients should never have to guess what is on the shelf. Every pallet and carton is booked into our warehouse system when it arrives, so stock levels and movements can be reported back to the client.",
    tr: "Müşterilerimiz rafta ne olduğunu tahmin etmek zorunda kalmamalı. Her palet ve koli geldiğinde depo sistemimize kaydediliyor; böylece stok seviyeleri ve hareketleri müşteriye raporlanabiliyor.",
  },
};

/** EN page section for a team quote. */
export function teamQuote(key: QuoteKey) {
  const q = QUOTES[key];
  return { type: "quote" as const, text: q.en, cite: `${q.person.name}, ${q.person.en}` };
}
