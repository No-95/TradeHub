type Pillar = {
  title: string;
  description: string;
  benefits: string[];
};

const pillars: Pillar[] = [
  {
    title: 'Strategic Partnerships & Joint Ventures',
    description:
      'Accelerate market expansion through operational synergy and aligned strategic interests across geographies.',
    benefits: [
      'Market expansion with localized expertise',
      'Shared operational resources and risk',
      'Long-term revenue-aligned ventures',
    ],
  },
  {
    title: 'Distribution & Supply Chain Alliances',
    description:
      'Leverage international trade networks, optimized logistics infrastructure, and reliable supply chain integration.',
    benefits: [
      'Access to established international trade lanes',
      'Logistics optimization and cost reduction',
      'End-to-end visibility and compliance',
    ],
  },
  {
    title: 'Investment & Venturing',
    description:
      'Participate in B2B digital infrastructure projects and high-growth trade hub scaling initiatives.',
    benefits: [
      'Digital trade platform opportunity',
      'Infrastructure co-investment models',
      'High-growth market exposure',
    ],
  },
];

export default function OpportunityPillars() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Three Pillars of Partnership
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our collaboration framework is built around focused, high-impact
            opportunity verticals designed for scalable B2B outcomes.
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
