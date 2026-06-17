"use client"

import Link from "next/link"
import { Product } from "@/types/product"
import { useLanguage } from "@/contexts/language-context"
import { useQuoteBasket } from "@/contexts/quote-basket-context"
import { Container } from "@/components/shared/container"
import { ShoppingBasket } from "lucide-react"

interface ProductDetailHeroProps {
  product: Product
}

export function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const { language } = useLanguage()
  const { addItem } = useQuoteBasket()

  const getBrandBadgeColor = (brand: string) => {
    switch (brand) {
      case "Depalma":
        return "bg-[#E21B1B]"
      case "Private Label":
        return "bg-[#B8893B]"
      default:
        return "bg-[#0B1F35]"
    }
  }

  return (
    <section className="bg-white px-4 py-12">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#F8F4EC] to-[#EFE6D8] p-8">
            <div className="flex h-full items-center justify-center">
              <span className="text-8xl text-[#B8893B]/30">📦</span>
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-medium text-white ${getBrandBadgeColor(
                  product.brand
                )}`}
              >
                {product.brand}
              </span>
              <span className="inline-block rounded-full bg-[#F3F4F6] px-3 py-1 text-sm font-medium text-[#374151]">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
              {language === "en" ? product.name : product.arabicName}
            </h1>

            {/* Short Description */}
            <p className="mt-4 text-lg text-[#374151]">
              {language === "en"
                ? product.shortDescription
                : product.arabicShortDescription}
            </p>

            {/* Meta Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#F8F4EC] p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Origin
                </span>
                <p className="mt-1 text-lg font-semibold text-[#0B1F35]">
                  {product.origin}
                </p>
              </div>
              <div className="rounded-xl bg-[#F8F4EC] p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  MOQ
                </span>
                <p className="mt-1 text-lg font-semibold text-[#0B1F35]">
                  {product.moq}
                </p>
              </div>
              <div className="rounded-xl bg-[#F8F4EC] p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Packaging
                </span>
                <p className="mt-1 text-lg font-semibold text-[#0B1F35]">
                  {product.packaging}
                </p>
              </div>
              <div className="rounded-xl bg-[#F8F4EC] p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  Markets
                </span>
                <p className="mt-1 text-lg font-semibold text-[#0B1F35]">
                  {product.targetMarkets.join(", ")}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-[#F3F4F6] px-3 py-1 text-sm text-[#374151]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    arabicName: product.arabicName,
                    brand: product.brand,
                    category: product.category,
                    moq: product.moq,
                  })
                }
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F35] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#102B46]"
              >
                <ShoppingBasket className="h-5 w-5" />
                {language === "en" ? "Add to Quote" : "أضف إلى الطلب"}
              </button>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] px-8 py-3 font-semibold text-[#0B1F35] transition-colors hover:border-[#B8893B]"
              >
                {language === "en" ? "Request Quote" : "اطلب عرض سعر"}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
