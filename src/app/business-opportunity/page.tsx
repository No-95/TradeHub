import Hero from "./components/Hero";
import OpportunityPillars from "./components/OpportunityPillars";
import WhyPartner from "./components/WhyPartner";
import ActiveTracks from "./components/ActiveTracks";
import ProcessTimeline from "./components/ProcessTimeline";
import ContactForm from "./components/ContactForm";
import BusinessOpportunityClient from "./components/BusinessOpportunityClient";

export const metadata = {
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
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <BusinessOpportunityClient />
    </main>
  );
}
