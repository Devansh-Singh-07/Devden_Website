import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-23");
  return [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/support`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE.url}/guidelines`, lastModified, changeFrequency: "yearly", priority: 0.4 },
  ];
}
