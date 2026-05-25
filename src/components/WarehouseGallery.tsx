import Image from "next/image";

const images = [
  {
    src: "/uk-warehouse-essex.jpeg",
    alt: "UK warehouse Essex interior — LondraDepo depo içi operasyon",
  },
  {
    src: "/essex-warehouse-exterior.jpeg",
    alt: "Essex warehouse exterior UK — İngiltere depo dış cephe",
  },
  {
    src: "/uk-pallet-storage.jpeg",
    alt: "UK pallet storage Essex aerial view — İngiltere palet depolama",
  },
  {
    src: "/london-fulfillment-center.jpeg",
    alt: "London fulfillment center outdoor — Londra fulfillment merkezi",
  },
  {
    src: "/uk-warehouse-office.jpeg",
    alt: "UK warehouse office Essex — İngiltere depo ofis alanı",
  },
];

export default function WarehouseGallery() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-widest mb-2">
            Gerçek Operasyon
          </p>
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            İngiltere&apos;de Gerçek Operasyon Altyapısı
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Essex merkezli depo operasyonumuzda ürün kabul, palet depolama,
            fulfillment ve dağıtım süreçlerini aktif olarak yönetiyoruz.
          </p>
        </div>

        {/* Desktop: 3-column grid | Mobile: 1 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured large image */}
          <div className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl aspect-[16/9] group">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Side image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto group">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Bottom row */}
          {images.slice(2).map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
