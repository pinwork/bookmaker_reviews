import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion, getGuideBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchemas } from '@/utils/seo';
import {
  ArticleHeader,
  UnifiedComparisonTable,
  GuideSections,
  ArticleFAQ,
  ArticleFooter,
} from '@/components/article';

interface PageProps {
  params: Promise<{ region: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return {};
  }

  const article = getGuideBySlug(slug, region);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const article = getGuideBySlug(slug, region);

  if (!article) {
    return notFound();
  }

  const siteConfig = getSiteConfig(region);
  const articleUrl = siteConfig ? `${siteConfig.url}/${region}/guides/${slug}` : '';
  const schemas = siteConfig ? generateArticleSchemas(article, articleUrl, siteConfig) : [];

  return (
    <>
      {schemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      )}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
        <ArticleHeader
          h1={article.h1}
          introTitle={article.intro.title}
          introContent={article.intro.content}
        />

        {article.comparisonTables?.map((table) => (
          <UnifiedComparisonTable
            key={table.id}
            table={table}
          />
        ))}

        {article.groups && (
          <GuideSections sections={article.groups} />
        )}

        {article.faq && article.faq.length > 0 && (
          <ArticleFAQ faq={article.faq} />
        )}

        <ArticleFooter
          lastUpdated={article.footer?.lastUpdated}
          dataSource={article.footer?.dataSource}
        />
      </main>
    </>
  );
}
