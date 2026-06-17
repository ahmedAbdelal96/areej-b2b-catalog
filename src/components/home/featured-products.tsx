"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { products } from "@/data/products"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProductCard } from "@/components/products/product-card"

export function FeaturedProducts() {
  const { language } = useLanguage()
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="bg-[#F8F4EC] px-4 py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={language === "en" ? "Featured Products" : "المنتجات المميزة"}
          subtitle={
            language === "en"
              ? "Discover our most popular products across all categories."
              : "اكتشف منتجاتنا الأكثر شعبية عبر جميع الفئات."
          }
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B1F35] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#102B46]"
          >
            {language === "en" ? "View All Products" : "عرض جميع المنتجات"}
          </Link>
        </div>
      </Container>
    </section>
  )
}
