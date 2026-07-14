import { Metadata } from 'next';
import MarketInsightClient from './components/MarketInsightClient';

export const metadata: Metadata = {
  title: 'Global B2B Market Insights & Analytics | HDP Holdings',
  description:
    'Access freight benchmarks, currency corridors, ecosystem metrics, and quarterly trade forecasts to inform your B2B decision-making.',
  openGraph: {
    title: 'Global B2B Market Insights & Analytics | HDP Holdings',
    description:
      'Freight benchmarks, currency monitoring, and quarterly trade forecasts for global B2B growth.',
    url: 'https://www.hdpholdings.com/market-insight',
    siteName: 'HDP Holdings',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.hdpholdings.com/market-insight',
  },
};

export const revalidate = 3600;

export default function MarketInsightPage() {
  return <MarketInsightClient />;
}
