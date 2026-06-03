"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Premium Rhode Grass",
    subtitle: "For Optimal Livestock Nutrition",
    description: "Carefully harvested, expertly baled, and prepared to meet the nutritional demands of livestock producers worldwide.",
    cta: "Explore Products",
    href: "/products/rhode-grass",
    image: "/hero-1.webp"
  },
  {
    id: 2,
    title: "Premium Baling Solutions ",
    subtitle: "Reducing inefficiencies across agricultural supply chain",
    description: "Delivering high-quality agricultural products through strategic infastructure, advanced processing and reliable distribution.",
    cta: "Learn More",
    href: "/products/Wheat Straw",
    image: "/hero-2.webp"
  },
  {
    id: 3,
    title: "Sugarcane Bagasse",
    subtitle: "Limited Stock Avaliable",
    description: "Sustainable bagasse for high-efficiency biomass power generation and industrial applications.",
    cta: "View Details",
    href: "/products/Sugarcane Bagasse",
    image: "/hero-6.webp"
  },
  {
    id: 4,
    title: "Rice Straw Biomass",
    subtitle: "Sustainable Agricultural Solutions",
    description: "Versatile rice straw bales for biomass fuel, bedding, and industrial applications.",
    cta: "Discover More",
    href: "/products/rice-straw",
    image: "/hero-4.webp"
  },
  {
    id: 5,
    title: "Export Container Loading",
    subtitle: "Global Logistics Excellence",
    description: "Efficient containerized shipping to markets worldwide with comprehensive export documentation.",
    cta: "Contact Us",
    href: "/contact",
    image: "/hero-5.webp"
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section 
      className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="max-w-2xl text-background">
              <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-foreground/80 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                {slide.description}
              </p>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  <Link href={slide.href}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
