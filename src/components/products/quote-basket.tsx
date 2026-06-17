"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { X, Plus, Minus } from "lucide-react"

interface QuoteItem {
  id: string
  name: string
  arabicName: string
  moq: string
  quantity: number
}

export function QuoteBasket() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [items] = useState<QuoteItem[]>([])

  const itemCount = items.length

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center gap-2 rounded-full bg-[#F8F4EC] px-4 py-2 text-sm font-medium text-[#0B1F35] transition-colors hover:bg-[#EFE6D8]"
        aria-label="Open quote basket"
      >
        <span>Quote Basket</span>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#B8893B] text-xs text-white">
            {itemCount}
          </span>
        )}
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
                <h2 className="text-lg font-semibold text-[#0B1F35]">
                  {language === "en" ? "Quote Basket" : "سلة الطلب"}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#6B7280] hover:text-[#0B1F35]"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-[#6B7280]">
                      {language === "en"
                        ? "Your quote basket is empty."
                        : "سلة الطلب فارغة."}
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] p-4"
                      >
                        <div className="h-12 w-12 rounded-lg bg-[#F8F4EC]" />
                        <div className="flex-1">
                          <p className="font-medium text-[#0B1F35]">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#6B7280]">
                            MOQ: {item.moq}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="p-1 text-[#6B7280] hover:text-[#0B1F35]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="p-1 text-[#6B7280] hover:text-[#0B1F35]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-[#E5E7EB] p-6">
                  <button className="w-full rounded-full bg-[#0B1F35] py-3 font-semibold text-white transition-colors hover:bg-[#102B46]">
                    {language === "en" ? "Request Quote" : "اطلب عرض السعر"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
