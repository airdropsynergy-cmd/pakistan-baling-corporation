import { HeroCarousel } from "@/components/home/hero-carousel"
import { CompanyIntro } from "@/components/home/company-intro"
import { FeaturedProducts } from "@/components/home/featured-products"
import { IndustriesServed } from "@/components/home/industries-served"
import { ExportLogistics } from "@/components/home/export-logistics"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CompanyIntro />
      <FeaturedProducts />
      <IndustriesServed />
      <ExportLogistics />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
