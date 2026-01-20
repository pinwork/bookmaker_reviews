import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import path from 'path';
import { isValidRegion, getArticleBySlug } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { generateArticleSchemas } from '@/utils/seo';
import { getPartnerLogoPath, getJpgBackgroundColor } from '@/utils/images';
import {
  ArticleHeader,
  ComparisonTable,
  ArticleGroups,
  ArticleFAQ,
  ArticleFooter,
} from '@/components/article';

export interface ProcessedExternalLink {
  id: string;
  name: string;
  url: string;
  bgColor?: string;
  logoPath: string | null;
  resolvedBgColor: string;
}

async function processExternalLinks(
  links?: Array<{ id: string; name: string; url: string; bgColor?: string }>
): Promise<ProcessedExternalLink[]> {
  if (!links) return [];

  return Promise.all(
    links.map(async (link) => {
      const logoPath = getPartnerLogoPath(link.id);
      let resolvedBgColor = '#ffffff';

      if (link.bgColor) {
        resolvedBgColor = link.bgColor;
      } else if (logoPath && (logoPath.endsWith('.jpg') || logoPath.endsWith('.jpeg'))) {
        const fullPath = path.join(process.cwd(), 'public', logoPath);
        resolvedBgColor = await getJpgBackgroundColor(fullPath);
      }

      return {
        ...link,
        logoPath,
        resolvedBgColor,
      };
    })
  );
}

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
  const schemas = siteConfig ? generateArticleSchemas(article, articleUrl, siteConfig) : [];
  const processedLinks = await processExternalLinks(article.externalLinks);

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
          lastUpdated={article.footer?.lastUpdated}
        />

        {article.comparisonTable && (
          <ComparisonTable
            title={article.comparisonTable.title}
            headers={article.comparisonTable.headers}
            rows={article.comparisonTable.rows}
            externalLinks={processedLinks}
          />
        )}

        {article.groups && (
          <ArticleGroups
            groups={article.groups}
            externalLinks={processedLinks}
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
