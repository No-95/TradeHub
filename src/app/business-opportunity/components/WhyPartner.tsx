type ValueProp = {
  heading: string;
  description: string;
  metric?: string;
};

const valueProps: ValueProp[] = [
  {
    heading: 'Tech-Driven Infrastructure',
    description:
      'Automated trade platforms, real-time logistics tracking, and integrated digital tooling reduce friction and increase transparency end-to-end.',
    metric: '99.9% platform uptime',
  },
  {
    heading: 'Market Expertise & Compliance',
    description:
      'Deep experience in cross-border trade regulations, customs optimization, and comprehensive risk mitigation frameworks.',
    metric: '20+ regulatory markets',
  },
  {
    heading: 'Proven Track Record',
    description:
      'Consistent delivery of enterprise-scale solutions with measurable KPIs, trusted by global industry leaders.',
    metric: 'Enterprise-grade SLAs',
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-slate-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Partner With HDP Holdings
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            We combine technology, regulatory fluency, and proven execution to
            deliver partnership value that scales.
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
