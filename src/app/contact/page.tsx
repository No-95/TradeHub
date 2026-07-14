import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact Us | HDP HOLDINGS",
  description:
    "Get in touch with HDP HOLDINGS for trade inquiries, partnership discussions, and market access support.",
  openGraph: {
    title: "Contact Us | HDP HOLDINGS",
    description:
      "Reach out for trade inquiries, partnership discussions, and market access support.",
    url: "https://www.hdpholdings.com/contact",
    siteName: "HDP Holdings",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.hdpholdings.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <ContactForm />
    </main>
  );
}
