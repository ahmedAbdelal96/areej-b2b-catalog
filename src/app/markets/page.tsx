"use client"

import { markets } from "@/data/markets"
import { Container } from "@/components/shared/container"
import { CTASection } from "@/components/shared/cta-section"
import { useLanguage } from "@/contexts/language-context"
import { MapPin } from "lucide-react"

export default function MarketsPage() {
  const { language } = useLanguage()

  return (
    <>
      <section className="bg-[#F8F4EC] px-4 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
            {language === "en" ? "Our Markets" : "أسواقنا"}
          </h1>
          <p className="mt-4 text-lg text-[#374151]">
            {language === "en"
              ? "Operating across three key markets in the Middle East and Southeast Asia."
              : "نعمل عبر ثلاث أسواق رئيسية في الشرق الأوسط وجنوب شرق آسيا."}
          </p>
        </Container>
      </section>

      <section className="bg-white px-4 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {markets.map((market) => (
              <div
                key={market.id}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all hover:shadow-lg"
              >
                <div className="bg-[#071525] p-6">
                  <MapPin className="h-10 w-10 text-[#B8893B]" />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#F8F4EC] px-3 py-1 text-xs font-medium text-[#B8893B]">
                    {language === "en" ? market.role : market.arabicRole}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-[#0B1F35]">
                    {language === "en" ? market.name : market.arabicName}
                  </h2>
                  <p className="mt-4 text-[#374151]">
                    {language === "en"
                      ? market.description
                      : market.arabicDescription}
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-[#6B7280]">
                      {language === "en" ? "Focus areas:" : "مجالات التركيز:"}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {market.focus.map((focus, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-[#374151]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B8893B]" />
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Expand Your Market Reach"
        description="Partner with Areej to access these key markets."
        primaryCta={{
          label: "Get in Touch",
          href: "/contact",
        }}
      />
    </>
  )
}
