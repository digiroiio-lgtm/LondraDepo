const items = [
  { icon: "🏭", text: "İngiltere'de fiziksel operasyon" },
  { icon: "🚀", text: "Hızlı ürün kabul & sevk" },
  { icon: "🤝", text: "Türkçe iletişim" },
  { icon: "📦", text: "Esnek depo modeli" },
  { icon: "🔒", text: "Güvenli stok yönetimi" },
  { icon: "🗺️", text: "Londra & Essex konumu" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f6f8fb] border-y border-slate-200 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
