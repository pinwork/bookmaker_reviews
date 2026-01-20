import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isValidRegion, getArticlesByCollection } from '@/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Betting Guides | FreeBetGeek',
  description: 'Expert betting guides covering bonuses, betting shops, responsible gambling and more.',
};

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const articles = getArticlesByCollection('guides', region);

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Betting Guides</h1>
        <p className="text-xl text-gray-600">
          Expert guides covering bonuses, betting shops, responsible gambling and more.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${region}/guides/${article.slug}`}
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
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Read guide
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
            Coming soon — expert betting guides
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Bonuses • Betting Shops • Responsible Gambling • Industry Reports
          </p>
        </div>
      )}
    </main>
  );
}
