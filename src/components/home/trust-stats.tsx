"use client"

import { useLanguage } from "@/contexts/language-context"
import { trustStats } from "@/data/navigation"

export function TrustStats() {
  const { language } = useLanguage()
  const stats = language === "en" ? trustStats.en : trustStats.ar

  return (
    <section className="bg-[#F8F4EC] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[#0B1F35] sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[#374151]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
