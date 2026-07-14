'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';

type Article = {
  title: string;
  description: string;
  category: string;
  readTime: string;
};

const articles: Article[] = [
  {
    category: 'Macro Trade Dynamics',
    title: 'Q3 Global Trade Policy Review: Tariff Trajectory & Market Exposure',
    description:
      'A concise review of shifting trade policy vectors across Asia-Pacific and North America, with implications for import/export corridors.',
    readTime: '8 min read',
  },
  {
    category: 'Supply Chain & Digital Automation',
    title: 'Automation Readiness in Mid-Market Supply Chains',
    description:
      'Practical patterns for deploying digital automation in logistics, warehouse ops, and supplier workflow orchestration.',
    readTime: '12 min read',
  },
  {
    category: 'Quarterly Market Forecasts',
    title: 'Cross-Border Demand Outlook – Q4 Planning Window',
    description:
      'Leading indicators, order-book momentum, and corridor-specific demand forecasts to inform procurement and inventory strategy.',
    readTime: '10 min read',
  },
];

export default function ArticlesGrid() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const insight = t.marketInsight;
  const heading = insight.reportsTitle;
  const description = insight.reportsDescription;
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-300"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-indigo-700">{article.category}</p>
            <h3 className="mt-3 text-base font-semibold leading-7 text-slate-900">{article.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-700">
              <span className="text-xs font-medium text-slate-500">{article.readTime}</span>
              <ArrowRight className="h-4 w-4 text-indigo-700" aria-hidden="true" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
