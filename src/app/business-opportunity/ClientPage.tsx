"use client";

import Hero from "./components/Hero";
import OpportunityPillars from "./components/OpportunityPillars";
import WhyPartner from "./components/WhyPartner";
import ActiveTracks from "./components/ActiveTracks";
import ProcessTimeline from "./components/ProcessTimeline";
import ContactForm from "./components/ContactForm";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ClientPage() {
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
