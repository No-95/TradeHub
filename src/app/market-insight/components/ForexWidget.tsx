'use client';

import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

type ForexEntry = {
  pair: string;
  rate: string;
  change: string;
  changeDirection: 'up' | 'down' | 'flat';
  volume: string;
  trend: number[];
};

type ForexData = Record<string, ForexEntry>;

const sparklineDataMap: Record<string, ForexEntry['trend']> = {
  'USD/VND': [25.12, 25.18, 25.15, 25.22, 25.30, 25.28, 25.35, 25.40, 25.38, 25.42],
  'KRW/VND': [18.25, 18.28, 18.30, 18.27, 18.31, 18.29, 18.33, 18.30, 18.31, 18.32],
  'USD/CNY': [7.24, 7.25, 7.245, 7.248, 7.25, 7.255, 7.26, 7.258, 7.262, 7.26],
  'USD/HKD': [9.88, 9.90, 9.89, 9.91, 9.92, 9.91, 9.93, 9.92, 9.91, 9.92],
  'CNY/VND': [3.48, 3.49, 3.485, 3.49, 3.495, 3.50, 3.502, 3.498, 3.50, 3.4925],
  'USD/MYR': [1.28, 1.281, 1.282, 1.283, 1.284, 1.285, 1.286, 1.287, 1.288, 1.288],
  'SGD/VND': [18.82, 18.83, 18.84, 18.83, 18.85, 18.84, 18.86, 18.85, 18.84, 18.85],
  'MYR/VND': [1.28, 1.279, 1.278, 1.279, 1.278, 1.277, 1.276, 1.277, 1.276, 1.28],
};

const fallbackData: ForexData = {
  'USD/VND': { pair: 'USD/VND', rate: '25,420.00', change: '+43.03%', changeDirection: 'up', volume: 'High', trend: sparklineDataMap['USD/VND'] },
  'KRW/VND': { pair: 'KRW/VND', rate: '18.32', change: '+42.72%', changeDirection: 'up', volume: 'Medium', trend: sparklineDataMap['KRW/VND'] },
  'USD/CNY': { pair: 'USD/CNY', rate: '7.2600', change: '+40.05%', changeDirection: 'up', volume: 'High', trend: sparklineDataMap['USD/CNY'] },
  'USD/HKD': { pair: 'USD/HKD', rate: '9.9200', change: '+40.03%', changeDirection: 'flat', volume: 'Medium', trend: sparklineDataMap['USD/HKD'] },
  'CNY/VND': { pair: 'CNY/VND', rate: '3,492.50', change: '+40.14%', changeDirection: 'up', volume: 'Medium', trend: sparklineDataMap['CNY/VND'] },
  'USD/MYR': { pair: 'USD/MYR', rate: '1.2880', change: '+40.27%', changeDirection: 'up', volume: 'High', trend: sparklineDataMap['USD/MYR'] },
  'SGD/VND': { pair: 'SGD/VND', rate: '18,850.00', change: '+40.00%', changeDirection: 'flat', volume: 'Low', trend: sparklineDataMap['SGD/VND'] },
  'MYR/VND': { pair: 'MYR/VND', rate: '1.2800', change: '+40.03%', changeDirection: 'down', volume: 'Low', trend: sparklineDataMap['MYR/VND'] },
};

function MiniSparkline({ data, stroke }: { data: number[]; stroke: string }) {
  const points = data.map((v, i) => `${i * 40},${60 - (v - Math.min(...data)) * 500}`).join(' ');
  return (
    <svg viewBox="0 0 360 60" className="h-10 w-full" preserveAspectRatio="none">
      <polyline fill="none" stroke={stroke} strokeWidth="1.5" points={points} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function ForexWidget() {
  const [data, setData] = useState<ForexData>(fallbackData);

  useEffect(() => {
    // Point this to a public financial API or your own proxy when available.
    // Example:
    // fetch('/api/forex')
    //   .then((res) => res.json())
    //   .then(setData)
    //   .catch(() => setData(fallbackData));
    setData(fallbackData);
  }, []);

  const entries = Object.values(data);
  const selected = entries[0];

  return (
    <div className="flex h-full flex-col rounded-none border border-brand/10 bg-white">
      <div className="border-b border-brand/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
            Currency Corridors
          </p>
          <span className="rounded-sm border border-brand/10 bg-brand-muted px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
            {entries.length} pairs
          </span>
        </div>
      </div>
      <div className="flex-none px-6 py-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
            Currency Corridors
          </p>
          <span className="rounded-sm border border-brand/10 bg-brand-muted px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
            {entries.length} pairs
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
          {entries.map((entry) => (
            <div key={entry.pair} className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-neutral-900">{entry.pair}</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                  Vol {entry.volume}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold tracking-tight text-neutral-900">{entry.rate}</p>
                <p
                  className={`text-[11px] font-semibold ${
                    entry.changeDirection === 'up'
                      ? 'text-brand'
                      : entry.changeDirection === 'down'
                        ? 'text-neutral-900'
                        : 'text-neutral-500'
                  }`}
                >
                  {entry.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-brand/10 px-6 py-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
            {selected.pair} - 30-DAY TREND
          </p>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand">Details</span>
        </div>
        <div className="mt-2">
          <MiniSparkline data={selected.trend} stroke="#0072C6" />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-neutral-400">
          <span>03</span>
          <span>05</span>
          <span>07</span>
          <span>09</span>
          <span>11</span>
          <span>13</span>
          <span>15</span>
          <span>17</span>
          <span>19</span>
          <span>21</span>
          <span>23</span>
        </div>
      </div>
    </div>
  );
}
