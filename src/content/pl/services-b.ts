import type { EnPage } from "../en/types";

/**
 * Polish service pages (wave 2, part B), rendered by EnPageView in Polish. Translated from src/content/en/services.ts:
 * UK fulfilment, storage services, customs clearance, cargo handling, distribution, Amazon fulfilment and the Essex
 * warehouse. Facts are limited to what the EN pages state; the team speaks English and Turkish, so no page promises
 * Polish-language service. Amazon rules are cited from Amazon Freight's UK guidance (Dec 2025); no partner status claimed.
 */
const MODIFIED = "2026-11-28";

const NOT_PARTNER_AMAZON =
  "LondraDepo nie jest oficjalnym partnerem Amazon. Zapewniamy niezależne magazynowanie i fulfillment dla firm sprzedających na Amazon.";

const AMAZON_SOURCES = [
  { label: "Amazon Freight: dostawy LTL do centrów Amazon w UK, lista kontrolna nadawcy (grudzień 2025)", href: "https://freight.amazon.co.uk/newsroom/uk-ltl-amazon-fcs-checklist" },
  { label: "Amazon Freight: przygotowanie palet, wymiary, foliowanie i etykiety (grudzień 2025)", href: "https://freight.amazon.co.uk/newsroom/pallet-site-prep-dimensions-wrapping-labels-tail-lift-alternatives" },
];

export const plServicesB: EnPage[] = [
  {
    slug: "/pl/fulfillment-wielka-brytania",
    kind: "service",
    serviceType: "Fulfillment",
    modified: MODIFIED,
    title: "Fulfillment w Wielkiej Brytanii dla importerów",
    description: "Fulfillment w UK z Essex: kompletacja zamówień, pakowanie zgodne z marką, Amazon FBA prep, zamówienia z Shopify i Etsy, zwroty i raporty stanów.",
    label: "Fulfillment w Wielkiej Brytanii",
    eyebrow: "Realizacja zamówień w UK",
    h1: "Fulfillment w Wielkiej Brytanii dla marek importujących do UK",
    lead:
      "Fulfillment w Wielkiej Brytanii oznacza, że Twój zapas leży w brytyjskim magazynie, a każde zamówienie klienta jest za Ciebie kompletowane, pakowane i wysyłane. LondraDepo prowadzi fulfillment z magazynu w Essex dla marek importujących towar do UK: kompletację, pakowanie, Amazon FBA prep, zamówienia wielokanałowe i zwroty. Składowanie palet zaczyna się od 3,50 £ + VAT tygodniowo.",
    facts: [
      "Bez stałego minimum zapasu",
      "Zamówienia z Shopify i Amazon FBM realizowane z jednego magazynu",
      "Amazon FBA prep jako osobny proces",
      "Stany i zamówienia w systemie Mintsoft WMS",
    ],
    sections: [
      {
        type: "cards",
        h2: "Co obejmuje nasz fulfillment",
        items: [
          { title: "Kompletacja", text: "Każde zamówienie jest dokładnie kompletowane z półek magazynowych." },
          { title: "Pakowanie", text: "Produkty pakujemy zgodnie ze standardami Twojej marki." },
          { title: "Amazon FBA prep", text: "Etykietowanie i przygotowanie zgodne z wymogami FBA oraz wysyłka do Amazon." },
          { title: "Zamówienia z Shopify i Etsy", text: "Zamówienia z Twoich platform e-commerce trafiają do procesu fulfillmentu; zakres integracji ustalamy z Tobą." },
          { title: "Obsługa zwrotów", text: "Zwroty z UK są przyjmowane, sprawdzane i raportowane." },
          { title: "Kontrola stanów", text: "Stany magazynowe raportujemy regularnie, a alerty można ustawić według potrzeb." },
        ],
      },
    ],
    faqs: [
      { q: "Czy zamówienia z Shopify i Amazon mogą iść z jednego magazynu w UK?", a: "Tak, zamówienia z Shopify i wysyłki Amazon FBM można przygotowywać z tego samego magazynu, jeśli działa odpowiednia integracja i zarządzanie stanami. Amazon FBA prep, czyli etykietowanie i wysyłka do Amazon, to osobny proces dopasowywany do Twoich produktów." },
      { q: "Czym jest fulfillment w Wielkiej Brytanii?", a: "Fulfillment to kompletacja, pakowanie i wysyłka zamówień klientów z magazynu. Przechowujemy Twoje produkty w naszym magazynie w Wielkiej Brytanii, przygotowujemy zamówienia i wysyłamy je do Twoich klientów." },
      { q: "Czy wspieracie sprzedawców korzystających z Amazon FBA?", a: "Tak. W ramach usługi Amazon prep przygotowujemy produkty zgodnie z wymogami FBA, oznaczamy je etykietami i wysyłamy do centrum logistycznego Amazon wskazanego w planie dostawy." },
      { q: "Czy fulfillment wymaga minimalnego stanu magazynowego?", a: "Nie ma stałego minimalnego stanu magazynowego. Zakres usługi i wolumen dopasowujemy do Twoich potrzeb, więc można zacząć od niewielkiego zapasu i rosnąć wraz ze sprzedażą." },
      { q: "Jak wyceniany jest fulfillment w Wielkiej Brytanii?", a: "Składowanie zaczyna się od 3,50 £ + VAT za paletę tygodniowo. Przyjęcie towaru, kompletację i pakowanie, opakowania, dostawę i zwroty wyceniamy według produktów, miesięcznej liczby zamówień i średniej liczby sztuk w zamówieniu." },
    ],
    related: ["/pl/3pl-wielka-brytania", "/pl/fulfillment-shopify-uk", "/pl/blog/jak-wybrac-3pl-w-uk", "/pl/skladowanie-palet", "/pl/amazon-fba-prep", "/pl/zalety-magazynu-w-uk", "/pl/blog/czym-jest-fulfillment-w-uk"],
    quote: { label: "Poproś o wycenę fulfillmentu", service: "fulfilment" },
  },
  {
    slug: "/pl/uslugi-magazynowe",
    kind: "service",
    serviceType: "Usługi magazynowe",
    modified: MODIFIED,
    title: "Usługi magazynowe w UK: przyjęcie i kontrola stanów",
    description: "Usługi magazynowe w UK: przyjęcie palet i kartonów, rozładunek kontenerów FCL, stany w Mintsoft WMS i składowanie krótko- lub długoterminowe w Essex.",
    label: "Usługi magazynowe",
    eyebrow: "Składowanie w Wielkiej Brytanii",
    h1: "Usługi magazynowe w UK: przyjęcie towaru, kontrola stanów i elastyczna powierzchnia",
    lead:
      "Nasze usługi magazynowe w Wielkiej Brytanii obejmują techniczną stronę przechowywania zapasu: przyjęcie palet i kartonów, rozładunek kontenerów FCL, bieżącą ewidencję stanów w systemie Mintsoft WMS oraz elastyczną powierzchnię na krótki lub długi okres w magazynie w Rayleigh w Essex. Standardowa paleta kosztuje od 3,50 £ + VAT tygodniowo.",
    facts: [
      "Składowanie krótko- i długoterminowe",
      "Składowanie palet i kartonów",
      "Stany na bieżąco w Mintsoft WMS",
      "Przyjmujemy towar od dowolnego dostawcy i z dowolnego kraju",
    ],
    sections: [
      {
        type: "cards",
        h2: "Zakres usług magazynowych",
        items: [
          { title: "Składowanie krótkoterminowe", text: "Elastyczna powierzchnia na zapas tymczasowy lub sezonowy." },
          { title: "Składowanie długoterminowe", text: "Bezpieczne miejsce na stały zapas w Wielkiej Brytanii." },
          { title: "Palety i kartony", text: "Uporządkowane, bezpieczne składowanie towaru na paletach i w kartonach." },
          { title: "Przyjęcie i liczenie", text: "Dostawy są przyjmowane i liczone w kontrolowanych warunkach." },
          { title: "Zarządzanie stanami", text: "Stany i ruchy towaru są rejestrowane w Mintsoft WMS." },
          { title: "Monitorowanie zapasu", text: "Status Twoich produktów w magazynie jest śledzony systematycznie." },
        ],
      },
    ],
    faqs: [
      { q: "Czy możliwe jest składowanie krótkoterminowe?", a: "Tak. Składowanie rozliczamy tygodniowo, od 3,50 £ + VAT za standardową paletę, więc możliwy jest zarówno pobyt na kilka tygodni, jak i długoterminowe składowanie, a także cross-dock dla towaru jadącego dalej." },
      { q: "Czy przyjmujecie towar na paletach i w kartonach?", a: "Tak. LondraDepo przyjmuje towar na paletach i w kartonach, także z dostaw kontenerowych FCL i LCL. Luźne kartony możemy przy przyjęciu spaletyzować i oznaczyć, zanim trafią do Mintsoft WMS." },
      { q: "Jak śledzone są stany magazynowe?", a: "Stany i ruchy towaru są rejestrowane w systemie Mintsoft WMS od chwili przyjęcia dostawy, więc wiesz, co leży na półkach, i otrzymujesz regularne raporty stanów magazynowych." },
      { q: "Czy przyjmujecie towar od zagranicznych dostawców?", a: "Tak. W magazynie w Rayleigh przyjmujemy towar od dowolnego dostawcy i z dowolnego kraju. Transport i brytyjską odprawę celną może zorganizować Arca Trade Group albo Twój własny spedytor." },
      { q: "Jak rozliczane jest składowanie kartonów i obsługa?", a: "Składowanie standardowej palety kosztuje od 3,50 £ + VAT tygodniowo. Składowanie kartonów, przyjęcie towaru, rozładunek kontenerów i obsługę wyceniamy według Twoich produktów i wolumenów." },
    ],
    related: ["/pl/magazyn-w-wielkiej-brytanii", "/pl/skladowanie-palet", "/pl/cennik-magazynowania", "/pl/blog/magazyn-tranzytowy-w-uk", "/pl/branze/zywnosc-i-opakowania", "/pl/blog/przewodnik-magazynowanie-uk"],
    quote: { label: "Poproś o wycenę magazynowania", service: "storage" },
  },
  {
    slug: "/pl/odprawa-celna-uk",
    kind: "service",
    serviceType: "Odprawa celna",
    modified: MODIFIED,
    title: "Odprawa celna importu do Wielkiej Brytanii",
    description: "Odprawa celna importu do UK przez zespół Arca Trade Group: doradztwo w kodach towarowych, koordynacja przybycia i przekazanie towaru do magazynu w Essex.",
    label: "Odprawa celna w UK",
    eyebrow: "Import do Wielkiej Brytanii",
    h1: "Odprawa celna importu do Wielkiej Brytanii",
    lead:
      "Odprawę celną towarów importowanych do Wielkiej Brytanii prowadzi zespół celny Arca Trade Group, firmy będącej operatorem LondraDepo i członkiem BIFA. Zespół składa zgłoszenia w imieniu klientów i doradza w sprawie procedur celnych, kodów towarowych i preferencji. Po odprawie towar trafia do naszego magazynu w Essex, gdzie jest liczony i przyjmowany na stan.",
    note:
      "Odprawę celną zapewnia Arca Trade Group i jest ona wyceniana osobno od magazynowania. LondraDepo nie jest składem celnym zatwierdzonym przez HMRC: towar składujemy po odprawie. Możesz też skorzystać z własnej agencji celnej.",
    sections: [
      {
        type: "cards",
        h2: "Zakres wsparcia celnego",
        items: [
          { title: "Zgłoszenia importowe", text: "Zespół celny Arca Trade Group składa zgłoszenia importowe w Twoim imieniu." },
          { title: "Kody towarowe i preferencje", text: "Doradztwo w zakresie procedur celnych, kodów towarowych i preferencyjnego pochodzenia." },
          { title: "Koordynacja przybycia", text: "Koordynacja w momencie przybycia przesyłki do Wielkiej Brytanii." },
          { title: "Od odprawy do magazynu", text: "Prowadzimy proces do chwili przyjęcia odprawionego towaru do naszego magazynu." },
        ],
      },
    ],
    faqs: [
      { q: "Kto składa brytyjskie zgłoszenie celne?", a: "Zgłoszenia w imieniu klientów składa zespół celny Arca Trade Group, operatora LondraDepo. Możesz też pracować z własną agencją celną i po prostu dostarczyć odprawiony towar do naszego magazynu." },
      { q: "Czy odprawiacie towar wysłany z zagranicy?", a: "Tak. Arca Trade Group odprawia towary wysyłane do Wielkiej Brytanii z Europy, w tym z Polski, oraz z innych krajów, a także może zorganizować transport morski, lotniczy, drogowy lub kolejowy." },
      { q: "Czy LondraDepo jest składem celnym?", a: "Nie. LondraDepo nie jest składem celnym zatwierdzonym przez HMRC. Towar składujemy dopiero po jego odprawie i dopuszczeniu do swobodnego obrotu w Wielkiej Brytanii." },
      { q: "Jak przyjmowany jest towar po odprawie celnej?", a: "Po zakończeniu odprawy towar jest dostarczany na adres naszego magazynu w Rayleigh, liczony i przyjmowany na stan w systemie magazynowym Mintsoft WMS." },
      { q: "Jaki numer EORI jest potrzebny do odprawy w UK?", a: "Importer potrzebuje numeru EORI zaczynającego się od GB, aby importować towar do Wielkiej Brytanii. Zespół Arca Trade Group może złożyć zgłoszenie, ale za cło i VAT importowy odpowiada importer." },
    ],
    related: ["/pl/blog/dokumenty-importowe-uk", "/pl/blog/koszty-importu-do-uk", "/pl/import-do-wielkiej-brytanii", "/pl/blog/import-do-uk-przewodnik", "/pl/rozladunek-kontenerow", "/pl/magazyn-w-wielkiej-brytanii", "/pl/magazyn-essex", "/pl/blog/sklad-celny-czy-towar-oclony"],
    quote: { label: "Zapytaj o odprawę celną", service: "freight-customs" },
  },
  {
    slug: "/pl/obsluga-ladunkow",
    kind: "service",
    serviceType: "Obsługa ładunków",
    modified: MODIFIED,
    title: "Obsługa ładunków w UK: rozładunek i przepakowanie",
    description: "Obsługa ładunków w Essex: rozładunek pojazdów i kontenerów, załadunek, palety i kartony, sortowanie, przepakowanie, etykietowanie i przygotowanie wysyłek.",
    label: "Obsługa ładunków",
    eyebrow: "Prace magazynowe w UK",
    h1: "Obsługa ładunków w Wielkiej Brytanii",
    lead:
      "Obsługa ładunków to fizyczna praca z towarem w magazynie: rozładunek i załadunek pojazdów, przemieszczanie palet i kartonów, sortowanie, przepakowanie, etykietowanie lub ponowne etykietowanie oraz przygotowanie wysyłek. LondraDepo wykonuje te usługi w magazynie w Rayleigh w Essex, a cena zależy od rodzaju zadania, wolumenu i zakresu prac.",
    sections: [
      {
        type: "cards",
        h2: "Usługi obsługi ładunków",
        items: [
          { title: "Rozładunek pojazdów", text: "Uporządkowany, kontrolowany rozładunek przyjeżdżających pojazdów i kontenerów." },
          { title: "Załadunek pojazdów", text: "Załadunek pojazdów gotowych do wysyłki." },
          { title: "Obsługa palet", text: "Bezpieczne przemieszczanie i rozmieszczanie palet w magazynie." },
          { title: "Obsługa kartonów", text: "Przyjęcie, liczenie i odkładanie kartonów na miejsca składowania." },
          { title: "Kontrola przyjęcia", text: "Przyjęcie i sprawdzenie dostarczonego towaru." },
          { title: "Sortowanie", text: "Sortowanie towaru według rodzaju, rozmiaru lub miejsca przeznaczenia." },
          { title: "Przepakowanie", text: "Przepakowanie produktów, gdy jest to potrzebne." },
          { title: "Etykietowanie", text: "Etykietowanie i ponowne etykietowanie produktów zgodnie z wymogami wysyłki." },
          { title: "Przygotowanie wysyłek", text: "Przygotowanie towaru do wysyłki." },
        ],
      },
    ],
    faqs: [
      { q: "Jakie prace obejmuje obsługa ładunków?", a: "Obsługa ładunków obejmuje rozładunek i załadunek pojazdów, obsługę palet i kartonów, kontrolę przyjęcia, sortowanie, przepakowanie, etykietowanie oraz przygotowanie wysyłek w magazynie w Essex." },
      { q: "Czy przepakowujecie uszkodzony lub źle oznaczony towar?", a: "Tak. Wymieniamy uszkodzone opakowania, zastępujemy nieprawidłowe etykiety i przepakowujemy towar tak, aby spełniał wymagania sprzedażowe Twoich kanałów." },
      { q: "Czy przygotowujecie towar pod zamówienia z Amazon lub Shopify?", a: "Tak. Przygotowanie produktów, etykietowanie i przygotowanie wysyłek dla platform e-commerce wykonujemy obok naszej usługi fulfillmentu, z tego samego magazynu w Essex." },
      { q: "Jak wyceniana jest obsługa ładunków?", a: "Cena zależy od rodzaju zadania, wolumenu towaru i zakresu usługi. Skontaktuj się z nami przez WhatsApp lub formularz, aby otrzymać wycenę dla Twojej operacji." },
      { q: "Czy możecie ponownie oznaczyć towar przed wysyłką do klientów lub Amazon?", a: "Tak. Ponowne etykietowanie, przepakowanie i sortowanie według SKU należą do obsługi ładunków w magazynie w Essex, także przy przygotowaniu towaru do wysyłki do klientów w UK lub do Amazon FBA." },
    ],
    related: ["/pl/rozladunek-kontenerow", "/pl/magazyn-w-wielkiej-brytanii", "/pl/skladowanie-palet", "/pl/dystrybucja-uk"],
    quote: { label: "Poproś o wycenę obsługi ładunków", service: "repacking" },
  },
  {
    slug: "/pl/dystrybucja-uk",
    kind: "service",
    serviceType: "Dystrybucja w Wielkiej Brytanii",
    modified: MODIFIED,
    title: "Dystrybucja w UK: dostawy palet i paczek",
    description: "Dystrybucja w UK z magazynu w Essex: odbiory towaru, przesunięcia między magazynami, dostawy w Londynie i Essex oraz palety i paczki w całym kraju.",
    label: "Dystrybucja w UK",
    eyebrow: "Transport w Wielkiej Brytanii",
    h1: "Dystrybucja w Wielkiej Brytanii: odbiory, dostawy paletowe i paczkowe",
    lead:
      "LondraDepo koordynuje transport na terenie Wielkiej Brytanii: odbiór towaru z innych lokalizacji w UK, przesunięcia zapasu między magazynami, dostawy lokalne w Londynie i Essex oraz dostawy do Londynu, Birmingham, Manchesteru i dalej w całym kraju. Nie ma stałego minimum: od jednego kartonu do pełnych ładunków paletowych.",
    sections: [
      {
        type: "cards",
        h2: "Usługi dystrybucyjne",
        items: [
          { title: "Odbiory", text: "Odbiór towaru z innej lokalizacji w UK i dostawa do naszego magazynu." },
          { title: "Przesunięcia magazynowe", text: "Przesunięcia wewnątrz magazynu i między magazynami." },
          { title: "Dystrybucja lokalna", text: "Dostawy lokalne w Londynie i Essex." },
          { title: "Dostawy w całym UK", text: "Koordynacja dostaw do każdego regionu Wielkiej Brytanii." },
          { title: "Przygotowanie wysyłek", text: "Przygotowanie towaru do dystrybucji." },
          { title: "Koordynacja", text: "Koordynacja całego procesu transportu od początku do końca." },
        ],
      },
    ],
    faqs: [
      { q: "Czy możecie odebrać towar z innej lokalizacji w UK?", a: "Tak. Koordynujemy odbiory z innych miejsc w Wielkiej Brytanii i dostawę do naszego magazynu w Essex. Szczegóły ustalimy po kontakcie przez WhatsApp lub formularz." },
      { q: "Czy dostarczacie do każdej części Wielkiej Brytanii?", a: "Tak. Z Essex koordynujemy dostawy do Londynu, Birmingham, Manchesteru i pozostałych regionów Wielkiej Brytanii, zarówno paczkowe, jak i paletowe." },
      { q: "Czy jest minimalna wielkość przesyłki?", a: "Nie ma stałego minimum. Koordynujemy wszystko, od pojedynczych małych paczek po duże wysyłki paletowe, z magazynu w Rayleigh w Essex." },
      { q: "Jak wyceniana jest dystrybucja w UK?", a: "Cena zależy od wolumenu przesyłki, odległości i zakresu usługi. Napisz do nas przez WhatsApp lub formularz, a przygotujemy indywidualną wycenę dystrybucji." },
      { q: "Czy oferujecie dostawy paletowe i paczkowe?", a: "Tak. Z Essex koordynujemy dostawy paletowe do hurtowni i klientów branżowych oraz paczki do klientów sklepów internetowych w całej Wielkiej Brytanii, także regularne dostawy dla stałych klientów B2B." },
    ],
    related: ["/pl/obsluga-ladunkow", "/pl/magazyn-w-wielkiej-brytanii", "/pl/magazyn-essex", "/pl/branze/zywnosc-i-opakowania", "/pl/branze/czesci-samochodowe", "/pl/branze"],
    quote: { label: "Poproś o wycenę dystrybucji", service: "distribution" },
  },
  {
    slug: "/pl/fulfillment-amazon-uk",
    kind: "service",
    serviceType: "Fulfillment Amazon",
    modified: MODIFIED,
    title: "Fulfillment Amazon w UK: FBA prep, FBM, magazyn",
    description: "Fulfillment Amazon w UK: FBA prep, zamówienia FBM, składowanie od 3,50 £ + VAT za paletę tygodniowo, Mintsoft WMS i odprawa przez Arca. Bez minimum.",
    label: "Fulfillment Amazon w UK",
    eyebrow: "Dla sprzedawców Amazon UK",
    h1: "Fulfillment Amazon w Wielkiej Brytanii: FBA prep czy FBM?",
    lead:
      "Sprzedawcy Amazon w Wielkiej Brytanii korzystają z jednego z dwóch modeli: Fulfilled by Amazon (FBA), w którym Amazon przechowuje i wysyła Twój towar, albo Fulfilled by Merchant (FBM), w którym każde zamówienie wysyłasz Ty lub Twój magazyn. LondraDepo wspiera firmy sprzedające na Amazon w UK: składowanie zapasu, obsługa zamówień, kompletacja i pakowanie, etykietowanie i dostawy w UK z Essex. Dla towaru wysyłanego do sieci Amazon nasza usługa Amazon FBA prep obejmuje etykiety FNSKU i zgodność z wymogami FBA. " + NOT_PARTNER_AMAZON,
    facts: [
      "Amazon FBA prep i realizacja zamówień FBM z jednego magazynu",
      "Składowanie od 3,50 £ + VAT za paletę tygodniowo",
      "Stany w Mintsoft WMS",
      "Odprawa celna przez Arca Trade Group",
      "Bez stałego minimum",
    ],
    sections: [
      {
        type: "cards",
        h2: "Zakres fulfillmentu Amazon",
        items: [
          { title: "Składowanie zapasu", text: "Bezpieczne składowanie Twojego zapasu Amazon w Wielkiej Brytanii." },
          { title: "Obsługa zamówień", text: "Systematyczna obsługa zamówień z Amazon." },
          { title: "Kompletacja i pakowanie", text: "Pobranie produktów z półki i spakowanie każdego zamówienia." },
          { title: "Etykietowanie", text: "Etykietowanie produktów zgodnie z wymogami Amazon." },
          { title: "Kontrola stanów", text: "Stany magazynowe śledzone w Mintsoft WMS." },
          { title: "Dostawy w UK", text: "Wysyłka zamówień do klientów w Wielkiej Brytanii." },
        ],
      },
      {
        type: "table",
        h2: "Paczka, palety czy cała ciężarówka: jak dostarczyć towar do Amazon UK",
        intro: "Po przygotowaniu w Essex towar trafia do centrum logistycznego wskazanego w planie dostawy na jeden z trzech sposobów.",
        head: ["Opcja", "Na czym polega", "Zwykle pasuje do"],
        rows: [
          ["Small parcel delivery (SPD)", "Kartony z indywidualnymi etykietami wysyłane przez przewoźnika paczkowego", "Kilku kartonów lub pierwszej, testowej wysyłki"],
          ["Less-than-truckload (LTL)", "Palety dzielące naczepę z ładunkami innych nadawców; Amazon Freight opisuje LTL jako zwykle od jednej do sześciu palet", "Regularnych, umiarkowanych wolumenów paletowych"],
          ["Full truckload (FTL)", "Dedykowana naczepa do centrum logistycznego", "Ładunków, które stale wypełniają lub prawie wypełniają naczepę"],
        ],
        note: "Definicje LTL i FTL według brytyjskich wytycznych Amazon Freight (grudzień 2025). Docelowe centrum logistyczne wskazuje Amazon w planie dostawy.",
      },
      {
        type: "links",
        h2: "Kolejne kroki dla sprzedawców Amazon",
        items: [
          { href: "/pl/amazon-fba-prep", title: "Amazon FBA prep", text: "Etykiety FNSKU, pakowanie i zasady paletowe Amazon UK.", tag: "Usługa" },
          { href: "/pl/centra-amazon-w-uk", title: "Centra logistyczne Amazon w UK", text: "Gdzie są brytyjskie centra Amazon i jak daleko od nas.", tag: "Przewodnik" },
          { href: "/pl/odprawa-celna-uk", title: "Odprawa celna w UK", text: "Zgłoszenia importowe i odbiór z portu przez Arca Trade Group.", tag: "Usługa" },
        ],
      },
      { type: "sources", h2: "Źródła", items: AMAZON_SOURCES },
    ],
    faqs: [
      { q: "Czy LondraDepo jest oficjalnym partnerem Amazon?", a: "Nie. LondraDepo nie jest oficjalnym partnerem Amazon. Zapewniamy niezależne składowanie zapasu i wsparcie fulfillmentu dla firm sprzedających na Amazon w Wielkiej Brytanii." },
      { q: "Czy oferujecie także przygotowanie towaru do FBA?", a: "Tak. Usługa Amazon FBA prep obejmuje etykiety FNSKU, pakowanie zgodne z wymogami Amazon i przygotowanie wysyłek; szczegóły opisujemy na stronie Amazon FBA prep." },
      { q: "Czym różni się Amazon FBA od FBM?", a: "W FBA Amazon przechowuje Twój towar i wysyła zamówienia, więc towar musi być najpierw przygotowany według zasad Amazon. W FBM każde zamówienie wysyłasz Ty lub Twój magazyn. LondraDepo obsługuje oba modele z Essex." },
      { q: "Czy dostarczacie przygotowany towar do centrów Amazon w UK?", a: "Tak. LondraDepo etykietuje i pakuje Twój towar zgodnie z wymogami Amazon w Essex i dostarcza go do centrum logistycznego Amazon w UK wskazanego w Twoim planie dostawy." },
      { q: "Czy mogę jednocześnie korzystać z FBA i FBM?", a: "Tak. Część zapasu możesz trzymać w LondraDepo na potrzeby FBM i innych kanałów, a przygotowane partie wysyłać do Amazon FBA, dzięki czemu nie zależysz od jednego modelu fulfillmentu." },
    ],
    related: ["/pl/fulfillment-shopify-uk", "/pl/amazon-fba-prep", "/pl/magazyn-dla-sprzedawcow-amazon", "/pl/centra-amazon-w-uk", "/pl/blog/amazon-fba-czy-fulfillment-uk"],
    quote: { label: "Poproś o wycenę fulfillmentu Amazon", service: "amazon-prep" },
  },
  {
    slug: "/pl/magazyn-essex",
    kind: "service",
    serviceType: "Magazynowanie",
    modified: MODIFIED,
    title: "Magazyn w Essex pod Londynem: Rayleigh, SS6 7FY",
    description: "Magazyn w Rayleigh w Essex (SS6 7FY): ok. 40 minut do wschodniego Londynu, 20–30 minut do Tilbury i London Gateway, przyjęcie FCL/LCL, palety od 3,50 £ + VAT.",
    label: "Magazyn w Essex",
    eyebrow: "Lokalizacja magazynu",
    h1: "Magazyn w Essex pod Londynem",
    lead:
      "Magazyn LondraDepo mieści się pod adresem Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY. Do wschodniego Londynu jest stąd około 40 minut drogą A127, do portów Tilbury i London Gateway 20–30 minut, a do Felixstowe około 62 mile (mniej więcej 1¼ godziny) drogą. Rampa załadunkowa i szeroka brama pozwalają na rozładunek kontenerów i dostaw paletowych.",
    facts: [
      "Ok. 40 minut do wschodniego Londynu, ok. 1 godzina do centrum (A127)",
      "13 mil do London Gateway, 16 mil do Tilbury",
      "Ok. 1–1¼ godziny drogą do Felixstowe, największego portu kontenerowego w UK",
      "Blisko centrów Amazon UK w Tilbury i Dartford",
      "Bezpośrednie przyjęcie kontenerów FCL i LCL",
    ],
    sections: [
      {
        type: "text",
        h2: "Lokalizacja i dojazd",
        paras: [
          "Magazyn znajduje się na terenie przemysłowym Arterial Park w Rayleigh. Położenie przy drodze A127 Arterial Road zapewnia bezpośredni dojazd do M25 i Londynu, a kontenery z Felixstowe mogą być dostarczane po drodze.",
          "Rayleigh leży w dystrykcie Rochford w hrabstwie Essex, około 10 km od Southend-on-Sea. Obiekt ma szeroki wjazd i rampę załadunkową dla ciężarówek i przewoźników kontenerowych, odpowiednią do rozładunku FCL i towaru na paletach.",
        ],
      },
      {
        type: "table",
        h2: "Odległości drogowe z Rayleigh (SS6 7FY)",
        head: ["Cel", "Odległość", "Czas dojazdu"],
        rows: [
          ["DP World London Gateway", "ok. 13 mil", "ok. 20 minut"],
          ["Port Tilbury", "ok. 16 mil", "20–30 minut"],
          ["Port Felixstowe", "ok. 62 mile", "ok. 1–1¼ godziny"],
          ["Centrum Londynu", "ok. 37 mil", "ok. 1 godzina"],
          ["Amazon LCY2 (Tilbury)", "ok. 16 mil", "—"],
        ],
      },
      {
        type: "cards",
        h2: "Usługi w magazynie w Essex",
        items: [
          { title: "Przyjęcie kontenerów", text: "Przesyłki FCL i LCL są przyjmowane, rozładowywane i wprowadzane na stan." },
          { title: "Składowanie palet", text: "Towar na paletach i luzem składujemy w bezpiecznej przestrzeni magazynowej." },
          { title: "Fulfillment", text: "Zamówienia są kompletowane, pakowane i wysyłane do klientów." },
          { title: "Amazon prep", text: "Przygotowanie zgodne z wymogami FBA i wysyłka do Amazon." },
          { title: "Odprawa celna", text: "Zgłoszenia importowe i doradztwo w kodach towarowych przez Arca Trade Group." },
          { title: "Dystrybucja", text: "Dostawy w całej Wielkiej Brytanii przez naszych partnerów przewozowych." },
        ],
      },
    ],
    faqs: [
      { q: "Pod jakim adresem działa magazyn w Essex?", a: "Magazyn LondraDepo mieści się pod adresem Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, z bezpośrednim dojazdem do A127 i M25. Obsługuje firmy importujące do UK i sprzedające w całej Wielkiej Brytanii." },
      { q: "Jak daleko jest magazyn w Essex od Londynu?", a: "Magazyn leży około 37 mil drogą od centrum Londynu i około 40 minut od wschodniego Londynu drogą A127. Nie jest w samym Londynie, ale jest dobrze położony do obsługi Londynu i południowo-wschodniej Anglii." },
      { q: "Które porty są najbliżej magazynu w Rayleigh?", a: "DP World London Gateway jest około 13 mil drogą, a port Tilbury około 16 mil, w obu przypadkach około 20 minut samochodem. Port Felixstowe znajduje się około 62 mile od magazynu." },
      { q: "Czy magazyn w Essex przyjmuje pełne kontenery?", a: "Tak. Magazyn przyjmuje kontenery FCL 20 ft, 40 ft i 40 ft high cube, a także dostawy LCL i częściowe ładunki paletowe. Każda dostawa jest liczona, sprawdzana pod kątem widocznych uszkodzeń i wprowadzana do Mintsoft WMS." },
      { q: "Ile kosztuje składowanie w magazynie w Essex?", a: "Składowanie standardowej palety zaczyna się od 3,50 £ + VAT tygodniowo, więc 10 palet przez 4 tygodnie kosztuje od 140 £ + VAT. Przyjęcie towaru, obsługę, fulfillment i dostawę wyceniamy dla Twojej operacji." },
    ],
    related: ["/pl/magazyn-london-gateway-tilbury", "/pl/magazyn-port-felixstowe", "/pl/lokalizacje/logistyka-port-magazyn", "/pl/rozladunek-kontenerow", "/pl/import-do-wielkiej-brytanii", "/pl/skladowanie-palet", "/pl/fulfillment-wielka-brytania", "/pl/magazyn-londyn", "/pl/zalety-magazynu-w-uk", "/pl/o-nas"],
    quote: { label: "Poproś o wycenę magazynowania w Essex", service: "storage" },
  },
];
