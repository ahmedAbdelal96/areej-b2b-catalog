"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useQuoteBasket } from "@/contexts/quote-basket-context"
import { LanguageSwitcher } from "@/components/shared/language-switcher"
import { navigation } from "@/data/navigation"
import { Menu, ShoppingBasket } from "lucide-react"
import { useState } from "react"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const { language } = useLanguage()
  const { itemCount } = useQuoteBasket()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = language === "en" ? navigation.en : navigation.ar

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1F35]">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-[#0B1F35]">
                  Areej Al Alam
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#374151] transition-colors hover:text-[#0B1F35]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />

              {/* Quote Basket */}
              <Link
                href="/request-quote"
                className="relative flex items-center gap-2 rounded-full bg-[#F8F4EC] px-4 py-2 text-sm font-medium text-[#0B1F35] transition-colors hover:bg-[#EFE6D8]"
              >
                <ShoppingBasket className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {language === "en" ? "Quote Basket" : "سلة الطلب"}
                </span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#B8893B] text-xs text-white">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Request Quote CTA */}
              <Link
                href="/request-quote"
                className="hidden rounded-full bg-[#0B1F35] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#102B46] md:inline-block"
              >
                {language === "en" ? "Request Quote" : "اطلب عرض سعر"}
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-[#374151]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  )
}
