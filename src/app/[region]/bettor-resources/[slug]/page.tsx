import path from 'path';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion, getBettorResourceBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchemas } from '@/utils/seo';
import { getPartnerLogoPath, getJpgBackgroundColor } from '@/utils/images';
import {
  ArticleHeader,
  UnifiedComparisonTable,
  ArticleGroups,
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

  const article = getBettorResourceBySlug(slug, region);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

export default async function BettorResourcePage({ params }: PageProps) {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const article = getBettorResourceBySlug(slug, region);

  if (!article) {
    return notFound();
  }

  const siteConfig = getSiteConfig(region);
  const articleUrl = siteConfig ? `${siteConfig.url}/${region}/bettor-resources/${slug}` : '';
  const schemas = siteConfig ? generateArticleSchemas(article, articleUrl, siteConfig) : [];

  // Build logo paths, bgColors, and item URLs from article groups
  const logoPaths: Record<string, string | null> = {};
  const bgColors: Record<string, string> = {};
  const itemUrls: Record<string, string> = {};

  if (article.groups) {
    // Collect logo paths and URLs (by id for reliable matching)
    for (const group of article.groups) {
      for (const item of group.items) {
        logoPaths[item.id] = getPartnerLogoPath(item.id);
        if (item.url) {
          itemUrls[item.id] = item.url;
        }
      }
    }

    // Determine bgColors based on logo format
    for (const group of article.groups) {
      for (const item of group.items) {
        const logoPath = logoPaths[item.id];

        if (logoPath?.endsWith('.jpg') || logoPath?.endsWith('.jpeg')) {
          // JPG: ALWAYS auto-detect from edge pixel (ignore article bgColor)
          const fullPath = path.join(process.cwd(), 'public', logoPath);
          bgColors[item.id] = await getJpgBackgroundColor(fullPath);
        } else if (item.bgColor) {
          // SVG/PNG: use brand color from article if specified
          bgColors[item.id] = item.bgColor;
        }
        // If neither: ArticleGroups defaults to #ffffff
      }
    }
  }

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
            itemUrls={itemUrls}
          />
        ))}

        {article.groups && (
          <ArticleGroups
            groups={article.groups}
            logoPaths={logoPaths}
            bgColors={bgColors}
          />
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
