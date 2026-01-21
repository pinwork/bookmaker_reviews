import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isValidRegion, getBettorResources } from '@/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

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

  const resources = getBettorResources(region);

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Bettor Resources</h1>
        <p className="text-xl text-gray-600">
          Reviews and guides for third-party betting tools and services — everything that helps you bet smarter.
        </p>
      </div>

      {resources.length > 0 ? (
        <div className="space-y-4">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/${region}/bettor-resources/${resource.slug}`}
              className="block group"
            >
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {resource.h1}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {resource.metaDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Read article
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
          <p className="text-lg text-slate-500">
            Coming soon — reviews of betting tools and services
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Odds comparison • Live scores • Calculators • Tipster platforms
          </p>
        </div>
      )}
    </main>
  );
}
