"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type Lang = keyof typeof translations;
type FormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  companyName: string;
  companyType: string;
  employees: string;
  website: string;
  interests: string[];
  participationType: string;
  specialRequests: string;
  agreeTerms: boolean;
  agreeMarketing: boolean;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  companyName: "",
  companyType: "",
  employees: "",
  website: "",
  interests: [] as string[],
  participationType: "",
  specialRequests: "",
  agreeTerms: false,
  agreeMarketing: false,
};

export default function RegisterPage() {
  const { lang } = useLanguage();
  const safeLang: Lang = lang === "VIE" || lang === "KR" ? lang : "ENG";
  const t = translations[safeLang].globalFurnitureRoadshow!.register;
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof FormData, value: unknown) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((current) => {
      const has = current.interests.includes(interest);
      return {
        ...current,
        interests: has ? current.interests.filter((item) => item !== interest) : [...current.interests, interest],
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.agreeTerms) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/global-furniture-business-roadshow/register/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "Unable to submit registration");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-950">{t.successHeading}</h1>
          <p className="mt-4 text-slate-600">{t.successBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/global-furniture-business-roadshow" className="inline-flex justify-center rounded-full bg-amber-600 px-6 py-3 text-white hover:bg-amber-700 transition">
              {t.backToKofurn}
            </Link>
            <Link href="/global-furniture-business-roadshow" className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
              {t.viewProgramInfo}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 sm:px-8 lg:px-12" style={{ backgroundImage: 'url(/kofurn/furniture-roadshow-register-bg.png)', backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/global-furniture-business-roadshow" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition">
            <ArrowLeft className="h-4 w-4" /> {t.backToKofurn}
          </Link>
          <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
            {t.pageTitle}
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-950">{t.formHeading}</h1>
        <p className="mt-3 text-slate-600">{t.formDescription}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.fullName}</span>
              <input
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.email}</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.phone}</span>
              <input
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.position}</span>
              <input
                value={formData.position}
                onChange={(event) => updateField("position", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.companyName}</span>
              <input
                value={formData.companyName}
                onChange={(event) => updateField("companyName", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.companyType}</span>
              <select
                value={formData.companyType}
                onChange={(event) => updateField("companyType", event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              >
                <option value="">{t.companyTypePlaceholder}</option>
                {t.companyTypes.map((type: string) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.employees}</span>
              <input
                value={formData.employees}
                onChange={(event) => updateField("employees", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>{t.website}</span>
              <input
                value={formData.website}
                onChange={(event) => updateField("website", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
              />
            </label>
          </div>

          <div className="space-y-2 text-sm text-slate-700">
            <span>{t.interests}</span>
            <div className="grid gap-3 sm:grid-cols-3">
              {t.interestsList.map((interest: string) => (
                <label key={interest} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                    className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-slate-700">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="space-y-2 text-sm text-slate-700 block">
            <span>{t.preferredParticipation}</span>
            <select
              value={formData.participationType}
              onChange={(event) => updateField("participationType", event.target.value)}
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
            >
              <option value="">{t.preferredParticipationPlaceholder}</option>
              {t.participationTypes.map((type: string) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-700 block">
            <span>{t.specialRequests}</span>
            <textarea
              value={formData.specialRequests}
              onChange={(event) => updateField("specialRequests", event.target.value)}
              rows={4}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500"
            />
          </label>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <label className="inline-flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(event) => updateField("agreeTerms", event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              {t.agreeTerms}
            </label>
            <label className="inline-flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={formData.agreeMarketing}
                onChange={(event) => updateField("agreeMarketing", event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              {t.agreeMarketing}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.agreeTerms}
            className="inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isSubmitting ? t.submitting : t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
