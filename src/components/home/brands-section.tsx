"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { brands } from "@/data/brands"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"

export function BrandsSection() {
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
    <section className="bg-[#F8F4EC] px-4 py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={language === "en" ? "Our Brands" : "علاماتنا التجارية"}
          subtitle={
            language === "en"
              ? "Successful brands built in the Saudi market."
              : "علامات تجارية ناجحة بناها في السوق السعودي."
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${getAccentColor(
                    brand.accent
                  )}`}
                >
                  <span className="text-lg font-bold text-white">
                    {brand.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0B1F35]">
                {language === "en" ? brand.name : brand.arabicName}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#B8893B]">
                {language === "en" ? brand.role : brand.arabicRole}
              </p>
              <p className="mt-4 text-sm text-[#374151]">
                {language === "en" ? brand.description : brand.arabicDescription}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F35] transition-colors hover:text-[#B8893B]"
          >
            {language === "en" ? "Learn More About Our Brands" : "اعرف المزيد عن علاماتنا"}
          </Link>
        </div>
      </Container>
    </section>
  )
}
