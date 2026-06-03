import { Layers, Award, Package, Globe } from "lucide-react"

const features = [
  {
    title: "High Density Baling",
    description: "Advanced compression for optimal container utilization",
    icon: Layers,
  },
  {
    title: "Consistent Quality",
    description: "Rigorous quality control across all shipments",
    icon: Award,
  },
  {
    title: "Export Packaging",
    description: "Specialized packaging for international shipping",
    icon: Package,
  },
  {
    title: "Global Logistics",
    description: "Established partnerships in key ports worldwide",
    icon: Globe,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3 text-balance">
            The BioMass Global Advantage
          </h2>
          <p className="text-muted-foreground">
            Quality, reliability, and customer satisfaction in every shipment.
          </p>
        </div>

        {/* Features Grid - Compact 4-column */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group text-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
