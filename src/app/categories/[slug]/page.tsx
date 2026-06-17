import { categories } from "@/data/categories"
import { products } from "@/data/products"
import { notFound } from "next/navigation"
import { ProductGrid } from "@/components/products/product-grid"
import { Container } from "@/components/shared/container"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { CTASection } from "@/components/shared/cta-section"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter(
    (p) => p.categorySlug === category.slug
  )

  return (
    <>
      <section className="bg-[#F8F4EC] px-4 py-12">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.name },
            ]}
          />
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-[#0B1F35] sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-4 text-lg text-[#374151]">
              {category.description}
            </p>
            <div className="mt-4 text-sm text-[#6B7280]">
              {category.count}+ {category.name}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white px-4 py-12">
        <Container>
          <ProductGrid products={categoryProducts} />
        </Container>
      </section>

      <CTASection
        title="Looking for Something Specific?"
        description="Contact our team for custom sourcing requests."
        primaryCta={{
          label: "Request Quote",
          href: "/request-quote",
        }}
      />
    </>
  )
}
