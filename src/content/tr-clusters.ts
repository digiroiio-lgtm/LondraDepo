/**
 * Turkish service clusters with close search intents. Each page shows a
 * "Hangi sayfa size uygun?" box so each page answers a different question.
 */
export type TrClusterItem = { href: string; title: string; fit: string };
export type TrCluster = { h2: string; items: TrClusterItem[] };

const DEPO: TrCluster = {
  h2: "Hangi depo sayfası size uygun?",
  items: [
    { href: "/ingiltere-depo", title: "İngiltere Depo", fit: "Ürünlerinizin teslim alınmasını, depolanmasını, sipariş ve dağıtımını tek partnere vermek istiyorsunuz." },
    { href: "/depolama", title: "Depolama Hizmeti", fit: "Asıl ihtiyacınız depolama kapasitesi; mal kabul, stok takibi ve alanın nasıl işlediğini görmek istiyorsunuz." },
    { href: "/palet-depolama", title: "Palet Depolama", fit: "Paletli B2B stok tutacaksınız ve palet başına haftalık fiyatı arıyorsunuz." },
    { href: "/londra-depo", title: "Londra Depo", fit: "Müşterileriniz veya teslimatlarınız Londra ve Güneydoğu İngiltere'de." },
  ],
};

const FULFILLMENT: TrCluster = {
  h2: "Hangi fulfillment sayfası size uygun?",
  items: [
    { href: "/ingiltere-fulfillment", title: "İngiltere Fulfillment", fit: "İngiltere'ye ithalat yapıyorsunuz ve online, perakende ve B2B tüm siparişlerinizin sizin yerinize karşılanmasını istiyorsunuz." },
    { href: "/e-ticaret-fulfillment", title: "E-Ticaret Fulfillment", fit: "Online mağazanız var; bir siparişin ödemeden müşterinin kapısına nasıl gittiğini görmek istiyorsunuz." },
    { href: "/ingiltere-e-ticaret-lojistigi", title: "E-Ticaret Lojistiği", fit: "UK kurulumunun tamamını planlıyorsunuz: stok yeri, teslimat, iade ve birden fazla satış kanalı." },
    { href: "/siparis-toplama-paketleme", title: "Sipariş Toplama ve Paketleme", fit: "Sadece siparişlerin toplanıp paketlenmesi işine, sipariş başına fiyatla ihtiyacınız var." },
    { href: "/shopify-ingiltere-depo", title: "Shopify İngiltere Depo", fit: "Mağazanız Shopify üzerinde." },
  ],
};

const AMAZON: TrCluster = {
  h2: "Hangi Amazon sayfası size uygun?",
  items: [
    { href: "/amazon-fulfillment", title: "Amazon İngiltere Fulfillment", fit: "Ürünleriniz için FBA mı FBM mi uygun, henüz karar vermediniz." },
    { href: "/amazon-prep-uk", title: "Amazon Prep UK (FBA)", fit: "Stoğunuzu Amazon depolayıp gönderecek; önce Amazon kurallarına göre etiketlenip paketlenmesi gerekiyor." },
    { href: "/amazon-ingiltere-depo", title: "Amazon İçin İngiltere Depo (FBM)", fit: "Amazon siparişlerinizi kendiniz karşılıyorsunuz (FBM) ve Essex depomuzdan gönderilmesini istiyorsunuz." },
  ],
};

const TURKIYE: TrCluster = {
  h2: "Türkiye'den İngiltere'ye: hangi sayfa size uygun?",
  items: [
    { href: "/turk-sirketleri-icin-ingiltere-depo", title: "Türk Şirketleri İçin İngiltere Depo", fit: "UK'de şirket ve depo kurmadan İngiltere'de satışa başlamak istiyorsunuz." },
    { href: "/turkiye-ingiltere-lojistik", title: "Türkiye–İngiltere Lojistik", fit: "Ürünlerin Türkiye'den İngiltere'ye taşınması ve gümrüklemesi önceliğiniz." },
    { href: "/turkiyeden-ingiltereye-depolama", title: "Türkiye'den İngiltere'ye Depolama", fit: "Türkiye'den gelen ürünleriniz için İngiltere'de stok ve fulfillment altyapısı arıyorsunuz." },
    { href: "/turkiyeden-ingiltereye-satis", title: "İngiltere'de Nasıl Satış Yapılır?", fit: "Henüz planlama aşamasındasınız; satış kanalları ve adımları öğrenmek istiyorsunuz." },
  ],
};

const ALL = [DEPO, FULFILLMENT, AMAZON, TURKIYE];

export function trClusterFor(path: string): TrCluster | undefined {
  return ALL.find((c) => c.items.some((i) => i.href === path));
}
export const TR_CLUSTER_PATHS = ALL.flatMap((c) => c.items.map((i) => i.href));
