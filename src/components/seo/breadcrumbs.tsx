import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex" role="navigation">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Home - Mac Raith Audio"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" aria-hidden="true" />
            {item.href && !item.current ? (
              <Link 
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className={item.current ? "text-foreground font-medium" : "text-muted-foreground"}
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 