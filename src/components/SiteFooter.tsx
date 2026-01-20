import Link from 'next/link';
import { getTrustBadgesByRegion, getTrustBadgePath } from '@/data/trustSignals';
import { getSiteConfig } from '@/data/siteConfig';
import { getFooterPages } from '@/data/staticPages';

interface SiteFooterProps {
  region: string;
}

export function SiteFooter({ region }: SiteFooterProps) {
  const trustBadges = getTrustBadgesByRegion(region);
  const config = getSiteConfig(region);
  const footerPages = getFooterPages();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Trust Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {trustBadges.map((badge) => {
            const imagePath = getTrustBadgePath(badge);
            return (
              <a
                key={badge.slug}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                title={badge.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePath}
                  alt={badge.name}
                  className="h-8 w-auto"
                />
              </a>
            );
          })}
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6 text-sm">
          {footerPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${region}/${page.slug}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {page.title}
            </Link>
          ))}
          <a
            href={`mailto:${config.contactEmail}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Copyright Row */}
        <div className="text-center text-sm text-gray-500">
          &copy; {currentYear} {config.name}
        </div>
      </div>
    </footer>
  );
}
