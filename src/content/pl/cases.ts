import type { EnPage } from "../en/types";

/**
 * Polish case studies (wave 2), translated from src/content/en/cases.ts and rendered by EnPageView in Polish.
 * Customer names, origins, volumes and results are kept exactly as in the EN source; nothing is added beyond
 * what the site already states. The team speaks English and Turkish, so no page promises Polish-language service.
 */
const MODIFIED = "2026-11-28";

const CASE_DATE = { published: "2026-11-10", modified: "2026-11-10" };

const HUB = "/pl/studia-przypadkow";

const plCasePages: EnPage[] = [
  {
    slug: "/pl/studia-przypadkow/cruyff-fulfillment-uk",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 4, section: "Moda i odzież premium" },
    title: "Cruyff: fulfillment mody w UK – studium przypadku",
    description:
      "Jak marka Cruyff przeniosła wysyłkę zamówień z Holandii do magazynu w Essex: przepakowanie, metki, fulfillment e-commerce i szybkie dostawy w UK.",
    label: "Cruyff – fulfillment mody w UK",
    eyebrow: "Studium przypadku · Moda i odzież premium",
    h1: "Cruyff: uruchomienie fulfillmentu mody w Wielkiej Brytanii",
    lead:
      "Cruyff, marka modowa kontynuująca dziedzictwo Johana Cruyffa, zamiast wysyłać zamówienia brytyjskich klientów z Holandii, realizuje je teraz z magazynu LondraDepo w Essex. Składowanie, przepakowanie, zarządzanie zapasem i fulfillment e-commerce odbywają się w jednym miejscu w UK, z opcją dostawy na następny dzień lub w 2 dni, a czas dostawy po zmianie skrócił się o około 80%.",
    facts: [
      "Branża: moda i odzież premium",
      "Kraj pochodzenia towaru: Holandia",
      "Dostawa w UK: na następny dzień lub w 2 dni",
      "Ok. 80% szybsza dostawa w UK po zmianie",
    ],
    sections: [
      {
        type: "list",
        h2: "Wyzwanie",
        intro:
          "Wysyłka zamówień do Wielkiej Brytanii bezpośrednio z Holandii wydłużała czas dostawy, podnosiła koszty i pogarszała doświadczenie klientów. Bez fizycznego zapasu w UK lokalny fulfillment nie był możliwy.",
        items: [
          "Potrzeba szybkiej realizacji zamówień w UK",
          "Brak fizycznego zapasu w Wielkiej Brytanii",
          "Konieczność obsługi zamówień internetowych",
          "Przepakowanie dostosowane do produktów modowych",
          "Brak integracji z brytyjskimi przewoźnikami",
          "Potrzeba centralnego zarządzania zapasem",
        ],
      },
      {
        type: "cards",
        h2: "Rozwiązanie LondraDepo",
        items: [
          { title: "Magazyn dla mody w UK", text: "Bezpieczna przestrzeń na zapas odzieży w naszym obiekcie w Essex." },
          { title: "Przepakowanie i metki", text: "Przepakowanie, etykietowanie i wymiana metek zgodnie ze standardami marki Cruyff." },
          { title: "Fulfillment e-commerce", text: "Zamówienia internetowe trafiają bezpośrednio do kompletacji, pakowania i wysyłki." },
          { title: "Dystrybucja w całej Wielkiej Brytanii", text: "Integracja z brytyjskimi przewoźnikami, z opcją dostawy na następny dzień lub w 2 dni." },
          { title: "Zarządzanie zapasem", text: "Regularne raporty stanów i ruchów magazynowych oraz śledzenie zapasu na poziomie kolekcji." },
          { title: "Obsługa w dwóch językach", text: "Koordynacja przez cały czas w języku angielskim i tureckim." },
        ],
      },
      {
        type: "steps",
        h2: "Jak działa operacja",
        items: [
          { title: "Dostawa z Holandii", text: "Kolekcja została wysłana do naszego magazynu w Essex i przyjęta." },
          { title: "Przyjęcie i kontrola jakości", text: "Każdy artykuł został policzony, sprawdzony pod kątem jakości i uszkodzeń oraz zarejestrowany." },
          { title: "Przepakowanie i ponowne etykietowanie", text: "Metki, etykiety i opakowania zaktualizowano zgodnie ze standardami marki." },
          { title: "Integracja e-commerce", text: "Zamówienia ze strony internetowej i z marketplace'ów włączono do procesu realizacji." },
          { title: "Kompletacja i pakowanie", text: "Każde zamówienie skompletowano i zapakowano w opakowanie Cruyff z etykietą wysyłkową." },
          { title: "Dostawa w UK", text: "Zamówienia dostarczano przez brytyjską sieć przewoźników, na następny dzień lub w 2 dni." },
        ],
      },
      {
        type: "stats",
        h2: "Wyniki",
        items: [
          { value: "~80%", label: "szybsza dostawa w UK" },
          { value: "Lokalnie", label: "fulfillment z Wielkiej Brytanii" },
          { value: "1 magazyn", label: "obsługa całego UK" },
        ],
      },
    ],
    faqs: [
      { q: "Na czym polega fulfillment mody w Wielkiej Brytanii?", a: "Fulfillment mody w UK to składowanie produktów odzieżowych w brytyjskim magazynie, ich przepakowanie i etykietowanie oraz przygotowanie zamówień internetowych do dostawy do klientów." },
      { q: "Czy oferujecie przepakowanie odzieży?", a: "Tak. Zapewniamy pełne przepakowanie i ponowne etykietowanie, w tym opakowania w standardzie marki, wymianę metek i aktualizację etykiet produktów modowych." },
      { q: "Czy dostawa w UK na następny dzień jest możliwa?", a: "Tak. Z magazynu w Essex oferujemy dostawy na następny dzień lub w 2 dni na terenie całej Wielkiej Brytanii, korzystając z usług brytyjskich przewoźników." },
      { q: "Dlaczego Cruyff przeniósł fulfillment do magazynu w UK?", a: "Wysyłka zamówień brytyjskich klientów z Holandii wydłużała dostawy i podnosiła koszty. Po przeniesieniu fulfillmentu do magazynu LondraDepo w Essex marka oferuje dostawę na następny dzień lub w 2 dni, a dostawy w UK są o około 80% szybsze." },
      { q: "Jak kontrolowany jest zapas kolekcji Cruyff?", a: "Każdy artykuł jest liczony i sprawdzany przy przyjęciu, a marka otrzymuje regularne raporty stanów i ruchów magazynowych, ze śledzeniem zapasu na poziomie poszczególnych kolekcji." },
    ],
    related: ["/pl/fulfillment-shopify-uk", "/pl/fulfillment-wielka-brytania", "/pl/fulfillment-ecommerce", "/pl/studia-przypadkow/magazyn-czesci-samochodowych"],
    quote: { label: "Poproś o wycenę fulfillmentu", service: "fulfilment" },
  },
  {
    slug: "/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 3, section: "Dystrybucja B2B" },
    title: "Pudełka na pizzę: dystrybucja B2B w UK",
    description:
      "Jak producent pudełek na pizzę uruchomił składowanie paletowe w UK i stałe dostawy B2B do restauracji, ze śledzeniem partii i alertami niskiego stanu.",
    label: "Pudełka na pizzę – dystrybucja B2B w UK",
    eyebrow: "Studium przypadku · Dystrybucja B2B",
    h1: "Pudełka na pizzę: dystrybucja B2B do restauracji w UK",
    lead:
      "Producent pudełek na pizzę z siedzibą w Turcji potrzebował niezawodnych, regularnych dostaw do restauracji w Wielkiej Brytanii. Zamiast wysyłać towar z Turcji przy każdym zamówieniu, trzyma teraz zapas na paletach w naszym magazynie w Essex i zaopatruje restauracje według stałego harmonogramu dostaw, z alertami o niskim stanie, zanim potrzebne będzie uzupełnienie.",
    facts: [
      "Model: składowanie paletowe i dystrybucja B2B",
      "Zasięg: cała Wielka Brytania",
      "Stałe harmonogramy dostaw: co tydzień lub co miesiąc",
    ],
    sections: [
      {
        type: "list",
        h2: "Wyzwanie",
        items: [
          "Osobny koszt i czas oczekiwania przy każdej wysyłce z Turcji",
          "Restauracje potrzebujące stałych, przewidywalnych dostaw",
          "Potrzeba składowania dużych wolumenów towaru na paletach",
          "Brak fizycznej bazy operacyjnej w Wielkiej Brytanii",
          "Ryzyko braków towaru i utraty klientów",
        ],
      },
      {
        type: "cards",
        h2: "Rozwiązanie LondraDepo",
        items: [
          { title: "Składowanie palet", text: "Duże wolumeny opakowań składowane w regałach paletowych, uporządkowane i łatwo dostępne." },
          { title: "Harmonogram dostaw", text: "Stały, tygodniowy lub miesięczny program dostaw dla każdej restauracji." },
          { title: "Monitorowanie zapasu", text: "Bieżąca kontrola stanów z alertem po osiągnięciu minimalnego progu." },
          { title: "Dystrybucja B2B w UK", text: "Dostawy palet i kartonów do restauracji, sieci i firm w całej Wielkiej Brytanii." },
          { title: "Śledzenie partii", text: "Ewidencja zapasu na poziomie partii, gotowa na wypadek wycofania produktu." },
        ],
      },
      {
        type: "stats",
        h2: "Wyniki",
        items: [
          { value: "Stały", label: "harmonogram dostaw" },
          { value: "Palety+", label: "obsługa dużych wolumenów" },
          { value: "Z wyprzedzeniem", label: "alerty niskiego stanu" },
        ],
      },
    ],
    faqs: [
      { q: "Czym różni się fulfillment B2B od B2C?", a: "Fulfillment B2B obejmuje zamówienia hurtowe dla firm, z wysyłkami paletowymi, stałymi harmonogramami dostaw i rozliczeniem na fakturę. B2C to pojedyncze zamówienia dla klientów indywidualnych." },
      { q: "Czy możecie zorganizować regularne dostawy do restauracji?", a: "Tak. Układamy tygodniowe lub miesięczne programy dostaw na podstawie listy klientów i ustalonej częstotliwości, a zamówienia przygotowujemy z zapasu w Essex." },
      { q: "Czy składujecie opakowania na paletach?", a: "Tak. Produkty o dużej objętości, takie jak pudełka na pizzę i materiały opakowaniowe, składujemy na paletach, ewidencjonujemy w stanach i przygotowujemy do dystrybucji zgodnie z zamówieniami." },
      { q: "Co zmieniło się w operacji pudełek na pizzę?", a: "Producent przeszedł z osobnych wysyłek przy każdym zamówieniu na zapas paletowy w Essex i dostawy do restauracji według harmonogramu, co daje klientom stałe i przewidywalne zaopatrzenie." },
      { q: "Jak unikacie braków towaru u klientów B2B?", a: "Stany są kontrolowane na bieżąco, a po spadku poniżej ustalonego minimalnego progu klient otrzymuje alert, dzięki czemu może zaplanować uzupełnienie zapasu, zanim zabraknie towaru." },
    ],
    related: ["/pl/branze/zywnosc-i-opakowania", "/pl/skladowanie-palet", "/pl/dystrybucja-uk", "/pl/studia-przypadkow/dystrybucja-tortilli-uk"],
    quote: { label: "Poproś o wycenę dystrybucji", service: "distribution" },
  },
  {
    slug: "/pl/studia-przypadkow/dystrybucja-tortilli-uk",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 4, section: "Żywność i FMCG" },
    title: "Tortille: magazyn i dystrybucja w UK",
    description:
      "Turecki producent tortilli wszedł na rynek brytyjski z jedną paletą i doszedł do sześciu kontenerów 40 ft miesięcznie dzięki magazynowi i dystrybucji w UK.",
    label: "Tortille – dystrybucja w UK",
    eyebrow: "Studium przypadku · Żywność i FMCG",
    h1: "Marka tortilli: od 1 palety do 6 kontenerów miesięcznie",
    lead:
      "Producent tortilli, lawaszu i płaskich chlebów z Ankary wszedł na rynek brytyjski z jedną paletą testową. Dzięki wsparciu LondraDepo w zakresie kodów taryfowych, brytyjskiego etykietowania, magazynowania, fulfillmentu i dystrybucji operacja urosła do sześciu kontenerów 40 ft high cube (40HC) miesięcznie.",
    facts: [
      "Wolumen początkowy: 1 paleta",
      "Obecny wolumen: 6 × 40HC miesięcznie",
      "Kanały: B2B i B2C",
      "Komunikacja: angielski i turecki",
    ],
    sections: [
      {
        type: "list",
        h2: "Wyzwanie",
        intro: "Producent chciał przetestować rynek przy niskim ryzyku, dlatego plan zaczął się od jednej palety. Po drodze pojawiło się kilka potrzeb operacyjnych:",
        items: [
          "Zorganizowanie importu żywności do Wielkiej Brytanii",
          "Klasyfikacja tortilli i płaskich chlebów w kodach taryfowych",
          "Etykietowanie żywności zgodne z wymogami UK",
          "Infrastruktura do fulfillmentu żywności",
          "Dostęp do dystrybucji w Wielkiej Brytanii",
          "Model, który da się skalować",
        ],
      },
      {
        type: "steps",
        h2: "Jak rozwijała się operacja",
        items: [
          { title: "Analiza produktu i kodów", text: "Klasyfikacja w kodach taryfowych i ocena importu do UK dla całego asortymentu." },
          { title: "Wskazówki dotyczące etykiet", text: "Określono wymogi rynku brytyjskiego dotyczące etykietowania i opakowań." },
          { title: "Pierwsza paleta", text: "Zaplanowano i dostarczono wysyłkę testową jednej palety." },
          { title: "Przyjęcie w Essex", text: "Rozładunek, liczenie i kontrola jakości w naszym magazynie." },
          { title: "Dystrybucja w UK", text: "Towar trafiał do kanałów B2B i B2C przez brytyjską sieć dystrybucji." },
          { title: "Wzrost do kontenerów", text: "Po udanym teście regularny model osiągnął 6 × 40HC miesięcznie." },
        ],
      },
      {
        type: "stats",
        h2: "Wyniki",
        items: [
          { value: "1 paleta", label: "wolumen na start" },
          { value: "6 × 40HC", label: "miesięcznie obecnie" },
          { value: "B2B + B2C", label: "kanały w UK" },
        ],
      },
    ],
    faqs: [
      { q: "Czy marka spożywcza może zacząć w UK od małego wolumenu?", a: "Tak. Ten producent zaczął od jednej palety i w miarę wzrostu popytu przeszedł na wolumeny kontenerowe, bez stałego minimum na starcie." },
      { q: "Czy pomagacie w etykietowaniu żywności na rynek brytyjski?", a: "Tak. Udzielamy wskazówek i wsparcia operacyjnego w zakresie brytyjskich wymogów etykietowania. Za prawną zgodność etykiety odpowiada jednak producent." },
      { q: "Czy pomagacie w klasyfikacji kodów taryfowych?", a: "Tak. Doradzamy przy przypisaniu produktów do właściwego kodu taryfowego, który jest podstawą importu do UK. Ostateczna klasyfikacja należy do importera." },
      { q: "Jak producent tortilli rozwinął sprzedaż w UK?", a: "Producent z Ankary wszedł do Wielkiej Brytanii z jedną paletą testową. Po uporządkowaniu kodów taryfowych, etykietowania, fulfillmentu i dystrybucji operacja urosła do sześciu kontenerów 40 ft high cube miesięcznie." },
      { q: "Jakimi kanałami trafiają tortille do klientów w UK?", a: "Z magazynu w Essex towar trafia zarówno do kanałów B2B, jak i B2C przez brytyjską sieć dystrybucji, a każda dostawa jest przyjmowana, liczona i sprawdzana jakościowo." },
    ],
    related: ["/pl/wejscie-na-rynek-brytyjski", "/pl/rozladunek-kontenerow", "/pl/skladowanie-palet", "/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze"],
    quote: { label: "Poproś o wycenę magazynu i dystrybucji", service: "distribution" },
  },
  {
    slug: "/pl/studia-przypadkow/magazyn-czesci-samochodowych",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 3, section: "Motoryzacja" },
    title: "Części samochodowe OEM: magazyn w UK",
    description:
      "Producent części OEM i aftermarket: zapas w UK, kontrola uszkodzeń ze zdjęciami, ochronne pakowanie i dostawy na następny dzień do dealerów i warsztatów.",
    label: "Części OEM – magazyn w UK",
    eyebrow: "Studium przypadku · Motoryzacja",
    h1: "Części samochodowe OEM i aftermarket: magazyn w UK",
    lead:
      "Producent części OEM i aftermarket do samochodów luksusowych wysyłał każde brytyjskie zamówienie z Turcji. Dziś trzyma zapas w naszym magazynie w Essex, z kontrolą uszkodzeń dokumentowaną zdjęciami przy przyjęciu i wydaniu, i zaopatruje brytyjskich dealerów, warsztaty oraz klientów internetowych z dostawą na następny dzień lub w 2 dni.",
    facts: [
      "Składowanie: palety i regały półkowe",
      "100% śledzenia uszkodzeń z dokumentacją zdjęciową",
      "Dostawa do dealerów w UK na następny dzień lub w 2 dni",
    ],
    sections: [
      {
        type: "cards",
        h2: "Rozwiązanie LondraDepo",
        items: [
          { title: "Składowanie na paletach", text: "Gabarytowe zderzaki i panele składowane na paletach." },
          { title: "Procedura kontroli uszkodzeń", text: "Zdjęcia przy przyjęciu i wydaniu oraz rejestr uszkodzeń dla każdej części." },
          { title: "Zapas na poziomie SKU", text: "Części OEM i aftermarket składowane osobno, według SKU." },
          { title: "Ochronne pakowanie", text: "Lakierowane i wrażliwe powierzchnie zabezpieczone pianką i folią bąbelkową." },
          { title: "Dystrybucja do dealerów w UK", text: "Dostawy na następny dzień dla warsztatów, dealerów i zamówień internetowych." },
          { title: "Raporty stanów", text: "Okresowe raporty stanów i alerty niskiego zapasu." },
        ],
      },
      {
        type: "stats",
        h2: "Wyniki",
        items: [
          { value: "Następny dzień", label: "dostawa do dealerów w UK" },
          { value: "100%", label: "śledzenie uszkodzeń" },
          { value: "EN + TR", label: "obsługa w dwóch językach" },
        ],
      },
    ],
    faqs: [
      { q: "Czy składujecie gabarytowe części, takie jak zderzaki i panele?", a: "Tak. Składujemy części samochodowe każdej wielkości, w tym przednie i tylne zderzaki oraz panele drzwi, na paletach i w regałach półkowych." },
      { q: "Czy sprawdzacie części pod kątem uszkodzeń?", a: "Tak. Każda część jest oglądana i fotografowana przy przyjęciu oraz rejestrowana w systemie. O każdym stwierdzonym uszkodzeniu informujemy klienta." },
      { q: "Czy dystrybuujecie części samochodowe w całej Wielkiej Brytanii?", a: "Tak. Z magazynu w Essex dostarczamy części do dealerów, warsztatów i klientów internetowych w całym UK, na następny dzień lub w 2 dni, z ochronnym pakowaniem lakierowanych i wrażliwych powierzchni." },
      { q: "Jak dokumentujecie stan części?", a: "Każda część jest sprawdzana i fotografowana przy przyjęciu i wydaniu, więc ma własną historię stanu. Takie śledzenie uszkodzeń ze zdjęciami ułatwia reklamacje i chroni lakierowane powierzchnie." },
      { q: "Jak rozdzielacie części OEM i aftermarket w magazynie?", a: "Części OEM i aftermarket są składowane osobno, według SKU, a klient otrzymuje okresowe raporty stanów oraz alerty, gdy zapas danej pozycji spada do niskiego poziomu." },
    ],
    related: ["/pl/branze/czesci-samochodowe", "/pl/skladowanie-palet", "/pl/dystrybucja-uk", "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych"],
    quote: { label: "Poproś o wycenę magazynowania", service: "storage" },
  },
  {
    slug: "/pl/studia-przypadkow/dystrybucja-biezni-uk",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 4, section: "Zdrowie i e-commerce" },
    title: "Bieżnie do chodzenia: dystrybucja w UK",
    description:
      "Jak bieżnie do chodzenia dla seniorów i rehabilitacji są składowane, wysyłane do klientów online i dostarczane do dyskontów w UK z jednego magazynu w Essex.",
    label: "Bieżnie do chodzenia – dystrybucja w UK",
    eyebrow: "Studium przypadku · Zdrowie i e-commerce",
    h1: "Bieżnie do chodzenia: sprzedaż online i dystrybucja do sklepów w UK",
    lead:
      "Bieżnie do chodzenia dla seniorów, osób w trakcie rehabilitacji i do ćwiczeń w domu są gabarytowe, wymagają ostrożnej obsługi i sprzedają się w dwóch zupełnie różnych kanałach. LondraDepo obsługuje oba z jednego magazynu w Essex: zamówienia internetowe są kompletowane, pakowane i wysyłane kurierem, a hurtowe dostawy paletowe trafiają do sieci dyskontów i sklepów w całej Wielkiej Brytanii.",
    facts: [
      "Składowanie i obsługa towarów gabarytowych",
      "Fulfillment online oraz dystrybucja do dyskontów",
      "Koordynacja kurierów i transportu w całym UK",
    ],
    sections: [
      {
        type: "cards",
        h2: "Rozwiązanie LondraDepo",
        items: [
          { title: "Składowanie gabarytów", text: "Przestrzeń i warunki załadunku dostosowane do dużych bieżni." },
          { title: "Fulfillment online", text: "Kompletacja, pakowanie i wysyłka kurierska zamówień e-commerce." },
          { title: "Dostawy do dyskontów", text: "Hurtowe wysyłki paletowe do sieci dyskontów i sklepów." },
          { title: "Dystrybucja detaliczna w UK", text: "Koordynacja transportu i kurierów dla dostaw B2C i B2B." },
          { title: "Kontrola jakości", text: "Liczenie, kontrola uszkodzeń i weryfikacja SKU przy każdej dostawie." },
          { title: "Zarządzanie zapasem", text: "Ewidencja stanów, alerty niskiego zapasu i okresowe raporty." },
        ],
      },
    ],
    faqs: [
      { q: "Czy realizujecie zamówienia na produkty gabarytowe?", a: "Tak. Dla dużych i ciężkich produktów, takich jak bieżnie do chodzenia, zapewniamy dedykowaną przestrzeń składowania, procedury przyjęcia towaru i fulfillment zamówień." },
      { q: "Czy dostarczacie towar do sieci dyskontów?", a: "Tak. Organizujemy hurtowe wysyłki i dystrybucję do sieci dyskontów i sklepów detalicznych w całej Wielkiej Brytanii, z zapasu składowanego w Essex." },
      { q: "Czy dostarczacie do każdego regionu Wielkiej Brytanii?", a: "Tak. Z magazynu w Essex dostarczamy towar do wszystkich regionów Wielkiej Brytanii, koordynując przesyłki kurierskie i transport paletowy." },
      { q: "Jakie kanały obsługuje operacja bieżni?", a: "Operacja bieżni do chodzenia obsługuje sprzedaż internetową i dystrybucję detaliczną w całym UK z tego samego zapasu w Essex, w tym hurtowe dostawy do dyskontów i sieci sklepów." },
      { q: "Jak sprawdzane są dostawy bieżni do magazynu?", a: "Każda dostawa jest liczona, kontrolowana pod kątem uszkodzeń i weryfikowana według SKU, a stany są ewidencjonowane z alertami niskiego zapasu i okresowymi raportami." },
    ],
    related: ["/pl/fulfillment-ecommerce", "/pl/dystrybucja-uk", "/pl/studia-przypadkow/stacje-zasilania-uk"],
    quote: { label: "Poproś o wycenę fulfillmentu", service: "fulfilment" },
  },
  {
    slug: "/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 3, section: "Motoryzacja i tapicerka" },
    title: "Pokrowce samochodowe: magazyn w UK",
    description:
      "Jak producent tapicerki samochodowej składuje ekoskórę i pokrowce w UK, wysyła zamówienia z eBay i Amazon tego samego dnia i zaopatruje brytyjskie warsztaty.",
    label: "Pokrowce samochodowe – magazyn w UK",
    eyebrow: "Studium przypadku · Motoryzacja i tapicerka",
    h1: "Pokrowce na fotele i ekoskóra: magazyn w Wielkiej Brytanii",
    lead:
      "Producent pokrowców na fotele samochodowe i ekoskóry nie nadążał z obsługą popytu brytyjskich warsztatów i dealerów, wysyłając wszystko z Turcji. Jego zapas znajduje się teraz w naszym magazynie w Essex, posortowany według rodzaju materiału; zamówienia internetowe z eBay, Amazon i własnej strony oraz zamówienia B2B od dealerów są realizowane tego samego dnia i wysyłane w całej Wielkiej Brytanii.",
    facts: [
      "Składowanie: palety i regały na rolki i panele",
      "Kanały: eBay, Amazon, własna strona, dealerzy B2B",
      "Zamówienia realizowane tego samego dnia",
    ],
    sections: [
      {
        type: "cards",
        h2: "Rozwiązanie LondraDepo",
        items: [
          { title: "Składowanie na paletach i półkach", text: "Rolki i panele składowane porządnie i bez uszkodzeń." },
          { title: "Liczenie i kontrola jakości", text: "Ilość i stan sprawdzane przy każdej dostawie, z raportowaniem braków." },
          { title: "Fulfillment online", text: "Zamówienia z eBay, Amazon i strony internetowej wysyłane tego samego lub następnego dnia." },
          { title: "Dystrybucja B2B", text: "Hurtowe dostawy do warsztatów samochodowych i dealerów tapicerki w całym UK." },
          { title: "Ochronne pakowanie", text: "Materiały pakowane według rodzaju i rozmiaru, aby chronić ich jakość w transporcie." },
        ],
      },
      {
        type: "stats",
        h2: "Wyniki",
        items: [
          { value: "Tego samego dnia", label: "realizacja zamówień" },
          { value: "Online + B2B", label: "z jednego magazynu" },
        ],
      },
    ],
    faqs: [
      { q: "Czy składujecie rolki i materiały wielkoformatowe?", a: "Tak. Rolki ekoskóry i duże panele układamy prawidłowo na paletach, aby ograniczyć ryzyko uszkodzeń podczas składowania i obsługi." },
      { q: "Czy dostarczacie B2B do warsztatów w Wielkiej Brytanii?", a: "Tak. Z Essex dostarczamy towar do warsztatów, dealerów i tapicerów w całej Wielkiej Brytanii, na paletach lub w pojedynczych sztukach." },
      { q: "Czy obsługujecie zamówienia z kanałów internetowych?", a: "Tak. Realizujemy pojedyncze zamówienia z eBay, Amazon i Twojego sklepu internetowego, z wysyłką tego samego lub następnego dnia." },
      { q: "Jak szybko realizowane są zamówienia na pokrowce?", a: "W tej działającej operacji zamówienia z eBay, Amazon i od warsztatów B2B są realizowane tego samego dnia z magazynu w Essex, a rolki i materiały wielkoformatowe są składowane na paletach." },
      { q: "Co dzieje się, gdy w dostawie materiałów brakuje towaru?", a: "Przy każdej dostawie sprawdzamy ilość i stan materiałów, a wykryte braki zgłaszamy klientowi, zanim towar zostanie włączony do stanów magazynowych." },
    ],
    related: ["/pl/branze/czesci-samochodowe", "/pl/skladowanie-palet", "/pl/fulfillment-ecommerce", "/pl/studia-przypadkow/magazyn-czesci-samochodowych"],
    quote: { label: "Poproś o wycenę fulfillmentu", service: "fulfilment" },
  },
  {
    slug: "/pl/studia-przypadkow/stacje-zasilania-uk",
    kind: "case",
    parent: HUB,
    modified: MODIFIED,
    article: { ...CASE_DATE, readMins: 3, section: "Elektronika i urządzenia smart" },
    title: "Przenośne stacje zasilania: operacja w UK",
    description:
      "Jak przenośne stacje zasilania są testowane, wyposażane w brytyjskie karty SIM, ładowane i wysyłane na następny dzień do użytkowników w UK z magazynu w Essex.",
    label: "Stacje zasilania – operacja w UK",
    eyebrow: "Studium przypadku · Elektronika i urządzenia smart",
    h1: "Przenośne stacje zasilania: operacja techniczna i logistyczna w UK",
    lead:
      "Producent przenośnych stacji zasilania potrzebował do wejścia na rynek brytyjski czegoś więcej niż składowania: każde urządzenie wymagało testu elektrycznego, aktywacji brytyjskiej karty SIM i naładowania przed wysyłką. LondraDepo wykonuje te czynności w swoim magazynie w Essex i wysyła gotowe do użycia urządzenia do użytkowników końcowych w UK z dostawą na następny dzień.",
    facts: [
      "Przygotowanie techniczne: test elektryczny, aktywacja SIM, ładowanie",
      "7 etapów od przyjęcia towaru do dostawy do użytkownika",
      "Dostawa w UK na następny dzień",
    ],
    sections: [
      {
        type: "steps",
        h2: "Przebieg operacji",
        items: [
          { title: "Przyjęcie towaru", text: "Urządzenia przyjmowane i sprawdzane pod kątem ilości i stanu opakowań." },
          { title: "Liczenie i oględziny", text: "Każde urządzenie liczone, oglądane i rejestrowane w systemie." },
          { title: "Kontrola elektryczna", text: "Test połączenia elektrycznego i pojemności ładowania; wadliwe sztuki odkładane osobno." },
          { title: "Aktywacja SIM", text: "W każdym urządzeniu montowana i aktywowana brytyjska karta SIM, a każda aktywacja jest rejestrowana." },
          { title: "Ładowanie", text: "Urządzenia ładowane do uzgodnionego poziomu przed wysyłką." },
          { title: "Przygotowanie do wysyłki", text: "Urządzenia etykietowane, pakowane i zgłaszane do przewoźnika." },
          { title: "Dostawa do użytkownika", text: "Dostawa na następny dzień do użytkowników końcowych w całym UK." },
        ],
      },
    ],
    faqs: [
      { q: "Czy wykonujecie czynności techniczne przy elektronice?", a: "Tak. Zapewniamy aktywację kart SIM, kontrolę ładowania i techniczne przygotowanie przed wysyłką. Każde urządzenie przechodzi uzgodnione testy, zanim opuści magazyn." },
      { q: "Czy karty SIM można aktywować w magazynie w UK?", a: "Tak. Aktywację brytyjskich kart SIM przeprowadzamy w naszym magazynie, a każda aktywacja jest rejestrowana i raportowana klientowi." },
      { q: "Czy wysyłacie urządzenia bezpośrednio do użytkowników końcowych?", a: "Tak. Przygotowane urządzenia wysyłamy do użytkowników końcowych w całej Wielkiej Brytanii, z dostawą na następny dzień lub w 2 dni." },
      { q: "Jakie przygotowanie techniczne odbywa się przed wysyłką?", a: "Przenośne stacje zasilania są składowane w Essex i przed wysyłką przechodzą test elektryczny, aktywację karty SIM i ładowanie, a następnie trafiają do użytkowników w całym UK." },
      { q: "Co dzieje się z urządzeniami, które nie przejdą testu?", a: "Podczas kontroli elektrycznej sprawdzamy połączenie i pojemność ładowania każdej stacji, a wadliwe sztuki odkładamy osobno, aby nie trafiły do wysyłki do użytkowników końcowych." },
    ],
    related: ["/pl/obsluga-ladunkow", "/pl/fulfillment-ecommerce", "/pl/studia-przypadkow/dystrybucja-biezni-uk"],
    quote: { label: "Poproś o wycenę fulfillmentu", service: "fulfilment" },
  },
];

const caseLink = (slug: string) => {
  const p = plCasePages.find((c) => c.slug === slug);
  if (!p) throw new Error(`pl case hub: unknown case ${slug}`);
  return { href: p.slug, title: p.h1, text: p.description, tag: p.article?.section };
};

const plCaseHub: EnPage = {
  slug: HUB,
  kind: "hub",
  modified: MODIFIED,
  title: "Studia przypadków: magazyn i fulfillment w UK",
  description:
    "Działające operacje magazynowania, fulfillmentu i dystrybucji w UK z magazynu w Essex: żywność, opakowania, motoryzacja, moda, gabaryty i elektronika.",
  label: "Studia przypadków",
  eyebrow: "Prawdziwe operacje",
  h1: "Studia przypadków: magazyn i fulfillment w Wielkiej Brytanii",
  lead:
    "To działające operacje prowadzone z magazynu LondraDepo w Rayleigh w Essex dla marek sprzedających w Wielkiej Brytanii. Każde studium pokazuje punkt wyjścia, sposób zorganizowania składowania, fulfillmentu i dystrybucji oraz efekty: od producenta żywności, który zaczął od jednej palety testowej, a dziś wysyła sześć kontenerów 40 ft high cube miesięcznie, po markę modową, która przeniosła realizację brytyjskich zamówień z Holandii do Essex.",
  sections: [
    {
      type: "stats",
      h2: "Wyniki tych operacji",
      items: [
        { value: `${plCasePages.length}`, label: "działających operacji w UK" },
        { value: "1 → 6×40HC", label: "producent tortilli: od palety testowej do kontenerów miesięcznie" },
        { value: "~80%", label: "szybsza dostawa w UK dla Cruyff po zmianie" },
        { value: "Tego samego dnia", label: "realizacja zamówień online i od warsztatów (pokrowce)" },
      ],
    },
    {
      type: "links",
      h2: "Żywność, opakowania i dystrybucja B2B",
      items: [caseLink("/pl/studia-przypadkow/dystrybucja-tortilli-uk"), caseLink("/pl/studia-przypadkow/dystrybucja-pudelek-na-pizze")],
    },
    {
      type: "links",
      h2: "Motoryzacja i tapicerka",
      items: [caseLink("/pl/studia-przypadkow/magazyn-czesci-samochodowych"), caseLink("/pl/studia-przypadkow/magazyn-pokrowcow-samochodowych")],
    },
    {
      type: "links",
      h2: "E-commerce, gabaryty i elektronika",
      items: [
        caseLink("/pl/studia-przypadkow/cruyff-fulfillment-uk"),
        caseLink("/pl/studia-przypadkow/dystrybucja-biezni-uk"),
        caseLink("/pl/studia-przypadkow/stacje-zasilania-uk"),
      ],
    },
    {
      type: "steps",
      h2: "Jak zwykle zaczynają się takie operacje",
      items: [
        { title: "Opisz produkt i plan", text: "Rodzaj towaru, przewidywana liczba palet lub kartonów, zamówienia miesięcznie i kanały sprzedaży." },
        { title: "Wysyłka testowa", text: "Możesz zacząć od małej partii, tak jak producent tortilli od jednej palety, aby sprawdzić rynek brytyjski i proces." },
        { title: "Uruchomienie", text: "Uzgadniamy przyjęcie towaru, prowadzenie stanów w Mintsoft WMS, etykietowanie i obieg zamówień." },
        { title: "Skalowanie", text: "Wolumeny, kanały i programy dostaw rosną z tego samego zapasu w Essex." },
      ],
    },
  ],
  faqs: [
    { q: "Czy mogę zacząć od niewielkiej partii towaru?", a: "Tak. Nie ma stałego minimum. Producent tortilli opisany w tych studiach wszedł na rynek brytyjski z jedną paletą testową, a dziś wysyła sześć kontenerów 40 ft high cube miesięcznie." },
    { q: "Z jakimi branżami pracujecie?", a: "Działające operacje obejmują żywność i FMCG, opakowania B2B, części samochodowe i tapicerkę, modę, towary gabarytowe, takie jak bieżnie do chodzenia, oraz elektronikę użytkową. Więcej na stronie branż." },
    { q: "Czy ten sam zapas może obsługiwać klientów online i B2B?", a: "Tak. Kilka z opisanych operacji realizuje zamówienia e-commerce oraz dostawy hurtowe i dla klientów biznesowych z tego samego zapasu w magazynie w Essex." },
    { q: "Czy to prawdziwe operacje?", a: "Tak. Każde studium przypadku opisuje działającą operację prowadzoną z magazynu LondraDepo w Rayleigh w Essex: punkt wyjścia, organizację składowania, fulfillmentu i dystrybucji oraz efekty." },
    { q: "Jak uruchomić podobną operację?", a: "Opisz produkt, przewidywane wolumeny i kanały sprzedaży w formularzu zapytania. Możesz zacząć od jednej palety testowej, a zespół zaplanuje z Tobą przyjęcie towaru, składowanie i obieg zamówień." },
  ],
  related: ["/pl/branze", "/pl/wejscie-na-rynek-brytyjski", "/pl/import-do-wielkiej-brytanii", "/pl/fulfillment-wielka-brytania", "/pl/skladowanie-palet", "/pl/o-nas"],
  cta: { h2: "Planujesz operację w Wielkiej Brytanii?", text: "Opisz swój model działania, a zaplanujemy z Tobą magazyn i logistykę w UK." },
  quote: { label: "Poproś o wycenę operacji w UK", service: "other" },
};

export const plCases: EnPage[] = [plCaseHub, ...plCasePages];
