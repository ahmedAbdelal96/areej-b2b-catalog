# Areej Global B2B Catalog Website — Updated Design System & Brand Direction

## 1. Design Goal

Create a premium global B2B catalog design for Areej that feels suitable for import, marketing, distribution, consumer products, perfumes, cosmetics, furniture, decor, and international product sourcing.

The design must look more like a serious B2B trade/catalog platform than a small company profile website.

---

## 2. Brand Personality

Areej should feel:

- Trusted.
- Global.
- Commercial.
- Premium.
- Clear.
- Mature.
- Product-focused.
- Saudi/GCC-ready.
- Arabic/English native.
- Suitable for business buyers, not retail shoppers only.

---

## 3. Brand Context From Current Website

The visible current website and brand screenshots show:

- Areej Al Alam main group identity uses a navy/blue business look.
- Depalma consumer goods uses a bold red logo.
- Depalma furniture/decor uses a blue/white identity.
- The website text is currently very simple and mostly corporate.

The new design should unify these brands under Areej’s premium corporate identity without letting the red Depalma logo dominate the entire website.

---

## 4. Updated Color Palette

### 4.1 Primary Areej Colors

Use these as the main platform identity:

```css
--areej-navy-950: #071525;
--areej-navy-900: #0B1F35;
--areej-navy-800: #102B46;
--areej-blue-700: #0E3A66;
```

Use for:

- Header text.
- Footer.
- Hero dark areas.
- Section headlines.
- Premium backgrounds.
- Trust/business sections.

### 4.2 Commercial Accent

```css
--areej-gold-600: #B8893B;
--areej-gold-500: #C99A49;
--areej-gold-400: #D8B46A;
```

Use for:

- Primary CTA accents.
- Icons.
- Badges.
- Borders.
- Highlighted numbers.
- Premium decorative lines.

### 4.3 Depalma Brand Support Colors

These should be used only inside brand cards, product badges, or small accents.

```css
--depalma-red: #E21B1B;
--depalma-blue: #1E88E5;
```

Usage rule:

- Do not make the whole website red.
- Use red only for Depalma Consumer Goods brand badge/card.
- Use blue only for Depalma Furniture & Decor badge/card.

### 4.4 Neutral Colors

```css
--areej-white: #FFFFFF;
--areej-cream: #F8F4EC;
--areej-sand: #EFE6D8;
--areej-slate-950: #0F172A;
--areej-slate-900: #111827;
--areej-slate-700: #374151;
--areej-slate-500: #6B7280;
--areej-slate-200: #E5E7EB;
--areej-slate-100: #F3F4F6;
```

Use for:

- Page background.
- Product cards.
- Secondary sections.
- Borders.
- Body text.

### 4.5 Support Colors

```css
--areej-success: #0F766E;
--areej-info: #2563EB;
--areej-warning: #D97706;
--areej-danger: #DC2626;
```

Use lightly for form states, quote basket status, and feedback messages.

---

## 5. Color Usage Rules

### Preferred Look

- White page background.
- Deep navy headings.
- Gold accents.
- Cream/sand section backgrounds.
- Product cards on white surfaces.
- Brand cards with small Depalma red/blue accents.
- Subtle shadow and border.

### Avoid

- Too much black.
- Turning the website fully red because of Depalma.
- Random bright colors.
- Heavy gradients everywhere.
- E-commerce neon colors.
- Low contrast gold text on white.

---

## 6. Typography

### Arabic Font Direction

Recommended:

- IBM Plex Sans Arabic.
- Cairo.
- Tajawal.

Use Arabic font with strong readability, especially for product specs and cards.

### English Font Direction

Recommended:

- Inter.
- Manrope.
- Plus Jakarta Sans.

### Font Pairing Recommendation

Use:

- Arabic: IBM Plex Sans Arabic.
- English: Inter.

This gives the platform a modern global business feel.

---

## 7. Layout Principles

The design should prioritize:

- Fast product discovery.
- Clear product categories.
- Strong quote CTAs.
- Wide desktop catalog layouts.
- Clean mobile browsing experience.
- Business trust sections.
- Arabic layout that feels native, not translated.

Spacing:

```css
section padding desktop: 80px 0;
section padding mobile: 48px 0;
card radius: 20px;
button radius: 999px or 12px;
container max-width: 1180px - 1280px;
```

---

## 8. Component Style

### 8.1 Header

Header should be:

- White or transparent-on-hero then white on scroll.
- Sticky if possible.
- Logo left/right depending on language.
- Clear nav.
- Language switcher.
- Quote basket icon with count.
- Request Quote CTA.

### 8.2 Buttons

Primary button:

- Navy background.
- White text.
- Gold hover/border accent.

Secondary button:

- White background.
- Navy text.
- Subtle border.

Gold accent button:

- Gold background.
- Navy text.
- Use only for high-value CTA.

### 8.3 Product Cards

Product cards should include:

- Large product image area.
- Brand badge.
- Category badge.
- Product name.
- Arabic name when RTL is active.
- Short specs.
- Origin / packaging / MOQ row.
- Target market badges.
- View Details CTA.
- Add to Quote CTA.

Card style:

- White background.
- Thin border.
- Subtle shadow.
- Rounded corners.
- Hover lift.

### 8.4 Category Cards

Category cards should include:

- Icon or photo.
- Category name.
- Product count.
- Short description.
- CTA arrow.

Required category cards:

- Perfumes & Fragrance.
- Cosmetics & Personal Care.
- Consumer Goods.
- Furniture & Decor.
- Packaging & Retail Packs.

### 8.5 Brand Cards

Create brand cards for:

- Areej Al Alam Tourism.
- Depalma Consumer Goods.
- Depalma Furniture & Decor.

Brand cards should include:

- Logo placeholder / brand mark area.
- Brand name.
- Business role.
- Link to related products or market story.

### 8.6 Quote Basket

Quote basket should feel like a B2B inquiry tool, not a retail shopping cart.

Use labels:

- Quote Basket.
- Inquiry List.
- Add to Quote.
- Request Quotation.

Avoid labels:

- Buy Now.
- Checkout.
- Pay.
- Cart total.

### 8.7 Forms

Forms must be:

- Clean.
- Business-oriented.
- Not too long visually.
- Sectioned if needed.
- With clear success state.

---

## 9. Imagery Direction

Use images that feel:

- Product-focused.
- Consumer goods retail packs.
- Perfume and cosmetics packaging.
- Furniture and decor showroom/product shots.
- Clean warehouse/logistics/product displays.
- International trade.

Avoid:

- Random stock office photos.
- Overly generic handshake images.
- Dark low-quality images.
- Product images with inconsistent backgrounds.
- Industrial products unrelated to Areej’s visible product families.

---

## 10. Required UI Sections

Stitch/v0 should include these sections with high polish:

1. Header / navigation.
2. Product-first hero.
3. Large catalog search.
4. Trust stats strip.
5. Product categories grid.
6. Featured products.
7. Quote basket / inquiry process.
8. Group brands section.
9. Markets section.
10. Services section.
11. Product listing page.
12. Category landing page.
13. Product detail page.
14. Request quote form page.
15. Contact section/footer.

---

## 11. UX Rules

- The user must see product-related actions above the fold.
- Do not hide products behind corporate text.
- The catalog must be accessible within one click from the homepage.
- Every product card must have Add to Quote.
- Every product detail page must have a Request Quote panel.
- Every page should include a final conversion CTA.
- Mobile navigation must be simple.
- Arabic layout must not feel like a translated English layout; it must feel native RTL.
- Mock data must match Areej’s visible business areas: consumer products, perfumes, cosmetics, furniture, decor, and brand development.

---

## 12. Visual References to Borrow From

### Exportaj

Borrow:

- Product category structure.
- Catalog-first logic.
- Multi-language feel.
- B2B product browsing.

### Silk

Borrow:

- Premium global business feel.
- B2B navigation.
- Markets/services credibility.
- Catalog entry point.

Do not copy either visual design directly. Create a unique Areej identity.

---

## 13. Tailwind Token Suggestion

```ts
colors: {
  areej: {
    navy: {
      950: '#071525',
      900: '#0B1F35',
      800: '#102B46',
    },
    blue: {
      700: '#0E3A66',
    },
    gold: {
      600: '#B8893B',
      500: '#C99A49',
      400: '#D8B46A',
    },
    cream: '#F8F4EC',
    sand: '#EFE6D8',
  },
  depalma: {
    red: '#E21B1B',
    blue: '#1E88E5',
  }
}
```

---

## 14. Quality Bar

The final UI should look like a serious GCC B2B platform that can be sent to a real company decision maker.

It must not look like:

- A generic v0 landing page.
- A retail ecommerce store.
- A company profile with one small product section.
- A random product marketplace with unrelated categories.

The strongest visual message should be:

> Areej is an established import and marketing group with product families, brands, and a clear B2B quote journey.
