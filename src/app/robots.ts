import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/test/",
        "/temp/",
        "/development/",
        "/api/",
        "/_next/",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
