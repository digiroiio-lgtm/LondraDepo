import type { EnPage } from "../en/types";

/**
 * Polish blog articles (wave 2, part B): importing, choosing a 3PL, import costs and documents, bonded vs duty-paid
 * storage, Incoterms and Amazon seller guides. Translated from src/content/en/blog.ts; facts are limited to what the
 * EN pages state. Interactive widgets (checklist downloads, calculators) are English-only and omitted here.
 * The team speaks English and Turkish, so no page promises Polish-language service.
 */
const MODIFIED = "2026-11-28";

const DATE = { published: "2026-11-10", modified: "2026-11-10" };

export const plBlogB: EnPage[] = [
  {
    slug: "/pl/blog/import-do-uk-przewodnik",
    kind: "article",
    parent: "/pl/blog",
    article: { ...DATE, readMins: 9, section: "Import" },
    modified: MODIFIED,
    title: "Import towarów do Wielkiej Brytanii: przewodnik",
    description:
      "Jak importować towary do Wielkiej Brytanii: GB EORI, kody towarowe, taryfa celna UK, zgłoszenie w CDS, cło i VAT importowy, reguły pochodzenia i magazyn.",
    label: "Import do UK: przewodnik",
    h1: "Jak importować towary do Wielkiej Brytanii: praktyczny przewodnik",
    lead:
      "Aby wwieźć towar do Wielkiej Brytanii, importer potrzebuje numeru GB EORI, prawidłowego kodu towarowego dla każdego produktu, zgłoszenia celnego złożonego w systemie CDS brytyjskiego urzędu HMRC oraz zapłaty lub rozliczenia cła i VAT importowego. Firmy z zagranicy zwykle współpracują ze spedytorem lub agencją celną oraz z magazynem w UK, który przyjmuje towar po odprawie.",
    sections: [
      {
        type: "steps",
        h2: "Import krok po kroku",
        items: [
          { title: "Ustal, kto jest importerem", text: "Importer (importer of record) odpowiada za zgłoszenie celne, cło i VAT importowy. Może nim być Twoja firma, brytyjska spółka zależna lub kupujący, zależnie od przyjętej reguły Incoterms." },
          { title: "Uzyskaj numer GB EORI", text: "Importer potrzebuje numeru EORI zaczynającego się od GB, aby wwozić towary do Wielkiej Brytanii. Wniosek składa się na GOV.UK." },
          { title: "Sklasyfikuj produkty", text: "Znajdź kod towarowy każdego produktu w brytyjskiej taryfie online (UK Integrated Online Tariff). Kod określa stawkę cła i ewentualne ograniczenia importowe." },
          { title: "Sprawdź pochodzenie i preferencje", text: "Towary spełniające reguły pochodzenia z brytyjskiej umowy handlowej, np. z UE, mogą korzystać z obniżonej lub zerowej stawki cła, jeśli masz właściwy dowód pochodzenia." },
          { title: "Zarezerwuj transport i złóż zgłoszenie", text: "Spedytor lub agencja celna organizuje transport i składa zgłoszenie importowe w CDS przed przybyciem towaru lub w chwili przybycia." },
          { title: "Zapłać lub rozlicz cło i VAT", text: "Cło płaci się przy zwolnieniu towaru. VAT importowy wynosi zwykle 20% wartości z cłem; importerzy zarejestrowani do VAT często mogą korzystać z odroczonego rozliczenia VAT (postponed VAT accounting)." },
          { title: "Dostarcz towar do magazynu w UK", text: "Odprawiony towar trafia do magazynu, gdzie jest rozładowany, przeliczony i przyjęty na stan, gotowy do realizacji zamówień." },
        ],
      },
      {
        type: "table",
        h2: "Najważniejsze pojęcia",
        head: ["Pojęcie", "Co oznacza"],
        rows: [
          ["EORI", "Numer identyfikacyjny podmiotu gospodarczego (Economic Operators Registration and Identification), wymagany przy imporcie do Wielkiej Brytanii"],
          ["Kod towarowy", "Klasyfikacja produktu, która w brytyjskiej taryfie celnej (UK Global Tariff) określa cło i ograniczenia"],
          ["CDS", "Customs Declaration Service, system HMRC, w którym składa się zgłoszenia importowe"],
          ["Importer of record", "Podmiot prawnie odpowiedzialny za import, należne cło i VAT importowy"],
          ["Postponed VAT accounting", "Odroczone rozliczenie VAT: importerzy zarejestrowani do VAT rozliczają VAT importowy w deklaracji VAT zamiast płacić go na granicy"],
          ["DAP / DDP", "Reguły Incoterms: przy DAP odprawę importową wykonuje kupujący, przy DDP sprzedający, który może potrzebować rejestracji VAT w UK"],
        ],
      },
      {
        type: "list",
        h2: "Dokumenty, które zwykle są potrzebne",
        items: [
          "Faktura handlowa z wartością, walutą i regułą Incoterms",
          "Lista pakunkowa (packing list) z kartonami, wagami i wymiarami",
          "Dokument przewozowy: konosament (bill of lading), CMR lub lotniczy list przewozowy",
          "Dowód pochodzenia, jeśli ubiegasz się o preferencyjną stawkę cła",
          "Certyfikaty lub licencje, jeśli wymaga ich Twój produkt",
        ],
      },
      {
        type: "text",
        h2: "Przepisy produktowe do sprawdzenia przed wysyłką",
        paras: [
          "Niektóre towary wymagają brytyjskiego oznakowania zgodności (UKCA lub CE, tam gdzie jest jeszcze akceptowane), etykiet zgodnych z przepisami UK albo licencji. Żywność, rośliny i produkty pochodzenia zwierzęcego mogą wymagać świadectw zdrowia i wcześniejszego zgłoszenia w systemie IPAFFS. Przed pierwszą wysyłką sprawdź przepisy dla swojej kategorii produktu na GOV.UK, bo towar niezgodny z wymogami może zostać zatrzymany na granicy.",
          "Cło i VAT importowy to koszty odrębne od logistyki. Składowanie w LondraDepo zaczyna się od 3,50 £ + VAT za paletę tygodniowo, a transport i odprawę celną zapewnia nasza spółka macierzysta, Arca Trade Group.",
        ],
      },
    ],
    faqs: [
      { q: "Jaki numer EORI jest potrzebny przy imporcie do Wielkiej Brytanii?", a: "Importer potrzebuje numeru EORI zaczynającego się od GB. Bez niego nie można złożyć zgłoszenia importowego dla towarów wwożonych do Wielkiej Brytanii, dlatego warto złożyć wniosek na GOV.UK przed pierwszą dostawą." },
      { q: "Ile wynosi VAT importowy w Wielkiej Brytanii?", a: "VAT importowy jest zwykle naliczany według stawki podstawowej 20% od wartości towaru powiększonej o cło i koszty transportu do UK, choć niektóre towary mają stawki obniżone. Firmy zarejestrowane do VAT często mogą korzystać z odroczonego rozliczenia VAT." },
      { q: "Czy firma z zagranicy może być importerem towaru do UK?", a: "Tak. Firma zagraniczna z numerem GB EORI może działać jako importer, ale obowiązki w zakresie VAT i podatków zależą od sposobu sprzedaży w Wielkiej Brytanii. Przed pierwszą wysyłką warto skonsultować się z doradcą." },
      { q: "Kto może złożyć za mnie zgłoszenie celne w UK?", a: "Zgłoszenie importowe zwykle składa agencja celna lub spedytor. Arca Trade Group, operator LondraDepo, składa zgłoszenia importowe w imieniu klientów, a Ty możesz też skorzystać z własnej agencji celnej." },
      { q: "Czy LondraDepo może obsłużyć cały proces importu?", a: "Tak. Arca Trade Group, operator LondraDepo, może zorganizować transport i złożyć brytyjskie zgłoszenie celne, a LondraDepo rozładowuje, składuje i wysyła towar z magazynu w Essex. Możesz też korzystać z własnego spedytora." },
    ],
    related: ["/pl/import-do-wielkiej-brytanii", "/pl/odprawa-celna-uk", "/pl/rozladunek-kontenerow", "/pl/lokalizacje/logistyka-port-magazyn", "/pl/wejscie-na-rynek-brytyjski"],
    quote: { label: "Poproś o wycenę importu i odprawy", service: "freight-customs" },
  },
  {
    slug: "/pl/blog/jak-wybrac-3pl-w-uk",
    serviceBox: { href: "/pl/3pl-wielka-brytania", title: "Porównujesz operatorów 3PL w UK?", text: "Zobacz, co LondraDepo oferuje jako 3PL w Essex: przyjęcie towaru, składowanie, fulfillment, Amazon FBA prep i dostawy w UK, ze stanami w Mintsoft WMS.", cta: "3PL w Wielkiej Brytanii" },
    kind: "article",
    parent: "/pl/blog",
    article: { ...DATE, readMins: 7, section: "Wybór partnera" },
    modified: MODIFIED,
    title: "Jak wybrać magazyn 3PL w UK: 12 pytań",
    description:
      "Wybierasz magazyn 3PL w Wielkiej Brytanii? 12 pytań o lokalizację, ceny, wgląd w stany, kanały sprzedaży, zwroty, minima, umowę, ubezpieczenie i odprawę.",
    label: "Jak wybrać 3PL w UK",
    h1: "Jak wybrać magazyn 3PL w Wielkiej Brytanii: 12 pytań do zadania",
    lead:
      "Wybierając magazyn 3PL (third-party logistics) w Wielkiej Brytanii, porównaj operatorów w dwunastu punktach: gdzie jest magazyn, jak wyceniana jest każda pozycja kosztów, jak widzisz swoje stany, jakie kanały sprzedaży obsługuje, jak działają zwroty, czy są minima, jakie są warunki umowy i wypowiedzenia, ubezpieczenie, wsparcie w transporcie i odprawie celnej, komunikacja, referencje oraz czy można odwiedzić magazyn. Te same pytania zadane każdemu operatorowi sprawiają, że oferty są porównywalne i szybko widać, czy magazyn pasuje do Twoich produktów.",
    sections: [
      {
        type: "table",
        h2: "12 pytań",
        head: ["Pytanie", "Dlaczego to ważne"],
        rows: [
          ["1. Gdzie jest magazyn i jak daleko od portu przybycia oraz od Twoich klientów?", "Odległość wpływa na koszt transportu i czas dostaw, zwłaszcza przy imporcie kontenerowym."],
          ["2. Jak wyceniana jest każda pozycja kosztów?", "Składowanie, przyjęcie towaru, kompletacja i pakowanie, opakowania, dostawa i zwroty są zwykle wyceniane osobno; porównuj sumy dla rzeczywistych wolumenów, a nie stawki z nagłówka."],
          ["3. Jak będziesz widzieć swoje stany?", "Zapytaj, jakiego systemu WMS używa operator i jakie raporty lub dostęp otrzymasz."],
          ["4. Jakie kanały sprzedaży obsługuje?", "Sprawdź Shopify, Amazon FBA prep lub FBM, marketplace'y i hurtowe zamówienia paletowe, najlepiej z jednego zapasu."],
          ["5. Jak działają zwroty?", "Zapytaj, jak zwrócone produkty są sprawdzane, przywracane do sprzedaży lub odkładane i jak jesteś o tym informowany."],
          ["6. Czy są minimalne wolumeny lub opłaty?", "Minimalne opłaty miesięczne mogą sprawić, że mały start będzie drogi."],
          ["7. Jakie są warunki umowy i wypowiedzenia?", "Sprawdź długość umowy, okres wypowiedzenia i sposób wydania towaru, jeśli zrezygnujesz."],
          ["8. Jakie ubezpieczenie obejmuje Twój towar?", "Zapytaj, co ubezpiecza magazyn, a co musisz ubezpieczyć sam."],
          ["9. Czy pomoże w transporcie i odprawie celnej?", "Jedna grupa obsługująca transport, brytyjską odprawę celną i magazyn ogranicza liczbę przekazań; sprawdź, kto składa zgłoszenie celne."],
          ["10. Z kim będziesz rozmawiać i w jakim języku?", "Stała osoba kontaktowa i wspólny język przyspieszają codzienną współpracę."],
          ["11. Czy może pokazać podobnych klientów?", "Studia przypadków z Twojej branży pokazują, że operator poradzi sobie z Twoim rodzajem produktu i profilem zamówień."],
          ["12. Czy można odwiedzić magazyn?", "Wizyta lub wideoprezentacja pokazuje regały, porządek i zabezpieczenia."],
        ],
      },
      {
        type: "text",
        h2: "Jak rzetelnie porównać oferty",
        paras: [
          "Wyślij każdemu operatorowi ten sam opis: rodzaj i wymiary produktów, liczbę SKU, liczbę palet lub kartonów w zapasie, miesięczną liczbę zamówień i średnią liczbę sztuk w zamówieniu, kanały sprzedaży, odsetek zwrotów i regiony dostaw. Następnie porównaj miesięczną sumę dla tego scenariusza, a nie pojedyncze stawki, bo niska cena składowania może zostać zrównoważona wyższymi opłatami za obsługę lub dostawę.",
          "Na pierwsze oszacowanie samego składowania pomnóż liczbę palet przez liczbę tygodni i tygodniową stawkę za paletę. W LondraDepo 10 standardowych palet przez 4 tygodnie kosztuje od 140 £ + VAT.",
        ],
      },
      {
        type: "table",
        h2: "Jak LondraDepo odpowiada na te pytania",
        head: ["Temat", "LondraDepo"],
        rows: [
          ["Lokalizacja", "Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY: ok. 13 mil od London Gateway, ok. 16 mil od Tilbury, ok. 37 mil od centrum Londynu"],
          ["Cena składowania", "Od 3,50 £ + VAT za paletę tygodniowo; pozostałe usługi wyceniane według Twoich wolumenów"],
          ["Wgląd w stany", "Stany i zamówienia prowadzone w systemie Mintsoft WMS"],
          ["Kanały", "Shopify, Amazon FBA prep i FBM, marketplace'y i hurtowe zamówienia paletowe z jednego zapasu"],
          ["Minima", "Bez stałego minimum; można zacząć od palety testowej"],
          ["Transport i odprawa celna", "Przez Arca Trade Group, operatora LondraDepo"],
          ["Język", "Angielski i turecki"],
          ["Referencje", "Studia przypadków z branży spożywczej, opakowań, motoryzacji, mody, towarów gabarytowych i elektroniki"],
        ],
      },
    ],
    faqs: [
      { q: "Czym jest magazyn 3PL?", a: "Magazyn 3PL (third-party logistics) przechowuje Twój zapas i w Twoim imieniu przyjmuje dostawy, kompletuje i pakuje zamówienia, wysyła je oraz obsługuje zwroty, więc nie potrzebujesz własnego magazynu ani pracowników." },
      { q: "Jakie informacje wysłać operatorowi 3PL, aby otrzymać dokładną wycenę?", a: "Podaj rodzaj i wymiary produktów, liczbę SKU, liczbę palet lub kartonów w zapasie, miesięczną liczbę zamówień i średnią liczbę sztuk w zamówieniu, kanały sprzedaży, przewidywany odsetek zwrotów i regiony dostaw." },
      { q: "Czy najniższa stawka składowania oznacza najlepszą ofertę?", a: "Niekoniecznie. Składowanie, przyjęcie towaru, kompletacja i pakowanie, opakowania, dostawa i zwroty są zwykle wyceniane osobno, dlatego porównuj miesięczną sumę kosztów dla swoich rzeczywistych wolumenów." },
      { q: "Czy warto odwiedzić magazyn 3PL przed wyborem?", a: "Tak, jeśli to możliwe. Wizyta lub wideoprezentacja pokazuje regały, porządek i zabezpieczenia oraz pozwala poznać zespół, który będzie na co dzień obsługiwał Twój towar." },
      { q: "Jakie warunki umowy z 3PL warto sprawdzić?", a: "Sprawdź długość umowy, okres wypowiedzenia i sposób wydania towaru w razie rezygnacji, a także ewentualne minimalne opłaty miesięczne i zakres ubezpieczenia Twojego towaru w magazynie." },
    ],
    related: ["/pl/3pl-wielka-brytania", "/pl/fulfillment-shopify-uk", "/pl/magazyn-w-wielkiej-brytanii", "/pl/fulfillment-wielka-brytania", "/pl/cennik-magazynowania", "/pl/branze"],
    quote: { label: "Poproś o wycenę usług 3PL", service: "storage" },
  },
  {
    slug: "/pl/blog/koszty-importu-do-uk",
    kind: "article",
    parent: "/pl/blog",
    article: { ...DATE, readMins: 7, section: "Import" },
    modified: MODIFIED,
    title: "Koszty importu do UK: cło, VAT i logistyka",
    description:
      "Ile kosztuje import do Wielkiej Brytanii: transport, odprawa celna, cło według kodu towarowego, 20% VAT importowy, dowóz z portu, rozładunek i składowanie.",
    label: "Koszty importu do UK",
    h1: "Ile kosztuje import towarów do Wielkiej Brytanii?",
    lead:
      "Koszt importu towarów do Wielkiej Brytanii składa się z dwóch części. Opłaty państwowe to cło, zależne od kodu towarowego i pochodzenia produktu, oraz VAT importowy, zwykle 20% wartości towaru powiększonej o cło i transport do UK. Koszty logistyczne to transport międzynarodowy, odprawa celna, dowóz z portu do magazynu, rozładunek, składowanie i realizacja zamówień. Importerzy zarejestrowani do VAT często mogą korzystać z odroczonego rozliczenia VAT, więc nie muszą płacić VAT importowego gotówką na granicy.",
    sections: [
      {
        type: "table",
        h2: "Pozycje kosztów przy imporcie do UK",
        head: ["Koszt", "Od czego zależy", "Kto zwykle go nalicza"],
        rows: [
          ["Transport międzynarodowy", "Rodzaj transportu (morski, drogowy, kolejowy, lotniczy), wolumen i trasa", "Spedytor"],
          ["Odprawa celna", "Liczba zgłoszeń i pozycji", "Agencja celna lub spedytor"],
          ["Cło", "Kod towarowy, wartość celna i pochodzenie; preferencyjne pochodzenie może obniżyć je do 0%", "HMRC"],
          ["VAT importowy", "Zwykle 20% wartości z cłem i transportem do UK; dla niektórych towarów 5% lub 0%", "HMRC (lub odroczone rozliczenie VAT)"],
          ["Dowóz z portu do magazynu", "Odległość od portu i rozmiar kontenera", "Przewoźnik lub spedytor"],
          ["Rozładunek i przyjęcie towaru", "Rozmiar kontenera, towar na paletach lub luzem, liczba SKU", "Magazyn"],
          ["Składowanie", "Liczba palet lub kartonów i czas składowania", "Magazyn (LondraDepo: od 3,50 £ + VAT za paletę tygodniowo)"],
          ["Fulfillment i dostawa", "Liczba zamówień, sztuk w zamówieniu, dostawa paczkowa lub paletowa", "Magazyn i przewoźnicy"],
        ],
      },
      {
        type: "steps",
        h2: "Przykład: jak oblicza się VAT importowy",
        intro: "Hipotetyczna przesyłka pokazująca kolejność obliczeń. Twoja stawka cła zależy od kodu towarowego i pochodzenia towaru.",
        items: [
          { title: "Wartość celna", text: "Towar zafakturowany na 10 000 £ plus 800 £ za transport i ubezpieczenie do UK: 10 800 £." },
          { title: "Cło", text: "Przy założonej stawce 4%: 4% z 10 800 £ = 432 £. Przy preferencyjnym pochodzeniu stawka mogłaby wynosić 0%." },
          { title: "Podstawa VAT", text: "Wartość celna plus cło: 10 800 £ + 432 £ = 11 232 £." },
          { title: "VAT importowy", text: "20% z 11 232 £ = 2246,40 £, płatne przy imporcie lub rozliczane w ramach odroczonego rozliczenia VAT, jeśli jesteś zarejestrowany do VAT." },
        ],
      },
      {
        type: "text",
        h2: "Jak obniżyć koszty importu do UK",
        paras: [
          "Przed wysyłką sprawdź kod towarowy każdego produktu: to on określa stawkę cła, a według GOV.UK niemal połowa pozycji brytyjskiej taryfy KNU (MFN) ma stawkę 0%. Jeśli Twój towar spełnia warunki brytyjskiej umowy handlowej, np. umowy o handlu i współpracy UE–Wielka Brytania (TCA), dowód pochodzenia może obniżyć cło do 0%.",
          "Po stronie logistyki magazyn blisko portu przybycia skraca dowóz, a rozładunek, składowanie i fulfillment w jednym budynku oznaczają brak opłat za przewożenie zapasu między lokalizacjami. Nasz magazyn w Rayleigh jest około 13 mil od London Gateway i 16 mil od Tilbury.",
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "GOV.UK: zintegrowany harmonogram taryfowy UK (udział pozycji MFN ze stawką 0%)", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
          { label: "GOV.UK: stawki VAT (20% podstawowa, 5% obniżona, 0% zerowa)", href: "https://www.gov.uk/vat-rates" },
          { label: "US International Trade Administration (trade.gov): wymogi i dokumenty importowe w Wielkiej Brytanii", href: "https://www.trade.gov/country-commercial-guides/united-kingdom-import-requirements-and-documentation" },
        ],
      },
    ],
    faqs: [
      { q: "Jaka stawka VAT importowego obowiązuje w Wielkiej Brytanii?", a: "VAT importowy jest zwykle naliczany według stawki podstawowej 20% od wartości towaru powiększonej o cło i koszty transportu do UK. Niektóre towary objęte są stawką 5% lub 0%." },
      { q: "Jak oblicza się cło w Wielkiej Brytanii?", a: "Cło to procent wartości celnej, określony przez kod towarowy produktu w brytyjskiej taryfie. Towary spełniające reguły pochodzenia z umowy handlowej UK mogą korzystać z obniżonej lub zerowej stawki, jeśli importer ma dowód pochodzenia." },
      { q: "Na czym polega odroczone rozliczenie VAT (postponed VAT accounting)?", a: "Pozwala importerom zarejestrowanym do VAT rozliczyć VAT importowy w deklaracji VAT zamiast płacić go na granicy, co poprawia płynność finansową firmy przy każdej dostawie do Wielkiej Brytanii." },
      { q: "Ile do kosztów importu dodaje magazyn w UK?", a: "W LondraDepo składowanie zaczyna się od 3,50 £ + VAT za paletę tygodniowo. Rozładunek, przyjęcie towaru, fulfillment i dostawę wyceniamy osobno, według Twoich wolumenów i produktów." },
      { q: "Czy magazyn lub agencja celna stają się importerem towaru?", a: "Nie. Cło płaci i VAT importowy rozlicza importer (importer of record), a nie magazyn. Korzystanie z LondraDepo lub usług celnych Arca Trade Group nie czyni ich importerem Twojego towaru." },
    ],
    related: ["/pl/blog/import-do-uk-przewodnik", "/pl/import-do-wielkiej-brytanii", "/pl/odprawa-celna-uk", "/pl/cennik-magazynowania"],
    quote: { label: "Poproś o wycenę importu do UK", service: "freight-customs" },
  },
  {
    slug: "/pl/blog/lista-kontrolna-amazon-fba-prep",
    serviceBox: { href: "/pl/amazon-fba-prep", title: "Wolisz zlecić przygotowanie towaru?", text: "W Essex wykonujemy etykietowanie FNSKU, kontrolę, pakowanie i dostawę do centrów Amazon w UK, bez stałego minimum.", cta: "Amazon FBA prep w UK" },
    kind: "article",
    parent: "/pl/blog",
    article: { ...DATE, readMins: 5, section: "Amazon" },
    modified: MODIFIED,
    title: "Amazon FBA prep: lista kontrolna dla UK",
    description:
      "Lista kontrolna Amazon FBA prep dla sprzedawców w UK: plan wysyłki, etykiety FNSKU, zaklejanie kodów, opakowania, zestawy, etykiety kartonów, wysyłka.",
    label: "Lista kontrolna FBA prep",
    h1: "Amazon FBA prep: lista kontrolna dla sprzedawców w Wielkiej Brytanii",
    lead:
      "Zanim towar trafi do brytyjskich centrów logistycznych Amazon, każda sztuka musi być możliwa do zidentyfikowania i zapakowana zgodnie z zasadami Amazon: utwórz plan wysyłki w Seller Central, oznacz każdą sztukę kodem FNSKU, zaklej inne skanowalne kody kreskowe, zapakuj produkty tak, by dotarły nieuszkodzone, oznacz zestawy, opisz etykietą każdy karton i dostarcz towar do centrum wskazanego przez Amazon. Amazon aktualizuje wymagania dotyczące przygotowania i pakowania, więc przed każdym nowym produktem sprawdź bieżące zasady w Seller Central.",
    sections: [
      {
        type: "list",
        h2: "Zanim towar dotrze do magazynu",
        items: [
          "Potwierdź ofertę (listing) i kod FNSKU każdego produktu w Seller Central",
          "Sprawdź kategorię przygotowania produktu i wymagania dla danej kategorii w Seller Central",
          "Uzgodnij z magazynem prep, kto i kiedy tworzy plan wysyłki",
          "Wyślij do magazynu listę pakunkową, dane SKU i liczbę sztuk każdego SKU",
        ],
      },
      {
        type: "list",
        h2: "Przygotowanie sztuk",
        items: [
          "Naklej etykietę FNSKU na każdą sztukę, chyba że produkt może korzystać z kodu kreskowego producenta",
          "Zaklej lub usuń inne skanowalne kody kreskowe na produkcie",
          "Zapakuj w worek, pudełko lub zabezpiecz produkty, które mogą się uszkodzić, wyciec lub rozpaść w transporcie",
          "Oznacz zestawy, aby nie zostały rozdzielone i sprzedane osobno",
          "Sprawdź, czy produkty z datą ważności mają etykiety w formacie wymaganym przez Amazon",
        ],
      },
      {
        type: "list",
        h2: "Kartony i dostawa",
        items: [
          "Pakuj kartony w aktualnych limitach wagi i wymiarów Amazon",
          "Naklej na każdy karton etykietę wysyłkową wygenerowaną przez Amazon",
          "Przy wysyłce paletowej spaletyzuj towar i oznacz palety",
          "Zarezerwuj dostawę do wskazanego centrum Amazon w UK",
          "Śledź przyjęcie towaru, aż zapas będzie dostępny do sprzedaży",
        ],
      },
      {
        type: "text",
        h2: "Kiedy skorzystać z magazynu Amazon prep",
        paras: [
          "Jeśli Twój towar przyjeżdża do Wielkiej Brytanii z zagranicy, przygotowanie go w magazynie w UK przed wysyłką do Amazon pozwala poprawić błędy w etykietach lub opakowaniach, zanim Amazon przyjmie towar. LondraDepo przyjmuje zapas w Essex, nakleja etykiety FNSKU, sprawdza opakowania i dostarcza towar do centrum Amazon wskazanego w planie wysyłki. Z tego samego zapasu możemy też realizować zamówienia Shopify, FBM i hurtowe.",
        ],
      },
    ],
    faqs: [
      { q: "Na czym polega przygotowanie towaru do Amazon FBA?", a: "To etykietowanie, pakowanie i przygotowanie produktów, których Amazon wymaga przed przyjęciem ich do swoich centrów logistycznych, np. etykiety FNSKU, opakowania ochronne i etykiety na kartonach." },
      { q: "Czy każda sztuka potrzebuje etykiety FNSKU?", a: "Zwykle tak. Każda sztuka potrzebuje kodu kreskowego Amazon, najczęściej FNSKU, chyba że produkt może korzystać z kodu kreskowego producenta. Sprawdź ustawienia produktu w Seller Central przed wysyłką." },
      { q: "Czy magazyn w UK może wykonać za mnie FBA prep?", a: "Tak. LondraDepo przyjmuje Twój zapas w Essex, przygotowuje go zgodnie z wymaganiami Amazon i dostarcza do wskazanego centrum logistycznego Amazon w Wielkiej Brytanii." },
      { q: "Czy zasady przygotowania towaru w Amazon się zmieniają?", a: "Tak. Amazon aktualizuje wymagania dotyczące przygotowania i pakowania, więc przed wysyłką sprawdzaj bieżące zasady w Seller Central dla każdego produktu, nawet jeśli wysyłałeś już podobny towar." },
      { q: "Czy zapas przygotowany do FBA może obsługiwać też inne kanały?", a: "Tak. W LondraDepo ten sam zapas, z którego przygotowujemy dostawy do Amazon FBA, może obsługiwać zamówienia Shopify, Amazon FBM i zamówienia hurtowe wysyłane z magazynu w Essex." },
    ],
    related: ["/pl/amazon-fba-prep", "/pl/fulfillment-amazon-uk", "/pl/magazyn-dla-sprzedawcow-amazon", "/pl/blog/amazon-prep-uk-przewodnik", "/pl/blog/amazon-fba-czy-fulfillment-uk"],
    quote: { label: "Poproś o wycenę Amazon FBA prep", service: "amazon-prep" },
  },
  {
    slug: "/pl/blog/amazon-private-label-i-wholesale-uk",
    kind: "article",
    parent: "/pl/blog",
    article: { published: "2026-11-13", modified: "2026-11-13", readMins: 6, section: "Amazon" },
    modified: MODIFIED,
    title: "Amazon private label czy wholesale: magazyn w UK",
    description:
      "Jak sprzedawcy Amazon private label, wholesale i arbitrage dostarczają towar do UK, co robi dla nich magazyn prep i jak planować składowanie i partie FBA.",
    label: "Private label i wholesale w Amazon UK",
    h1: "Amazon private label, wholesale i arbitrage: czego każdy model potrzebuje od magazynu w UK",
    lead:
      "Sprzedawcy Amazon działają w trzech głównych modelach i każdy z nich dostarcza towar do magazynu w UK inaczej. Sprzedawcy private label importują własne produkty markowe, często całymi kontenerami, więc potrzebują rozładunku, etykiet FNSKU i składowania, a do Amazon wysyłają towar partiami. Sprzedawcy wholesale kupują markowe produkty od dystrybutorów na mieszanych paletach z wieloma SKU, więc potrzebują dokładnego liczenia, obsługi opakowań zbiorczych i etykietowania tam, gdzie jest wymagane. Sprzedawcy online arbitrage kupują w sklepach detalicznych, więc towar przychodzi jako wiele małych paczek. LondraDepo w Essex jest przygotowane na wolumeny kontenerowe, paletowe i kartonowe, co najlepiej pasuje do private label i wholesale.",
    facts: [
      "Private label: import kontenerowy, etykiety FNSKU, wysyłki partiami do Amazon",
      "Wholesale: mieszane palety, wiele SKU, opakowania zbiorcze",
      "Online arbitrage: wiele małych paczek ze sklepów detalicznych",
      "LondraDepo: wolumeny kontenerowe, paletowe i kartonowe w Essex",
      "Składowanie od 3,50 £ + VAT za paletę tygodniowo; bez stałego minimum",
    ],
    sections: [
      {
        type: "table",
        h2: "Trzy modele sprzedaży w Amazon",
        head: ["", "Private label", "Wholesale", "Online arbitrage"],
        rows: [
          ["Skąd pochodzi towar", "Od własnego producenta, często zagranicznego", "Od dystrybutorów i hurtowni marek", "Ze sklepów stacjonarnych i internetowych"],
          ["Jak przyjeżdża", "Kontener 20 lub 40 stóp, luzem lub na paletach", "Mieszane palety lub dostawy kartonów", "Wiele małych paczek"],
          ["Kody kreskowe", "Zwykle etykiety FNSKU na każdej sztuce", "Kod producenta lub FNSKU, zależnie od oferty", "Etykiety FNSKU; naklejki sklepowe zaklejone lub usunięte"],
          ["Główna praca magazynu", "Rozładunek, liczenie, etykietowanie, paletyzacja, wysyłki partiami", "Liczenie na poziomie SKU, opakowania zbiorcze, etykietowanie", "Otwieranie paczek, kontrola, etykietowanie, pakowanie"],
          ["Dopasowanie do LondraDepo", "Bardzo dobre: kontenery z London Gateway, Tilbury i Felixstowe", "Bardzo dobre: przyjęcia palet i kartonów", "Najpierw omów wolumeny: jesteśmy przygotowani na palety i kartony"],
        ],
      },
      {
        type: "text",
        h2: "Private label: od kontenera do Amazon",
        paras: [
          "Przesyłka private label zwykle dociera do portu w UK w kontenerze. Po odprawie celnej trafia do naszego magazynu w Rayleigh w Essex, 13–16 mil od London Gateway i Tilbury, gdzie jest rozładowana, przeliczona według listy pakunkowej i zarejestrowana w Mintsoft WMS.",
          "Zamiast wysyłać cały kontener do Amazon, wielu sprzedawców trzyma resztę zapasu u nas, od 3,50 £ + VAT za paletę tygodniowo, i wysyła przygotowane partie w miarę sprzedaży w Amazon. Dzięki temu wolno rotujący towar nie generuje opłat za składowanie w Amazon, a ten sam zapas może obsługiwać inne kanały.",
        ],
      },
      {
        type: "text",
        h2: "Wholesale: wiele SKU, dokładne liczenie",
        paras: [
          "Towar wholesale zwykle przychodzi na mieszanych paletach od kilku dostawców, z wieloma SKU w małych ilościach. Kluczowy krok to przeliczenie każdego SKU według dokumentu dostawy i planu wysyłki Amazon przed etykietowaniem, aby rozbieżności wychwycić w UK, a nie w centrum logistycznym Amazon.",
          "To, czy sztuki potrzebują etykiet FNSKU, czy mogą korzystać z kodu producenta, zależy od ustawień każdej oferty w Seller Central; postępujemy według instrukcji dla każdego SKU.",
        ],
      },
      {
        type: "text",
        h2: "Online arbitrage: najpierw porozmawiajmy o wolumenach",
        paras: [
          "Towar z arbitrażu przychodzi jako strumień małych paczek detalicznych, które trzeba otworzyć, sprawdzić i oznaczyć pojedynczo. LondraDepo jest przygotowane głównie na wolumeny kontenerowe, paletowe i kartonowe, więc jeśli działasz w modelu arbitrage, podaj najpierw tygodniową liczbę paczek, a uczciwie potwierdzimy, czy to pasuje.",
        ],
      },
      {
        type: "links",
        h2: "Zaplanuj obsługę Amazon",
        items: [
          { href: "/pl/amazon-fba-prep", title: "Amazon FBA prep w Essex", text: "Etykiety FNSKU, pakowanie, zasady paletowe i dostawa do Amazon.", tag: "Usługa" },
          { href: "/pl/centra-amazon-w-uk", title: "Centra Amazon w UK", text: "Kody, lokalizacje i odległości drogowe od naszego magazynu.", tag: "Przewodnik" },
          { href: "/pl/rozladunek-kontenerow", title: "Rozładunek kontenerów", text: "Kontenery FCL i LCL: rozładunek, liczenie i paletyzacja.", tag: "Usługa" },
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "Amazon: Fulfilment by Amazon (sell.amazon.co.uk)", href: "https://sell.amazon.co.uk/fulfilment-by-amazon" },
          { label: "Amazon Freight: dostawy LTL do centrów Amazon w UK, lista kontrolna nadawcy", href: "https://freight.amazon.co.uk/newsroom/uk-ltl-amazon-fcs-checklist" },
        ],
      },
    ],
    faqs: [
      { q: "Czym różni się Amazon private label od wholesale?", a: "Sprzedawcy private label sprzedają własną markę, produkowaną na zamówienie przez producenta, i zwykle importują ją kontenerami. Sprzedawcy wholesale kupują istniejące marki od dystrybutorów i odsprzedają je w Amazon, zwykle otrzymując mieszane palety z wieloma SKU." },
      { q: "Czy produkty wholesale potrzebują etykiet FNSKU?", a: "To zależy od oferty. Niektóre oferty wholesale mogą korzystać z kodu kreskowego producenta, inne wymagają etykiety FNSKU na każdej sztuce; ustawienie wybiera się w Seller Central. LondraDepo etykietuje każde SKU według Twoich instrukcji." },
      { q: "Czy mogę składować kontener private label w UK i wysyłać go do Amazon partiami?", a: "Tak. LondraDepo rozładowuje kontenery w Rayleigh w Essex, składuje zapas od 3,50 £ + VAT za paletę tygodniowo i przygotowuje partie do Amazon w miarę sprzedaży, więc wolno rotujący towar nie zalega w magazynach Amazon." },
      { q: "Czy LondraDepo współpracuje ze sprzedawcami online arbitrage?", a: "LondraDepo jest przygotowane głównie na wolumeny kontenerowe, paletowe i kartonowe, co najlepiej pasuje do private label i wholesale. Towar z arbitrażu przychodzi jako wiele małych paczek, więc najpierw podaj tygodniową liczbę paczek, a potwierdzimy, czy to pasuje." },
      { q: "Który model Amazon pasuje do producenta z Polski lub innego kraju UE?", a: "Producent sprzedający własną markę w Amazon UK działa w modelu private label: importuje własne produkty kontenerami lub paletami, odprawia je w brytyjskim urzędzie celnym i trzyma zapas w magazynie w UK, takim jak LondraDepo, wysyłając partie do Amazon i obsługując inne kanały." },
    ],
    related: ["/pl/amazon-fba-prep", "/pl/centra-amazon-w-uk", "/pl/magazyn-dla-sprzedawcow-amazon", "/pl/blog/lista-kontrolna-amazon-fba-prep", "/pl/rozladunek-kontenerow"],
    quote: { label: "Poproś o wycenę Amazon FBA prep", service: "amazon-prep" },
  },
  {
    slug: "/pl/blog/dokumenty-importowe-uk",
    kind: "article",
    parent: "/pl/blog",
    article: { published: "2026-11-13", modified: "2026-11-13", readMins: 6, section: "Import" },
    modified: MODIFIED,
    title: "Dokumenty importowe UK: faktura, packing list, B/L",
    description:
      "Dokumenty do importu towarów do UK: faktura handlowa, lista pakunkowa, konosament lub lotniczy list przewozowy i dowód pochodzenia oraz darmowy szablon.",
    label: "Dokumenty importowe UK",
    h1: "Dokumenty importowe w Wielkiej Brytanii: co jest potrzebne i co musi zawierać",
    lead:
      "Do importu towarów do Wielkiej Brytanii potrzebujesz czterech podstawowych dokumentów: faktury handlowej z wartością towaru, listy pakunkowej (packing list) z zawartością każdego kartonu, dokumentu przewozowego (konosamentu przy transporcie morskim lub lotniczego listu przewozowego przy lotniczym) oraz dowodu pochodzenia, jeśli ubiegasz się o niższą stawkę cła na podstawie umowy handlowej UK. Agencja celna wykorzystuje je w zgłoszeniu importowym, które wymaga też numeru GB EORI, kodu towarowego i wartości towaru. LondraDepo przyjmuje towar w magazynie w Essex według tej samej listy pakunkowej, więc czytelna lista oszczędza czas na obu etapach.",
    facts: [
      "Numer GB EORI jest potrzebny do importu do Wielkiej Brytanii",
      "Kod towarowy i wartość towaru trafiają do zgłoszenia importowego",
      "Dowód pochodzenia jest potrzebny do preferencyjnej (niższej) stawki cła",
      "Dokumentację preferencji przechowuj co najmniej 4 lata (HMRC)",
      "Darmowy szablon listy pakunkowej (CSV) poniżej",
    ],
    sections: [
      {
        type: "table",
        h2: "Podstawowe dokumenty importowe w UK",
        head: ["Dokument", "Kto zwykle wystawia", "Do czego służy"],
        rows: [
          ["Faktura handlowa", "Sprzedający lub eksporter", "Wartość towaru do obliczenia cła i VAT importowego; kupujący, sprzedający i reguła Incoterms"],
          ["Lista pakunkowa (packing list)", "Sprzedający lub eksporter", "Zawartość każdego kartonu i palety; kontrola celna i przyjęcie towaru w magazynie"],
          ["Konosament (morski) lub lotniczy list przewozowy", "Armator, linia lotnicza lub spedytor", "Dowód wysyłki, a przy oryginalnym konosamencie także prawo do odbioru towaru"],
          ["Dowód pochodzenia", "Eksporter, zgodnie z regułami umowy handlowej", "Ubieganie się o preferencyjną stawkę cła, np. na podstawie umowy UE–Wielka Brytania (TCA)"],
          ["Licencje lub certyfikaty", "Właściwy urząd", "Tylko dla towarów kontrolowanych, takich jak żywność, rośliny, leki czy chemikalia"],
        ],
        note: "Agencja celna może poprosić o dodatkowe dokumenty dla określonych towarów. Przed wysyłką sprawdź towary kontrolowane na GOV.UK.",
      },
      {
        type: "list",
        h2: "Co powinna zawierać faktura handlowa",
        items: [
          "Nazwy i adresy sprzedającego i kupującego oraz numer GB EORI importera",
          "Numer i datę faktury",
          "Jasny opis każdego produktu z ilością i ceną jednostkową",
          "Kod towarowy każdego produktu, jeśli jest znany",
          "Łączną wartość i walutę",
          "Regułę Incoterms i nazwane miejsce, np. FOB Gdańsk",
          "Kraj pochodzenia towaru",
        ],
      },
      {
        type: "list",
        h2: "Co powinna zawierać lista pakunkowa",
        intro: "Według listy pakunkowej nasz zespół liczy towar, gdy Twój kontener lub palety docierają do Rayleigh w Essex.",
        items: [
          "Numer referencyjny przesyłki, zgodny z fakturą i dokumentem przewozowym",
          "Numer każdego kartonu z SKU i liczbą sztuk w kartonie",
          "Łączną liczbę kartonów i sztuk dla każdego SKU",
          "Wymiary kartonów oraz wagę brutto i netto",
          "Numer palety, na której jest każdy karton, jeśli towar jest spaletyzowany",
        ],
        outro: "Poniżej znajdziesz darmowy szablon listy pakunkowej w języku angielskim.",
      },
      {
        type: "links",
        h2: "Darmowe szablony i przewodniki",
        items: [
          { href: "/templates/packing-list-template.csv", title: "Szablon listy pakunkowej (CSV)", text: "Otwórz w Excelu lub Arkuszach Google; jeden wiersz na karton lub SKU.", tag: "Pobierz" },
          { href: "/pl/blog/import-do-uk-przewodnik", title: "Przewodnik po imporcie do UK", text: "Cały proces importu krok po kroku.", tag: "Przewodnik" },
          { href: "/pl/blog/incoterms-import-do-uk", title: "Incoterms przy imporcie do UK", text: "Kto płaci za transport, odprawę, cło i VAT.", tag: "Przewodnik" },
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "GOV.UK: import towarów do UK krok po kroku", href: "https://www.gov.uk/import-goods-into-uk" },
          { label: "GOV.UK: niższe cło na towary z kraju, z którym UK ma umowę handlową", href: "https://www.gov.uk/guidance/import-and-export-goods-using-preference-agreements" },
        ],
      },
    ],
    faqs: [
      { q: "Jakie dokumenty są potrzebne do importu towarów do UK?", a: "Zwykle potrzebujesz faktury handlowej, listy pakunkowej, dokumentu przewozowego, takiego jak konosament lub lotniczy list przewozowy, oraz dowodu pochodzenia, jeśli ubiegasz się o niższą stawkę cła. Zgłoszenie importowe wymaga też numeru GB EORI, kodu towarowego i wartości towaru." },
      { q: "Czym różni się faktura handlowa od listy pakunkowej?", a: "Faktura handlowa pokazuje wartość towaru, na podstawie której urząd celny oblicza cło i VAT importowy. Lista pakunkowa pokazuje fizyczną zawartość każdego kartonu i palety, według której urząd celny i magazyn sprawdzają przesyłkę." },
      { q: "Czy przy imporcie z UE potrzebny jest dowód pochodzenia?", a: "Tylko jeśli chcesz skorzystać z preferencyjnej, niższej stawki cła na podstawie umowy handlowej. Według GOV.UK musisz mieć ważny dowód pochodzenia i przechowywać go wraz z dokumentacją co najmniej 4 lata. Bez niego obowiązuje standardowa stawka cła." },
      { q: "Dlaczego magazyn potrzebuje mojej listy pakunkowej?", a: "LondraDepo liczy każdą dostawę według listy pakunkowej po przybyciu do Rayleigh w Essex, zapisuje rozbieżności i przyjmuje towar do Mintsoft WMS według SKU. Lista z numerami kartonów, SKU i liczbą sztuk w kartonie przyspiesza przyjęcie i zwiększa jego dokładność." },
      { q: "Czy jest dostępny darmowy szablon listy pakunkowej?", a: "Tak. LondraDepo udostępnia darmowy szablon listy pakunkowej w pliku CSV, z kolumnami na numer kartonu, SKU, liczbę sztuk, wymiary, wagi, numer palety i kraj pochodzenia. Otwiera się w Excelu lub Arkuszach Google." },
    ],
    related: ["/pl/blog/import-do-uk-przewodnik", "/pl/blog/incoterms-import-do-uk", "/pl/odprawa-celna-uk", "/pl/rodzaje-kontenerow", "/pl/rozladunek-kontenerow"],
    quote: { label: "Poproś o wycenę odprawy celnej", service: "freight-customs" },
  },
  {
    slug: "/pl/blog/sklad-celny-czy-towar-oclony",
    serviceBox: { href: "/pl/odprawa-celna-uk", title: "Składujesz towar po odprawie w UK?", text: "LondraDepo to magazyn towaru oclonego, a nie skład celny. Arca Trade Group może przeprowadzić brytyjską odprawę celną, a my składujemy i dostarczamy towar.", cta: "Odprawa celna w UK" },
    kind: "article",
    parent: "/pl/blog",
    article: { published: "2026-11-11", modified: "2026-11-11", readMins: 6, section: "Import" },
    modified: MODIFIED,
    title: "Skład celny czy magazyn towaru oclonego?",
    description:
      "Czym jest skład celny, kiedy cło i VAT importowy są zawieszone i kiedy prostszy jest magazyn towaru oclonego z odroczonym rozliczeniem VAT.",
    label: "Skład celny czy towar oclony",
    h1: "Skład celny czy magazyn towaru oclonego?",
    lead:
      "Skład celny (ang. bonded warehouse) to miejsce objęte procedurą składowania celnego (w UK: customs warehousing), zatwierdzone przez HMRC, w którym importowany towar można składować z zawieszonym cłem i VAT importowym; należności powstają dopiero przy dopuszczeniu towaru do obrotu w UK, a towar ponownie wywieziony ze składu może ich nigdy nie zapłacić. Magazyn towaru oclonego, taki jak LondraDepo, składuje towar po zgłoszeniu importowym, gdy cło i VAT importowy zostały zapłacone lub rozliczone. Dla importerów zarejestrowanych do VAT odroczone rozliczenie VAT już eliminuje wydatek gotówkowy na VAT importowy, więc skład celny opłaca się głównie przy wysokim cle lub gdy towar może opuścić UK.",
    facts: [
      "Skład celny = procedura składowania celnego (w UK: „customs warehousing”)",
      "Cło i VAT importowy zawieszone do czasu zwolnienia towaru",
      "Prowadzony przez prowadzących skład zatwierdzonych i nadzorowanych przez HMRC",
      "Odroczone rozliczenie VAT: brak płatności VAT importowego na granicy dla firm zarejestrowanych do VAT",
      "LondraDepo to magazyn towaru oclonego, a nie skład celny",
    ],
    sections: [
      {
        type: "table",
        h2: "Skład celny a magazyn towaru oclonego",
        head: ["", "Skład celny", "Magazyn towaru oclonego"],
        rows: [
          ["Status celny towaru", "Jeszcze niedopuszczony do obrotu; objęty procedurą składu celnego", "Dopuszczony do obrotu w Wielkiej Brytanii"],
          ["Cło", "Zawieszone do zwolnienia; nienależne, jeśli towar zostanie ponownie wywieziony", "Płacone przy zgłoszeniu importowym"],
          ["VAT importowy", "Zawieszony do zwolnienia", "Płacony przy imporcie lub rozliczany w deklaracji VAT w ramach odroczonego rozliczenia"],
          ["Kto może go prowadzić", "Prowadzący skład zatwierdzony i nadzorowany przez HMRC", "Każdy magazyn; bez pozwolenia celnego"],
          ["Ewidencja i kontrole", "Warunki HMRC dotyczące ewidencji, postępowania z towarem i jego składowania", "Zwykła ewidencja stanów i VAT"],
          ["Najlepszy dla", "Towarów z wysokim cłem, długiego składowania przed sprzedażą lub towarów, które mogą zostać wywiezione", "Towarów sprzedawanych w UK wkrótce po przybyciu, e-commerce i zapasu Amazon"],
        ],
      },
      {
        type: "text",
        h2: "Czym właściwie jest skład celny",
        paras: [
          "GOV.UK opisuje składowanie celne jako procedurę specjalną, która pozwala importerom składować towar przy zawieszonym cle i VAT importowym. Ze składu towar można objąć inną procedurą celną, ponownie wywieźć lub dopuścić do obrotu; w tym ostatnim przypadku cło i VAT stają się należne.",
          "Istnieją dwa rodzaje składów. Publiczny skład celny przechowuje towary innych podmiotów, a prywatny skład celny towary samego prowadzącego. Osoba umieszczająca towar w składzie (deponent) musi mieć siedzibę w Wielkiej Brytanii i sama zgłosić towar do procedury albo wyznaczyć do tego przedstawiciela.",
        ],
      },
      {
        type: "text",
        h2: "Czy potrzebujesz składu celnego? Przy sprzedaży w UK zwykle nie",
        paras: [
          "Jeśli Twój towar będzie sprzedawany w Wielkiej Brytanii, cło i tak stanie się należne wcześniej czy później. Korzyść płynnościowa ze składu celnego to cło od niesprzedanego jeszcze zapasu, a wiąże się z dodatkowymi kontrolami celnymi i ewidencją.",
          "VAT importowy jest często większą kwotą, a importerzy zarejestrowani do VAT w Wielkiej Brytanii mogą korzystać z odroczonego rozliczenia VAT: według GOV.UK deklarują i odliczają VAT importowy w tej samej deklaracji VAT, zamiast płacić go przy przybyciu towaru, bez potrzeby uzyskiwania zgody. Wiele towarów ma też w UK stawkę cła 0%. Dla takiego zapasu magazyn towaru oclonego jest zwykle prostszy i tańszy.",
          "Skład celny ma sens dla towarów z wysokimi stawkami cła, alkoholu i innych towarów akcyzowych, zapasu składowanego wiele miesięcy przed sprzedażą lub towarów, które mogą zostać ponownie wywiezione, gdy cło w przeciwnym razie nigdy nie zostałoby odzyskane.",
        ],
      },
      {
        type: "list",
        h2: "Jak działa składowanie towaru oclonego w LondraDepo",
        items: [
          "Arca Trade Group, operator LondraDepo, lub Twoja agencja celna składa zgłoszenie importowe i odprawia towar w porcie.",
          "Jeśli jesteś zarejestrowany do VAT, możesz wybrać w zgłoszeniu odroczone rozliczenie VAT zamiast płacić VAT importowy na granicy.",
          "Odprawiony kontener lub palety trafiają do naszego magazynu w Rayleigh w Essex, 13–16 mil od London Gateway i Tilbury.",
          "Towar jest przyjmowany do Mintsoft WMS i składowany od 3,50 £ + VAT za paletę tygodniowo, a następnie wysyłany do klientów, do Amazon lub dostarczany odbiorcom w UK.",
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "GOV.UK: procedura specjalna, składowanie celne (wprowadzenie)", href: "https://www.gov.uk/guidance/special-procedure-customs-warehousing/introduction" },
          { label: "GOV.UK: kiedy można rozliczyć VAT importowy w deklaracji VAT", href: "https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return" },
          { label: "GOV.UK: zintegrowany harmonogram taryfowy UK", href: "https://www.gov.uk/government/publications/the-uks-integrated-tariff-schedule/the-uks-integrated-tariff-schedule" },
        ],
      },
    ],
    faqs: [
      { q: "Co to jest skład celny?", a: "Skład celny (ang. bonded warehouse, w terminologii HMRC customs warehouse) to zatwierdzone miejsce, w którym importowany towar jest składowany z zawieszonym cłem i VAT importowym. Należności powstają przy dopuszczeniu towaru do obrotu w UK i nie są należne, jeśli towar zostanie ponownie wywieziony." },
      { q: "Czy angielskie „bonded warehouse” oznacza skład celny?", a: "Tak, w brytyjskiej praktyce. HMRC używa terminu customs warehousing dla procedury specjalnej prowadzonej przez zatwierdzonych i nadzorowanych przez siebie prowadzących skład. Bonded warehouse to potoczna nazwa tego samego, używana też dla towarów akcyzowych, np. alkoholu." },
      { q: "Czy LondraDepo oferuje składowanie w składzie celnym?", a: "Nie. LondraDepo w Rayleigh w Essex to magazyn towaru oclonego: towar przechodzi brytyjską odprawę celną, zanim go przyjmiemy. Arca Trade Group, operator LondraDepo, może przygotować zgłoszenie importowe i zorganizować odbiór z portu." },
      { q: "Czy potrzebuję składu celnego, aby odroczyć płatność VAT importowego?", a: "Zwykle nie. Według GOV.UK importerzy zarejestrowani do VAT w Wielkiej Brytanii mogą korzystać z odroczonego rozliczenia VAT, deklarując i odliczając VAT importowy w tej samej deklaracji, bez potrzeby uzyskiwania zgody. Skład celny służy głównie zawieszeniu cła." },
      { q: "Kiedy skład celny się opłaca?", a: "Skład celny warto rozważyć dla towarów z wysokimi stawkami cła, towarów akcyzowych takich jak alkohol, zapasu składowanego wiele miesięcy przed sprzedażą lub towarów, które mogą zostać ponownie wywiezione. Dla zapasu sprzedawanego w UK szybko po przybyciu magazyn towaru oclonego jest zwykle prostszy." },
    ],
    related: ["/pl/odprawa-celna-uk", "/pl/blog/koszty-importu-do-uk", "/pl/blog/import-do-uk-przewodnik", "/pl/import-do-wielkiej-brytanii", "/pl/magazyn-london-gateway-tilbury", "/pl/skladowanie-palet"],
    quote: { label: "Poproś o wycenę składowania", service: "storage" },
  },
  {
    slug: "/pl/blog/incoterms-import-do-uk",
    kind: "article",
    parent: "/pl/blog",
    article: { published: "2026-11-11", modified: "2026-11-11", readMins: 6, section: "Import" },
    modified: MODIFIED,
    title: "Incoterms przy imporcie do UK: EXW, FOB, DAP, DDP",
    description:
      "Incoterms 2020 przy wysyłce towarów do UK: kto płaci za transport, ubezpieczenie, odprawę, cło i VAT importowy przy regułach EXW, FCA, FOB, CIF, DAP i DDP.",
    label: "Incoterms przy imporcie do UK",
    h1: "Incoterms przy imporcie do Wielkiej Brytanii: kto za co płaci?",
    lead:
      "Incoterms to standardowe reguły handlowe Międzynarodowej Izby Handlowej (ICC), które określają, gdzie kończy się odpowiedzialność sprzedającego za towar, koszty i ryzyko, a zaczyna odpowiedzialność kupującego; obecna edycja, Incoterms 2020, obowiązuje od 1 stycznia 2020 r. Przy wysyłce do Wielkiej Brytanii reguła decyduje, kto rezerwuje transport, kto go ubezpiecza i kto odprawia towar w brytyjskim urzędzie celnym. Przy EXW, FCA, FOB i CIF odprawę importową w UK wykonuje kupujący i on płaci cło oraz VAT importowy; przy DAP kupujący nadal odprawia towar; tylko przy DDP brytyjskie cło i VAT importowy płaci sprzedający.",
    facts: [
      "Incoterms 2020: 11 reguł, obowiązują od 1 stycznia 2020 r.",
      "FOB, FAS, CFR i CIF tylko dla transportu morskiego i śródlądowego",
      "EXW, FCA, CPT, CIP, DAP, DPU i DDP dla każdego rodzaju transportu",
      "Tylko DDP przenosi brytyjskie cło i VAT importowy na sprzedającego",
      "Incoterms nie regulują warunków płatności ani przeniesienia własności",
    ],
    sections: [
      {
        type: "table",
        h2: "Najczęstsze reguły Incoterms przy dostawach do UK",
        head: ["Reguła", "Gdzie kończą się obowiązki sprzedającego", "Główny transport opłaca", "Odprawa, cło i VAT w UK"],
        rows: [
          ["EXW (Ex Works)", "Towar gotowy do odbioru w zakładzie sprzedającego", "Kupujący", "Kupujący"],
          ["FCA (Free Carrier)", "Towar przekazany przewoźnikowi kupującego, odprawiony w eksporcie", "Kupujący", "Kupujący"],
          ["FOB (Free On Board)", "Towar załadowany na statek w porcie wyjścia", "Kupujący", "Kupujący"],
          ["CIF (Cost, Insurance and Freight)", "Towar załadowany na statek; sprzedający płaci fracht morski i minimalne ubezpieczenie do portu w UK", "Sprzedający", "Kupujący"],
          ["DAP (Delivered At Place)", "Towar dociera do nazwanego miejsca w UK, gotowy do rozładunku", "Sprzedający", "Kupujący"],
          ["DDP (Delivered Duty Paid)", "Towar dociera do nazwanego miejsca w UK, odprawiony w imporcie", "Sprzedający", "Sprzedający"],
        ],
        note: "Podsumowanie reguł ICC Incoterms 2020. Zawsze podawaj po regule dokładne miejsce, np. „FOB Gdańsk” lub „DAP Rayleigh SS6 7FY”.",
      },
      {
        type: "text",
        h2: "Która reguła pasuje importerowi w UK?",
        paras: [
          "FOB i FCA są popularne wśród importerów w UK, bo kupujący kontroluje główny transport i część brytyjską: wybiera spedytora, port przybycia i agencję celną oraz widzi pełny koszt dostawy (landed cost). Przy CIF fracht morski rezerwuje dostawca, co bywa wygodne, ale daje mniej wpływu na wybór statku, termin przybycia i opłaty w porcie docelowym.",
          "DDP wygląda na najprostszą regułę, ale sprzedający musi działać jako importer w UK albo go wyznaczyć i zapłacić cło oraz VAT importowy. Sprzedający spoza UK często nie może odzyskać tego VAT tak łatwo jak zarejestrowany do VAT importer brytyjski korzystający z odroczonego rozliczenia VAT, a koszt zwykle wraca w cenie.",
        ],
      },
      {
        type: "list",
        h2: "Incoterms: lista kontrolna przed złożeniem zamówienia",
        items: [
          "Używaj nazwy reguły Incoterms 2020 i dokładnego miejsca, np. FOB Gdańsk lub DAP Rayleigh SS6 7FY.",
          "FOB, FAS, CFR i CIF stosuj tylko w transporcie morskim; dla kontenerów przekazywanych na terminalu często lepsza jest reguła FCA.",
          "Ustal, kto zamawia i opłaca rozładunek w magazynie w UK; przy DAP rozładowuje kupujący.",
          "Sprawdź, kto jest importerem (importer of record) i ma numer GB EORI do brytyjskiego zgłoszenia importowego.",
          "Pamiętaj, że Incoterms nie określają warunków płatności ani momentu przejścia własności; wpisz je do umowy sprzedaży.",
        ],
      },
      {
        type: "text",
        h2: "Jak LondraDepo wpisuje się w każdą regułę",
        paras: [
          "Przy EXW, FCA lub FOB Arca Trade Group, operator LondraDepo, może zorganizować główny transport, brytyjską odprawę celną i dowóz z portu do naszego magazynu w Rayleigh w Essex. Przy CIF lub DAP spedytor dostawcy dostarcza towar do portu w UK lub pod nasze drzwi, a my nadal możemy zająć się odprawą i rozładunkiem. Przy DDP przyjmujemy odprawiony towar i składujemy go od 3,50 £ + VAT za paletę tygodniowo.",
        ],
      },
      {
        type: "sources",
        h2: "Źródła",
        items: [
          { label: "Międzynarodowa Izba Handlowa (ICC): reguły Incoterms (Incoterms 2020)", href: "https://iccwbo.org/business-solutions/incoterms-rules/" },
          { label: "GOV.UK: kiedy można rozliczyć VAT importowy w deklaracji VAT", href: "https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return" },
        ],
      },
    ],
    faqs: [
      { q: "Czym są Incoterms?", a: "Incoterms to standardowe reguły handlowe Międzynarodowej Izby Handlowej (ICC), które określają, gdzie kończy się odpowiedzialność sprzedającego za dostawę, koszty i ryzyko, a zaczyna kupującego. Obecna edycja, Incoterms 2020, obowiązuje od 1 stycznia 2020 r." },
      { q: "Kto płaci brytyjskie cło i VAT przy FOB lub CIF?", a: "Kupujący. Przy FOB i CIF obowiązki sprzedającego kończą się po załadunku towaru na statek w porcie wyjścia, więc kupujący w UK odprawia towar w imporcie i płaci cło oraz VAT importowy lub korzysta z odroczonego rozliczenia VAT, jeśli jest zarejestrowany do VAT." },
      { q: "Czym różni się DAP od DDP?", a: "Przy DAP i DDP sprzedający dostarcza towar do nazwanego miejsca w Wielkiej Brytanii. Przy DAP kupujący odprawia towar w imporcie i płaci cło oraz VAT importowy; przy DDP robi to sprzedający, działając jako importer w UK lub wyznaczając importera." },
      { q: "Która reguła Incoterms jest najlepsza przy imporcie do UK?", a: "Wielu importerów w UK wybiera FOB dla frachtu morskiego lub FCA dla kontenerów przekazywanych na terminalu, bo kontrolują wtedy główny transport, port przybycia i agencję celną. Arca Trade Group, operator LondraDepo, może zorganizować transport i odprawę na tych warunkach." },
      { q: "Czy reguły FOB można używać w transporcie lotniczym lub drogowym?", a: "Nie. Zgodnie z regułami ICC Incoterms 2020 FOB, FAS, CFR i CIF są przeznaczone wyłącznie dla transportu morskiego i śródlądowego. Przy transporcie lotniczym lub drogowym stosuj np. FCA, CPT, CIP, DAP lub DDP." },
    ],
    related: ["/pl/blog/dokumenty-importowe-uk", "/pl/blog/import-do-uk-przewodnik", "/pl/blog/koszty-importu-do-uk", "/pl/blog/sklad-celny-czy-towar-oclony", "/pl/odprawa-celna-uk", "/pl/import-do-wielkiej-brytanii"],
    quote: { label: "Poproś o wycenę transportu i odprawy", service: "freight-customs" },
  },
];
