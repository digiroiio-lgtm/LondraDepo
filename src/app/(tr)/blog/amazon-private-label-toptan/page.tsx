import TrDataPage, { trPageMetadata } from "@/components/TrDataPage";
import { TR_PAGES } from "@/content/tr-pages";

const PAGE = TR_PAGES["/blog/amazon-private-label-toptan"];

export const metadata = trPageMetadata(PAGE);

export default function Page() {
  return <TrDataPage p={PAGE}></TrDataPage>;
}
