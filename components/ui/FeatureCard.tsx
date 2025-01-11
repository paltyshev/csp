import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  className?: string
  children?: React.ReactNode
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  href,
  className,
  children
}: FeatureCardProps) => {
  const CardWrapper = href ? Link : 'div'
  const wrapperProps = href ? { href } : {}

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        'group block h-full rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all',
        href && 'hover:border-[var(--primary)] hover:shadow-lg',
        className
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary-light)] p-2">
        <Icon className="h-6 w-6 text-[var(--primary)]" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mb-4 text-[var(--muted-foreground)]">{description}</p>
      {children}
    </CardWrapper>
  )
}