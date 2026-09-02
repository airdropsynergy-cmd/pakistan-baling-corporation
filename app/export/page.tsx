import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  Container,
  FileCheck,
  Ship,
  ClipboardList,
  PackageCheck,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Export & Shipping from Pakistan",
  description:
    "How Pakistan Baling Corporation exports baled fodder and biomass from Pakistan — enquiry to quotation, high-density baling, 40ft container loading, pre-shipment inspection and export documentation from Port Qasim, Karachi.",
  alternates: {
    canonical: "/export",
  },
}

// Enquiry-to-shipment sequence. Each step reflects capability already described
// on the About page (sourcing, baling, container loading, quality control,
// documentation) — no new commercial claims are introduced here.
const exportSteps = [
  {
    title: "Enquiry & Product Selection",
    description:
      "Tell us the product, target quantity, preferred bale format and destination. We confirm what we can supply and when.",
    icon: ClipboardList,
  },
  {
    title: "Quotation",
    description:
      "We issue a written quotation covering current pricing, bale specification and lead time against your requirement.",
    icon: FileText,
  },
  {
    title: "Sourcing & Baling",
    description:
      "Material is sourced and processed through high-density baling to the agreed format and moisture specification.",
    icon: PackageCheck,
  },
  {
    title: "Quality Control",
    description:
      "Consignments are inspected before shipment. Testing reports and product profiles are available on request.",
    icon: FileCheck,
  },
  {
    title: "Container Loading",
    description:
      "Bales are loaded into 40ft High Cube containers by forklift or manual stacking, optimised for container utilisation.",
    icon: Container,
  },
  {
    title: "Documentation & Shipping",
    description:
      "We handle export documentation and coordinate containerised shipping with our freight partners.",
    icon: Ship,
  },
]

export default function ExportPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Export &amp; Shipping</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-5.webp"
          alt="Containerised export loading operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center text-background px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Export &amp; Shipping
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Baled agricultural commodities and biomass, shipped from Pakistan
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Exporting Agricultural Commodities from Pakistan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pakistan Baling Corporation is headquartered in Karachi and operates from
              Pakistan&apos;s key export gateway at Port Qasim. We source, bale and supply
              agricultural commodities and biomass materials for buyers overseas, handling
              the process from initial enquiry through to containerised shipment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This page explains how an export order works in practice — what we need from
              you, how material is prepared and loaded, and what documentation
              accompanies a shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Export Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportSteps.map((step) => (
              <div
                key={step.title}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Container Loading — values come directly from each product's data */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Container Loading by Product
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Loading figures below are indicative per 40ft High Cube container and vary with
            bale format and material density. Confirmed figures are provided with your
            quotation.
          </p>
          <div className="bg-card rounded-xl border border-border overflow-x-auto">
            <table className="w-full min-w-[40rem]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Bale Weight</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Units per Container</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Loading Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 text-sm">
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {product.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {product.containerInfo.baleWeight}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {product.containerInfo.balesPerContainer}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {product.containerInfo.loadingMethod}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Documentation &amp; Inspection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide export documentation support for every shipment and coordinate
                pre-shipment inspection. Quality testing reports and product profiles are
                issued on request rather than published, so buyers receive documentation
                matched to the consignment they are purchasing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If your market requires specific certification or inspection arrangements,
                raise it at enquiry stage so we can confirm what we are able to provide
                before you commit to an order.
              </p>
            </div>

            {/*
              TODO (requires confirmed business input before publishing):
                - Minimum order quantity, per product or per container
                - Incoterms routinely offered (FOB / CIF / CFR)
                - Destination ports and markets actually served
                - Any certifications or inspection bodies held
              These are deliberately not stated because no confirmed values exist in the
              repository. Do not fill them in without sign-off from the business.
            */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Information We Need From You
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">01</span>
                  <span>Product required, and preferred bale format or size</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">02</span>
                  <span>Target quantity, and whether this is a trial or recurring supply</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">03</span>
                  <span>Destination country and discharge port</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">04</span>
                  <span>Delivery terms you work on, and required timeline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0">05</span>
                  <span>Any specification thresholds — moisture, protein, ash or calorific value</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                With these details we can respond with pricing, availability and a
                realistic shipment schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planning an Import from Pakistan?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Send us your requirement and our team will come back with pricing, availability
            and shipping options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/contact">
                <FileText className="w-5 h-5 mr-2" />
                Request a Quotation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
