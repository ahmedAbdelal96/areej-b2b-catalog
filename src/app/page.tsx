import { HeroSection } from "@/components/home/hero-section"
import { TrustStats } from "@/components/home/trust-stats"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { WhyAreejSection } from "@/components/home/why-areej-section"
import { BrandsSection } from "@/components/home/brands-section"
import { MarketsPreviewSection } from "@/components/home/markets-preview-section"
import { CTASection } from "@/components/shared/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyAreejSection />
      <BrandsSection />
      <MarketsPreviewSection />
      <CTASection
        title="Ready to Source Products?"
        description="Connect with our team for product inquiries and quotation requests."
        primaryCta={{
          label: "Request a Quote",
          href: "/request-quote",
        }}
        secondaryCta={{
          label: "Contact Sales",
          href: "/contact",
        }}
      />
    </>
  )
}
