import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Package,
  Flame,
  Leaf,
  Bed,
  Factory,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductImageGallery from "@/components/products/product-image-gallery"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const applicationIcons: Record<string, typeof Leaf> = {
  "Dairy Cattle Feed": Leaf,
  "Livestock Feed": Leaf,
  "Horse Feed": Leaf,
  "Premium Livestock Feed": Leaf,
  "Camel Feed": Leaf,
  "Sheep & Goat Feed": Leaf,
  "Beef Cattle Feed": Leaf,
  "Livestock Fattening": Leaf,
  "TMR Mixing": Leaf,
  "Biomass Power Plants": Flame,
  "Industrial Boilers": Factory,
  "Brick Kilns": Factory,
  "Cement Industry": Factory,
  "Animal Bedding": Bed,
  "Mushroom Cultivation": Leaf,
  "Paper Manufacturing": Factory,
  "Composting": Leaf,
  "Erosion Control": Leaf,
  "Industrial Processing": Factory,
  "Paper & Pulp Industry": Factory,
  "Cogeneration Plants": Flame,
  "Particle Board Manufacturing": Factory,
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  
  if (!product) {
    return {
      title: "Product Not Found | Pakistan Baling Corporation",
    }
  }

 return {
  title: `${product.name} Exporter & Supplier | Pakistan Baling Corporation`,
  description: product.shortDescription,

  alternates: {
    canonical: `/products/${product.slug}`,
  },

  openGraph: {
  title: `${product.name} Exporter & Supplier | Pakistan Baling Corporation`,
  description: product.shortDescription,
  url: `https://pakbaling.com/products/${product.slug}`,
  type: "website",
  images: [
    {
      url: `https://pakbaling.com${product.heroImages[0]}`,
      width: 1200,
      height: 630,
      alt: product.name,
    },
  ],
},
}
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.available)
    .slice(0, 4)

  // Build Key Facts with standardized 9 fields in exact order
  // 1. Bale Weight, 2. Full Container Load (40 FT), 3. Packaging Form, 4. Origin, 
  // 5. Moisture Content, 6. Crude Protein, 7. Gross Calorific Value (GCV), 8. Ash Content, 9. Lower Heating Value (LHV)
  const keyFacts: { label: string; value: string }[] = [
    { 
      label: "Bale Weight", 
      value: product.specifications.baleWeight || product.containerInfo.baleWeight || "N/A" 
    },
    { 
      label: "Full Container Load (40 FT)", 
      value: product.containerInfo.approximateNetWeight || "N/A" 
    },
    { 
      label: "Packaging Form", 
      value: product.specifications.packaging || "N/A" 
    },
    { 
      label: "Origin", 
      value: product.specifications.origin || "N/A" 
    },
    { 
      label: "Moisture Content", 
      value: product.specifications.moistureContent || product.technicalProperties.moisture || "N/A" 
    },
    { 
      label: "Crude Protein", 
      value: product.technicalProperties.crudeProtein || "N/A" 
    },
    { 
      label: "Gross Calorific Value (GCV)", 
      value: product.technicalProperties.grossCalorificValue || "N/A" 
    },
    { 
      label: "Ash Content", 
      value: product.technicalProperties.ashContent || "N/A" 
    },
    { 
      label: "Lower Heating Value (LHV)", 
      value: product.technicalProperties.lhv || "N/A" 
    },
  ]

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
"@id": `https://pakbaling.com/products/${product.slug}#product`,

  name: product.name,
  description: product.shortDescription,

  image: product.heroImages.map(
  (img) => `https://pakbaling.com${img}`
),

  brand: {
    "@type": "Brand",
    name: "Pakistan Baling Corporation",
  },

  manufacturer: {
  "@type": "Organization",
  "@id": "https://pakbaling.com/#organization",
  name: "Pakistan Baling Corporation",
},

  category: product.category,

  url: `https://pakbaling.com/products/${product.slug}`,

  additionalProperty: keyFacts
    .filter((fact) => fact.value !== "N/A")
    .map((fact) => ({
      "@type": "PropertyValue",
      name: fact.label,
      value: fact.value,
    })),
}

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 1. Product Image + 2. Product Section + 3. Heading + 4. Subheading + 5. Action Buttons */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="space-y-4">
  <ProductImageGallery
    images={product.heroImages}
    productName={product.name}
  />
</div>

            {/* Product Info: Heading, Subheading, Action Buttons */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                  {product.name}
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>

<div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
  <p className="text-sm font-semibold text-foreground mb-1">
    Availability Status: {product.status}
  </p>

  <p className="text-sm text-muted-foreground">
    {product.status === "Ready Stock"
      ? "Available for immediate supply. Contact our team for quotations."
      : product.status === "Seasonal Supply"
      ? "Available during harvest season or through advance booking. Advance bookings are open."
      : "Available through our sourcing network. Contact us for availability and lead times."}
  </p>
</div>
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    <FileText className="w-5 h-5 mr-2" />
                    Request Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Facts (combined Product Specs, Container Info, Technical Properties) */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Key Facts
          </h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {keyFacts.map((fact, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-muted-foreground font-medium bg-muted/30 w-1/3">
                      {fact.label}
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {fact.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Product Description */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Product Description
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="leading-relaxed">{product.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* 8. Product Uses / Applications */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Product Uses / Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.applications.map((application) => {
              const IconComponent = applicationIcons[application] || Package
              return (
                <div 
                  key={application}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{application}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 9. Download Documents */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Download Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Quality Testing Report */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Quality Testing Report
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed laboratory analysis and quality certification for this product.
                  </p>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Available on request
                  </span>
                </div>
              </div>
            </div>

            {/* Product Profile */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Product Profile
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive product information sheet with complete specifications.
                  </p>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Available on request
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" disabled>
              <Download className="w-4 h-4 mr-2" />
              Testing Report
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" disabled>
              <Download className="w-4 h-4 mr-2" />
              Product Profile
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" disabled>
              <Download className="w-4 h-4 mr-2" />
              Technical Datasheet
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Document downloads will be available upon request. Contact our sales team for access.
          </p>
        </div>
      </section>

      {/* 10. Related Products */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id}
                href={`/products/${relatedProduct.slug}`}
                className="group"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedProduct.heroImages[0] || "/images/placeholder.jpg"}
                      alt={`${relatedProduct.name} supplied by Pakistan Baling Corporation`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {relatedProduct.category}
                    </span>
                    <h3 className="text-base font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in {product.name}?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a customized quotation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/contact">
                <FileText className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
