'use client';

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type Step = {
  title: string;
  description: string;
};

const stepKeys = [
  "step1Title",
  "step2Title",
  "step3Title",
  "step4Title",
] as const;
const stepDescKeys = [
  "step1Description",
  "step2Description",
  "step3Description",
  "step4Description",
] as const;

export default function ProcessTimeline() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const business =
    (translations[lang].businessOpportunity as NonNullable<
      typeof translations[typeof lang]["businessOpportunity"]
    >) ?? translations.ENG.businessOpportunity;

  const steps: Step[] = stepKeys.map((key, idx) => ({
    title: business[key],
    description: business[stepDescKeys[idx]],
  }));

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {business.processTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {business.processDescription}
          </p>
        </div>
        <ol className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col">
              <div className="flex items-center gap-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold leading-7 text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-[3.25rem]">
                {step.description}
              </p>
              {index !== steps.length - 1 && (
                <span
                  className="absolute left-5 top-10 hidden h-full w-px bg-slate-200 sm:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
