import Link from "next/link"

export type BreadcrumbItem = {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-[#6B7280]">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-[#6B7280] transition-colors hover:text-[#0B1F35]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[#0B1F35]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
