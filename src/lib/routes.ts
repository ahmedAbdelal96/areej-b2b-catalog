export const routes = {
  home: "/",
  products: "/products",
  productDetail: (slug: string) => `/products/${slug}`,
  categories: (slug: string) => `/categories/${slug}`,
  brands: "/brands",
  markets: "/markets",
  services: "/services",
  about: "/about",
  contact: "/contact",
  requestQuote: "/request-quote",
}

export const categoryRoutes = {
  "perfumes-fragrance": "/categories/perfumes-fragrance",
  "cosmetics-personal-care": "/categories/cosmetics-personal-care",
  "consumer-goods": "/categories/consumer-goods",
  "furniture-decor": "/categories/furniture-decor",
  "packaging-retail-packs": "/categories/packaging-retail-packs",
}

export const marketRoutes = {
  "saudi-arabia": "/markets/saudi-arabia",
  egypt: "/markets/egypt",
  malaysia: "/markets/malaysia",
}
