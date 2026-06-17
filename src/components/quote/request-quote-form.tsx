"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { markets } from "@/data/markets"
import { Send } from "lucide-react"

export function RequestQuoteForm() {
  const { language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-[#F8F4EC] p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0F766E]">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-[#0B1F35]">
          {language === "en"
            ? "Quote Request Received"
            : "تم استلام طلب العرض"}
        </h3>
        <p className="mt-2 text-[#374151]">
          {language === "en"
            ? "Our team will contact you within 24-48 hours."
            : "سيتواصل فريقنا معك خلال 24-48 ساعة."}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B1F35] px-6 py-2 font-medium text-white transition-colors hover:bg-[#102B46]"
        >
          {language === "en" ? "Submit Another Request" : "إرسال طلب آخر"}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-[#374151]"
          >
            {language === "en" ? "Full Name *" : "الاسم الكامل *"}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
            placeholder={
              language === "en" ? "Enter your full name" : "أدخل اسمك الكامل"
            }
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-[#374151]"
          >
            {language === "en" ? "Company Name *" : "اسم الشركة *"}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
            placeholder={
              language === "en" ? "Enter company name" : "أدخل اسم الشركة"
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-[#374151]"
          >
            {language === "en" ? "Country *" : "الدولة *"}
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
            placeholder={
              language === "en" ? "Enter your country" : "أدخل دولتك"
            }
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-[#374151]"
          >
            {language === "en" ? "City *" : "المدينة *"}
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
            placeholder={
              language === "en" ? "Enter your city" : "أدخل مدينتك"
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#374151]"
          >
            {language === "en" ? "Phone / WhatsApp *" : "الهاتف / واتساب *"}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
            placeholder={
              language === "en" ? "Enter phone number" : "أدخل رقم الهاتف"
            }
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#374151]"
          >
            {language === "en" ? "Email *" : "البريد الإلكتروني *"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
            placeholder={
              language === "en" ? "Enter email address" : "أدخل البريد الإلكتروني"
            }
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="destinationMarket"
          className="block text-sm font-medium text-[#374151]"
        >
          {language === "en" ? "Destination Market *" : "السوق المستهدف *"}
        </label>
        <select
          id="destinationMarket"
          name="destinationMarket"
          required
          className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
        >
          <option value="">
            {language === "en" ? "Select a market" : "اختر سوقاً"}
          </option>
          {markets.map((market) => (
            <option key={market.id} value={market.slug}>
              {language === "en" ? market.name : market.arabicName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="products"
          className="block text-sm font-medium text-[#374151]"
        >
          {language === "en" ? "Products of Interest" : "المنتجات المطلوبة"}
        </label>
        <textarea
          id="products"
          name="products"
          rows={3}
          className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
          placeholder={
            language === "en"
              ? "List the products you are interested in..."
              : "اذكر المنتجات التي تهمك..."
          }
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#374151]"
        >
          {language === "en" ? "Message" : "رسالة"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#0B1F35] placeholder-[#9CA3AF] transition-colors focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
          placeholder={
            language === "en"
              ? "Any additional details about your requirements..."
              : "أي تفاصيل إضافية عن متطلباتك..."
          }
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F35] py-3 font-semibold text-white transition-colors hover:bg-[#102B46]"
      >
        <Send className="h-5 w-5" />
        {language === "en" ? "Submit Quote Request" : "إرسال طلب العرض"}
      </button>
    </form>
  )
}
