import { Breadcrumbs } from './breadcrumbs'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: Array<{
    label: string
    href?: string
    current?: boolean
  }>
  children?: React.ReactNode
}

export function PageHeader({ title, description, breadcrumbs, children }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 md:py-8">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}
          
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-foreground sm:truncate sm:text-3xl sm:tracking-tight">
                {title}
              </h1>
              {description && (
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {description}
                </p>
              )}
            </div>
            {children && (
              <div className="mt-4 flex md:ml-4 md:mt-0">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 