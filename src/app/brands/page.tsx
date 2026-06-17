"use client"

import { brands } from "@/data/brands"
import { Container } from "@/components/shared/container"
import { CTASection } from "@/components/shared/cta-section"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function BrandsPage() {
  const { language } = useLanguage()

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case "red":
        return "bg-[#E21B1B]"
      case "blue":
        return "bg-[#1E88E5]"
      default:
        return "bg-[#0B1F35]"
    }
  }

  return (
    <>
      <section className="bg-[#F8F4EC] px-4 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
            {language === "en" ? "Our Brands" : "علاماتنا التجارية"}
          </h1>
          <p className="mt-4 text-lg text-[#374151]">
            {language === "en"
              ? "Successful brands built and managed by Areej Al Alam Group."
              : "علامات تجارية ناجحة بناها وأدارها مجموعة أريج العالمية."}
          </p>
        </Container>
      </section>

      <section className="bg-white px-4 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all hover:shadow-lg"
              >
                <div className={`${getAccentColor(brand.accent)} p-8`}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-3xl font-bold text-white">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#0B1F35]">
                    {language === "en" ? brand.name : brand.arabicName}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-[#B8893B]">
                    {language === "en" ? brand.role : brand.arabicRole}
                  </p>
                  <p className="mt-4 text-[#374151]">
                    {language === "en"
                      ? brand.description
                      : brand.arabicDescription}
                  </p>
                  {brand.slug === "depalma-consumer-goods" && (
                    <Link
                      href="/categories/perfumes-fragrance"
                      className="mt-4 inline-block text-sm font-medium text-[#B8893B] hover:underline"
                    >
                      {language === "en"
                        ? "View Products →"
                        : "عرض المنتجات ←"}
                    </Link>
                  )}
                  {brand.slug === "depalma-furniture-decor" && (
                    <Link
                      href="/categories/furniture-decor"
                      className="mt-4 inline-block text-sm font-medium text-[#B8893B] hover:underline"
                    >
                      {language === "en"
                        ? "View Products →"
                        : "عرض المنتجات ←"}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Interested in Our Brands?"
        description="Get in touch to learn more about distribution and partnership opportunities."
        primaryCta={{
          label: "Contact Sales",
          href: "/contact",
        }}
      />
    </>
  )
}
