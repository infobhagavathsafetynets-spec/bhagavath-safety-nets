import { MetadataRoute } from "next";
import { servicesData } from "@/utils/servicesData";
import { areasData } from "@/utils/areasData";
import { SITE_URL } from "@/utils/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // 1. Static Pages
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/pricing",
    "/testimonials",
    "/case-studies",
    "/areas",
    "/gallery",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/services" || route === "/contact" || route === "/areas" ? 0.9 : 0.8,
  }));

  // 2. Service Category Hubs (3 confirmed categories)
  const categoryRoutes = [
    "/services/safety-nets",
    "/services/invisible-grills",
    "/services/cloth-hangers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 3. Dynamic Service Pages (8 client-confirmed services)
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 4. Dynamic Bengaluru Area Hubs (10 curated quality areas)
  const areaRoutes = Object.keys(areasData).map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...areaRoutes,
  ];
}
