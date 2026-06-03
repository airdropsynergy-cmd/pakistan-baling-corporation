import Image from "next/image"
import { Package, Container, FileText } from "lucide-react"

export function ExportLogistics() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Export & Logistics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Seamless Export Operations
          </h2>
          <p className="text-lg text-muted-foreground">
            From processing to delivery, we handle every aspect of your export requirements 
            with professionalism and efficiency.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                alt="Container loading operations"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card rounded-xl shadow-xl p-6 border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Container className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Containers/Year</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Successfully shipped to destinations worldwide
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Comprehensive Logistics Support
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Container className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Containerized Shipments</h4>
                  <p className="text-sm text-muted-foreground">
                    20ft and 40ft HC containers optimized for maximum payload efficiency
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Bulk Supply Capability</h4>
                  <p className="text-sm text-muted-foreground">
                    Large-scale orders handled with dedicated processing capacity
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Export Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete documentation including certificates of origin and phytosanitary certificates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
