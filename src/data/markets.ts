import { Market } from "@/types/market"

export const markets: Market[] = [
  {
    id: "mkt-001",
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    arabicName: "المملكة العربية السعودية",
    role: "Primary Market",
    arabicRole: "السوق الرئيسي",
    description:
      "Our primary market for consumer products, perfumes, cosmetics, furniture, and decor. We have established strong distribution networks across the Kingdom.",
    arabicDescription:
      "سوقنا الرئيسي للمنتجات الاستهلاكية والعطور ومستحضرات التجميل والأثاث والديكور. لدينا شبكات توزيع قوية في جميع أنحاء المملكة.",
    focus: [
      "Consumer goods distribution",
      "Perfumes and cosmetics retail",
      "Furniture and decor projects",
      "Brand development",
    ],
  },
  {
    id: "mkt-002",
    slug: "egypt",
    name: "Egypt",
    arabicName: "مصر",
    role: "Source Market",
    arabicRole: "سوق المصدر",
    description:
      "Our sourcing origin for quality consumer products, fragrances, and furniture. Egypt provides strong manufacturing capabilities and competitive pricing.",
    arabicDescription:
      "مصدر منتجاتنا من المنتجات الاستهلاكية عالية الجودة والعطور والأثاث. توفر مصر قدرات تصنيع قوية وأسعار تنافسية.",
    focus: [
      "Product sourcing",
      "Quality manufacturing",
      "Import operations",
      "Supply chain management",
    ],
  },
  {
    id: "mkt-003",
    slug: "malaysia",
    name: "Malaysia",
    arabicName: "ماليزيا",
    role: "Strategic Market",
    arabicRole: "سوق استراتيجي",
    description:
      "A growing market for our consumer products and personal care categories. We serve retail and wholesale channels across Malaysia.",
    arabicDescription:
      "سوق متنامٍ لمنتجاتنا الاستهلاكية وفئات العناية الشخصية. نخدم قنوات التجزئة والجملة في جميع أنحاء ماليزيا.",
    focus: [
      "Consumer goods retail",
      "Personal care distribution",
      "Hospitality furniture",
      "Market expansion",
    ],
  },
]
