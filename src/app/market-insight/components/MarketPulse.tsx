'use client';

import { motion, useReducedMotion } from 'motion/react';

type PulsePoint = {
  label: string;
  value: string;
  change: string;
  direction: 'up' | 'down' | 'flat';
};

const pulses: PulsePoint[] = [
  { label: 'Asia-Pacific export volume', value: '+4.2%', change: 'vs last month', direction: 'up' },
  { label: 'Freight utilization rate', value: '87.4%', change: 'capacity index', direction: 'up' },
  { label: 'Supplier lead times', value: '18.6 days', change: 'avg inbound', direction: 'down' },
  { label: 'Port congestion score', value: 'Low', change: 'Southeast Asia', direction: 'flat' },
];

function TrendIcon({ direction }: { direction: PulsePoint['direction'] }) {
  if (direction === 'up') return <span aria-hidden="true">▲</span>;
  if (direction === 'down') return <span aria-hidden="true">▼</span>;
  return <span aria-hidden="true">◆</span>;
}

export default function MarketPulse() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pulses.map((item, index) => (
        <motion.div
          key={item.label}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: reduce ? 0 : 0.6,
            delay: reduce ? 0 : index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">{item.label}</p>
          <div className="mt-3 flex items-baseline justify-between">
            <p className="text-2xl font-semibold text-neutral-900">{item.value}</p>
            <span
              className={`text-xs font-medium ${
                item.direction === 'up'
                  ? 'text-emerald-700'
                  : item.direction === 'down'
                    ? 'text-red-700'
                    : 'text-neutral-600'
              }`}
            >
              <TrendIcon direction={item.direction} /> {item.change}
            </span>
          </div>
          <div className="mt-4 flex h-10 items-end gap-1">
            <span className="h-3 w-1 rounded-full bg-brand/25" />
            <span className="h-5 w-1 rounded-full bg-brand/35" />
            <span className="h-4 w-1 rounded-full bg-brand/30" />
            <span className="h-7 w-1 rounded-full bg-brand/45" />
            <span className="h-6 w-1 rounded-full bg-brand/50" />
            <span className="h-8 w-1 rounded-full bg-brand" />
            <span className="h-9 w-1 rounded-full bg-brand" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
