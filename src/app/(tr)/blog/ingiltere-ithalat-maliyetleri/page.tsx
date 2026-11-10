import TrDataPage, { trPageMetadata } from "@/components/TrDataPage";
import ChecklistGate from "@/components/ChecklistGate";
import { TR_PAGES } from "@/content/tr-pages";

const PAGE = TR_PAGES["/blog/ingiltere-ithalat-maliyetleri"];

export const metadata = trPageMetadata(PAGE);

export default function Page() {
  return <TrDataPage p={PAGE}><ChecklistGate lang="tr" /></TrDataPage>;
}
