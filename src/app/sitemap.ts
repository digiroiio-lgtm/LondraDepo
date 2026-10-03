import { MetadataRoute } from "next";
import { SITE_URL, SITE_URLS } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_URLS.map(({ path, ...rest }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    ...rest,
  }));
}
