import Script from 'next/script'
import { 
  organizationSchema, 
  personSchema, 
  serviceSchema, 
  websiteSchema 
} from '@/lib/seo'

interface StructuredDataProps {
  schemas?: ('organization' | 'person' | 'service' | 'website' | 'all')[]
}

type SchemaType = 'organization' | 'person' | 'service' | 'website' | 'all'

export function StructuredData({ schemas = ['all'] }: StructuredDataProps) {
  const shouldInclude = (type: string) => 
    schemas.includes('all') || schemas.includes(type as SchemaType)

  const allSchemas = []
  
  if (shouldInclude('organization')) allSchemas.push(organizationSchema)
  if (shouldInclude('person')) allSchemas.push(personSchema)
  if (shouldInclude('service')) allSchemas.push(serviceSchema)
  if (shouldInclude('website')) allSchemas.push(websiteSchema)

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
} 