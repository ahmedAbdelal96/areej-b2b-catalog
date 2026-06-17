"use client"

import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#E5E7EB] p-1">
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded-full px-3 py-1 text-sm font-medium transition-colors",
          language === "en"
            ? "bg-[#0B1F35] text-white"
            : "text-[#374151] hover:bg-[#F3F4F6]"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ar")}
        className={cn(
          "rounded-full px-3 py-1 text-sm font-medium transition-colors",
          language === "ar"
            ? "bg-[#0B1F35] text-white"
            : "text-[#374151] hover:bg-[#F3F4F6]"
        )}
        aria-label="Switch to Arabic"
        dir="rtl"
      >
        AR
      </button>
    </div>
  )
}
