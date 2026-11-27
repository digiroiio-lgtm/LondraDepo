import type { EnPage } from "../en/types";
import { teamQuote } from "@/content/quotes";

/**
 * Polish pages (wave 2, part A): about us, UK warehouse benefits, London warehousing, UK ecommerce logistics,
 * pick and pack, Shopify fulfilment and Amazon seller warehousing. Translated from the EN pages in
 * src/content/en/core.ts and src/content/en/services.ts; facts are limited to what those pages state.
 * Interactive EN-only widgets (route map, calculator links) are removed. Team quotes stay in English verbatim.
 * The team speaks English and Turkish, so no page promises Polish-language service.
 */
const MODIFIED = "2026-11-28";

const NOT_PARTNER_SHOPIFY = "LondraDepo nie jest oficjalnym partnerem Shopify. Zapewniamy magazynowanie i fulfillment firmom, które sprzedają przez Shopify.";
const NOT_PARTNER_AMAZON = "LondraDepo nie jest oficjalnym partnerem Amazon. Zapewniamy niezależne magazynowanie i fulfillment firmom, które sprzedają na Amazon.";

const ORDER_STEPS = [
  { title: "Złożenie zamówienia", text: "Klient składa zamówienie w Twoim sklepie internetowym lub na marketplace." },
  { title: "Przekazanie do WMS", text: "Zamówienie trafia do naszego systemu zarządzania magazynem (Mintsoft)." },
  { title: "Kompletacja", text: "Zespół magazynu pobiera produkty z zapasu." },
  { title: "Pakowanie", text: "Produkty są pakowane w opakowanie odpowiednie do transportu." },
  { title: "Etykietowanie", text: "Tworzymy etykietę przewozową i naklejamy ją na paczkę." },
  { title: "Wysyłka", text: "Paczka trafia do przewoźnika, który dostarcza ją klientowi." },
];

export const plCoreServicesA: EnPage[] = [
  {
    slug: "/pl/o-nas",
    kind: "service",
    modified: MODIFIED,
    title: "O nas: operator magazynu w Essex w UK",
    description: "LondraDepo prowadzi Arca Trade Group Ltd, członek BIFA działający od 2021 roku, z magazynem w Rayleigh w Essex dla marek międzynarodowych i e-commerce.",
    label: "O nas",
    h1: "O LondraDepo",
    lead:
      "LondraDepo.com to marka magazynowa i fulfillmentowa firmy Arca Trade Group Ltd, spółki zarejestrowanej w Anglii i Walii (nr 13247691), działającej od 2021 roku. Prowadzimy fizyczny magazyn w Rayleigh w hrabstwie Essex i obsługujemy cały proces, od przyjęcia kontenera po dostawę w Wielkiej Brytanii, dla marek, które sprzedają na rynek brytyjski z zagranicy.",
    facts: [
      "Podmiot: Arca Trade Group Ltd · nr spółki 13247691 · VAT GB353315322",
      "Zarejestrowany członek BIFA (British International Freight Association)",
      "Magazyn: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY",
      "Języki obsługi: angielski i turecki",
      "Obszar działania: cała Wielka Brytania",
      "E-mail: support@londradepo.com",
      "Biuro: +44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 czasu brytyjskiego",
    ],
    sections: [
      {
        type: "text",
        h2: "Fizyczna baza logistyczna w Wielkiej Brytanii",
        paras: [
          "Nasz magazyn znajduje się na terenie przemysłowym Arterial Park w Rayleigh. Do wschodniego Londynu jest około 40 minut, do portów Tilbury i London Gateway 20–30 minut, a do Felixstowe, największego portu kontenerowego w UK, około 62 mile (ok. 1¼ godziny) drogą. Pełne kontenery (FCL) są dostarczane i rozładowywane bezpośrednio na miejscu, a autostrada M25 zapewnia dojazd do reszty kraju.",
          "Operacje prowadzimy w systemie Mintsoft WMS, więc stany magazynowe, przyjęcia, wydania i status zamówień są rejestrowane na bieżąco. To samo środowisko obsługuje Amazon FBA prep, fulfillment Shopify i e-commerce oraz hurtową dystrybucję B2B.",
        ],
      },
      {
        type: "list",
        h2: "Część Arca Trade Group",
        intro:
          "LondraDepo to marka magazynowa i fulfillmentowa Arca Trade Group, operatora logistycznego założonego w Basildon w Essex, a dziś działającego w tej samej lokalizacji w Rayleigh. Arca Trade Group działa w dwóch głównych obszarach, transporcie i magazynowaniu, z silnym kierunkiem handlowym między Turcją a Wielką Brytanią i Irlandią. Oprócz usług magazynowych LondraDepo grupa oferuje:",
        items: [
          "Fracht morski do i ze wszystkich kontynentów",
          "Fracht lotniczy dla pilnych ładunków",
          "Transport drogowy między UK a Europą, drobnicowy i całopojazdowy",
          "Intermodalny transport kolejowy z Dalekiego Wschodu i Europy do UK",
          "Odprawę celną, w tym zgłoszenia w imieniu klientów oraz doradztwo w zakresie kodów towarowych i preferencji",
          "Ładunki projektowe",
        ],
        outro: "Dzięki temu firma zagraniczna może zorganizować transport, odprawę celną, składowanie i dystrybucję w UK w ramach jednej grupy. Usługi frachtowe i celne wycenia Arca Trade Group.",
      },
      {
        type: "text",
        h2: "Kto prowadzi operację",
        paras: [
          "LondraDepo założył Sertaç Yılmaz, współzałożyciel Arca Trade Group z 18-letnim doświadczeniem w logistyce, w tym w procesach eksportu do Wielkiej Brytanii, magazynowaniu i fulfillmencie. Bieżącą pracą magazynu kieruje Yusuf Barış, Operations Manager.",
          "Nasz założyciel jest członkiem sieci Global Logistics Alliance (GLA) i bierze udział w 15. konferencji GLA Global Logistics Conference w Bangkoku w 2026 roku.",
        ],
      },
      teamQuote("sertacFounder"),
      teamQuote("yusufGoodsIn"),
      {
        type: "list",
        h2: "Gdzie możesz nas zweryfikować",
        items: [
          "Companies House: Arca Trade Group Ltd, nr 13247691",
          "Katalog członków BIFA: Arca Trade Group Ltd",
          "LinkedIn: linkedin.com/company/arcatradegroup",
        ],
      },
    ],
    faqs: [
      { q: "Kto prowadzi LondraDepo?", a: "LondraDepo to marka magazynowa Arca Trade Group Ltd, brytyjskiej spółki (nr 13247691) i członka BIFA. Założył ją Sertaç Yılmaz z 18-letnim doświadczeniem w logistyce, a bieżącą pracą magazynu kieruje Yusuf Barış, Operations Manager." },
      { q: "Pod jakim adresem działa LondraDepo?", a: "Magazyn LondraDepo mieści się pod adresem Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, około 13 mil drogą od London Gateway, 16 mil od portu Tilbury i 37 mil od centrum Londynu." },
      { q: "Jakie usługi świadczy LondraDepo?", a: "LondraDepo zapewnia przyjęcie towaru i rozładunek kontenerów, składowanie palet i kartonów, kontrolę stanów w Mintsoft WMS, pick and pack, Amazon FBA prep i dystrybucję w UK. Fracht międzynarodowy i odprawę celną zapewnia Arca Trade Group." },
      { q: "Czy mogę zweryfikować LondraDepo przed rozpoczęciem współpracy?", a: "Tak. Arca Trade Group Ltd figuruje w Companies House pod numerem 13247691, w katalogu członków BIFA i na LinkedIn. Przed wysłaniem towaru możesz też umówić 15-minutową rozmowę z zespołem." },
      { q: "Od kiedy działa operator LondraDepo?", a: "Arca Trade Group Ltd, spółka prowadząca LondraDepo, działa od 2021 roku. Została założona w Basildon w Essex, a dziś pracuje w tej samej lokalizacji w Rayleigh co magazyn LondraDepo." },
    ],
    related: ["/pl/magazyn-essex", "/pl/magazyn-w-wielkiej-brytanii", "/pl/studia-przypadkow", "/pl/kontakt"],
    cta: { h2: "Zaplanujmy Twoją operację w UK", text: "Zaprojektujemy rozwiązanie dopasowane do Twoich produktów, wolumenów i kanałów sprzedaży." },
    quote: { label: "Poproś o wycenę magazynowania", service: "storage" },
  },
  {
    slug: "/pl/zalety-magazynu-w-uk",
    kind: "service",
    serviceType: "Outsourcing magazynowania",
    modified: MODIFIED,
    title: "Zalety magazynu partnerskiego w UK",
    description: "Dlaczego magazyn 3PL w UK: niski koszt startu od 3,50 £ + VAT za paletę tygodniowo, dostawy paletowe, wskazówki dot. etykiet i wstępna weryfikacja kodów HS.",
    label: "Zalety magazynu w UK",
    h1: "Zalety współpracy z partnerem magazynowym w Wielkiej Brytanii",
    lead:
      "Partner magazynowy w Wielkiej Brytanii pozwala firmie z zagranicy trzymać zapas w UK, szybciej dostarczać towar brytyjskim klientom i testować rynek bez wynajmu hali i zatrudniania pracowników. W LondraDepo standardowe składowanie palet zaczyna się od 3,50 £ + VAT za paletę tygodniowo, a na start nie jest wymagany pełny ładunek ciężarówki.",
    facts: [
      "Niski koszt startu: 3,50 £ + VAT za paletę tygodniowo",
      "Przyjmujemy dostawy paletowe, częściowe i zbiorcze",
      "Wskazówki dotyczące etykiet i opakowań na rynek brytyjski",
      "Wsparcie we wstępnej ocenie kodu towarowego (HS)",
      "Komunikacja po angielsku i turecku",
    ],
    sections: [
      {
        type: "cards",
        h2: "Dlaczego marki wybierają magazyn w UK",
        items: [
          { title: "Niskie ryzyko na starcie", text: "Płacisz tygodniowo za paletę zamiast wiązać się umową najmu. Ceny zależą od rodzaju produktu, wolumenu i usług, więc pierwsze małe dostawy pozostają przystępne." },
          { title: "Bez pełnego ładunku", text: "Zacznij od dostaw paletowych lub częściowych, a na pełne kontenery przejdź, gdy wzrośnie popyt." },
          { title: "Szybsze dostawy w UK", text: "Zapas w Essex wysyłamy do klientów krajowymi usługami przewoźników zamiast przesyłkami transgranicznymi." },
          { title: "Etykiety gotowe na UK", text: "Wskazówki dotyczące etykiet w języku angielskim, wymogów rynku brytyjskiego, informacji na opakowaniu, private label i struktury kodów kreskowych, zależnie od grupy produktów." },
          { title: "Wstępna weryfikacja kodów", text: "Przed pierwszą dostawą możemy wspólnie przejrzeć kategorię produktu, kod towarowy (HS) i ryzyko celne. Ostateczna klasyfikacja pozostaje obowiązkiem importera." },
          { title: "Wsparcie wejścia na rynek", text: "Pomoc w przygotowaniu wstępnego planu operacyjnego, modelu magazynu i fulfillmentu, konfiguracji marketplace i dystrybucji w UK. Zakres i koszt doradztwa wyceniamy osobno." },
        ],
      },
      {
        type: "list",
        h2: "Dla jakich branż sprawdza się ten model",
        items: ["Marki e-commerce", "Producenci żywności", "Hurtownicy", "Producenci private label", "Sprzedawcy na marketplace"],
      },
    ],
    faqs: [
      { q: "Ile kosztuje magazyn partnerski w Wielkiej Brytanii?", a: "W LondraDepo standardowe składowanie palet zaczyna się od 3,50 £ + VAT za paletę tygodniowo. Obsługę, załadunek i rozładunek, ponowną paletyzację, koordynację celną i dystrybucję wyceniamy dla każdej dostawy." },
      { q: "Czy organizujecie transport międzynarodowy do UK?", a: "Usługa magazynowa LondraDepo zaczyna się, gdy towar dotrze do UK. Fracht morski, lotniczy, drogowy i kolejowy oraz odprawę celną zapewnia spółka macierzysta Arca Trade Group, więc transport i składowanie można wycenić razem. Możesz też korzystać z własnego spedytora." },
      { q: "Czy mogę przetestować rynek brytyjski małą dostawą?", a: "Tak. Przyjmujemy dostawy paletowe i częściowe, bez wymogu pełnego ładunku i bez stałego minimum, więc możesz zacząć od jednej palety testowej i zwiększać wolumen wraz ze sprzedażą w UK." },
      { q: "Czy pomagacie w zgodności etykiet z wymogami UK?", a: "Zależnie od grupy produktów udzielamy wskazówek dotyczących etykiet w języku angielskim, wymogów rynku brytyjskiego i przydatności operacyjnej. Za zgodność produktu z przepisami odpowiada sprzedawca." },
      { q: "Jakie są główne korzyści z magazynu w UK dla firm z zagranicy?", a: "Zapas w Wielkiej Brytanii pozwala oferować krajowe terminy dostaw i proste zwroty w UK, obsługiwać klientów hurtowych i internetowych z jednego miejsca oraz nie wysyłać każdego zamówienia z zagranicy. LondraDepo zapewnia to z Rayleigh w Essex." },
    ],
    related: ["/pl/wejscie-na-rynek-brytyjski", "/pl/cennik-magazynowania", "/pl/skladowanie-palet", "/pl/import-do-wielkiej-brytanii", "/pl/magazyn-w-wielkiej-brytanii"],
    cta: { h2: "Rozpocznij działalność w UK", text: "Opisz swój produkt i wolumeny, a zaproponujemy najprostszy sposób na start." },
    quote: { label: "Poproś o wycenę magazynowania", service: "storage" },
  },
  {
    slug: "/pl/magazyn-londyn",
    kind: "service",
    serviceType: "Magazynowanie",
    modified: MODIFIED,
    title: "Magazyn pod Londynem: Essex, 40 minut od miasta",
    description: "Magazyn dla Londynu i południowo-wschodniej Anglii w Rayleigh w Essex, ok. 40 minut od wschodniego Londynu przy M25. Palety od 3,50 £ + VAT tygodniowo.",
    label: "Magazyn pod Londynem",
    eyebrow: "Blisko Londynu, Essex",
    h1: "Magazyn pod Londynem przy korytarzu M25",
    lead:
      "Nasz magazyn znajduje się w Rayleigh w Essex, około 37 mil (59 km) drogą od centrum Londynu, około 40 minut od wschodniego Londynu i 20–30 minut od portu Tilbury. Nie leży w samym Londynie, ale położenie przy trasach A127 i M25 czyni go praktyczną bazą do składowania towaru i szybkich dostaw do Londynu, południowo-wschodniej Anglii i reszty Wielkiej Brytanii.",
    facts: [
      "Adres: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY",
      "Ok. 40 minut do wschodniego Londynu, ok. 1 godziny do centrum, 20–30 minut do Tilbury",
      "Przyjęcie towaru, składowanie palet i kartonów, Mintsoft WMS, pick and pack, dostawy w UK",
    ],
    sections: [
      {
        type: "list",
        h2: "Odległości z magazynu w Rayleigh",
        items: [
          "London Gateway: 13 mil drogą",
          "Port Tilbury: 16 mil drogą (20–30 minut)",
          "Felixstowe: ok. 62 mile drogą",
          "Centrum Londynu: ok. 37 mil (59 km), około 1 godziny",
        ],
      },
      {
        type: "text",
        h2: "Magazyn w Essex obsługujący Londyn",
        paras: [
          "Jeśli szukasz magazynu w Londynie, lokalizacja w Essex często okazuje się korzystniejsza cenowo: powierzchnia przemysłowa poza stolicą, bezpośredni dostęp do obwodnicy M25 i krótkie trasy do portów nad Tamizą. Z Rayleigh obsługujemy klientów w Londynie i wysyłamy towar w całym kraju.",
        ],
      },
      {
        type: "list",
        h2: "Co obejmuje usługa",
        items: [
          "Przyjęcie i składowanie towaru",
          "Śledzenie stanów w Mintsoft WMS",
          "Kompletacja zamówień",
          "Pakowanie",
          "Etykiety przewozowe",
          "Dostawy w całej Wielkiej Brytanii",
        ],
        outro: "Na start nie potrzebujesz brytyjskiej spółki, umowy najmu magazynu ani pracowników w UK.",
      },
    ],
    faqs: [
      { q: "Czy mogę składować towar w okolicach Londynu?", a: "Tak. Nasz magazyn jest w Essex, blisko Londynu, około 40–50 km od miasta i z dobrym połączeniem z brytyjskimi trasami logistycznymi. Możesz trzymać u nas zapas i realizować zamówienia w całej Wielkiej Brytanii." },
      { q: "Czy magazyn znajduje się w samym Londynie?", a: "Nie. Magazyn jest w Rayleigh w Essex, około 37 mil od centrum Londynu i około 40 minut od wschodniego Londynu. Położenie przy A127 i M25 pozwala obsługiwać Londyn i południowo-wschodnią Anglię." },
      { q: "Jak dostarczyć produkty do magazynu pod Londynem?", a: "Wyślij towar na adres magazynu przez własnego spedytora albo poproś Arca Trade Group o organizację transportu i odprawy celnej. Po dotarciu towar jest przyjmowany, liczony i rejestrowany w systemie." },
      { q: "Jak otrzymać wycenę magazynu pod Londynem?", a: "Skontaktuj się z nami przez formularz, WhatsApp lub telefonicznie i podaj rodzaj produktu, wolumen, szacowaną liczbę palet lub kartonów oraz potrzebne usługi, a przygotujemy wycenę." },
      { q: "Czy do magazynu łatwo dojadą ciężarówki i kontenery?", a: "Tak. Magazyn w Unit 19 Arterial Park w Rayleigh jest łatwo dostępny dla ciężarówek i przewoźników kontenerowych, a pełne kontenery FCL są rozładowywane bezpośrednio na miejscu." },
    ],
    related: ["/pl/magazyn-w-wielkiej-brytanii", "/pl/magazyn-essex", "/pl/lokalizacje/logistyka-port-magazyn", "/pl/skladowanie-palet", "/pl/cennik-magazynowania"],
    cta: { h2: "Wycena magazynu pod Londynem", text: "Powiedz nam, co chcesz składować i gdzie są Twoi klienci." },
    quote: { label: "Poproś o wycenę magazynowania", service: "storage" },
  },
  {
    slug: "/pl/logistyka-ecommerce-uk",
    kind: "service",
    serviceType: "Logistyka e-commerce",
    modified: MODIFIED,
    title: "Logistyka e-commerce w UK: zapas, dostawy, zwroty",
    description: "Logistyka e-commerce w UK z Essex: składowanie, Mintsoft WMS, pick and pack, etykiety, dostawy w UK i zwroty dla Shopify, Amazon FBM i innych kanałów.",
    label: "Logistyka e-commerce w UK",
    h1: "Logistyka e-commerce w UK: planowanie zapasu, dostaw i zwrotów",
    lead:
      "Logistyka e-commerce w Wielkiej Brytanii obejmuje wszystko, co dzieje się po kliknięciu „kup” przez klienta: utrzymanie zapasu w brytyjskim magazynie, kompletację i pakowanie zamówienia, etykietowanie, dostawę i obsługę zwrotów. LondraDepo prowadzi ten proces ze swojego magazynu w Essex dla Shopify, Amazon FBM i innych kanałów online.",
    facts: [
      "Kanały: Shopify, Amazon FBM, własna strona i inne platformy",
      "Stany magazynowe prowadzone w Mintsoft WMS",
      "Obsługa zwrotów w zakresie usługi",
    ],
    sections: [
      { type: "steps", h2: "Co się dzieje, gdy wpływa zamówienie", items: ORDER_STEPS },
      {
        type: "cards",
        h2: "Obsługiwane kanały sprzedaży",
        items: [
          { title: "Shopify", text: "Realizujemy zamówienia z Twojego sklepu Shopify dla klientów w UK. " + NOT_PARTNER_SHOPIFY },
          { title: "Amazon FBM", text: "Realizujemy zamówienia Amazon wysyłane przez sprzedawcę (FBM) z Essex. " + NOT_PARTNER_AMAZON },
          { title: "Inne kanały online", text: "Zamówienia z Twojej własnej strony lub innych platform e-commerce." },
        ],
      },
    ],
    faqs: [
      { q: "Czym jest logistyka e-commerce w UK?", a: "To cały proces kompletacji, pakowania i dostarczania zamówień ze sklepu internetowego z magazynu w Wielkiej Brytanii. LondraDepo prowadzi ten proces ze swojego magazynu w Essex." },
      { q: "Czym różni się fulfillment od logistyki?", a: "Logistyka obejmuje przemieszczanie i składowanie towaru. Fulfillment obejmuje całą ścieżkę zamówienia klienta: zarządzanie zapasem, kompletację i pakowanie, etykiety przewozowe i wysyłkę." },
      { q: "Czy jeden zapas w UK może obsłużyć Shopify, Amazon i inne kanały?", a: "Tak. Realizujemy zamówienia ze sklepów Shopify i Amazon FBM z naszego magazynu w Essex. Gdy wpływa zamówienie, zespół je kompletuje, pakuje i wysyła do klienta." },
      { q: "Jak zarządzany jest mój zapas w UK?", a: "Zapas jest śledzony w systemie Mintsoft WMS. Stany magazynowe są monitorowane na bieżąco, a każde przyjęcie i wydanie towaru jest rejestrowane w systemie." },
      { q: "Jak obsługiwane są zwroty w logistyce e-commerce w UK?", a: "Zwroty wracają do magazynu w Essex, gdzie są sprawdzane i zgodnie z Twoją instrukcją wracają na stan albo są odkładane. Zwroty wyceniamy za sztukę w ramach oferty fulfillmentu." },
    ],
    related: ["/pl/fulfillment-ecommerce", "/pl/fulfillment-shopify-uk", "/pl/fulfillment-amazon-uk", "/pl/pick-and-pack", "/pl/cennik-magazynowania"],
    quote: { label: "Poproś o wycenę fulfillmentu", service: "fulfilment" },
  },
  {
    slug: "/pl/pick-and-pack",
    kind: "service",
    serviceType: "Pick and pack (kompletacja i pakowanie)",
    modified: MODIFIED,
    title: "Pick and pack w UK: wycena za zamówienie",
    description: "Pick and pack z magazynu 3PL w Essex: kompletacja, pakowanie, etykiety, kontrola zamówień, zwroty i synchronizacja stanów w Mintsoft, z wyceną za zamówienie.",
    label: "Pick and pack",
    h1: "Pick and pack w Wielkiej Brytanii: wycena za zamówienie",
    lead:
      "Pick and pack to proces magazynowy, w którym pobiera się z półki właściwe produkty do zamówienia (pick), bezpiecznie je pakuje (pack) i przygotowuje paczkę do wysyłki. W LondraDepo nasz zespół w Essex kompletuje, pakuje, etykietuje i wysyła Twoje zamówienia internetowe, a każdy ruch towaru aktualizuje stany w Mintsoft WMS.",
    facts: [
      "Wycena za zamówienie, zależnie od liczby sztuk i opakowania",
      "Odpowiednie dla tekstyliów, akcesoriów elektronicznych, artykułów domowych, kosmetyków i podobnych towarów",
      "Klient może dostarczyć własne opakowania z logo",
    ],
    sections: [
      { type: "steps", h2: "Jak przebiega pick and pack", items: ORDER_STEPS },
      {
        type: "cards",
        h2: "Co obejmuje usługa",
        items: [
          { title: "Kompletacja zamówień", text: "Zamówienia wielopozycyjne kompletujemy pozycja po pozycji." },
          { title: "Pakowanie", text: "Opakowanie dobieramy do produktu." },
          { title: "Etykiety przewozowe", text: "Tworzymy i naklejamy etykiety z kodem kreskowym i adresem." },
          { title: "Kontrola zamówień", text: "Zawartość zamówienia sprawdzamy przed spakowaniem." },
          { title: "Obsługa zwrotów", text: "Zwroty przyjmujemy, sprawdzamy i przywracamy na stan." },
          { title: "Synchronizacja stanów", text: "Każdy ruch towaru aktualizuje stany w Mintsoft WMS." },
        ],
      },
    ],
    faqs: [
      { q: "Czym jest pick and pack?", a: "Pick and pack to proces pobierania zamówionych produktów z półek magazynowych (pick), a następnie pakowania ich tak, aby były gotowe do przekazania przewoźnikowi (pack)." },
      { q: "Jak działa pick and pack w Wielkiej Brytanii?", a: "Twój zapas jest w naszym magazynie w Essex. Zamówienie trafia do Mintsoft WMS, a nasz zespół je kompletuje, pakuje w odpowiednie opakowanie, tworzy etykietę przewozową i wysyła paczkę." },
      { q: "Kto dostarcza opakowania do pick and pack?", a: "Opcje opakowań ustalamy indywidualnie przy wycenie. Część klientów wysyła do magazynu w Essex własne opakowania z logo marki, których używamy przy pakowaniu ich zamówień." },
      { q: "Jak wyceniana jest usługa pick and pack?", a: "Cena pick and pack zależy od liczby zamówień, rodzaju produktu i wymagań dotyczących pakowania. Skontaktuj się z nami przez formularz lub WhatsApp, aby otrzymać indywidualną wycenę." },
      { q: "Czy kompletujecie zamówienia hurtowe oraz internetowe?", a: "Tak. Z tego samego zapasu kompletujemy paczki dla klientów internetowych oraz zamówienia paletowe i kartonowe dla klientów hurtowych, więc nie musisz dzielić towaru między kilku operatorów." },
    ],
    related: ["/pl/fulfillment-shopify-uk", "/pl/fulfillment-ecommerce", "/pl/logistyka-ecommerce-uk", "/pl/fulfillment-wielka-brytania", "/pl/cennik-magazynowania"],
    quote: { label: "Poproś o wycenę pick and pack", service: "fulfilment" },
  },
  {
    slug: "/pl/fulfillment-shopify-uk",
    kind: "service",
    serviceType: "Fulfillment Shopify",
    modified: MODIFIED,
    title: "Fulfillment Shopify w UK: magazyn w Essex",
    description: "Fulfillment Shopify w UK: składujemy towar w Essex, kompletujemy, pakujemy i wysyłamy zamówienia do klientów w UK, obsługujemy zwroty. Palety od 3,50 £ + VAT.",
    label: "Fulfillment Shopify w UK",
    eyebrow: "Fulfillment Shopify · magazyn w UK",
    h1: "Fulfillment Shopify w Wielkiej Brytanii dla sklepów internetowych",
    lead:
      "Fulfillment Shopify w Wielkiej Brytanii oznacza, że zewnętrzny magazyn przechowuje Twój zapas i w Twoim imieniu wysyła zamówienia ze sklepu Shopify do klientów w UK. LondraDepo robi to z Rayleigh w Essex, pod Londynem: przyjmujemy i składujemy towar, kompletujemy i pakujemy każde zamówienie, wysyłamy je do klienta i obsługujemy zwroty, dzięki czemu sprzedajesz w UK z dowolnego kraju bez otwierania własnego magazynu. Składowanie od 3,50 £ + VAT za paletę tygodniowo. " + NOT_PARTNER_SHOPIFY,
    facts: [
      "Magazyn: Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY",
      "Stany magazynowe w Mintsoft WMS",
      "Kompletacja, pakowanie, wysyłka i zwroty po stronie naszego zespołu",
      "Składowanie od 3,50 £ + VAT za paletę tygodniowo",
      "Zamówienia Shopify, Amazon i hurtowe z tego samego zapasu w UK",
      "Zakres importu zamówień i automatyzacji potwierdzamy przed wyceną",
    ],
    sections: [
      {
        type: "cards",
        h2: "Co obejmuje fulfillment Shopify w UK?",
        items: [
          { title: "Przyjęcie i składowanie", text: "Palety lub kartony przyjmujemy, liczymy według listy pakowej, rejestrujemy w Mintsoft WMS i składujemy w Essex." },
          { title: "Pick and pack", text: "Każde zamówienie Shopify kompletujemy z zapasu i pakujemy w opakowanie dopasowane do produktu." },
          { title: "Wysyłka w UK", text: "Paczki przekazujemy brytyjskim przewoźnikom, którzy dostarczają je klientom w całej Wielkiej Brytanii." },
          { title: "Zwroty", text: "Zwrócone produkty sprawdzamy i zgodnie z Twoją instrukcją przywracamy na stan lub odkładamy." },
          { title: "Inne kanały", text: "Ten sam zapas może obsłużyć Amazon FBA prep, Amazon FBM i zamówienia paletowe B2B, więc nie dzielisz towaru między operatorów." },
          { title: "Wsparcie importu", text: "Transport i brytyjską odprawę celną zapewnia Arca Trade Group, operator LondraDepo." },
        ],
      },
      {
        type: "steps",
        h2: "Jak działa fulfillment Shopify z LondraDepo",
        items: [
          { title: "Wyślij towar", text: "Wyślij produkty do naszego magazynu w Essex, na paletach lub w kartonach." },
          { title: "Przyjęcie", text: "Towar jest liczony, sprawdzany i rejestrowany w WMS." },
          { title: "Zamówienie", text: "Klient z UK składa zamówienie w Twoim sklepie Shopify, a zamówienie trafia do naszego zespołu." },
          { title: "Kompletacja", text: "Zespół kompletuje zamówienie z zapasu." },
          { title: "Pakowanie", text: "Produkt jest pakowany w odpowiednie opakowanie." },
          { title: "Wysyłka", text: "Zamówienie trafia do klienta w UK; zwroty wracają do Essex." },
        ],
      },
      {
        type: "table",
        h2: "Ile kosztuje fulfillment Shopify w UK?",
        intro: "Składowanie to jedyna publikowana stawka. Pozostałe pozycje zależą od produktów i profilu zamówień, więc wyceniamy je po poznaniu wolumenów.",
        head: ["Pozycja kosztowa", "Jak wyceniamy w LondraDepo"],
        rows: [
          ["Składowanie", "Od 3,50 £ + VAT za paletę tygodniowo (10 palet przez 4 tygodnie od 140 £ + VAT)"],
          ["Przyjęcie towaru", "Za dostawę: palety, kartony lub rozładunek kontenera"],
          ["Pick and pack", "Za zamówienie i sztukę, zależnie od rozmiaru produktu i opakowania"],
          ["Dostawa w UK", "Według rozmiaru i wagi paczki oraz poziomu usługi"],
          ["Zwroty", "Za zwróconą sztukę"],
        ],
        note: "Podaj miesięczną liczbę zamówień, liczbę SKU, średnią liczbę sztuk w zamówieniu i rozmiary produktów, aby otrzymać wycenę według wolumenu.",
      },
      {
        type: "text",
        h2: "Planowanie dla 100 lub 200 zamówień miesięcznie",
        paras: [
          "Sam wolumen 100 czy 200 zamówień miesięcznie nie wyznacza stałej ceny fulfillmentu. Razem oceniamy rozmiar produktu, liczbę SKU, średnią liczbę sztuk w zamówieniu, liczbę palet lub kartonów na składzie, wymagania dotyczące opakowań, odsetek zwrotów i regiony dostaw.",
          "Planujemy przyjęcie towaru, widoczność stanów, import zamówień, pick and pack i dostawy w UK. Zakres automatyzacji połączenia z Shopify weryfikujemy przed wyceną; nie obiecujemy z góry automatycznej integracji ani konkretnego czasu dostawy.",
        ],
      },
      {
        type: "text",
        h2: "Dlaczego realizować zamówienia Shopify z Essex?",
        paras: [
          "Rayleigh leży 13 mil drogą od DP World London Gateway, 16 mil od portu Tilbury i 37 mil od centrum Londynu, z bezpośrednim dostępem do A127 i M25. Importowany towar szybko dociera do magazynu, a paczki wyjeżdżają brytyjskimi sieciami przewoźników obsługującymi Londyn i południowo-wschodnią Anglię.",
          "Brytyjczycy kupują w internecie na dużą skalę: według Office for National Statistics sprzedaż internetowa stanowiła w 2026 roku około 28% całej sprzedaży detalicznej w Wielkiej Brytanii. Zapas w UK pozwala sklepowi Shopify oferować krajowe terminy dostaw i proste zwroty zamiast wysyłania każdego zamówienia z zagranicy.",
        ],
      },
      {
        type: "table",
        h2: "Fulfillment w UK a wysyłka zamówień Shopify z zagranicy",
        intro: "Wiele sklepów Shopify sprzedających do UK zaczyna od wysyłki zamówień z kraju macierzystego. Zapas w brytyjskim magazynie zmienia cztery rzeczy:",
        head: ["", "Magazyn w UK (LondraDepo)", "Wysyłka każdego zamówienia z zagranicy"],
        rows: [
          ["Cło", "Towar jest importowany hurtowo i odprawiany raz, przez Arca Trade Group lub Twoją agencję celną", "Każda paczka przekracza granicę i wymaga dokumentów celnych"],
          ["Dostawa do klienta", "Krajowe usługi paczkowe w UK z Essex", "Międzynarodowe usługi paczkowe z dłuższym czasem transportu"],
          ["Zwroty", "Wracają do Essex, są sprawdzane i przywracane na stan lub odkładane zgodnie z Twoją instrukcją", "Odsyłane przez granicę lub spisywane na straty"],
          ["Inne kanały", "Ten sam zapas obsługuje też Amazon FBA prep, FBM i zamówienia hurtowe", "Zwykle potrzebny jest osobny zapas dla każdego kanału"],
        ],
      },
      {
        type: "steps",
        h2: "Jak działają zwroty Shopify z magazynem w UK",
        intro: "Klienci w UK oczekują łatwego zwrotu krajowego. Przy zapasie w Essex zwroty wracają do nas, zamiast przekraczać granicę.",
        items: [
          { title: "Klient odsyła paczkę", text: "Twoja polityka zwrotów kieruje klientów z UK na nasz adres w Rayleigh w Essex." },
          { title: "Przyjęcie i kontrola", text: "Paczkę otwieramy, przypisujemy do zamówienia i sprawdzamy stan produktu." },
          { title: "Na stan lub na bok", text: "Produkty nadające się do sprzedaży wracają na dostępny stan w Mintsoft WMS; uszkodzone odkładamy zgodnie z Twoją instrukcją." },
          { title: "Zwrot pieniędzy w Shopify", text: "Raportujemy wynik, aby można było zwrócić pieniądze lub wymienić produkt w panelu Shopify." },
        ],
      },
      {
        type: "text",
        h2: "Sprzedajesz też w UE? Trzymaj osobny zapas dla UK i UE",
        paras: [
          "Od wyjścia Wielkiej Brytanii z jednolitego rynku UE towary wysyłane z Wielkiej Brytanii do klientów w UE są eksportem, ze zgłoszeniem celnym, cłem i VAT po stronie unijnej. Dlatego większość marek Shopify sprzedających na obu rynkach trzyma zapas w UK dla zamówień brytyjskich i osobny zapas w UE dla zamówień unijnych.",
          "LondraDepo obsługuje stronę brytyjską z Essex. Jeśli sprzedajesz również w UE, zaplanuj magazyn w UE dla tych zamówień, zamiast wysyłać każdą unijną paczkę z UK.",
        ],
      },
      {
        type: "list",
        h2: "Co przesłać, aby otrzymać wycenę fulfillmentu Shopify",
        items: [
          "Miesięczną liczbę zamówień i jej zmiany w szczycie sezonu",
          "Liczbę SKU i średnią liczbę sztuk w zamówieniu",
          "Rozmiary i wagę produktów oraz informację o towarach delikatnych lub wymagających specjalnego pakowania",
          "Sposób dostawy towaru: palety, kartony lub kontener, i z jakiego kraju",
          "Gdzie są Twoi klienci i jakie usługi dostawy chcesz oferować",
          "Spodziewany odsetek zwrotów i postępowanie ze zwróconymi produktami",
        ],
        outro: "Nie ma stałego minimum: część klientów zaczyna od jednej palety testowej i zwiększa wolumen. Zakres importu zamówień i integracji z Shopify potwierdzamy przed wyceną.",
      },
      {
        type: "links",
        h2: "Fulfillment e-commerce w praktyce",
        items: [
          { href: "/pl/studia-przypadkow/cruyff-fulfillment-uk", title: "Cruyff: fulfillment mody w UK", text: "Marka modowa przeniosła obsługę zamówień internetowych w UK z Holandii do naszego magazynu w Essex, z opcjami dostawy następnego dnia i w 2 dni.", tag: "Studium przypadku" },
          { href: "/pl/cennik-magazynowania", title: "Cennik magazynowania", text: "Składowanie palet od 3,50 £ + VAT za paletę tygodniowo i pozycje wyceniane osobno.", tag: "Cennik" },
          { href: "/pl/fulfillment-amazon-uk", title: "Fulfillment Amazon w UK", text: "Obsługuj Amazon FBA i FBM z tego samego zapasu w UK co sklep Shopify.", tag: "Usługa" },
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "Office for National Statistics: sprzedaż internetowa jako odsetek całej sprzedaży detalicznej (seria J4MC)", href: "https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc" },
        ],
      },
    ],
    faqs: [
      { q: "Jak obsługiwane są zwroty Shopify w magazynie w UK?", a: "Klienci z UK odsyłają zwroty do magazynu LondraDepo w Rayleigh w Essex. Przypisujemy każdy zwrot do zamówienia, sprawdzamy stan, produkty do sprzedaży przywracamy na stan w Mintsoft WMS, uszkodzone odkładamy i raportujemy wynik, abyś mógł zwrócić pieniądze w Shopify." },
      { q: "Czy mogę realizować zamówienia Shopify z UE z magazynu w UK?", a: "Można, ale każda paczka z Wielkiej Brytanii do UE jest eksportem z dokumentami celnymi, cłem i VAT po stronie unijnej. Większość marek sprzedających na obu rynkach trzyma zapas brytyjski w magazynie w UK, takim jak LondraDepo, a osobny zapas w UE." },
      { q: "Czym jest fulfillment Shopify w Wielkiej Brytanii?", a: "To usługa, w której magazyn w UK przechowuje Twój zapas oraz kompletuje, pakuje i wysyła zamówienia ze sklepu Shopify do klientów w Wielkiej Brytanii. LondraDepo świadczy ją z Rayleigh w Essex, pod Londynem, razem z obsługą zwrotów." },
      { q: "Ile kosztuje fulfillment Shopify w UK?", a: "W LondraDepo składowanie zaczyna się od 3,50 £ + VAT za paletę tygodniowo. Przyjęcie towaru, pick and pack, dostawę i zwroty wyceniamy osobno, na podstawie Twoich produktów i miesięcznej liczby zamówień." },
      { q: "Czy znajdę magazyn w UK dla mojego sklepu Shopify?", a: "Tak. LondraDepo oferuje składowanie zapasu i realizację zamówień w Essex dla firm sprzedających przez Shopify. Gdy wpływa zamówienie, nasz zespół je kompletuje, pakuje i wysyła do klienta w UK." },
      { q: "Czy LondraDepo jest oficjalnym partnerem Shopify?", a: "Nie. LondraDepo nie jest oficjalnym partnerem Shopify. Zapewniamy fulfillment i magazynowanie firmom, które sprzedają przez Shopify, z naszego magazynu w Essex." },
      { q: "Czy zamówienia Shopify są przetwarzane automatycznie?", a: "Opcje importu zamówień i integracji warto omówić z nami przed startem. Wspólnie planujemy proces operacyjny i potwierdzamy zakres automatyzacji przed przygotowaniem wyceny." },
      { q: "Czy realizujecie zamówienia Shopify i Amazon z tego samego zapasu?", a: "Tak. Ten sam zapas w UK może obsłużyć zamówienia Shopify, Amazon FBA prep lub zamówienia FBM oraz zamówienia paletowe B2B, więc nie potrzebujesz osobnego magazynu dla każdego kanału." },
      { q: "Czy fulfillment Shopify ma minimalny wolumen zamówień?", a: "Nie. LondraDepo nie stosuje stałego minimum dla fulfillmentu Shopify: część klientów zaczyna od jednej palety testowej w Essex i zwiększa skalę, ze składowaniem od 3,50 £ + VAT za paletę tygodniowo i fulfillmentem wycenianym według profilu zamówień." },
      { q: "Dlaczego trzymać zapas Shopify w UK zamiast wysyłać z zagranicy?", a: "Przy zapasie w magazynie LondraDepo w Essex towar przechodzi brytyjską odprawę raz, hurtowo, zamówienia wyjeżdżają krajowymi usługami paczkowymi, a zwroty wracają do Essex, zamiast każdej paczki przekraczającej granicę z własnymi dokumentami celnymi." },
      { q: "Mój sklep Shopify jest zarejestrowany poza UK. Czy mogę sprzedawać klientom w UK?", a: "Tak. Możesz sprzedawać do Wielkiej Brytanii ze sklepem zarejestrowanym w innym kraju. Potrzebujesz zapasu w magazynie w UK i spełnienia wymogów celnych przy imporcie towaru do Wielkiej Brytanii." },
    ],
    related: ["/pl/fulfillment-ecommerce", "/pl/pick-and-pack", "/pl/logistyka-ecommerce-uk", "/pl/fulfillment-amazon-uk", "/pl/cennik-magazynowania", "/pl/studia-przypadkow/cruyff-fulfillment-uk"],
    cta: { h2: "Wycena fulfillmentu Shopify", text: "Podaj miesięczną liczbę zamówień, liczbę SKU i rozmiary produktów, a wycenimy składowanie, pick and pack i dostawy w UK." },
    quote: { label: "Poproś o wycenę fulfillmentu Shopify", service: "fulfilment" },
  },
  {
    slug: "/pl/magazyn-dla-sprzedawcow-amazon",
    kind: "service",
    serviceType: "Fulfillment Amazon FBM",
    modified: MODIFIED,
    title: "Fulfillment Amazon FBM w UK: magazyn w Essex",
    description: "Magazyn w UK dla sprzedawców Amazon: wysyłka zamówień FBM i FBA prep z Essex, blisko Londynu i Amazon LCY2 Tilbury. Bez minimum, start od jednej palety.",
    label: "Magazyn dla sprzedawców Amazon",
    h1: "Fulfillment Amazon FBM: magazyn w UK dla sprzedawców Amazon",
    lead:
      "Jeśli sprzedajesz na Amazon.co.uk w modelu Fulfilled by Merchant (FBM), LondraDepo może być Twoim magazynem w Wielkiej Brytanii: składujemy towar w Essex oraz kompletujemy, pakujemy i wysyłamy każde zamówienie Amazon do klienta. Jeśli korzystasz z Fulfilled by Amazon (FBA), przygotowujemy towar i wysyłamy go do Amazon. " + NOT_PARTNER_AMAZON,
    facts: [
      "FBM: zapas w naszym magazynie, zamówienia realizuje nasz zespół",
      "FBA: etykiety FNSKU, pakowanie i przygotowanie wysyłki",
      "Centrum Amazon LCY2 (Tilbury) ok. 16 mil od magazynu",
      "Zasady Amazon dotyczące dostaw i wyników sprzedawcy nadal obowiązują",
    ],
    sections: [
      {
        type: "table",
        h2: "FBM czy FBA?",
        head: ["", "FBM – Fulfilled by Merchant", "FBA – Fulfilled by Amazon"],
        rows: [
          ["Gdzie jest zapas", "Twój magazyn lub magazyn zewnętrzny, np. LondraDepo", "Centra logistyczne Amazon"],
          ["Kto realizuje zamówienia", "Ty lub Twój magazyn", "Amazon"],
          ["Koszty składowania", "Pod Twoją kontrolą", "Ustalane przez Amazon"],
          ["Ograniczenia", "Bez ograniczeń przyjęć FBA", "Zasady przygotowania i przyjęcia towaru FBA"],
          ["Korzyści", "Kontrola nad zapasem i opakowaniem", "Oznaczenie Prime, sieć Amazon, zwroty obsługuje Amazon"],
        ],
      },
      {
        type: "steps",
        h2: "Proces fulfillmentu FBM",
        items: [
          { title: "Wyślij towar", text: "Wyślij produkty do naszego magazynu w Essex." },
          { title: "Przyjęcie", text: "Towar jest liczony, sprawdzany i rejestrowany w WMS." },
          { title: "Zamówienie Amazon", text: "Klient składa zamówienie w Twoim sklepie na Amazon." },
          { title: "Kompletacja", text: "Zespół kompletuje zamówienie z zapasu." },
          { title: "Pakowanie", text: "Produkt jest pakowany w odpowiednie opakowanie." },
          { title: "Wysyłka", text: "Zamówienie trafia do klienta w UK." },
        ],
      },
      {
        type: "links",
        h2: "Zamówienia Amazon z naszego magazynu w Essex w praktyce",
        items: [
          { href: "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych", title: "Pokrowce samochodowe: eBay, Amazon i dealerzy", text: "Zamówienia producenta z eBay, Amazon i strony internetowej realizujemy tego samego dnia z Essex, obok dostaw B2B do warsztatów.", tag: "Studium przypadku" },
          { href: "/pl/centra-amazon-w-uk", title: "Centra logistyczne Amazon w UK", text: "Kody, lokalizacje i odległości drogowe od naszego magazynu.", tag: "Przewodnik" },
          { href: "/pl/o-nas", title: "Kto prowadzi Twoją operację", text: "Zespół Operations Managera Yusufa Barışa, po angielsku i turecku.", tag: "Zespół" },
        ],
      },
      {
        type: "text",
        h2: "FBA prep a fulfillment FBM",
        paras: [
          "W modelu FBA towar trafia do sieci logistycznej Amazon. Czynności przygotowawcze, takie jak etykiety FNSKU, pakowanie i przygotowanie wysyłki, planujemy pod kątem produktu i aktualnych wymogów przyjęcia Amazon. LondraDepo wycenia zakres i cenę prep dla każdego produktu.",
          "W modelu FBM towar może być składowany w magazynie zewnętrznym, a my zajmujemy się kompletacją, pakowaniem i wysyłką w UK, gdy wpłynie zamówienie. Wymogi Amazon dotyczące dostaw i wyników sprzedawcy nadal obowiązują i nie gwarantujemy konkretnego rezultatu.",
          "Do wyceny podaj SKU i ilości, wymiary, wymagania dotyczące etykiet lub pakowania, liczbę palet oraz to, czy korzystasz z FBA czy FBM. FBA prep nie jest bezpłatny: składowanie, przygotowanie i wysyłkę wyceniamy osobno.",
        ],
      },
    ],
    faqs: [
      { q: "Czym jest Amazon FBM?", a: "FBM (Fulfilled by Merchant) to model, w którym sprzedawca Amazon lub magazyn zewnętrzny przechowuje zapas i wysyła każde zamówienie. LondraDepo zapewnia magazyn zewnętrzny dla sprzedawców FBM w Wielkiej Brytanii." },
      { q: "Dlaczego warto wybrać LondraDepo do Amazon FBM?", a: "FBM wymaga zapasu w Wielkiej Brytanii i szybkiej wysyłki zamówień. Zapewniamy kompletację, pakowanie i koordynację dostaw w UK z Essex, więc możesz prowadzić sprzedaż FBM bez własnego magazynu." },
      { q: "Czy LondraDepo jest oficjalnym partnerem Amazon przy zamówieniach FBM?", a: "Nie. LondraDepo nie jest oficjalnym partnerem Amazon. Zapewniamy niezależne magazynowanie i fulfillment firmom, które sprzedają na Amazon w modelu FBM." },
      { q: "Czy spełnię wymogi wydajności Amazon dla FBM?", a: "Amazon ustala terminy dostaw i wymogi wydajności dla FBM. Realizacja zamówień z magazynu w UK pomaga dotrzymać krajowych terminów dostaw, ale ostateczną ocenę wyników sprzedawcy przeprowadza Amazon." },
      { q: "Czy ten sam zapas obsłuży Amazon FBM i inne kanały?", a: "Tak. Zapas w LondraDepo może obsługiwać zamówienia Amazon FBM, zostać przygotowany i wysłany do Amazon FBA oraz obsługiwać zamówienia Shopify lub hurtowe, wszystko z jednego magazynu w Essex." },
    ],
    related: ["/pl/blog/amazon-private-label-i-wholesale-uk", "/pl/fulfillment-amazon-uk", "/pl/amazon-fba-prep", "/pl/centra-amazon-w-uk", "/pl/magazyn-w-wielkiej-brytanii", "/pl/blog/amazon-fba-czy-fulfillment-uk"],
    quote: { label: "Poproś o wycenę fulfillmentu Amazon", service: "amazon-prep" },
  },
];
