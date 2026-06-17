"use client"

import { RequestQuoteForm } from "@/components/quote/request-quote-form"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { useLanguage } from "@/contexts/language-context"

export default function RequestQuotePage() {
  const { language } = useLanguage()

  return (
    <div className="bg-white px-4 py-12">
      <Container>
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title={language === "en" ? "Request a Quote" : "اطلب عرض سعر"}
            subtitle={
              language === "en"
                ? "Fill out the form below and our team will get back to you within 24-48 hours."
                : "املأ النموذج أدناه وسيتواصل فريقنا معك خلال 24-48 ساعة."
            }
            centered
          />

          <div className="mt-8">
            <RequestQuoteForm />
          </div>
        </div>
      </Container>
    </div>
  )
}
