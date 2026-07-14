"use client";

import { Metadata } from "next";
import Hero from "./components/Hero";
import OpportunityPillars from "./components/OpportunityPillars";
import WhyPartner from "./components/WhyPartner";
import ActiveTracks from "./components/ActiveTracks";
import ProcessTimeline from "./components/ProcessTimeline";
import ContactForm from "./components/ContactForm";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Global B2B Business Opportunities | HDP Holdings",
  description:
    "Explore partnership openings, joint ventures, and institutional investment tracks with HDP Holdings. Global distribution, supply chain integration, and strategic venturing.",
  keywords: [
    "HDP Holdings",
    "B2B opportunities",
    "joint venture",
    "distribution partners",
    "supply chain",
    "business partnership",
    "institutional investment",
  ],
  openGraph: {
    title: "Global B2B Business Opportunities | HDP Holdings",
    description:
      "Partner with HDP Holdings for global growth. Explore joint ventures, distribution networks, and investment tracks across Southeast Asia, East Asia, and digital infrastructure.",
    url: "https://www.hdpholdings.com/business-opportunity",
    siteName: "HDP Holdings",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.hdpholdings.com/business-opportunity",
    languages: {
      vi: "https://www.hdpholdings.com/vi/business-opportunity",
      en: "https://www.hdpholdings.com/business-opportunity",
    },
  },
};

export default function BusinessOpportunityPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const content = t.businessOpportunity;

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <Hero content={content} />
      <OpportunityPillars content={content} />
      <WhyPartner content={content} />
      <ActiveTracks content={content} />
      <ProcessTimeline content={content} />
      <ContactForm content={content} />
    </main>
  );
}
