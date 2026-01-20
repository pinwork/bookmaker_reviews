import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion, getArticleBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchema } from '@/utils/seo';

interface PageProps {
  params: Promise<{ region: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return {};
  }

  const article = getArticleBySlug(slug, region);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const article = getArticleBySlug(slug, region);

  if (!article) {
    return notFound();
  }

  const siteConfig = getSiteConfig(region);
  const articleUrl = siteConfig ? `${siteConfig.url}/${region}/guides/${slug}` : '';
  const jsonLd = siteConfig ? generateArticleSchema(article, articleUrl, siteConfig) : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <main className="max-w-4xl mx-auto p-8 font-sans">
        <h1 className="text-4xl font-black text-gray-900 mb-4">{article.h1}</h1>
        <p className="text-xl text-gray-600">{article.intro.content}</p>
      </main>
    </>
  );
}
