import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/language-context";
import WaitingScreen from "@/app/waiting-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HDP HOLDINGS | Global Trade & Investment",
    template: "%s | HDP HOLDINGS",
  },
  description:
    "HDP HOLDINGS supports Vietnam market entry, global trade, investment promotion, and B2B programs such as KOFURN 2026. Contact us for trade inquiries, partnership discussions, and market access support.",
  keywords: [
    "HDP HOLDINGS",
    "Vietnam investment",
    "global trade",
    "trade promotion",
    "market entry",
    "B2B program",
    "KOFURN 2026",
    "Vietnam Korea trade",
    "business opportunity",
    "market insight",
  ],
  authors: [{ name: "HDP Holdings" }],
  metadataBase: new URL("https://www.hdpholdings.com"),
  openGraph: {
    title: "HDP HOLDINGS | Global Trade & Investment",
    description:
      "Vietnam market entry, global trade, investment promotion, and B2B programs including KOFURN 2026.",
    url: "https://www.hdpholdings.com",
    siteName: "HDP Holdings",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hdp-logo.png",
        width: 1200,
        height: 630,
        alt: "HDP HOLDINGS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HDP HOLDINGS | Global Trade & Investment",
    description:
      "Vietnam market entry, global trade, investment promotion, and B2B programs including KOFURN 2026.",
    images: ["/hdp-logo.png"],
  },
  alternates: {
    canonical: "https://www.hdpholdings.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <LanguageProvider>
          <Header />
        </LanguageProvider>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WaitingScreen />
      </body>
    </html>
  );
}
