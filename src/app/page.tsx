"use client";

import { useState } from "react";
import Link from "next/link";
import FeaturedActivitiesSection from "@/components/FeaturedActivitiesSection";
import PartnerCarousel from "@/components/PartnerCarousel";
import {
  Globe,
  Store,
  Newspaper,
  FileText,
  LineChart,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const noticeItems = [
  { tagKey: "notice", titleKey: "notice1", title: "New market entry guide", date: "2025.07.10" },
  { tagKey: "news", titleKey: "news1", title: "Vietnam-Korea trade update", date: "2025.07.09" },
  { tagKey: "notice", titleKey: "notice2", title: "Overseas center opening", date: "2025.07.08" },
  { tagKey: "news", titleKey: "news2", title: "Investment brief released", date: "2025.07.07" },
  { tagKey: "notice", titleKey: "notice3", title: "Partner program launched", date: "2025.07.06" },
];

export default function KotraHome() {
  const [noticeOpen, setNoticeOpen] = useState(true);
  const [newsOpen, setNewsOpen] = useState(true);
  const { lang } = useLanguage();
  const t = translations[lang];
  const home = t.home;

  const tagLabel = (key: string) => (key === "notice" ? home.notice : home.news);

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-[#002B5C]">
        <img
          src="/contact-hero/homepagehero.png"
          alt="HDP HOLDINGS homepage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#002B5C]/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/80">{home.welcome}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.6rem]">
                {home.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                {home.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/business-opportunity" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#002B5C] transition-colors hover:bg-white/80">
                  {home.exploreTradePrograms}
                </Link>
                <Link href="/market-insight" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  {home.marketEntryGuide}
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/75">
                <div>
                  <span className="block text-2xl font-semibold text-white">{home.overseasCenters}</span>
                  <span className="text-xs text-white/65">{home.overseasCentersLabel}</span>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <span className="block text-2xl font-semibold text-white">{home.tradeExpertise}</span>
                  <span className="text-xs text-white/65">{home.tradeExpertiseLabel}</span>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <span className="block text-2xl font-semibold text-white">{home.clientsServed}</span>
                  <span className="text-xs text-white/65">{home.clientsServedLabel}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/ksmOG4I0tOs"
                  title="HDP HOLDINGS video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-64 w-full md:h-80 lg:h-[420px]"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-full bg-white/5 blur-2xl md:block" />
            </div>
          </div>
        </div>
      </section>

      <FeaturedActivitiesSection />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-100">
              <button
                onClick={() => setNoticeOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-t-2xl border border-brand/10 bg-brand-muted px-6 py-4 text-left"
              >
                <span className="text-base font-semibold text-brand">{home.notice}</span>
                {noticeOpen ? <ChevronDown className="h-4 w-4 text-brand" /> : <ChevronRight className="h-4 w-4 text-brand" />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${noticeOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="divide-y divide-neutral-100">
                  {noticeItems.map((item) => (
                    <li key={item.titleKey} className="px-6 py-3">
                      <a href="#" className="group flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-medium text-white">{tagLabel(item.tagKey)}</span>
                          <span className="text-sm text-neutral-800 group-hover:text-brand transition-colors line-clamp-1">{item.title}</span>
                        </div>
                        <span className="text-xs text-neutral-400 sm:text-right">{item.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-brand/10 px-6 py-3">
                  <Link href="/news" className="flex items-center gap-1 text-xs font-medium text-brand hover:text-brand-dark">
                    {home.viewAll} <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-100">
              <button
                onClick={() => setNewsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-t-2xl border border-neutral-100 bg-white px-6 py-4 text-left"
              >
                <span className="text-base font-semibold text-neutral-900">{home.news}</span>
                {newsOpen ? <ChevronDown className="h-4 w-4 text-neutral-500" /> : <ChevronRight className="h-4 w-4 text-neutral-500" />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${newsOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="divide-y divide-neutral-100">
                  {noticeItems.map((item) => (
                    <li key={item.titleKey} className="px-6 py-3">
                      <a href="#" className="group flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-brand-muted px-2 py-0.5 text-[11px] font-medium text-brand">{tagLabel(item.tagKey)}</span>
                          <span className="text-sm text-neutral-800 group-hover:text-brand transition-colors line-clamp-1">{item.title}</span>
                        </div>
                        <span className="text-xs text-neutral-400 sm:text-right">{item.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-brand/10 px-6 py-3">
                  <Link href="/news" className="flex items-center gap-1 text-xs font-medium text-brand hover:text-brand-dark">
                    {home.viewAll} <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerCarousel />

      <section className="bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="mb-6 text-lg font-semibold text-brand">{home.infoServices}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {[
              { labelKey: "tradeInfo", href: "/market-insight" },
              { labelKey: "investmentInfo", href: "/business-opportunity" },
              { labelKey: "tradeProject", href: "/business-opportunity" },
              { labelKey: "globalWindow", href: "/market-insight" },
              { labelKey: "tradeLeads", href: "/business-opportunity" },
              { labelKey: "newsroom", href: "/news" },
            ].map((item) => (
              <Link
                key={item.labelKey}
                href={item.href}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-brand/10 bg-white p-5 text-center transition-colors hover:border-brand/20 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/5 text-brand">
                  <HelpCircle className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-neutral-800">{home[item.labelKey as keyof typeof home] ?? item.labelKey}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
