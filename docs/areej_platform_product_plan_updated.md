# Areej Global B2B Catalog Website — Updated Product & Platform Plan

## 1. Project Direction

The goal is to rebuild the current Areej import website into a **Global B2B Catalog Website**.

This should not be treated as a normal corporate website. The platform must guide business visitors directly to product families, categories, product details, and commercial enquiry actions.

The prototype should be strong enough to send to the client as a real strategic direction, even if the first version uses mock data only.

---

## 2. Current Business Signals

The current public website and visible content communicate that Areej:

- Is part of Areej Al Alam Group across Saudi Arabia, Malaysia, and Egypt.
- Has operated since 2006.
- Works in importing and marketing consumer products.
- Imports goods from Egypt and markets them in Saudi Arabia and Malaysia.
- Has built brands in the Saudi market, including:
  - Areej Al Alam Tourism.
  - Depalma for consumer goods, perfumes, cosmetics, and consumer products.
  - Depalma for furniture and decor.

These should shape the demo data and platform story.

---

## 3. New Positioning

The new website should position Areej as:

> A global import and marketing partner connecting selected consumer products, perfumes, cosmetics, furniture, and decor solutions with regional B2B markets through a clear bilingual catalogue and fast quote enquiry flow.

The website should feel:

- Global.
- Premium.
- Trusted.
- Saudi/GCC-ready.
- Arabic/English native.
- Product-first.
- Commercial, not decorative.
- Suitable for business buyers and decision makers.

---

## 4. Target Users

### 4.1 Business Buyer

A distributor, importer, retailer, wholesaler, hotel buyer, furnishing buyer, cosmetics reseller, or business owner looking for consumer products.

Needs:

- Browse categories quickly.
- See product photos and specifications.
- Understand product origin, packaging, and business suitability.
- Request a quote or contact sales.
- Switch between Arabic and English.

### 4.2 Company Decision Maker

A manager or procurement officer evaluating whether Areej is a reliable commercial partner.

Needs:

- Understand Areej's experience and markets.
- See brands, product families, and commercial areas.
- Trust the company before contacting.
- Find contact details quickly.

### 4.3 Areej Admin / Marketing Team

Internal team managing the website in future production.

Needs:

- Add/edit products.
- Add/edit categories.
- Upload product images.
- Manage featured products.
- Receive quote requests.
- Update company pages and branch details.

---

## 5. Core Business Model

This is a **B2B Catalog + Request Quote** model.

Do not build it as a traditional checkout/payment e-commerce store in the first phase.

### Recommended User Journey

```text
Visitor lands on homepage
→ Sees product families immediately
→ Opens catalog or category
→ Filters/searches products
→ Opens product details
→ Adds product to quote basket or requests quote
→ Areej team follows up commercially
```

### Why Request Quote instead of Checkout?

B2B import and distribution pricing depends on:

- Quantity.
- Packaging.
- Destination market.
- Shipping terms.
- Product availability.
- Negotiation.
- Commercial relationship.

So the correct CTA is:

- Request Quote.
- Add to Quote Basket.
- Contact Sales.
- Ask About This Product.
- Download Catalog.

---

## 6. Demo Product Categories

Use these categories in the v0 prototype.

```ts
export const categories = [
  {
    name: 'Perfumes & Fragrance',
    arabicName: 'العطور ومنتجات الروائح',
    slug: 'perfumes-fragrance',
    description: 'Retail-ready fragrance and scent products suitable for GCC consumer markets.',
    count: 8,
  },
  {
    name: 'Cosmetics & Personal Care',
    arabicName: 'مستحضرات التجميل والعناية الشخصية',
    slug: 'cosmetics-personal-care',
    description: 'Beauty, hair care, skin care, and body care product families for retail and distribution.',
    count: 8,
  },
  {
    name: 'Consumer Goods',
    arabicName: 'المنتجات الاستهلاكية',
    slug: 'consumer-goods',
    description: 'Everyday consumer goods prepared for wholesale, retail, and market expansion.',
    count: 6,
  },
  {
    name: 'Furniture & Decor',
    arabicName: 'الأثاث والديكور',
    slug: 'furniture-decor',
    description: 'Furniture and decor products for homes, offices, hospitality, and commercial spaces.',
    count: 8,
  },
  {
    name: 'Packaging & Retail Packs',
    arabicName: 'التعبئة والتغليف',
    slug: 'packaging-retail-packs',
    description: 'Retail packaging formats, display packs, and B2B-ready supply presentation.',
    count: 5,
  },
]
```

### Important Data Rule

The prototype must use these as **demo/mock product families**, not final confirmed SKUs.

Do not present mock products as exact Areej stock unless the client sends the official product catalogue.

---

## 7. Demo Mock Products

Use 16–20 products so the catalogue feels real.

### Perfumes & Fragrance

- Depalma Signature Eau de Parfum
- Depalma Oud Inspired Fragrance
- Depalma Body Mist Collection
- Depalma Air Freshener Spray
- Retail Fragrance Gift Set

### Cosmetics & Personal Care

- Depalma Hair Shampoo Retail Pack
- Depalma Hair Conditioner Retail Pack
- Depalma Body Lotion
- Depalma Hand Cream
- Depalma Skin Care Starter Set

### Consumer Goods

- Family Hygiene Consumer Pack
- Household Care Retail Bundle
- Personal Care Travel Pack
- Multi-purpose Consumer Display Box

### Furniture & Decor

- Depalma Modern Lounge Chair
- Depalma Decorative Wall Panel
- Depalma Hotel Room Side Table
- Depalma Office Reception Chair
- Depalma Home Decor Accent Set

### Packaging & Retail Packs

- Branded Retail Display Box
- Fragrance Gift Packaging
- Cosmetics Shelf-ready Packaging

---

## 8. Data Model for v0 Mock Data

Products should include:

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

Use `imageHint` for clean product-oriented image placeholders if real images are unavailable.

---

## 9. Homepage Structure

### 9.1 Header

Header requirements:

- Logo area.
- Main navigation.
- Language switcher.
- Search button.
- Quote basket icon.
- Primary CTA: Request Quote.
- Secondary CTA: View Products.
- Mobile menu.

Recommended English navigation:

```text
Home
Products
Brands
Markets
Services
About Areej
Contact
```

Arabic navigation:

```text
الرئيسية
المنتجات
العلامات التجارية
الأسواق
الخدمات
عن أريج
تواصل معنا
```

---

### 9.2 Hero Section

The hero must immediately communicate that Areej is a global B2B product partner.

English hero copy:

```text
Global B2B Product Catalog for Import & Market Expansion
Consumer products, perfumes, cosmetics, furniture, and decor solutions prepared for regional business growth across Saudi Arabia, Egypt, and Malaysia.
```

Arabic hero copy:

```text
كتالوج منتجات B2B عالمي للاستيراد والتوسع في الأسواق
منتجات استهلاكية، عطور، مستحضرات تجميل، أثاث وديكور جاهزة للنمو التجاري في السعودية ومصر وماليزيا.
```

Hero CTAs:

- Browse Products.
- Request a Quote.
- Explore Brands.

Arabic:

- تصفح المنتجات.
- اطلب عرض سعر.
- استكشف العلامات التجارية.

---

### 9.3 Homepage Sections

Recommended order:

1. Product-first hero with search and CTA.
2. Trust strip: Since 2006 / Saudi Arabia / Egypt / Malaysia / Import & Marketing.
3. Product categories grid.
4. Featured product families.
5. Quote basket / inquiry process explanation.
6. Areej group brands:
   - Areej Al Alam Tourism.
   - Depalma Consumer Goods / Perfumes / Cosmetics.
   - Depalma Furniture & Decor.
7. Markets section: Saudi Arabia, Egypt, Malaysia.
8. Services section.
9. Why Areej.
10. Request quote CTA.
11. Footer.

---

## 10. Product Catalog Requirements

The product listing page should feel like a global B2B catalog, not a simple gallery.

Must include:

- Search input.
- Category filters.
- Origin filter.
- Brand filter.
- Packaging filter.
- Market filter.
- Featured/new tags.
- Product count.
- Sort dropdown.
- Responsive product grid.
- Quote basket integration.

### Product Card Fields

- Product image area.
- Brand badge.
- Category badge.
- Product name.
- Arabic name when RTL is active.
- Origin country.
- Packaging type.
- MOQ.
- Suitable markets.
- Short description.
- CTA: View Details.
- CTA: Add to Quote.

---

## 11. Category Landing Requirements

Each category page must include:

- Category hero.
- Category description.
- Subcategory chips.
- Product count.
- Popular products.
- Filters.
- Product grid.
- CTA: Request sourcing support.

Example pages:

```text
/categories/perfumes-fragrance
/categories/cosmetics-personal-care
/categories/consumer-goods
/categories/furniture-decor
/categories/packaging-retail-packs
```

---

## 12. Product Detail Page

Must include:

- Breadcrumbs.
- Product gallery area.
- Product title.
- Brand badge.
- Category.
- Origin.
- Packaging.
- MOQ.
- Suitable markets.
- Business description.
- Specifications table.
- Packaging & supply information.
- Related products.
- Request quote form sidebar.
- Add to Quote Basket CTA.
- WhatsApp/contact sales CTA.

---

## 13. Quote Basket / RFQ Flow

The Quote Basket is required in the prototype because it proves this is not a normal corporate website.

### Required Behavior

- Every product card has `Add to Quote`.
- Header has quote basket icon and count.
- Quote basket drawer/page shows selected products.
- User can edit quantity and destination market.
- User can submit one request for multiple products.
- Submission shows success state.
- No backend required in v0.

### Suggested Route

```text
/request-quote
```

The page can receive selected products through local state or mock state.

---

## 14. Brands / Group Achievements Section

Create a dedicated section called:

```text
Areej Group Brands & Market Success
```

Cards:

1. **Areej Al Alam Tourism**
   - Role: group brand / tourism sector.
   - Use as credibility signal only.

2. **Depalma Consumer Goods**
   - Role: perfumes, cosmetics, and consumer goods.
   - Link to product categories.

3. **Depalma Furniture & Decor**
   - Role: furniture and decor.
   - Link to furniture/decor category.

This section should not look like random logos. It should prove market experience.

---

## 15. Services Pages

Recommended services:

1. Product sourcing.
2. Import and marketing.
3. Brand development in Saudi/GCC markets.
4. Product quality and supplier follow-up.
5. Distribution and retail preparation.
6. Cross-market operations between Saudi Arabia, Egypt, and Malaysia.

---

## 16. Markets Page

Markets to show:

- Saudi Arabia.
- Egypt.
- Malaysia.

Each market card should include:

- Market role.
- Short description.
- Relevant business focus.
- Contact CTA.

---

## 17. Admin/CMS Future Scope

For the first v0 prototype, mock data is enough.

For production, recommend:

- Next.js frontend.
- Headless CMS such as Strapi, Directus, or Sanity.
- Product/category content models.
- Admin login.
- Quote request storage.
- Email notifications.
- SEO fields per product/page.

CMS models:

- Product.
- Category.
- Brand / Sister Company.
- Market.
- Service.
- Page.
- Quote Request.
- Media Asset.

---

## 18. Suggested Tech Stack

### Prototype Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Lucide icons.
- Mock data in TypeScript files.
- Responsive components.
- No backend required initially.

### Production Stack

- Next.js + TypeScript.
- Headless CMS: Strapi / Directus / Sanity.
- PostgreSQL if self-hosted CMS.
- Vercel or VPS deployment.
- Cloudinary/S3-compatible media storage if product images grow.
- Email service for quote requests.
- Google Analytics / Search Console.

---

## 19. Success Criteria

The prototype is successful if the client can immediately understand:

1. This is no longer just a company profile website.
2. Product categories are the center of the experience.
3. Areej’s visible business areas are represented: consumer goods, perfumes, cosmetics, furniture, decor, and group brands.
4. Arabic and English are treated seriously.
5. A buyer can add products to a quote request quickly.
6. The platform can later grow into a CMS-powered B2B portal.

---

## 20. Final Product Statement

Build Areej as a **Global B2B Catalog Website** that transforms the current simple import website into a premium commercial product gateway for regional and international business buyers, with mock data aligned to the company’s visible brands and product families.
