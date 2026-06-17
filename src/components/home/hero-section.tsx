"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { heroContent } from "@/data/navigation"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { language } = useLanguage()
  const content = language === "en" ? heroContent.en : heroContent.ar

  return (
    <section className="relative bg-[#071525] px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg text-[#D8B46A] sm:text-xl">
            {content.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8893B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#C99A49]"
            >
              {content.cta1}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#071525]"
            >
              {content.cta2}
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-8 py-3 font-semibold text-[#D8B46A] transition-colors hover:text-white"
            >
              {content.cta3}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
