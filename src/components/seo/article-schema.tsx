import Script from 'next/script'

interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: string
  url: string
}

export function ArticleSchema({
  headline,
  description,
  image = "/MacRaithSpaceMan-NoBackground.png",
  datePublished,
  dateModified,
  author = "Mac Raith",
  url
}: ArticleSchemaProps) {
  const baseUrl = 'https://macraithmusic.com'
  const fullUrl = `${baseUrl}${url}`
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": [fullImage],
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "@id": "https://macraithmusic.com/#person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://macraithmusic.com/#organization",
      "name": "Mac Raith Audio",
      "logo": {
        "@type": "ImageObject",
        "url": fullImage
      }
    },
    "url": fullUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema)
      }}
    />
  )
} 