import "./globals.css";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import { cn } from '@/lib/utils'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Durgapur Infra Projects Pvt. Ltd.",
  legalName: "Durgapur Infra Projects Pvt. Ltd.",
  alternateName: "Durgapur Infra",
  url: "https://durgapurinfra.co.in",
  logo: "https://durgapurinfra.co.in/images/brand/logo.png",
  foundingDate: "2016-12-07",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6, Brabourne Road, 3rd Floor, Room 305–306",
      addressLocality: "Kolkata",
      postalCode: "700001",
      addressRegion: "West Bengal",
      addressCountry: "IN"
    }
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9609969999",
      contactType: "sales",
      areaServed: "IN",
      email: "info@durgapurinfra.co.in",
      availableLanguage: ["English", "Hindi", "Bengali"]
    }
  ],
  sameAs: [
    "https://www.facebook.com",
    "https://www.linkedin.com",
    "https://www.instagram.com"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "IndustrialBusiness",
  name: "Durgapur Infra Projects Pvt. Ltd.",
  url: "https://durgapurinfra.co.in",
  telephone: "+91-9609969999",
  email: "info@durgapurinfra.co.in",
  currenciesAccepted: "INR",
  paymentAccepted: "BankTransfer",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Village Bamunara",
    addressLocality: "Durgapur",
    postalCode: "713212",
    addressRegion: "West Bengal",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.5310,
    longitude: 87.2890
  },
  areaServed: ["India", "South Asia"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Precision Ductile Iron Castings",
        category: "Industrial Products",
        description: "Municipal, railway, and custom ductile iron casting solutions."
      }
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Durgapur Infra Projects Pvt. Ltd.",
  url: "https://durgapurinfra.co.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.google.com/search?q=Durgapur+Infra+Projects+{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://durgapurinfra.co.in'),
  title: {
    default: "Durgapur Infra Projects Pvt. Ltd. | Precision Ductile Iron Manufacturing",
    template: "%s | DIPPL"
  },
  description: "Durgapur Infra Projects Pvt. Ltd. specializes in precision ductile iron manufacturing for municipal, railway, and metallurgical applications. Quality castings with 7,200 MTPA capacity in Durgapur, West Bengal.",
  keywords: [
    "ductile iron casting",
    "municipal castings",
    "railway castings",
    "ingot moulds",
    "foundry",
    "iron casting manufacturer",
    "manhole covers",
    "automobile parts",
    "metallurgical castings",
    "precision casting",
    "Durgapur manufacturing",
    "West Bengal foundry",
    "ductile iron",
    "cast iron moulds",
    "infrastructure castings",
    "industrial castings",
    "green sand molding",
    "induction furnace",
    "quality casting",
    "manufacturing facility"
  ],
  authors: [{ name: "Durgapur Infra Projects Pvt. Ltd.", url: "https://durgapurinfra.co.in" }],
  creator: "Durgapur Infra Projects Pvt. Ltd.",
  publisher: "Durgapur Infra Projects Pvt. Ltd.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://durgapurinfra.co.in",
    title: "Durgapur Infra Projects Pvt. Ltd. | Precision Ductile Iron Manufacturing",
    description: "Specializing in precision ductile iron manufacturing for municipal, railway, and metallurgical applications. Quality castings with 7,200 MTPA capacity in Durgapur, West Bengal.",
    siteName: "Durgapur Infra Projects Pvt. Ltd.",
    images: [{
      url: "/images/brand/logo.png",
      width: 1200,
      height: 630,
      alt: "Durgapur Infra Projects Pvt. Ltd. - Precision Ductile Iron Manufacturing",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@durgapurinfra",
    title: "Durgapur Infra Projects Pvt. Ltd. | Precision Ductile Iron Manufacturing",
    description: "Precision ductile iron castings for municipal, railway, and infrastructure leaders across India.",
    images: ["/images/brand/logo.png"]
  },
  alternates: {
    canonical: "https://durgapurinfra.co.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        merriweather.variable
      )}>
        {children}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
      </body>
    </html>
  );
}
