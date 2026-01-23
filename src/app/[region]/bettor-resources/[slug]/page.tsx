import path from 'path';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion, getBettorResourceBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchemas, generateArticleHreflang } from '@/utils/seo';
import { getPartnerLogoPath, getJpgBackgroundColor } from '@/utils/images';
import {
  ArticleHeader,
  KeyTakeaways,
  ReadingProgress,
  TableOfContents,
  slugify,
  UnifiedComparisonTable,
  ArticleGroups,
  ArticleFAQ,
  ArticleFooter,
} from '@/components/article';
import type { TocSection } from '@/components/article';

interface PageProps {
  params: Promise<{ region: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return {};
  }

  const article = getBettorResourceBySlug(slug, region);
  const siteConfig = getSiteConfig(region);

  if (!article || !siteConfig) {
    return {};
  }

  const hreflang = generateArticleHreflang(slug, 'bettor-resources', siteConfig.url);

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: Object.keys(hreflang).length > 1 ? { languages: hreflang } : undefined,
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
  const schema = siteConfig ? generateArticleSchemas(article, articleUrl, siteConfig) : null;

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

  // Build ToC sections: from items for flat lists, from groups otherwise
  const isFlatList = article.groups?.length === 1 && article.groups[0].groupName.toLowerCase() === 'reviews';
  const tocSections: TocSection[] = article.groups
    ? isFlatList
      ? article.groups[0].items.map((item) => ({
          id: slugify(item.title),
          title: item.title,
        }))
      : article.groups.map((group) => ({
          id: slugify(group.groupName),
          title: group.groupName,
        }))
    : [];

  return (
    <>
      <ReadingProgress />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
        <ArticleHeader
          h1={article.h1}
          introTitle={article.intro.title}
          introContent={article.intro.content}
        />

        <TableOfContents sections={tocSections} />

        {article.keyTakeaways && (
          <KeyTakeaways items={article.keyTakeaways} />
        )}

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
          sources={article.footer?.sources}
        />
      </main>
    </>
  );
}
