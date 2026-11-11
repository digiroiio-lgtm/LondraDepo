import TrDataPage, { trPageMetadata } from "@/components/TrDataPage";
import CbmCalculator from "@/components/CbmCalculator";
import { TR_PAGES } from "@/content/tr-pages";

const PAGE = TR_PAGES["/cbm-palet-hesaplama"];

export const metadata = trPageMetadata(PAGE);

export default function Page() {
  return (
    <TrDataPage p={PAGE}>
      <section className="mb-10" id="hesaplayici">
        <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2">CBM, palet ve konteyner doluluğunu hesaplayın</h2>
        <p className="text-slate-600 mb-5">Herhangi bir değeri değiştirin, sonuçlar anında güncellenir. Teklif isteyene kadar hiçbir bilgi gönderilmez.</p>
        <CbmCalculator lang="tr" />
      </section>
    </TrDataPage>
  );
}
