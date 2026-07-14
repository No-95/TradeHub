import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HDP Holdings Korea-Vietnam Aerospace Investment Promotion | HDP HOLDINGS",
  description:
    "HDP Holdings advances Korea-Vietnam aerospace investment promotion, supporting joint ventures, supplier development, and market-entry execution.",
  openGraph: {
    title: "HDP Holdings Korea-Vietnam Aerospace Investment Promotion | HDP HOLDINGS",
    description:
      "HDP Holdings advances Korea-Vietnam aerospace investment promotion, supporting joint ventures, supplier development, and market-entry execution.",
    url: "https://www.hdpholdings.com/news/hdp-holdings-korea-vietnam-aerospace-investment-promotion",
    siteName: "HDP Holdings",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.hdpholdings.com/news/hdp-holdings-korea-vietnam-aerospace-investment-promotion",
  },
};

export default function KoreaVietnamAerospaceInvestmentPromotionPage() {
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
              Investment Promotion
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              HDP Holdings Korea-Vietnam Aerospace Investment Promotion
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              HDP Holdings is deepening Korea-Vietnam aerospace investment promotion
              through joint-venture structuring, supplier development, and hands-on
              market-entry support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
              <span>July 13, 2026</span>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-3xl space-y-6 text-neutral-700 leading-relaxed">
            <p>
              Aerospace investment promotion between Korea and Vietnam is moving from
              rhetoric to execution. HDP Holdings is working with Korean primes,
              Vietnamese industrial zones, and government stakeholders to reduce the
              friction between deal intention and operational reality.
            </p>
            <p>
              Our work covers site qualification, incentive navigation, JV partner
              matching, and post-entry operational support. For aerospace suppliers,
              this means a clearer path from qualification to scaled production.
            </p>
            <p>
              If you are evaluating Vietnam as an aerospace manufacturing or
              investment destination, our team can prepare a tailored opportunity
              brief and introduction roadmap.
            </p>
            <p>
              Aerospace investment promotion is not about generating press releases;
              it is about closing the distance between strategic interest and actual
              production. Korean aerospace primes have watched Vietnam mature from a
              low-cost assembly option into a credible platform for more complex
              manufacturing. That evolution matters because it changes the risk
              calculation for joint ventures, long-term offtake agreements, and
              capital expenditure for local content expansion.
            </p>
            <p>
              HDP Holdings supports clients through four connected stages: market
              validation, site and incentive selection, partner and customer
              introduction, and post-entry operational support. Market validation
              begins with demand mapping. Not every Korean aerospace supplier should
              enter Vietnam, and not every Vietnamese manufacturer is ready for
              aerospace qualification. We help clients assess fit before significant
              capital or legal commitments are made.
            </p>
            <p>
              Site and incentive selection is often the most underestimated stage.
              Industrial zones in Vietnam differ widely in utilities consistency,
              bond logistics access, training partnerships, and local administrative
              support. For aerospace suppliers, availability of metrology services,
              chemical handling, and environmental compliance infrastructure can
              determine whether a site achieves vendor approval within twelve months
              or stretches beyond twenty-four months. We evaluate those criteria
              alongside standard financial incentives so clients can compare sites on
              total cost of delivery, not headline tax rates alone.
            </p>
            <p>
              Joint-venture structuring requires careful attention to control,
              governance, and exit. Korean buyers typically enter Vietnam with three
              goals in mind: cost competitiveness, supply continuity, and technology
              localization. Vietnamese partners often bring land access, licensing
              relationships, and workforce capability. A workable joint-venture model
              should align those incentives before term sheets are signed, not after.
              Our team has reviewed dozens of structures and can identify which deal
              forms best protect IP, secure management rights, and preserve
              operational flexibility.
            </p>
            <p>
              Post-entry operational support is where most market-entry promises are
              tested. New facilities face workforce onboarding, equipment
              qualification, supplier development, and regulatory reporting. For
              aerospace manufacturers, the margin for error is smaller than in many
              other industries. Quality deviations, customs delays, or labor
              disruptions can damage relationships with primes that have long memory
              and strict scorecards. HDP Holdings provides ongoing governance support,
              escalation contacts, and operational troubleshooting to reduce those
              risks.
            </p>
            <p>
              We are also tracking several macro trends that will shape Korea-Vietnam
              aerospace connectivity over the next three to five years. These include
              the growth of MRO activity in Vietnam, rising interest in sustainable
              aviation materials, and expanding government support for high-value
              manufacturing. Each trend creates different opportunities and risk
              profiles, which is why we prefer scenario planning over single-point
              forecasts when advising clients.
            </p>
            <p>
              If you are evaluating Vietnam as an aerospace manufacturing or
              investment destination, our team can prepare a tailored opportunity
              brief and introduction roadmap. Contact our investment promotion team to
              start the conversation.
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
