const items = [
  { icon: "🏢", label: "Londra Depolama" },
  { icon: "📋", label: "Gümrükleme Desteği" },
  { icon: "📦", label: "Pick & Pack" },
  { icon: "🛒", label: "E-Ticaret Fulfillment" },
  { icon: "🛍️", label: "Shopify & Amazon" },
  { icon: "🚚", label: "UK Dağıtım" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#f6f8fb] border-b border-slate-200 py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
