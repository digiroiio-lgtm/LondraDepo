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
  | { type: "links"; h2: string; items: { href: string; title: string; text: string; tag?: string }[] };

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
      "İngiltere'nin en büyük konteyner limanı Felixstowe'a gelen konteynerler: Rayleigh, Essex depomuza yaklaşık 62 mil taşıma, boşaltma, palet depolama haftalık £3,50 + KDV'den, fulfillment ve Londra dağıtımı.",
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
      "İngiltere'ye ithalatın maliyeti: nakliye, gümrükleme, GTİP'e göre gümrük vergisi, vergi ve taşıma dahil değer üzerinden %20 ithalat KDV'si, taşıma, boşaltma, depolama ve fulfillment; örnek hesapla.",
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
      "UK satıcıları için adım adım Amazon FBA prep kontrol listesi: sevkiyat planı, FNSKU etiketleri, diğer barkodların kapatılması, ambalaj, set ve paketler, koli etiketleri ve Amazon UK deposuna teslimat.",
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
};
