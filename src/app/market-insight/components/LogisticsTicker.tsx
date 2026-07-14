'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';

type DataPoint = {
  month: string;
  index: number;
  benchmark: number;
};

const data: DataPoint[] = [
  { month: 'Jan', index: 3780, benchmark: 3750 },
  { month: 'Feb', index: 3850, benchmark: 3800 },
  { month: 'Mar', index: 3720, benchmark: 3780 },
  { month: 'Apr', index: 3895, benchmark: 3820 },
  { month: 'May', index: 4010, benchmark: 3950 },
  { month: 'Jun', index: 4120, benchmark: 4080 },
];

export default function LogisticsTicker() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const insight = t.marketInsight;
  const dateLabels =
    lang === 'VIE'
      ? ['1月', '2月', '3月', '4月', '5月', '6月']
      : lang === 'KR'
        ? ['1월', '2월', '3월', '4월', '5월', '6월']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return (
    <div className="rounded-none border border-brand/10 bg-white">
      <div className="border-b border-brand/10 px-6 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
          {insight.logisticsTitle}
        </p>
        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-3xl font-semibold tracking-tight text-neutral-900">{insight.logisticsValue}</p>
          <p className="text-xs font-medium text-brand">{insight.logisticsChange}</p>
        </div>
        <p className="text-right text-xs text-neutral-500">{insight.logisticsUnit}</p>
      </div>

      <div className="h-48 w-full px-2 pb-2 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 12, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#94a3b8' }}
              dy={4}
              tickFormatter={(_, idx) => dateLabels[idx] ?? _}
            />
            <Tooltip
              cursor={{ stroke: '#e2e8f0', strokeDasharray: '4 4' }}
              contentStyle={{ borderRadius: 0, border: '1px solid #e2e8f0', padding: 8, fontSize: 12 }}
              labelStyle={{ color: '#334155', fontWeight: 600, marginBottom: 2 }}
            />
            <Line
              type="monotone"
              dataKey="index"
              stroke="#0072C6"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 3, strokeWidth: 1.5, fill: '#0072C6' }}
            />
            <Line
              type="monotone"
              dataKey="benchmark"
              stroke="#cbd5e1"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
