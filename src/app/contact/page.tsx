"use client"

import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { useLanguage } from "@/contexts/language-context"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <>
      <section className="bg-[#F8F4EC] px-4 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
            {language === "en" ? "Contact Us" : "تواصل معنا"}
          </h1>
          <p className="mt-4 text-lg text-[#374151]">
            {language === "en"
              ? "Get in touch with our team for product inquiries and business partnerships."
              : "تواصل مع فريقنا للاستفسار عن المنتجات وشراكات الأعمال."}
          </p>
        </Container>
      </section>

      <section className="bg-white px-4 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <SectionHeading
                title={language === "en" ? "Contact Information" : "معلومات التواصل"}
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4EC]">
                    <MapPin className="h-5 w-5 text-[#B8893B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F35]">
                      {language === "en" ? "Address" : "العنوان"}
                    </h3>
                    <p className="mt-1 text-[#374151]">
                      {language === "en"
                        ? "Riyadh - Al Nozha District - Hail Street"
                        : "الرياض - حي الناقة - شارع حائل"}
                    </p>
                    <p className="text-[#374151]">
                      {language === "en"
                        ? "Saudi Arabia"
                        : "المملكة العربية السعودية"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4EC]">
                    <Phone className="h-5 w-5 text-[#B8893B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F35]">
                      {language === "en" ? "Phone" : "الهاتف"}
                    </h3>
                    <p className="mt-1 text-[#374151]">920002533</p>
                    <p className="text-sm text-[#6B7280]">
                      {language === "en" ? "Direct:" : "مباشر:"} 0112034112 ext.
                      222
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4EC]">
                    <Mail className="h-5 w-5 text-[#B8893B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F35]">Email</h3>
                    <p className="mt-1 text-[#374151]">info@areejco.net</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F4EC]">
                    <Clock className="h-5 w-5 text-[#B8893B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F35]">
                      {language === "en" ? "Business Hours" : "ساعات العمل"}
                    </h3>
                    <p className="mt-1 text-[#374151]">
                      {language === "en"
                        ? "Sunday - Thursday: 9:00 AM - 5:00 PM"
                        : "الأحد - الخميس: 9:00 ص - 5:00 م"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="rounded-2xl bg-[#F8F4EC] p-8">
              <h3 className="text-xl font-semibold text-[#0B1F35]">
                {language === "en" ? "Send us a Message" : "أرسل لنا رسالة"}
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151]">
                    {language === "en" ? "Name" : "الاسم"}
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#0B1F35] focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
                    placeholder={
                      language === "en" ? "Your name" : "اسمك"
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151]">
                    {language === "en" ? "Email" : "البريد الإلكتروني"}
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#0B1F35] focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
                    placeholder={
                      language === "en" ? "your@email.com" : "بريدك@الإلكتروني.com"
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151]">
                    {language === "en" ? "Message" : "الرسالة"}
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#0B1F35] focus:border-[#B8893B] focus:outline-none focus:ring-2 focus:ring-[#B8893B]/20"
                    placeholder={
                      language === "en"
                        ? "How can we help you?"
                        : "كيف يمكننا مساعدتك؟"
                    }
                  />
                </div>
                <button className="w-full rounded-full bg-[#0B1F35] py-3 font-semibold text-white transition-colors hover:bg-[#102B46]">
                  {language === "en" ? "Send Message" : "إرسال الرسالة"}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
