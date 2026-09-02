// Canonical production origin for Pakistan Baling Corporation.
//
// Google serves the site on the `www` host, so every absolute URL we emit
// (metadataBase, canonicals, Open Graph, JSON-LD, sitemap, robots) must use it.
// Change this in one place only.
export const SITE_URL = "https://www.pakbaling.com";

// Absolute URL helper for metadata and structured data.
export const absoluteUrl = (path = "") =>
  `${SITE_URL}${path.startsWith("/") || path === "" ? path : `/${path}`}`;
