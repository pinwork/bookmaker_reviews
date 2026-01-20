import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion } from '@/data';

export const metadata: Metadata = {
  title: 'Bettor Resources | FreeBetGeek',
  description: 'Reviews of third-party betting tools and services. Odds comparison, live scores, calculators, tipster platforms - everything to bet smarter.',
};

export default async function BettorResourcesPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Bettor Resources</h1>
        <p className="text-xl text-gray-600">
          Reviews and guides for third-party betting tools and services — everything that helps you bet smarter.
        </p>
      </div>

      <div className="p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
        <p className="text-lg text-slate-500">
          Coming soon — reviews of betting tools and services
        </p>
        <p className="text-sm text-slate-400 mt-2">
          Odds comparison • Live scores • Calculators • Tipster platforms
        </p>
      </div>
    </main>
  );
}
