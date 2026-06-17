import { cn } from "@/lib/utils"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description?: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  className?: string
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "bg-[#071525] px-4 py-20 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-[#D8B46A]">{description}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="rounded-full bg-[#B8893B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#C99A49]"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#071525]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
