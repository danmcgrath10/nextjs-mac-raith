import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mac Raith - Professional Mixing & Mastering Engineer",
    template: "%s | Mac Raith Audio",
  },
  description: "Professional mixing and mastering services by Mac Raith. Elevate your music with industry-standard audio engineering and artistic vision. Serving artists worldwide.",
  keywords: ["mixing engineer", "mastering engineer", "music production", "audio engineering", "music artist", "recording studio"],
  authors: [{ name: "Mac Raith" }],
  creator: "Mac Raith",
  publisher: "Mac Raith Audio",
  metadataBase: new URL("https://macraith.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://macraith.com",
    title: "Mac Raith - Professional Mixing & Mastering Engineer",
    description: "Professional mixing and mastering services by Mac Raith. Elevate your music with industry-standard audio engineering and artistic vision.",
    siteName: "Mac Raith Audio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mac Raith - Professional Mixing & Mastering Engineer",
    description: "Professional mixing and mastering services by Mac Raith. Elevate your music with industry-standard audio engineering.",
    creator: "@macraith",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
