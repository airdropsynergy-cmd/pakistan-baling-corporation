import { Metadata } from "next"
import { ProductCatalog } from "@/components/products/product-catalog"

export const metadata: Metadata = {
  title: "Products | Pakistan Baling Corporation",
  description: "Explore our comprehensive range of premium biomass products including Rhode Grass, Alfalfa, Silage, Rice Straw, Wheat Straw, and Sugarcane Bagasse for animal feed, biomass fuel, and industrial applications.",
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
          <ProductCatalog />
        </div>
      </section>
    </>
  )
}
