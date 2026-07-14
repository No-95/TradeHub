type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: 'Initial Inquiry',
    description:
      'Submit your interest through our corporate form or direct outreach. Our partnership team acknowledges receipt within 48 hours.',
  },
  {
    title: 'Strategic Evaluation',
    description:
      'We conduct a structured assessment of alignment, market potential, and synergy with existing HDP Holdings verticals.',
  },
  {
    title: 'Framework & Proposal',
    description:
      'Tailored partnership proposals, term sheets, and governance frameworks are prepared for mutual review.',
  },
  {
    title: 'Execution & Onboarding',
    description:
      'Finalize agreements, integrate systems, and launch the partnership with dedicated onboarding support.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Partnership Onboarding Pipeline
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A clear, four-stage path from first contact to successful execution.
          </p>
        </div>
        <ol className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col">
              <div className="flex items-center gap-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold leading-7 text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-[3.25rem]">
                {step.description}
              </p>
              {index !== steps.length - 1 && (
                <span
                  className="absolute left-5 top-10 hidden h-full w-px bg-slate-200 sm:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
