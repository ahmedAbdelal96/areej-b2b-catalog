import { Category } from "@/types/category"

export const categories: Category[] = [
  {
    id: "cat-001",
    slug: "perfumes-fragrance",
    name: "Perfumes & Fragrance",
    arabicName: "العطور ومنتجات الروائح",
    description:
      "Retail-ready fragrance and scent products suitable for GCC consumer markets.",
    arabicDescription: "منتجات عطور وروائح جاهزة للتوزيع في أسواق الخليج.",
    count: 5,
    featured: true,
  },
  {
    id: "cat-002",
    slug: "cosmetics-personal-care",
    name: "Cosmetics & Personal Care",
    arabicName: "مستحضرات التجميل والعناية الشخصية",
    description:
      "Beauty, hair care, skin care, and body care product families for retail and distribution.",
    arabicDescription:
      "منتجات تجميل وعناية شخصية مناسبة للبيع والتوزيع التجاري.",
    count: 5,
    featured: true,
  },
  {
    id: "cat-003",
    slug: "consumer-goods",
    name: "Consumer Goods",
    arabicName: "المنتجات الاستهلاكية",
    description:
      "Everyday consumer goods prepared for wholesale, retail, and market expansion.",
    arabicDescription:
      "منتجات استهلاكية يومية جاهزة للتوريد والتوسع في الأسواق.",
    count: 4,
    featured: true,
  },
  {
    id: "cat-004",
    slug: "furniture-decor",
    name: "Furniture & Decor",
    arabicName: "الأثاث والديكور",
    description:
      "Furniture and decor products for homes, offices, hospitality, and commercial spaces.",
    arabicDescription:
      "منتجات أثاث وديكور للمنازل والمكاتب والضيافة والمساحات التجارية.",
    count: 5,
    featured: true,
  },
  {
    id: "cat-005",
    slug: "packaging-retail-packs",
    name: "Packaging & Retail Packs",
    arabicName: "التعبئة والتغليف",
    description:
      "Retail packaging formats, display packs, and B2B-ready supply presentation.",
    arabicDescription:
      "حلول تغليف وعرض مناسبة للبيع التجاري والتوزيع.",
    count: 3,
    featured: false,
  },
]
