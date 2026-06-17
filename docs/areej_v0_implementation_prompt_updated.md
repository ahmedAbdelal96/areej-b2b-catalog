# v0 Implementation Prompt — Areej Global B2B Catalog Website Prototype — Updated

Use this prompt in v0 after the Stitch design direction is approved.

---

## Prompt

Build a high-quality responsive **Next.js + TypeScript + Tailwind + shadcn/ui** prototype for **Areej Global B2B Catalog Website**.

This is a bilingual Arabic/English B2B catalog website for **Areej Al Alam for Import & Marketing**, a company operating across Saudi Arabia, Egypt, and Malaysia in importing and marketing consumer products.

The prototype will be deployed on Vercel and should look production-ready even though it uses mock data.

---

## Important Business Context

The current public website is a simple corporate website. It states that Areej is part of Areej Al Alam Group across Saudi Arabia, Malaysia, and Egypt, has operated since 2006, and works in importing and marketing consumer products.

A visible current website section also mentions successful brands in the Saudi market:

- **Areej Al Alam Tourism**.
- **Depalma** in consumer goods: perfumes, cosmetics, and consumer products.
- **Depalma** for furniture and decor.

Use this context to make the mock data realistic and aligned with Areej.

Do not use random unrelated product categories like steel, wheat, industrial minerals, or heavy equipment unless the client later confirms them.

---

## Core Direction

This is not a normal e-commerce checkout site.
It is a **B2B catalog + quote basket + request quote** platform.

Main conversion goal:

```text
Browse Products → Add to Quote Basket → View Product Details → Request Quote / Contact Sales
```

Do not build real authentication, cart checkout, payment, or backend in this prototype.
Use mock data only.

---

## Tech Requirements

Use:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui components.
- Lucide React icons.
- Mock data in local TypeScript files.
- Responsive design.
- Clean component structure.
- Accessible UI.

Do not use external paid APIs.
Do not require a backend.
Do not use placeholder lorem ipsum.
Write realistic business copy.

---

## Design System

Use this palette:

```css
Deep Navy: #071525
Navy: #0B1F35
Navy Light: #102B46
Areej Blue: #0E3A66
Warm Gold: #B8893B
Gold Light: #C99A49
Cream: #F8F4EC
Sand: #EFE6D8
White: #FFFFFF
Slate Dark: #111827
Slate: #374151
Muted: #6B7280
Border: #E5E7EB
Depalma Red: #E21B1B
Depalma Blue: #1E88E5
```

Visual style:

- Premium Saudi/GCC B2B design.
- White product cards.
- Deep navy headings/footer.
- Warm gold accents.
- Cream/sand background sections.
- Small red/blue accents only inside Depalma brand cards/badges.
- Strong spacing.
- Rounded cards.
- Subtle shadows.
- Product-first layout.

---

## Required Pages / Routes

Implement these routes:

```text
/
/products
/products/[slug]
/categories/[slug]
/request-quote
/about
/brands
/markets
/services
/contact
```

The prototype can default to English, but it must include real Arabic labels/content in the toggle.

If possible, include a simple language toggle state that:

- Switches visible labels between English and Arabic.
- Changes document direction between `ltr` and `rtl`.
- Keeps layout polished in both directions.

---

## Required Components

Create reusable components:

```text
Header
MobileNav
Footer
HeroSection
CatalogSearchBar
TrustStats
CategoryGrid
FeaturedProducts
ProductCard
ProductFilters
CategoryLandingHero
ProductDetailHero
SpecsTable
QuoteBasketDrawer
RequestQuoteForm
BrandsSection
MarketsSection
ServicesSection
WhyAreejSection
CTASection
Breadcrumbs
LanguageSwitcher
SuccessToast
```

---

## Required Mock Data

Create mock data for categories, brands, products, markets, and services.

### Categories

```ts
export const categories = [
  {
    name: 'Perfumes & Fragrance',
    arabicName: 'العطور ومنتجات الروائح',
    slug: 'perfumes-fragrance',
    count: 5,
    description: 'Retail-ready fragrance and scent products suitable for GCC consumer markets.',
    arabicDescription: 'منتجات عطور وروائح جاهزة للتوزيع في أسواق الخليج.'
  },
  {
    name: 'Cosmetics & Personal Care',
    arabicName: 'مستحضرات التجميل والعناية الشخصية',
    slug: 'cosmetics-personal-care',
    count: 5,
    description: 'Beauty, hair care, skin care, and body care product families for retail and distribution.',
    arabicDescription: 'منتجات تجميل وعناية شخصية مناسبة للبيع والتوزيع التجاري.'
  },
  {
    name: 'Consumer Goods',
    arabicName: 'المنتجات الاستهلاكية',
    slug: 'consumer-goods',
    count: 4,
    description: 'Everyday consumer goods prepared for wholesale, retail, and market expansion.',
    arabicDescription: 'منتجات استهلاكية يومية جاهزة للتوريد والتوسع في الأسواق.'
  },
  {
    name: 'Furniture & Decor',
    arabicName: 'الأثاث والديكور',
    slug: 'furniture-decor',
    count: 5,
    description: 'Furniture and decor products for homes, offices, hospitality, and commercial spaces.',
    arabicDescription: 'منتجات أثاث وديكور للمنازل والمكاتب والضيافة والمساحات التجارية.'
  },
  {
    name: 'Packaging & Retail Packs',
    arabicName: 'التعبئة والتغليف',
    slug: 'packaging-retail-packs',
    count: 3,
    description: 'Retail packaging formats, display packs, and B2B-ready supply presentation.',
    arabicDescription: 'حلول تغليف وعرض مناسبة للبيع التجاري والتوزيع.'
  }
]
```

### Brands / Group Achievements

```ts
export const brands = [
  {
    name: 'Areej Al Alam Tourism',
    arabicName: 'أريج العالم للسياحة',
    role: 'Group brand / tourism sector',
    arabicRole: 'علامة تابعة للمجموعة في قطاع السياحة',
    accent: 'navy',
    description: 'A group brand that reflects Areej’s ability to build successful names in the Saudi market.',
    arabicDescription: 'علامة تعكس قدرة أريج على بناء أسماء ناجحة في السوق السعودي.'
  },
  {
    name: 'Depalma Consumer Goods',
    arabicName: 'ديبالما للمواد الاستهلاكية',
    role: 'Perfumes, cosmetics, and consumer products',
    arabicRole: 'عطور ومستحضرات تجميل ومنتجات استهلاكية',
    accent: 'red',
    description: 'A consumer goods direction covering fragrance, beauty, and retail-ready products.',
    arabicDescription: 'اتجاه للمنتجات الاستهلاكية يشمل العطور والتجميل والمنتجات الجاهزة للبيع.'
  },
  {
    name: 'Depalma Furniture & Decor',
    arabicName: 'ديبالما للأثاث والديكور',
    role: 'Furniture and decor products',
    arabicRole: 'أثاث وديكور',
    accent: 'blue',
    description: 'A furniture and decor direction for homes, offices, hospitality, and commercial spaces.',
    arabicDescription: 'اتجاه للأثاث والديكور للمنازل والمكاتب والضيافة والمساحات التجارية.'
  }
]
```

### Product Type

```ts
export type Product = {
  id: string
  slug: string
  name: string
  arabicName: string
  brand: 'Depalma' | 'Areej Al Alam' | 'Private Label'
  category: string
  categorySlug: string
  origin: 'Egypt' | 'Saudi Arabia' | 'Malaysia' | 'Sourcing on request'
  targetMarkets: string[]
  packaging: string
  moq: string
  shortDescription: string
  arabicShortDescription: string
  specifications: { label: string; value: string; arabicLabel: string; arabicValue: string }[]
  tags: string[]
  certifications?: string[]
  featured: boolean
  imageHint: string
}
```

### Products

Use at least 18 products in the listing so the catalog feels real.

```ts
export const products: Product[] = [
  {
    id: 'p-001',
    slug: 'depalma-signature-eau-de-parfum',
    name: 'Depalma Signature Eau de Parfum',
    arabicName: 'عطر ديبالما سيجنتشر',
    brand: 'Depalma',
    category: 'Perfumes & Fragrance',
    categorySlug: 'perfumes-fragrance',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Retail bottles / master cartons',
    moq: '500 units',
    shortDescription: 'Retail-ready fragrance product for distributors and perfume retailers.',
    arabicShortDescription: 'منتج عطور جاهز للبيع مناسب للموزعين ومتاجر العطور.',
    specifications: [
      { label: 'Product type', value: 'Eau de Parfum', arabicLabel: 'نوع المنتج', arabicValue: 'عطر' },
      { label: 'Packaging', value: 'Individual box + carton', arabicLabel: 'التعبئة', arabicValue: 'علبة فردية + كرتون' },
      { label: 'Use case', value: 'Retail distribution', arabicLabel: 'الاستخدام', arabicValue: 'توزيع تجاري' }
    ],
    tags: ['Fragrance', 'Retail-ready', 'Depalma'],
    certifications: ['Documents on request'],
    featured: true,
    imageHint: 'premium perfume bottle with navy and gold background'
  },
  {
    id: 'p-002',
    slug: 'depalma-oud-inspired-fragrance',
    name: 'Depalma Oud Inspired Fragrance',
    arabicName: 'عطر ديبالما بنفحات العود',
    brand: 'Depalma',
    category: 'Perfumes & Fragrance',
    categorySlug: 'perfumes-fragrance',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Retail bottles / gift-ready boxes',
    moq: '300 units',
    shortDescription: 'Oud-inspired fragrance direction suitable for GCC consumer preferences.',
    arabicShortDescription: 'اتجاه عطري بنفحات العود مناسب لذوق أسواق الخليج.',
    specifications: [
      { label: 'Scent profile', value: 'Oud inspired', arabicLabel: 'الطابع العطري', arabicValue: 'مستوحى من العود' },
      { label: 'Packaging', value: 'Gift-ready box', arabicLabel: 'التعبئة', arabicValue: 'علبة مناسبة للهدايا' },
      { label: 'Market fit', value: 'GCC retail', arabicLabel: 'ملاءمة السوق', arabicValue: 'تجزئة الخليج' }
    ],
    tags: ['Oud', 'GCC', 'Fragrance'],
    featured: true,
    imageHint: 'luxury oud perfume package'
  },
  {
    id: 'p-003',
    slug: 'depalma-body-mist-collection',
    name: 'Depalma Body Mist Collection',
    arabicName: 'مجموعة بودي ميست ديبالما',
    brand: 'Depalma',
    category: 'Perfumes & Fragrance',
    categorySlug: 'perfumes-fragrance',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Spray bottles / cartons',
    moq: '1,000 units',
    shortDescription: 'Light fragrance body mist collection for youth and daily-use retail channels.',
    arabicShortDescription: 'مجموعة بودي ميست خفيفة مناسبة للاستخدام اليومي وقنوات البيع بالتجزئة.',
    specifications: [
      { label: 'Format', value: 'Spray bottle', arabicLabel: 'الشكل', arabicValue: 'عبوة بخاخ' },
      { label: 'Segment', value: 'Daily personal care', arabicLabel: 'الشريحة', arabicValue: 'عناية يومية' },
      { label: 'Supply', value: 'Carton-based wholesale', arabicLabel: 'التوريد', arabicValue: 'توريد بالكرتون' }
    ],
    tags: ['Body mist', 'Personal care'],
    featured: false,
    imageHint: 'body mist bottles on clean white background'
  },
  {
    id: 'p-004',
    slug: 'depalma-air-freshener-spray',
    name: 'Depalma Air Freshener Spray',
    arabicName: 'معطر جو ديبالما',
    brand: 'Depalma',
    category: 'Perfumes & Fragrance',
    categorySlug: 'perfumes-fragrance',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Aerosol cans / cartons',
    moq: '1,200 units',
    shortDescription: 'Home and office scent product for retail and facility supply channels.',
    arabicShortDescription: 'منتج تعطير للمنازل والمكاتب مناسب للتجزئة والتوريد المؤسسي.',
    specifications: [
      { label: 'Format', value: 'Spray can', arabicLabel: 'الشكل', arabicValue: 'عبوة رش' },
      { label: 'Use case', value: 'Home, office, facilities', arabicLabel: 'الاستخدام', arabicValue: 'منزل، مكتب، منشآت' },
      { label: 'Packaging', value: 'Retail cartons', arabicLabel: 'التعبئة', arabicValue: 'كراتين تجارية' }
    ],
    tags: ['Home fragrance', 'Consumer goods'],
    featured: false,
    imageHint: 'air freshener spray product'
  },
  {
    id: 'p-005',
    slug: 'fragrance-gift-set',
    name: 'Fragrance Gift Set',
    arabicName: 'طقم عطور للهدايا',
    brand: 'Private Label',
    category: 'Perfumes & Fragrance',
    categorySlug: 'perfumes-fragrance',
    origin: 'Sourcing on request',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Gift box / display carton',
    moq: 'Custom quotation',
    shortDescription: 'Customizable fragrance gift set for seasonal retail and corporate gifting.',
    arabicShortDescription: 'طقم عطور قابل للتخصيص للمواسم والهدايا التجارية.',
    specifications: [
      { label: 'Format', value: 'Gift set', arabicLabel: 'الشكل', arabicValue: 'طقم هدايا' },
      { label: 'Customization', value: 'Available on request', arabicLabel: 'التخصيص', arabicValue: 'متاح حسب الطلب' },
      { label: 'Market', value: 'Seasonal retail', arabicLabel: 'السوق', arabicValue: 'بيع موسمي' }
    ],
    tags: ['Gift set', 'Private label'],
    featured: false,
    imageHint: 'premium fragrance gift box'
  },
  {
    id: 'p-006',
    slug: 'depalma-hair-shampoo-retail-pack',
    name: 'Depalma Hair Shampoo Retail Pack',
    arabicName: 'شامبو ديبالما عبوة تجارية',
    brand: 'Depalma',
    category: 'Cosmetics & Personal Care',
    categorySlug: 'cosmetics-personal-care',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Retail bottles / cartons',
    moq: '1,000 units',
    shortDescription: 'Hair care retail product suitable for supermarkets, pharmacies, and beauty stores.',
    arabicShortDescription: 'منتج عناية بالشعر مناسب للسوبر ماركت والصيدليات ومتاجر التجميل.',
    specifications: [
      { label: 'Product type', value: 'Hair shampoo', arabicLabel: 'نوع المنتج', arabicValue: 'شامبو شعر' },
      { label: 'Channel', value: 'Retail / wholesale', arabicLabel: 'قناة البيع', arabicValue: 'تجزئة / جملة' },
      { label: 'Packaging', value: 'Bottle + carton', arabicLabel: 'التعبئة', arabicValue: 'عبوة + كرتون' }
    ],
    tags: ['Hair care', 'Retail'],
    featured: true,
    imageHint: 'shampoo bottles clean product shot'
  },
  {
    id: 'p-007',
    slug: 'depalma-hair-conditioner-retail-pack',
    name: 'Depalma Hair Conditioner Retail Pack',
    arabicName: 'بلسم شعر ديبالما عبوة تجارية',
    brand: 'Depalma',
    category: 'Cosmetics & Personal Care',
    categorySlug: 'cosmetics-personal-care',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Retail bottles / cartons',
    moq: '1,000 units',
    shortDescription: 'Complementary hair care product for retail shelf presentation and bundled sales.',
    arabicShortDescription: 'منتج عناية مكمل للشعر مناسب للعرض التجاري والبيع مع الشامبو.',
    specifications: [
      { label: 'Product type', value: 'Hair conditioner', arabicLabel: 'نوع المنتج', arabicValue: 'بلسم شعر' },
      { label: 'Bundle fit', value: 'Shampoo + conditioner', arabicLabel: 'البيع المجمع', arabicValue: 'شامبو + بلسم' },
      { label: 'Packaging', value: 'Retail carton', arabicLabel: 'التعبئة', arabicValue: 'كرتون تجاري' }
    ],
    tags: ['Hair care', 'Bundle'],
    featured: false,
    imageHint: 'conditioner bottle product shot'
  },
  {
    id: 'p-008',
    slug: 'depalma-body-lotion',
    name: 'Depalma Body Lotion',
    arabicName: 'لوشن جسم ديبالما',
    brand: 'Depalma',
    category: 'Cosmetics & Personal Care',
    categorySlug: 'cosmetics-personal-care',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Retail bottles / cartons',
    moq: '800 units',
    shortDescription: 'Body care product for beauty retail, pharmacies, and personal care shelves.',
    arabicShortDescription: 'منتج عناية بالجسم مناسب لمتاجر التجميل والصيدليات ورفوف العناية الشخصية.',
    specifications: [
      { label: 'Product type', value: 'Body lotion', arabicLabel: 'نوع المنتج', arabicValue: 'لوشن جسم' },
      { label: 'Channel', value: 'Beauty retail', arabicLabel: 'قناة البيع', arabicValue: 'تجزئة تجميل' },
      { label: 'Supply', value: 'Wholesale cartons', arabicLabel: 'التوريد', arabicValue: 'كراتين جملة' }
    ],
    tags: ['Body care', 'Cosmetics'],
    featured: true,
    imageHint: 'body lotion cosmetic bottle'
  },
  {
    id: 'p-009',
    slug: 'depalma-hand-cream',
    name: 'Depalma Hand Cream',
    arabicName: 'كريم يد ديبالما',
    brand: 'Depalma',
    category: 'Cosmetics & Personal Care',
    categorySlug: 'cosmetics-personal-care',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Tubes / counter display boxes',
    moq: '1,500 units',
    shortDescription: 'Compact personal care product suitable for counters and impulse retail displays.',
    arabicShortDescription: 'منتج عناية صغير مناسب للعرض على الكاونتر والبيع السريع.',
    specifications: [
      { label: 'Format', value: 'Tube', arabicLabel: 'الشكل', arabicValue: 'أنبوب' },
      { label: 'Display', value: 'Counter box', arabicLabel: 'العرض', arabicValue: 'علبة عرض' },
      { label: 'Market', value: 'Pharmacies / beauty stores', arabicLabel: 'السوق', arabicValue: 'صيدليات / متاجر تجميل' }
    ],
    tags: ['Hand care', 'Counter display'],
    featured: false,
    imageHint: 'hand cream tubes in display box'
  },
  {
    id: 'p-010',
    slug: 'depalma-skin-care-starter-set',
    name: 'Depalma Skin Care Starter Set',
    arabicName: 'مجموعة عناية بالبشرة ديبالما',
    brand: 'Depalma',
    category: 'Cosmetics & Personal Care',
    categorySlug: 'cosmetics-personal-care',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Box set / carton',
    moq: 'Custom quotation',
    shortDescription: 'Starter beauty set for retail campaigns, bundles, and market testing.',
    arabicShortDescription: 'مجموعة عناية مناسبة للحملات التجارية والباقات وتجربة السوق.',
    specifications: [
      { label: 'Format', value: 'Multi-item set', arabicLabel: 'الشكل', arabicValue: 'مجموعة متعددة المنتجات' },
      { label: 'Use case', value: 'Retail campaign', arabicLabel: 'الاستخدام', arabicValue: 'حملة تجارية' },
      { label: 'Customization', value: 'Available on request', arabicLabel: 'التخصيص', arabicValue: 'متاح حسب الطلب' }
    ],
    tags: ['Skin care', 'Set'],
    featured: false,
    imageHint: 'skin care set packaging'
  },
  {
    id: 'p-011',
    slug: 'family-hygiene-consumer-pack',
    name: 'Family Hygiene Consumer Pack',
    arabicName: 'باقة عناية ونظافة عائلية',
    brand: 'Private Label',
    category: 'Consumer Goods',
    categorySlug: 'consumer-goods',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Retail bundle / cartons',
    moq: 'Custom quotation',
    shortDescription: 'Consumer hygiene bundle suitable for wholesale, retail, and promotional campaigns.',
    arabicShortDescription: 'باقة منتجات نظافة مناسبة للجملة والتجزئة والحملات الترويجية.',
    specifications: [
      { label: 'Product family', value: 'Hygiene goods', arabicLabel: 'عائلة المنتج', arabicValue: 'منتجات نظافة' },
      { label: 'Supply model', value: 'Bundle / carton', arabicLabel: 'نموذج التوريد', arabicValue: 'باقة / كرتون' },
      { label: 'Customization', value: 'Private label possible', arabicLabel: 'التخصيص', arabicValue: 'علامة خاصة متاحة' }
    ],
    tags: ['Consumer goods', 'Hygiene'],
    featured: false,
    imageHint: 'household hygiene retail bundle'
  },
  {
    id: 'p-012',
    slug: 'household-care-retail-bundle',
    name: 'Household Care Retail Bundle',
    arabicName: 'باقة عناية منزلية للبيع التجاري',
    brand: 'Private Label',
    category: 'Consumer Goods',
    categorySlug: 'consumer-goods',
    origin: 'Sourcing on request',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Display-ready bundle',
    moq: 'Custom quotation',
    shortDescription: 'Retail bundle for household care categories and commercial distribution.',
    arabicShortDescription: 'باقة منتجات عناية منزلية مناسبة للتوزيع التجاري.',
    specifications: [
      { label: 'Category', value: 'Household care', arabicLabel: 'التصنيف', arabicValue: 'عناية منزلية' },
      { label: 'Packaging', value: 'Display-ready', arabicLabel: 'التعبئة', arabicValue: 'جاهزة للعرض' },
      { label: 'Use case', value: 'Retail shelves', arabicLabel: 'الاستخدام', arabicValue: 'رفوف البيع' }
    ],
    tags: ['Retail bundle', 'Household'],
    featured: false,
    imageHint: 'household products bundle'
  },
  {
    id: 'p-013',
    slug: 'personal-care-travel-pack',
    name: 'Personal Care Travel Pack',
    arabicName: 'باقة عناية شخصية للسفر',
    brand: 'Private Label',
    category: 'Consumer Goods',
    categorySlug: 'consumer-goods',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Small packs / cartons',
    moq: '2,000 units',
    shortDescription: 'Compact personal care pack suitable for travel retail and hospitality channels.',
    arabicShortDescription: 'باقة عناية شخصية صغيرة مناسبة للسفر والضيافة.',
    specifications: [
      { label: 'Format', value: 'Travel size', arabicLabel: 'الشكل', arabicValue: 'حجم سفر' },
      { label: 'Channel', value: 'Hospitality / travel retail', arabicLabel: 'القناة', arabicValue: 'ضيافة / سفر' },
      { label: 'Supply', value: 'Bulk cartons', arabicLabel: 'التوريد', arabicValue: 'كراتين جملة' }
    ],
    tags: ['Travel pack', 'Hospitality'],
    featured: false,
    imageHint: 'travel size personal care kit'
  },
  {
    id: 'p-014',
    slug: 'depalma-modern-lounge-chair',
    name: 'Depalma Modern Lounge Chair',
    arabicName: 'كرسي لاونج مودرن ديبالما',
    brand: 'Depalma',
    category: 'Furniture & Decor',
    categorySlug: 'furniture-decor',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Protected furniture packaging',
    moq: '20 pieces',
    shortDescription: 'Modern lounge seating for homes, offices, showrooms, and hospitality spaces.',
    arabicShortDescription: 'كرسي لاونج مودرن للمنازل والمكاتب والمعارض ومساحات الضيافة.',
    specifications: [
      { label: 'Product type', value: 'Lounge chair', arabicLabel: 'نوع المنتج', arabicValue: 'كرسي لاونج' },
      { label: 'Use case', value: 'Home / office / hospitality', arabicLabel: 'الاستخدام', arabicValue: 'منزل / مكتب / ضيافة' },
      { label: 'Supply', value: 'Project or wholesale order', arabicLabel: 'التوريد', arabicValue: 'مشروع أو طلب جملة' }
    ],
    tags: ['Furniture', 'Hospitality'],
    featured: true,
    imageHint: 'modern lounge chair product photo'
  },
  {
    id: 'p-015',
    slug: 'depalma-decorative-wall-panel',
    name: 'Depalma Decorative Wall Panel',
    arabicName: 'لوح ديكور جداري ديبالما',
    brand: 'Depalma',
    category: 'Furniture & Decor',
    categorySlug: 'furniture-decor',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Project packaging',
    moq: 'Custom quotation',
    shortDescription: 'Decorative wall solution for residential, retail, and commercial interiors.',
    arabicShortDescription: 'حل ديكور جداري للمساحات السكنية والتجارية ومحلات التجزئة.',
    specifications: [
      { label: 'Product type', value: 'Decorative panel', arabicLabel: 'نوع المنتج', arabicValue: 'لوح ديكور' },
      { label: 'Use case', value: 'Interior decor', arabicLabel: 'الاستخدام', arabicValue: 'ديكور داخلي' },
      { label: 'Order type', value: 'Project-based', arabicLabel: 'نوع الطلب', arabicValue: 'حسب المشروع' }
    ],
    tags: ['Decor', 'Interior'],
    featured: false,
    imageHint: 'decorative wall panel interior product'
  },
  {
    id: 'p-016',
    slug: 'depalma-hotel-room-side-table',
    name: 'Depalma Hotel Room Side Table',
    arabicName: 'طاولة جانبية لغرف الفنادق ديبالما',
    brand: 'Depalma',
    category: 'Furniture & Decor',
    categorySlug: 'furniture-decor',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Furniture cartons / protected packs',
    moq: '30 pieces',
    shortDescription: 'Side table suitable for hotel rooms, furnished apartments, and hospitality projects.',
    arabicShortDescription: 'طاولة جانبية مناسبة لغرف الفنادق والشقق المفروشة ومشاريع الضيافة.',
    specifications: [
      { label: 'Product type', value: 'Side table', arabicLabel: 'نوع المنتج', arabicValue: 'طاولة جانبية' },
      { label: 'Segment', value: 'Hospitality', arabicLabel: 'الشريحة', arabicValue: 'ضيافة' },
      { label: 'Supply', value: 'Bulk / project order', arabicLabel: 'التوريد', arabicValue: 'جملة / مشروع' }
    ],
    tags: ['Furniture', 'Hotels'],
    featured: false,
    imageHint: 'modern hotel side table product'
  },
  {
    id: 'p-017',
    slug: 'depalma-office-reception-chair',
    name: 'Depalma Office Reception Chair',
    arabicName: 'كرسي استقبال مكتبي ديبالما',
    brand: 'Depalma',
    category: 'Furniture & Decor',
    categorySlug: 'furniture-decor',
    origin: 'Egypt',
    targetMarkets: ['Saudi Arabia'],
    packaging: 'Protected packs',
    moq: '25 pieces',
    shortDescription: 'Reception seating solution for offices, clinics, showrooms, and business spaces.',
    arabicShortDescription: 'حل جلوس للاستقبال في المكاتب والعيادات والمعارض والمساحات التجارية.',
    specifications: [
      { label: 'Product type', value: 'Reception chair', arabicLabel: 'نوع المنتج', arabicValue: 'كرسي استقبال' },
      { label: 'Use case', value: 'Office / clinic / showroom', arabicLabel: 'الاستخدام', arabicValue: 'مكتب / عيادة / معرض' },
      { label: 'Supply', value: 'Wholesale order', arabicLabel: 'التوريد', arabicValue: 'طلب جملة' }
    ],
    tags: ['Office furniture', 'Reception'],
    featured: false,
    imageHint: 'office reception chair clean product image'
  },
  {
    id: 'p-018',
    slug: 'branded-retail-display-box',
    name: 'Branded Retail Display Box',
    arabicName: 'علبة عرض تجارية للمنتجات',
    brand: 'Private Label',
    category: 'Packaging & Retail Packs',
    categorySlug: 'packaging-retail-packs',
    origin: 'Sourcing on request',
    targetMarkets: ['Saudi Arabia', 'Malaysia'],
    packaging: 'Flat packed / assembled display',
    moq: 'Custom quotation',
    shortDescription: 'Display packaging for perfumes, cosmetics, and consumer goods retail shelves.',
    arabicShortDescription: 'تغليف عرض مناسب للعطور ومستحضرات التجميل والمنتجات الاستهلاكية.',
    specifications: [
      { label: 'Product type', value: 'Retail display box', arabicLabel: 'نوع المنتج', arabicValue: 'علبة عرض' },
      { label: 'Use case', value: 'Shelf display', arabicLabel: 'الاستخدام', arabicValue: 'عرض على الرف' },
      { label: 'Customization', value: 'Branding available', arabicLabel: 'التخصيص', arabicValue: 'إمكانية إضافة الهوية' }
    ],
    tags: ['Packaging', 'Retail display'],
    featured: false,
    imageHint: 'branded retail display box packaging'
  }
]
```

---

## Homepage Content

Hero title:

```text
Global B2B Product Catalog for Import & Market Expansion
```

Hero subtitle:

```text
Consumer products, perfumes, cosmetics, furniture, and decor solutions prepared for regional business growth across Saudi Arabia, Egypt, and Malaysia.
```

Arabic alternative:

```text
كتالوج منتجات B2B عالمي للاستيراد والتوسع في الأسواق
منتجات استهلاكية، عطور، مستحضرات تجميل، أثاث وديكور جاهزة للنمو التجاري في السعودية ومصر وماليزيا.
```

Hero CTAs:

- Browse Products.
- Request a Quote.
- Explore Brands.

Trust stats:

- Since 2006.
- Saudi Arabia.
- Egypt.
- Malaysia.
- Import & Marketing.

---

## Homepage Sections

Implement these sections in order:

1. Sticky header with language switcher and quote basket icon.
2. Product-first hero with catalog search.
3. Trust stats strip.
4. Product categories grid.
5. Featured products grid.
6. How the quote process works.
7. Areej Group Brands & Market Success.
8. Markets section.
9. Services section.
10. Why Areej.
11. Final request quote CTA.
12. Footer.

---

## Product Listing Page

Build a professional product listing page with:

- Search input.
- Category filter buttons.
- Brand filter.
- Origin filter.
- Packaging filter.
- Market filter.
- Sort dropdown.
- Product count.
- Responsive grid.
- Product cards.
- Quote basket integration.

Each product card:

- Product image placeholder or generated gradient/image area.
- Brand badge.
- Category badge.
- Product name.
- Arabic name in RTL mode.
- Origin.
- Packaging.
- MOQ.
- Target market badges.
- Short description.
- View Details button.
- Add to Quote button.

---

## Category Page

Build category landing pages with:

- Category hero.
- Category description.
- Subcategory chips.
- Popular products.
- Filters.
- Product grid.
- CTA to request sourcing support.

---

## Product Detail Page

Build a detailed page with:

- Breadcrumbs.
- Product gallery area.
- Product summary.
- Brand badge.
- Origin, packaging, MOQ, and market badges.
- Add to Quote Basket button.
- Request Quote CTA card.
- Specifications table.
- Packaging & supply notes.
- Suitable markets.
- Related products.

---

## Quote Basket / Request Quote Page

Build a B2B quote flow, not checkout.

Required:

- Quote basket icon in header with count.
- Add to Quote button on product cards and details.
- Quote basket drawer or section.
- Selected product rows.
- Quantity field per product.
- Destination market selector.
- Contact details form.
- Submit request button.
- Success message/toast.
- No backend.

Form fields:

- Full name.
- Company name.
- Country.
- City.
- Phone / WhatsApp.
- Email.
- Products of interest.
- Quantity.
- Destination market.
- Message.
- Optional attachment visual field.

---

## About Page

Explain Areej as an established company operating since 2006 across Saudi Arabia, Egypt, and Malaysia, focused on importing and marketing consumer products, building long-term partnerships, selecting products carefully, and developing commercial brands in the Saudi market.

---

## Brands Page

Create a page for:

- Areej Al Alam Tourism.
- Depalma Consumer Goods.
- Depalma Furniture & Decor.

This page should present the group’s market success and link Depalma cards to relevant product categories.

---

## Markets Page

Show market cards:

- Saudi Arabia.
- Egypt.
- Malaysia.

Each card should include role, short description, and contact CTA.

---

## Services Page

Show services:

- Product sourcing.
- Import and marketing.
- Brand development in Saudi/GCC markets.
- Quality follow-up.
- Distribution and retail preparation.
- Cross-market operations between Saudi Arabia, Egypt, and Malaysia.

---

## Contact Page

Include:

- Contact cards.
- Saudi office information.
- Email: info@areejco.net.
- Phone: 920002533.
- Direct phone: 0112034112 ext. 222.
- Address: Riyadh - Al Nozha District - Hail Street.
- Contact form.

---

## Quality Requirements

- Must look premium, not generic.
- Must be mobile-first.
- Must use strong empty states and hover states.
- Must avoid cart/checkout/payment language.
- Must avoid lorem ipsum.
- Must avoid unrelated product categories.
- Must use the mock data provided above.
- Must make the client feel this is a global B2B catalog, not a small corporate site.
- Must be easy to deploy to Vercel.
- Must keep code clean and componentized.

---

## Final Output

Return a complete working Next.js prototype with all routes, components, mock data, and styling implemented.

The final result should clearly communicate:

> Areej Al Alam is an established import and marketing group with product families, brands, and a premium B2B quote journey.
