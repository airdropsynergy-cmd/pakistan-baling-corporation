"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ArrowRight, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/data/products"
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

export function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter((product) => {
	const isAvailable = product.available
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory
    
    // Only show available products (or show all with availability badge)
    return isAvailable && matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Search & Filter Section */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>

          {/* Desktop Category Filters */}
          <div className="hidden lg:flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category)
                    setShowFilters(false)
                  }}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={cn(
                    "px-3 py-1 text-xs font-medium rounded-full",
                    product.status === "Ready Stock" 
                      ? "bg-primary text-primary-foreground"
                      : product.status === "Seasonal Supply"
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
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-primary font-medium text-sm">
                    View Product
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All Products")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
