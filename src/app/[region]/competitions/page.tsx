import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isValidRegion, getCompetitionArticles } from '@/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Competition Betting Guides | FreeBetGeek',
  description: 'Expert betting guides for major sports competitions including Premier League, Champions League, and more.',
};

export default async function CompetitionsPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const articles = getCompetitionArticles(region);

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-amber-500" />
          <h1 className="text-4xl font-black text-gray-900">Competition Betting Guides</h1>
        </div>
        <p className="text-xl text-gray-600">
          In-depth betting guides for major sports competitions. Expert analysis, betting strategies, and market insights.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${region}/competitions/${article.slug}`}
              className="block group"
            >
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {article.h1}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.metaDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.quickFacts.slice(0, 3).map((fact, i) => (
                        <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded">
                          {fact.label}: {fact.value}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      Read guide
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
          <p className="text-lg text-slate-500">
            Coming soon — expert competition betting guides
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Premier League, Champions League, World Cup, Euro 2028
          </p>
        </div>
      )}
    </main>
  );
}
