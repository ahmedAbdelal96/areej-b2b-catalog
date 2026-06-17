"use client"

import { Product } from "@/types/product"
import { useLanguage } from "@/contexts/language-context"

interface ProductSpecsTableProps {
  product: Product
}

export function ProductSpecsTable({ product }: ProductSpecsTableProps) {
  const { language } = useLanguage()

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB]">
      <table className="w-full">
        <thead className="bg-[#F8F4EC]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-[#0B1F35]"
            >
              {language === "en" ? "Specification" : "المواصفة"}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-[#0B1F35]"
            >
              {language === "en" ? "Value" : "القيمة"}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5E7EB] bg-white">
          {product.specifications.map((spec, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm text-[#6B7280]">
                {language === "en" ? spec.label : spec.arabicLabel}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-[#0B1F35]">
                {language === "en" ? spec.value : spec.arabicValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
