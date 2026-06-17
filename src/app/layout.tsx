import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { QuoteBasketProvider } from "@/contexts/quote-basket-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Areej Al Alam - Global B2B Product Catalog",
  description:
    "A global import and marketing partner connecting selected consumer products with regional B2B markets through a clear bilingual catalogue and fast quote enquiry flow.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-[#111827] antialiased">
        <LanguageProvider>
          <QuoteBasketProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </QuoteBasketProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
