import Image from "next/image";

const mainImage = {
  src: "/arterial-park-arterial-road-rayleigh_depoici.jpeg",
  alt: "UK warehouse operation in Essex – LondraDepo interior",
};

const gridImages = [
  {
    src: "/londradepo.jpeg",
    alt: "LondraDepo – England fulfillment center",
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_distankosecekimi.jpeg",
    alt: "UK product receiving and storage – LondraDepo",
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_kusbakisi.jpeg",
    alt: "Pallet storage warehouse UK – aerial view",
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_2ncioutdoor.jpeg",
    alt: "Warehouse loading and unloading operation Essex",
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_officespace.jpeg",
    alt: "LondraDepo pallet storage area – office and operations",
  },
  {
    src: "/arterial-park-arterial-road-rayleigh_officespace2.jpeg",
    alt: "LondraDepo UK warehouse management office",
  },
];

export default function WarehouseGallery() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] mb-3">
            İngiltere'de Gerçek Operasyon Altyapısı
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Essex merkezli depo operasyonumuzda ürün kabul, palet depolama,
            fulfillment ve dağıtım süreçlerini aktif olarak yönetiyoruz.
          </p>
        </div>

        {/* Main large image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-4 group">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* 6-image grid: 3 cols on desktop, 2 cols on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gridImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={img.src}
                alt={img.alt}
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
