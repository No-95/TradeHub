"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredActivities = [
  {
    title: "Seafood Export Promotion Program",
    summary: "A flagship export promotion program focused on seafood trade opportunities and international market expansion.",
    image: "/featured/seafood-expo.png",
    href: "/seafood-expo",
  },
  {
    title: "Furniture & Wood Industry Trade and Investment Promotion",
    summary: "A promotion program connecting Vietnam's furniture and wood industries with Korean buyers and investment partners.",
    image: "/featured/kofurn.png",
    href: "/global-furniture-business-roadshow",
  },
  {
    title: "Aerospace Supply Chain Integration Program",
    summary: "A strategic initiative to connect Vietnamese manufacturers with aerospace supply chain opportunities.",
    image: "/featured/aerospace.png",
    href: "/coming-soon",
  },
  {
    title: "Machinery & Mechanical Supply Chain Integration",
    summary: "A platform for industry engagement, technology collaboration, and supply chain integration across machinery sectors.",
    image: "/featured/tech.png",
    href: "/coming-soon",
  },
  {
    title: "Busan Seafood Export Promotion Program",
    summary: "A business promotion program centered on seafood export opportunities and B2B networking in Korea.",
    image: "/featured/seafoodexpo2.png",
    href: "/coming-soon",
  },
  {
    title: "Technology Innovation Program",
    summary: "Upcoming initiatives and future programs will be announced here.",
    image: "/featured/tech-innovation.png",
    href: "/coming-soon",
  },
];

export default function FeaturedActivitiesSection() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900">Featured Activities</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-500">
              Explore HDP HOLDINGS’ trade promotion programs, buyer matching initiatives, and sector-specific roadshows.
            </p>
          </div>
          <Link href="/news" className="hidden items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark sm:flex">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredActivities.map((activity) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden bg-gray-50">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900">{activity.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{activity.summary}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
