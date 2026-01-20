import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStaticPageBySlug, getAllStaticPageSlugs } from '@/data/staticPages';
import { isValidRegion } from '@/data';
import { StaticPageContent } from '@/components/StaticPageContent';

interface PageProps {
  params: Promise<{ region: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;

  const validSlugs = getAllStaticPageSlugs();
  if (!validSlugs.includes(slug) || !isValidRegion(region)) {
    return {};
  }

  const page = getStaticPageBySlug(slug, region);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function StaticPage({ params }: PageProps) {
  const { region, slug } = await params;

  // Only handle known static page slugs
  const validSlugs = getAllStaticPageSlugs();
  if (!validSlugs.includes(slug)) {
    return notFound();
  }

  if (!isValidRegion(region)) {
    return notFound();
  }

  const page = getStaticPageBySlug(slug, region);

  if (!page) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{page.h1}</h1>
        {page.lastUpdated && (
          <p className="text-sm text-gray-500">Last updated: {page.lastUpdated}</p>
        )}
      </header>

      <StaticPageContent content={page.content} />
    </main>
  );
}
