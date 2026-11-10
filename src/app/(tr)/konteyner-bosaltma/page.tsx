import TrDataPage, { trPageMetadata } from "@/components/TrDataPage";
import { TR_PAGES } from "@/content/tr-pages";

const PAGE = TR_PAGES["/konteyner-bosaltma"];

export const metadata = trPageMetadata(PAGE);

export default function Page() {
  return <TrDataPage p={PAGE} />;
}
