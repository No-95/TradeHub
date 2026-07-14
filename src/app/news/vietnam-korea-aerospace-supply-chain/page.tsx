import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vietnam-Korea Aerospace Supply Chain | HDP HOLDINGS",
  description:
    "How Vietnam is integrating into Korea’s aerospace supply chain and what it means for component manufacturers, investors, and technology transfer.",
  openGraph: {
    title: "Vietnam-Korea Aerospace Supply Chain | HDP HOLDINGS",
    description:
      "How Vietnam is integrating into Korea’s aerospace supply chain and what it means for component manufacturers, investors, and technology transfer.",
    url: "https://www.hdpholdings.com/news/vietnam-korea-aerospace-supply-chain",
    siteName: "HDP Holdings",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.hdpholdings.com/news/vietnam-korea-aerospace-supply-chain",
  },
};

export default function VietnamKoreaAerospaceSupplyChainPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <section className="bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#005DA4] hover:text-[#004a8c]"
          >
            <span aria-hidden="true">←</span>
            Back to News
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Industry Insight
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Vietnam-Korea Aerospace Supply Chain
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              As Korean aerospace primes expand Southeast Asian sourcing, Vietnam is
              becoming a credible Tier-2 and Tier-3 manufacturing base. This article
              examines the capabilities, gaps, and deal pathways for suppliers and
              investors.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
              <span>July 13, 2026</span>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-3xl space-y-6 text-neutral-700 leading-relaxed">
            <p>
              Korea’s aerospace sector has steadily regionalized procurement, and
              Vietnam is no longer just a peripheral option. With improved
              certification readiness, growing precision-machining capacity, and
              stronger IP frameworks, Vietnamese firms are entering supply chains
              that once centered almost exclusively on domestic Korean providers.
            </p>
            <p>
              For HDP Holdings clients, this shift creates two practical
              opportunities: component export partnerships, and strategic
              co-investment in near-border industrial zones that meet aerospace
              vendor approval timelines.
            </p>
            <p>
              We continue to track qualification milestones, joint-venture
              structures, and incentive windows in both countries. If you want a
              tailored market-entry brief, reach out to our investment promotion
              team.
            </p>
            <p>
              The commercial aerospace value chain depends on predictability. Prime
              manufacturers need suppliers that can hold tolerance, repeat processes,
              and deliver traceable quality data. For decades, Korean primes built
              that reliability through dense domestic clusters. More recently, they
              have broadened sourcing to reduce cost, hedge logistics risk, and serve
              global platforms built outside Korea.
            </p>
            <p>
              Vietnam offers something increasingly rare in Southeast Asia: a
              combinable mix of mechanical manufacturing heritage, improving
              certification discipline, and government support for advanced industry.
              Provinces such as Binh Duong, Dong Nai, and Bac Ninh have accumulated
              aerospace-feasible expertise through automotive, precision equipment,
              and electronics contract manufacturing. That foundation matters
              because aerospace buyers do not move capacity lightly; they move it
              when existing suppliers can demonstrate calibration discipline,
              material traceability, and environmental controls.
            </p>
            <p>
              HDP Holdings works with Korean primes and Vietnamese manufacturers on
              the three translation layers that usually determine whether a fit
              remains theoretical or becomes contractual: technical capability
              mapping, vendor approval coaching, and incentive structuring. Each
              layer requires different partners, timelines, and risk allocation.
              Without a coordinated approach, companies waste six to twelve months
              navigating qualification requirements that could be pre-assessed with
              the right factory audit and documentation support.
            </p>
            <p>
              From an investor’s perspective, aerospace supply chain participation
              should be evaluated as a multi-year capability build rather than a
              single sales cycle. Initial contracts are usually small, focused on
              non-critical structural components, brackets, harness components, or
              machining subassemblies. The value lies in using those contracts to
              upgrade quality systems, secure approvals, and earn larger subsequent
              allocations.越南 industrial zones with bonded logistics, test-lab
              access, and workforce training programs can shorten that trajectory.
            </p>
            <p>
              We are also watching technology-transfer arrangements more actively.
              Korean firms are willing to bring process technology into Vietnam when
              local ownership structures, land access, and tax stabilization can be
              aligned early. Joint ventures, long-term offtake agreements, and
              engineering service contracts are the most common structures. Each has
              distinct implications for IP protection, profit repatriation, and
              operational control. Our investment promotion team evaluates those
              trade-offs with clients before term sheets are drafted.
            </p>
            <p>
              If you are a component manufacturer interested in Korean aerospace
              primes, an industrial zone operator looking to attract aerospace
              tenants, or an investor assessing sector-specific exposure in Vietnam,
              we can prepare a tailored market-entry brief. Contact our investment
              promotion team to start the conversation.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#005DA4] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004a8c]"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
