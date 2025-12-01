import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config";

const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: "shivshakti",
  description: siteConfig.description,
  keywords: [
    "hotel",
    "shivshakti",
    "hospitality",
    "comfort living",
    "pleasant ambience",
    "warm welcoming",
    "breathtaking views",
    "restful",
    "enjoyable",
    "hotel shivshakti",
    "hotel shivshakti hospitality",
    "hotel shivshakti comfort living",
    "hotel shivshakti pleasant ambience",
    "hotel shivshakti warm welcoming",
    "hotel shivshakti breathtaking views",
    "hotel shivshakti restful",
    "hotel shivshakti enjoyable",
    "shivshakti hotel",
    "shivshakti hotel hospitality",
    "shivshakti hotel comfort living",
    "shivshakti hotel pleasant ambience",
    "shivshakti hotel warm welcoming",
    "shivshakti hotel breathtaking views",
    "shivshakti hotel restful",
    "shivshakti hotel enjoyable",
  ],
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.url,
    },
  ],
  creator: siteConfig.creator.name,
  manifest: `/manifest.webmanifest`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator.twitter,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      "/favicon.ico",
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      "/favicon.ico",
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
    },
    media: {
      "only screen and (max-width: 600px)": siteConfig.url,
    },
  },
  appLinks: {
    web: {
      url: siteConfig.url,
      should_fallback: true,
    },
  },
  category: "hotel",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full antialiased", philosopher.className)}
      >
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
