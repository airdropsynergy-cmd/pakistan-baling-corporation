import { industries } from "@/data/products"
import { 
  Milk, 
  Beef, 
  Factory, 
  Zap, 
  Flame, 
  BedDouble, 
  Sprout, 
  Leaf 
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  milk: Milk,
  beef: Beef,
  factory: Factory,
  zap: Zap,
  flame: Flame,
  bed: BedDouble,
  sprout: Sprout,
  leaf: Leaf,
}

export function IndustriesServed() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Powering Industries Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            From dairy farms to renewable energy facilities, our products serve 
            diverse industries with quality and reliability.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || Sprout
            return (
              <div 
                key={industry.name}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
