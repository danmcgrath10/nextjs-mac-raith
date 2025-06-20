// Internal linking utility
export function generateInternalLinks() {
  return [
    {
      href: "/#about",
      text: "About Mac Raith",
      description: "Learn about professional audio engineer Mac Raith from Boston"
    },
    {
      href: "/#services",
      text: "Mixing & Mastering Services",
      description: "Professional audio mixing and mastering services for all genres"
    },
    {
      href: "/#portfolio",
      text: "Portfolio",
      description: "Listen to Mac Raith's latest professional audio work"
    },
    {
      href: "/#contact",
      text: "Contact",
      description: "Get in touch for your next project with Mac Raith"
    },
    {
      href: "/privacy",
      text: "Privacy Policy",
      description: "How we protect your personal information and musical content"
    },
    {
      href: "/terms",
      text: "Terms of Service",
      description: "Service agreements and project processes"
    },
    {
      href: "/cookies",
      text: "Cookie Policy",
      description: "Cookie usage and privacy settings"
    }
  ]
}

// Generate keyword variations for long-tail SEO
export function generateKeywordVariations(baseKeywords: string[]) {
  const locationModifiers = ["Boston", "Massachusetts", "MA", "USA", "online", "remote"]
  const serviceModifiers = ["professional", "experienced", "expert", "top", "certified", "quality"]
  const actionModifiers = ["services", "engineer", "specialist", "studio", "mixing", "mastering"]
  
  const variations: string[] = []
  
  baseKeywords.forEach(keyword => {
    // Add location variations
    locationModifiers.forEach(location => {
      variations.push(`${keyword} ${location}`)
      variations.push(`${keyword} in ${location}`)
    })
    
    // Add service quality variations
    serviceModifiers.forEach(modifier => {
      variations.push(`${modifier} ${keyword}`)
    })
    
    // Add action variations
    actionModifiers.forEach(action => {
      variations.push(`${keyword} ${action}`)
    })
  })
  
  return [...baseKeywords, ...variations]
}

// Local business schema for geographic SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
      "@id": "https://macraithmusic.com/#localbusiness",
    "name": "Mac Raith Audio Engineering", 
    "description": "Professional audio engineering services by Mac Raith based in Boston, Massachusetts",
    "url": "https://macraithmusic.com",
  "email": "collab@macraithmusic.com",
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
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    }
  ],
  "serviceType": "Audio Engineering",
  "priceRange": "$150-$500+",
  "paymentAccepted": ["PayPal", "Venmo", "Credit Card"],
  "currenciesAccepted": "USD",
  "openingHours": "Mo-Fr 09:00-18:00",
}

// Music industry specific keywords
export const musicIndustryKeywords = [
  "mixing engineer",
  "mastering engineer",
  "audio engineer",
  "mixing and mastering engineer",
  "professional mixing",
  "professional mastering",
  "audio mixing services",
  "audio mastering services",
  "song mixing",
  "track mastering",
  "beat mixing",
  "vocal mixing",
  "instrumental mixing",
  "hip hop mixing",
  "pop mixing",
  "rock mixing",
  "indie mixing",
  "electronic mixing",
  "mixing and mastering",
  "radio ready mixing",
  "streaming optimization",
  "loudness mastering",
  "stem mastering",
  "analog mixing",
  "digital mixing",
  "mix engineer",
  "master engineer",
  "Boston mixing engineer",
  "Massachusetts audio engineer",
  "home studio mixing",
  "project studio mastering",
  "online mixing",
  "remote mixing",
  "mixing services",
  "mastering services",
  "audio post production",
  "music engineering",
  "audio restoration",
  "mix consultation"
]

// Technical SEO checklist
export const seoChecklist = {
  technical: {
    sitemap: "✅ XML sitemap generated",
    robots: "✅ Robots.txt configured",
    ssl: "✅ HTTPS enabled",
    mobile: "✅ Mobile-first responsive design",
    speed: "✅ Performance optimized",
    schema: "✅ Structured data implemented",
    meta: "✅ Meta tags optimized",
    canonical: "✅ Canonical URLs set"
  },
  content: {
    headings: "✅ Proper heading hierarchy (H1-H6)",
    keywords: "✅ Target keywords optimized",
    alt_text: "✅ Image alt text added",
    internal_links: "✅ Internal linking structure",
    content_quality: "✅ High-quality, relevant content",
    faq: "✅ FAQ schema implemented"
  },
  performance: {
    core_vitals: "✅ Core Web Vitals optimized",
    images: "✅ Image optimization (WebP/AVIF)",
    caching: "✅ Browser caching enabled",
    compression: "✅ Gzip/Brotli compression",
    cdn: "✅ Content delivery optimization",
    minification: "✅ CSS/JS minification"
  },
  social: {
    open_graph: "✅ Open Graph meta tags",
    social_links: "✅ Social media profiles linked",
    sharing: "✅ Social sharing buttons"
  }
} 