import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/products",
    "/export",
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
  }));

  // Every product page is a real, indexable URL. Availability affects how the
  // page presents itself, not whether it exists, so unavailable products stay
  // in the sitemap rather than disappearing from the index each off-season.
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
  }));

  return [...staticUrls, ...productUrls];
}
