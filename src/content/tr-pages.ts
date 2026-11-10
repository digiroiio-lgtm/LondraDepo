import type { Faq } from "@/components/FaqJsonLd";

/**
 * Data-driven Turkish pages (rendered by TrDataPage). Each is the 1:1 pair of an English page
 * (see src/lib/i18n-pairs.ts). Facts are limited to what the site already states: road distances
 * from SS6 7FY (10 Nov 2026), the published £3.50 + VAT pallet rate and sourced figures.
 */
export type TrSection =
  | { type: "text"; h2: string; paras: string[] }
  | { type: "list"; h2: string; intro?: string; items: string[] }
  | { type: "steps"; h2: string; intro?: string; items: [string, string][] }
  | { type: "table"; h2: string; intro?: string; head: string[]; rows: string[][]; note?: string }
  | { type: "links"; h2: string; items: { href: string; title: string; text: string; tag?: string }[] }
  | { type: "routemap"; h2?: string }
  | { type: "stats"; h2: string; items: { value: string; label: string }[] };

export type TrPage = {
  path: string;
  kind: "service" | "article";
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  readTime?: string;
  serviceType?: string;
  facts?: string[];
  sections: TrSection[];
  faqs: Faq[];
  related?: { href: string; label: string }[];
  form: { id: string; heading: string; intro: string; services: string[] };
  /** Hub pages list their child pages as CollectionPage + ItemList in JSON-LD. */
  hub?: boolean;
};

const PLANNER_LINKS = {
  type: "links" as const,
  h2: "Teslimatınızı planlayın",
  items: [
    { href: "/konteyner-varis-planlayici", title: "Konteyner Varış Planlayıcı", text: "Limanı, konteyneri ve ETA'yı seçin, tarihli kontrol listesi alın.", tag: "Ücretsiz araç" },
    { href: "/ellecleme", title: "Elleçleme ve Boşaltma", text: "Konteyner boşaltma, sayım, hasar fotoğrafı ve paletleme.", tag: "Hizmet" },
    { href: "/ingiltere-depo-maliyet-hesaplama", title: "Depo Maliyet Hesaplama", text: "Palet × hafta × £3,50 + KDV.", tag: "Ücretsiz araç" },
  ],
};

export const TR_PAGES: Record<string, TrPage> = {
  "/london-gateway-tilbury-depo": {
    path: "/london-gateway-tilbury-depo",
    kind: "service",
    serviceType: "Port warehousing for London Gateway and Tilbury",
    title: "London Gateway ve Tilbury Yakını Depo | LondraDepo",
    description:
      "DP World London Gateway'e 13 mil, Tilbury Limanı'na 16 mil uzaklıkta Essex deposu: konteyner boşaltma, palet depolama haftalık £3,50 + KDV'den, fulfillment ve UK dağıtım.",
    crumb: "London Gateway & Tilbury Depo",
    eyebrow: "Thames limanları · karayoluyla ~20 dakika",
    h1: "London Gateway ve Tilbury Yakınında Depo",
    lead:
      "LondraDepo'nun Rayleigh, Essex'teki deposu karayoluyla DP World London Gateway'e yaklaşık 13 mil (21 km), Tilbury Limanı'na 16 mil (26 km) uzaklıktadır; ikisine de araçla yaklaşık 20 dakika. Bu iki Thames limanına gelen konteynerler gümrükten çekilip kısa bir mesafeyle depomuza taşınır, boşaltılır, sayılır ve stoğa alınır; ardından palet başına haftalık £3,50 + KDV'den depolanır veya UK müşterilerine sevk edilir. Depomuz limanda değildir ve antrepo (bonded) değildir: ürünler gümrükten çekildikten sonra depolanır.",
    facts: [
      "DP World London Gateway: ~13 mil / 21 km, ~20 dakika",
      "Tilbury Limanı: ~16 mil / 26 km, ~20 dakika",
      "20ft, 40ft ve 40ft high-cube FCL ile LCL kabul",
      "Gümrükleme ve taşıma Arca Trade Group üzerinden",
      "Antrepo değildir: ürünler gümrükten sonra depolanır",
    ],
    sections: [
      {
        type: "table",
        h2: "London Gateway ve Tilbury karşılaştırması",
        head: ["", "DP World London Gateway", "Tilbury Limanı"],
        rows: [
          ["Konum", "Thurrock, Essex, Thames kıyısı", "Tilbury, Essex, Thames kıyısı"],
          ["Ne elleçler", "Büyük konteyner gemileri için derin su konteyner limanı", "Konteyner, ro-ro ve genel kargo"],
          ["Depomuza karayolu mesafesi", "~13 mil / 21 km", "~16 mil / 26 km"],
          ["Tipik araç süresi (trafiksiz)", "~20 dakika", "~20 dakika"],
        ],
        note: "SS6 7FY'den liman posta kodlarına karayolu rotasıyla ölçülmüştür (10 Kasım 2026). Tır, liman kuyruğu ve yoğun saatlerde süre uzar. Limanı genellikle hat (armatör) belirler.",
      },
      { type: "routemap" },
      {
        type: "steps",
        h2: "Thames limanlarından raflara",
        items: [
          ["Ön bildirim", "Konteyner numarası, ETA, ambalaj listesi, SKU başına koli sayısı ve paletli mi dökme mi olduğunu iletin."],
          ["Gümrükleme", "Arca Trade Group gümrük ekibi veya müşaviriniz ithalat beyannamesini verir; gümrük vergisi ve ithalat KDV'si beyan edilir."],
          ["Kısa taşıma", "Konteyner London Gateway veya Tilbury'den alınıp 13–16 millik karayoluyla Rayleigh'e getirilir."],
          ["Boşaltma ve kontrol", "Boşaltılır, ambalaj listesiyle sayılır, görünür hasar fotoğraflanır ve farklar bildirilir."],
          ["Stoğa alma", "Dökme koliler gerekirse paletlenip etiketlenir, stok Mintsoft WMS'e kaydedilir."],
          ["Depola veya sevk et", "Ürünler depolanır, siparişler için toplanır veya UK müşterilerine ve Amazon'a sevk edilir."],
        ],
      },
      {
        type: "text",
        h2: "Thames limanlarına yakın depo neden avantajlı?",
        paras: [
          "London Gateway ve Tilbury depomuza en yakın büyük konteyner limanlarıdır; limandan depoya karayolu mesafesi, yaklaşık 62 mil uzaklıktaki Felixstowe gibi limanlara göre kısadır. Depomuz Londra merkezine de yaklaşık 37 mil uzaklıktadır; aynı stok M25 üzerinden hem Londra ve Güneydoğu'ya hem de İngiltere'nin geri kalanına hizmet verir.",
          "Boşaltma, depolama, sipariş hazırlama ve UK dağıtım aynı binada yapıldığı için ürünler liman yanındaki bir sahadan ayrı bir fulfillment merkezine taşınmaz, tek seferde elleçlenir.",
        ],
      },
      PLANNER_LINKS,
    ],
    faqs: [
      { q: "Depo London Gateway'e ne kadar uzak?", a: "Karayoluyla DP World London Gateway'e yaklaşık 13 mil (21 km); trafiksiz araçla yaklaşık 20 dakika." },
      { q: "Depo Tilbury Limanı'na ne kadar uzak?", a: "Karayoluyla yaklaşık 16 mil (26 km); trafiksiz araçla yaklaşık 20 dakika. Konteyner taşıyan tırlar için süre daha uzundur." },
      { q: "Depo antrepo (bonded warehouse) mu?", a: "Hayır. LondraDepo antrepo değildir. Ürünler İngiltere gümrüğünden çekildikten sonra Rayleigh'deki depomuzda depolanır." },
      { q: "Konteyneri London Gateway veya Tilbury'den alabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group her iki limandan gümrükleme ve taşımayı ayarlayabilir; dilerseniz kendi nakliyeciniz de depoya teslim edebilir." },
    ],
    related: [
      { href: "/felixstowe-liman-depo", label: "Felixstowe Liman Depo" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/essex-depo", label: "Essex Depo" },
    ],
    form: { id: "tr_port_quote", heading: "Konteyneriniz İçin Teklif Alın", intro: "Limanı, konteyner tipini, ETA'yı ve ambalaj listesini yazın; taşıma, boşaltma, depolama ve sevkiyatı fiyatlandıralım.", services: ["Yükleme / Boşaltma", "Gümrükleme Koordinasyonu"] },
  },
  "/felixstowe-liman-depo": {
    path: "/felixstowe-liman-depo",
    kind: "service",
    serviceType: "Port warehousing for Felixstowe",
    title: "Felixstowe Limanı İçin Essex Depo | LondraDepo",
    description:
      "Felixstowe'a gelen konteynerler için Essex depo: yaklaşık 62 mil taşıma, boşaltma, haftalık £3,50 + KDV'den palet depolama, fulfillment ve Londra dağıtımı.",
    crumb: "Felixstowe Liman Depo",
    eyebrow: "Felixstowe Limanı · karayoluyla ~62 mil",
    h1: "Felixstowe Limanı Konteynerleri İçin Essex Depo",
    lead:
      "Felixstowe İngiltere'nin en büyük konteyner limanıdır ve Asya'dan gelen birçok okyanus hattı buraya uğrar. LondraDepo'nun deposu limanda değildir: Rayleigh, Essex'te, karayoluyla yaklaşık 62 mil (99 km), araçla yaklaşık 1 saat 15 dakika uzaklıktadır. Felixstowe'a gelen konteynerler gümrükten çekilip depomuza taşınır, boşaltılır ve stoğa alınır; ardından palet başına haftalık £3,50 + KDV'den depolanır, sipariş olarak hazırlanır veya İngiltere geneline dağıtılır. Londra merkezi depomuza yaklaşık 37 mil uzaklıktadır. Depomuz antrepo değildir; ürünler gümrükten sonra depolanır.",
    facts: [
      "Felixstowe Limanı: ~62 mil / 99 km, araçla ~1 saat 15 dakika",
      "Londra merkezi: depodan ~37 mil",
      "20ft, 40ft ve 40ft high-cube FCL ile LCL kabul",
      "Gümrükleme ve taşıma Arca Trade Group üzerinden",
      "Antrepo değildir ve limanda değildir",
    ],
    sections: [
      {
        type: "table",
        h2: "Felixstowe'dan depomuza: neleri planlamalı?",
        head: ["Adım", "İçeriği"],
        rows: [
          ["Gümrükleme", "İthalat beyannamesi Arca Trade Group gümrük ekibi veya müşaviriniz tarafından verilir; gümrük vergisi ve ithalat KDV'si beyan edilir"],
          ["Taşıma", "Felixstowe'dan Rayleigh'e karayoluyla yaklaşık 62 mil / 99 km; Arca Trade Group veya nakliyeciniz üzerinden"],
          ["Teslim saati", "Ön bildirimden sonra depomuzla önceden netleştirilir"],
          ["Boşaltma", "Ambalaj listesiyle sayım, hasar fotoğrafı, gerekirse dökme kolilerin paletlenmesi"],
          ["Sonraki adım", "Palet başına haftalık £3,50 + KDV'den depolama, sipariş fulfillment veya UK müşterilerine ve Amazon'a doğrudan sevk"],
        ],
        note: "SS6 7FY'den IP11'e karayolu rotasıyla ölçülmüştür (10 Kasım 2026). Süreler trafiksiz araç içindir; konteyner tırları ve liman kuyrukları daha uzun sürer.",
      },
      { type: "routemap" },
      {
        type: "text",
        h2: "Felixstowe konteynerleri için Essex deposu ne zaman mantıklı?",
        paras: [
          "Depomuz, ürünleri liman yanında sadece depolamaktan fazlasına ihtiyaç duyan ithalatçılara uygundur. Aynı stok Londra ve Güneydoğu müşterilerine, e-ticaret siparişlerine, Amazon'a ve toptan müşterilere hizmet verecekse, ürünü bir kez Rayleigh'de (Londra merkezine yaklaşık 37 mil) boşaltmak, liman yanındaki bir depoyla fulfillment merkezi arasında tekrar taşımayı önler.",
          "Ürünleriniz alınmadan önce sadece liman yanında kısa süre beklemesi gerekiyorsa, Felixstowe bölgesindeki bir depo size daha uygun olabilir. Konteynerlerinizin bir kısmı London Gateway veya Tilbury'ye geliyorsa, bu limanlar depomuza sadece 13–16 mil uzaklıktadır.",
        ],
      },
      PLANNER_LINKS,
    ],
    faqs: [
      { q: "Depo Felixstowe'a ne kadar uzak?", a: "Felixstowe Limanı'ndan Rayleigh, Essex'e karayoluyla yaklaşık 62 mil (99 km); trafiksiz araçla yaklaşık 1 saat 15 dakika. Konteyner tırları için süre daha uzundur." },
      { q: "Deponuz Felixstowe Limanı'nda mı?", a: "Hayır. Depomuz Rayleigh, Essex'tedir. Konteynerler Felixstowe'dan boşaltma, depolama ve fulfillment için depomuza taşınır." },
      { q: "Felixstowe konteynerleri için antrepo hizmeti veriyor musunuz?", a: "Hayır. LondraDepo antrepo değildir. Ürünler depolanmadan önce İngiltere gümrüğünden çekilir." },
      { q: "Felixstowe'dan taşıma ve gümrüklemeyi ayarlayabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group Felixstowe'dan gümrükleme ve taşımayı ayarlayabilir; dilerseniz kendi nakliyeciniz de depoya teslim edebilir." },
    ],
    related: [
      { href: "/london-gateway-tilbury-depo", label: "London Gateway & Tilbury Depo" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/essex-depo", label: "Essex Depo" },
    ],
    form: { id: "tr_port_quote", heading: "Felixstowe Konteyneriniz İçin Teklif Alın", intro: "Konteyner tipini, ETA'yı ve ambalaj listesini yazın; taşıma, boşaltma, depolama ve sevkiyatı fiyatlandıralım.", services: ["Yükleme / Boşaltma", "Gümrükleme Koordinasyonu"] },
  },
  "/blog/ingiltere-3pl-nasil-secilir": {
    path: "/blog/ingiltere-3pl-nasil-secilir",
    kind: "article",
    title: "İngiltere'de 3PL Depo Seçimi: 12 Soru | LondraDepo",
    description:
      "İngiltere'de 3PL depo seçerken sorulacak 12 soru: konum, fiyat yapısı, stok görünürlüğü, satış kanalları, iade, minimum hacim, sözleşme, sigorta, gümrük desteği ve referanslar.",
    crumb: "İngiltere 3PL Nasıl Seçilir",
    eyebrow: "Partner seçimi",
    h1: "İngiltere'de 3PL Depo Nasıl Seçilir? Sorulacak 12 Soru",
    lead:
      "İngiltere'de bir 3PL (üçüncü taraf lojistik) deposu seçerken firmaları 12 noktada karşılaştırın: deponun yeri, her maliyet kaleminin nasıl fiyatlandığı, stoğunuzu nasıl göreceğiniz, hangi satış kanallarını karşıladıkları, iadelerin nasıl işlendiği, minimum hacim olup olmadığı, sözleşme ve fesih şartları, sigorta, nakliye ve gümrük desteği, iletişim, referanslar ve depoyu ziyaret edip edemeyeceğiniz. Her firmaya aynı soruları sormak teklifleri karşılaştırılabilir kılar.",
    readTime: "7 dakika",
    sections: [
      {
        type: "table",
        h2: "Sorulacak 12 soru",
        head: ["Soru", "Neden önemli"],
        rows: [
          ["1. Depo nerede; varış limanınıza ve müşterilerinize ne kadar uzak?", "Mesafe, özellikle konteyner ithalatında taşıma maliyetini ve teslimat süresini belirler."],
          ["2. Her maliyet kalemi nasıl fiyatlanıyor?", "Depolama, mal kabul, pick & pack, ambalaj, teslimat ve iade genellikle ayrı fiyatlanır; kendi hacminiz için toplamı karşılaştırın."],
          ["3. Stoğunuzu nasıl göreceksiniz?", "Hangi depo yönetim sistemini (WMS) kullandıklarını ve size hangi raporları verdiklerini sorun."],
          ["4. Hangi kanalları karşılayabiliyorlar?", "Shopify, Amazon FBA hazırlık veya FBM, pazaryerleri ve toptan palet siparişlerini, mümkünse aynı stoktan."],
          ["5. İadeler nasıl işleniyor?", "İade ürünlerin nasıl kontrol edildiğini, stoğa alındığını veya ayrıldığını ve size nasıl bildirildiğini sorun."],
          ["6. Minimum hacim veya ücret var mı?", "Aylık minimum ücretler küçük bir başlangıcı pahalı hale getirebilir."],
          ["7. Sözleşme ve fesih şartları neler?", "Sözleşme süresini, fesih bildirim süresini ve ayrılırken stoğun nasıl teslim edileceğini kontrol edin."],
          ["8. Ürünleriniz için hangi sigorta geçerli?", "Deponun neyi sigortaladığını, sizin neyi sigortalamanız gerektiğini sorun."],
          ["9. Nakliye ve gümrükte yardımcı olabiliyorlar mı?", "Nakliye, UK gümrüğü ve depoyu tek grubun yürütmesi el değiştirmeleri azaltır; beyannameyi kimin verdiğini netleştirin."],
          ["10. Kiminle, hangi dilde konuşacaksınız?", "Belirli bir muhatap ve ortak dil günlük operasyonu hızlandırır."],
          ["11. Benzer müşterilerini gösterebiliyorlar mı?", "Sektörünüzdeki vaka çalışmaları ürün tipinizi ve sipariş yapınızı yönetebildiklerini gösterir."],
          ["12. Depoyu ziyaret edebilir misiniz?", "Ziyaret veya görüntülü tur; raf düzenini, temizliği ve güvenliği gösterir."],
        ],
      },
      {
        type: "text",
        h2: "Teklifler nasıl adil karşılaştırılır?",
        paras: [
          "Her firmaya aynı bilgileri gönderin: ürün tipi ve ölçüleri, SKU sayısı, stoktaki palet veya koli, aylık sipariş ve sipariş başına ortalama ürün, satış kanalları, iade oranı ve teslimat bölgeleri. Ardından bu senaryo için aylık toplamı karşılaştırın; düşük depolama fiyatı, yüksek elleçleme veya teslimat ücretiyle dengelenebilir.",
          "Sadece depolama için ilk tahmin: palet × hafta × palet başına haftalık fiyat. LondraDepo'da 10 standart palet 4 hafta için £140 + KDV'den başlar.",
        ],
      },
      {
        type: "table",
        h2: "LondraDepo bu sorulara nasıl cevap veriyor?",
        head: ["Konu", "LondraDepo"],
        rows: [
          ["Konum", "Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY: London Gateway'e ~13 mil, Tilbury'ye ~16 mil, Londra merkezine ~37 mil"],
          ["Depolama fiyatı", "Palet başına haftalık £3,50 + KDV'den; diğer hizmetler hacminize göre tekliflendirilir"],
          ["Stok görünürlüğü", "Stok ve siparişler Mintsoft WMS'te yönetilir"],
          ["Kanallar", "Shopify, Amazon FBA hazırlık ve FBM, pazaryerleri ve toptan palet siparişleri aynı stoktan"],
          ["Minimum", "Sabit minimum yok; 1 deneme paletiyle başlanabilir"],
          ["Nakliye ve gümrük", "LondraDepo'yu işleten Arca Trade Group üzerinden"],
          ["Dil", "Türkçe ve İngilizce"],
          ["Referanslar", "Gıda, ambalaj, otomotiv, moda, büyük hacimli ürünler ve elektronikte vaka çalışmaları"],
        ],
      },
    ],
    faqs: [
      { q: "3PL depo nedir?", a: "3PL (üçüncü taraf lojistik) deposu stoğunuzu tutar; mal kabul, sipariş toplama, paketleme, teslimat ve iadeleri sizin yerinize yapar. Böylece kendi deponuza ve personelinize ihtiyaç kalmaz." },
      { q: "Doğru teklif için 3PL'e hangi bilgileri göndermeliyim?", a: "Ürün tipi ve ölçüleri, SKU sayısı, stoktaki palet veya koli, aylık sipariş ve sipariş başına ortalama ürün, satış kanalları, beklenen iade oranı ve teslimat bölgeleri." },
      { q: "En ucuz depolama fiyatı en iyi teklif midir?", a: "Her zaman değil. Depolama, mal kabul, pick & pack, ambalaj, teslimat ve iade genellikle ayrı fiyatlanır; kendi hacminiz için aylık toplamı karşılaştırın." },
    ],
    related: [
      { href: "/ingiltere-depo", label: "İngiltere Depo" },
      { href: "/ingiltere-fulfillment", label: "İngiltere Fulfillment" },
      { href: "/ingiltere-depo-fiyatlari", label: "Depo Fiyatları" },
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Maliyet Hesaplama" },
    ],
    form: { id: "tr_guide_quote", heading: "LondraDepo'dan Teklif Alın", intro: "Yukarıdaki bilgileri bizimle paylaşın; aynı senaryo için aylık toplam teklifimizi hazırlayalım.", services: ["Depolama"] },
  },
  "/blog/ingiltere-ithalat-maliyetleri": {
    path: "/blog/ingiltere-ithalat-maliyetleri",
    kind: "article",
    title: "İngiltere İthalat Maliyetleri: Vergi, KDV, Lojistik",
    description:
      "İngiltere'ye ithalat maliyeti: nakliye, gümrükleme, gümrük vergisi, %20 ithalat KDV'si, taşıma, boşaltma, depolama ve fulfillment; örnek hesapla.",
    crumb: "İngiltere İthalat Maliyetleri",
    eyebrow: "İthalat",
    h1: "İngiltere'ye İthalatın Maliyeti Nedir?",
    lead:
      "İngiltere'ye ithalatın maliyeti iki bölümden oluşur. Devlet kalemleri: her ürünün tarife kodu (GTİP / commodity code) ve menşeine göre belirlenen gümrük vergisi ile genellikle vergi ve UK'ye taşıma dahil değer üzerinden %20 ithalat KDV'si. Lojistik kalemleri: nakliye, gümrükleme, limandan depoya taşıma, boşaltma, depolama ve sipariş fulfillment. KDV kayıtlı ithalatçılar çoğu zaman ertelenmiş KDV muhasebesini (postponed VAT accounting) kullanabilir; böylece ithalat KDV'si sınırda nakit olarak ödenmek zorunda kalmaz.",
    readTime: "7 dakika",
    sections: [
      {
        type: "table",
        h2: "Bir UK ithalatının maliyet kalemleri",
        head: ["Kalem", "Neye göre belirlenir", "Kim tahsil eder"],
        rows: [
          ["Nakliye", "Taşıma şekli (deniz, kara, demiryolu, hava), hacim ve rota", "Nakliye firması"],
          ["Gümrükleme", "Beyanname ve kalem sayısı", "Gümrük müşaviri veya nakliye firması"],
          ["Gümrük vergisi", "Tarife kodu, gümrük kıymeti ve menşe; tercihli menşe ile %0'a inebilir", "HMRC"],
          ["İthalat KDV'si", "Genellikle vergi ve UK'ye taşıma dahil değerin %20'si; bazı ürünlerde %5 veya %0", "HMRC (veya ertelenmiş KDV muhasebesi)"],
          ["Limandan depoya taşıma", "Limana mesafe ve konteyner tipi", "Taşıyıcı veya nakliye firması"],
          ["Boşaltma ve mal kabul", "Konteyner tipi, paletli veya dökme, SKU sayısı", "Depo"],
          ["Depolama", "Palet veya koli sayısı ve süre", "Depo (LondraDepo: palet başına haftalık £3,50 + KDV'den)"],
          ["Fulfillment ve teslimat", "Sipariş, sipariş başına ürün, koli veya palet teslimatı", "Depo ve kargo firmaları"],
        ],
      },
      {
        type: "steps",
        h2: "Örnek hesap: ithalat KDV'si nasıl hesaplanır?",
        intro: "Hesabın sırasını göstermek için varsayımsal bir sevkiyat. Gerçek vergi oranınız ürününüzün tarife koduna ve menşeine bağlıdır.",
        items: [
          ["Gümrük kıymeti", "£10.000 fatura değeri + UK'ye £800 nakliye ve sigorta: £10.800."],
          ["Gümrük vergisi", "Varsayılan %4 oranla: £10.800'ün %4'ü = £432. Tercihli menşe ile oran %0 olabilir."],
          ["KDV matrahı", "Gümrük kıymeti + vergi: £10.800 + £432 = £11.232."],
          ["İthalat KDV'si", "£11.232'nin %20'si = £2.246,40; ithalatta ödenir veya KDV kayıtlıysanız ertelenmiş KDV muhasebesiyle beyan edilir."],
        ],
      },
      {
        type: "text",
        h2: "İngiltere ithalat maliyetleri nasıl düşürülür?",
        paras: [
          "Sevkiyattan önce her ürünün tarife kodunu kontrol edin: vergi oranını bu kod belirler ve GOV.UK'ye göre UK en çok kayrılan ülke (MFN) tarife satırlarının yarısına yakını %0'dır. Ürünleriniz UK–AB Ticaret ve İşbirliği Anlaşması veya Türkiye–UK Serbest Ticaret Anlaşması gibi bir anlaşma kapsamındaysa, menşe belgesiyle gümrük vergisi %0'a inebilir.",
          "Lojistik tarafında, varış limanına yakın bir depo taşıma mesafesini kısaltır; boşaltma, depolama ve fulfillment'ın aynı binada yapılması stoğu depolar arasında taşıma maliyetini önler. Rayleigh'deki depomuz London Gateway'e yaklaşık 13, Tilbury'ye 16 mil uzaklıktadır.",
        ],
      },
    ],
    faqs: [
      { q: "İngiltere'de ithalat KDV'si ne kadar?", a: "İthalat KDV'si genellikle ürün değeri, gümrük vergisi ve UK'ye taşıma maliyeti dahil tutar üzerinden %20 standart oranla alınır. Bazı ürünlerde oran %5 veya %0'dır." },
      { q: "İngiltere'de gümrük vergisi nasıl hesaplanır?", a: "Vergi, ürünün UK tarifesindeki koduna göre gümrük kıymetinin bir yüzdesidir. Bir UK ticaret anlaşmasının menşe kurallarını karşılayan ürünler, menşe belgesiyle indirimli veya %0 orandan yararlanabilir." },
      { q: "Ertelenmiş KDV muhasebesi (postponed VAT accounting) nedir?", a: "KDV kayıtlı ithalatçıların ithalat KDV'sini sınırda ödemek yerine KDV beyannamesinde beyan etmesini sağlar; nakit akışına yardımcı olur." },
      { q: "UK depolama ithalata ne kadar maliyet ekler?", a: "LondraDepo'da depolama palet başına haftalık £3,50 + KDV'den başlar. Boşaltma, mal kabul, fulfillment ve teslimat hacminize göre tekliflendirilir." },
    ],
    related: [
      { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", label: "Türkiye'den İngiltere'ye İhracat Rehberi" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Maliyet Hesaplama" },
    ],
    form: { id: "tr_guide_quote", heading: "İthalat ve Depolama Teklifi Alın", intro: "Ürününüzü, çıkış noktasını ve tahmini hacmi yazın; nakliye, gümrükleme ve depolama için teklif hazırlayalım.", services: ["Gümrükleme Koordinasyonu", "Depolama"] },
  },
  "/blog/amazon-fba-prep-kontrol-listesi": {
    path: "/blog/amazon-fba-prep-kontrol-listesi",
    kind: "article",
    title: "Amazon FBA Prep Kontrol Listesi (UK) | LondraDepo",
    description:
      "UK satıcıları için Amazon FBA prep kontrol listesi: sevkiyat planı, FNSKU etiketleri, ambalaj, set ve paketler, koli etiketleri ve Amazon UK teslimatı.",
    crumb: "Amazon FBA Prep Kontrol Listesi",
    eyebrow: "Amazon",
    h1: "Amazon FBA Prep Kontrol Listesi (UK Satıcıları İçin)",
    lead:
      "Stok Amazon'un İngiltere'deki depolarına girmeden önce her ürün tanımlanabilir olmalı ve Amazon kurallarına göre paketlenmelidir: Seller Central'da sevkiyat planını oluşturun, her ürüne FNSKU barkodunu yapıştırın, diğer okunabilir barkodları kapatın, ürünleri hasarsız ulaşacak şekilde paketleyin, set ve paketleri işaretleyin, her koliyi etiketleyin ve Amazon'un atadığı depoya teslim edin. Amazon prep ve ambalaj kurallarını güncellediği için her yeni üründen önce Seller Central'daki güncel kuralları kontrol edin.",
    readTime: "5 dakika",
    sections: [
      {
        type: "list",
        h2: "Ürünler gelmeden önce",
        items: [
          "Her ürünün listelemesini ve FNSKU'sunu Seller Central'da teyit edin",
          "Ürünün prep kategorisini ve kategoriye özel gereklilikleri Seller Central'da kontrol edin",
          "Sevkiyat planını kimin, ne zaman oluşturacağını prep deposuyla netleştirin",
          "Depoya ambalaj listesini, SKU bilgilerini ve SKU başına adet sayısını gönderin",
        ],
      },
      {
        type: "list",
        h2: "Ürün hazırlığı",
        items: [
          "Üretici barkodunu kullanmaya uygun değilse her ürüne FNSKU etiketi yapıştırın",
          "Üründeki diğer okunabilir barkodları kapatın veya kaldırın",
          "Taşımada zarar görebilecek, sızabilecek veya dağılabilecek ürünleri poşetleyin, kutulayın veya koruyun",
          "Set ve paketleri ayrı ayrı satılmayacak şekilde işaretleyin",
          "Son kullanma tarihli ürünlerin Amazon'un istediği formatta etiketlendiğini kontrol edin",
        ],
      },
      {
        type: "list",
        h2: "Koliler ve teslimat",
        items: [
          "Kolileri Amazon'un güncel ağırlık ve ölçü sınırları içinde paketleyin",
          "Amazon'un oluşturduğu sevkiyat koli etiketlerini her koliye yapıştırın",
          "Paletli sevkiyatsa paletleri hazırlayıp etiketleyin",
          "Atanan Amazon UK deposuna teslim randevusu alın",
          "Stok satışa açık görünene kadar kabul sürecini takip edin",
        ],
      },
      {
        type: "text",
        h2: "Amazon prep deposu ne zaman kullanılmalı?",
        paras: [
          "Stoğunuz İngiltere'ye yurt dışından geliyorsa, Amazon'a gitmeden önce bir UK deposunda hazırlanması etiket veya ambalaj sorunlarını Amazon teslim almadan düzeltmenizi sağlar. LondraDepo stoğu Essex'te teslim alır, FNSKU etiketlerini uygular, ambalajı kontrol eder ve sevkiyat planındaki Amazon UK deposuna teslim eder. Aynı stok Shopify, FBM ve toptan siparişlere de hizmet verebilir.",
        ],
      },
    ],
    faqs: [
      { q: "Amazon FBA prep nedir?", a: "Ürünlerin Amazon depolarına kabul edilmesi için gereken etiketleme, paketleme ve hazırlık işidir: FNSKU etiketleri, koruyucu ambalaj ve koli etiketleri gibi." },
      { q: "Her ürüne FNSKU etiketi gerekir mi?", a: "Genellikle evet. Ürün üretici barkodunu kullanmaya uygun değilse her üründe Amazon barkodu, normalde FNSKU olmalıdır. Ürün ayarlarını Seller Central'da kontrol edin." },
      { q: "FBA prep işini bir UK deposu yapabilir mi?", a: "Evet. LondraDepo stoğunuzu Essex'te teslim alır, Amazon kurallarına göre hazırlar ve atanan Amazon UK deposuna teslim eder." },
    ],
    related: [
      { href: "/amazon-prep-uk", label: "Amazon Prep UK" },
      { href: "/amazon-fulfillment", label: "Amazon Fulfillment" },
      { href: "/amazon-ingiltere-depo", label: "Amazon İçin İngiltere Depo (FBM)" },
      { href: "/blog/amazon-prep-uk-rehberi", label: "Amazon Prep UK Rehberi" },
    ],
    form: { id: "tr_guide_quote", heading: "Amazon Prep Teklifi Alın", intro: "Ürün sayınızı, SKU'larınızı ve Amazon'a gönderim sıklığınızı yazın; prep ve teslimatı fiyatlandıralım.", services: ["Ürün Elleçleme", "Depolama"] },
  },
  "/konteyner-bosaltma": {
    path: "/konteyner-bosaltma",
    kind: "service",
    serviceType: "Container unloading",
    title: "İngiltere Konteyner Boşaltma (FCL & LCL), Essex | LondraDepo",
    description:
      "Rayleigh, Essex depomuzda konteyner boşaltma: 20ft, 40ft ve 40ft high-cube FCL ile LCL; sayım, hasar fotoğrafı, yeniden paletleme, Mintsoft WMS kaydı, depolama veya UK içi sevk.",
    crumb: "Konteyner Boşaltma",
    eyebrow: "Essex · Tilbury, London Gateway ve Felixstowe hatları",
    h1: "İngiltere'de Konteyner Boşaltma (FCL ve LCL)",
    lead:
      "LondraDepo, Unit 19 Arterial Park, Rayleigh, Essex'te 20ft, 40ft ve 40ft high-cube konteynerler dahil FCL ve LCL teslimatları boşaltır. Her teslimat sayılır, görünür hasar için kontrol edilir, gerekirse yeniden paletlenir veya etiketlenir ve Mintsoft WMS'e kaydedilir; ardından depolanır veya UK içinde sevke hazırlanır.",
    facts: [
      "FCL ve LCL kabul; bir gıda müşterisi için her ay 40ft high-cube hacim",
      "Tır ve konteyner taşıyıcıları için rampa ve geniş kapı",
      "Sayım, hasar fotoğrafı ve fark raporu",
      "Yeniden paletleme, etiketleme ve SKU'ya göre ayırma",
      "Palet başına haftalık £3,50 + KDV'den depolama veya cross-dock",
    ],
    sections: [
      {
        type: "steps",
        h2: "Konteyner boşaltma nasıl işler?",
        items: [
          ["Ön bildirim", "Konteyner numarası, ETA, ambalaj listesi, paletli mi dökme mi olduğu ve SKU başına koli sayısını gönderin."],
          ["Randevu", "Teslim saati netleştirilir. Limandan taşıma Arca Trade Group veya nakliyeciniz tarafından yapılabilir."],
          ["Boşaltma", "Konteyner Rayleigh deposunda boşaltılır."],
          ["Sayım ve kontrol", "Koli ve paletler ambalaj listesiyle sayılır; görünür hasar fotoğraflanıp bildirilir."],
          ["Hazırlık", "Dökme koliler paletlenir, paletler etiketlenir, gerekirse stok SKU'ya göre ayrılır."],
          ["Depolama veya sevk", "Stok Mintsoft WMS'e kaydedilip depolanır ya da müşterilere veya Amazon'a gönderilir."],
        ],
      },
      {
        type: "table",
        h2: "Boşaltma teklifini neler etkiler?",
        head: ["Etken", "Neden önemli"],
        rows: [
          ["Konteyner tipi (20ft, 40ft, 40ft HC)", "Elleçlenecek hacim ve palet ya da koli sayısı"],
          ["Paletli veya dökme", "Dökme koliler daha uzun sürer ve genellikle paletleme gerektirir"],
          ["SKU ve koli sayısı", "Ayırma ve etiketleme süresi"],
          ["Hasar veya farklar", "Ek fotoğraf, rapor ve yeniden paketleme"],
          ["Sonraki adım", "Depolama, cross-dock veya doğrudan sevk"],
        ],
        note: "Boşaltma teslimat başına tekliflendirilir. Depolama palet başına haftalık £3,50 + KDV'den başlar.",
      },
      {
        type: "text",
        h2: "Neden limanda değil Essex'te boşaltma?",
        paras: [
          "Depomuz Tilbury Limanı'na karayoluyla yaklaşık 16 mil, London Gateway'e 13 mil, Felixstowe'a yaklaşık 62 mil uzaklıktadır ve A127 ile M25'e doğrudan bağlıdır. Boşaltma, depolama, sipariş toplama ve UK dağıtım aynı yerde yapılır; ürünler liman yanındaki bir boşaltma sahasıyla ayrı bir fulfillment deposu arasında taşınmaz, bir kez elleçlenir.",
          "Hem işletmelere hem tüketicilere satan ithalatçılar için aynı teslimat, toptan müşterilere palet siparişlerini ve online alıcılara koli siparişlerini besleyebilir.",
        ],
      },
      {
        type: "links",
        h2: "Teslimatınızı planlayın",
        items: [
          { href: "/konteyner-varis-planlayici", title: "Konteyner Varış Planlayıcı", text: "Limanı, konteyneri ve ETA'yı seçin, tarihli kontrol listesi alın.", tag: "Ücretsiz araç" },
          { href: "/london-gateway-tilbury-depo", title: "London Gateway & Tilbury Depo", text: "En yakın iki konteyner limanı, 13–16 mil.", tag: "Liman" },
          { href: "/case-studies/tortilla-uk-distribution", title: "Tortilla üreticisi", text: "1 paletten aylık 6 × 40HC konteynere.", tag: "Operasyon örneği" },
        ],
      },
    ],
    faqs: [
      { q: "Hangi konteyner tiplerini boşaltıyorsunuz?", a: "20ft, 40ft ve 40ft high-cube FCL konteynerler ile LCL ve paletli parsiyel yükleri kabul ediyoruz. Teklif isterken konteyner tipini ve ürünlerin paletli mi dökme mi olduğunu belirtin." },
      { q: "Dökme (paletsiz) yüklenmiş konteynerleri boşaltıyor musunuz?", a: "Kolilerin dökme yüklendiğini SKU başına koli sayısıyla önceden bildirin. Elleçleme süresi, paletleme ve etiketleme konteyner gelmeden değerlendirilir ve buna göre tekliflendirilir." },
      { q: "Ürünler hasarlı veya eksik gelirse ne olur?", a: "Görünür hasar fotoğraflanır; ambalaj listesine göre eksik veya fazlalar size bildirilir, böylece tedarikçi veya taşıyıcıya talepte bulunabilirsiniz." },
      { q: "Limandan taşımayı ayarlayabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group limandan depoya taşımayı ayarlayabilir; dilerseniz kendi nakliyeciniz de teslim edebilir." },
      { q: "Boşaltılan ürünler doğrudan sevk edilebilir mi?", a: "Evet. Ürünler UK müşterilerine veya Amazon'a cross-dock edilebilir ya da depolanıp siparişler geldikçe sevk edilebilir." },
    ],
    related: [
      { href: "/ellecleme", label: "Elleçleme" },
      { href: "/palet-depolama", label: "Palet Depolama" },
      { href: "/felixstowe-liman-depo", label: "Felixstowe Liman Depo" },
      { href: "/essex-depo", label: "Essex Depo" },
    ],
    form: { id: "tr_unloading_quote", heading: "Konteyner Boşaltma Teklifi Alın", intro: "Konteyner tipini, ETA'yı, ambalaj listesini ve paletli mi dökme mi olduğunu yazın.", services: ["Yükleme / Boşaltma"] },
  },
  "/otomotiv-yedek-parca-depolama": {
    path: "/otomotiv-yedek-parca-depolama",
    kind: "service",
    serviceType: "Automotive parts warehousing",
    title: "Otomotiv Yedek Parça Depolama İngiltere | LondraDepo",
    description:
      "OEM ve yan sanayi parçalar için İngiltere depolama: SKU bazlı palet ve raf, fotoğraflı hasar kontrolü, koruyucu paketleme, bayi ve atölyelere teslimat.",
    crumb: "Otomotiv Yedek Parça Depolama",
    eyebrow: "Sektör · otomotiv ve yan sanayi",
    h1: "İngiltere'de Otomotiv Yedek Parça Depolama ve Dağıtım",
    lead:
      "Otomotiv parçalarını depolamak zordur ve kolay hasar görürler: tampon ve paneller hacimlidir, boyalı yüzeyler çizilir ve SKU sayıları binlere çıkar. LondraDepo OEM ve yan sanayi parçaları ile döşeme malzemelerini Essex'te SKU bazında depolar, mal kabulde ve sevkte durumu fotoğraflar, parçaları koruyucu şekilde paketler ve UK bayi, atölye ve online müşterilere ertesi gün veya 2 gün seçenekleriyle gönderir.",
    facts: [
      "SKU bazlı palet ve raf depolama; OEM ve yan sanayi ayrı tutulur",
      "Mal kabulde ve sevkte fotoğraflı hasar kontrolü",
      "Boyalı ve hassas yüzeyler için koruyucu paketleme",
      "Bayi ve atölyelere ertesi gün veya 2 gün teslimat seçenekleri",
      "Canlı bir operasyonda eBay, Amazon ve web siparişleri aynı gün işleniyor",
    ],
    sections: [
      {
        type: "table",
        h2: "Otomotiv tedarikçileri UK deposundan ne bekler?",
        head: ["İhtiyaç", "LondraDepo'da"],
        rows: [
          ["Hacimli parça depolama", "Tampon, kapı paneli ve rulo döşeme malzemesi ezilmeden paletlerde depolanır"],
          ["SKU disiplini", "Parçalar SKU'ya göre raflanır; her seferinde doğru parça numarası çıkar"],
          ["Hasar kontrolü", "Mal kabulde ve sevkte fotoğraf; her parçanın talepler için durum geçmişi olur"],
          ["Koruyucu paketleme", "Boyalı ve kırılgan parçalar için köpük, balonlu naylon ve sağlam koli"],
          ["Ticari ve online sipariş", "Bayi, atölye ve pazaryeri siparişleri aynı stoktan karşılanır"],
          ["Stok raporu", "Düzenli stok raporu ve düşük stok uyarısı, Türkçe veya İngilizce"],
        ],
      },
      {
        type: "links",
        h2: "Otomotiv operasyon örnekleri",
        items: [
          { href: "/case-studies/uk-auto-parts-warehouse", title: "OEM ve yan sanayi yedek parça", text: "Fotoğraflı hasar takibi ve UK bayilerine dağıtım.", tag: "Otomotiv" },
          { href: "/case-studies/arac-koltuk-kaplama-ingiltere-depo", title: "Araç koltuk kaplama ve suni deri", text: "eBay, Amazon ve atölye siparişleri aynı gün işleniyor.", tag: "Otomotiv & döşeme" },
          { href: "/sektorler", title: "Tüm sektörler", text: "Gıda, ambalaj, moda, büyük hacimli ürünler ve elektronik.", tag: "Sektörler" },
        ],
      },
    ],
    faqs: [
      { q: "Büyük otomotiv parçalarını depoluyor musunuz?", a: "Evet. Ön ve arka tampon, kapı paneli dahil her boyutta parçayı palet ve raf sistemleriyle depoluyoruz." },
      { q: "Boyalı parçalardaki hasarı nasıl yönetiyorsunuz?", a: "Her parça mal kabulde görsel olarak kontrol edilip fotoğraflanır ve sisteme kaydedilir; sevkte köpük, balonlu naylon ve sağlam kolilerle paketlenir." },
      { q: "İngiltere genelindeki atölye ve bayilere teslimat yapabiliyor musunuz?", a: "Evet. Essex'ten İngiltere genelindeki bayi, atölye ve online müşterilere ertesi gün veya 2 gün seçenekleriyle teslimat yapıyoruz." },
      { q: "Parçaları yurt dışından bizim için getirebilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group nakliye ve gümrüklemeyi ayarlayabilir; dilerseniz kendi nakliyeciniz de depoya teslim edebilir." },
    ],
    related: [
      { href: "/palet-depolama", label: "Palet Depolama" },
      { href: "/nakliye-dagitim", label: "Nakliye ve Dağıtım" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/turk-sirketleri-icin-ingiltere-depo", label: "Türk Şirketleri İçin" },
    ],
    form: { id: "tr_auto_quote", heading: "Yedek Parça Depolama Teklifi Alın", intro: "SKU sayınızı, parça ölçülerini, tahmini palet sayısını ve sipariş kanallarınızı yazın.", services: ["Depolama", "Dağıtım"] },
  },
  "/sektorler": {
    path: "/sektorler",
    kind: "service",
    serviceType: "Warehousing by industry",
    title: "Sektörlere Göre İngiltere Depo ve Fulfillment | LondraDepo",
    description:
      "Sektörlere göre İngiltere depo ve fulfillment: gıda ve FMCG, ambalaj, otomotiv yedek parça, moda ve e-ticaret, büyük hacimli ürünler ve elektronik; Essex depomuzdan gerçek operasyon örnekleriyle.",
    crumb: "Sektörler",
    hub: true,
    eyebrow: "Çalıştığımız sektörler",
    h1: "Sektörlere Göre İngiltere Depo ve Fulfillment",
    lead:
      "LondraDepo gıda ve FMCG, ambalaj, otomotiv yedek parça, moda ve e-ticaret, büyük hacimli ürünler ve tüketici elektroniği alanlarındaki üretici ve markalar için depolama, fulfillment ve dağıtım yapar. Aşağıdaki her sektör ilgili hizmet sayfasına ve Rayleigh, Essex'teki depomuzdan gerçek operasyon örneklerine bağlanır.",
    facts: [
      "Gıda, ambalaj, otomotiv, moda, büyük hacimli ürünler ve elektronikte canlı UK operasyonları",
      "Mintsoft WMS ile palet, koli ve raf depolama",
      "Aynı stoktan B2B palet dağıtımı ve e-ticaret koli fulfillment",
      "Palet başına haftalık £3,50 + KDV'den depolama",
    ],
    sections: [
      {
        type: "stats",
        h2: "Sektörlerimizde rakamlar",
        items: [
          { value: "6", label: "canlı UK operasyonu olan sektör" },
          { value: "7", label: "yayımlanmış operasyon örneği" },
          { value: "£3,50", label: "+ KDV palet başına haftalık başlangıç depolama" },
          { value: "TR + EN", label: "operasyon ekibinin dilleri" },
        ],
      },
      {
        type: "links",
        h2: "Gıda ve FMCG",
        items: [
          { href: "/case-studies/tortilla-uk-distribution", title: "Tortilla üreticisi", text: "1 deneme paletinden aylık 6 × 40HC konteynere.", tag: "Operasyon örneği" },
          { href: "/case-studies/pizza-box-distribution-uk", title: "Pizza kutusu üreticisi", text: "Paletli UK stoğu ve restoranlara programlı dağıtım.", tag: "Operasyon örneği" },
          { href: "/palet-depolama", title: "Palet depolama", text: "Haftalık palet başına £3,50 + KDV'den.", tag: "Hizmet" },
        ],
      },
      {
        type: "links",
        h2: "Otomotiv ve yedek parça",
        items: [
          { href: "/otomotiv-yedek-parca-depolama", title: "Otomotiv yedek parça depolama", text: "OEM ve yan sanayi parçalar için SKU bazlı depolama ve dağıtım.", tag: "Sektör" },
          { href: "/case-studies/uk-auto-parts-warehouse", title: "OEM ve yan sanayi yedek parça", text: "Hasar kontrollü depolama ve UK bayi teslimatı.", tag: "Operasyon örneği" },
          { href: "/case-studies/arac-koltuk-kaplama-ingiltere-depo", title: "Araç koltuk kaplama", text: "eBay, Amazon ve atölye siparişleri aynı gün.", tag: "Operasyon örneği" },
        ],
      },
      {
        type: "links",
        h2: "Moda ve e-ticaret markaları",
        items: [
          { href: "/case-studies/cruyff-uk-fulfillment", title: "Cruyff", text: "Hollanda'dan İngiltere'ye online sipariş fulfillment.", tag: "Operasyon örneği" },
          { href: "/shopify-ingiltere-depo", title: "Shopify İngiltere Depo", text: "Shopify mağazaları için depolama, pick & pack ve UK kargo.", tag: "Hizmet" },
          { href: "/e-ticaret-fulfillment", title: "E-Ticaret Fulfillment", text: "Online siparişten müşterinin kapısına.", tag: "Hizmet" },
        ],
      },
      {
        type: "links",
        h2: "Büyük hacimli ürünler ve elektronik",
        items: [
          { href: "/case-studies/uk-walking-treadmill-distribution", title: "Walking treadmill markası", text: "Büyük hacimli ürün depolama, online satış ve retail dağıtım.", tag: "Operasyon örneği" },
          { href: "/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu", title: "Taşınabilir şarj istasyonu", text: "Depolama, SIM aktivasyonu, şarj kontrolü ve son kullanıcı sevkiyatı.", tag: "Operasyon örneği" },
          { href: "/ellecleme", title: "Elleçleme", text: "Yeniden paketleme, etiketleme ve ürün hazırlığı.", tag: "Hizmet" },
        ],
      },
    ],
    faqs: [
      { q: "LondraDepo hangi sektörlerle çalışıyor?", a: "Gıda ve FMCG, ambalaj, otomotiv yedek parça ve döşeme malzemeleri, moda ve e-ticaret, walking treadmill gibi büyük hacimli ürünler ve taşınabilir şarj istasyonu gibi tüketici elektroniğinde canlı UK operasyonlarımız var." },
      { q: "Aynı stok hem B2B hem online müşterilere hizmet verebilir mi?", a: "Evet. Aynı UK stoğu toptan ve ticari müşterilere palet teslimatlarını, online alıcılara koli siparişlerini besleyebilir; stoğu farklı firmalar arasında bölmeniz gerekmez." },
      { q: "Sektörüm listede yok, yine de yardımcı olabilir misiniz?", a: "Büyük olasılıkla evet. Ürününüzü, ambalajını, hacminizi ve satış kanallarınızı yazın; teklif vermeden önce Essex depomuzun uygun olup olmadığını teyit edelim." },
    ],
    related: [
      { href: "/ingiltere-depo", label: "İngiltere Depo" },
      { href: "/ingiltere-fulfillment", label: "İngiltere Fulfillment" },
      { href: "/case-studies", label: "Operasyon Örnekleri" },
      { href: "/turk-sirketleri-icin-ingiltere-depo", label: "Türk Şirketleri İçin" },
    ],
    form: { id: "tr_industries_quote", heading: "Ürünleriniz İçin Teklif Alın", intro: "Sektörünüzü, ürün tipinizi, hacminizi ve satış kanallarınızı yazın; size uygun UK kurulumunu önerelim.", services: ["Depolama"] },
  },
  "/teklif-al": {
    path: "/teklif-al",
    kind: "service",
    serviceType: "Warehousing quote",
    title: "İngiltere Depo ve Fulfillment Teklifi Al | LondraDepo",
    description:
      "İngiltere depolama, fulfillment, konteyner boşaltma, gümrükleme ve dağıtım için teklif isteyin: kısa formu doldurun, ekibimiz e-postayla size özel teklif hazırlasın. Türkçe destek.",
    crumb: "Teklif Al",
    eyebrow: "Yaklaşık 2 dakika",
    h1: "İngiltere Depo ve Fulfillment Teklifi Alın",
    lead:
      "Ürününüzü, tahmini palet veya koli sayınızı, aylık sipariş hacminizi ve ihtiyacınız olan hizmetleri yazın; ekibimiz depolama, mal kabul, fulfillment, gümrükleme ve teslimatı operasyonunuza göre fiyatlandırıp size e-postayla dönsün. Palet depolama haftalık palet başına £3,50 + KDV'den başlar. Önce konuşmak isterseniz WhatsApp'tan yazabilir veya +44 7554 195190'ı arayabilirsiniz.",
    facts: [
      "Depo: Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY",
      "Arca Trade Group Ltd (Şirket No. 13247691), BIFA üyesi",
      "Palet depolama haftalık £3,50 + KDV'den",
      "Türkçe ve İngilizce destek",
    ],
    sections: [
      {
        type: "table",
        h2: "Hızlı teklif için hazırlamanız gerekenler",
        head: ["Bilgi", "Neden gerekli"],
        rows: [
          ["Ürün tipi ve ölçüleri", "Depolama şekli (palet, raf) ve elleçleme süresi"],
          ["Tahmini palet veya koli sayısı", "Depolama maliyeti (palet başına haftalık £3,50 + KDV'den)"],
          ["Aylık sipariş ve sipariş başına ürün", "Pick & pack ve kargo fiyatı"],
          ["Satış kanalları", "Shopify, Amazon, toptan: süreç ve entegrasyon kapsamı"],
          ["Çıkış ülkesi ve teslim şekli", "Nakliye ve gümrükleme ihtiyacı"],
        ],
      },
      {
        type: "steps",
        h2: "Teklif süreci",
        items: [
          ["Formu gönderin", "Bilgileriniz ekibimize ulaşır; telefon numarası isteğe bağlıdır."],
          ["Gerekirse netleştiririz", "Eksik bir bilgi varsa e-posta veya WhatsApp'tan sorarız."],
          ["Teklifinizi alın", "Depolama, mal kabul, fulfillment ve teslimat kalemleri ayrı ayrı yazılı teklif olarak gelir."],
          ["Başlayın", "Onaylarsanız ilk sevkiyatı birlikte planlarız; 1 deneme paletiyle başlayabilirsiniz."],
        ],
      },
    ],
    faqs: [
      { q: "Teklif ücretli mi?", a: "Hayır. Teklif ücretsizdir ve sizi bağlamaz." },
      { q: "Minimum palet veya sipariş sayısı var mı?", a: "Sabit bir minimum yok; 1 deneme paletiyle başlayabilirsiniz. Hacminizi yazın, size uygun teklifi hazırlayalım." },
      { q: "Nakliye ve gümrüklemeyi de teklife dahil edebilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group nakliye ve UK gümrüklemesi için ayrıca teklif verebilir; dilerseniz kendi nakliyecinizle de çalışabilirsiniz." },
    ],
    related: [
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Depo Maliyet Hesaplama" },
      { href: "/ingiltere-depo-fiyatlari", label: "Depo Fiyatları" },
      { href: "/iletisim", label: "İletişim" },
    ],
    form: { id: "tr_quote_page", heading: "Teklif Formu", intro: "Bilgilerinizi yazın; ekibimiz size özel teklifle e-postayla dönsün.", services: [] },
  },
  "/ingiltere-ithalat-lojistigi": {
    path: "/ingiltere-ithalat-lojistigi",
    kind: "service",
    serviceType: "Import logistics",
    title: "İngiltere İthalat Lojistiği: Nakliyeden Depoya | LondraDepo",
    description:
      "İngiltere'ye tek grupla ithalat: Arca Trade Group üzerinden deniz, hava, kara ve demiryolu nakliyesi ile gümrükleme; ardından Essex depomuzda boşaltma, depolama, fulfillment ve UK dağıtım.",
    crumb: "İngiltere İthalat Lojistiği",
    eyebrow: "İthalatçılar, üreticiler ve distribütörler için",
    h1: "İngiltere İthalat Lojistiği: Tedarikçiden UK Müşterisine",
    lead:
      "Yurt dışındaki işletmeler İngiltere'ye tek bir grup üzerinden ithalat yapabilir. Arca Trade Group deniz, hava, kara veya demiryolu nakliyesini ayarlar ve UK gümrük beyannamesini verir; depolama markası LondraDepo ürünleri Rayleigh, Essex'te boşaltır, depolar, siparişleri karşılar ve İngiltere geneline dağıtır. Dilerseniz kendi nakliyecinizle de çalışıp sadece depoyu kullanabilirsiniz.",
    facts: [
      "Nakliye: deniz, hava, kara (UK–Avrupa parsiyel ve komple) ve Uzak Doğu ile Avrupa'dan demiryolu",
      "Gümrük beyannameleri Arca Trade Group gümrük ekibince sizin adınıza verilir",
      "FCL ve LCL konteyner kabul: Unit 19 Arterial Park, Rayleigh SS6 7FY",
      "Palet depolama haftalık £3,50 + KDV'den",
      "Antrepo değildir: ürünler gümrükten sonra depolanır",
    ],
    sections: [
      {
        type: "steps",
        h2: "Bizimle İngiltere'ye ithalat nasıl işler?",
        items: [
          ["Sevkiyatı planlayın", "Ürün, menşe, hacim ve teslim şeklini (Incoterms) paylaşın; rota, gereken belgeler ve ürünlerin nasıl geleceğini (paletli veya dökme) netleştiririz."],
          ["Nakliye", "Arca Trade Group deniz, hava, kara veya demiryolu nakliyesini ayarlar ya da kendi nakliyeciniz depomuza gönderir."],
          ["Gümrükleme", "Arca Trade Group gümrük ekibi ithalat beyannamesini verir; tarife kodu ve tercihli menşe konusunda yönlendirir."],
          ["Teslim ve boşaltma", "Ürünler Rayleigh'e teslim edilir, boşaltılır, sayılır, görünür hasar kontrol edilir ve Mintsoft WMS'e kaydedilir."],
          ["Depolama ve stok kontrolü", "Stok palet veya rafta tutulur; güncel stok kaydı ve düzenli rapor."],
          ["Sipariş ve dağıtım", "B2B ve e-ticaret siparişleri toplanır; palet ve koliler İngiltere geneline gönderilir."],
        ],
      },
      {
        type: "table",
        h2: "Kim neyi yapar?",
        head: ["İş", "Sorumlu", "Not"],
        rows: [
          ["Uluslararası nakliye", "Arca Trade Group veya nakliyeciniz", "Depolamadan ayrı fiyatlandırılır"],
          ["UK ithalat beyannamesi", "Arca Trade Group gümrük ekibi veya müşaviriniz", "Tarife kodu ve menşe yönlendirmesi mevcut"],
          ["İthalatçı (importer of record), GB EORI, gümrük vergisi ve ithalat KDV'si", "İthalatçı (genellikle siz)", "LondraDepo otomatik olarak ithalatçı olmaz"],
          ["Ürün uygunluğu ve etiketleme", "İthalatçı / marka sahibi", "UK etiketleme konusunda operasyonel yönlendirme verebiliriz"],
          ["Boşaltma, depolama, fulfillment, UK dağıtım", "LondraDepo", "Depolama palet başına haftalık £3,50 + KDV'den"],
        ],
      },
      {
        type: "list",
        h2: "İlk UK sevkiyatından önce hazırlayın",
        items: [
          "İthalatçı olacak firma için GB EORI numarası",
          "Her ürün için tarife kodu (commodity code / GTİP)",
          "Ticari fatura ve ambalaj listesi",
          "Taşıma belgesi (konşimento, CMR veya hava konşimentosu)",
          "Tercihli tarife talep edilecekse menşe belgesi",
          "UK'de gereken ürün sertifikaları veya işaretleri (uygun yerlerde UKCA veya CE gibi)",
        ],
      },
    ],
    faqs: [
      { q: "Yurt dışındaki bir firma UK ofisi olmadan İngiltere'ye ithalat yapabilir mi?", a: "Evet. Birçok yurt dışı firma GB EORI numarası ve bir UK depo partneriyle ithalat yapar. Doğru ithalatçı yapısı satış modelinize bağlıdır; ilk sevkiyattan önce vergi danışmanlığı alın." },
      { q: "Türkiye, Avrupa veya Uzak Doğu'dan nakliye ayarlayabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group dünya genelinde deniz ve hava, UK–Avrupa arasında kara ve Uzak Doğu ile Avrupa'dan UK'ye demiryolu nakliyesi sunar." },
      { q: "UK gümrük beyannamesini kim veriyor?", a: "Arca Trade Group gümrük ekibi müşterileri adına beyanname verir. Dilerseniz kendi müşavirinizle çalışıp gümrükten çekilmiş ürünleri depomuza teslim edebilirsiniz." },
      { q: "LondraDepo ithalatçı (importer of record) oluyor mu?", a: "Hayır, otomatik olarak olmaz. Depomuzu veya grubumuzun gümrük hizmetini kullanmak LondraDepo'yu ya da Arca Trade Group'u ithalatçı yapmaz; gümrük vergisi ve ithalat KDV'si ithalatçının sorumluluğundadır." },
      { q: "Deponuz antrepo mu?", a: "Hayır. LondraDepo HMRC onaylı bir gümrük antreposu değildir. Ürünler serbest dolaşıma girdikten sonra depolanır." },
    ],
    related: [
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/konteyner-bosaltma", label: "Konteyner Boşaltma" },
      { href: "/blog/ingiltere-ithalat-maliyetleri", label: "İthalat Maliyetleri" },
      { href: "/turkiye-ingiltere-lojistik", label: "Türkiye–İngiltere Lojistik" },
    ],
    form: { id: "tr_import_quote", heading: "İthalat Teklifi Alın", intro: "Ürünü, menşe ülkeyi, hacmi ve ürünlerin nasıl geleceğini yazın; nakliye, gümrükleme, boşaltma ve depolamayı birlikte veya ayrı fiyatlandıralım.", services: ["Gümrükleme Koordinasyonu", "Nakliye", "Depolama"] },
  },
  "/limandan-depoya-lojistik": {
    path: "/limandan-depoya-lojistik",
    kind: "service",
    serviceType: "Port-to-warehouse logistics",
    title: "Limandan Depoya Lojistik: Felixstowe, Tilbury | LondraDepo",
    description:
      "Felixstowe, London Gateway ve Tilbury'ye gelen konteynerler için limandan depoya lojistik: doğrulanmış karayolu mesafeleri, gümrükleme, taşıma, boşaltma ve UK içi dağıtım.",
    crumb: "Limandan Depoya Lojistik",
    eyebrow: "Felixstowe · London Gateway · Tilbury",
    h1: "Felixstowe, London Gateway veya Tilbury'den Essex Depomuza",
    lead:
      "Unit 19 Arterial Park, Rayleigh (SS6 7FY) adresindeki depomuz limanda değildir ama üç büyük limana yakındır: London Gateway karayoluyla yaklaşık 13 mil, Tilbury Limanı 16 mil, Felixstowe Limanı 62 mil uzaklıktadır. Bu limanlardan herhangi birine gelen konteynerler gümrükten çekilip Rayleigh'e taşınabilir, boşaltılıp depolanabilir veya doğrudan UK müşterilerine gönderilebilir.",
    facts: [
      "London Gateway: ~13 mil (21 km)",
      "Tilbury Limanı: ~16 mil (26 km)",
      "Felixstowe Limanı: ~62 mil (99 km)",
      "Londra merkezi: ~37 mil (59 km)",
      "Gümrükleme ve taşıma Arca Trade Group üzerinden",
    ],
    sections: [
      {
        type: "table",
        h2: "Depodan karayolu mesafeleri",
        head: ["Varış noktası", "Karayolu", "Tipik araç süresi (trafiksiz)"],
        rows: [
          ["DP World London Gateway (SS17)", "~13 mil / 21 km", "~20 dakika"],
          ["Tilbury Limanı (RM18)", "~16 mil / 26 km", "~20 dakika"],
          ["Felixstowe Limanı (IP11)", "~62 mil / 99 km", "~1 saat 15 dakika"],
          ["Londra merkezi (Charing Cross)", "~37 mil / 59 km", "~1 saat"],
        ],
        note: "Depo posta kodundan her limanın posta koduna karayolu rotasıyla hesaplanmıştır (10 Kasım 2026). Süreler trafiksiz araç içindir; tır, liman kuyruğu ve yoğun saatlerde uzar.",
      },
      { type: "routemap" },
      {
        type: "steps",
        h2: "Konteyneriniz limana geldikten sonra",
        items: [
          ["Varış ve tahliye", "Navlun ödendikten ve evrak tamamlandıktan sonra hat konteyneri serbest bırakır."],
          ["Gümrükleme", "İthalat beyannamesi Arca Trade Group gümrük ekibi veya müşaviriniz tarafından verilir; gümrük vergisi ve ithalat KDV'si beyan edilir."],
          ["Taşıma rezervasyonu", "Taşıyıcı konteyneri limandan alır ve depomuzda teslim saati ayarlar."],
          ["Boşaltma ve kontrol", "Boşaltılır, ambalaj listesiyle sayılır, görünür hasar fotoğraflanır ve stok WMS'e kaydedilir."],
          ["Boş konteyner iadesi", "Taşıyıcı boş konteyneri limana veya depoya, tercihen bekleme (demuraj/detention) ücreti doğmadan iade eder."],
          ["Depolama veya sevk", "Ürünler depolanır, siparişler için toplanır veya UK müşterilerine ve Amazon'a cross-dock edilir."],
        ],
      },
      {
        type: "links",
        h2: "Limana özel sayfalar ve araçlar",
        items: [
          { href: "/london-gateway-tilbury-depo", title: "London Gateway & Tilbury Depo", text: "En yakın iki liman, 13–16 mil.", tag: "Liman" },
          { href: "/felixstowe-liman-depo", title: "Felixstowe Liman Depo", text: "İngiltere'nin en büyük konteyner limanı, ~62 mil.", tag: "Liman" },
          { href: "/konteyner-varis-planlayici", title: "Konteyner Varış Planlayıcı", text: "ETA'ya göre tarihli kontrol listesi.", tag: "Ücretsiz araç" },
        ],
      },
    ],
    faqs: [
      { q: "Depo Felixstowe'a ne kadar uzak?", a: "Karayoluyla yaklaşık 62 mil (99 km). Trafiksiz araçla yaklaşık 1 saat 15 dakika; konteyner tırları için daha uzun sürer." },
      { q: "Depo limanda mı?", a: "Hayır. Depomuz Rayleigh, Essex'te; London Gateway'e yaklaşık 13 mil, Tilbury'ye 16 mil uzaklıkta. Konteynerler boşaltma için limandan depomuza taşınır." },
      { q: "Limandan taşımayı ayarlayabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group gümrükleme ve limandan taşımayı ayarlayabilir; dilerseniz nakliyeciniz de bize teslim edebilir." },
      { q: "Limanda boşaltma yapabilir misiniz?", a: "Hayır. Boşaltma Rayleigh deposunda yapılır; ürünler burada ek elleçleme olmadan depolanır ve sevk edilir." },
    ],
    related: [
      { href: "/konteyner-bosaltma", label: "Konteyner Boşaltma" },
      { href: "/ingiltere-ithalat-lojistigi", label: "İthalat Lojistiği" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/essex-depo", label: "Essex Depo" },
    ],
    form: { id: "tr_port_quote", heading: "Limandan Depoya Teklif Alın", intro: "Varış limanını, konteyner tipini, ETA'yı ve ürünlerin sonrasında ne olacağını yazın.", services: ["Yükleme / Boşaltma", "Gümrükleme Koordinasyonu"] },
  },
  "/ambalaj-catering-depolama": {
    path: "/ambalaj-catering-depolama",
    kind: "service",
    serviceType: "Packaging warehousing and distribution",
    title: "Ambalaj ve Catering Depolama İngiltere | LondraDepo",
    description:
      "Pizza kutusu, paket servis ambalajı ve catering sarf malzemeleri için İngiltere'de paletli depolama ve programlı B2B teslimat: lot takibi, düşük stok uyarısı, restoran ve toptancılara dağıtım.",
    crumb: "Ambalaj ve Catering Depolama",
    eyebrow: "Sektör · ambalaj ve restoran tedariki",
    h1: "Ambalaj ve Catering Ürünleri İçin İngiltere Depo ve Dağıtım",
    lead:
      "Pizza kutuları, paket servis kapları ve catering sarf malzemeleri hacimlidir, palet başına değeri düşüktür ve düzenli bir programla ihtiyaç duyulur. LondraDepo bunları Essex'te paletli depolar ve İngiltere genelindeki restoran, zincir ve toptancılara sabit haftalık veya aylık teslimatlar yapar; operasyon örneklerimizdeki pizza kutusu üreticisi için yaptığımız gibi.",
    facts: [
      "Palet başına haftalık £3,50 + KDV'den paletli depolama",
      "Her müşteri için sabit haftalık veya aylık teslimat programı",
      "Geri çağırma senaryolarına hazır lot bazlı stok kaydı",
      "İkmal gerekmeden önce düşük stok uyarısı",
      "İngiltere geneline palet ve koli teslimatı",
    ],
    sections: [
      {
        type: "list",
        h2: "Ambalaj tedarikçilerinin tipik zorlukları",
        items: [
          "Her sipariş için fabrikadan sevkiyat yavaş ve pahalı",
          "Restoranlar tutarlı, öngörülebilir tedarik ister ve stoksuz kalamaz",
          "Yüksek hacimli, düşük değerli ürünler alanı verimli kullanan palet depolama gerektirir",
          "Müşteriler karışık miktarlarda sipariş verir: tam palet, yarım palet ve koli",
        ],
      },
      {
        type: "table",
        h2: "Ambalaj ve catering tedarikçilerine nasıl destek oluyoruz?",
        head: ["Hizmet", "İçeriği"],
        rows: [
          ["Toplu palet depolama", "Hacimli ambalaj palet rafında düzenli ve erişilebilir tutulur"],
          ["Teslimat programları", "Her restoran veya toptan müşteri için sabit teslimat günleri"],
          ["Stok takibi", "Minimum stok eşikleri ve uyarılarla ikmal zamanında gönderilir"],
          ["Lot takibi", "İzlenebilirlik için lot bazlı stok kaydı"],
          ["Karışık sipariş toplama", "Tam palet, yarım palet veya koli; müşteri başına teslim listesiyle"],
          ["İthalat desteği", "Yurt dışında üretilen ürünler için Arca Trade Group üzerinden nakliye ve gümrükleme"],
        ],
      },
      {
        type: "links",
        h2: "Operasyon örneği",
        items: [
          { href: "/case-studies/pizza-box-distribution-uk", title: "Pizza kutusu: İngiltere B2B restoran dağıtımı", text: "Sipariş bazlı sevkiyattan paletli UK stoğuna ve programlı restoran teslimatına geçiş.", tag: "B2B dağıtım" },
          { href: "/sektorler", title: "Tüm sektörler", text: "Gıda, otomotiv, moda, büyük hacimli ürünler ve elektronik.", tag: "Sektörler" },
          { href: "/palet-depolama", title: "Palet depolama", text: "Haftalık palet başına £3,50 + KDV'den.", tag: "Hizmet" },
        ],
      },
    ],
    faqs: [
      { q: "Restoranlara sabit programla teslimat yapabilir misiniz?", a: "Evet. Müşteri listenize ve sipariş sıklığınıza göre haftalık veya aylık teslimat programları kuruyoruz." },
      { q: "Gıdayla temas eden ambalajları depoluyor musunuz?", a: "Evet. Pizza kutusu ve paket servis kapları gibi ambalajlar gıda dışı stok olarak paletlerde depolanır. Özel bir depolama gerekliliğiniz varsa teklif isterken belirtin." },
      { q: "Minimum hacim var mı?", a: "Sabit bir minimum yok. Palet bazlı operasyonlar tek tek değerlendirilir; tahmini palet sayınızı ve sipariş düzeninizi paylaşın." },
    ],
    related: [
      { href: "/case-studies/pizza-box-distribution-uk", label: "Pizza Kutusu Operasyonu" },
      { href: "/nakliye-dagitim", label: "Nakliye ve Dağıtım" },
      { href: "/ingiltere-ithalat-lojistigi", label: "İthalat Lojistiği" },
    ],
    form: { id: "tr_packaging_quote", heading: "Ambalaj Depolama Teklifi Alın", intro: "Ürün yelpazenizi, tahmini palet sayınızı ve müşteri teslimat düzeninizi yazın.", services: ["Depolama", "Dağıtım"] },
  },
};
