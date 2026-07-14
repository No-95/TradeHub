import { Metadata } from 'next';
import LogisticsTicker from './components/LogisticsTicker';
import ForexWidget from './components/ForexWidget';
import EcosystemCounter from './components/EcosystemCounter';
import ArticlesGrid from './components/ArticlesGrid';
import MarketPulse from './components/MarketPulse';

export const metadata: Metadata = {
  title: 'Global B2B Market Insights & Analytics | HDP Holdings',
  description:
    'Access freight benchmarks, currency corridors, ecosystem metrics, and quarterly trade forecasts to inform your B2B decision-making.',
  openGraph: {
    title: 'Global B2B Market Insights & Analytics | HDP Holdings',
    description:
      'Freight benchmarks, currency monitoring, and quarterly trade forecasts for global B2B growth.',
    url: 'https://www.hdpholdings.com/market-insight',
    siteName: 'HDP Holdings',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.hdpholdings.com/market-insight',
  },
};

export const revalidate = 3600;

export default function MarketInsightPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* Hero */}
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
                Market Intelligence
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                Data shaping cross-border decisions.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Freight benchmarks, currency corridors, and ecosystem metrics updated for operators who move goods and capital.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-white/80"
                >
                  Explore the dashboard
                </a>
                <a
                  href="/business-opportunity"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Partner with HDP Holdings
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                    Live market snapshot
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">Freight index</p>
                      <p className="mt-1 text-2xl font-semibold text-white">4,120</p>
                      <p className="mt-1 text-xs text-emerald-300">+2.4% this week</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">USD/VND</p>
                      <p className="mt-1 text-2xl font-semibold text-white">25,420</p>
                      <p className="mt-1 text-xs text-emerald-300">+0.08%</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">KRW/VND</p>
                      <p className="mt-1 text-2xl font-semibold text-white">18.32</p>
                      <p className="mt-1 text-xs text-red-300">-0.12%</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/65">Weekly volume</p>
                      <p className="mt-1 text-2xl font-semibold text-white">1,240</p>
                      <p className="mt-1 text-xs text-white/70">containers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Dashboard
            </h2>
            <p className="mt-3 text-lg leading-8 text-neutral-600">
              Freight, forex, and ecosystem signals in one view.
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

      {/* Market Pulse */}
      <section className="bg-brand-muted py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Market Pulse
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Network-scale activity measured across trade corridors and supplier pipelines.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <MarketPulse />
          </div>
        </div>
      </section>

      {/* Ecosystem Scale */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <EcosystemCounter />
        </div>
      </section>

      {/* Reports */}
      <section className="bg-brand-muted py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ArticlesGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Act on the data
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Use these signals to start a conversation about distribution, investment, or joint-venture execution.
          </p>
          <a
            href="/business-opportunity"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-brand shadow-sm hover:bg-white/80 transition-colors"
          >
            Explore Business Opportunities
          </a>
        </div>
      </section>
    </main>
  );
}
