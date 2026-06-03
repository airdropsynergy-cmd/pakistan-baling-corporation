import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, FileText } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="ctaPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#ctaPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Source from us?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a 
            customized quotation for your specific needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 font-semibold px-8"
            >
              <Link href="/contact">
                <FileText className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
            >
              <Link href="/contact">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-primary-foreground/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">10+</div>
                <div className="text-sm text-primary-foreground/70">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">5+</div>
                <div className="text-sm text-primary-foreground/70">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/70">Containers/Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">8</div>
                <div className="text-sm text-primary-foreground/70">Product Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
