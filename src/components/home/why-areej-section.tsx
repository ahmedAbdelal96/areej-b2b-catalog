"use client"

import { useLanguage } from "@/contexts/language-context"
import { whyAreej } from "@/data/navigation"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { CheckCircle } from "lucide-react"

export function WhyAreejSection() {
  const { language } = useLanguage()
  const reasons = language === "en" ? whyAreej.en : whyAreej.ar

  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={language === "en" ? "Why Areej Al Alam" : "لماذا أريج العالم"}
          subtitle={
            language === "en"
              ? "A trusted partner for import and marketing operations since 2006."
              : "شريك موثوق لعمليات الاستيراد والتسويق منذ 2006."
          }
          centered
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl bg-[#F8F4EC] p-6"
            >
              <div className="mt-1">
                <CheckCircle className="h-6 w-6 text-[#B8893B]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0B1F35]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-[#374151]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
