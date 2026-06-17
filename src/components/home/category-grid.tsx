"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { categories } from "@/data/categories"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { ArrowRight } from "lucide-react"

export function CategoryGrid() {
  const { language } = useLanguage()

  const featuredCategories = categories.filter((cat) => cat.featured)

  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={language === "en" ? "Product Categories" : "فئات المنتجات"}
          subtitle={
            language === "en"
              ? "Explore our product families across consumer goods, fragrances, and furniture."
              : "استكشف عائلات منتجاتنا عبر المنتجات الاستهلاكية والعطور والأثاث."
          }
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all hover:shadow-lg hover:border-[#B8893B]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F4EC]">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0B1F35]">
                {language === "en" ? category.name : category.arabicName}
              </h3>
              <p className="mt-2 text-sm text-[#6B7280]">
                {language === "en"
                  ? category.description
                  : category.arabicDescription}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#B8893B]">
                <span>{category.count}+ Products</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F35] transition-colors hover:text-[#B8893B]"
          >
            {language === "en" ? "View All Products" : "عرض جميع المنتجات"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
