"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { markets } from "@/data/markets"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { MapPin } from "lucide-react"

export function MarketsPreviewSection() {
  const { language } = useLanguage()

  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={language === "en" ? "Our Markets" : "أسواقنا"}
          subtitle={
            language === "en"
              ? "Operating across three key markets in the Middle East and Southeast Asia."
              : "نعمل عبر ثلاث أسواق رئيسية في الشرق الأوسط وجنوب شرق آسيا."
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {markets.map((market) => (
            <div
              key={market.id}
              className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-[#B8893B] hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F4EC]">
                <MapPin className="h-6 w-6 text-[#B8893B]" />
              </div>
              <div className="mb-2">
                <span className="inline-block rounded-full bg-[#F8F4EC] px-3 py-1 text-xs font-medium text-[#B8893B]">
                  {language === "en" ? market.role : market.arabicRole}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#0B1F35]">
                {language === "en" ? market.name : market.arabicName}
              </h3>
              <p className="mt-3 text-sm text-[#374151]">
                {language === "en"
                  ? market.description
                  : market.arabicDescription}
              </p>
              <div className="mt-4">
                <p className="text-xs font-medium text-[#6B7280]">
                  {language === "en" ? "Focus areas:" : "مجالات التركيز:"}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {market.focus.slice(0, 2).map((focus, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-full bg-[#F3F4F6] px-2 py-1 text-xs text-[#374151]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/markets"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B1F35] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#102B46]"
          >
            {language === "en" ? "Explore Our Markets" : "استكشف أسواقنا"}
          </Link>
        </div>
      </Container>
    </section>
  )
}
