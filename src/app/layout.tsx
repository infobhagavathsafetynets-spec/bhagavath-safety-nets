import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import SideFloatingContact from "@/components/shared/SideFloatingContact";
import CookieConsent from "@/components/ui/CookieConsent";
import { generateLocalBusinessSchema } from "@/utils/schema";
import { SITE_URL } from "@/utils/constants";
import { GA4_ID, ADS_ID, SEARCH_CONSOLE_VERIFICATION } from "@/utils/analytics";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A2C2A",
};

export const metadata: Metadata = {
  title: {
    default: "Safety Nets & Invisible Grills in Bengaluru | Bhagavath",
    template: "%s | Bhagavath Safety Nets",
  },
  description:
    "Balcony safety nets, SS316 invisible wire grills & ceiling cloth drying hangers installed in Bengaluru. Free doorstep measurement & 10-year warranty.",
  keywords: [
    "safety nets in Bengaluru",
    "invisible grills in Bengaluru",
    "balcony safety nets",
    "pigeon nets",
    "cloth hangers in Bengaluru",
    "Bhagavath Safety Nets",
    "balcony safety nets Bengaluru",
    "invisible grills Bengaluru",
  ],
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",
  verification: {
    google: "VCYBi4SFvPqOOSHzVR7GJnj30WHh7w35YhdJpt9TZ8A",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills in Bengaluru | Bhagavath",
    description:
      "Balcony safety nets, SS316 marine invisible wire grills & ceiling cloth drying systems installed across Bengaluru. Free doorstep inspection & 10-year warranty.",
    url: SITE_URL,
    siteName: "Bhagavath Safety Nets",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Safety Nets & Invisible Grills in Bengaluru - Bhagavath Safety Nets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills in Bengaluru | Bhagavath",
    description:
      "Balcony safety nets, SS316 marine invisible wire grills & ceiling cloth drying systems installed across Bengaluru.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="VCYBi4SFvPqOOSHzVR7GJnj30WHh7w35YhdJpt9TZ8A" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${dmSans.variable} antialiased bg-white text-[#3A3A3A] flex flex-col min-h-screen selection:bg-[#E0A526] selection:text-[#1A1A1A]`}
      >
        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Google Analytics 4 Tag - Loaded only when NEXT_PUBLIC_GA4_ID is configured */}
        {GA4_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            />
            <Script
              id="google-analytics-ga4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA4_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Google Ads Tag - Loaded only when NEXT_PUBLIC_ADS_ID is configured */}
        {ADS_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
            />
            <Script
              id="google-ads-tag"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ADS_ID}');
                `,
              }}
            />
          </>
        )}

        <Navbar />
        <main className="flex-grow pt-[96px] sm:pt-[102px] lg:pt-[108px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <SideFloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
