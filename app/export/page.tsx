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
  Layers,
  Gauge,
  BadgeCheck,
  Boxes,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Agricultural & Biomass Export from Pakistan",
  description:
    "Pakistan Baling Corporation exports baled Rhodes Grass hay and sugarcane bagasse from Port Qasim, Karachi to feed and industrial buyers in the UAE, Saudi Arabia and Oman — flexible bale formats, container loading, export documentation and enquiry.",
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

// Supply advantages that matter specifically to an export buyer. Each reflects
// capability documented in the product and company profiles — grading before
// pressing, flexible press configuration, high-density pressing, and the
// bundle configuration. No new commercial claims.
const exportAdvantages = [
  {
    title: "Graded before pressing",
    description:
      "Material is conditioned to a standard moisture and graded before it reaches the press, not baled as it comes off the field.",
    icon: BadgeCheck,
  },
  {
    title: "Flexible bale formats",
    description:
      "Small, double-pressed and single-press configurations from the same graded material, chosen around how you handle and ship it.",
    icon: Layers,
  },
  {
    title: "High-density pressing",
    description:
      "Pressed at our own facility to around 375 kg/m³ in the small-bale format, which is what puts payload into the container.",
    icon: Gauge,
  },
  {
    title: "Bundled for handling",
    description:
      "Small bales can be strapped into forklift-handleable bundles that separate back into individual bales at your end.",
    icon: Boxes,
  },
]

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
    route: "Port Qasim → Jebel Ali, Dubai",
    context:
      "Jebel Ali is the region's principal gateway for imported hay, and the UAE is as much a redistribution point as an end market — a significant share of cargo landed there moves on into the wider Gulf. Feed demand is concentrated around Dubai, Abu Dhabi and Al Ain, where domestic forage production is limited by climate and water.",
    demand: "Dairy, livestock, equestrian and camel feed",
    note: "Short sea leg from Karachi relative to competing origins.",
  },
  {
    country: "Saudi Arabia",
    route: "Port Qasim → Dammam or Jeddah",
    context:
      "The largest forage import market in the region, and the one where routing genuinely matters: Dammam serves the Eastern Province from the Arabian Gulf, Jeddah the west from the Red Sea. Which port a buyer nominates changes both freight and transit, so it is worth settling at enquiry stage rather than afterwards.",
    demand: "Large-scale dairy and livestock operations",
    note: "Fodder from outside the GCC requires an import approval held by the importer.",
  },
  {
    country: "Oman",
    route: "Port Qasim → Sohar or Salalah",
    context:
      "Supplied both directly and through Gulf regional distribution. Sohar serves the populated north around Muscat and the Batinah coast; Salalah sits roughly a thousand kilometres south, so the receiving operation's location — not the shipping line — usually decides the discharge port.",
    demand: "Livestock and dairy feed",
    note: "Feed imports are permitted through Oman's agriculture and fisheries ministry.",
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
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Supply Prepared for the Container
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Forage and crop residue in Pakistan are abundant and competitively priced
                at source. The conventional chain gives much of that advantage away —
                field-baled, under-dried, and shipped at densities that leave part of the
                container&apos;s payload unused. We prepare material for export instead of
                simply trading it, and that is what an international buyer is actually
                buying from us.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {exportAdvantages.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
            </div>

            {/* Sugarcane Bagasse */}
            <div className="bg-card rounded-xl border border-border overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/hero-1.webp"
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
              We ship out of Port Qasim, Karachi, into the Gulf — a short sea leg compared
              with the North American, Australian and Southern African origins that supply
              the same buyers. Baled forage is our principal export line into these markets;
              sugarcane bagasse and agricultural residues are supplied to industrial and
              energy users and quoted on the same basis.
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
                      Shipping route
                    </span>
                    <span className="text-sm font-medium text-foreground">{m.route}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {m.context}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Primary demand
                    </span>
                    <span className="text-sm text-foreground">{m.demand}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border">
                    {m.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            Import permits and customs clearance are the importer&apos;s responsibility in each
            of these markets. From our side we supply the origin documentation those
            applications rely on — certificate of analysis, phytosanitary certificate and
            certificate of origin — with fumigation and third-party inspection available on
            request. If your buyer or authority requires a specific certificate or inspection
            body, raise it before the order is placed.
          </p>
        </div>
      </section>

      {/* Formats & container payload */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Flexible Bale Formats
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The same graded material can be pressed into different formats depending on
              the product, how you handle it at the receiving end, and how the shipment
              needs to load. Format is worth deciding early: ocean freight is charged by
              the container rather than by the tonne inside it, so bale density is what
              determines the freight share of your delivered cost.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-x-auto">
            <table className="w-full min-w-[36rem]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Bale format</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Typical size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">Small bale</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    Approx. 20&ndash;30 kg, high-density
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    Manual and forklift handleable
                    <sup className="text-primary font-semibold ml-0.5">*</sup>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">Large bale</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    Double-pressed, 600 kg and above
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Forklift handling</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">Single-press bale</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Available on request</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Forklift handling</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 max-w-3xl space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <sup className="text-primary font-semibold">*</sup> Small bales can be packed
              into PET or twine-strapped bundles of approximately 300 kg &mdash; for example
              ten 30 kg bales to a bundle. The bundle is handled by forklift through the port
              and into the container; cutting the strapping releases the individual bales for
              manual handling at the receiving end. In the small-bale format this loads
              roughly 24&ndash;26 tonnes into a 40 ft high-cube, depending on product and
              configuration.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Figures are indicative and vary with product, bale format and material density.
              Per-product specifications are on each{" "}
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
