import Link from "next/link";

/**
 * Turkish "how stock gets into Amazon UK" block: SPD / LTL / FTL and Amazon Freight's UK pallet rules.
 * Figures are quoted from Amazon Freight's UK guidance (Dec 2025). Carton limits are in Seller Central
 * (login only), so none are stated. Never claim partnered-carrier or Carrier Central status.
 */
export const AMAZON_SOURCES_TR = [
  { label: "Amazon Freight: UK LTL to Amazon FCs, shipper's checklist (Aralık 2025)", href: "https://freight.amazon.co.uk/newsroom/uk-ltl-amazon-fcs-checklist" },
  { label: "Amazon Freight: pallet and site prep, dimensions, wrapping and labels (Aralık 2025)", href: "https://freight.amazon.co.uk/newsroom/pallet-site-prep-dimensions-wrapping-labels-tail-lift-alternatives" },
];

export const SHIP_TYPES_TR = [
  ["Koli kargo (SPD)", "Her koli ayrı etiketlenir, kargo firmasıyla gönderilir", "Birkaç koli veya ilk deneme sevkiyatı"],
  ["Parsiyel palet (LTL)", "Paletler başka yüklerle aynı tıra biner; Amazon Freight bunu genellikle 1–6 palet olarak tanımlar", "Düzenli, orta hacimli palet sevkiyatı"],
  ["Tam tır (FTL)", "Amazon deposuna tek başınıza kullandığınız tır", "Tırı düzenli olarak dolduran veya neredeyse dolduran yükler"],
];

export const PALLET_RULES_TR = [
  "Palet ölçüsü: Amazon UK depolarının çoğu UK standart paleti (1200 × 1000 mm) ve Euro paleti (1200 × 800 mm) kabul eder; ilgili depoyla teyit edilmelidir.",
  "Yükseklik: palet dahil genellikle en fazla 1,8 metre.",
  "Ağırlık: palet dahil genellikle en fazla 1.000 kg.",
  "Etiket: her kolide Amazon sevkiyat etiketi, her palette sevkiyat referanslı görünür etiket bulunur; tercihen iki komşu yüzde.",
  "Randevu: teslimat önceden alınan saate göre yapılır; yük, etiket ve evrak randevuyla uyuşmazsa yeniden teslim ücreti çıkabilir.",
];

export default function AmazonInboundTr() {
  return (
    <section className="mb-12" aria-labelledby="amazon-inbound-tr">
      <h2 id="amazon-inbound-tr" className="text-2xl font-extrabold text-[#0b2545] mb-3">Koli mi, palet mi, tam tır mı: Amazon UK'ye sevkiyat</h2>
      <p className="text-slate-600 mb-4">Essex&apos;te hazırlanan stok, Amazon&apos;un sevkiyat planında belirlediği depoya üç yoldan biriyle gider.</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 mb-2">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 text-[#0b2545]">
            <tr><th scope="col" className="px-4 py-3">Seçenek</th><th scope="col" className="px-4 py-3">Ne demek</th><th scope="col" className="px-4 py-3">Genellikle uygun olduğu durum</th></tr>
          </thead>
          <tbody>
            {SHIP_TYPES_TR.map((r) => (
              <tr key={r[0]} className="border-t border-slate-200">
                <th scope="row" className="px-4 py-3 font-medium text-slate-800">{r[0]}</th>
                <td className="px-4 py-3 text-slate-700">{r[1]}</td>
                <td className="px-4 py-3 text-slate-700">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mb-8">LTL ve FTL tanımları Amazon Freight&apos;in UK rehberinden (Aralık 2025). Hedef depoyu Amazon sevkiyat planında belirler.</p>

      <h3 className="text-xl font-extrabold text-[#0b2545] mb-3">Amazon UK palet kuralları</h3>
      <ul className="space-y-2 mb-4">
        {PALLET_RULES_TR.map((t) => (
          <li key={t} className="flex gap-2.5 text-slate-700 text-sm leading-relaxed"><span className="text-green-700 shrink-0" aria-hidden="true">✓</span><span>{t}</span></li>
        ))}
      </ul>
      <p className="text-slate-700 text-sm leading-relaxed mb-4">
        Koli ağırlık ve ölçü sınırları Amazon Seller Central&apos;da belirlenir ve zaman zaman değişir; koliler depomuzdan çıkmadan önce güncel kurallara göre kontrol edilir.
        Stokun tamamı bir anda Amazon&apos;a gitmek zorunda değildir: kalanı palet başına haftalık £3,50 + KDV&apos;den depomuzda tutup Amazon stokunuz eridikçe yeni partiler gönderebilirsiniz.
        Amazon bir sevkiyat planını birden fazla depoya bölerse her parçayı ayrı etiketleyip ilgili depoya göndeririz.
      </p>
      <p className="text-sm text-slate-600 mb-3">
        Amazon depolarının kodları ve depomuza uzaklıkları:{" "}
        <Link href="/amazon-ingiltere-depo-konumlari" className="font-semibold text-[#0b2545] underline">Amazon İngiltere Depo Konumları</Link>
      </p>
      <p className="text-xs text-slate-500">
        Kaynaklar:{" "}
        {AMAZON_SOURCES_TR.map((s, i) => (
          <span key={s.href}>{i > 0 && " · "}<a href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a></span>
        ))}
      </p>
    </section>
  );
}
