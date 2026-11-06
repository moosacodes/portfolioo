import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://moosaalam.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: ["https://moosaalam.dev/moosa-profile.png"],
    },
  ];
}
