import { useLanguage } from "@/contexts/language-context"
"use client"

import Link from "next/link"

interface QuoteSuccessStateProps {
  message?: string
}

export function QuoteSuccessState({
  message,
}: QuoteSuccessStateProps) {
  const { language } = useLanguage()

  return (
    <div className="rounded-2xl bg-[#F8F4EC] p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0F766E]">
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#0B1F35]">
        {language === "en"
          ? "Quote Request Submitted Successfully"
          : "تم إرسال طلب العرض بنجاح"}
      </h3>
      <p className="mt-2 text-[#374151]">
        {message ||
          (language === "en"
            ? "Our team will review your request and contact you within 24-48 hours."
            : "سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال 24-48 ساعة.")}
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F35] px-6 py-2 font-medium text-white transition-colors hover:bg-[#102B46]"
        >
          {language === "en" ? "Continue Browsing" : "متابعة التصفح"}
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] px-6 py-2 font-medium text-[#0B1F35] transition-colors hover:border-[#B8893B]"
        >
          {language === "en" ? "Back to Home" : "العودة للرئيسية"}
        </Link>
      </div>
    </div>
  )
}
