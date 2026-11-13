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
    modified: "2026-11-11",
    summary:
      "Yalnızca Amazon'da satıyorsanız ve Prime rozeti sizin için öncelikliyse Amazon FBA güçlü bir seçenektir. Web siteniz, B2B müşterileriniz veya birden fazla pazaryeriniz varsa stoğu bağımsız bir UK deposunda (3PL) tutup tüm kanalları tek merkezden yönetmek daha esnek ve kontrollüdür. İki modeli birlikte kullanmak da mümkündür: ana stok UK deposunda kalır, Amazon'a ihtiyaç kadar sevk edilir.",
    sources: [
      { label: "GOV.UK: Export goods from the UK, step by step (AB'ye ihracat dahil)", href: "https://www.gov.uk/export-goods" },
      { label: "Amazon: Satış ve FBA ücretleri (sell.amazon.co.uk/pricing)", href: "https://sell.amazon.co.uk/pricing" },
    ],
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
  // Turkish pairs of the EN guides published 10 November 2026.
  "/blog/ingiltere-3pl-nasil-secilir": {
    headline: "İngiltere'de 3PL Depo Nasıl Seçilir? Sorulacak 12 Soru",
    published: "2026-11-10",
    modified: "2026-11-10",
    summary:
      "3PL depo seçerken firmaları aynı 12 soruyla karşılaştırın: konum, her maliyet kaleminin fiyatı, stok görünürlüğü, satış kanalları, iade, minimum hacim, sözleşme, sigorta, gümrük desteği, iletişim dili, referanslar ve depo ziyareti. Teklifleri tek tek fiyatlara değil, kendi hacminiz için aylık toplama göre karşılaştırın.",
  },
  "/blog/ingiltere-ithalat-maliyetleri": {
    headline: "İngiltere'ye İthalatın Maliyeti Nedir?",
    published: "2026-11-10",
    modified: "2026-11-10",
    summary:
      "İngiltere'ye ithalatta iki tür maliyet vardır: devlet kalemleri (tarife koduna ve menşeye göre gümrük vergisi, genellikle vergi ve taşıma dahil değer üzerinden %20 ithalat KDV'si) ve lojistik kalemleri (nakliye, gümrükleme, taşıma, boşaltma, depolama, fulfillment). KDV kayıtlı ithalatçılar ertelenmiş KDV muhasebesiyle KDV'yi sınırda ödemeden beyan edebilir.",
    sources: [
      { label: "GOV.UK: The UK's integrated tariff schedule (UK gümrük tarifesi, %0 MFN satırları)", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
      VAT_RATES,
      { label: "US International Trade Administration (trade.gov): United Kingdom import requirements and documentation", href: "https://www.trade.gov/country-commercial-guides/united-kingdom-import-requirements-and-documentation" },
    ],
  },
  "/blog/amazon-private-label-toptan": {
    headline: "Amazon Private Label, Toptan ve Arbitraj: Her Model UK Deposundan Ne İster?",
    published: "2026-11-13",
    modified: "2026-11-13",
    summary:
      "Private label satıcıları kendi markasını konteynerle ithal eder; boşaltma, FNSKU etiket ve Amazon'a partiler halinde sevk gerekir. Toptan satıcılar çok SKU'lu karışık paletler alır; doğru sayım ve listelemeye göre etiketleme önemlidir. Arbitraj stoğu küçük kolilerle gelir. LondraDepo konteyner, palet ve koli hacimlerine göre kuruludur ve en iyi private label ile toptan modeline uyar.",
    sources: [
      { label: "Amazon: Fulfilment by Amazon (sell.amazon.co.uk)", href: "https://sell.amazon.co.uk/fulfilment-by-amazon" },
      { label: "Amazon Freight: UK LTL to Amazon FCs, shipper's checklist", href: "https://freight.amazon.co.uk/newsroom/uk-ltl-amazon-fcs-checklist" },
    ],
  },
  "/blog/ithalat-belgeleri": {
    headline: "İngiltere İthalat Belgeleri: Neler Gerekir, Her Biri Neyi Göstermeli?",
    published: "2026-11-13",
    modified: "2026-11-13",
    summary:
      "İngiltere'ye ithalatta dört temel belge gerekir: ticari fatura, ambalaj listesi, konşimento veya hava yolu senedi ve tercihli vergi talep ediliyorsa menşe ispatı. Beyannamede ayrıca GB EORI, GTİP ve mal değeri yer alır. Ambalaj listesi depoda mal kabulünün de temelidir; ücretsiz şablon sayfada.",
    sources: [
      { label: "GOV.UK: Import goods into the UK, step by step", href: "https://www.gov.uk/import-goods-into-uk" },
      { label: "GOV.UK: Pay less Customs Duty on goods from a country with a UK trade agreement (menşe ispatı)", href: "https://www.gov.uk/guidance/import-and-export-goods-using-preference-agreements" },
    ],
  },
  "/blog/antrepo-nedir": {
    headline: "Antrepo (Bonded Warehouse) Nedir? Gümrüklenmiş Depodan Farkı",
    published: "2026-11-11",
    modified: "2026-11-11",
    summary:
      "Antrepo (customs / bonded warehouse), ithal ürünün gümrük vergisi ve ithalat KDV'si askıdayken depolandığı HMRC onaylı tesistir; vergiler ürün serbest dolaşıma girince doğar. KDV kayıtlı ithalatçılar ertelenmiş KDV ile sınırda KDV ödemediği için, kısa sürede İngiltere'de satılacak stokta gümrüklenmiş depo genellikle yeterli ve daha basittir.",
    sources: [
      { label: "GOV.UK: Special procedure, customs warehousing (antrepo prosedürü)", href: "https://www.gov.uk/guidance/special-procedure-customs-warehousing/introduction" },
      { label: "GOV.UK: Check when you can account for import VAT on your VAT Return (ertelenmiş KDV)", href: "https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return" },
      { label: "GOV.UK: The UK's integrated tariff schedule (UK gümrük tarifesi)", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
    ],
  },
  "/blog/incoterms-rehberi": {
    headline: "Incoterms Rehberi: İngiltere'ye Satışta Kim Neyi Öder?",
    published: "2026-11-11",
    modified: "2026-11-11",
    summary:
      "Incoterms 2020, satıcının ve alıcının navlun, sigorta, gümrük ve risk sorumluluğunu belirleyen ICC kurallarıdır. İngiltere'ye satışta EXW, FCA, FOB, CIF ve DAP'ta İngiltere gümrüğünü, vergiyi ve ithalat KDV'sini alıcı öder; yalnızca DDP'de satıcı öder. FOB, FAS, CFR ve CIF yalnızca deniz yolu içindir.",
    sources: [
      { label: "International Chamber of Commerce: Incoterms rules (Incoterms 2020)", href: "https://iccwbo.org/business-solutions/incoterms-rules/" },
      { label: "GOV.UK: Check when you can account for import VAT on your VAT Return (ertelenmiş KDV)", href: "https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return" },
    ],
  },
  "/blog/amazon-fba-prep-kontrol-listesi": {
    headline: "Amazon FBA Prep Kontrol Listesi (UK Satıcıları İçin)",
    published: "2026-11-10",
    modified: "2026-11-10",
    summary:
      "Amazon UK depolarına göndermeden önce: Seller Central'da sevkiyat planını oluşturun, her ürüne FNSKU etiketi yapıştırın, diğer barkodları kapatın, ürünleri korumalı paketleyin, set ve paketleri işaretleyin, kolileri Amazon etiketleriyle etiketleyin ve atanan depoya teslim edin. Kurallar değiştiği için güncel gereklilikleri Seller Central'dan kontrol edin.",
  },
};

const TR_DATE = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const trDate = (iso: string) => TR_DATE.format(new Date(`${iso}T12:00:00Z`));
