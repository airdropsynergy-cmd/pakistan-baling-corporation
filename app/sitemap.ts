import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pakbaling.com",
      lastModified: new Date(),
    },
  ];
}