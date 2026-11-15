import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devden.app",
      lastModified: new Date("2026-11-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
