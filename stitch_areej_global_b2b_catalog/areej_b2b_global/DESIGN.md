---
name: Areej B2B Global
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#44474c'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#525f72'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f1c2d'
  on-primary-container: '#778599'
  inverse-primary: '#bac7dd'
  secondary: '#7e5708'
  on-secondary: '#ffffff'
  secondary-container: '#ffc974'
  on-secondary-container: '#795203'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1c17'
  on-tertiary-container: '#86847d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3fa'
  primary-fixed-dim: '#bac7dd'
  on-primary-fixed: '#0f1c2d'
  on-primary-fixed-variant: '#3b485a'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#f3be6a'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#e6e2da'
  tertiary-fixed-dim: '#c9c6bf'
  on-tertiary-fixed: '#1c1c17'
  on-tertiary-fixed-variant: '#484741'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
  cream: '#F8F4EC'
  sand: '#EFE6D8'
  slate-text-muted: '#374151'
  gold-light: '#D8B46A'
  success: '#0F766E'
  danger: '#DC2626'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  quote-button:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  section-padding-desktop: 80px
  section-padding-mobile: 48px
  gutter: 24px
  card-gap: 32px
---

## Brand & Style

The design system is engineered to position the product as a premium, global B2B trade platform specializing in the GCC and international markets. The brand personality is **mature, authoritative, and product-centric**, moving away from a traditional corporate profile toward a high-utility commercial catalog.

The chosen design style is **Corporate / Modern with Subtle Tactile Accents**. It leverages the clean, structural reliability of modern SaaS platforms while incorporating regional luxury through warm gold accents and "glass" surface tiers. The interface prioritizes clarity and efficiency, ensuring that product discovery and "Request Quote" conversion paths are frictionless.

**Design Principles:**
- **Product-First:** Minimize corporate fluff; maximize visual real estate for product imagery and specifications.
- **Trust-Based:** Use deep navy and stable typography to evoke long-term business reliability.
- **Bilingual Native:** Design with 1:1 parity between English (LTR) and Arabic (RTL) layouts, ensuring typographic balance across both scripts.

## Colors

The palette is rooted in a **Deep Navy** primary that provides a professional, stable foundation. **Warm Gold** is used strategically as a commercial accent for high-value actions and decorative markers, signifying premium quality and success.

**Usage Guidelines:**
- **Primary (Deep Navy):** Reserved for headers, footers, primary text, and high-contrast section backgrounds.
- **Accent (Warm Gold):** Used exclusively for primary CTAs (Request Quote), active states, and premium icons. Never use for long-form body text.
- **Backgrounds:** Utilize **Cream** and **Sand** for section-level differentiation to avoid a sterile "pure white" look, creating a warmer, more sophisticated browsing environment.
- **Text:** High-contrast Slate (#111827) for headings; muted Slate (#374151) for body copy to reduce eye strain during technical specification reviews.

## Typography

The typography system pairs **Manrope** for headlines with **Inter** for body text. This combination offers a blend of modern geometric elegance (Manrope) and utilitarian clarity (Inter).

**Arabic Implementation:**
- For Arabic scripts, use **IBM Plex Sans Arabic**. It maintains a professional, modern aesthetic that matches the weight and "technical" feel of Inter.
- Maintain a 10-15% increase in line-height for Arabic text to accommodate script descenders and improve legibility.

**Hierarchy Rules:**
- Use **Headline XL** for Hero sections to establish immediate authority.
- **Labels** should be used for product specs (e.g., "Origin: Egypt") in semi-bold to allow for quick scanning in catalog views.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (1280px max-width) to maintain a premium, structured catalog feel. The spacing rhythm is generous, using whitespace to elevate the products.

**Grid & Breakpoints:**
- **Desktop (1024px+):** 12-column grid with 24px gutters. Product listings should typically span 3 or 4 columns.
- **Tablet (768px - 1023px):** 8-column grid. Content should reflow to 2-column product grids.
- **Mobile (Below 768px):** 4-column grid with 16px side margins. Product cards switch to a single-column or tight 2-column format.

**Reflow Logic:**
- In RTL mode, the column order and alignment flip entirely. Ensure that product specifications in tables or lists are right-aligned to match the reading flow.

## Elevation & Depth

Visual hierarchy is achieved through a combination of **Tonal Layering** and **Ambient Shadows**.

- **Surface Tier 1 (Background):** Pure White (#FFFFFF) or Cream (#F8F4EC).
- **Surface Tier 2 (Cards):** Pure White with a 1px border (#E5E7EB) and a "Soft Ambient" shadow.
- **Shadow Character:** Use low-opacity navy-tinted shadows (e.g., `rgba(7, 21, 37, 0.05)`) with a high blur radius (20px-40px) to create a "floating" effect for product cards without appearing heavy or dated.
- **Hover States:** Upon hover, cards should lift slightly (transform Y) and the shadow should deepen, providing a tactile response that encourages interaction.

## Shapes

The design system utilizes a **Rounded** shape language to soften the corporate navy/gold palette and make the platform feel modern and approachable.

- **Standard Elements:** Product cards, input fields, and containers use a base radius of 20px as requested.
- **Interactive Elements:** Buttons utilize a slightly more aggressive roundedness (either 12px or fully pill-shaped) to distinguish them from structural cards.
- **Consistency:** All nested elements (like images inside cards) must follow the container's corner radius, reduced proportionally (typically -4px) to maintain visual harmony.

## Components

### Buttons
- **Primary (Request Quote):** Navy background, white text. On hover, a 2px Gold bottom border or a subtle gold glow.
- **High-Value Accent:** Gold background with Navy text. Reserved for the final conversion point in the quote flow.
- **Secondary:** Transparent background with a Navy border and Navy text.

### Product Cards
- **Image Area:** 1:1 or 4:3 aspect ratio, slightly inset with a light gray or cream background to make product cutouts pop.
- **Badges:** Small, pill-shaped badges for "New" or "Featured," using Gold backgrounds with Navy text.
- **Actions:** A clear "View Details" text link and a prominent "Request Quote" button.

### Input Fields
- **Style:** 20px rounded corners, 1px light gray border (#E5E7EB).
- **Focus State:** Border changes to Navy or Gold with a soft outer glow.
- **Labels:** Floating or top-aligned using the `body-sm` typography level.

### Search & Filters
- **Catalog Search:** A wide, prominent input with a Navy search icon.
- **Filter Chips:** Pill-shaped chips that use Cream backgrounds when inactive and Navy backgrounds when active.

### Request Quote Sidebar
- Stickied on the right side of Product Detail pages (desktop) or anchored to the bottom (mobile). Uses a "Glassmorphic" subtle blur or a high-contrast Navy background to command attention.