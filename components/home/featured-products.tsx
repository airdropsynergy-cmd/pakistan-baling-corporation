import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const productImages: Record<string, string> = {
  "rhode-grass": "/Rhode-Grass.webp",
  "alfalfa": "/Alfalfa.webp",
  "silage": "/Silage.webp",
  "rice-husk": "/Rice-Husk.webp",
  "rice-straw": "/Rice-Straw.webp",
  "wheat-straw": "/Wheat-Straw.webp",
  "sugarcane-bagasse": "/Sugarcane-bagasse.webp",
}

export function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.available)

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Premium Biomass Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of high-quality biomass and agricultural products 
            for animal feed, renewable energy, and industrial applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={productImages[product.slug] || "/images/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={cn(
                      "px-3 py-1 text-xs font-medium rounded-full",
                      product.status === "Available" 
                        ? "bg-primary text-primary-foreground"
                        : product.status === "Seasonal"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
