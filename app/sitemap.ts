import type { MetadataRoute } from "next";
import { siteRoutes, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === "" ? "monthly" : "yearly",
    priority: route.priority,
  }));
}
