import "./globals.css";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
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
      </body>
    </html>
  );
}
