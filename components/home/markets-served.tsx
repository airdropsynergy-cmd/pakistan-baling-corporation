import { markets } from "@/data/products"
import { Globe, Ship, Package, FileCheck } from "lucide-react"

export function MarketsServed() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary-foreground/70">
            Global Reach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Markets We Serve
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Delivering premium biomass products to customers across the Middle East, 
            Africa, and South Asia through our reliable export network.
          </p>
        </div>

        {/* World Map Illustration */}
        <div className="relative mb-16">
          <div className="aspect-[2/1] max-w-4xl mx-auto relative">
            {/* Simplified world map representation using dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-32 h-32 text-primary-foreground/20" />
            </div>
            
            {/* Shipping route indicators */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-3xl">
                {/* Route lines visual */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.1"/>
                      <stop offset="50%" stopColor="currentColor" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  <path 
                    d="M50,100 Q150,50 250,80 T350,100" 
                    fill="none" 
                    stroke="url(#routeGradient)" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="text-primary-foreground"
                  />
                  <path 
                    d="M50,120 Q200,150 350,90" 
                    fill="none" 
                    stroke="url(#routeGradient)" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="text-primary-foreground"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {markets.map((market) => (
            <div 
              key={market.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <span className="text-3xl mb-2 block" role="img" aria-label={`${market.name} flag`}>
                {market.flag}
              </span>
              <h3 className="font-semibold text-sm">{market.name}</h3>
              <p className="text-xs text-primary-foreground/70">{market.region}</p>
            </div>
          ))}
        </div>

        {/* Export Capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <Ship className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ocean Freight</h3>
              <p className="text-sm text-primary-foreground/70">Full container load shipping worldwide</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Bulk Supply</h3>
              <p className="text-sm text-primary-foreground/70">Large volume orders handled efficiently</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Documentation</h3>
              <p className="text-sm text-primary-foreground/70">Complete export documentation support</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Global Network</h3>
              <p className="text-sm text-primary-foreground/70">Established partners in key ports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
