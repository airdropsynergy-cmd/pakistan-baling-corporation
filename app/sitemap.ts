import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pakbaling.com";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/products",
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const productUrls = products
    .filter((product) => product.available)
    .map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(),
    }));

  return [...staticUrls, ...productUrls];
}