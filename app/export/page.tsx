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
  title: "Agricultural & Biomass Export from Pakistan",
  description:
    "Pakistan Baling Corporation exports baled Rhodes Grass hay and sugarcane bagasse from Port Qasim, Karachi to feed and industrial buyers in the UAE, Saudi Arabia and Oman — container payloads, export documentation and enquiry process.",
  alternates: {
    canonical: "/export",
  },
  openGraph: {
    title: "Agricultural & Biomass Export from Pakistan | Pakistan Baling Corporation",
    description:
      "Baled Rhodes Grass hay and sugarcane bagasse shipped from Port Qasim to buyers in the UAE, Saudi Arabia and Oman.",
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

// Only products currently offered are presented as export capability. Products
// held out of supply keep their own page but are not listed here as exportable.
const exportableProducts = products.filter((p) => p.available)

const leadProducts = ["rhodes-grass", "sugarcane-bagasse"]

// Enquiry-to-shipment sequence. Each step reflects capability described in the
// company and product profiles — sourcing, conditioning, baling, grading,
// container loading and documentation. No new commercial claims are introduced.
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

// Destination markets. Port references describe where forage and biomass cargo
// into each market is customarily discharged — they are routing context, not a
// claim about specific sailings. Import permits are obtained by the importer;
// what is listed under "we provide" is documentation PBC issues.
const markets = [
  {
    country: "United Arab Emirates",
    short: "UAE",
    ports: "Jebel Ali (Dubai)",
    context:
      "The region's principal hay import gateway. Feed demand is concentrated around Dubai, Abu Dhabi and Al Ain, where local forage production is limited by climate.",
    demand: "Dairy, livestock and equestrian feed; industrial biomass",
  },
  {
    country: "Saudi Arabia",
    short: "KSA",
    ports: "Dammam (east coast), Jeddah (west coast)",
    context:
      "The largest forage import market in the region, split across two coasts. Buyers typically route to whichever port serves their operation, which affects freight and lead time.",
    demand: "Large-scale dairy and livestock feed",
  },
  {
    country: "Oman",
    short: "Oman",
    ports: "Sohar, Salalah",
    context:
      "Served both directly and through regional distribution. Two widely separated ports mean routing is usually decided by where the receiving operation sits.",
    demand: "Livestock and dairy feed",
  },
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
            Agricultural &amp; Biomass Export from Pakistan
          </h1>
          <p className="text-lg md:text-xl text-background/80">
            Baled forage and biomass, pressed and containerised at Port Qasim for buyers
            in the UAE, Saudi Arabia and Oman.
          </p>
        </div>
      </section>

      {/* Who is exporting */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                One Accountable Source, Farm to Container
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pakistan Baling Corporation is an agricultural commodity and biomass
                exporter headquartered in Karachi, operating from Pakistan&apos;s principal
                export gateway at Port Qasim. We buy at farm gate and at the mill across
                catchments in Sindh, and everything between that point and the container
                is ours: procurement, conditioning, grading, high-density baling, testing
                and loading.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That matters to an importer for a practical reason. Forage and crop
                residue in Pakistan are abundant and competitively priced at source, but
                the conventional chain gives much of that advantage away — field-baled,
                under-dried, traded through intermediaries and shipped at densities that
                leave a significant part of the container&apos;s payload unused. Running the
                chain end to end is what allows us to put specification, schedule and
                payload in writing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every lot is graded and tested in our own laboratory before it is pressed
                and loaded, and each shipment goes out against a written specification.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 space-y-5 h-fit">
              <h3 className="text-base font-semibold text-foreground">Export at a glance</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Origin</dt>
                  <dd className="font-medium text-foreground">Sindh, Pakistan · shipped from Port Qasim, Karachi</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Processing capacity</dt>
                  <dd className="font-medium text-foreground">50,000 MT per year</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Container</dt>
                  <dd className="font-medium text-foreground">40 ft high-cube, loaded at our own facility</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Quality</dt>
                  <dd className="font-medium text-foreground">In-house laboratory, certificate of analysis per batch</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Markets</dt>
                  <dd className="font-medium text-foreground">United Arab Emirates · Saudi Arabia · Oman</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* What we export */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What We Export
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our export volume runs on two distinct streams serving two different kinds of
              buyer: baled forage for feed and livestock operations, and baled biomass for
              industrial and energy users. Both are pressed and containerised the same way;
              what changes is who buys them and why.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Rhodes Grass */}
            <div className="bg-card rounded-xl border border-border p-6 flex flex-col">
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
                Leaf-rich <em>Chloris gayana</em> cut at early maturity, conditioned to a
                standard moisture and graded before pressing. Supplied in small
                high-density bales and larger pressed formats, chosen according to how the
                forage is handled at the receiving end. This is our principal forage export
                to Gulf feed buyers.
              </p>
              <Link
                href="/products/rhodes-grass"
                className="text-primary font-medium text-sm inline-flex items-center hover:underline"
              >
                Rhodes Grass specifications
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Sugarcane Bagasse */}
            <div className="bg-card rounded-xl border border-border p-6 flex flex-col">
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
                The fibrous residue left after sugarcane is crushed, taken directly from
                mills and baled as a renewable fuel. Gross calorific value of 4,000&ndash;4,400
                kcal/kg on a dry basis with ash at 2&ndash;4%, supplied to power plants,
                cogeneration facilities, industrial boilers and paper mills.
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
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Markets We Supply
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our export focus is the Gulf, where climate limits domestic forage production
              and feed is imported at scale. Sailing times from Karachi are short relative
              to competing origins, which matters for both freight cost and lead time.
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
                      Usual discharge ports
                    </span>
                    <span className="text-sm font-medium text-foreground">{m.ports}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {m.context}
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
            Import permits and clearance are handled by the importer in the destination
            market. We supply the origin-side documentation those applications require, and
            we can arrange fumigation and third-party inspection on request.
          </p>
        </div>
      </section>

      {/* Formats & container payload */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Export Formats &amp; Container Payload
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ocean freight is charged by the container, not by the tonne inside it. How
              much product a 40 ft high-cube actually carries is therefore set by bale
              density, and it decides the freight share of your delivered cost per tonne.
              Bale format is a commercial decision, not a packing detail.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-x-auto">
            <table className="w-full min-w-[34rem]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Bale weight</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Payload per 40 ft HC</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Loading</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {exportableProducts.map((product) => (
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
                      {product.containerInfo.approximateNetWeight}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {product.containerInfo.loadingMethod}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Figures are indicative and vary with bale format and material density. Confirmed
            loading figures are issued with your quotation.
          </p>
        </div>
      </section>

      {/* Export process */}
      <section className="py-16 lg:py-20 bg-background">
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
      <section className="py-16 lg:py-20 bg-secondary/30">
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
              <p className="text-muted-foreground leading-relaxed">
                If your market requires a specific certificate, inspection body or labelling
                format, raise it at enquiry stage so we can confirm what we are able to
                provide before you commit to an order.
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
