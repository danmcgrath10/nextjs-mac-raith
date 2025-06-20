// Google Analytics utilities
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export const gtag = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

// Log page views
export const pageview = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Log contact form submissions
export const trackContactForm = (method: string) => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: method
  })
}

// Log portfolio interactions
export const trackPortfolioClick = (projectName: string) => {
  event({
    action: 'portfolio_click',
    category: 'engagement',
    label: projectName
  })
}

// Log service inquiries
export const trackServiceInquiry = (service: string) => {
  event({
    action: 'service_inquiry',
    category: 'conversion',
    label: service
  })
}

// Core Web Vitals tracking
export const trackWebVitals = (metric: {
  name: string
  value: number
  id: string
}) => {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  })
} 