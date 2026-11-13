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
      { q: "Depo antrepo (bonded warehouse) mu?", a: "Hayır. LondraDepo antrepo değildir. London Gateway veya Tilbury'ye gelen ürünler önce İngiltere gümrüğünden çekilir, ardından Rayleigh'deki depomuzda depolanır ve sevk edilir." },
      { q: "Konteyneri London Gateway veya Tilbury'den alabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group her iki limandan gümrükleme ve taşımayı ayarlayabilir; dilerseniz kendi nakliyeciniz de depoya teslim edebilir." },
      { q: "Konteyner London Gateway veya Tilbury'ye geldikten sonra ne olur?", a: "İthalat beyannamesi verilip konteyner tahliye edildikten sonra taşıyıcı onu yaklaşık 13–16 mil uzaklıktaki Rayleigh deposuna getirir. Boşaltır, ambalaj listesiyle sayar, görünür hasarı fotoğraflar ve stoğu Mintsoft WMS'e kaydederiz." },
    ],
    related: [
      { href: "/felixstowe-liman-depo", label: "Felixstowe Liman Depo" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/essex-depo", label: "Essex Depo" },
    ],
    form: { id: "tr_port_quote", heading: "Konteyneriniz İçin Teklif Alın", intro: "Limanı, konteyner tipini, ETA'yı ve ambalaj listesini yazın; taşıma, boşaltma, depolama ve sevkiyatı fiyatlandıralım.", services: ["Yükleme / Boşaltma", "Gümrükleme Koordinasyonu"] },
  },
  "/amazon-ingiltere-depo-konumlari": {
    path: "/amazon-ingiltere-depo-konumlari",
    kind: "service",
    serviceType: "Amazon FBA prep and delivery to Amazon UK fulfilment centres",
    title: "Amazon İngiltere Depo Konumları: Kodlar ve Mesafeler | LondraDepo",
    description:
      "Amazon UK depo kodları ve konumları: LCY2 Tilbury, LCY1 Londra'dan MAN1'e kadar; Essex FBA prep depomuza karayolu mesafeleri, palet kuralları ve randevulu teslim.",
    crumb: "Amazon İngiltere Depo Konumları",
    eyebrow: "Amazon FBA · İngiltere depo rehberi",
    h1: "Amazon İngiltere Depo Konumları: Kodlar ve Mesafeler",
    lead:
      "Amazon'un İngiltere'de çok sayıda fulfillment merkezi (depo) vardır ve her biri LCY2 (Tilbury, Essex), LCY1 (doğu Londra), LTN1 (Bedfordshire), BHX1 (Staffordshire) veya MAN1 (Manchester Havalimanı) gibi bir kodla bilinir. Depoyu siz seçmezsiniz: Amazon, Seller Central'daki sevkiyat planında hedef depoyu belirler ve bazen tek planı birkaç depoya böler. LondraDepo'nun Rayleigh, Essex'teki FBA prep deposu karayoluyla LCY2 Tilbury'ye yaklaşık 16 mil, LCY1'e 32 mil uzaklıktadır; hazırlanan stok Londra bölgesindeki depolara kısa sürede, diğerlerine koli veya palet taşıyıcısıyla ulaşır. LondraDepo resmi bir Amazon partneri değildir.",
    facts: [
      "Amazon LCY2 Tilbury: depomuza ~16 mil / 25 km",
      "Amazon LCY1 doğu Londra: ~32 mil / 52 km",
      "Hedef depoyu Amazon sevkiyat planında belirler",
      "Amazon depolarına teslim randevuyla yapılır",
      "Palet: UK 1200 × 1000 mm veya Euro 1200 × 800 mm, en fazla 1,8 m",
    ],
    sections: [
      {
        type: "table",
        h2: "Amazon UK depoları ve depomuza karayolu mesafesi",
        intro: "Satıcıların sevkiyat planlarında sık geçen Amazon UK depolarından bir seçki; Rayleigh, Essex'e (SS6 7FY) uzaklığa göre sıralı.",
        head: ["Kod", "Konum", "LondraDepo'ya karayolu mesafesi"],
        rows: [
          ["LCY2", "Tilbury, Essex (RM18 7AN)", "~16 mil / 25 km"],
          ["LCY1", "Bow, doğu Londra (E3 3JG)", "~32 mil / 52 km"],
          ["LTN2", "Hemel Hempstead, Hertfordshire", "~54 mil / 86 km"],
          ["LTN4", "Dunstable, Bedfordshire", "~65 mil / 105 km"],
          ["LTN1", "Marston Gate, Ridgmont, Bedfordshire (MK43 0ZA)", "~74 mil / 119 km"],
          ["EUK5", "Peterborough, Cambridgeshire (PE2 9EN)", "~95 mil / 152 km"],
          ["BHX4", "Coventry, West Midlands", "~125 mil / 201 km"],
          ["BHX1", "Rugeley, Staffordshire (WS15 1NZ)", "~158 mil / 255 km"],
          ["MAN1", "Manchester Havalimanı, Greater Manchester", "~219 mil / 353 km"],
          ["CWL1", "Swansea, Galler (SA1 8QX)", "~235 mil / 379 km"],
        ],
        note: "Kodlar ve konumlar Amazon UK depolarının kamuya açık listelerinden derlenmiştir (Kasım 2026). Amazon depo açar, kapatır ve yeniden adlandırır; her zaman Seller Central sevkiyat planındaki adrese gönderin. Mesafeler 10 Kasım 2026'da SS6 7FY'den OSRM karayolu rotasıyla ölçülmüştür; tam posta kodu olmayan satırlar ilçe posta bölgesinin merkezine göre ölçülmüştür.",
      },
      {
        type: "text",
        h2: "Hedef depo maliyeti ve süreyi neden etkiler?",
        paras: [
          "Amazon'un atadığı depo, stoğunuzun prep sonrası ne kadar yol gideceğini belirler. Essex depomuzdan LCY2 Tilbury'ye palet kısa bir yerel sevkiyattır; MAN1 veya CWL1 ise 200 milden uzaktır ve ulusal palet veya kargo ağıyla gider. Amazon bir sevkiyat planını bölerse her parça ayrı etiketlenip kendi deposuna gönderilir.",
          "Amazon Freight'in UK rehberine göre her depo stoğu randevuyla kabul eder. Randevu saati dışında gelen, geçerli referansı olmayan, evrakı eksik veya paleti kurallara uymayan yük reddedilebilir ve yeniden teslim ücreti çıkabilir. Stoğu Amazon'a çıkmadan önce İngiltere'de hazırlayıp kontrol etmek bu risklerin çoğunu ortadan kaldırır.",
        ],
      },
      {
        type: "table",
        h2: "Koli, palet veya tam tır",
        head: ["Seçenek", "Ne demek", "Genellikle uygun olduğu durum"],
        rows: [
          ["Koli kargo (SPD)", "Her koli ayrı etiketlenir, kargo firmasıyla gönderilir", "Birkaç koli veya ilk deneme sevkiyatı"],
          ["Parsiyel palet (LTL)", "Paletler başka yüklerle aynı tıra biner; Amazon Freight bunu genellikle 1–6 palet olarak tanımlar", "Düzenli, orta hacimli palet sevkiyatı"],
          ["Tam tır (FTL)", "Tek bir Amazon deposuna size ayrılan tır", "Tırı düzenli olarak dolduran veya neredeyse dolduran yükler"],
        ],
      },
      {
        type: "list",
        h2: "Amazon UK depoları için palet ve etiket kuralları",
        intro: "Amazon Freight'in Amazon depolarına teslimat kontrol listesinden:",
        items: [
          "Amazon UK depolarının çoğu UK standart paleti (1200 × 1000 mm) ve Euro paleti (1200 × 800 mm) kabul eder; ilgili depoyla teyit edilmelidir.",
          "Palet yüksekliği palet dahil genellikle en fazla 1,8 metredir.",
          "Palet ağırlığı palet dahil genellikle en fazla 1.000 kg'dır.",
          "Her kolide Amazon sevkiyat etiketi, her palette sevkiyat referanslı görünür etiket bulunur; tercihen iki komşu yüzde.",
          "Taşıyıcının sevk irsaliyesi fiziksel yükle ve alınan randevuyla birebir uyuşmalıdır.",
        ],
      },
      {
        type: "links",
        h2: "Stoğunuzu hazırlayın ve gönderin",
        items: [
          { href: "/amazon-prep-uk", title: "Essex'te Amazon FBA Prep", text: "FNSKU etiket, paketleme, paletleme ve Amazon'un atadığı depoya sevk.", tag: "Hizmet" },
          { href: "/blog/amazon-fba-prep-kontrol-listesi", title: "FBA Prep Kontrol Listesi", text: "Sevkiyat planından Amazon kabulüne her adım.", tag: "Kontrol listesi" },
          { href: "/london-gateway-tilbury-depo", title: "London Gateway & Tilbury Depo", text: "Depomuza 13–16 mil uzaklıktaki limanlara gelen konteynerler.", tag: "Liman" },
        ],
      },
    ],
    faqs: [
      { q: "Amazon'un İngiltere'deki depoları nerede?", a: "Amazon'un UK depoları İngiltere, İskoçya ve Galler'e yayılmıştır; örneğin LCY2 Tilbury'de, LCY1 doğu Londra'da, LTN1 Bedfordshire'da, EUK5 Peterborough'da, BHX1 Staffordshire'da, MAN1 Manchester Havalimanı'nda ve CWL1 Swansea'dadır. Kesin adres sevkiyat planınızda yazar." },
      { q: "Londra'ya en yakın Amazon deposu hangisi?", a: "LCY1 doğu Londra'da Bow'da, LCY2 ise Thames kıyısında Tilbury, Essex'tedir. LondraDepo'nun Rayleigh'deki deposundan LCY2 karayoluyla yaklaşık 16 mil, LCY1 yaklaşık 32 mil uzaklıktadır; bizde hazırlanan stok ikisine de kısa sürede ulaşır." },
      { q: "Stoğumun hangi Amazon deposuna gideceğini seçebilir miyim?", a: "Hayır. Hedef depoyu Amazon, Seller Central'da sevkiyat planını oluşturduğunuzda belirler ve tek planı birden fazla depoya bölebilir. LondraDepo planın her parçasını etiketleyip Amazon'un belirttiği depoya gönderir." },
      { q: "Amazon UK depolarına teslimat için randevu gerekir mi?", a: "Evet. Amazon Freight'in UK rehberine göre Amazon depolarına teslimat randevuyla yapılır; randevuyu kaçıran veya rezervasyonla uyuşmayan yük reddedilip yeniden teslim ücreti çıkarabilir. Stoğunuzu Essex'te sevkiyat planına uygun hazırlarız." },
      { q: "LondraDepo, Amazon LCY2 Tilbury'ye ne kadar uzak?", a: "Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY'deki depomuzdan Amazon'un Tilbury'deki LCY2 deposuna karayoluyla yaklaşık 16 mil (25 km), araçla yaklaşık 20 dakikadır; Kasım 2026'da karayolu rotasıyla ölçülmüştür." },
    ],
    related: [
      { href: "/amazon-prep-uk", label: "Amazon Prep UK" },
      { href: "/amazon-fulfillment", label: "Amazon Fulfillment" },
      { href: "/amazon-ingiltere-depo", label: "Amazon İçin İngiltere Depo" },
      { href: "/london-gateway-tilbury-depo", label: "London Gateway & Tilbury Depo" },
      { href: "/essex-depo", label: "Essex Depo" },
    ],
    form: { id: "tr_amazon_fc_quote", heading: "Amazon FBA Prep Teklifi Alın", intro: "SKU'larınızı, adet ve koli sayılarını ve sevkiyat planınızdaki Amazon depolarını yazın; prep, depolama ve Amazon'a teslimatı fiyatlandıralım.", services: ["Ürün Elleçleme", "Depolama", "Nakliye"] },
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
      { q: "Deponuz Felixstowe Limanı'nda mı?", a: "Hayır. Depomuz Rayleigh, Essex'te, Felixstowe Limanı'na karayoluyla yaklaşık 62 mil uzaklıktadır. Konteynerler Felixstowe'dan boşaltma, depolama ve fulfillment için depomuza taşınır." },
      { q: "Felixstowe konteynerleri için antrepo hizmeti veriyor musunuz?", a: "Hayır. LondraDepo antrepo (bonded warehouse) değildir. Felixstowe'a gelen ürünler önce İngiltere gümrüğünden çekilir, ardından Rayleigh'deki depomuzda depolanır ve sevk edilir." },
      { q: "Felixstowe'dan taşıma ve gümrüklemeyi ayarlayabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group Felixstowe'dan gümrükleme ve taşımayı ayarlayabilir; dilerseniz kendi nakliyeciniz de depoya teslim edebilir." },
      { q: "Felixstowe konteynerleri için neden Essex'te depo?", a: "Aynı stok Londra ve Güneydoğu müşterilerine, e-ticaret, Amazon veya toptan siparişlere de hizmet verecekse Essex mantıklıdır: ürün Rayleigh'de bir kez boşaltılır ve Londra merkezine yaklaşık 37 mil mesafededir." },
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
      { q: "3PL depoyu seçmeden önce ziyaret etmeli miyim?", a: "Mümkünse evet. Ziyaret veya görüntülü tur raf düzenini, temizliği ve güvenliği gösterir; stoğunuzla günlük olarak ilgilenecek ekibi tanımanızı sağlar." },
      { q: "3PL ile hangi sözleşme şartlarını kontrol etmeliyim?", a: "Sözleşme süresini, fesih bildirim süresini ve ayrılırken stoğun nasıl teslim edileceğini, ayrıca aylık minimum ücret olup olmadığını ve ürünleriniz için hangi sigortanın geçerli olduğunu kontrol edin." },
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
      { q: "Gümrük vergisi ve ithalat KDV'sini kim öder?", a: "Gümrük vergisini ödeyen ve ithalat KDV'sini beyan eden ithalatçıdır (importer of record), depo değil. LondraDepo'yu veya Arca Trade Group'un gümrük hizmetini kullanmak onları ithalatçı yapmaz." },
    ],
    related: [
      { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", label: "Türkiye'den İngiltere'ye İhracat Rehberi" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Maliyet Hesaplama" },
    ],
    form: { id: "tr_guide_quote", heading: "İthalat ve Depolama Teklifi Alın", intro: "Ürününüzü, çıkış noktasını ve tahmini hacmi yazın; nakliye, gümrükleme ve depolama için teklif hazırlayalım.", services: ["Gümrükleme Koordinasyonu", "Depolama"] },
  },
  "/blog/amazon-private-label-toptan": {
    path: "/blog/amazon-private-label-toptan",
    kind: "article",
    title: "Amazon Private Label mı, Toptan mı? UK Depo Kurgusu",
    description:
      "Private label, toptan ve arbitraj Amazon satıcılarında stok İngiltere'ye nasıl gelir, prep deposu ne yapar, depolama ve FBA partileri nasıl planlanır?",
    crumb: "Amazon Private Label ve Toptan",
    eyebrow: "Amazon",
    h1: "Amazon Private Label, Toptan ve Arbitraj: Her Model UK Deposundan Ne İster?",
    lead:
      "Amazon satıcıları üç ana modelde çalışır ve her model stoğu İngiltere'deki depoya farklı gönderir. Private label (kendi markası) satıcıları kendi markalı ürünlerini çoğunlukla konteynerle ithal eder; boşaltma, FNSKU etiketleme ve depolama ile stoğu Amazon'a partiler halinde gönderme ihtiyacı vardır. Toptan (wholesale) satıcılar markalı ürünleri distribütörlerden çok SKU'lu karışık paletlerle alır; doğru sayım, koli içi adet (case pack) yönetimi ve gerektiğinde etiketleme ister. Online arbitraj satıcıları perakendecilerden alır; stok çok sayıda küçük koli olarak gelir. LondraDepo Essex'te konteyner, palet ve koli hacimlerine göre kuruludur; en iyi private label ve toptan modeline uyar.",
    readTime: "6 dakika",
    facts: [
      "Private label: konteyner ithalatı, FNSKU etiket, Amazon'a partiler halinde sevk",
      "Toptan: karışık paletler, çok SKU, koli içi adet",
      "Online arbitraj: çok sayıda küçük perakende kolisi",
      "LondraDepo: Essex'te konteyner, palet ve koli hacimleri",
      "Depolama palet başına haftalık £3,50 + KDV'den; sabit minimum yok",
    ],
    sections: [
      {
        type: "table",
        h2: "Üç Amazon satıcı modelinin karşılaştırması",
        head: ["", "Private label", "Toptan (wholesale)", "Online arbitraj"],
        rows: [
          ["Stok nereden gelir", "Kendi üreticiniz, çoğunlukla yurt dışı", "Marka distribütörleri ve toptancılar", "Mağazalar ve online perakendeciler"],
          ["Nasıl gelir", "20ft veya 40ft konteyner, dökme veya paletli", "Karışık palet veya koli teslimatı", "Çok sayıda küçük koli"],
          ["Barkod", "Genellikle her üründe FNSKU etiketi", "Listelemeye göre üretici barkodu veya FNSKU", "FNSKU etiketi; perakende etiketleri kapatılır veya sökülür"],
          ["Depodaki ana iş", "Boşaltma, sayım, etiketleme, paletleme, partiler halinde sevk", "SKU bazında sayım, koli içi adet, etiketleme", "Kolileri açma, kontrol, etiketleme, paketleme"],
          ["LondraDepo'ya uyumu", "Güçlü: London Gateway, Tilbury ve Felixstowe'dan konteyner", "Güçlü: palet ve koli mal kabulü", "Önce hacmi konuşalım: palet ve koli için kuruluyuz"],
        ],
      },
      {
        type: "text",
        h2: "Private label: konteynerden Amazon'a",
        paras: [
          "Private label sevkiyatı genellikle İngiltere limanına konteynerle gelir. Gümrükten çekildikten sonra London Gateway ve Tilbury'ye 13–16 mil uzaklıktaki Rayleigh, Essex depomuza taşınır, boşaltılır, ambalaj listesine göre sayılır ve Mintsoft WMS'e kaydedilir.",
          "Satıcıların çoğu konteynerin tamamını Amazon'a göndermek yerine kalanını bizde palet başına haftalık £3,50 + KDV'den tutar ve Amazon stoğu eridikçe hazırlanmış partiler gönderir. Böylece yavaş satan ürünler Amazon depolama ücretine takılmaz ve aynı stok diğer kanallara da hizmet eder.",
        ],
      },
      {
        type: "text",
        h2: "Toptan: çok SKU, doğru sayım",
        paras: [
          "Toptan stok genellikle birkaç tedarikçiden, çok SKU'lu ve küçük adetli karışık paletlerle gelir. Kritik adım, etiketlemeden önce her SKU'yu irsaliye ve Amazon sevkiyat planıyla karşılaştırarak saymaktır; böylece farklar Amazon deposunda değil İngiltere'de yakalanır.",
          "Ürünlere FNSKU etiketi mi gerekeceği, yoksa üretici barkodunun mu kullanılacağı her listelemenin Seller Central'daki ayarına bağlıdır; her SKU için verdiğiniz talimata uyarız.",
        ],
      },
      {
        type: "text",
        h2: "Online arbitraj: önce hacmi konuşalım",
        paras: [
          "Arbitraj stoğu tek tek açılıp kontrol edilmesi ve etiketlenmesi gereken küçük perakende kolileri olarak gelir. LondraDepo ağırlıklı olarak konteyner, palet ve koli hacimlerine göre kuruludur; modeliniz arbitrajsa önce haftalık koli sayınızı paylaşın, uygun olup olmadığını açıkça söyleriz.",
        ],
      },
      {
        type: "links",
        h2: "Amazon kurgunuzu planlayın",
        items: [
          { href: "/amazon-prep-uk", title: "Essex'te Amazon FBA Prep", text: "FNSKU etiket, paketleme, palet kuralları ve Amazon'a teslim.", tag: "Hizmet" },
          { href: "/amazon-ingiltere-depo-konumlari", title: "Amazon İngiltere Depo Konumları", text: "Kodlar, konumlar ve depomuza karayolu mesafeleri.", tag: "Rehber" },
          { href: "/cbm-palet-hesaplama", title: "CBM ve Palet Hesaplama", text: "Koli ölçüsünden metreküp, palet ve konteyner doluluğu.", tag: "Ücretsiz araç" },
        ],
      },
    ],
    faqs: [
      { q: "Amazon private label ile toptan satış arasındaki fark nedir?", a: "Private label satıcısı bir üreticiye ürettirdiği kendi markasını satar ve genellikle konteynerle ithal eder. Toptan satıcı mevcut markaları distribütörlerden alıp Amazon'da yeniden satar ve genellikle çok SKU'lu karışık paletler teslim alır." },
      { q: "Toptan ürünlere FNSKU etiketi gerekir mi?", a: "Listelemeye bağlıdır. Bazı toptan listelemeler üretici barkoduyla satılabilir, bazıları her üründe FNSKU etiketi ister; bu ayar Seller Central'da seçilir. LondraDepo stok Amazon'a gitmeden önce her SKU'yu talimatınıza göre etiketler." },
      { q: "Private label konteynerimi İngiltere'de depolayıp Amazon'a partiler halinde gönderebilir miyim?", a: "Evet. LondraDepo konteyneri Rayleigh, Essex'te boşaltır, stoğu palet başına haftalık £3,50 + KDV'den depolar ve Amazon stoğunuz eridikçe partiler hazırlar; böylece yavaş satan ürünler Amazon deposunda beklemez." },
      { q: "LondraDepo online arbitraj satıcılarıyla çalışıyor mu?", a: "LondraDepo ağırlıklı olarak konteyner, palet ve koli hacimlerine göre kuruludur; bu en iyi private label ve toptan modeline uyar. Arbitraj stoğu çok sayıda küçük koli olarak geldiği için önce haftalık koli sayınızı paylaşın, uygun olup olmadığını teyit edelim." },
      { q: "Türkiye'den ihracat yapan bir üretici için hangi Amazon modeli uygun?", a: "Amazon UK'de kendi markasını satan bir Türk üretici private label modelini izler: markalı ürünlerini konteyner veya paletle ithal eder, İngiltere gümrüğünden çeker ve LondraDepo gibi bir UK deposunda tutar; Amazon'a partiler gönderir ve diğer kanallara da hizmet verir." },
    ],
    related: [
      { href: "/amazon-prep-uk", label: "Amazon Prep UK" },
      { href: "/amazon-ingiltere-depo-konumlari", label: "Amazon Depo Konumları" },
      { href: "/amazon-ingiltere-depo", label: "Amazon İçin İngiltere Depo" },
      { href: "/blog/amazon-fba-prep-kontrol-listesi", label: "FBA Prep Kontrol Listesi" },
      { href: "/konteyner-bosaltma", label: "Konteyner Boşaltma" },
    ],
    form: { id: "tr_guide_quote", heading: "Amazon Kurgunuz İçin Teklif Alın", intro: "Satıcı modelinizi, SKU sayınızı ve stoğun nasıl geleceğini yazın; boşaltma, prep, depolama ve Amazon'a teslimatı fiyatlandıralım.", services: ["Ürün Elleçleme", "Depolama", "Yükleme / Boşaltma"] },
  },
  "/blog/ithalat-belgeleri": {
    path: "/blog/ithalat-belgeleri",
    kind: "article",
    title: "İngiltere İthalat Belgeleri: Fatura, Ambalaj Listesi, B/L",
    description:
      "İngiltere'ye ithalat için gereken belgeler: ticari fatura, ambalaj listesi, konşimento veya hava yolu senedi ve menşe ispatı; ücretsiz ambalaj listesi şablonuyla.",
    crumb: "İthalat Belgeleri",
    eyebrow: "İhracat",
    h1: "İngiltere İthalat Belgeleri: Neler Gerekir, Her Biri Neyi Göstermeli?",
    lead:
      "Büyük Britanya'ya mal ithal etmek için dört temel belge gerekir: malın değerini gösteren ticari fatura, her kolinin içeriğini gösteren ambalaj listesi (packing list), taşıma belgesi (deniz yolunda konşimento / bill of lading, hava yolunda hava yolu senedi / air waybill) ve bir İngiltere ticaret anlaşması kapsamında daha düşük gümrük vergisi talep ediyorsanız menşe ispatı. Gümrük müşaviriniz bunlarla ithalat beyannamesini hazırlar; beyannamede ayrıca GB EORI numarası, GTİP (commodity code) ve malın değeri bulunur. LondraDepo da Essex depomuzda mal kabulünü aynı ambalaj listesine göre yapar; net bir liste iki adımda da zaman kazandırır.",
    readTime: "6 dakika",
    facts: [
      "Büyük Britanya'ya ithalat için GB EORI numarası gerekir",
      "Beyannamede GTİP (commodity code) ve mal değeri yer alır",
      "Tercihli (düşük) vergi için menşe ispatı gerekir",
      "Tercih kayıtları en az 4 yıl saklanır (HMRC)",
      "Ücretsiz ambalaj listesi şablonu (CSV) aşağıda",
    ],
    sections: [
      {
        type: "table",
        h2: "Temel İngiltere ithalat belgeleri",
        head: ["Belge", "Genellikle kim düzenler", "Ne için kullanılır"],
        rows: [
          ["Ticari fatura", "Satıcı / ihracatçı", "Gümrük vergisi ve ithalat KDV'si için mal değeri; alıcı, satıcı ve teslim şekli (Incoterm)"],
          ["Ambalaj listesi (packing list)", "Satıcı / ihracatçı", "Her koli ve paletin içeriği; gümrük kontrolü ve depoda mal kabul"],
          ["Konşimento (deniz) veya hava yolu senedi (hava)", "Armatör, havayolu veya forwarder", "Sevkiyat kanıtı; orijinal konşimentoda malı teslim alma hakkı"],
          ["Menşe ispatı", "Anlaşma kurallarına göre ihracatçı", "Tercihli vergi oranı talebi, örneğin İngiltere–Türkiye ticaret anlaşması kapsamında"],
          ["Lisans veya sertifikalar", "İlgili kurum", "Yalnızca gıda, bitki, ilaç veya kimyasal gibi kontrollü mallarda"],
        ],
      },
      {
        type: "list",
        h2: "İyi bir ticari faturada neler olmalı?",
        items: [
          "Satıcı ve alıcının unvanı ve adresi, ithalatçının GB EORI numarası",
          "Fatura numarası ve tarihi",
          "Her ürünün net açıklaması, adedi ve birim fiyatı",
          "Biliniyorsa her ürünün GTİP / commodity code'u",
          "Toplam tutar ve para birimi",
          "Teslim şekli ve yeri, örneğin FOB Mersin",
          "Malların menşe ülkesi",
        ],
      },
      {
        type: "list",
        h2: "İyi bir ambalaj listesinde neler olmalı?",
        intro: "Konteyneriniz veya paletleriniz Rayleigh, Essex'e geldiğinde ekibimiz bu listeye göre sayım yapar.",
        items: [
          "Fatura ve taşıma belgesiyle aynı sevkiyat referansı",
          "Her koli numaralı; SKU ve koli içi adet",
          "SKU başına toplam koli ve toplam adet",
          "Koli ölçüleri, brüt ve net ağırlık",
          "Paletliyse her kolinin hangi palette olduğu",
        ],
      },
      {
        type: "links",
        h2: "Ücretsiz şablon ve araçlar",
        items: [
          { href: "/templates/ambalaj-listesi-sablonu.csv", title: "Ambalaj listesi şablonu (CSV)", text: "Excel veya Google E-Tablolar'da açılır; her koli veya SKU için bir satır.", tag: "İndir" },
          { href: "/cbm-palet-hesaplama", title: "CBM ve Palet Hesaplama", text: "Koli ölçüsünden metreküp, palet ve konteyner doluluğu.", tag: "Ücretsiz araç" },
          { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", title: "Türkiye'den İngiltere'ye İhracat Rehberi", text: "Tüm süreç ve yazdırılabilir kontrol listesi.", tag: "Rehber" },
        ],
      },
    ],
    faqs: [
      { q: "İngiltere'ye mal ithal etmek için hangi belgeler gerekir?", a: "Genellikle ticari fatura, ambalaj listesi, konşimento veya hava yolu senedi gibi bir taşıma belgesi ve daha düşük vergi talep ediyorsanız menşe ispatı gerekir. İthalat beyannamesinde ayrıca GB EORI numarası, GTİP ve malın değeri bulunur." },
      { q: "Ticari fatura ile ambalaj listesi arasındaki fark nedir?", a: "Ticari fatura malın değerini gösterir; gümrük vergi ve ithalat KDV'sini buna göre hesaplar. Ambalaj listesi her koli ve palette fiziksel olarak ne olduğunu gösterir; gümrük ve teslim alan depo sevkiyatı bununla kontrol eder." },
      { q: "Türkiye'den ithalatta menşe ispatı gerekir mi?", a: "Yalnızca İngiltere–Türkiye ticaret anlaşması kapsamında tercihli, daha düşük vergi oranı istiyorsanız gerekir. GOV.UK'ye göre talep için geçerli menşe ispatına sahip olmalı ve bunu destekleyici kayıtlarla en az 4 yıl saklamalısınız; yoksa standart vergi oranı uygulanır." },
      { q: "Depo ambalaj listeme neden ihtiyaç duyar?", a: "LondraDepo, Rayleigh, Essex'e gelen her teslimatı ambalaj listesine göre sayar, farkları kaydeder ve stoğu SKU bazında Mintsoft WMS'e işler. Koli numarası, SKU ve koli içi adet içeren bir liste mal kabulünü hızlandırır ve hatayı azaltır." },
      { q: "Ücretsiz ambalaj listesi şablonu var mı?", a: "Evet. LondraDepo koli numarası, SKU, adet, ölçü, ağırlık, palet numarası ve menşe ülkesi sütunlarını içeren ücretsiz bir ambalaj listesi şablonunu CSV olarak sunar. Excel veya Google E-Tablolar'da Türkçe ya da İngilizce açılır." },
    ],
    related: [
      { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", label: "İhracat Rehberi" },
      { href: "/blog/incoterms-rehberi", label: "Incoterms Rehberi" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/cbm-palet-hesaplama", label: "CBM ve Palet Hesaplama" },
      { href: "/konteyner-tipleri", label: "Konteyner Tipleri" },
    ],
    form: { id: "tr_guide_quote", heading: "İthalat ve Depolama Teklifi Alın", intro: "Ürününüzü, çıkış noktasını ve ambalaj listenizi paylaşın; gümrükleme, taşıma, boşaltma ve depolamayı fiyatlandıralım.", services: ["Gümrükleme Koordinasyonu", "Depolama"] },
  },
  "/blog/antrepo-nedir": {
    path: "/blog/antrepo-nedir",
    kind: "article",
    title: "Antrepo (Bonded Warehouse) Nedir? Gümrüklü Depo Farkı",
    description:
      "İngiltere'de antrepo (bonded / customs warehouse) nedir, gümrük vergisi ve ithalat KDV'si ne zaman askıya alınır; ertelenmiş KDV ile gümrüklenmiş depo ne zaman yeterli?",
    crumb: "Antrepo Nedir?",
    eyebrow: "İthalat",
    h1: "Antrepo (Bonded Warehouse) Nedir? Gümrüklenmiş Depodan Farkı",
    lead:
      "Antrepo, HMRC'nin deyişiyle customs warehouse (İngilizcede yaygın adıyla bonded warehouse), ithal ürünlerin gümrük vergisi ve ithalat KDV'si askıya alınarak depolandığı, HMRC onaylı bir tesistir; vergiler ancak ürün İngiltere'de serbest dolaşıma girdiğinde doğar, yeniden ihraç edilen üründe hiç ödenmeyebilir. LondraDepo gibi gümrüklenmiş (duty-paid) bir depo ise ürünü ithalat beyannamesinden sonra, vergi ve KDV ödendikten veya beyan edildikten sonra depolar. KDV kayıtlı ithalatçılar ertelenmiş KDV muhasebesiyle sınırda KDV ödemediği için antrepo çoğunlukla yalnızca gümrük vergisi yüksekse veya ürün yeniden ihraç edilecekse avantaj sağlar.",
    readTime: "6 dakika",
    facts: [
      "Antrepo = HMRC'nin 'customs warehousing' özel prosedürü",
      "Gümrük vergisi ve ithalat KDV'si ürün çıkana kadar askıda",
      "HMRC onaylı ve denetimli depo işletmecileri tarafından işletilir",
      "Ertelenmiş KDV: KDV kayıtlı ithalatçı sınırda KDV ödemez",
      "LondraDepo antrepo değildir; gümrüklenmiş (duty-paid) depodur",
    ],
    sections: [
      {
        type: "table",
        h2: "Antrepo ile gümrüklenmiş depo karşılaştırması",
        head: ["", "Antrepo (customs / bonded warehouse)", "Gümrüklenmiş depo (duty-paid)"],
        rows: [
          ["Ürünün gümrük durumu", "Henüz serbest dolaşımda değil; antrepo prosedüründe", "İngiltere'de serbest dolaşıma girmiş"],
          ["Gümrük vergisi", "Çıkışa kadar askıda; yeniden ihraçta doğmaz", "İthalat beyannamesinde ödenir"],
          ["İthalat KDV'si", "Çıkışa kadar askıda", "İthalatta ödenir veya ertelenmiş KDV ile KDV beyannamesinde beyan edilir"],
          ["Kim işletebilir", "HMRC'nin onayladığı ve denetlediği depo işletmecisi", "Her depo; gümrük izni gerekmez"],
          ["Kayıt ve kontrol", "HMRC'nin kayıt, muamele ve depolama koşulları", "Olağan stok ve KDV kayıtları"],
          ["Uygun olduğu durum", "Yüksek vergili ürün, satıştan önce uzun depolama, yeniden ihraç ihtimali", "Kısa sürede İngiltere'de satılacak ürün, e-ticaret ve Amazon stoğu"],
        ],
      },
      {
        type: "text",
        h2: "Antrepo tam olarak nedir?",
        paras: [
          "GOV.UK'ye göre antrepo (customs warehousing), ithalatçının gümrük vergisi ve ithalat KDV'si askıdayken ürün depolamasını sağlayan özel bir gümrük prosedürüdür. Ürün antrepodan başka bir gümrük prosedürüne alınabilir, yeniden ihraç edilebilir veya serbest dolaşıma sokulabilir; vergi ve KDV o anda doğar.",
          "İki tür antrepo vardır: başkalarının malını depolayan genel (public) antrepo ve işletmecinin kendi malını depoladığı özel (private) antrepo. Ürünü antrepoya koyan kişinin (depositor) İngiltere'de yerleşik olması ve ürünü prosedüre kendisi beyan etmesi ya da bir temsilci ataması gerekir.",
        ],
      },
      {
        type: "text",
        h2: "İngiltere'de satış için antrepoya ihtiyacınız var mı?",
        paras: [
          "Ürün İngiltere'de satılacaksa gümrük vergisi er ya da geç ödenir. Antreponun nakit avantajı, henüz satılmamış stoğun vergisini ertelemektir; karşılığında ek gümrük kontrolü ve kayıt yükü gelir.",
          "Genellikle daha büyük kalem olan ithalat KDV'sinde ise Büyük Britanya'daki KDV kayıtlı ithalatçılar ertelenmiş KDV muhasebesini (postponed VAT accounting) kullanabilir: GOV.UK'ye göre ithalat KDV'si sınırda ödenmez, aynı KDV beyannamesinde beyan edilip indirilir ve bunun için onay gerekmez. Birçok ürünün gümrük vergisi oranı da %0'dır. Bu stok için gümrüklenmiş depo genellikle daha basit ve ucuzdur.",
          "Antrepo; gümrük vergisi yüksek ürünlerde, alkol gibi özel tüketim vergili mallarda, satıştan önce aylarca bekleyecek stokta veya yeniden ihraç edilebilecek ürünlerde anlamlıdır.",
        ],
      },
      {
        type: "list",
        h2: "LondraDepo'da gümrüklenmiş depolama nasıl işler?",
        items: [
          "LondraDepo'yu işleten Arca Trade Group veya kendi gümrük müşaviriniz ithalat beyannamesini verir ve ürünü limanda gümrükten çeker.",
          "KDV kayıtlıysanız beyannamede ithalat KDV'sini sınırda ödemek yerine ertelenmiş KDV muhasebesini seçebilirsiniz.",
          "Gümrüklenmiş konteyner veya paletler London Gateway ve Tilbury'ye 13–16 mil uzaklıktaki Rayleigh, Essex depomuza teslim edilir.",
          "Stok Mintsoft WMS'e kaydedilir, palet başına haftalık £3,50 + KDV'den depolanır; ardından sipariş olarak gönderilir, Amazon'a hazırlanır veya UK müşterilerine teslim edilir.",
        ],
      },
    ],
    faqs: [
      { q: "Antrepo ne demek?", a: "Antrepo, HMRC'nin customs warehouse dediği, ithal ürünlerin gümrük vergisi ve ithalat KDV'si askıya alınarak depolandığı onaylı tesistir. Vergiler ürün İngiltere'de serbest dolaşıma girince doğar; ürün yeniden ihraç edilirse doğmaz." },
      { q: "Bonded warehouse ile customs warehouse aynı şey mi?", a: "İngiltere'de pratikte evet. HMRC'nin resmi terimi customs warehousing'dir ve onayladığı, denetlediği işletmecilerce yürütülür. Bonded warehouse aynı şeyin ticari adıdır ve alkol gibi özel tüketim vergili mallar için de kullanılır." },
      { q: "LondraDepo antrepo mu?", a: "Hayır. LondraDepo, Rayleigh, Essex'te gümrüklenmiş (duty-paid) bir depodur: ürünler İngiltere gümrüğünden çekildikten sonra depolanır. LondraDepo'yu işleten Arca Trade Group ithalat beyannamesini ve limandan alımı üstlenebilir." },
      { q: "İthalat KDV'sini ertelemek için antrepo gerekir mi?", a: "Genellikle hayır. GOV.UK'ye göre Büyük Britanya'daki KDV kayıtlı ithalatçılar ertelenmiş KDV muhasebesiyle ithalat KDV'sini sınırda ödemeden aynı KDV beyannamesinde beyan edip indirebilir ve bunun için onay gerekmez. Antrepo daha çok gümrük vergisini askıya almak içindir." },
      { q: "Antrepo ne zaman mantıklı?", a: "Gümrük vergisi yüksek ürünlerde, alkol gibi özel tüketim vergili mallarda, satıştan önce aylarca bekleyecek stokta veya yeniden ihraç edilebilecek ürünlerde antrepo düşünülmeye değer. Kısa sürede İngiltere'de satılacak stok için gümrüklenmiş depo genellikle daha basittir." },
    ],
    related: [
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/blog/ingiltere-ithalat-maliyetleri", label: "İthalat Maliyetleri" },
      { href: "/blog/incoterms-rehberi", label: "Incoterms Rehberi" },
      { href: "/ingiltere-ithalat-lojistigi", label: "İngiltere İthalat Lojistiği" },
      { href: "/palet-depolama", label: "Palet Depolama" },
    ],
    form: { id: "tr_guide_quote", heading: "İthalat ve Depolama Teklifi Alın", intro: "Ürününüzü, çıkış noktasını ve tahmini hacmi yazın; gümrükleme, taşıma ve depolamayı fiyatlandıralım.", services: ["Gümrükleme Koordinasyonu", "Depolama"] },
  },
  "/blog/incoterms-rehberi": {
    path: "/blog/incoterms-rehberi",
    kind: "article",
    title: "Incoterms Rehberi: EXW, FOB, CIF, DAP, DDP | LondraDepo",
    description:
      "İngiltere'ye ihracatta Incoterms 2020: EXW, FCA, FOB, CIF, DAP ve DDP'de navlunu, sigortayı, gümrüğü, vergiyi ve ithalat KDV'sini kim öder?",
    crumb: "Incoterms Rehberi",
    eyebrow: "İhracat",
    h1: "Incoterms Rehberi: İngiltere'ye Satışta Kim Neyi Öder?",
    lead:
      "Incoterms, Milletlerarası Ticaret Odası'nın (ICC) satıcının mal, masraf ve risk sorumluluğunun nerede bitip alıcınınkinin nerede başladığını tanımlayan standart teslim şekilleridir; güncel sürüm Incoterms 2020, 1 Ocak 2020'den beri geçerlidir. İngiltere'ye giden ürünlerde teslim şekli; navlunu kimin ayarlayacağını, sigortayı kimin yaptıracağını ve İngiltere gümrüğünü kimin çekeceğini belirler. EXW, FCA, FOB ve CIF'te İngiltere'deki alıcı gümrüğü çeker, gümrük vergisini ve ithalat KDV'sini öder; DAP'ta da gümrük alıcıdadır; yalnızca DDP'de İngiltere vergisini ve KDV'sini satıcı öder.",
    readTime: "6 dakika",
    facts: [
      "Incoterms 2020: 11 kural, 1 Ocak 2020'den beri geçerli",
      "FOB, FAS, CFR ve CIF yalnızca deniz ve iç su yolu taşımacılığı için",
      "EXW, FCA, CPT, CIP, DAP, DPU ve DDP her taşıma türü için",
      "İngiltere gümrük vergisi ve KDV'si yalnızca DDP'de satıcıda",
      "Incoterms ödeme şeklini ve mülkiyet devrini düzenlemez",
    ],
    sections: [
      {
        type: "table",
        h2: "İngiltere'ye giden mallarda yaygın Incoterms",
        head: ["Teslim şekli", "Satıcının işi nerede biter", "Ana navlunu kim öder", "UK gümrük, vergi ve KDV"],
        rows: [
          ["EXW (Ex Works)", "Mal satıcının tesisinde hazır", "Alıcı", "Alıcı"],
          ["FCA (Free Carrier)", "Mal, ihracat gümrüğü yapılmış olarak alıcının taşıyıcısına teslim", "Alıcı", "Alıcı"],
          ["FOB (Free On Board)", "Mal çıkış limanında gemiye yüklenmiş", "Alıcı", "Alıcı"],
          ["CIF (Cost, Insurance and Freight)", "Mal gemiye yüklenmiş; satıcı UK limanına kadar navlunu ve asgari sigortayı öder", "Satıcı", "Alıcı"],
          ["DAP (Delivered At Place)", "Mal, İngiltere'de belirtilen yere boşaltmaya hazır ulaşmış", "Satıcı", "Alıcı"],
          ["DDP (Delivered Duty Paid)", "Mal, İngiltere'de belirtilen yere ithalatı yapılmış olarak ulaşmış", "Satıcı", "Satıcı"],
        ],
        note: "ICC Incoterms 2020 kurallarının özetidir. Teslim şeklinin yanına her zaman net bir yer yazın; örneğin 'FOB Mersin' veya 'DAP Rayleigh SS6 7FY'.",
      },
      {
        type: "text",
        h2: "Türk ihracatçı ve İngiliz alıcı için hangisi uygun?",
        paras: [
          "FOB ve FCA, İngiltere'deki ithalatçının ana navlunu ve İngiltere tarafını kontrol ettiği için yaygındır: alıcı forwarder'ı, varış limanını ve gümrük müşavirini seçer, toplam maliyeti görür. CIF'te deniz navlununu satıcı ayarlar; pratik olabilir ama gemi, varış tarihi ve varış masrafları üzerinde alıcının söz hakkı azalır.",
          "DDP en kolay görünen seçenektir; ancak satıcının İngiltere ithalatçısı olması veya bir ithalatçı ataması, gümrük vergisini ve ithalat KDV'sini ödemesi gerekir. İngiltere'de yerleşik olmayan satıcı bu KDV'yi, ertelenmiş KDV kullanan KDV kayıtlı bir İngiliz ithalatçı kadar kolay geri alamayabilir ve maliyet genellikle fiyata yansır.",
        ],
      },
      {
        type: "list",
        h2: "Sipariş öncesi Incoterms kontrol listesi",
        items: [
          "Incoterms 2020 adını ve net bir yeri yazın: FOB Mersin veya DAP Rayleigh SS6 7FY gibi.",
          "FOB, FAS, CFR ve CIF'i yalnızca deniz yolunda kullanın; terminalde teslim edilen konteynerlerde çoğunlukla FCA daha uygundur.",
          "İngiltere'deki depoda boşaltmayı kimin ayarlayıp ödeyeceğini netleştirin; DAP'ta boşaltma alıcıdadır.",
          "İngiltere ithalat beyannamesinde ithalatçının kim olacağını ve GB EORI numarasının kimde olduğunu kontrol edin.",
          "Incoterms ödeme şeklini ve mülkiyetin geçiş anını düzenlemez; bunları satış sözleşmesine yazın.",
        ],
      },
      {
        type: "text",
        h2: "LondraDepo her teslim şekline nasıl uyar?",
        paras: [
          "EXW, FCA veya FOB'da LondraDepo'yu işleten Arca Trade Group ana navlunu, İngiltere gümrüklemesini ve limandan Rayleigh, Essex'teki depomuza taşımayı ayarlayabilir. CIF veya DAP'ta tedarikçinizin forwarder'ı malı İngiltere limanına veya kapımıza getirir; gümrükleme ve boşaltmayı yine biz yapabiliriz. DDP'de gümrüklenmiş malı teslim alır, palet başına haftalık £3,50 + KDV'den depolarız.",
        ],
      },
    ],
    faqs: [
      { q: "Incoterms nedir?", a: "Incoterms, Milletlerarası Ticaret Odası'nın (ICC) satıcının teslim, masraf ve risk sorumluluğunun nerede bitip alıcınınkinin nerede başladığını tanımlayan standart teslim şekilleridir. Güncel sürüm Incoterms 2020, 1 Ocak 2020'den beri geçerlidir." },
      { q: "FOB veya CIF'te İngiltere gümrük vergisini ve KDV'sini kim öder?", a: "Alıcı öder. FOB ve CIF'te satıcının işi mal çıkış limanında gemiye yüklenince biter; İngiltere'deki alıcı ithalat gümrüğünü çeker, vergiyi ve ithalat KDV'sini öder ya da KDV kayıtlıysa ertelenmiş KDV muhasebesini kullanır." },
      { q: "DAP ile DDP arasındaki fark nedir?", a: "DAP'ta da DDP'de de satıcı malı İngiltere'de belirtilen yere teslim eder. DAP'ta İngiltere gümrüğünü alıcı çeker, vergi ve ithalat KDV'sini alıcı öder; DDP'de bunların hepsini satıcı üstlenir ve İngiltere ithalatçısı olur veya bir ithalatçı atar." },
      { q: "İngiltere'ye ihracatta hangi Incoterm daha uygun?", a: "İngiliz ithalatçıların çoğu deniz yolunda FOB'u, terminalde teslim edilen konteynerlerde FCA'yı tercih eder; böylece ana navlunu, varış limanını ve gümrük müşavirini kendileri seçer. LondraDepo'yu işleten Arca Trade Group bu şekillerde navlun ve gümrüklemeyi ayarlayabilir." },
      { q: "FOB hava veya kara yolunda kullanılabilir mi?", a: "Hayır. ICC Incoterms 2020'ye göre FOB, FAS, CFR ve CIF yalnızca deniz ve iç su yolu taşımacılığı içindir. Hava veya kara yolunda FCA, CPT, CIP, DAP veya DDP gibi bir teslim şekli kullanılmalıdır." },
    ],
    related: [
      { href: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", label: "İhracat Rehberi" },
      { href: "/blog/ingiltere-ithalat-maliyetleri", label: "İthalat Maliyetleri" },
      { href: "/blog/antrepo-nedir", label: "Antrepo Nedir?" },
      { href: "/gumrukleme", label: "Gümrükleme" },
      { href: "/cbm-palet-hesaplama", label: "CBM ve Palet Hesaplama" },
    ],
    form: { id: "tr_guide_quote", heading: "İthalat ve Depolama Teklifi Alın", intro: "Teslim şeklini, çıkış noktasını ve tahmini hacmi yazın; navlun, gümrükleme, taşıma ve depolamayı fiyatlandıralım.", services: ["Gümrükleme Koordinasyonu", "Nakliye", "Depolama"] },
  },
  "/konteyner-tipleri": {
    path: "/konteyner-tipleri",
    kind: "service",
    serviceType: "Container unloading and storage",
    title: "Konteyner Tipleri: 20ft, 40ft ve 40ft HC | LondraDepo",
    description:
      "20ft, 40ft ve 40ft high-cube konteyner karşılaştırması: tipik hacim, konteynere sığan palet sayısı, FCL ile LCL farkı ve Essex depomuzda boşaltma.",
    crumb: "Konteyner Tipleri",
    eyebrow: "İthalat rehberi",
    h1: "Konteyner Tipleri: 20ft, 40ft ve 40ft High-Cube",
    lead:
      "İngiltere'ye deniz yoluyla gelen yüklerin çoğu üç kuru yük konteyneriyle taşınır: 20ft, 40ft ve 40ft high-cube (40HC). 20ft konteynerin tipik iç hacmi yaklaşık 33 m³'tür ve tabanına yaklaşık 10 standart UK paleti sığar; 40ft yaklaşık 67 m³'tür ve yaklaşık 20 palet alır; 40ft high-cube aynı tabana sahiptir ama yaklaşık 30 cm daha yüksektir, yaklaşık 76 m³ ile hafif ve hacimli kolilere uygundur. Küçük yükler LCL (parsiyel) olarak başka gönderilerle aynı konteynerde taşınır. LondraDepo üç tipi de, dökme veya paletli, London Gateway ve Tilbury'ye 13–16 mil uzaklıktaki Rayleigh, Essex deposunda boşaltır.",
    facts: [
      "20ft: ~33 m³, tek kat ~10 UK paleti",
      "40ft: ~67 m³, tek kat ~20 UK paleti",
      "40ft HC: ~76 m³, 40ft ile aynı taban, ~30 cm daha yüksek",
      "LCL: konteyneri paylaşır, hacme veya ağırlığa göre ödersiniz",
      "FCL ve LCL Essex'te teslim alınır ve boşaltılır",
    ],
    sections: [
      {
        type: "table",
        h2: "20ft, 40ft ve 40ft high-cube karşılaştırması",
        head: ["Konteyner", "Tipik iç hacim", "Tabana sığan UK paleti", "Genellikle uygun olduğu yük"],
        rows: [
          ["20ft kuru yük", "~33 m³", "~10", "Ağır, yoğun ürünler; küçük siparişler"],
          ["40ft kuru yük", "~67 m³", "~20", "Büyük, karışık veya paletli siparişler"],
          ["40ft high-cube (40HC)", "~76 m³", "~20", "Ek yüksekliği kullanan hafif, hacimli koliler"],
          ["LCL (parsiyel)", "Kullandığınız m³ kadar ödersiniz", "Her hacim", "Tam konteynerin çok altındaki yükler"],
        ],
        note: "Standart kuru yük konteynerleri için tipik değerlerdir; kesin ölçü ve taşıma kapasitesi taşıyıcıya ve konteynere göre değişir. Palet sayıları tek kat standart UK paleti (1200 × 1000 mm) içindir ve palet ölçüsüne ve yükleme şekline bağlıdır.",
      },
      {
        type: "text",
        h2: "FCL mi, LCL mi?",
        paras: [
          "Tam konteyner (FCL) ile konteynerin tamamını, dolu olsun olmasın, kiralarsınız ve yük tedarikçinizden İngiltere'ye mühürlü gelir. Parsiyel yükte (LCL) kolileriniz başka gönderilerle aynı konteyneri paylaşır, genellikle hacme veya ağırlığa göre fiyatlanır ve varıştan sonra bir konsolidasyon deposunda ayrılır.",
          "Pratik kural olarak gönderiniz yarım 20ft'e yaklaştığında LCL fiyatını 20ft konteyner fiyatıyla karşılaştırın. Koli ölçülerinden hacminizi CBM hesaplayıcıyla bulabilirsiniz.",
        ],
      },
      {
        type: "steps",
        h2: "Konteyner depomuza geldiğinde ne olur?",
        items: [
          ["Ön bildirim", "Konteyner numarası, ETA, ambalaj listesi ve SKU başına koli sayısı varıştan önce gönderilir."],
          ["Gümrük ve taşıma", "İthalat beyannamesi verilir, konteyner limandan Rayleigh'e kararlaştırılan saatte taşınır."],
          ["Boşaltma", "Dökme koliler elle, paletli yükler forkliftle boşaltılır."],
          ["Sayım ve kontrol", "Ürünler ambalaj listesiyle karşılaştırılarak sayılır, görünür hasar fotoğraflanır."],
          ["Stoğa kayıt", "Koliler gerekirse paletlenir ve Mintsoft WMS'e kaydedilir; depolama, sipariş veya Amazon için hazırdır."],
        ],
      },
      {
        type: "links",
        h2: "Konteynerinizi planlayın",
        items: [
          { href: "/cbm-palet-hesaplama", title: "CBM ve Palet Hesaplama", text: "Koli ölçüsünden metreküp, palet ve konteyner doluluğu.", tag: "Ücretsiz araç" },
          { href: "/konteyner-varis-planlayici", title: "Konteyner Varış Planlayıcı", text: "Limandan depomuza tarihli kontrol listesi.", tag: "Ücretsiz araç" },
          { href: "/konteyner-bosaltma", title: "Konteyner Boşaltma", text: "Essex'te FCL ve LCL boşaltma, sayım ve paletleme.", tag: "Hizmet" },
        ],
      },
    ],
    faqs: [
      { q: "40ft ile 40ft high-cube konteyner arasındaki fark nedir?", a: "40ft high-cube, standart 40ft ile aynı tabana sahiptir ama yaklaşık 30 cm daha yüksektir; tipik iç hacmi yaklaşık 67 m³ yerine yaklaşık 76 m³'tür. Ek yüksekliği kullanabilen hafif ve hacimli kolilere uygundur; ağır ürünlerde genellikle önce ağırlık sınırı dolar." },
      { q: "20ft konteynere kaç palet sığar?", a: "Tek kat yüklemede 20ft konteynerin tabanına yaklaşık 10, 40ft ve 40ft high-cube'a yaklaşık 20 standart UK paleti (1200 × 1000 mm) sığar. Gerçek sayı palet ölçüsüne, yüksekliğe ve yükleme şekline bağlıdır." },
      { q: "Ne zaman LCL yerine FCL göndermeliyim?", a: "Gönderiniz yarım 20ft'e, yani yaklaşık 15 m³'e ulaştığında LCL fiyatını tam 20ft konteyner fiyatıyla karşılaştırın; bunun üzerinde FCL çoğunlukla daha ucuzdur ve yük mühürlü gelir. LondraDepo Essex'te hem FCL hem LCL teslim alır." },
      { q: "LondraDepo dökme yüklenmiş konteyner boşaltır mı?", a: "Evet. LondraDepo dökme (zemine yüklenmiş) ve paletli 20ft, 40ft ve 40ft high-cube konteynerleri Rayleigh, Essex deposunda boşaltır, kolileri ambalaj listesine göre sayar, görünür hasarı fotoğraflar ve depolama için paletler." },
      { q: "Depo konteyner limanlarına ne kadar uzak?", a: "LondraDepo'nun Rayleigh, Essex'teki deposu karayoluyla DP World London Gateway'e yaklaşık 13 mil, Tilbury Limanı'na 16 mil ve Felixstowe Limanı'na 62 mil uzaklıktadır." },
    ],
    related: [
      { href: "/cbm-palet-hesaplama", label: "CBM ve Palet Hesaplama" },
      { href: "/konteyner-bosaltma", label: "Konteyner Boşaltma" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/london-gateway-tilbury-depo", label: "London Gateway & Tilbury Depo" },
      { href: "/blog/incoterms-rehberi", label: "Incoterms Rehberi" },
    ],
    form: { id: "tr_container_types_quote", heading: "Konteyneriniz İçin Teklif Alın", intro: "Konteyner tipini, limanı, ETA'yı ve ambalaj listesini yazın; taşıma, boşaltma, depolama ve sevkiyatı fiyatlandıralım.", services: ["Yükleme / Boşaltma", "Depolama"] },
  },
  "/cbm-palet-hesaplama": {
    path: "/cbm-palet-hesaplama",
    kind: "service",
    serviceType: "CBM and pallet calculator",
    title: "CBM Hesaplama: Koliden Palete ve Konteynere | LondraDepo",
    description:
      "Ücretsiz CBM hesaplama: koli ölçüsünü ve adedini girin; metreküp, ağırlık, tahmini UK veya Euro palet sayısı ve 20ft, 40ft, 40HC konteyner doluluk oranını görün.",
    crumb: "CBM ve Palet Hesaplama",
    eyebrow: "Ücretsiz araç",
    h1: "CBM Hesaplama: Koliden Palete ve Konteynere",
    lead:
      "CBM (metreküp), metre cinsinden uzunluk × genişlik × yükseklik çarpı koli sayısıdır; 60 × 40 × 40 cm'lik bir koli 0,096 m³'tür, 100 koli 9,6 m³ eder. Koli ölçüsünü, adedini ve ağırlığını girin; hesaplayıcı toplam hacmi, seçtiğiniz azami palet yüksekliğinde gereken UK veya Euro palet sayısını, palet başına ağırlığı ve 20ft, 40ft veya 40ft high-cube konteynerin ne kadarını doldurduğunuzu tahmin eder. LondraDepo'nun palet başına haftalık £3,50 + KDV başlangıç fiyatıyla depolama maliyetini de gösterir.",
    facts: [
      "CBM = uzunluk × genişlik × yükseklik (m) × koli sayısı",
      "UK palet 1200 × 1000 mm; Euro palet 1200 × 800 mm",
      "Tipik iç hacim: 20ft ~33 m³, 40ft ~67 m³, 40ft HC ~76 m³",
      "Amazon UK depoları: palet dahil tipik sınır 1,8 m ve yaklaşık 1.000 kg",
      "Depolama palet başına haftalık £3,50 + KDV'den",
    ],
    sections: [
      {
        type: "table",
        h2: "Hesaplayıcı nasıl çalışır?",
        head: ["Sonuç", "Nasıl hesaplanır"],
        rows: [
          ["Toplam CBM", "Koli uzunluğu × genişliği × yüksekliği (metre) × koli sayısı"],
          ["Tahmini palet", "Toplam CBM ÷ kullanılabilir palet hacmi: palet tabanı × (azami yükseklik − 0,15 m palet) × %85 doluluk"],
          ["Palet başına ağırlık", "Toplam ağırlık ÷ tahmini palet; genel 1.000 kg sınırının üzerindeyse uyarı"],
          ["Konteyner doluluğu", "Toplam CBM'nin tipik iç hacme oranı: 20ft ~33 m³, 40ft ~67 m³, 40ft HC ~76 m³"],
          ["Haftalık depolama", "Tahmini palet × £3,50 + KDV"],
        ],
      },
      {
        type: "text",
        h2: "CBM ve palet sayısı İngiltere ithalatında neden önemli?",
        paras: [
          "Forwarder'lar parsiyel deniz yükünü (LCL) CBM'ye veya ağırlığa göre fiyatlar, tam konteyner ise boyuta göre kiralanır; CBM erken aşamada LCL'nin mi, 20ft veya 40ft konteynerin mi daha ucuz olduğunu gösterir. Mal geldikten sonra depolar depolamayı genellikle palet başına ücretlendirir; bu yüzden palet tahmini haftalık depolama maliyetinizi belirler.",
          "Stok Amazon'a gidecekse paletleri Amazon Freight'in UK için tipik sınırlarına, yani palet dahil 1,8 metre ve yaklaşık 1.000 kg'a göre kurun. Dökme yüklenmiş koliler konteyner boşaltıldıktan sonra Essex depomuzda paletlenir.",
        ],
      },
      {
        type: "links",
        h2: "Sonraki adımlar",
        items: [
          { href: "/ingiltere-depo-maliyet-hesaplama", title: "Depo Maliyet Hesaplama", text: "Palet × hafta × £3,50 + KDV; KDV dahil toplam.", tag: "Ücretsiz araç" },
          { href: "/konteyner-varis-planlayici", title: "Konteyner Varış Planlayıcı", text: "Limandan depomuza tarihli kontrol listesi.", tag: "Ücretsiz araç" },
          { href: "/blog/incoterms-rehberi", title: "Incoterms Rehberi", text: "FOB, CIF, DAP ve DDP'de navlunu, vergiyi ve KDV'yi kim öder.", tag: "Rehber" },
          { href: "/konteyner-tipleri", title: "Konteyner Tipleri", text: "20ft, 40ft ve 40HC karşılaştırması; FCL ve LCL.", tag: "Rehber" },
        ],
      },
    ],
    faqs: [
      { q: "Bir sevkiyatın CBM'si nasıl hesaplanır?", a: "Her kolinin metre cinsinden uzunluğu, genişliği ve yüksekliği çarpılır, sonuç koli sayısıyla çarpılır. 60 × 40 × 40 cm'lik koli 0,6 × 0,4 × 0,4 = 0,096 m³'tür; 100 koli 9,6 m³ eder. LondraDepo hesaplayıcısı bunu yapar ve palet sayısını da tahmin eder." },
      { q: "20ft ve 40ft konteynere kaç CBM sığar?", a: "20ft konteynerin tipik iç hacmi yaklaşık 33 m³, 40ft'in yaklaşık 67 m³, 40ft high-cube'un yaklaşık 76 m³'tür. Koliler her boşluğu dolduramadığı için pratikte yüklenebilen hacim daha azdır." },
      { q: "Bir UK paletine kaç koli sığar?", a: "Koli ölçüsüne ve yükseklik sınırına bağlıdır. UK paleti 1200 × 1000 mm'dir; hesaplayıcı palet dahil 1,8 m yükseklikte taban üstündeki alanın yaklaşık %85'inin kullanılabildiğini varsayar. Koli ölçünüzü girerek tahmini görebilirsiniz." },
      { q: "UK paleti ile Euro palet arasındaki fark nedir?", a: "UK standart paleti 1200 × 1000 mm, Euro palet 1200 × 800 mm'dir. Amazon Freight'in UK rehberine göre Amazon UK depolarının çoğu ikisini de kabul eder; LondraDepo da Essex'te her iki paleti teslim alır ve depolar." },
      { q: "Hesaplayıcının sonucu teklif mi?", a: "Hayır, planlama tahminidir. LondraDepo ambalaj listenizi gördükten sonra mal kabulü, paletlemeyi, palet başına haftalık £3,50 + KDV'den depolamayı ve teslimatı fiyatlandırır." },
    ],
    related: [
      { href: "/ingiltere-depo-maliyet-hesaplama", label: "Depo Maliyet Hesaplama" },
      { href: "/konteyner-varis-planlayici", label: "Konteyner Varış Planlayıcı" },
      { href: "/konteyner-bosaltma", label: "Konteyner Boşaltma" },
      { href: "/palet-depolama", label: "Palet Depolama" },
      { href: "/blog/incoterms-rehberi", label: "Incoterms Rehberi" },
    ],
    form: { id: "tr_cbm_quote", heading: "CBM'nizi Teklife Çevirin", intro: "Ambalaj listenizi, koli sayısını ve varış limanını yazın; boşaltma, paletleme, depolama ve teslimatı fiyatlandıralım.", services: ["Yükleme / Boşaltma", "Depolama"] },
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
      { q: "FBA prep kontrol listesini nereden indirebilirim?", a: "Bu sayfada tek sayfalık yazdırılabilir PDF sürümü var. Adınızı ve e-postanızı bırakın, indirme linki hemen açılır." },
      { q: "Amazon'un prep kuralları değişiyor mu?", a: "Evet. Amazon prep ve ambalaj gerekliliklerini günceller; benzer stoğu daha önce göndermiş olsanız bile her ürün için sevkiyattan önce Seller Central'daki güncel kuralları kontrol edin." },
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
      { q: "Konteyneri limandan depoya kim getiriyor?", a: "Evet. LondraDepo'yu işleten Arca Trade Group limandan depoya taşımayı ayarlayabilir; dilerseniz kendi nakliyeciniz de teslim edebilir." },
      { q: "Boşaltılan ürünler doğrudan sevk edilebilir mi?", a: "Evet. Ürünler UK müşterilerine veya Amazon'a cross-dock edilebilir ya da depolanıp siparişler geldikçe sevk edilebilir." },
    ],
    related: [
      { href: "/konteyner-tipleri", label: "Konteyner Tipleri" },
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
      { q: "OEM ve yan sanayi parçaları ayrı tutuluyor mu?", a: "Evet. Parçalar palet ve raflarda SKU bazında depolanır, OEM ve yan sanayi stoğu ayrı tutulur; böylece her bayi, atölye veya online sipariş için doğru parça numarası toplanır." },
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
      { q: "Sektörüm için operasyon örneği var mı?", a: "LondraDepo gıda ve FMCG, ambalaj, otomotiv yedek parça, döşeme malzemeleri, moda, büyük hacimli ürünler ve tüketici elektroniği alanlarında operasyon örnekleri yayımladı. Bu sayfadaki her sektör ilgili örneklere bağlanır." },
      { q: "Sektörüm için nasıl teklif alırım?", a: "Bu sayfadaki formu ürün tipiniz, ambalajınız, tahmini palet veya koli sayınız, aylık siparişleriniz ve satış kanallarınızla doldurun. Ekibimiz depolama, elleçleme ve teslimat için e-postayla teklif gönderir." },
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
      { q: "Teklif ücretli mi?", a: "Hayır. LondraDepo teklifi ücretsizdir ve sizi bağlamaz. Formu ürününüz, hacminiz ve ihtiyacınız olan hizmetlerle doldurun; ekibimiz size özel teklifle e-postayla döner." },
      { q: "Minimum palet veya sipariş sayısı var mı?", a: "Sabit bir minimum yok; 1 deneme paletiyle başlayabilirsiniz. Operasyon örneklerimizdeki bir gıda üreticisi bu şekilde başladı. Hacminizi yazın, size uygun teklifi hazırlayalım." },
      { q: "Nakliye ve gümrüklemeyi de teklife dahil edebilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group nakliye ve UK gümrüklemesi için ayrıca teklif verebilir; dilerseniz kendi nakliyecinizle de çalışabilirsiniz." },
      { q: "Teklif için hangi bilgileri hazırlamalıyım?", a: "Ürün tipi ve ölçüleri, tahmini palet veya koli sayısı, aylık sipariş ve sipariş başına ürün, satış kanalları ve ürünlerin hangi ülkeden geleceğini yazın. Bilgi ne kadar detaylıysa teklif o kadar isabetli olur." },
      { q: "Form göndermeden önce biriyle konuşabilir miyim?", a: "Evet. WhatsApp'tan +44 7554 195190'a yazabilir, İngiltere saatiyle 07:45–17:30 arasında ofisi +44 1268 203 283'ten arayabilir veya 15 dakikalık bir görüşme ayarlayabilirsiniz." },
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
      { q: "Deponuz antrepo mu?", a: "Hayır. LondraDepo HMRC onaylı bir gümrük antreposu değildir. Ürünler İngiltere gümrüğünden çekilip serbest dolaşıma girdikten sonra Rayleigh'deki depomuzda depolanır ve sevk edilir." },
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
      { q: "Depo üç konteyner limanına ne kadar uzak?", a: "Rayleigh, Essex'ten karayoluyla DP World London Gateway yaklaşık 13 mil, Tilbury Limanı 16 mil ve Felixstowe Limanı 62 mil uzaklıktadır. London Gateway ve Tilbury araçla yaklaşık 20 dakika, Felixstowe yaklaşık 1 saat 15 dakika sürer." },
      { q: "Depo limanda mı?", a: "Hayır. Depomuz Rayleigh, Essex'te; London Gateway'e yaklaşık 13 mil, Tilbury'ye 16 mil uzaklıkta. Konteynerler boşaltma için limandan depomuza taşınır." },
      { q: "Limandan taşımayı ayarlayabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group gümrükleme ve limandan taşımayı ayarlayabilir; dilerseniz nakliyeciniz de bize teslim edebilir." },
      { q: "Limanda boşaltma yapabilir misiniz?", a: "Hayır. Boşaltma Rayleigh deposunda yapılır. Konteyner limandan depoya taşınır; ürünler burada sayılır, kontrol edilir ve ek elleçleme olmadan depolanır ya da sevk edilir." },
      { q: "Depodaki teslim saatini kim ayarlıyor?", a: "Taşıyıcı veya nakliye firması, ön bildirimden sonra depomuzla teslim saatini ayarlar. Boşaltmanın önceden planlanması için konteyner numarası, ETA, ambalaj listesi ve SKU başına koli sayısını gönderin." },
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
      { q: "Restoranlara sabit programla teslimat yapabilir misiniz?", a: "Evet. Müşteri listenize ve sipariş sıklığınıza göre haftalık veya aylık teslimat programları kuruyoruz; ambalajlar Essex'te paletli tutulur ve her restoran ya da toptancıya belirlenen günlerde gönderilir." },
      { q: "Gıdayla temas eden ambalajları depoluyor musunuz?", a: "Evet. Pizza kutusu ve paket servis kapları gibi ambalajlar gıda dışı stok olarak paletlerde depolanır. Özel bir depolama gerekliliğiniz varsa teklif isterken belirtin." },
      { q: "Minimum hacim var mı?", a: "Sabit bir minimum yok. Palet bazlı operasyonlar tek tek değerlendirilir; tahmini palet sayınızı ve sipariş düzeninizi paylaşın." },
      { q: "Ambalaj stoğu lot bazında takip edilebilir mi?", a: "Evet. Ambalaj stoğu Mintsoft WMS'te lot bazında kaydedilebilir; bu izlenebilirlik ve geri çağırma senaryolarını destekler, düşük stok uyarıları da restoranlar stoksuz kalmadan ikmal yapmanızı sağlar." },
      { q: "Yurt dışında üretilen ambalajları getirebilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group yurt dışında üretilen ambalajlar için nakliye ve UK gümrüklemesini ayarlayabilir; ürünler ardından Essex'te paletli olarak depolanır." },
    ],
    related: [
      { href: "/case-studies/pizza-box-distribution-uk", label: "Pizza Kutusu Operasyonu" },
      { href: "/nakliye-dagitim", label: "Nakliye ve Dağıtım" },
      { href: "/ingiltere-ithalat-lojistigi", label: "İthalat Lojistiği" },
    ],
    form: { id: "tr_packaging_quote", heading: "Ambalaj Depolama Teklifi Alın", intro: "Ürün yelpazenizi, tahmini palet sayınızı ve müşteri teslimat düzeninizi yazın.", services: ["Depolama", "Dağıtım"] },
  },
};
