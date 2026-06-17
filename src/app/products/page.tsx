"use client"

import { products } from "@/data/products"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { useLanguage } from "@/contexts/language-context"

export default function ProductsPage() {
  const { language } = useLanguage()

  return (
    <div className="bg-white px-4 py-12">
      <Container>
        <SectionHeading
          title={language === "en" ? "Our Products" : "منتجاتنا"}
          subtitle={
            language === "en"
              ? "Browse our complete catalog of consumer products, fragrances, cosmetics, furniture, and decor."
              : "تصفح كتالوجنا الكامل من المنتجات الاستهلاكية والعطور ومستحضرات التجميل والأثاث والديكور."
          }
        />

        <ProductFilters />

        <div className="mb-6 text-sm text-[#6B7280]">
          {language === "en" ? "Showing" : "عرض"} {products.length}{" "}
          {language === "en" ? "products" : "منتج"}
        </div>

        <ProductGrid products={products} />
      </Container>
    </div>
  )
}
