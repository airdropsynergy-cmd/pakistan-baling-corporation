import Image from "next/image"
import { Metadata } from "next"
import { 
  Leaf, 
  Sprout, 
  Globe, 
  Package, 
  Container,
  FileCheck,
  Shield,
  Heart,
  Target,
  Award,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { timeline } from "@/data/products"

export const metadata: Metadata = {
  title: "About Us | BioMass Global",
  description: "Learn about BioMass Global - a leading supplier and exporter of premium biomass products for animal feed, renewable energy, and agricultural applications.",
}

const services = [
  {
    title: "Biomass Supply",
    description: "Premium quality biomass products for diverse industrial applications",
    icon: Sprout,
  },
  {
    title: "Animal Feed Supply",
    description: "Nutritious hay and forage products for livestock nutrition",
    icon: Leaf,
  },
  {
    title: "Export Operations",
    description: "Comprehensive export services to international markets",
    icon: Globe,
  },
  {
    title: "Logistics Support",
    description: "End-to-end shipping and documentation assistance",
    icon: Package,
  },
  {
    title: "Product Processing",
    description: "Advanced processing and high-density baling services",
    icon: Container,
  },
]

const coreValues = [
  {
    title: "Integrity",
    description: "Conducting business with honesty and transparency in all dealings",
    icon: Shield,
  },
  {
    title: "Reliability",
    description: "Delivering consistent quality and timely service you can count on",
    icon: Target,
  },
  {
    title: "Sustainability",
    description: "Committed to environmentally responsible practices",
    icon: Leaf,
  },
  {
    title: "Quality",
    description: "Maintaining the highest standards across all our products",
    icon: Award,
  },
  {
    title: "Customer Focus",
    description: "Putting customer needs at the heart of everything we do",
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let's get Introduced</h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Your trusted partner in premium biomass and agricultural products
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                A Leading Force in Biomass Supply & Export
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pakistan Baling Corporation (PBC) is a biomass baling and agricultural logistics company headquartered in Karachi, operating from Pakistan’s key export gateway at Port Qasim. We specialize in the sourcing, high-density baling, and supply of agricultural products for both animal feed and biomass energy applications.
                </p>
                <p>
                  Our foundation comes from over five decades of experience in the dairy sector. This heritage has given us a deep understanding of livestock nutrition, feed quality, and the importance of consistent, reliable agricultural inputs. It is this background that shapes our approach to quality control and supply chain integrity across all materials we handle.
                </p>
                <p>
                  We are committed to building a reliable bridge between Pakistan’s agricultural production base and domestic and international markets through efficient logistics, quality assurance, and scalable infrastructure for the most bulky volumeours products on the planet.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80"
                  alt="Agricultural operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden lg:block">
                <Image
                  src="/hero-3.webp"
                  alt="Biomass products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for all your biomass and agricultural product needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-medium tracking-wider uppercase text-primary-foreground/70 mb-4 block">
              Our Mission
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-balance">
              {'"'}We recognize that Pakistan’s long-term growth depends on reducing the cost of feed and energy. Through agricultural biomass, we aim to provide a reliable, and cost-effective supply solution that supports both domestic industries and international buyers.{'"'}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=800&q=80"
                  alt="Sustainable agricultural practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                Sustainability
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Committed to a Greener Pakistan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sustainability is at the core of everything we do. Our products are renewable resources 
                  that would otherwise go to waste. By converting these materials into valuable products   
                  we contribute to a circular economy and reduce environmental impact. Moreover, our energy market products not only reduce your cost of power but replace our dirty fossil friends. 
                </p>
                <p>
                  We work closely with farming communities to implement sustainable harvesting 
                  practices that protect soil health and preserve natural ecosystems. Our 
                  processing facilities are designed to minimize energy consumption and 
                  reduce our carbon footprint across the entire supply chain network. 
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Renewable</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground">Waste Policy</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2030</div>
                  <div className="text-sm text-muted-foreground">Carbon Neutral</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Capability */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                Export Capability
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Global Reach, Local Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our export operations are designed to deliver products to customers 
                  worldwide with efficiency and reliability. From containerized shipments 
                  to comprehensive documentation support, we handle every aspect of the 
                  export process.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <Container className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Container Loading</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized loading for maximum container utilization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <FileCheck className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quality Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Rigorous inspection before every shipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <Globe className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">International Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Established partnerships with major shipping lines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                  alt="Container shipping operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Our values define who we are and guide every decision we make
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div 
                key={value.title}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how we can meet your biomass and agricultural product needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
