/**
 * Turkish blog articles and case studies: one place for dates, the answer-first summary ("Kısa cevap")
 * and sources. Dates feed both the visible byline and Article JSON-LD so they never drift.
 * Update `modified` only when the article content is reviewed or changed.
 */
export type TrArticle = {
  headline: string;
  /** Omitted where the original publication date is not known (never guessed). */
  published?: string;
  modified: string;
  summary: string;
  sources?: { label: string; href: string }[];
};

const VAT_RATES = { label: "GOV.UK: VAT rates (UK KDV oranları: %20 standart, %5 indirimli, %0)", href: "https://www.gov.uk/vat-rates" };

export const TR_ARTICLES: Record<string, TrArticle> = {
  "/blog/amazon-fba-vs-uk-fulfillment": {
    headline: "Amazon FBA mı, UK Fulfillment mı? Hangisi Daha Avantajlı?",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "Yalnızca Amazon'da satıyorsanız ve Prime rozeti sizin için öncelikliyse Amazon FBA güçlü bir seçenektir. Web siteniz, B2B müşterileriniz veya birden fazla pazaryeriniz varsa stoğu bağımsız bir UK deposunda (3PL) tutup tüm kanalları tek merkezden yönetmek daha esnek ve kontrollüdür. İki modeli birlikte kullanmak da mümkündür: ana stok UK deposunda kalır, Amazon'a ihtiyaç kadar sevk edilir.",
  },
  "/blog/amazon-prep-uk-rehberi": {
    headline: "Amazon Prep UK: Adım Adım Rehber",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "Amazon Prep, ürünlerinizin Amazon UK deposuna kabul edilmesi için gereken hazırlıktır: etiketleme, paketleme ve Amazon'un fiziksel standartlarına uygun sevkiyat. Kurallara uymayan ürünler reddedilebilir veya ek ücrete tabi olabilir. Bu yüzden FBA satıcılarının çoğu prep işini Amazon'a göndermeden önce İngiltere'deki bir depo partnerine yaptırır.",
  },
  "/blog/ingiltere-ara-depo-nedir": {
    headline: "İngiltere Ara Depo Nedir? Kimler İçin Uygundur?",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "İngiltere ara depo (cross-dock veya transit depo), Türkiye'den gelen toplu yükün kısa süre tutulup ayrıştırıldığı, etiketlendiği ve UK içinde farklı adreslere ya da Amazon depolarına sevk edildiği noktadır. Uzun süreli stoklama yerine hızlı dağıtım hedefleyen ve büyük gönderimlerden sipariş bazlı dağıtıma geçen firmalar için uygundur.",
  },
  "/blog/ingiltere-depo-fiyatlari-2026": {
    headline: "İngiltere Depo Fiyatları 2026: Tam Maliyet Rehberi",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "LondraDepo'da standart palet depolama haftalık palet başına £3,50 + KDV'den başlar; örneğin 10 palet 4 hafta için £140 + KDV tutar. Mal kabul, elleçleme, pick & pack, yeniden paletleme, gümrükleme ve teslimat ürün ve sipariş yapınıza göre ayrıca fiyatlandırılır. Toplam maliyeti hacim, stokta kalış süresi ve ek hizmetler belirler.",
    sources: [VAT_RATES],
  },
  "/blog/ingiltere-depo-rehberi": {
    headline: "İngiltere Depo Hizmeti: Kapsamlı Rehber",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "İngiltere depo hizmeti, ürünlerinizin UK'ye geldiğinde teslim alındığı, güvenli şekilde depolandığı ve gerektiğinde müşterilere, satış noktalarına veya Amazon'a sevk edildiği altyapıdır. İngiltere'de stok tutmak teslimat sürelerini kısaltır ve pazaryeri satışlarını hızlandırır. Doğru partneri seçerken konum, fiyat yapısı, stok takibi ve Türkçe iletişim önemlidir.",
  },
  "/blog/ingiltere-fulfillment-nedir": {
    headline: "İngiltere Fulfillment Nedir? Nasıl Çalışır?",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "Fulfillment, bir e-ticaret siparişinin alınmasından müşteriye teslimine kadar olan süreçtir: siparişin alınması, ürünün raftan toplanması (picking), paketlenmesi (packing) ve kargoya verilmesi. İngiltere'de 3PL fulfillment ile bu işleri kendi deponuzu kurmadan bir UK depo partnerine devredersiniz; özellikle UK'de deposu olmayan Türk ihracatçılar için en hızlı başlangıç yoludur.",
  },
  "/blog/ingiltere-palet-depolama-maliyetleri": {
    headline: "İngiltere Palet Depolama Maliyetleri 2026",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "LondraDepo'da standart bir paletin haftalık depolama başlangıç ücreti £3,50 + KDV'dir; 10 standart palet 4 hafta için £140 + KDV tutar. Bu tutar yalnızca depolamayı kapsar. Giriş işlemi, pick & pack, yeniden paletleme ve özel yükler ayrıca değerlendirilir; toplam bütçe için bu kalemleri de hesaba katın.",
    sources: [VAT_RATES],
  },
  "/blog/turkiyeden-ingiltereye-ihracat-rehberi": {
    headline: "Türkiye'den İngiltere'ye İhracat Rehberi 2026",
    published: "2025-06-01",
    modified: "2026-11-10",
    summary:
      "Türkiye'den İngiltere'ye ihracatta UK'deki ithalatçının GB EORI numarası olmalı, her ürün için doğru gümrük tarife kodu (GTİP / commodity code) belirlenmeli ve ithalat beyannamesi HMRC'nin CDS sisteminde verilmelidir. Türkiye-UK Serbest Ticaret Anlaşması'ndan yararlanmak için menşe beyanı gerekir. Gümrük vergisi ve ithalat KDV'si (genellikle %20) ayrıca ödenir veya beyan edilir.",
    sources: [
      { label: "GOV.UK: Get an EORI number (GB EORI başvurusu)", href: "https://www.gov.uk/eori" },
      { label: "GOV.UK: The UK's integrated tariff schedule (UK gümrük tarifesi)", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
      VAT_RATES,
      { label: "US International Trade Administration (trade.gov): United Kingdom import requirements and documentation", href: "https://www.trade.gov/country-commercial-guides/united-kingdom-import-requirements-and-documentation" },
    ],
  },
  // Case studies (operasyon örnekleri). Publication dates are kept only where they were already published.
  "/case-studies/arac-koltuk-kaplama-ingiltere-depo": {
    headline: "Araç Koltuk Kaplama & Suni Deri — İngiltere Depo & Satış Operasyonu",
    modified: "2026-11-10",
    summary:
      "Araç koltuk kaplama ve suni deri üreticisi, İngiltere stoğunu Essex'teki LondraDepo deposunda tutuyor. Ürünler kabulde sayılıp kalite kontrolünden geçiyor, SKU'ya göre raf ve palet sisteminde depolanıyor; eBay, Amazon ve B2B bayi siparişleri aynı gün işleme alınıp İngiltere genelindeki atölye, bayi ve bireysel müşterilere gönderiliyor.",
  },
  "/case-studies/cruyff-uk-fulfillment": {
    headline: "Cruyff — İngiltere Moda & Fulfillment Operasyonu",
    published: "2026-01-01",
    modified: "2026-11-10",
    summary:
      "Avrupa'dan İngiltere'ye online satış açan bu moda markası için LondraDepo stoğu Essex'te teslim alıp yeniden paketliyor, stok seviyelerini yönetiyor ve e-ticaret siparişlerini hazırlayıp İngiltere geneline gönderiyor. UK içi teslimat süresi 2 gün.",
  },
  "/case-studies/pizza-box-distribution-uk": {
    headline: "Pizza Kutusu — İngiltere B2B Restoran Dağıtım Operasyonu",
    modified: "2026-11-10",
    summary:
      "Pizza kutusu üreticisi, İngiltere'deki restoran müşterilerine düzenli teslimat için palet bazlı UK depolama ve programlı dağıtım modeline geçti. Stok Essex deposunda paletli tutuluyor ve restoranlara sabit haftalık veya aylık programla UK geneline dağıtılıyor.",
  },
  "/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu": {
    headline: "Taşınabilir Şarj İstasyonu — İngiltere Operasyon Yönetimi",
    modified: "2026-11-10",
    summary:
      "Taşınabilir şarj istasyonu ürünlerinin İngiltere operasyonu tek merkezden yürütülüyor: Essex deposunda stoklama, SIM aktivasyonu, şarj kontrolü ve son kullanıcıya sevkiyat. Lojistik ile teknik hazırlık aynı depoda yapıldığı için ürünler kullanıma hazır şekilde müşteriye ulaşıyor.",
  },
  "/case-studies/tortilla-uk-distribution": {
    headline: "Tortilla Markası — İngiltere Depo & Dağıtım Operasyonu",
    published: "2026-01-01",
    modified: "2026-11-10",
    summary:
      "İngiltere'ye küçük başlayıp büyümek mümkün: bu gıda üreticisi pazarı tek paletle test etti, GTİP ve UK etiketleme netleştikten sonra düzenli sevkiyata geçti. Mal kabul, depolama, sipariş hazırlama ve UK dağıtımı Essex'teki tek depodan yürütülüyor; hacim bugün ayda 6 × 40HC konteyner.",
  },
  "/case-studies/uk-auto-parts-warehouse": {
    headline: "OEM & Yan Sanayi — Lüks Araç Yedek Parça İngiltere Deposu",
    modified: "2026-11-10",
    summary:
      "Lüks araç segmenti için OEM ve aftermarket yedek parça üreten firma, İngiltere bayilik ve online satış ağını büyütürken UK stok yönetimi ve dağıtım altyapısını LondraDepo'da kurdu. Parçalar palet ve raf sisteminde hasar izlemeli depolanıyor ve İngiltere geneline dağıtılıyor.",
  },
  "/case-studies/uk-walking-treadmill-distribution": {
    headline: "Walking Treadmill — İngiltere Depo & Satış Operasyonu",
    published: "2026-01-01",
    modified: "2026-11-10",
    summary:
      "Walking treadmill ürünlerinin İngiltere depolama, online satış ve retail dağıtım operasyonu LondraDepo üzerinden yürütülüyor. Büyük hacimli ürünler Essex deposunda kabul edilip stoklanıyor; online siparişler ve mağaza teslimatları İngiltere geneline tek merkezden organize ediliyor.",
  },
};

const TR_DATE = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const trDate = (iso: string) => TR_DATE.format(new Date(`${iso}T12:00:00Z`));
