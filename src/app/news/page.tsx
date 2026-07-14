import { Metadata } from "next";
import NewsGrid from "./components/NewsGrid";

export const metadata: Metadata = {
  title: "News & Updates | HDP HOLDINGS",
  description:
    "Latest updates from HDP Holdings on trade promotion, partnerships, and international market expansion.",
  openGraph: {
    title: "News & Updates | HDP HOLDINGS",
    description:
      "Latest updates from HDP Holdings on trade promotion, partnerships, and international market expansion.",
    url: "https://www.hdpholdings.com/news",
    siteName: "HDP Holdings",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.hdpholdings.com/news",
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <NewsGrid />
        </div>
      </section>
    </main>
  );
}
