'use client';

import { motion, useReducedMotion } from 'motion/react';

type CounterProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

function AnimatedNumber({ end, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="tabular-nums"
    >
      {prefix}
      {end.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </motion.span>
  );
}

const metrics = [
  { label: 'Gross Ecosystem Value Tracked', value: 15, prefix: '$', suffix: 'M+', decimals: 0 },
  { label: 'Vetted Enterprise Suppliers', value: 500, prefix: '', suffix: '+', decimals: 0 },
  { label: 'Active Cross-Border Corridors', value: 12, prefix: '', suffix: '+', decimals: 0 },
];

export default function EcosystemCounter() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Ecosystem Scale
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Measurable network effects across trade corridors, supplier ecosystems, and enterprise pipelines.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl border border-brand/10 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <p className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                <AnimatedNumber
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
