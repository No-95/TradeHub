"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe, Clock } from "lucide-react";

type ContactFormInput = {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
};

type ContactTranslations = {
  contactUs: string;
  heroTitle: string;
  heroDescription: string;
  email: string;
  emailAddress: string;
  emailNote: string;
  phone: string;
  phoneNumber: string;
  phoneNote: string;
  office: string;
  officeLocation: string;
  officeNote: string;
  languages: string;
  languagesSupported: string;
  inquiryTitle: string;
  inquiryDescription: string;
  sendInquiry: string;
  sending: string;
  notReadyTitle: string;
  notReadyDescription: string;
  emailUsDirectly: string;
  callSupport: string;
};

type ContactFormProps = {
  contact?: ContactTranslations;
};

const FALLBACK_CONTACT: ContactTranslations = {
  contactUs: "Contact Us",
  heroTitle: "Let's talk about your next move.",
  heroDescription: "Whether you're exploring a new market, scaling exports, or looking for a trade partner with real execution capability—we're ready to help.",
  email: "Email",
  emailAddress: "contact@hdp.vn",
  emailNote: "We reply within 2 business days.",
  phone: "Phone",
  phoneNumber: "+84 900 000 000",
  phoneNote: "Mon–Fri, 09:00–18:00 ICT",
  office: "Office",
  officeLocation: "Ho Chi Minh City, Vietnam",
  officeNote: "By appointment for client meetings.",
  languages: "Languages",
  languagesSupported: "English / Vietnamese / Korean / Chinese",
  inquiryTitle: "Send an inquiry",
  inquiryDescription: "Tell us about your market, timeline, and priorities.",
  sendInquiry: "Send inquiry",
  sending: "Sending...",
  notReadyTitle: "Not ready to write yet?",
  notReadyDescription: "Book a short intro call or request our capability brief.",
  emailUsDirectly: "Email us directly",
  callSupport: "Call support",
};

export default function ContactForm({ contact = FALLBACK_CONTACT }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormInput>({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const validate = (): string | null => {
    if (!form.name.trim()) return "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid work email.";
    if (!form.inquiry) return "Please select an inquiry type.";
    if (!form.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus("success");
      setForm({ name: "", email: "", company: "", inquiry: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900">
        <img
          src="/contact-hero/hero.png"
          alt="Contact HDP HOLDINGS"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
              {contact.contactUs}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              {contact.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {contact.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-brand/10 bg-brand-muted p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Mail className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{contact.email}</p>
                    <p className="mt-1 text-sm text-neutral-600">{contact.emailAddress}</p>
                    <p className="mt-1 text-xs text-neutral-500">{contact.emailNote}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand/10 bg-brand-muted p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{contact.phone}</p>
                    <p className="mt-1 text-sm text-neutral-600">{contact.phoneNumber}</p>
                    <p className="mt-1 text-xs text-neutral-500">{contact.phoneNote}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand/10 bg-brand-muted p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <MapPin className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{contact.office}</p>
                    <p className="mt-1 text-sm text-neutral-600">{contact.officeLocation}</p>
                    <p className="mt-1 text-xs text-neutral-500">{contact.officeNote}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand/10 bg-brand-muted p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Globe className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{contact.languages}</p>
                    <p className="mt-1 text-sm text-neutral-600">{contact.languagesSupported}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-brand/10 bg-white p-8 shadow-sm md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Clock className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900">{contact.inquiryTitle}</h2>
                    <p className="text-sm text-neutral-500">
                      {contact.inquiryDescription}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-900">
                        Full name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-900">
                        Work email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-900">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-semibold text-neutral-900">
                        Inquiry type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        required
                        value={form.inquiry}
                        onChange={(e) => setForm((f) => ({ ...f, inquiry: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="">Select an inquiry type</option>
                        <option value="trade-inquiry">Trade Inquiry</option>
                        <option value="partnership">Partnership / JV</option>
                        <option value="investment">Investment & Funding</option>
                        <option value="media">Media / Speaking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-neutral-900">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="Share your priorities, markets, and timelines..."
                      />
                    </div>
                  </div>

                  {status === "success" && (
                    <p className="text-sm text-emerald-700">
                      Thank you. Our team will review your inquiry and reply within two business days.
                    </p>
                  )}
                  {status === "error" && error && (
                    <p className="text-sm text-red-700">{error}</p>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-neutral-500">By submitting, you agree to our handling of your contact details for this inquiry.</p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        contact.sending ?? "Sending..."
                      ) : (
                        <>
                          {contact.sendInquiry}
                          <Send className="h-4 w-4" strokeWidth={1.8} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                {contact.notReadyTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base text-neutral-600">
                {contact.notReadyDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href="mailto:contact@hdp.vn"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                {contact.emailUsDirectly}
              </a>
              <a
                href="tel:+849****0000"
                className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-muted"
              >
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                {contact.callSupport}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
