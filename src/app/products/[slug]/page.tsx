import { products } from "@/data/products"
import { notFound } from "next/navigation"
import { ProductDetailHero } from "@/components/products/product-detail-hero"
import { ProductSpecsTable } from "@/components/products/product-specs-table"
import { RelatedProducts } from "@/components/products/related-products"
import { Container } from "@/components/shared/container"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.category, href: `/categories/${product.categorySlug}` },
    { label: product.name },
  ]

  return (
    <>
      <section className="bg-white px-4 py-6 border-b border-[#E5E7EB]">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </section>

      <ProductDetailHero product={product} />

      <section className="bg-white px-4 py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-bold text-[#0B1F35]">
            Specifications
          </h2>
          <ProductSpecsTable product={product} />
        </Container>
      </section>

      <RelatedProducts
        categorySlug={product.categorySlug}
        currentProductId={product.id}
      />
    </>
  )
}
