import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export const viewport: Viewport = {
  themeColor: "#0284c7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  category: "Plumbing Service",
  keywords: [
    "Jasa Pembersihan Pipa Tersumbat Bandung",
    "detox pipa kotor",
    "jasa detox pipa kotor di bandung",
    "Jasa Detox Pipa Kotor Bandung",
    "pipa mampet",
    "WC mampet",
    "wastafel mampet bandung",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  other: {
    "geo.region": "ID-JB",
    "geo.placename": siteConfig.address.city,
    "geo.position": `${siteConfig.address.geo.latitude};${siteConfig.address.geo.longitude}`,
    "ICBM": `${siteConfig.address.geo.latitude}, ${siteConfig.address.geo.longitude}`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/logo%20landscape.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.domain}/logo%20landscape.png`],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=3" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        {/* Injected Global LocalBusiness & WebSite JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema, webSiteSchema]),
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <FloatingWhatsApp />
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  );
}
