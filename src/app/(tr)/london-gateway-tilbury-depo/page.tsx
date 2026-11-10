import TrDataPage, { trPageMetadata } from "@/components/TrDataPage";
import { TR_PAGES } from "@/content/tr-pages";

const PAGE = TR_PAGES["/london-gateway-tilbury-depo"];

export const metadata = trPageMetadata(PAGE);

export default function Page() {
  return <TrDataPage p={PAGE}></TrDataPage>;
}
