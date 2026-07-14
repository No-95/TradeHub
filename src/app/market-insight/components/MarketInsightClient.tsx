'use client';

import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import LogisticsTicker from './LogisticsTicker';
import ForexWidget from './ForexWidget';
import EcosystemCounter from './EcosystemCounter';
import ArticlesGrid from './ArticlesGrid';
import MarketPulse from './MarketPulse';

export default function MarketInsightClient() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const insight = t.marketInsight;

  const dashboardCopy = {
    title: insight.dashboardTitle,
    description: insight.dashboardDescription,
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <section className="relative overflow-hidden bg-neutral-900">
        <img
          src="/market-insight/hero.png"
          alt="Market insight HDP HOLDINGS"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                {insight.heroLabel}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                {insight.heroTitle}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                {insight.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-white/80"
                >
                  {insight.ctaPrimary}
                </a>
                <a
                  href="/business-opportunity"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {insight.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                    {insight.liveSnapshotLabel}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">{insight.freightIndexLabel}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">4,120</p>
                      <p className="mt-1 text-xs text-emerald-300">+2.4% this week</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">{insight.usdVndPair}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">25,420</p>
                      <p className="mt-1 text-xs text-emerald-300">+0.08%</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">{insight.krwVndPair}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">18.32</p>
                      <p className="mt-1 text-xs text-red-300">-0.12%</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">{insight.weeklyVolumeLabel}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">1,240</p>
                      <p className="mt-1 text-xs text-white/70">{insight.containersLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              {dashboardCopy.title}
            </h2>
            <p className="mt-3 text-lg leading-8 text-neutral-600">
              {dashboardCopy.description}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LogisticsTicker />
            </div>
            <div className="lg:col-span-1">
              <ForexWidget />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-muted py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              {insight.marketPulseTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              {insight.marketPulseDescription}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <MarketPulse />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <EcosystemCounter />
        </div>
      </section>

      <section className="bg-brand-muted py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ArticlesGrid />
        </div>
      </section>

      <section className="bg-brand py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {insight.ctaTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            {insight.ctaDescription}
          </p>
          <a
            href="/business-opportunity"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-brand shadow-sm hover:bg-white/80 transition-colors"
          >
            {insight.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
}
