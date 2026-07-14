"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Clock, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type ContactFormInput = {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
};

const FALLBACK_CONTACT = {
  contactUs: "Contact Us",
  heroTitle: "Let's talk about your next move.",
  heroDescription:
    "Whether you're exploring a new market, scaling exports, or looking for a trade partner with real execution capability—we're ready to help.",
  email: "Email",
  emailAddress: "business@hdpholdings.com.vn",
  emailNote: "We reply within 2 business days.",
  phone: "Phone",
  phoneNumber: "(+84) 869 010 169",
  phoneNote: "Mon–Fri, 09:00–18:00 ICT",
  office: "Office",
  officeLocation: "Hà Nội, Việt Nam",
  officeNote: "By appointment for client meetings.",
  languages: "Languages",
  languagesSupported: "Tiếng Việt / Tiếng Anh / Tiếng Hàn",
  inquiryTitle: "Send an inquiry",
  inquiryDescription: "Tell us about your market, timeline, and priorities.",
  sendInquiry: "Send inquiry",
  sending: "Sending...",
  notReadyTitle: "Not ready to write yet?",
  notReadyDescription: "Book a short intro call or request our capability brief.",
  emailUsDirectly: "Email us directly",
  callSupport: "Call support",
  successMessage:
    "Thank you. Our team will review your inquiry and reply within two business days.",
  formDisclaimer:
    "By submitting, you agree to our handling of your contact details for this inquiry.",
  formErrors: {
    nameRequired: "Name is required.",
    invalidEmail: "Please enter a valid work email.",
    selectInquiry: "Please select an inquiry type.",
    messageRequired: "Message is required.",
    submissionError: "Something went wrong. Please try again or contact us directly.",
  },
};

const uiByLang: Record<string, {
  labelName: string;
  labelEmail: string;
  labelCompany: string;
  labelInquiry: string;
  labelMessage: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderCompany: string;
  placeholderMessage: string;
  optionSelect: string;
}> = {
  VIE: {
    labelName: "Họ và tên",
    labelEmail: "Email công việc",
    labelCompany: "Công ty",
    labelInquiry: "Loại yêu cầu",
    labelMessage: "Tin nhắn",
    placeholderName: "Họ và tên",
    placeholderEmail: "email@company.com",
    placeholderCompany: "Tên công ty",
    placeholderMessage: "Chia sẻ thị trường, thời gian và ưu tiên của bạn...",
    optionSelect: "Chọn loại yêu cầu",
  },
  KR: {
    labelName: "이름",
    labelEmail: "업무 이메일",
    labelCompany: "회사",
    labelInquiry: "문의 유형",
    labelMessage: "메시지",
    placeholderName: "이름",
    placeholderEmail: "email@company.com",
    placeholderCompany: "회사 이름",
    placeholderMessage: "시장, 일정 및 우선순위를 알려주세요...",
    optionSelect: "문의 유형 선택",
  },
  ENG: {
    labelName: "Full name",
    labelEmail: "Work email",
    labelCompany: "Company",
    labelInquiry: "Inquiry type",
    labelMessage: "Message",
    placeholderName: "Your name",
    placeholderEmail: "you@company.com",
    placeholderCompany: "Company name",
    placeholderMessage: "Share your priorities, markets, and timelines...",
    optionSelect: "Select an inquiry type",
  },
};

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const contact = t.contact ?? translations.ENG.contact ?? FALLBACK_CONTACT;
  const ui = uiByLang[lang] ?? uiByLang.ENG;
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
    if (!form.name.trim()) return FALLBACK_CONTACT.formErrors.nameRequired;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return FALLBACK_CONTACT.formErrors.invalidEmail;
    if (!form.inquiry) return FALLBACK_CONTACT.formErrors.selectInquiry;
    if (!form.message.trim()) return FALLBACK_CONTACT.formErrors.messageRequired;
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
      const response = await fetch("/contact/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", inquiry: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : FALLBACK_CONTACT.formErrors.submissionError);
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
                    <p className="text-sm text-neutral-500">{contact.inquiryDescription}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-900">
                        {ui.labelName} <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder={ui.placeholderName}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-900">
                        {ui.labelEmail} <span className="text-red-600">*</span>
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
                        placeholder={ui.placeholderEmail}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-900">
                        {ui.labelCompany}
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder={ui.placeholderCompany}
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-semibold text-neutral-900">
                        {ui.labelInquiry} <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        required
                        value={form.inquiry}
                        onChange={(e) => setForm((f) => ({ ...f, inquiry: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="">{ui.optionSelect}</option>
                        <option value="trade-inquiry">Trade Inquiry</option>
                        <option value="partnership">Partnership / JV</option>
                        <option value="investment">Investment & Funding</option>
                        <option value="media">Media / Speaking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-neutral-900">
                        {ui.labelMessage} <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder={ui.placeholderMessage}
                      />
                    </div>
                  </div>

                  {status === "success" && (
                    <p className="text-sm text-emerald-700">{contact.successMessage}</p>
                  )}
                  {status === "error" && error && (
                    <p className="text-sm text-red-700">{error}</p>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-neutral-500">{contact.formDisclaimer}</p>
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
              <p className="mt-3 max-w-xl text-base text-neutral-600">{contact.notReadyDescription}</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href={`mailto:${contact.emailAddress}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                {contact.emailUsDirectly}
              </a>
              <a
                href={`tel:${contact.phoneNumber.replace(/[^0-9+]/g, '')}`}
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
