'use client';

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const business =
    (translations[lang].businessOpportunity as NonNullable<
      typeof translations[typeof lang]["businessOpportunity"]
    >) ?? translations.ENG.businessOpportunity;

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">{business.heroHeading1}</span>
            <span className="block text-blue-400">{business.heroHeading2}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            {business.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-8 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              {business.primaryCta}
            </a>
            <a
              href="#openings"
              className="rounded-md border border-slate-600 px-8 py-3 text-center text-base font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 transition-colors"
            >
              {business.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
