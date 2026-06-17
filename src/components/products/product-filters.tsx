"use client"

import { useLanguage } from "@/contexts/language-context"
import { categories } from "@/data/categories"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  selectedCategory?: string
  onCategoryChange?: (category: string | null) => void
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const { language } = useLanguage()

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange?.(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            !selectedCategory
              ? "bg-[#0B1F35] text-white"
              : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
          )}
        >
          {language === "en" ? "All Categories" : "جميع الفئات"}
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange?.(category.slug)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === category.slug
                ? "bg-[#0B1F35] text-white"
                : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
            )}
          >
            {language === "en" ? category.name : category.arabicName}
          </button>
        ))}
      </div>
    </div>
  )
}
