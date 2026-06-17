"use client"

import { services } from "@/data/services"
import { Container } from "@/components/shared/container"
import { CTASection } from "@/components/shared/cta-section"
import { useLanguage } from "@/contexts/language-context"
import {
  Search,
  Globe,
  Star,
  CheckCircle,
  Truck,
  Crosshair,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Globe,
  Star,
  CheckCircle,
  Truck,
  Crosshair,
}

export default function ServicesPage() {
  const { language } = useLanguage()

  return (
    <>
      <section className="bg-[#F8F4EC] px-4 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
            {language === "en" ? "Our Services" : "خدماتنا"}
          </h1>
          <p className="mt-4 text-lg text-[#374151]">
            {language === "en"
              ? "Comprehensive import and marketing services for business growth."
              : "خدمات استيراد وتسويق شاملة للنمو التجاري."}
          </p>
        </Container>
      </section>

      <section className="bg-white px-4 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Search
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all hover:shadow-lg hover:border-[#B8893B]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F4EC]">
                    <IconComponent className="h-6 w-6 text-[#B8893B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B1F35]">
                    {language === "en" ? service.name : service.arabicName}
                  </h3>
                  <p className="mt-3 text-[#374151]">
                    {language === "en"
                      ? service.description
                      : service.arabicDescription}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need Custom Import Services?"
        description="Contact our team to discuss your specific requirements."
        primaryCta={{
          label: "Contact Us",
          href: "/contact",
        }}
      />
    </>
  )
}
