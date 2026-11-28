import Image from "next/image";

type GalleryLang = "tr" | "en" | "pl" | "de";

/** Photos of our own site at Arterial Park, Rayleigh. Alt texts describe what each photo actually shows, per language. */
const PHOTOS = [
  {
    src: "/arterial-park-arterial-road-rayleigh_depoici.jpeg",
    alt: {
      tr: "LondraDepo deposunun içi: Rayleigh, Essex'teki yüksek tavanlı depo alanı",
      en: "Inside the LondraDepo warehouse: the high-bay storage floor in Rayleigh, Essex",
      pl: "Wnętrze magazynu LondraDepo: wysoka hala magazynowa w Rayleigh, Essex",
      de: "Innenansicht des LondraDepo-Lagers: die hohe Lagerhalle in Rayleigh, Essex",
    },
  },
  {
    src: "/londradepo.jpeg",
    alt: {
      tr: "Palet raflarında forklift ile stok yerleştirme, LondraDepo İngiltere deposu",
      en: "Reach truck putting pallets away in the racking at the LondraDepo UK warehouse",
      pl: "Wózek wysokiego składowania odkłada palety do regałów w magazynie LondraDepo w UK",
      de: "Schubmaststapler lagert Paletten im Regal des LondraDepo-Lagers in Großbritannien ein",
    },
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_distankosecekimi.jpeg",
    alt: {
      tr: "LondraDepo depo binasının dış cephesi ve girişi, Arterial Park, Rayleigh",
      en: "Exterior and entrance of the LondraDepo warehouse building, Arterial Park, Rayleigh",
      pl: "Budynek magazynu LondraDepo z zewnątrz i wejście, Arterial Park, Rayleigh",
      de: "Außenansicht und Eingang des LondraDepo-Lagergebäudes, Arterial Park, Rayleigh",
    },
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_kusbakisi.jpeg",
    alt: {
      tr: "Arterial Park, Rayleigh kuşbakışı: LondraDepo deposu ve çevresi, Essex",
      en: "Aerial view of Arterial Park, Rayleigh, Essex, where the LondraDepo warehouse is located",
      pl: "Widok z lotu ptaka na Arterial Park w Rayleigh, Essex, gdzie mieści się magazyn LondraDepo",
      de: "Luftaufnahme des Arterial Park in Rayleigh, Essex, Standort des LondraDepo-Lagers",
    },
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_2ncioutdoor.jpeg",
    alt: {
      tr: "LondraDepo deposunun girişi ve otopark alanı, Unit 19 Arterial Park",
      en: "LondraDepo warehouse entrance and car park, Unit 19 Arterial Park",
      pl: "Wejście do magazynu LondraDepo i parking, Unit 19 Arterial Park",
      de: "Eingang und Parkplatz des LondraDepo-Lagers, Unit 19 Arterial Park",
    },
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_officespace.jpeg",
    alt: {
      tr: "LondraDepo operasyon ofisi: stok ve siparişlerin yönetildiği açık ofis",
      en: "LondraDepo operations office, where the team manages stock and orders",
      pl: "Biuro operacyjne LondraDepo, w którym zespół zarządza stanami i zamówieniami",
      de: "Betriebsbüro von LondraDepo, in dem das Team Bestände und Aufträge verwaltet",
    },
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_officespace2.jpeg",
    alt: {
      tr: "LondraDepo binasında asansör ve merdiven holü",
      en: "Lift and stair lobby in the LondraDepo building",
      pl: "Hol z windą i klatką schodową w budynku LondraDepo",
      de: "Aufzug und Treppenhaus im LondraDepo-Gebäude",
    },
  },
] as const;

const TEXT: Record<GalleryLang, { h2: string; p: string }> = {
  tr: {
    h2: "İngiltere'de Gerçek Operasyon Altyapısı",
    p: "Bu fotoğraflar Arterial Park, Rayleigh'deki kendi depomuzu gösteriyor: paletlerin depolandığı raf alanı, bina ve giriş, Arterial Park'ın kuşbakışı görüntüsü ve stok ile siparişlerin yönetildiği ofis. Ürün kabul, palet depolama, fulfillment ve dağıtım tek binada yürütülüyor.",
  },
  en: {
    h2: "A Real UK Warehouse Operation",
    p: "These photographs show our own site at Arterial Park, Rayleigh: the racked warehouse floor where pallets are stored, the building exterior and yard, an aerial view of the Arterial Park estate, and the office where the operations team manages stock and orders. Goods-in, pallet storage, fulfilment and distribution all happen here, in one building, rather than across separate sites.",
  },
  pl: {
    h2: "Prawdziwy magazyn w Wielkiej Brytanii",
    p: "Zdjęcia pokazują nasz własny obiekt w Arterial Park w Rayleigh: halę z regałami, w której składujemy palety, budynek z zewnątrz, widok z lotu ptaka na Arterial Park oraz biuro, w którym zespół zarządza stanami i zamówieniami. Przyjęcie towaru, składowanie palet, fulfillment i dystrybucja odbywają się w jednym budynku.",
  },
  de: {
    h2: "Ein echtes Lager in Großbritannien",
    p: "Die Fotos zeigen unseren eigenen Standort im Arterial Park in Rayleigh: die Lagerhalle mit Palettenregalen, das Gebäude von außen, eine Luftaufnahme des Arterial Park und das Büro, in dem das Team Bestände und Aufträge verwaltet. Wareneingang, Palettenlagerung, Fulfillment und Distribution finden in einem Gebäude statt.",
  },
};

export default function WarehouseGallery({ lang = "tr" }: { lang?: GalleryLang }) {
  const t = TEXT[lang];
  const [main, ...grid] = PHOTOS;
  return (
    <section className="bg-white py-16 px-4" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="gallery-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] mb-3">{t.h2}</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">{t.p}</p>
        </div>

        {/* Main large image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-4 group">
          <Image
            src={main.src}
            alt={main.alt[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* 6-image grid: 3 cols on desktop, 2 cols on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {grid.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
              <Image
                src={img.src}
                alt={img.alt[lang]}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 370px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
