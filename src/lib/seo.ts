import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  keywords?: string[]
}

export function generateSEO({
  title = "Mac Raith - Professional Audio Engineer",
  description = "Mac Raith delivers professional audio engineering from his home studio in Boston. Transform your music today. Serving artists across the US.",
  image = "/MacRaithSpaceMan-NoBackground.png",
  url = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  keywords = [
    "mixing engineer",
    "mastering engineer", 
    "music production",
    "audio engineering",
    "music producer",
    "Mac Raith",
    "audio astronaut",
    "professional mixing",
    "professional mastering",
    "Boston mixing engineer",
    "Massachusetts audio engineer",
    "mixing and mastering engineer",
    "remote mixing services",
    "online mastering"
  ]
}: SEOProps = {}): Metadata {
  const baseUrl = 'https://macraithmusic.com'
  const fullUrl = `${baseUrl}${url}`
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      type,
      url: fullUrl,
      title,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Mac Raith Audio",
      locale: "en_US",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Structured Data Schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://macraithmusic.com/#organization",
  "name": "Mac Raith Audio",
  "url": "https://macraithmusic.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://macraithmusic.com/MacRaithSpaceMan-NoBackground.png",
    "width": 512,
    "height": 512
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "collab@macraithmusic.com",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dover",
    "addressRegion": "DE",
    "addressCountry": "US"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Boston, MA"
  },
  "sameAs": [
    "https://www.instagram.com/mac_raith/",
    "https://www.youtube.com/@macraithofficial"
  ]
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://macraithmusic.com/#person",
  "name": "Mac Raith",
  "alternateName": "Audio Astronaut",
  "jobTitle": "Professional Audio Engineer",
  "description": "Professional audio engineer based in Boston delivering mixing and mastering services. Specializing in transforming musical visions into professional-quality recordings through expert audio engineering techniques.",
  "url": "https://macraithmusic.com",
  "image": "https://macraithmusic.com/MacRaithSpaceMan-NoBackground.png",
  "worksFor": {
    "@id": "https://macraithmusic.com/#organization"
  },
  "knowsAbout": [
    "Audio Mixing",
    "Audio Mastering", 
    "Music Production",
    "Audio Engineering",
    "Recording",
    "Sound Design",
    "Digital Audio Workstations",
    "Analog Audio Processing"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Audio Engineer",
    "occupationLocation": {
      "@type": "City",
      "name": "Boston, MA"
    }
  },
  "email": "collab@macraithmusic.com"
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://macraithmusic.com/#service",
  "name": "Professional Mixing & Mastering Services",
  "description": "Expert mixing and mastering services for musicians and artists worldwide, specializing in professional audio engineering from Boston",
  "provider": {
    "@id": "https://macraithmusic.com/#organization"
  },
  "serviceType": "Audio Engineering",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Audio Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Audio Mixing",
          "description": "Expert mixing services to transform your raw tracks into a cohesive, professional-sounding mix with depth, clarity, and punch"
        },
        "price": "300",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Audio Mastering",
          "description": "Expert mastering services providing the final polish and optimization for streaming platforms, vinyl, and digital distribution"
        },
        "price": "150",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31"
      }
    ]
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://macraithmusic.com/#website",
  "name": "Mac Raith Audio",
  "description": "Professional mixing and mastering services by Mac Raith, the Audio Astronaut",
  "url": "https://macraithmusic.com",
  "publisher": {
    "@id": "https://macraithmusic.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://macraithmusic.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
} 