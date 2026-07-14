'use client';

import Hero from "../components/Hero";
import OpportunityPillars from "../components/OpportunityPillars";
import WhyPartner from "../components/WhyPartner";
import ActiveTracks from "../components/ActiveTracks";
import ProcessTimeline from "../components/ProcessTimeline";
import ContactForm from "../components/ContactForm";

export default function BusinessOpportunityClient() {
  return (
    <>
      <Hero />
      <OpportunityPillars />
      <WhyPartner />
      <ActiveTracks />
      <ProcessTimeline />
      <ContactForm />
    </>
  );
}
