import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: {
    default: "SecureGuard Insurance - Protect What Matters Most",
    template: "%s | SecureGuard Insurance",
  },
  description:
    "Comprehensive insurance coverage with personalized service and unmatched reliability. Auto, Home, Health, and Business insurance solutions with 24/7 support and competitive rates.",
  keywords: [
    "insurance",
    "auto insurance",
    "home insurance",
    "health insurance",
    "business insurance",
    "car insurance",
    "life insurance",
    "property insurance",
    "liability coverage",
    "insurance quotes",
  ],
  authors: [{ name: "SecureGuard Insurance" }],
  creator: "SecureGuard Insurance",
  publisher: "SecureGuard Insurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://secureguard-insurance.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://secureguard-insurance.vercel.app",
    siteName: "SecureGuard Insurance",
    title: "SecureGuard Insurance - Protect What Matters Most",
    description:
      "Comprehensive insurance coverage with personalized service and unmatched reliability. Get your free quote today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SecureGuard Insurance - Comprehensive Coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureGuard Insurance - Protect What Matters Most",
    description: "Comprehensive insurance coverage with personalized service and unmatched reliability.",
    images: ["/og-image.png"],
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "SecureGuard Insurance",
              description: "Comprehensive insurance coverage with personalized service and unmatched reliability.",
              url: process.env.NEXT_PUBLIC_APP_URL || "https://secureguard-insurance.vercel.app",
              telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(555) 123-4567",
              email: process.env.NEXT_PUBLIC_EMAIL || "info@secureguard.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "123 Insurance Way",
                addressLocality: process.env.NEXT_PUBLIC_CITY || "Insurance City",
                addressRegion: process.env.NEXT_PUBLIC_STATE || "IC",
                postalCode: process.env.NEXT_PUBLIC_ZIP || "12345",
                addressCountry: "US",
              },
              openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-17:00", "Su 10:00-16:00"],
              sameAs: [
                "https://www.facebook.com/secureguardinsurance",
                "https://www.twitter.com/secureguardins",
                "https://www.linkedin.com/company/secureguard-insurance",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Insurance Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Auto Insurance",
                      description: "Comprehensive vehicle protection with competitive rates",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Home Insurance",
                      description: "Protect your home and belongings with comprehensive coverage",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Health Insurance",
                      description: "Affordable health plans with extensive networks",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Insurance",
                      description: "Comprehensive business protection solutions",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
