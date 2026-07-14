'use client';

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type Pillar = {
  title: string;
  description: string;
  benefits: string[];
};

const pillarKeys = [
  "pillar1Title",
  "pillar2Title",
  "pillar3Title",
] as const;
const pillarDescKeys = [
  "pillar1Description",
  "pillar2Description",
  "pillar3Description",
] as const;
const pillarBenefitPrefixes = [
  "pillar1Benefit",
  "pillar2Benefit",
  "pillar3Benefit",
] as const;

export default function OpportunityPillars() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const business =
    (translations[lang].businessOpportunity as NonNullable<
      typeof translations[typeof lang]["businessOpportunity"]
    >) ?? translations.ENG.businessOpportunity;

  const pillars: Pillar[] = pillarKeys.map((key, idx) => ({
    title: business[key],
    description: business[pillarDescKeys[idx]],
    benefits: [1, 2, 3].map((n) => business[`${pillarBenefitPrefixes[idx]}${n}` as keyof typeof business] as string),
  }));

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {business.pillarsTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {business.pillarsDescription}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold leading-8 text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {pillar.description}
              </p>
              <ul className="mt-6 space-y-3">
                {pillar.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-x-3 text-sm leading-7 text-slate-700"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
