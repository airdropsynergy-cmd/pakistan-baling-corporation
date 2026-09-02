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
  Leaf,
  Flame,
  Anchor,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Agricultural Feed & Biomass Exporter in Pakistan",
  description:
    "Pakistan Baling Corporation — exporter of baled Rhodes Grass hay and sugarcane bagasse from Port Qasim, Karachi. Flexible bale formats, container loads up to 24–26 tonnes, shipments quoted to UAE, Saudi Arabia and Oman ports.",
  alternates: {
    canonical: "/export",
  },
  openGraph: {
    title: "Agricultural Feed & Biomass Exporter in Pakistan | Pakistan Baling Corporation",
    description:
      "Baled Rhodes Grass hay and sugarcane bagasse, shipped from Port Qasim to buyer-nominated ports in the UAE, Saudi Arabia and Oman.",
    url: absoluteUrl("/export"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/hero-1.webp"),
        width: 1200,
        height: 630,
        alt: "Baled agricultural commodities prepared for export from Pakistan",
      },
    ],
  },
}

// Only products currently offered are presented as export capability.
const exportableProducts = products.filter((p) => p.available)
const leadProducts = ["rhodes-grass", "sugarcane-bagasse"]

const exportSteps = [
  {
    title: "Enquiry & Product Selection",
    description:
      "Tell us the product, target quantity, preferred bale format and destination port. We confirm what we can supply and when.",
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
      "Material is sourced at farm and mill level, conditioned to a standard moisture, graded, and pressed to the agreed format.",
    icon: PackageCheck,
  },
  {
    title: "Quality Control",
    description:
      "Each lot is tested in our in-house laboratory. A certificate of analysis is issued for the batch shipped.",
    icon: FileCheck,
  },
  {
    title: "Container Loading",
    description:
      "Bales are loaded into 40 ft high-cube containers at our Port Qasim facility, without a second handling.",
    icon: Container,
  },
  {
    title: "Documentation & Shipping",
    description:
      "Export documentation is prepared and containerised shipping is coordinated with our freight partners.",
    icon: Ship,
  },
]

// Market cards describe how PBC serves each destination, not the destination
// itself. Ports are where we can quote shipments to — the buyer nominates.
const markets = [
  {
    country: "United Arab Emirates",
    ports: "Jebel Ali · Fujairah · other UAE ports by arrangement",
    proposition:
      "UAE-bound orders are quoted to your nominated port — Jebel Ali for most consignments, with Fujairah and other UAE ports considered where the shipment calls for it. Bale format and container configuration are matched to how the order is received and moved on at your end.",
    demand: "Dairy, livestock, equestrian and camel feed; industrial biomass",
  },
  {
    country: "Saudi Arabia",
    ports: "Dammam (east coast) · Jeddah (west coast)",
    proposition:
      "Saudi orders are quoted to Dammam or Jeddah depending on where your operation sits. The nomination changes freight and transit time, so we settle it with you at enquiry stage rather than after the order is placed.",
    demand: "Large-scale dairy and livestock operations",
  },
  {
    country: "Oman",
    ports: "Sohar · Salalah",
    proposition:
      "Oman is supplied direct from Karachi to Sohar or Salalah — nominate whichever serves your operation and we quote against it. Samples and trial lots can be arranged before a first order.",
    demand: "Livestock and dairy feed",
  },
]

// Container payloads per format. Figures are from the product profile; the
// double-press figure is the one consistent with its own bale-count arithmetic
// (28-29 bales x 675-725 kg). Small-bale figure applies to the high-density
// forage configuration; actual loads vary by product.
const formats = [
  {
    format: "Small bale",
    size: "Approx. 20–30 kg, high-density",
    handling: "Manual & machine handling",
    footnote: true,
    load: "Approx. 24–26 t",
  },
  {
    format: "Large bale",
    size: "Double-pressed, 600 kg and above",
    handling: "Machine handling",
    footnote: false,
    load: "Approx. 19–21 t",
  },
  {
    format: "Single-press bale",
    size: "Approx. 300 kg, on request",
    handling: "Machine handling",
    footnote: false,
    load: "Approx. 10–12 t",
  },
]

const glance = [
  { label: "Origin", value: "Sindh, Pakistan — shipped from Port Qasim, Karachi" },
  { label: "Processing capacity", value: "50,000 MT per year" },
  { label: "Container", value: "40 ft high-cube, loaded at our own facility" },
  { label: "Quality", value: "In-house laboratory, COA per batch" },
  { label: "Markets", value: "UAE · Saudi Arabia · Oman" },
]

export default function ExportPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Export & Shipping",
        item: absoluteUrl("/export"),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
      <section className="relative h-[46vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-1.webp"
          alt="Baled agricultural commodities prepared for container export from Pakistan"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center text-background px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Agricultural Feed &amp; Biomass Exporter in Pakistan
          </h1>
          <p className="text-lg md:text-xl text-background/80">
            Baled forage and biomass, pressed and containerised at Port Qasim for buyers
            in the UAE, Saudi Arabia and Oman.
          </p>
        </div>
      </section>

      {/* Export at a glance — stat strip */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6">
            {glance.map((item) => (
              <div key={item.label}>
                <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-foreground leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we export */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What We Export
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Two export lines serving two kinds of buyer: baled Rhodes Grass hay for feed
              and livestock operations, and baled sugarcane bagasse for industrial and
              energy users. Both are pressed, tested and containerised at our own facility
              and sold against a written specification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Rhodes Grass */}
            <div className="bg-card rounded-xl border border-border overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/hero-1.webp"
                  alt="Baled Rhodes Grass hay prepared for export from Pakistan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      Animal Feed
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">Rhodes Grass Hay</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  Our principal forage export. Leaf-rich hay graded before pressing and
                  held as ready stock at Port Qasim, supplied in small high-density bales
                  or large pressed formats to dairy, livestock, equestrian and camel feed
                  buyers across the Gulf.
                </p>
                <Link
                  href="/products/rhodes-grass"
                  className="text-primary font-medium text-sm inline-flex items-center hover:underline"
                >
                  Rhodes Grass specifications
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Sugarcane Bagasse */}
            <div className="bg-card rounded-xl border border-border overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/products/bagasse/hero-1.webp"
                  alt="Baled sugarcane bagasse biomass fuel prepared for export from Pakistan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      Biomass Fuel
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">Sugarcane Bagasse</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  Baled biomass fuel taken directly from sugar mills, supplied in ready
                  stock to power plants, cogeneration facilities, industrial boilers and
                  paper mills. Baled and loaded for container shipment on the same basis
                  as our forage lines.
                </p>
                <Link
                  href="/products/sugarcane-bagasse"
                  className="text-primary font-medium text-sm inline-flex items-center hover:underline"
                >
                  Sugarcane Bagasse specifications
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-base font-semibold text-foreground mb-2">
              Also available for export
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Agricultural residues supplied for bedding, fodder and industrial fuel. Full
              specifications are on each product page.
            </p>
            <div className="flex flex-wrap gap-2">
              {exportableProducts
                .filter((p) => !leadProducts.includes(p.slug))
                .map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="text-sm px-3 py-1.5 rounded-lg border border-border bg-background text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Markets We Supply
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We ship from Port Qasim, Karachi — a short sea leg into the Gulf compared
              with the North American, Australian and Southern African origins supplying
              the same buyers. Every shipment is quoted to the port you nominate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {markets.map((m) => (
              <div key={m.country} className="bg-card rounded-xl border border-border p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-3">{m.country}</h3>
                <div className="flex items-start gap-2 mb-4 pb-4 border-b border-border">
                  <Anchor className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      Ports we quote to
                    </span>
                    <span className="text-sm font-medium text-foreground">{m.ports}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {m.proposition}
                </p>
                <div>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Primary demand
                  </span>
                  <span className="text-sm text-foreground">{m.demand}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            Import permits and customs clearance sit with the importer in each market. From
            our side, every shipment carries the origin documentation those applications
            rely on — certificate of analysis, phytosanitary certificate and certificate of
            origin — with fumigation and third-party inspection available on request. If
            your authority requires a specific certificate or inspection body, raise it at
            enquiry stage.
          </p>
        </div>
      </section>

      {/* Formats & container loading */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Bale Formats &amp; Container Loading
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ocean freight is charged per container, not per tonne inside it — so the bale
              format you choose sets the freight share of your delivered cost. The same
              graded material can be pressed to different configurations, and the payload
              difference between them is substantial.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-x-auto">
            <table className="w-full min-w-[40rem]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Bale format</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Typical size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Handling</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Approx. load / 40 ft HC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {formats.map((f) => (
                  <tr key={f.format}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{f.format}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{f.size}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {f.handling}
                      {f.footnote && (
                        <sup className="text-primary font-semibold ml-0.5">*</sup>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground font-medium text-right tabular-nums">
                      {f.load}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Freight logic — arithmetic on documented payloads, no invented rates */}
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6 max-w-3xl">
            <h3 className="text-base font-semibold text-foreground mb-2">
              Why the format decision matters
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The container costs the same to ship whether it carries 10 tonnes or 26.
              Loaded with single-press bales, a 40 ft high-cube carries roughly 10&ndash;12
              tonnes; in our small high-density configuration the same container carries
              roughly 24&ndash;26. Whatever your freight rate, that cuts the freight
              component of your delivered cost per tonne by around half. Where manual
              handling at the destination is not required, the double-pressed large bale
              sits between the two.
            </p>
          </div>

          <div className="mt-6 max-w-3xl space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <sup className="text-primary font-semibold">*</sup> Small bales can be packed
              into PET or twine-strapped bundles of approximately 300 kg &mdash; for example
              ten 30 kg bales to a bundle. The bundle is machine-handled through the port
              and into the container; cutting the strapping releases the individual bales
              for manual handling at the receiving end.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Loads are indicative and vary by product and configuration. Per-product
              specifications are on each{" "}
              <Link href="/products" className="text-primary hover:underline font-medium">
                product page
              </Link>
              . Speak with your PBC supply representative for detailed format selection and
              shipment-specific configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Export process */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            How an Export Order Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportSteps.map((step, i) => (
              <div key={step.title} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & enquiry */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Documentation &amp; Inspection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every shipment is accompanied by a certificate of analysis for the batch
                tested at our laboratory, a phytosanitary certificate and a certificate of
                origin. Fumigation and third-party inspection can be arranged on request.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quality testing reports and product profiles are issued against the
                consignment being purchased rather than published in advance, so the
                documentation a buyer receives matches the lot they are actually taking.
              </p>

              {/*
                TODO (requires confirmed business input before publishing):
                  - Minimum order quantity, per product or per container
                  - Incoterms routinely offered (FOB / CIF / CFR)
                  - Payment terms
                  - Specific certifications or inspection bodies held
                These are deliberately not stated because no confirmed values exist in the
                product or company profiles. Do not fill them in without sign-off.
              */}
            </div>

            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                What We Need From You
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0 tabular-nums">01</span>
                  <span>Product required, and preferred bale format or size</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0 tabular-nums">02</span>
                  <span>Target quantity, and whether this is a trial or recurring supply</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0 tabular-nums">03</span>
                  <span>Destination country and discharge port</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0 tabular-nums">04</span>
                  <span>Delivery terms you work on, and required timeline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold shrink-0 tabular-nums">05</span>
                  <span>Any specification thresholds — moisture, protein, ash or calorific value</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                With these details we can respond with pricing, availability and a realistic
                shipment schedule. Samples and trial lots can be arranged before a first
                order.
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
            Send us your product, quantity and destination port. We will come back with
            pricing, availability and container loading for the format you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/contact">
                <FileText className="w-5 h-5 mr-2" />
                Request an Export Quotation
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
