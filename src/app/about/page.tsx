"use client"

import { Container } from "@/components/shared/container"
import { CTASection } from "@/components/shared/cta-section"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Calendar, Users } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <>
      <section className="bg-[#F8F4EC] px-4 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
            {language === "en" ? "About Areej Al Alam" : "عن أريج العالم"}
          </h1>
          <p className="mt-4 text-lg text-[#374151]">
            {language === "en"
              ? "A global import and marketing partner since 2006, serving markets across Saudi Arabia, Egypt, and Malaysia."
              : "شريك عالمي في الاستيراد والتسويق منذ 2006، نخدم أسواق السعودية ومصر وماليزيا."}
          </p>
        </Container>
      </section>

      <section className="bg-white px-4 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F35]">
                {language === "en" ? "Our Story" : "قصتنا"}
              </h2>
              <p className="mt-4 text-[#374151]">
                {language === "en"
                  ? "Areej Al Alam was established in 2006 as part of the Areej Al Alam Group, with a vision to connect quality products from Egypt and Southeast Asia with growing markets in Saudi Arabia and Malaysia."
                  : "تأسست أريج العالم في عام 2006 كجزء من مجموعة أريج العالمية، برؤية لربط المنتجات عالية الجودة من مصر وجنوب شرق آسيا مع أسواق متنامية في السعودية وماليزيا."}
              </p>
              <p className="mt-4 text-[#374151]">
                {language === "en"
                  ? "Over the years, we have built successful brands including Depalma for consumer goods and perfumes, and Depalma for furniture and decor, earning the trust of business partners across the Middle East."
                  : "على مر السنين، بنينا علامات تجارية ناجحة بما في ذلك ديبالما للمنتجات الاستهلاكية والعطور، وديبالما للأثاث والديكور، مماكسسبنا ثقة الشركاء التجاريين في جميع أنحاء الشرق الأوسط."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F8F4EC] p-6">
                <Calendar className="h-8 w-8 text-[#B8893B]" />
                <div className="mt-4 text-3xl font-bold text-[#0B1F35]">2006</div>
                <p className="text-sm text-[#6B7280]">
                  {language === "en" ? "Established" : "سنة التأسيس"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8F4EC] p-6">
                <MapPin className="h-8 w-8 text-[#B8893B]" />
                <div className="mt-4 text-3xl font-bold text-[#0B1F35]">3</div>
                <p className="text-sm text-[#6B7280]">
                  {language === "en" ? "Markets" : "أسواق"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8F4EC] p-6">
                <Users className="h-8 w-8 text-[#B8893B]" />
                <div className="mt-4 text-3xl font-bold text-[#0B1F35]">3+</div>
                <p className="text-sm text-[#6B7280]">
                  {language === "en" ? "Group Brands" : "علامات المجموعة"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8F4EC] p-6">
                <span className="text-3xl">📦</span>
                <div className="mt-4 text-3xl font-bold text-[#0B1F35]">5+</div>
                <p className="text-sm text-[#6B7280]">
                  {language === "en" ? "Product Categories" : "فئات المنتجات"}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Partner With Us"
        description="Ready to explore business opportunities with Areej Al Alam?"
        primaryCta={{
          label: "Contact Us",
          href: "/contact",
        }}
      />
    </>
  )
}
