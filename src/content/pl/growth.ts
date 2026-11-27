import type { EnPage } from "../en/types";
import { teamQuote } from "@/content/quotes";

/**
 * Polish growth pages (wave 2), translated from src/content/en/growth.ts and rendered by EnPageView in Polish.
 * Facts are limited to what the EN pages state: the Rayleigh site, road distances from SS6 7FY (OSRM, 10.11.2026),
 * FCL/LCL and 40HC receiving, the £3.50 + VAT pallet rate, Mintsoft WMS, Arca Trade Group freight and customs,
 * case-study figures. Not a bonded warehouse, not at a port. The team speaks English and Turkish, so no page
 * promises Polish-language service. English-only widgets (calculator, planner, routemap, checklist) are omitted.
 * Team quotes stay in their original English wording.
 */
const MODIFIED = "2026-11-28";

export const plGrowth: EnPage[] = [
  {
    slug: "/pl/rozladunek-kontenerow",
    kind: "service",
    serviceType: "Rozładunek kontenerów",
    modified: MODIFIED,
    title: "Rozładunek kontenerów w Essex: FCL i LCL",
    description:
      "Rozładunek kontenerów 20ft, 40ft i 40ft HC (FCL i LCL) w Essex: liczenie, kontrola uszkodzeń, paletyzacja, rejestracja w WMS i składowanie w jednym miejscu.",
    label: "Rozładunek kontenerów",
    eyebrow: "Essex · blisko Tilbury, London Gateway i trasy do Felixstowe",
    h1: "Rozładunek kontenerów w Essex (FCL i LCL)",
    lead:
      "LondraDepo rozładowuje dostawy FCL i LCL w magazynie Unit 19 Arterial Park w Rayleigh w Essex, w tym kontenery 20ft, 40ft i 40ft high-cube. Każdą dostawę liczymy, sprawdzamy pod kątem widocznych uszkodzeń, w razie potrzeby paletyzujemy lub etykietujemy i rejestrujemy w systemie Mintsoft WMS, a następnie składujemy albo przygotowujemy do dalszej dystrybucji w Wielkiej Brytanii.",
    facts: [
      "Przyjęcie FCL i LCL; co miesiąc kontenery 40ft high-cube dla klienta z branży spożywczej",
      "Rampa załadunkowa i szeroka brama dla ciężarówek i przewoźników kontenerów",
      "Liczenie, zdjęcia uszkodzeń i raporty rozbieżności",
      "Ponowna paletyzacja, etykietowanie i sortowanie według SKU",
      "Składowanie od 3,50 £ + VAT za paletę tygodniowo lub cross-docking do dalszej dostawy",
    ],
    sections: [
      {
        type: "steps",
        h2: "Jak przebiega rozładunek kontenera",
        items: [
          { title: "Awizacja", text: "Przesyłasz numer kontenera, ETA, listę pakunkową i informację, czy towar jest na paletach czy luzem, z liczbą kartonów dla każdego SKU." },
          { title: "Rezerwacja", text: "Uzgadniamy termin dostawy. Transport z portu może zorganizować Arca Trade Group lub Twój spedytor." },
          { title: "Rozładunek", text: "Kontener jest rozładowywany w naszym magazynie w Rayleigh." },
          { title: "Liczenie i kontrola", text: "Kartony i palety liczymy według listy pakunkowej; widoczne uszkodzenia fotografujemy i zgłaszamy." },
          { title: "Przygotowanie", text: "Luźne kartony układamy na paletach, palety etykietujemy, a w razie potrzeby sortujemy towar według SKU." },
          { title: "Składowanie lub wysyłka", text: "Towar trafia do Mintsoft WMS i na regały albo od razu jedzie do klientów lub do Amazon." },
        ],
      },
      teamQuote("yusufGoodsIn"),
      {
        type: "table",
        h2: "Co wpływa na wycenę rozładunku",
        head: ["Czynnik", "Dlaczego ma znaczenie"],
        rows: [
          ["Rozmiar kontenera (20ft, 40ft, 40ft HC)", "Objętość i liczba palet lub kartonów do obsłużenia"],
          ["Towar na paletach czy luzem", "Luźne kartony wymagają więcej czasu i zwykle paletyzacji"],
          ["Liczba SKU i kartonów", "Czas sortowania i etykietowania"],
          ["Uszkodzenia lub rozbieżności", "Dodatkowe zdjęcia, raporty i przepakowanie"],
          ["Kolejny krok", "Składowanie, cross-docking lub natychmiastowa dalsza dostawa"],
        ],
        note: "Rozładunek wyceniamy dla każdej dostawy osobno. Składowanie zaczyna się od 3,50 £ + VAT za paletę tygodniowo.",
      },
      {
        type: "text",
        h2: "Dlaczego rozładunek w Essex, a nie w porcie",
        paras: [
          "Nasz magazyn jest około 30 minut od portu Tilbury i mniej więcej 1–1¼ godziny drogą od Felixstowe, z bezpośrednim dojazdem do A127 i M25. Rozładunek, składowanie, kompletacja zamówień i dystrybucja w UK odbywają się w jednym miejscu, więc towar jest przeładowywany raz, zamiast krążyć między placem rozładunkowym w porcie a osobnym magazynem fulfillmentu.",
          "Importerzy sprzedający zarówno firmom, jak i konsumentom mogą z jednej dostawy realizować zamówienia paletowe dla hurtowni i paczki dla klientów sklepu internetowego.",
        ],
      },
    ],
    faqs: [
      { q: "Jakie rozmiary kontenerów rozładowujecie?", a: "Przyjmujemy kontenery FCL 20ft, 40ft i 40ft high-cube, a także dostawy LCL i częściowe ładunki paletowe. W zapytaniu podaj rozmiar kontenera i informację, czy towar jest na paletach czy luzem." },
      { q: "Czy rozładowujecie kontenery z kartonami luzem?", a: "Tak, ale prosimy o wcześniejszą informację o kartonach ładowanych luzem wraz z liczbą kartonów dla każdego SKU. Czas obsługi, paletyzację i ewentualne etykietowanie oceniamy przed przyjazdem kontenera i odpowiednio wyceniamy." },
      { q: "Co się dzieje, gdy towar przyjedzie uszkodzony lub niekompletny?", a: "Widoczne uszkodzenia fotografujemy, a braki lub nadwyżki względem listy pakunkowej zgłaszamy Tobie, aby można było złożyć reklamację u dostawcy lub przewoźnika." },
      { q: "Czy możecie zorganizować transport kontenera z portu?", a: "Tak. Arca Trade Group, firma prowadząca LondraDepo, może zorganizować transport z portu do naszego magazynu w Rayleigh. Dostawę może też zrealizować Twój własny spedytor." },
      { q: "Czy rozładowany towar może od razu pojechać dalej?", a: "Tak. Towar można przeładować w systemie cross-docking do klientów w UK lub do Amazon albo składować go i wydawać w miarę napływu zamówień." },
    ],
    related: ["/pl/rodzaje-kontenerow", "/pl/magazyn-london-gateway-tilbury", "/pl/magazyn-port-felixstowe", "/pl/import-do-wielkiej-brytanii", "/pl/lokalizacje/logistyka-port-magazyn", "/pl/skladowanie-palet", "/pl/magazyn-essex", "/pl/obsluga-ladunkow", "/pl/branze/czesci-samochodowe"],
    cta: { h2: "Zamów wycenę rozładunku kontenera", text: "Podaj rozmiar kontenera, ETA, listę pakunkową i informację, czy towar jest na paletach czy luzem." },
    quote: { label: "Poproś o wycenę rozładunku", service: "container-unloading" },
  },
  {
    slug: "/pl/branze",
    kind: "hub",
    modified: MODIFIED,
    title: "Magazynowanie w UK według branży",
    description:
      "Magazynowanie i fulfillment w UK według branży: żywność i FMCG, opakowania, części samochodowe, moda i e-commerce, towary gabarytowe i elektronika.",
    label: "Branże",
    eyebrow: "Branże, z którymi pracujemy",
    h1: "Magazynowanie i fulfillment w Wielkiej Brytanii według branży",
    lead:
      "LondraDepo składuje, realizuje zamówienia i dystrybuuje towary producentów i marek z branży spożywczej i FMCG, opakowań i artykułów gastronomicznych, części samochodowych, mody i e-commerce, towarów wielkogabarytowych oraz elektroniki użytkowej. Każda branża poniżej prowadzi do odpowiedniej strony usługi i do studiów przypadków z naszego magazynu w Rayleigh w Essex, aby pokazać, jak firma podobna do Twojej działa w Wielkiej Brytanii.",
    facts: [
      "Działające operacje w UK: żywność, opakowania, motoryzacja, moda, towary gabarytowe i elektronika",
      "Składowanie na paletach, w kartonach i na regałach, stany w Mintsoft WMS",
      "Dystrybucja paletowa B2B i fulfillment paczek e-commerce z tego samego zapasu",
      "Składowanie od 3,50 £ + VAT za paletę tygodniowo",
    ],
    sections: [
      {
        type: "stats",
        h2: "Nasze branże w liczbach",
        items: [
          { value: "6", label: "branż z działającymi operacjami w UK" },
          { value: "7", label: "opublikowanych studiów przypadków" },
          { value: "3,50 £", label: "+ VAT za paletę tygodniowo, stawka początkowa" },
          { value: "EN + TR", label: "języki zespołu operacyjnego" },
        ],
      },
      {
        type: "links",
        h2: "Żywność i FMCG",
        intro: "Żywność w temperaturze otoczenia i szybko rotujące dobra konsumpcyjne składowane na paletach i dostarczane klientom w UK.",
        items: [
          { href: "/pl/studia-przypadkow/dystrybucja-tortilli-uk", title: "Producent tortilli i placków", text: "Od jednej palety testowej do sześciu kontenerów 40ft high-cube miesięcznie.", tag: "Studium przypadku" },
          { href: "/pl/branze/zywnosc-i-opakowania", title: "Opakowania i artykuły gastronomiczne", text: "Magazynowanie i dystrybucja opakowań i artykułów dla gastronomii.", tag: "Branża" },
          { href: "/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze", title: "Producent pudełek na pizzę", text: "Zapas na paletach w UK i dostawy do restauracji według harmonogramu.", tag: "Studium przypadku" },
        ],
      },
      {
        type: "links",
        h2: "Części samochodowe i przemysłowe",
        intro: "Części i materiały, które wymagają ostrożnej obsługi, kontroli stanów na poziomie SKU i dostaw do dealerów lub warsztatów.",
        items: [
          { href: "/pl/branze/czesci-samochodowe", title: "Magazynowanie części samochodowych", text: "Składowanie i dystrybucja części OEM i aftermarket.", tag: "Branża" },
          { href: "/pl/studia-przypadkow/magazyn-czesci-samochodowych", title: "Dostawca części OEM i aftermarket", text: "Składowanie z kontrolą uszkodzeń i dostawy do dealerów w całej Wielkiej Brytanii.", tag: "Studium przypadku" },
          { href: "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych", title: "Producent pokrowców i ekoskóry", text: "Realizacja zamówień z eBay, Amazon i od warsztatów tego samego dnia.", tag: "Studium przypadku" },
        ],
      },
      {
        type: "links",
        h2: "Moda i marki e-commerce",
        intro: "Marki internetowe, które potrzebują kompletacji i pakowania, obsługi zwrotów i szybkiej dostawy w UK.",
        items: [
          { href: "/pl/studia-przypadkow/cruyff-fulfillment-uk", title: "Marka modowa Cruyff", text: "Zamówienia internetowe z UK przeniesione z Holandii do naszego magazynu w Essex.", tag: "Studium przypadku" },
          { href: "/pl/fulfillment-shopify-uk", title: "Fulfillment Shopify w UK", text: "Składowanie, pick and pack i wysyłka w UK dla sklepów Shopify.", tag: "Usługa" },
          { href: "/pl/fulfillment-ecommerce", title: "Fulfillment e-commerce", text: "Od zamówienia online do drzwi klienta.", tag: "Usługa" },
        ],
      },
      {
        type: "links",
        h2: "Towary wielkogabarytowe i elektronika",
        intro: "Duże lub techniczne produkty, które wymagają miejsca, ostrożnej obsługi lub przygotowania przed wysyłką.",
        items: [
          { href: "/pl/studia-przypadkow/dystrybucja-biezni-uk", title: "Marka bieżni do chodzenia", text: "Składowanie towarów gabarytowych, sprzedaż online i dystrybucja do sklepów w UK.", tag: "Studium przypadku" },
          { href: "/pl/studia-przypadkow/stacje-zasilania-uk", title: "Dostawca przenośnych stacji zasilania", text: "Składowanie, aktywacja kart SIM, kontrola naładowania i wysyłka do klientów końcowych.", tag: "Studium przypadku" },
          { href: "/pl/obsluga-ladunkow", title: "Obsługa ładunków", text: "Przepakowanie, ponowne etykietowanie i przygotowanie produktów w Essex.", tag: "Usługa" },
        ],
      },
      {
        type: "links",
        h2: "Eksporterzy wchodzący na rynek brytyjski",
        items: [
          { href: "/pl/magazyn-dla-polskich-firm", title: "Dla firm z Polski", text: "Jak polskie firmy sprzedają w UK po Brexicie, z magazynem w Essex.", tag: "Wejście na rynek" },
          { href: "/pl/wejscie-na-rynek-brytyjski", title: "Wejście na rynek brytyjski", text: "Sprzedaż w UK bez własnego magazynu i personelu.", tag: "Wejście na rynek" },
        ],
      },
    ],
    faqs: [
      { q: "Z jakimi branżami pracuje LondraDepo?", a: "Prowadzimy działające operacje w Wielkiej Brytanii dla firm z branży spożywczej i FMCG, opakowań i artykułów gastronomicznych, części samochodowych i materiałów tapicerskich, mody i e-commerce, towarów wielkogabarytowych, takich jak bieżnie do chodzenia, oraz elektroniki, takiej jak przenośne stacje zasilania." },
      { q: "Czy ten sam zapas może obsługiwać klientów B2B i internetowych?", a: "Tak. Ten sam zapas w Wielkiej Brytanii może zasilać dostawy paletowe do hurtowni i klientów branżowych oraz paczki dla klientów sklepów internetowych, więc nie trzeba dzielić towaru między kilku operatorów." },
      { q: "Mojej branży nie ma na liście. Czy możecie pomóc?", a: "Prawdopodobnie tak. Opisz produkt, opakowanie, wolumeny i kanały sprzedaży, a przed przygotowaniem wyceny potwierdzimy, czy nasz magazyn w Essex jest dla niego odpowiedni." },
      { q: "Czy macie studia przypadków z mojej branży?", a: "LondraDepo opublikowało studia przypadków z branży spożywczej i FMCG, opakowań B2B, części samochodowych, materiałów tapicerskich, mody, towarów wielkogabarytowych i elektroniki. Każda sekcja na tej stronie prowadzi do odpowiednich przykładów." },
      { q: "Jak uzyskać wycenę dla mojej branży?", a: "Wypełnij formularz zapytania, podając rodzaj produktu, opakowanie, szacowaną liczbę palet lub kartonów, miesięczną liczbę zamówień i kanały sprzedaży. Zespół odpowie e-mailem z propozycją składowania, obsługi i dostawy." },
    ],
    related: ["/pl/magazyn-w-wielkiej-brytanii", "/pl/fulfillment-wielka-brytania", "/pl/studia-przypadkow", "/pl/wejscie-na-rynek-brytyjski"],
    cta: { h2: "Opowiedz nam o swoich produktach", text: "Podaj branżę, rodzaj produktu, wolumeny i kanały sprzedaży, a zaproponujemy rozwiązanie w Wielkiej Brytanii." },
    quote: { label: "Poproś o wycenę dla swojej branży", service: "storage" },
  },
  {
    slug: "/pl/branze/zywnosc-i-opakowania",
    parent: "/pl/branze",
    kind: "service",
    serviceType: "Magazynowanie i dystrybucja opakowań",
    modified: MODIFIED,
    title: "Magazyn opakowań i artykułów gastronomicznych UK",
    description:
      "Magazyn i planowe dostawy B2B w UK dla pudełek na pizzę, opakowań na wynos i jednorazówek: składowanie palet, ewidencja partii i alerty niskiego stanu.",
    label: "Opakowania i artykuły gastronomiczne",
    eyebrow: "Branża · opakowania i zaopatrzenie gastronomii",
    h1: "Magazynowanie i dystrybucja opakowań i artykułów gastronomicznych",
    lead:
      "Pudełka na pizzę, pojemniki na wynos i jednorazowe artykuły gastronomiczne są duże objętościowo, mają niską wartość na paletę i są potrzebne w przewidywalnym rytmie. LondraDepo składuje je na paletach w Essex i realizuje stałe cotygodniowe lub comiesięczne dostawy do restauracji, sieci i hurtowni w całej Wielkiej Brytanii, tak jak robimy to dla producenta pudełek na pizzę wysyłającego towar z Turcji.",
    facts: [
      "Składowanie na paletach od 3,50 £ + VAT za paletę tygodniowo",
      "Stałe cotygodniowe lub comiesięczne harmonogramy dostaw dla każdego klienta",
      "Ewidencja stanów na poziomie partii, gotowa na scenariusze wycofania",
      "Alerty niskiego stanu, zanim potrzebne będzie uzupełnienie",
      "Dostawy palet i kartonów w całej Wielkiej Brytanii",
    ],
    sections: [
      {
        type: "list",
        h2: "Typowe wyzwania dostawców opakowań",
        items: [
          "Wysyłka z fabryki przy każdym zamówieniu jest powolna i droga",
          "Restauracje potrzebują stałych, przewidywalnych dostaw i nie mogą zostać bez towaru",
          "Towary o dużej objętości i niskiej wartości wymagają oszczędnego składowania na paletach",
          "Klienci zamawiają różne ilości: pełne palety, części palet i pojedyncze kartony",
        ],
      },
      {
        type: "cards",
        h2: "Jak wspieramy dostawców opakowań i artykułów gastronomicznych",
        items: [
          { title: "Składowanie paletowe", text: "Duże objętościowo opakowania w regałach paletowych, uporządkowane i łatwo dostępne." },
          { title: "Programy dostaw", text: "Stałe dni dostaw dla każdej restauracji lub klienta hurtowego." },
          { title: "Kontrola stanów", text: "Minimalne progi stanów z alertami, aby uzupełnienie zostało wysłane na czas." },
          { title: "Ewidencja partii", text: "Stany prowadzone na poziomie partii dla zapewnienia identyfikowalności." },
          { title: "Kompletacja mieszanych zamówień", text: "Pełne palety, części palet lub kartony przygotowane dla każdego klienta z listą dostawy." },
          { title: "Wsparcie importu", text: "Transport i odprawa celna przez Arca Trade Group dla towarów produkowanych za granicą." },
        ],
      },
      {
        type: "links",
        h2: "Studium przypadku",
        items: [
          {
            href: "/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze",
            title: "Pudełka na pizzę: dystrybucja B2B do restauracji w UK",
            text: "Jak producent pudełek na pizzę przeszedł z wysyłek pod każde zamówienie na zapas paletowy w UK i planowe dostawy do restauracji.",
            tag: "Dystrybucja B2B",
          },
        ],
      },
    ],
    faqs: [
      { q: "Czy możecie dostarczać towar do restauracji według stałego harmonogramu?", a: "Tak. Układamy cotygodniowe lub comiesięczne programy dostaw na podstawie Twojej listy klientów i częstotliwości ich zamówień, a towar wydajemy z zapasu paletowego w Essex." },
      { q: "Czy składujecie opakowania przeznaczone do kontaktu z żywnością?", a: "Tak. Opakowania takie jak pudełka na pizzę i pojemniki na wynos składujemy na paletach jako towar niespożywczy. Ewentualne szczególne wymagania dotyczące składowania prosimy podać w zapytaniu ofertowym." },
      { q: "Czy jest minimalny wolumen składowania opakowań?", a: "Nie ma stałego minimum. Operacje paletowe oceniamy indywidualnie, dlatego prosimy o podanie szacowanej liczby palet i typowego rytmu zamówień Twoich klientów." },
      { q: "Czy możecie prowadzić stany opakowań na poziomie partii?", a: "Tak. Stany opakowań mogą być prowadzone na poziomie partii w Mintsoft WMS, co wspiera identyfikowalność i scenariusze wycofania, a alerty niskiego stanu pomagają uzupełnić zapas, zanim restauracjom zabraknie towaru." },
      { q: "Czy możecie zaimportować opakowania wyprodukowane za granicą?", a: "Tak. Arca Trade Group, operator LondraDepo, może zorganizować transport i brytyjską odprawę celną opakowań wyprodukowanych za granicą, a następnie towar jest składowany na paletach w Essex." },
    ],
    related: ["/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze", "/pl/skladowanie-palet", "/pl/dystrybucja-uk", "/pl/import-do-wielkiej-brytanii"],
    cta: { h2: "Porozmawiajmy o składowaniu opakowań", text: "Opisz asortyment, szacowaną liczbę palet i rytm dostaw do Twoich klientów." },
    quote: { label: "Poproś o wycenę dystrybucji opakowań", service: "distribution" },
  },
  {
    slug: "/pl/branze/czesci-samochodowe",
    parent: "/pl/branze",
    kind: "service",
    serviceType: "Magazynowanie części samochodowych",
    modified: MODIFIED,
    title: "Magazyn i dystrybucja części samochodowych w UK",
    description:
      "Magazyn w UK dla części OEM i aftermarket: składowanie według SKU, kontrola uszkodzeń ze zdjęciami, ochronne pakowanie i dostawy do dealerów następnego dnia.",
    label: "Magazyn części samochodowych",
    eyebrow: "Branża · motoryzacja i aftermarket",
    h1: "Magazynowanie i dystrybucja części samochodowych w Wielkiej Brytanii",
    lead:
      "Części samochodowe są trudne w składowaniu i łatwo je uszkodzić: zderzaki i panele są duże, lakierowane powierzchnie się rysują, a liczba SKU sięga tysięcy. LondraDepo składuje w Essex części OEM i aftermarket oraz materiały tapicerskie według SKU, fotografuje ich stan przy przyjęciu i wydaniu, pakuje je ochronnie i wysyła z dostawą na następny dzień lub w 2 dni do dealerów, warsztatów i klientów internetowych w UK.",
    facts: [
      "Składowanie na paletach i półkach według SKU, części OEM i aftermarket oddzielnie",
      "Kontrola uszkodzeń ze zdjęciami przy przyjęciu i wydaniu",
      "Ochronne pakowanie powierzchni lakierowanych i wrażliwych",
      "Dostawy do dealerów i warsztatów na następny dzień lub w 2 dni",
      "W działającej operacji zamówienia z eBay, Amazon i sklepów internetowych realizowane tego samego dnia",
    ],
    sections: [
      {
        type: "cards",
        h2: "Czego dostawcy motoryzacyjni potrzebują od magazynu w UK",
        items: [
          { title: "Składowanie dużych części", text: "Zderzaki, panele drzwi i rolki materiałów wykończeniowych na paletach, bez zgniatania." },
          { title: "Dyscyplina SKU", text: "Części na regałach według SKU, aby za każdym razem wydać właściwy numer części." },
          { title: "Kontrola uszkodzeń", text: "Zdjęcia przy przyjęciu i wydaniu dają każdej części historię stanu na potrzeby reklamacji." },
          { title: "Ochronne pakowanie", text: "Pianka, folia bąbelkowa i sztywne kartony dla części lakierowanych i delikatnych." },
          { title: "Zamówienia branżowe i internetowe", text: "Zamówienia dealerów, warsztatów i marketplace'ów realizowane z tego samego zapasu." },
          { title: "Raporty stanów", text: "Okresowe raporty stanów i alerty niskiego stanu, po angielsku lub turecku." },
        ],
      },
      {
        type: "links",
        h2: "Studia przypadków z motoryzacji",
        items: [
          { href: "/pl/studia-przypadkow/magazyn-czesci-samochodowych", title: "Części OEM i aftermarket: magazyn w UK", text: "Śledzenie uszkodzeń ze zdjęciami i dostawy do dealerów w UK na następny dzień.", tag: "Motoryzacja" },
          { href: "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych", title: "Pokrowce na siedzenia i ekoskóra", text: "Realizacja zamówień z eBay, Amazon i od warsztatów B2B tego samego dnia.", tag: "Motoryzacja i tapicerka" },
        ],
      },
    ],
    faqs: [
      { q: "Czy składujecie duże części samochodowe?", a: "Tak. Składujemy części każdej wielkości, w tym przednie i tylne zderzaki oraz panele drzwi, wykorzystując systemy regałów paletowych i półkowych w naszym magazynie w Essex." },
      { q: "Jak chronicie lakierowane części przed uszkodzeniem?", a: "Każda część jest wizualnie sprawdzana i fotografowana przy przyjęciu oraz rejestrowana w systemie, a do wysyłki pakujemy ją w piankę, folię bąbelkową i sztywne kartony." },
      { q: "Czy dostarczacie części do warsztatów i dealerów w całym UK?", a: "Tak. Z Essex dostarczamy części do dealerów, warsztatów i klientów internetowych w całej Wielkiej Brytanii, z opcją dostawy na następny dzień lub w ciągu 2 dni." },
      { q: "Czy możecie sprowadzić dla nas części z zagranicy?", a: "Tak. Arca Trade Group, operator LondraDepo, może zorganizować transport międzynarodowy i odprawę celną, albo Twój własny spedytor może dostarczyć części bezpośrednio do naszego magazynu." },
      { q: "Czy części OEM i aftermarket są składowane oddzielnie?", a: "Tak. Części składujemy według SKU na paletach i półkach, a zapas OEM i aftermarket trzymamy oddzielnie, aby do każdego zamówienia dealera, warsztatu lub klienta internetowego trafił właściwy numer części." },
    ],
    related: ["/pl/studia-przypadkow/magazyn-czesci-samochodowych", "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych", "/pl/skladowanie-palet", "/pl/dystrybucja-uk", "/pl/import-do-wielkiej-brytanii"],
    cta: { h2: "Otrzymaj propozycję magazynowania części", text: "Podaj liczbę SKU, rozmiary części, szacowaną liczbę palet i kanały zamówień." },
    quote: { label: "Poproś o wycenę magazynu części", service: "storage" },
  },
  {
    slug: "/pl/wejscie-na-rynek-brytyjski",
    kind: "service",
    serviceType: "Logistyka wejścia na rynek brytyjski",
    modified: MODIFIED,
    title: "Wejście na rynek brytyjski bez własnego magazynu",
    description:
      "Jak zagraniczne marki wchodzą na rynek UK z zewnętrznym magazynem: wybór modelu sprzedaży, import, start od jednej palety i wzrost do pełnych kontenerów.",
    label: "Wejście na rynek brytyjski",
    eyebrow: "Dla zagranicznych producentów i marek",
    h1: "Wejście na rynek brytyjski z zewnętrznym magazynem",
    lead:
      "Aby sprzedawać w Wielkiej Brytanii, nie potrzebujesz własnego magazynu, personelu ani floty. Firmy z zagranicy mogą wysłać towar do LondraDepo w Essex, odprawić go i składować, a od pierwszego dnia zaopatrywać brytyjskich klientów hurtowych, kupujących online lub Amazon. Jeden z naszych klientów z branży spożywczej zaczął od jednej palety testowej, a dziś wysyła sześć kontenerów 40ft high-cube miesięcznie.",
    facts: [
      "Start od małego wolumenu: bez stałego minimum, wysyłki paletowe lub częściowe",
      "Składowanie palet od 3,50 £ + VAT za paletę tygodniowo",
      "Transport i odprawa celna przez Arca Trade Group",
      "Klienci wysyłający towar z Turcji, Holandii i innych krajów",
      "Obsługa w języku angielskim i tureckim",
    ],
    sections: [
      {
        type: "steps",
        h2: "Praktyczna droga na rynek brytyjski",
        items: [
          { title: "Wybierz model sprzedaży", text: "Hurt do brytyjskich sklepów i odbiorców branżowych, e-commerce bezpośrednio do konsumentów, Amazon lub połączenie tych kanałów." },
          { title: "Przygotuj import", text: "Ustal, kto będzie importerem, uzyskaj numer GB EORI, potwierdź kody towarowe i oznakowanie wymagane w UK." },
          { title: "Wyślij wolumen testowy", text: "Zacznij od jednej lub kilku palet, aby sprawdzić popyt bez podpisywania umowy najmu." },
          { title: "Odprawa, przyjęcie i składowanie", text: "Towar jest odprawiany, rozładowywany, liczony i rejestrowany w naszym WMS w Rayleigh." },
          { title: "Realizacja i dostawa", text: "Kompletujemy zamówienia B2B i internetowe i dostarczamy je w całej Wielkiej Brytanii." },
          { title: "Skalowanie", text: "Wraz ze wzrostem sprzedaży przechodzisz na regularne pełne kontenery; składowanie i obsługa rosną razem z Tobą." },
        ],
      },
      {
        type: "table",
        h2: "Który model sprzedaży w UK pasuje do Ciebie?",
        head: ["Model", "Typowy klient", "Co robi LondraDepo"],
        rows: [
          ["Hurt / B2B", "Sklepy, dystrybutorzy, odbiorcy branżowi", "Składowanie palet, kompletacja palet i kartonów, planowe dostawy w UK"],
          ["E-commerce (DTC)", "Kupujący online przez Twoją stronę lub Shopify", "Pick and pack, wysyłka paczek, zwroty"],
          ["Amazon FBA", "Klienci Amazon, Prime", "FBA prep, etykiety FNSKU, dostawa do Amazon"],
          ["Amazon FBM", "Klienci Amazon obsługiwani przez Ciebie", "Składowanie zapasu i realizacja zamówień z Essex"],
        ],
      },
      {
        type: "stats",
        h2: "Dowody z działających operacji",
        items: [
          { value: "1 → 6 × 40HC", label: "marka spożywcza: od palety testowej do kontenerów co miesiąc" },
          { value: "~80%", label: "szybsza dostawa w UK dla Cruyff po przeniesieniu z Holandii" },
          { value: "7", label: "opublikowanych operacji w UK z różnych branż" },
        ],
      },
    ],
    faqs: [
      { q: "Czy do sprzedaży w UK potrzebuję brytyjskiej spółki?", a: "Niekoniecznie. Wiele firm z zagranicy sprzedaje w Wielkiej Brytanii z numerem GB EORI i zewnętrznym magazynem. Właściwa struktura zależy od modelu sprzedaży i sytuacji VAT, dlatego warto zasięgnąć porady specjalisty." },
      { q: "Od jakiego najmniejszego wolumenu mogę zacząć?", a: "Nie ma stałego minimum. Test z wysyłką paletową lub częściowym ładunkiem to częsty pierwszy krok, zanim firma przejdzie na regularne pełne kontenery do Wielkiej Brytanii." },
      { q: "Czy pomagacie w oznakowaniu na rynek UK i kodach towarowych?", a: "Tak. Udzielamy wskazówek operacyjnych dotyczących oznakowania w UK i wstępnie sprawdzamy kody towarowe, a zespół celny Arca Trade Group doradza w klasyfikacji. Ostateczna zgodność pozostaje obowiązkiem importera." },
      { q: "Czy oferujecie doradztwo przy wejściu na rynek?", a: "Tak. Wsparcie przy wstępnym planie operacyjnym, modelu magazynu i fulfillmentu, konfiguracji marketplace'ów i dystrybucji w UK jest dostępne i wyceniane osobno od usług magazynowych." },
      { q: "Czy mogę przetestować rynek brytyjski przed dużymi zamówieniami?", a: "Tak. Bez stałego minimum możesz zacząć od jednej palety testowej. Producent tortilli z naszych studiów przypadków wszedł do UK w ten sposób, a dziś wysyła sześć kontenerów 40ft high-cube miesięcznie." },
    ],
    related: ["/pl/import-do-wielkiej-brytanii", "/pl/magazyn-dla-polskich-firm", "/pl/blog/import-do-uk-przewodnik", "/pl/zalety-magazynu-w-uk", "/pl/studia-przypadkow/dystrybucja-tortilli-uk", "/pl/cennik-magazynowania"],
    cta: { h2: "Zaplanuj wejście na rynek brytyjski", text: "Napisz, co sprzedajesz, skąd wysyłasz towar i jak chcesz sprzedawać w Wielkiej Brytanii." },
    quote: { label: "Zaplanuj wejście na rynek UK", service: "other" },
  },
  {
    slug: "/pl/lokalizacje/logistyka-port-magazyn",
    kind: "service",
    serviceType: "Logistyka port–magazyn",
    modified: MODIFIED,
    title: "Logistyka z portu do magazynu: Felixstowe, Tilbury",
    description:
      "Logistyka z portów Felixstowe, London Gateway i Tilbury do magazynu w Essex: odległości drogowe, odprawa celna, transport, rozładunek i dystrybucja w UK.",
    label: "Logistyka port–magazyn",
    eyebrow: "Felixstowe · London Gateway · Tilbury",
    h1: "Z Felixstowe, London Gateway lub Tilbury do naszego magazynu w Essex",
    lead:
      "Nasz magazyn w Unit 19 Arterial Park w Rayleigh (SS6 7FY) nie znajduje się w porcie, ale leży blisko trzech dużych portów: London Gateway jest około 13 mil drogą, port Tilbury około 16 mil, a port Felixstowe około 62 mil. Kontenery przypływające do każdego z nich można odprawić, przewieźć do Rayleigh, rozładować i składować albo od razu wysłać do klientów w Wielkiej Brytanii.",
    facts: [
      "London Gateway: ok. 13 mil (21 km) drogą",
      "Port Tilbury: ok. 16 mil (26 km) drogą",
      "Port Felixstowe: ok. 62 mil (99 km) drogą",
      "Centrum Londynu: ok. 37 mil (59 km); wschodni Londyn ok. 40 minut",
      "Odprawa celna i transport przez Arca Trade Group",
    ],
    sections: [
      {
        type: "table",
        h2: "Odległości drogowe od magazynu",
        head: ["Cel", "Odległość drogowa", "Typowy czas autem (bez korków)"],
        rows: [
          ["DP World London Gateway (SS17)", "ok. 13 mil / 21 km", "ok. 20 minut"],
          ["Port Tilbury (RM18)", "ok. 16 mil / 26 km", "ok. 20 minut"],
          ["Port Felixstowe (IP11)", "ok. 62 mil / 99 km", "ok. 1¼ godziny"],
          ["Centrum Londynu (Charing Cross)", "ok. 37 mil / 59 km", "ok. 1 godziny"],
        ],
        note: "Wyliczone przez routing drogowy między kodem pocztowym magazynu a kodem pocztowym każdego portu (10 listopada 2026). Czasy dotyczą samochodu osobowego przy płynnym ruchu; ciężarówki, kolejki w porcie i godziny szczytu wydłużają przejazd.",
      },
      {
        type: "steps",
        h2: "Co się dzieje po przypłynięciu kontenera do portu",
        items: [
          { title: "Przypłynięcie i zwolnienie", text: "Armator zwalnia kontener po uregulowaniu frachtu i skompletowaniu dokumentów." },
          { title: "Odprawa celna", text: "Zgłoszenie importowe składa zespół celny Arca Trade Group lub Twoja agencja; cło i VAT importowy są rozliczane." },
          { title: "Rezerwacja transportu", text: "Przewoźnik odbiera kontener z portu i rezerwuje termin dostawy w naszym magazynie." },
          { title: "Rozładunek i kontrola", text: "Rozładowujemy kontener, liczymy towar według listy pakunkowej, fotografujemy widoczne uszkodzenia i rejestrujemy stany w WMS." },
          { title: "Zwrot pustego kontenera", text: "Przewoźnik zwraca pusty kontener do portu lub depo, najlepiej w czasie wolnym armatora, aby uniknąć opłat za przetrzymanie (detention)." },
          { title: "Składowanie lub dalsza dostawa", text: "Towar jest składowany, kompletowany do zamówień lub przeładowywany w cross-docking do klientów w UK i do Amazon." },
        ],
      },
      {
        type: "text",
        h2: "Który port pasuje do Twojego towaru?",
        paras: [
          "Felixstowe to największy port kontenerowy w Wielkiej Brytanii, obsługujący wiele serwisów oceanicznych z Azji. London Gateway w Thurrock to port głębokowodny dla dużych kontenerowców i najbliższy z trzech portów do naszego magazynu. Tilbury obsługuje kontenery, ładunki ro-ro i drobnicę na Tamizie. Port zwykle wynika z wyboru armatora i trasy; przyjmujemy dostawy z każdego z nich.",
        ],
      },
    ],
    faqs: [
      { q: "Jak daleko jest magazyn od poszczególnych portów kontenerowych w UK?", a: "Drogą z Rayleigh w Essex do DP World London Gateway jest około 13 mil, do portu Tilbury około 16 mil, a do portu Felixstowe około 62 mil. London Gateway i Tilbury to około 20 minut autem, Felixstowe około 1¼ godziny." },
      { q: "Czy magazyn znajduje się w porcie?", a: "Nie. Nasz magazyn jest w Rayleigh w Essex, około 13 mil od London Gateway i 16 mil od Tilbury. Kontenery są przewożone z portu do naszego obiektu, gdzie odbywa się rozładunek." },
      { q: "Czy organizujecie transport z Felixstowe, Tilbury lub London Gateway?", a: "Tak. Arca Trade Group, operator LondraDepo, może zorganizować odprawę celną i transport kontenera z portu, a alternatywnie towar może do nas dostarczyć Twój spedytor." },
      { q: "Czy możecie rozładować kontener w porcie?", a: "Nie. Rozładunek odbywa się w naszym magazynie w Rayleigh, gdzie towar można od razu składować i realizować z niego zamówienia bez dodatkowego przeładunku." },
      { q: "Kto rezerwuje termin dostawy do magazynu?", a: "Termin dostawy rezerwuje przewoźnik lub spedytor po awizacji. Prześlij numer kontenera, ETA, listę pakunkową i liczbę kartonów dla każdego SKU, aby można było zaplanować rozładunek z wyprzedzeniem." },
    ],
    related: ["/pl/magazyn-london-gateway-tilbury", "/pl/magazyn-port-felixstowe", "/pl/rozladunek-kontenerow", "/pl/import-do-wielkiej-brytanii", "/pl/magazyn-essex"],
    cta: { h2: "Zaplanuj przewóz z portu do magazynu", text: "Podaj port przeznaczenia, rozmiar kontenera, ETA i co ma się stać z towarem dalej." },
    quote: { label: "Poproś o wycenę transportu z portu", service: "container-unloading" },
  },
  {
    slug: "/pl/rodzaje-kontenerow",
    kind: "service",
    serviceType: "Rozładunek i składowanie kontenerów",
    modified: MODIFIED,
    title: "Rodzaje kontenerów: 20ft, 40ft i 40ft HC",
    description:
      "Kontenery 20ft, 40ft i 40ft high-cube w porównaniu: typowa objętość, liczba palet, FCL czy LCL oraz rozładunek w naszym magazynie w Essex pod Londynem.",
    label: "Rodzaje kontenerów",
    eyebrow: "Przewodnik importera",
    h1: "Rodzaje kontenerów: 20ft, 40ft i 40ft high-cube",
    lead:
      "Większość frachtu morskiego do Wielkiej Brytanii płynie w trzech rozmiarach kontenerów suchych: 20ft, 40ft i 40ft high-cube (40HC). Kontener 20ft ma typową objętość wewnętrzną ok. 33 m³ i mieści na podłodze ok. 10 standardowych palet brytyjskich; 40ft ma ok. 67 m³ i mieści ok. 20 palet; 40ft high-cube ma tę samą podłogę, ale jest ok. 30 cm wyższy, co daje ok. 76 m³ i pasuje do lekkich, dużych objętościowo kartonów. Mniejsze ładunki płyną jako LCL (drobnica), dzieląc kontener z innymi nadawcami. LondraDepo rozładowuje wszystkie trzy rozmiary, z towarem luzem lub na paletach, w magazynie w Rayleigh w Essex, 13–16 mil od London Gateway i Tilbury.",
    facts: [
      "20ft: ok. 33 m³, ok. 10 palet brytyjskich w jednej warstwie",
      "40ft: ok. 67 m³, ok. 20 palet brytyjskich w jednej warstwie",
      "40ft HC: ok. 76 m³, podłoga jak w 40ft, ok. 30 cm wyżej",
      "LCL: wspólny kontener, opłata według objętości lub wagi",
      "Przyjęcie i rozładunek FCL i LCL w Essex",
    ],
    sections: [
      {
        type: "table",
        h2: "20ft, 40ft i 40ft high-cube w porównaniu",
        head: ["Kontener", "Typowa objętość wewnętrzna", "Palety brytyjskie na podłodze", "Zwykle pasuje do"],
        rows: [
          ["20ft suchy", "ok. 33 m³", "ok. 10", "Ciężkich, zwartych towarów; mniejszych zamówień"],
          ["40ft suchy", "ok. 67 m³", "ok. 20", "Większych zamówień towarów mieszanych lub na paletach"],
          ["40ft high-cube (40HC)", "ok. 76 m³", "ok. 20", "Lekkich, dużych kartonów, które wykorzystują dodatkową wysokość"],
          ["LCL (drobnica)", "Płacisz za zajęte m³", "Dowolnie", "Ładunków znacznie mniejszych niż pełny kontener"],
        ],
        note: "Typowe wartości dla standardowych kontenerów suchych; dokładne wymiary i ładowność zależą od armatora i kontenera. Liczba palet dotyczy standardowych palet brytyjskich (1200 × 1000 mm) w jednej warstwie i zależy od rozmiaru palet i sposobu załadunku.",
      },
      {
        type: "text",
        h2: "FCL czy LCL?",
        paras: [
          "Przy pełnym ładunku kontenerowym (FCL) rezerwujesz cały kontener, niezależnie od tego, czy jest pełny, a towar płynie zaplombowany od dostawcy do Wielkiej Brytanii. Przy ładunku drobnicowym (LCL) Twoje kartony dzielą kontener z innymi, cena zwykle zależy od objętości lub wagi, a po przypłynięciu ładunek jest rozdzielany w terminalu konsolidacyjnym.",
          "W praktyce warto porównać cenę LCL za Twoje metry sześcienne z ceną kontenera 20ft, gdy przesyłka osiąga około połowy kontenera 20ft. Objętość policzysz, mnożąc długość, szerokość i wysokość kartonu w metrach przez liczbę kartonów.",
        ],
      },
      {
        type: "steps",
        h2: "Co się dzieje, gdy kontener dociera do naszego magazynu",
        items: [
          { title: "Awizacja", text: "Przed przyjazdem przesyłasz numer kontenera, ETA, listę pakunkową i liczbę kartonów dla każdego SKU." },
          { title: "Odprawa i transport", text: "Składane jest zgłoszenie importowe, a kontener jedzie z portu do Rayleigh w uzgodnionym terminie." },
          { title: "Rozładunek", text: "Kartony ładowane luzem są rozładowywane ręcznie; ładunki na paletach wózkiem widłowym." },
          { title: "Liczenie i kontrola", text: "Towar jest liczony według listy pakunkowej, a widoczne uszkodzenia fotografowane." },
          { title: "Rejestracja stanów", text: "W razie potrzeby kartony są paletyzowane i rejestrowane w Mintsoft WMS, gotowe do składowania, fulfillmentu lub wysyłki do Amazon." },
        ],
      },
      {
        type: "links",
        h2: "Zaplanuj swój kontener",
        items: [
          { href: "/pl/rozladunek-kontenerow", title: "Rozładunek kontenerów", text: "Rozładunek FCL i LCL, liczenie i ponowna paletyzacja w Essex.", tag: "Usługa" },
          { href: "/pl/lokalizacje/logistyka-port-magazyn", title: "Z portu do magazynu", text: "Odległości z Felixstowe, London Gateway i Tilbury oraz kolejne kroki po przypłynięciu.", tag: "Przewodnik" },
          { href: "/pl/blog/incoterms-import-do-uk", title: "Incoterms w imporcie do UK", text: "Kto płaci fracht, cło i VAT przy poszczególnych regułach Incoterms.", tag: "Przewodnik" },
        ],
      },
    ],
    faqs: [
      { q: "Czym różni się kontener 40ft od 40ft high-cube?", a: "Kontener 40ft high-cube ma tę samą podłogę co standardowy 40ft, ale jest około 30 cm wyższy, więc jego typowa objętość wewnętrzna wynosi około 76 m³ wobec około 67 m³. Pasuje do lekkich, dużych kartonów; ciężkie towary zwykle wcześniej osiągają limit wagi." },
      { q: "Ile palet mieści kontener 20ft?", a: "Na podłodze kontenera 20ft mieści się w jednej warstwie około 10 standardowych palet brytyjskich (1200 × 1000 mm), a w kontenerze 40ft lub 40ft high-cube około 20. Rzeczywista liczba zależy od rozmiaru palet, wysokości i sposobu załadunku." },
      { q: "Kiedy wysyłać FCL zamiast LCL?", a: "Porównaj cenę LCL za Twoje metry sześcienne z pełnym kontenerem 20ft, gdy przesyłka osiąga około połowy kontenera 20ft, czyli mniej więcej 15 m³. Powyżej tej objętości FCL jest często tańszy, a towar płynie zaplombowany. LondraDepo przyjmuje w Essex zarówno FCL, jak i LCL." },
      { q: "Czy LondraDepo rozładowuje kontenery z towarem luzem?", a: "Tak. LondraDepo rozładowuje kontenery 20ft, 40ft i 40ft high-cube z kartonami luzem lub na paletach w magazynie w Rayleigh w Essex, liczy kartony według listy pakunkowej, fotografuje widoczne uszkodzenia i paletyzuje towar do składowania." },
      { q: "Ile mil dzieli magazyn w Rayleigh od portów kontenerowych?", a: "Magazyn LondraDepo w Rayleigh w Essex leży około 13 mil drogą od DP World London Gateway, 16 mil od portu Tilbury i 62 mile od portu Felixstowe, więc transport kontenera z portu jest krótki." },
    ],
    related: ["/pl/blog/dokumenty-importowe-uk", "/pl/rozladunek-kontenerow", "/pl/magazyn-london-gateway-tilbury", "/pl/magazyn-port-felixstowe", "/pl/blog/incoterms-import-do-uk"],
    cta: { h2: "Zamów wycenę rozładunku kontenera", text: "Podaj rozmiar kontenera, port, ETA i listę pakunkową, a wycenimy transport, rozładunek, składowanie i dostawę." },
    quote: { label: "Poproś o wycenę rozładunku", service: "container-unloading" },
  },
  {
    slug: "/pl/magazyn-london-gateway-tilbury",
    kind: "service",
    serviceType: "Magazyn dla portów London Gateway i Tilbury",
    modified: MODIFIED,
    title: "Magazyn blisko London Gateway i Tilbury",
    description:
      "Magazyn w Essex 13 mil od London Gateway i 16 mil od Tilbury: rozładunek kontenerów, palety od 3,50 £ + VAT tygodniowo, fulfillment i dystrybucja w UK.",
    label: "London Gateway i Tilbury",
    eyebrow: "Porty na Tamizie · ok. 20 minut drogą",
    h1: "Magazyn blisko portów London Gateway i Tilbury",
    lead:
      "Magazyn LondraDepo w Rayleigh w Essex leży około 13 mil (21 km) drogą od DP World London Gateway i 16 mil (26 km) od portu Tilbury, czyli około 20 minut autem od każdego z nich. Kontenery przypływające do obu portów na Tamizie można odprawić, przewieźć na krótkim odcinku do naszego obiektu, rozładować, policzyć i zarejestrować w stanach, a następnie składować od 3,50 £ + VAT za paletę tygodniowo lub wysłać dalej do klientów w UK. Magazyn nie znajduje się w porcie i nie jest magazynem celnym: towar składujemy po odprawie celnej.",
    facts: [
      "DP World London Gateway (SS17): ok. 13 mil / 21 km, ok. 20 minut",
      "Port Tilbury (RM18): ok. 16 mil / 26 km, ok. 20 minut",
      "Przyjęcie FCL 20ft, 40ft i 40ft high-cube oraz LCL",
      "Odprawa celna i transport przez Arca Trade Group",
      "Nie jesteśmy magazynem celnym: składujemy towar po odprawie",
    ],
    sections: [
      {
        type: "table",
        h2: "London Gateway i Tilbury w porównaniu",
        head: ["", "DP World London Gateway", "Port Tilbury"],
        rows: [
          ["Położenie", "Thurrock, Essex, nad Tamizą", "Tilbury, Essex, nad Tamizą"],
          ["Co obsługuje", "Głębokowodny port kontenerowy dla dużych kontenerowców", "Kontenery, ładunki ro-ro i drobnicę"],
          ["Odległość drogowa do magazynu", "ok. 13 mil / 21 km", "ok. 16 mil / 26 km"],
          ["Typowy czas autem (bez korków)", "ok. 20 minut", "ok. 20 minut"],
        ],
        note: "Routing drogowy z SS6 7FY do kodu pocztowego każdego portu (10 listopada 2026). Ciężarówki, kolejki w porcie i godziny szczytu wydłużają przejazd. Port zwykle wybiera armator.",
      },
      {
        type: "steps",
        h2: "Z portów na Tamizie na nasze regały",
        items: [
          { title: "Awizacja", text: "Prześlij numer kontenera, ETA, listę pakunkową i liczbę kartonów dla każdego SKU oraz informację, czy towar jest na paletach czy luzem." },
          { title: "Odprawa celna", text: "Zgłoszenie importowe składa zespół celny Arca Trade Group lub Twoja agencja; cło i VAT importowy są rozliczane." },
          { title: "Krótki transport", text: "Przewoźnik odbiera kontener z London Gateway lub Tilbury i dowozi go do Rayleigh, pokonując 13–16 mil drogą." },
          { title: "Rozładunek i kontrola", text: "Rozładowujemy, liczymy według listy pakunkowej, fotografujemy widoczne uszkodzenia i zgłaszamy rozbieżności." },
          { title: "Rejestracja stanów", text: "W razie potrzeby luźne kartony są paletyzowane i etykietowane, a towar rejestrowany w Mintsoft WMS." },
          { title: "Składowanie lub dalsza wysyłka", text: "Towar jest składowany, kompletowany do zamówień lub przeładowywany w cross-docking do klientów w UK i do Amazon." },
        ],
      },
      {
        type: "text",
        h2: "Dlaczego magazyn blisko portów na Tamizie?",
        paras: [
          "London Gateway i Tilbury to najbliższe naszemu obiektowi duże porty kontenerowe, więc odcinek drogowy z portu do magazynu jest krótki w porównaniu z portami położonymi dalej, takimi jak Felixstowe, oddalone o około 62 mile. Magazyn jest też około 37 mil od centrum Londynu, więc ten sam zapas może obsługiwać klientów w Londynie i na południowym wschodzie, a przez M25 także resztę Wielkiej Brytanii.",
          "Rozładunek, składowanie, kompletacja zamówień i dystrybucja w UK odbywają się w jednym budynku, więc towar jest przeładowywany raz, zamiast krążyć między placem w porcie a osobnym centrum fulfillmentu. Jeśli Twoje kontenery przypływają do Felixstowe, zobacz naszą stronę o Felixstowe; proces jest taki sam, tylko transport dłuższy.",
        ],
      },
      {
        type: "links",
        h2: "Zaplanuj dostawę",
        items: [
          { href: "/pl/rozladunek-kontenerow", title: "Rozładunek kontenerów", text: "Rozładunek FCL i LCL, liczenie, zdjęcia uszkodzeń i ponowna paletyzacja w Essex.", tag: "Usługa" },
          { href: "/pl/magazyn-port-felixstowe", title: "Magazyn dla portu Felixstowe", text: "Kontenery z największego portu kontenerowego w UK, oddalonego o ok. 62 mile.", tag: "Port" },
          { href: "/pl/lokalizacje/logistyka-port-magazyn", title: "Z portu do magazynu", text: "Odległości, odprawa, transport i zwrot pustego kontenera krok po kroku.", tag: "Przewodnik" },
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "Wikipedia: London Gateway (głębokowodny port kontenerowy w Thurrock)", href: "https://en.wikipedia.org/wiki/London_Gateway" },
          { label: "Wikipedia: Port Tilbury", href: "https://en.wikipedia.org/wiki/Port_of_Tilbury" },
          { label: "Project OSRM: routing drogowy użyty do wyliczenia odległości", href: "https://project-osrm.org/" },
        ],
      },
    ],
    faqs: [
      { q: "Jak daleko jest magazyn od London Gateway?", a: "Magazyn w Rayleigh leży około 13 mil (21 km) drogą od DP World London Gateway, co przy płynnym ruchu oznacza około 20 minut jazdy samochodem osobowym." },
      { q: "Jak daleko jest magazyn od portu Tilbury?", a: "Około 16 mil (26 km) drogą, czyli około 20 minut autem przy płynnym ruchu. Ciężarówki z kontenerami potrzebują na ten odcinek więcej czasu." },
      { q: "Czy magazyn blisko London Gateway jest magazynem celnym?", a: "Nie. LondraDepo nie jest magazynem celnym (bonded warehouse). Towar z London Gateway lub Tilbury jest odprawiany przez brytyjskie służby celne, zanim trafi do składowania w Rayleigh." },
      { q: "Czy odbieracie kontenery z London Gateway lub Tilbury?", a: "Tak. Arca Trade Group, operator LondraDepo, może zorganizować odprawę celną i transport z obu portów, a alternatywnie Twój spedytor może dostarczyć kontener do naszego magazynu." },
      { q: "Co się dzieje po przypłynięciu kontenera do London Gateway lub Tilbury?", a: "Po złożeniu zgłoszenia importowego i zwolnieniu kontenera przewoźnik przywozi go 13–16 mil do Rayleigh. Rozładowujemy go, liczymy towar według listy pakunkowej, fotografujemy widoczne uszkodzenia i rejestrujemy stany w Mintsoft WMS." },
    ],
    related: ["/pl/lokalizacje/logistyka-port-magazyn", "/pl/rozladunek-kontenerow", "/pl/magazyn-port-felixstowe", "/pl/magazyn-essex", "/pl/magazyn-londyn"],
    cta: { h2: "Wycena kontenera z portu na Tamizie", text: "Podaj port, rozmiar kontenera, ETA i listę pakunkową, a wycenimy transport, rozładunek, składowanie i dalszą dostawę." },
    quote: { label: "Poproś o wycenę rozładunku", service: "container-unloading" },
  },
  {
    slug: "/pl/magazyn-port-felixstowe",
    kind: "service",
    serviceType: "Magazyn dla portu Felixstowe",
    modified: MODIFIED,
    title: "Magazyn dla portu Felixstowe w Essex",
    description:
      "Kontenery z Felixstowe: transport ok. 62 mil do magazynu w Essex, rozładunek, palety od 3,50 £ + VAT tygodniowo, fulfillment i dystrybucja w całym UK.",
    label: "Magazyn dla portu Felixstowe",
    eyebrow: "Port Felixstowe · ok. 62 mile drogą",
    h1: "Magazyn dla kontenerów z portu Felixstowe w Essex",
    lead:
      "Felixstowe to największy port kontenerowy w Wielkiej Brytanii, do którego zawija wiele serwisów oceanicznych z Azji. Magazyn LondraDepo nie znajduje się w porcie: leży w Rayleigh w Essex, około 62 mil (99 km) drogą, czyli około 1¼ godziny autem. Kontenery przypływające do Felixstowe można odprawić, przewieźć do naszego obiektu, rozładować i zarejestrować w stanach, a następnie składować od 3,50 £ + VAT za paletę tygodniowo, realizować z nich zamówienia lub dystrybuować w całej Wielkiej Brytanii; Londyn jest oddalony o około 37 mil. Nie jesteśmy magazynem celnym, więc towar składujemy po odprawie.",
    facts: [
      "Port Felixstowe (IP11): ok. 62 mil / 99 km, ok. 1¼ godziny autem",
      "Centrum Londynu: ok. 37 mil od magazynu",
      "Przyjęcie FCL 20ft, 40ft i 40ft high-cube oraz LCL",
      "Odprawa celna i transport przez Arca Trade Group",
      "Nie jesteśmy magazynem celnym i nie znajdujemy się w porcie",
    ],
    sections: [
      {
        type: "table",
        h2: "Kontener z Felixstowe do naszego magazynu: co zaplanować",
        head: ["Etap", "Na czym polega"],
        rows: [
          ["Odprawa", "Zgłoszenie importowe składa zespół celny Arca Trade Group lub Twoja agencja; cło i VAT importowy są rozliczane"],
          ["Transport", "Ok. 62 mile / 99 km drogą z Felixstowe do Rayleigh; zlecany przez Arca Trade Group lub Twojego spedytora"],
          ["Termin dostawy", "Uzgadniany z wyprzedzeniem z naszym magazynem po awizacji"],
          ["Rozładunek", "Liczenie według listy pakunkowej, zdjęcia uszkodzeń, w razie potrzeby paletyzacja luźnych kartonów"],
          ["Kolejny krok", "Składowanie od 3,50 £ + VAT za paletę tygodniowo, fulfillment zamówień lub cross-docking do klientów w UK i do Amazon"],
        ],
        note: "Odległość drogowa wyliczona routingiem z SS6 7FY do IP11 (10 listopada 2026). Czasy dotyczą samochodu osobowego przy płynnym ruchu; ciężarówki z kontenerami i kolejki w porcie wydłużają przejazd.",
      },
      {
        type: "text",
        h2: "Kiedy magazyn w Essex ma sens dla kontenerów z Felixstowe",
        paras: [
          "Nasz obiekt sprawdza się u importerów, których towar potrzebuje czegoś więcej niż składowania przy porcie. Jeśli ten sam zapas ma obsługiwać klientów w Londynie i na południowym wschodzie, zamówienia e-commerce, Amazon i odbiorców hurtowych, jednorazowy rozładunek w Rayleigh, około 37 mil od centrum Londynu, eliminuje ponowne przewożenie towaru między magazynem przyportowym a centrum fulfillmentu.",
          "Jeśli Twój towar potrzebuje jedynie krótkiego składowania przy porcie przed odbiorem, lepszym wyborem może być magazyn w okolicy Felixstowe. Jeśli część Twoich kontenerów przypływa do London Gateway lub Tilbury, te porty są oddalone od nas tylko o 13–16 mil.",
        ],
      },
      {
        type: "steps",
        h2: "Jak przebiega dostawa z Felixstowe",
        items: [
          { title: "Awizacja", text: "Prześlij numer kontenera, ETA, listę pakunkową i liczbę kartonów dla każdego SKU oraz informację, czy towar jest na paletach czy luzem." },
          { title: "Odprawa", text: "Zgłoszenie składane jest przed przypłynięciem lub po nim; cło płaci się przy zwolnieniu, a VAT importowy jest płacony lub rozliczany." },
          { title: "Transport", text: "Kontener jest odbierany w Felixstowe i dowożony do Rayleigh w uzgodnionym terminie." },
          { title: "Rozładunek i rejestracja", text: "Towar jest rozładowywany, sprawdzany i rejestrowany w Mintsoft WMS." },
          { title: "Składowanie, fulfillment lub dostawa", text: "Towar jest składowany, kompletowany do zamówień lub wysyłany bezpośrednio do klientów." },
        ],
      },
      {
        type: "links",
        h2: "Zaplanuj dostawę",
        items: [
          { href: "/pl/rozladunek-kontenerow", title: "Rozładunek kontenerów", text: "Rozładunek FCL i LCL, liczenie, zdjęcia uszkodzeń i ponowna paletyzacja w Essex.", tag: "Usługa" },
          { href: "/pl/magazyn-london-gateway-tilbury", title: "London Gateway i Tilbury", text: "Najbliższe naszemu magazynowi porty kontenerowe, 13–16 mil drogą.", tag: "Port" },
          { href: "/pl/lokalizacje/logistyka-port-magazyn", title: "Z portu do magazynu", text: "Odległości, odprawa, transport i zwrot pustego kontenera krok po kroku.", tag: "Przewodnik" },
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "Wikipedia: Port Felixstowe (udział w brytyjskim ruchu kontenerowym)", href: "https://en.wikipedia.org/wiki/Port_of_Felixstowe" },
          { label: "Project OSRM: routing drogowy użyty do wyliczenia odległości", href: "https://project-osrm.org/" },
        ],
      },
    ],
    faqs: [
      { q: "Jak daleko jest magazyn od Felixstowe?", a: "Z portu Felixstowe do Rayleigh w Essex jest około 62 mil (99 km) drogą, czyli około 1¼ godziny autem przy płynnym ruchu. Ciężarówki z kontenerami potrzebują więcej czasu." },
      { q: "Czy wasz magazyn znajduje się w porcie Felixstowe?", a: "Nie. Nasz magazyn jest w Rayleigh w Essex. Kontenery są przewożone z Felixstowe do naszego obiektu, gdzie odbywa się rozładunek, składowanie i realizacja zamówień." },
      { q: "Czy oferujecie składowanie w składzie celnym dla kontenerów z Felixstowe?", a: "Nie. LondraDepo nie jest magazynem celnym. Towar z Felixstowe musi przejść brytyjską odprawę celną, zanim zostanie u nas składowany, a zgłoszenie może złożyć Arca Trade Group lub Twoja agencja." },
      { q: "Czy zorganizujecie transport i odprawę z Felixstowe?", a: "Tak. Arca Trade Group, operator LondraDepo, może zorganizować odprawę celną i transport z Felixstowe, a alternatywnie Twój własny spedytor może dostarczyć kontener do naszego magazynu." },
      { q: "Dlaczego wybrać magazyn w Essex dla kontenerów z Felixstowe?", a: "Magazyn w Essex sprawdza się u importerów, których zapas obsługuje też klientów w Londynie i na południowym wschodzie, e-commerce, Amazon lub hurt, ponieważ towar jest rozładowywany raz w Rayleigh, około 37 mil od centrum Londynu." },
    ],
    related: ["/pl/lokalizacje/logistyka-port-magazyn", "/pl/rozladunek-kontenerow", "/pl/magazyn-london-gateway-tilbury", "/pl/import-do-wielkiej-brytanii", "/pl/magazyn-essex"],
    cta: { h2: "Wycena kontenera z Felixstowe", text: "Podaj rozmiar kontenera, ETA i listę pakunkową, a wycenimy transport, rozładunek, składowanie i dalszą dostawę." },
    quote: { label: "Poproś o wycenę rozładunku", service: "container-unloading" },
  },
  {
    slug: "/pl/centra-amazon-w-uk",
    kind: "service",
    serviceType: "Amazon FBA prep i dostawy do centrów Amazon w UK",
    modified: MODIFIED,
    title: "Centra Amazon w UK: kody i odległości",
    description:
      "Kody i lokalizacje centrów logistycznych Amazon w UK, od LCY2 Tilbury i LCY1 Londyn po MAN1, z odległościami od naszego magazynu FBA prep i zasadami dostaw.",
    label: "Centra Amazon w UK",
    eyebrow: "Amazon FBA · przewodnik po centrach w UK",
    h1: "Centra logistyczne Amazon w UK: kody, lokalizacje i odległości",
    lead:
      "Amazon prowadzi centra logistyczne (fulfilment centres) w całej Wielkiej Brytanii, a każde z nich ma kod, np. LCY2 (Tilbury, Essex), LCY1 (wschodni Londyn), LTN1 (Bedfordshire), BHX1 (Staffordshire) czy MAN1 (lotnisko Manchester). Nie wybierasz centrum samodzielnie: Amazon przypisuje je w planie wysyłki w Seller Central, czasem dzieląc jeden plan na kilka lokalizacji. Magazyn FBA prep LondraDepo w Rayleigh w Essex leży około 16 mil drogą od LCY2 Tilbury i 32 mil od LCY1, więc przygotowany towar szybko trafia do centrów w rejonie Londynu, a do reszty sieci przez przewoźników paczkowych lub paletowych. LondraDepo nie jest oficjalnym partnerem Amazon.",
    facts: [
      "Amazon LCY2 Tilbury: ok. 16 mil / 25 km od naszego magazynu",
      "Amazon LCY1 wschodni Londyn: ok. 32 mil / 52 km",
      "Centrum docelowe wyznacza Amazon w planie wysyłki",
      "Dostawy do centrów Amazon odbywają się w zarezerwowanych terminach",
      "Palety: brytyjska 1200 × 1000 mm lub europaleta 1200 × 800 mm, do 1,8 m wysokości",
    ],
    sections: [
      {
        type: "table",
        h2: "Centra Amazon w UK i odległość drogowa od naszego magazynu",
        intro: "Wybór brytyjskich lokalizacji Amazon, które często pojawiają się w planach wysyłki sprzedawców, uporządkowanych według odległości od Rayleigh w Essex (SS6 7FY).",
        head: ["Kod", "Lokalizacja", "Odległość drogowa od LondraDepo"],
        rows: [
          ["LCY2", "Tilbury, Essex (RM18 7AN)", "ok. 16 mil / 25 km"],
          ["LCY1", "Bow, wschodni Londyn (E3 3JG)", "ok. 32 mil / 52 km"],
          ["LTN2", "Hemel Hempstead, Hertfordshire", "ok. 54 mil / 86 km"],
          ["LTN4", "Dunstable, Bedfordshire", "ok. 65 mil / 105 km"],
          ["LTN1", "Marston Gate, Ridgmont, Bedfordshire (MK43 0ZA)", "ok. 74 mil / 119 km"],
          ["EUK5", "Peterborough, Cambridgeshire (PE2 9EN)", "ok. 95 mil / 152 km"],
          ["BHX4", "Coventry, West Midlands", "ok. 125 mil / 201 km"],
          ["BHX1", "Rugeley, Staffordshire (WS15 1NZ)", "ok. 158 mil / 255 km"],
          ["MAN1", "Lotnisko Manchester, Greater Manchester", "ok. 219 mil / 353 km"],
          ["CWL1", "Swansea, Walia (SA1 8QX)", "ok. 235 mil / 379 km"],
        ],
        note: "Kody i lokalizacje zebrane z publicznych katalogów lokalizacji Amazon w UK (listopad 2026). Amazon otwiera, zmienia nazwy i zamyka obiekty, dlatego zawsze wysyłaj towar na adres z planu wysyłki w Seller Central. Odległości drogowe wyliczone routingiem OSRM z SS6 7FY 10 listopada 2026; wiersze bez pełnego kodu pocztowego mierzone do środka okręgu pocztowego miejscowości.",
      },
      {
        type: "text",
        h2: "Dlaczego centrum docelowe wpływa na koszt i czas",
        paras: [
          "Centrum przypisane przez Amazon decyduje o tym, jak daleko towar jedzie po przygotowaniu. Paleta z naszego magazynu w Essex do LCY2 Tilbury to krótki kurs lokalny, natomiast MAN1 czy CWL1 leżą ponad 200 mil dalej i towar jedzie tam przez krajową sieć paletową lub paczkową. Gdy Amazon dzieli plan wysyłki, każda część jest etykietowana i wysyłana do własnego centrum.",
          "Każde centrum przyjmuje towar w umówionych terminach. Według brytyjskich wytycznych Amazon Freight ładunek, który przyjedzie poza zarezerwowanym oknem, bez ważnego numeru referencyjnego, z niekompletnymi dokumentami lub na niezgodnej palecie, może zostać odrzucony i obciążony kosztem ponownej dostawy. Przygotowanie i sprawdzenie towaru w UK przed wysyłką do Amazon eliminuje większość tych ryzyk.",
        ],
      },
      {
        type: "table",
        h2: "Paczki, palety czy pełna ciężarówka",
        head: ["Opcja", "Na czym polega", "Zwykle pasuje do"],
        rows: [
          ["Dostawa paczkowa (SPD)", "Kartony etykietowane osobno i wysyłane przewoźnikiem paczkowym", "Kilku kartonów lub pierwszej wysyłki testowej"],
          ["Ładunek częściowy (LTL)", "Palety dzielące naczepę z innym towarem; według Amazon Freight LTL to zwykle od jednej do sześciu palet", "Regularnych, umiarkowanych wolumenów paletowych"],
          ["Pełna ciężarówka (FTL)", "Dedykowana naczepa do jednego centrum logistycznego", "Ładunków, które stale wypełniają lub prawie wypełniają naczepę"],
        ],
      },
      {
        type: "list",
        h2: "Zasady dotyczące palet i etykiet w centrach Amazon w UK",
        intro: "Na podstawie brytyjskiej listy kontrolnej Amazon Freight dla dostaw do centrów logistycznych Amazon:",
        items: [
          "Większość centrów Amazon w UK przyjmuje standardową paletę brytyjską (1200 × 1000 mm) i europaletę (1200 × 800 mm); potwierdź to w konkretnym centrum.",
          "Wysokość palety jest zwykle ograniczona do 1,8 metra łącznie z paletą.",
          "Maksymalna waga palety to zwykle 1000 kg łącznie z paletą.",
          "Każdy karton ma etykietę wysyłkową Amazon; każda paleta ma widoczną etykietę z numerem wysyłki, najlepiej na dwóch sąsiednich bokach.",
          "List przewozowy przewoźnika musi odpowiadać fizycznej przesyłce i zarezerwowanemu terminowi.",
        ],
      },
      {
        type: "links",
        h2: "Przygotuj i wyślij towar",
        items: [
          { href: "/pl/amazon-fba-prep", title: "Amazon FBA prep w Essex", text: "Etykiety FNSKU, pakowanie, paletyzacja i dostawa do centrum wyznaczonego przez Amazon.", tag: "Usługa" },
          { href: "/pl/blog/lista-kontrolna-amazon-fba-prep", title: "Lista kontrolna FBA prep", text: "Każdy krok od planu wysyłki do przyjęcia w Amazon.", tag: "Lista kontrolna" },
          { href: "/pl/magazyn-london-gateway-tilbury", title: "London Gateway i Tilbury", text: "Kontenery przypływające 13–16 mil od naszego magazynu.", tag: "Port" },
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "Amazon Freight: UK LTL do centrów Amazon, lista kontrolna nadawcy (grudzień 2025)", href: "https://freight.amazon.co.uk/newsroom/uk-ltl-amazon-fcs-checklist" },
          { label: "Amazon Freight: przygotowanie palet, wymiary, owijanie i etykiety (grudzień 2025)", href: "https://freight.amazon.co.uk/newsroom/pallet-site-prep-dimensions-wrapping-labels-tail-lift-alternatives" },
          { label: "AVASK: magazyny Amazon FBA w Wielkiej Brytanii i Europie", href: "https://avask.com/blog/amazon-fba-warehouses-in-uk-europe/" },
          { label: "Project OSRM: routing drogowy użyty do wyliczenia odległości", href: "https://project-osrm.org/" },
        ],
      },
    ],
    faqs: [
      { q: "Czym różni się magazyn Amazon od centrum logistycznego (fulfilment centre)?", a: "Fulfilment centre to nazwa, jaką Amazon nadaje magazynom przyjmującym, składującym i wysyłającym towar sprzedawców FBA. Sieć Amazon obejmuje też inne obiekty, np. sortownie i stacje doręczeń, które nie przyjmują zapasu sprzedawców, dlatego towar FBA wysyłaj tylko do centrum wskazanego w planie wysyłki." },
      { q: "Gdzie znajdują się centra logistyczne Amazon w Wielkiej Brytanii?", a: "Centra Amazon w UK są rozmieszczone w Anglii, Szkocji i Walii, np. LCY2 w Tilbury, LCY1 we wschodnim Londynie, LTN1 w Bedfordshire, EUK5 w Peterborough, BHX1 w Staffordshire, MAN1 przy lotnisku Manchester i CWL1 w Swansea. Dokładny adres podaje plan wysyłki." },
      { q: "Które centrum Amazon jest najbliżej Londynu?", a: "LCY1 znajduje się w Bow we wschodnim Londynie, a LCY2 w Tilbury w Essex nad Tamizą. Z magazynu LondraDepo w Rayleigh do LCY2 jest około 16 mil drogą, a do LCY1 około 32 mil, więc przygotowany u nas towar szybko trafia do obu." },
      { q: "Czy mogę wybrać centrum Amazon, do którego trafi mój towar?", a: "Nie. Amazon przypisuje centrum docelowe przy tworzeniu planu wysyłki w Seller Central i może podzielić jeden plan na kilka centrów. LondraDepo etykietuje i wysyła każdą część planu do centrum wskazanego przez Amazon." },
      { q: "Czy dostawa do centrum Amazon w UK wymaga rezerwacji terminu?", a: "Tak. Według brytyjskich wytycznych Amazon Freight dostawy do centrów Amazon odbywają się w umówionych terminach, a ładunki poza oknem lub niezgodne z rezerwacją mogą zostać odrzucone i obciążone kosztem ponownej dostawy. Przygotowujemy towar w Essex zgodnie z planem wysyłki przed odbiorem." },
      { q: "Jak daleko jest LondraDepo od Amazon LCY2 Tilbury?", a: "Z magazynu w Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY do obiektu Amazon LCY2 w Tilbury jest około 16 mil (25 km) drogą, czyli około 20 minut autem, według routingu drogowego z listopada 2026." },
    ],
    related: ["/pl/blog/amazon-private-label-i-wholesale-uk", "/pl/amazon-fba-prep", "/pl/fulfillment-amazon-uk", "/pl/magazyn-dla-sprzedawcow-amazon", "/pl/blog/lista-kontrolna-amazon-fba-prep", "/pl/magazyn-london-gateway-tilbury", "/pl/magazyn-essex"],
    cta: { h2: "Zamów wycenę Amazon FBA prep", text: "Podaj SKU, liczbę sztuk i kartonów oraz centra z Twojego planu wysyłki, a wycenimy przygotowanie, składowanie i dostawę do Amazon." },
    quote: { label: "Poproś o wycenę FBA prep", service: "amazon-prep" },
  },
];
