'use client';

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

type ValueProp = {
  heading: string;
  description: string;
  metric?: string;
};

const valuePropKeys = [
  {
    heading: "why1Heading",
    description: "why1Description",
    metric: "why1Metric",
  },
  {
    heading: "why2Heading",
    description: "why2Description",
    metric: "why2Metric",
  },
  {
    heading: "why3Heading",
    description: "why3Description",
    metric: "why3Metric",
  },
] as const;

export default function WhyPartner() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const business =
    (translations[lang].businessOpportunity as NonNullable<
      typeof translations[typeof lang]["businessOpportunity"]
    >) ?? translations.ENG.businessOpportunity;

  const valueProps: ValueProp[] = valuePropKeys.map((item) => ({
    heading: business[item.heading],
    description: business[item.description],
    metric: item.metric ? business[item.metric] : undefined,
  }));

  return (
    <section className="bg-slate-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {business.whyTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            {business.whyDescription}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {valueProps.map((prop) => (
            <div
              key={prop.heading}
              className="relative rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-sm"
            >
              {prop.metric && (
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {prop.metric}
                </p>
              )}
              <h3 className="mt-3 text-lg font-semibold leading-8 text-white">
                {prop.heading}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
