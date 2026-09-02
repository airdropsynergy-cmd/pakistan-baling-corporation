import { Metadata } from "next"
import Link from "next/link"
import { ProductCatalog } from "@/components/products/product-catalog"

export const metadata: Metadata = {
  title: "Agricultural Commodity & Biomass Products",
  description:
    "Agricultural commodity and biomass supplier in Pakistan. Baled Rhodes Grass, Alfalfa, Silage, Wheat Straw, Rice Straw, Rice Husk and Sugarcane Bagasse for animal feed, bedding and biomass fuel — supplied domestically and for export.",
  alternates: {
    canonical: "/products",
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Premium biomass and agricultural products for diverse applications
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Agricultural Commodity &amp; Biomass Supplier in Pakistan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pakistan Baling Corporation sources, bales and supplies agricultural
              commodities and biomass materials from Pakistan for buyers at home and
              overseas. Our range covers baled fodder and animal feed such as Rhodes
              Grass, Alfalfa and Silage, agricultural residues used for livestock
              bedding, and biomass fuels including Sugarcane Bagasse and Rice Husk.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each product below lists its bale format, container loading and technical
              properties. Availability varies by season — select a product for current
              status, or{" "}
              <Link href="/export" className="text-primary hover:underline font-medium">
                see how we handle export and shipping
              </Link>
              .
            </p>
          </div>
          <ProductCatalog />
        </div>
      </section>
    </>
  )
}
