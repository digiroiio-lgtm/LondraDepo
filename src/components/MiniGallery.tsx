import Image from "next/image";

const images = [
  {
    src: "/uk-warehouse-essex.jpeg",
    alt: "UK warehouse Essex interior — İngiltere depo içi operasyon",
  },
  {
    src: "/uk-pallet-storage.jpeg",
    alt: "UK pallet storage Essex — İngiltere palet depolama",
  },
  {
    src: "/essex-warehouse-exterior.jpeg",
    alt: "Essex warehouse exterior — İngiltere depo dış cephe",
  },
  {
    src: "/london-fulfillment-center.jpeg",
    alt: "London fulfillment center — Londra fulfillment merkezi",
  },
  {
    src: "/uk-warehouse-office.jpeg",
    alt: "UK warehouse office Essex — İngiltere depo ofis",
  },
  {
    src: "/england-fulfillment-center.jpeg",
    alt: "England fulfillment center — İngiltere fulfillment merkezi",
  },
];

export default function MiniGallery() {
  return (
    <section className="py-14 px-4 bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-[#0b2545]">
            Operasyondan Kareler
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-xl aspect-square group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
