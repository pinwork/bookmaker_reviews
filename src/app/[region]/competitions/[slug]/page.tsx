import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion, getCompetitionArticleBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchemas, generateArticleHreflang } from '@/utils/seo';
import {
  ArticleHeader,
  ReadingProgress,
  QuickFactsBox,
  PopularMarkets,
  MicroMarkets,
  EdgePatterns,
  UnifiedComparisonTable,
  CollapsibleArticleBody,
  ArticleFAQ,
  ArticleFooter,
} from '@/components/article';
import type { TocSection } from '@/components/article';
import { slugify } from '@/utils/slugify';

interface PageProps {
  params: Promise<{ region: string; slug: string }>;
}

// Extract headings from markdown for ToC
function extractHeadings(markdown: string): TocSection[] {
  const headingRegex = /^##\s+(.+)$/gm;
  const sections: TocSection[] = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    sections.push({
      id: slugify(match[1]),
      title: match[1],
    });
  }
  return sections;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return {};
  }

  const article = getCompetitionArticleBySlug(slug, region);
  const siteConfig = getSiteConfig(region);

  if (!article || !siteConfig) {
    return {};
  }

  const hreflang = generateArticleHreflang(slug, 'competitions', siteConfig.url);

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: Object.keys(hreflang).length > 1 ? { languages: hreflang } : undefined,
  };
}

export default async function CompetitionArticlePage({ params }: PageProps) {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const article = getCompetitionArticleBySlug(slug, region);

  if (!article) {
    return notFound();
  }

  const siteConfig = getSiteConfig(region);
  const articleUrl = siteConfig ? `${siteConfig.url}/${region}/competitions/${slug}` : '';
  const schema = siteConfig ? generateArticleSchemas(article, articleUrl, siteConfig) : null;

  // Build ToC from markdown headings
  const tocSections = extractHeadings(article.body);

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

        <QuickFactsBox facts={article.quickFacts} />

        {/* Markets section - side by side on desktop */}
        <div className="grid gap-4 md:grid-cols-2">
          <PopularMarkets markets={article.popularMarkets} />
          {article.microMarkets && article.microMarkets.length > 0 && (
            <MicroMarkets markets={article.microMarkets} />
          )}
        </div>

        {/* Edge Patterns - data-backed insights */}
        {article.edgePatterns && article.edgePatterns.length > 0 && (
          <EdgePatterns patterns={article.edgePatterns} />
        )}

        {/* Comparison Tables */}
        {article.comparisonTables && article.comparisonTables.length > 0 && (
          <div className="my-8">
            {article.comparisonTables.map((table) => (
              <UnifiedComparisonTable key={table.id} table={table} />
            ))}
          </div>
        )}

        <CollapsibleArticleBody
          content={article.body}
          tocSections={tocSections}
        />

        <ArticleFAQ faq={article.faq} />

        <ArticleFooter
          lastUpdated={article.footer?.lastUpdated}
          sources={article.footer?.sources}
        />
      </main>
    </>
  );
}
