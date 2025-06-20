import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { GA_TRACKING_ID } from "@/lib/analytics";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = generateSEO({
  title: "Mac Raith - Professional Audio Engineer",
  description: "Mac Raith delivers professional audio engineering from his home studio in Boston. Transform your music today. Serving artists across the US.",
  keywords: [
    "mixing engineer",
    "mastering engineer", 
    "audio mixing services",
    "audio mastering services",
    "professional mixing",
    "professional mastering",
    "music production",
    "audio engineering",
    "music producer",
    "Mac Raith",
    "audio astronaut",
    "Boston mixing engineer",
    "Massachusetts audio engineer",
    "mixing and mastering engineer",
    "remote mixing services",
    "online mastering"
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
