'use client';

import { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type PartnershipFormInput = {
  companyName: string;
  corporateEmail: string;
  opportunityType: string;
  message: string;
};

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const business =
    (translations[lang].businessOpportunity as NonNullable<
      typeof translations[typeof lang]["businessOpportunity"]
    >) ?? translations.ENG.businessOpportunity;
  const [form, setForm] = useState<PartnershipFormInput>({
    companyName: '',
    corporateEmail: '',
    opportunityType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const validate = (): string | null => {
    if (!form.companyName.trim()) return business.formErrors.nameRequired;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.corporateEmail)) return business.formErrors.invalidEmail;
    if (!form.opportunityType) return business.formErrors.selectInquiry;
    if (!form.message.trim()) return business.formErrors.messageRequired;
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch("/api/business-opportunity-partnership-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "Unable to submit partnership inquiry");
      }

      setStatus('success');
      setForm({ companyName: '', corporateEmail: '', opportunityType: '', message: '' });
    } catch {
      setError(business.formErrors.submissionError);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {business.contactTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {business.contactDescription}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-16 max-w-xl"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {business.companyLabel} <span className="text-red-600">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, companyName: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder={business.placeholderCompany}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="corporateEmail"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {business.corporateEmailLabel} <span className="text-red-600">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  id="corporateEmail"
                  name="corporateEmail"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.corporateEmail}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, corporateEmail: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder={business.placeholderEmail}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="opportunityType"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {business.opportunityLabel} <span className="text-red-600">*</span>
              </label>
              <div className="mt-2.5">
                <select
                  id="opportunityType"
                  name="opportunityType"
                  required
                  value={form.opportunityType}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, opportunityType: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="">{business.optionSelect}</option>
                  <option value="strategic-partnership">{business.optionStrategic}</option>
                  <option value="distribution">{business.optionDistribution}</option>
                  <option value="investment">{business.optionInvestment}</option>
                  <option value="other">{business.optionOther}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {business.messageLabel} <span className="text-red-600">*</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder={business.placeholderMessage}
                />
              </div>
            </div>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-sm text-emerald-700">
              {business.successMessage}
            </p>
          )}
          {status === 'error' && error && (
            <p className="mt-4 text-sm text-red-700">{error}</p>
          )}
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              {status === 'loading' ? business.submittingButton : business.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
