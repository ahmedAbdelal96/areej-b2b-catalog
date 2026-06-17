"use client"

import Link from "next/link"
import { Product } from "@/types/product"
import { useLanguage } from "@/contexts/language-context"
import { useQuoteBasket } from "@/contexts/quote-basket-context"
import { ShoppingBasket, ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
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
    <div className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all hover:shadow-lg hover:border-[#B8893B]">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-[#F8F4EC] to-[#EFE6D8] p-6">
        <div className="flex h-full items-center justify-center">
          <span className="text-4xl text-[#B8893B]/30">
            {/* Placeholder for product image */}
            📦
          </span>
        </div>

        {/* Brand badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium text-white ${getBrandBadgeColor(
              product.brand
            )}`}
          >
            {product.brand}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#374151]">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs text-[#6B7280]">
            {product.categorySlug.replace("-", " ")}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#0B1F35]">
          {language === "en" ? product.name : product.arabicName}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-[#374151]">
          {language === "en"
            ? product.shortDescription
            : product.arabicShortDescription}
        </p>

        {/* Meta info */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#6B7280]">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-2 py-1">
            {product.origin}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-2 py-1">
            MOQ: {product.moq}
          </span>
        </div>

        {/* Markets */}
        <div className="mt-3 flex flex-wrap gap-1">
          {product.targetMarkets.slice(0, 2).map((market) => (
            <span
              key={market}
              className="inline-block rounded-full bg-[#F8F4EC] px-2 py-0.5 text-xs text-[#B8893B]"
            >
              {market}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#0B1F35] transition-colors hover:border-[#B8893B] hover:text-[#B8893B]"
          >
            {language === "en" ? "View Details" : "عرض التفاصيل"}
            <ArrowRight className="h-4 w-4" />
          </Link>
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
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1F35] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#102B46]"
            title={language === "en" ? "Add to quote" : "أضف لسلة الطلب"}
          >
            <ShoppingBasket className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
