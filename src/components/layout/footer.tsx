"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { navigation } from "@/data/navigation"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const { language } = useLanguage()
  const navItems = language === "en" ? navigation.en : navigation.ar

  return (
    <footer className="bg-[#071525] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold">Areej Al Alam</span>
            </div>
            <p className="text-sm text-[#D8B46A]">
              {language === "en"
                ? "Global import and marketing partner since 2006, serving Saudi Arabia, Egypt, and Malaysia."
                : "شريك عالمي في الاستيراد والتسويق منذ 2006، نخدم السعودية ومصر وماليزيا."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#D8B46A]">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#E5E7EB] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#D8B46A]">
              {language === "en" ? "Contact" : "تواصل معنا"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#E5E7EB]">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#B8893B]" />
                <span>
                  {language === "en"
                    ? "Riyadh - Al Nozha District - Hail Street"
                    : "الرياض - حي الناقة - شارع حائل"}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                <Phone className="h-4 w-4 shrink-0 text-[#B8893B]" />
                <span>920002533</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                <Mail className="h-4 w-4 shrink-0 text-[#B8893B]" />
                <span>info@areejco.net</span>
              </li>
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#D8B46A]">
              {language === "en" ? "Our Markets" : "أسواقنا"}
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-[#E5E7EB]">
                  {language === "en" ? "Saudi Arabia" : "المملكة العربية السعودية"}
                </span>
              </li>
              <li>
                <span className="text-sm text-[#E5E7EB]">
                  {language === "en" ? "Egypt" : "مصر"}
                </span>
              </li>
              <li>
                <span className="text-sm text-[#E5E7EB]">
                  {language === "en" ? "Malaysia" : "ماليزيا"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#102B46] pt-8 text-center">
          <p className="text-sm text-[#6B7280]">
            &copy; {new Date().getFullYear()} Areej Al Alam.{" "}
            {language === "en"
              ? "All rights reserved."
              : "جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  )
}
