export type Product = {
  id: string
  slug: string
  name: string
  arabicName: string
  brand: "Depalma" | "Areej Al Alam" | "Private Label"
  category: string
  categorySlug: string
  origin: "Egypt" | "Saudi Arabia" | "Malaysia" | "Sourcing on request"
  targetMarkets: string[]
  packaging: string
  moq: string
  shortDescription: string
  arabicShortDescription: string
  specifications: {
    label: string
    value: string
    arabicLabel: string
    arabicValue: string
  }[]
  tags: string[]
  certifications?: string[]
  featured: boolean
  imageHint: string
}
