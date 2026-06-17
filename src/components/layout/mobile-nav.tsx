"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { LanguageSwitcher } from "@/components/shared/language-switcher"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems: { label: string; href: string }[]
}

export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
            <span className="text-lg font-bold text-[#0B1F35]">
              Areej Al Alam
            </span>
            <button
              onClick={onClose}
              className="p-2 text-[#374151] hover:text-[#0B1F35]"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Language Switcher */}
          <div className="p-4 border-b border-[#E5E7EB]">
            <LanguageSwitcher />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-[#374151] transition-colors hover:bg-[#F8F4EC] hover:text-[#0B1F35]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t border-[#E5E7EB]">
            <Link
              href="/request-quote"
              onClick={onClose}
              className="block w-full rounded-full bg-[#0B1F35] py-3 text-center font-medium text-white transition-colors hover:bg-[#102B46]"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
