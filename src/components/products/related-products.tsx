import { products } from "@/data/products"
import { ProductCard } from "./product-card"

interface RelatedProductsProps {
  categorySlug: string
  currentProductId: string
}

export function RelatedProducts({
  categorySlug,
  currentProductId,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter((p) => p.categorySlug === categorySlug && p.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="bg-[#F8F4EC] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-[#0B1F35]">
          Related Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
