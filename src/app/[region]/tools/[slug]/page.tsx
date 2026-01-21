import path from 'path';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidRegion, getToolReviewBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchemas } from '@/utils/seo';
import { getPartnerLogoPath, getJpgBackgroundColor } from '@/utils/images';
import {
  getActiveLinkedResources,
  resolveExternalResources,
} from '@/utils/linkedResources';
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

  const toolReview = getToolReviewBySlug(slug, region);

  if (!toolReview) {
    return {};
  }

  return {
    title: toolReview.metaTitle,
    description: toolReview.metaDescription,
  };
}

export default async function ToolReviewPage({ params }: PageProps) {
  const { region, slug } = await params;

  if (!isValidRegion(region)) {
    return notFound();
  }

  const toolReview = getToolReviewBySlug(slug, region);

  if (!toolReview) {
    return notFound();
  }

  const siteConfig = getSiteConfig(region);
  const pageUrl = siteConfig ? `${siteConfig.url}/${region}/tools/${slug}` : '';
  const schemas = siteConfig ? generateArticleSchemas(toolReview, pageUrl, siteConfig) : [];

  // Process linkedResources
  const activeResources = getActiveLinkedResources(toolReview.linkedResources);
  const externalResources = resolveExternalResources(activeResources);
  const activeResourceIds = new Set(activeResources.map((r) => r.id));

  // Pre-process external resources with logo paths and auto-detect JPG background colors
  const processedExternalResources = await Promise.all(
    externalResources.map(async (resource) => {
      const logoPath = getPartnerLogoPath(resource.id);
      let bgColor = resource.bgColor || '#ffffff';

      // Auto-detect background color from JPG if not specified
      if (!resource.bgColor && logoPath && (logoPath.endsWith('.jpg') || logoPath.endsWith('.jpeg'))) {
        const fullPath = path.join(process.cwd(), 'public', logoPath);
        bgColor = await getJpgBackgroundColor(fullPath);
      }

      return {
        id: resource.id,
        name: resource.name,
        url: resource.url,
        logoPath,
        bgColor,
      };
    })
  );

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
          h1={toolReview.h1}
          introTitle={toolReview.intro.title}
          introContent={toolReview.intro.content}
          lastUpdated={toolReview.footer?.lastUpdated}
        />

        {toolReview.comparisonTables?.map((table) => (
          <UnifiedComparisonTable
            key={table.id}
            table={table}
            resources={table.linkedResourceType === 'external' ? externalResources : undefined}
          />
        ))}

        {toolReview.groups && (
          <ArticleGroups
            groups={toolReview.groups
              .map((group) => ({
                ...group,
                // Filter items: show if active OR not linked to any resource
                items: group.items.filter((item) => {
                  const linkedResource = toolReview.linkedResources?.find((r) => r.id === item.id);
                  return !linkedResource || activeResourceIds.has(item.id);
                }),
              }))
              .filter((group) => group.items.length > 0)}
            externalResources={processedExternalResources}
          />
        )}

        {toolReview.faq && toolReview.faq.length > 0 && (
          <ArticleFAQ faq={toolReview.faq} />
        )}

        <ArticleFooter
          lastUpdated={toolReview.footer?.lastUpdated}
          dataSource={toolReview.footer?.dataSource}
        />
      </main>
    </>
  );
}
