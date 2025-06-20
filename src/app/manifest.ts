import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mac Raith - Professional Audio Engineer ',
    short_name: 'Mac Raith Audio',
    description: 'Mac Raith delivers professional audio engineering from his home studio in Boston. Transform your music today. Serving artists across the US.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#e87a2b',
    orientation: 'portrait-primary',
    categories: ['music', 'entertainment', 'professional'],
    lang: 'en-US',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    shortcuts: [
      {
        name: 'View Portfolio',
        short_name: 'Portfolio',
        description: 'Listen to Mac Raith\'s latest audio engineering work',
        url: '/#portfolio',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }]
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch with Mac Raith for your next project',
        url: '/#contact',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }]
      },
      {
        name: 'Services',
        short_name: 'Services',
        description: 'Explore professional mixing and mastering services',
        url: '/#services',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }]
      }
    ]
  }
} 