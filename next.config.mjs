/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Rhodes Grass slug migration. The product was previously published under
      // the misspelling "rhode-grass"; that URL has existing search visibility
      // and must keep resolving to the corrected canonical URL.
      {
        source: "/products/rhode-grass",
        destination: "/products/rhodes-grass",
        permanent: true,
      },
      // Apex -> www host canonicalisation.
      //
      // NOTE: on Vercel this is normally handled at the domain level (Project
      // Settings -> Domains -> set www as primary). This rule is a safety net so
      // the app is correct even if that setting is missing; when the platform
      // already redirects at the edge, this never fires. The `has` condition
      // matches only the apex host, so it cannot loop or chain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "pakbaling.com" }],
        destination: "https://www.pakbaling.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
