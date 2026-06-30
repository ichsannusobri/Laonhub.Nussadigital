import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBottomAd from "@/components/ads/StickyBottomAd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LoanHub | Your Trusted Financial Guide",
    template: "%s | LoanHub"
  },
  description: "Expert advice on loans, personal finance, life insurance, mortgages, and achieving financial freedom.",
  keywords: ["loans", "mortgage", "life insurance", "financial freedom", "investing", "credit cards", "wealth management"],
  authors: [{ name: "LoanHub Editorial Team" }],
  openGraph: {
    title: "LoanHub | Your Trusted Financial Guide",
    description: "Expert advice on loans, personal finance, and achieving financial freedom.",
    url: "https://loanhub-example.com",
    siteName: "LoanHub",
    images: [
      {
        url: "https://loanhub-example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LoanHub Cover Image",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanHub | Your Trusted Financial Guide",
    description: "Expert advice on loans, personal finance, and achieving financial freedom.",
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} site-layout`}>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <StickyBottomAd />
      </body>
    </html>
  );
}
