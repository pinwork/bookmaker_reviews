'use client';

import ReactMarkdown from 'react-markdown';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface KeyStat {
  label: string;
  value: string;
}

interface GroupItem {
  id: string;
  title: string;
  quickVerdict?: string;
  rating?: number;
  badge?: string;
  pros?: string[];
  cons?: string[];
  keyStats?: KeyStat[];
  content: string;
}

interface Group {
  groupName: string;
  items: GroupItem[];
}

interface ProcessedExternalLink {
  id: string;
  name: string;
  url: string;
  bgColor?: string;
  logoPath: string | null;
  resolvedBgColor: string;
}

export interface ProcessedExternalResource {
  id: string;
  name: string;
  url: string;
  logoPath: string | null;
  bgColor: string;
}

export interface ArticleGroupsProps {
  groups: Group[];
  externalLinks?: ProcessedExternalLink[];
  externalResources?: ProcessedExternalResource[];
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="text-yellow-500 text-sm ml-2" aria-label={`Rating: ${rating} out of 5`}>
      {'★'.repeat(fullStars)}
      {hasHalf && '½'}
      {'☆'.repeat(emptyStars)}
    </span>
  );
}

export function ArticleGroups({ groups, externalLinks, externalResources }: ArticleGroupsProps) {
  // Get resource data - prefer externalResources (new system) over externalLinks (legacy)
  const getResourceData = (id: string): { url: string; name: string; logoPath: string | null; bgColor: string } | null => {
    // Try new externalResources first
    if (externalResources) {
      const resource = externalResources.find((r) => r.id === id);
      if (resource) {
        return {
          url: resource.url,
          name: resource.name,
          logoPath: resource.logoPath,
          bgColor: resource.bgColor,
        };
      }
    }

    // Fall back to legacy externalLinks
    if (externalLinks) {
      const link = externalLinks.find((l) => l.id === id);
      if (link) {
        return {
          url: link.url,
          name: link.name,
          logoPath: link.logoPath,
          bgColor: link.resolvedBgColor,
        };
      }
    }

    return null;
  };

  return (
    <div className="space-y-12">
      {groups.map((group, groupIndex) => (
        <section key={groupIndex}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            {group.groupName}
          </h2>

          <div className="space-y-8">
            {group.items.map((item, itemIndex) => {
              const resourceData = getResourceData(item.id);

              return (
                <article
                  key={itemIndex}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm relative"
                >
                  {/* Badge in top-right corner */}
                  {item.badge && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {item.badge}
                    </div>
                  )}

                  {/* Service Header: Tagline left, Logo right */}
                  <header className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex items-center">
                        {resourceData ? (
                          <a
                            href={resourceData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {item.title}
                            <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
                          </a>
                        ) : (
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                        )}
                        {item.rating && <StarRating rating={item.rating} />}
                      </div>

                      {item.quickVerdict && (
                        <p className="mt-1 text-sm text-gray-600 italic truncate">
                          {item.quickVerdict}
                        </p>
                      )}
                    </div>

                    {/* Logo */}
                    {resourceData?.logoPath && (
                      <a
                        href={resourceData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-24 h-12 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                        style={{ backgroundColor: resourceData.bgColor }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={resourceData.logoPath}
                          alt={resourceData.name}
                          className="max-h-8 max-w-20 object-contain"
                        />
                      </a>
                    )}
                  </header>

                  {/* Key Stats Row */}
                  {item.keyStats && item.keyStats.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-100">
                      {item.keyStats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Pros */}
                    {item.pros && item.pros.length > 0 && (
                      <ul className="mb-4 space-y-1">
                        {item.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 flex-shrink-0">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Cons */}
                    {item.cons && item.cons.length > 0 && (
                      <ul className="mb-4 space-y-1">
                        {item.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-red-600 flex-shrink-0">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="prose prose-sm prose-gray max-w-none prose-headings:text-lg prose-headings:font-semibold prose-headings:mt-6 prose-headings:mb-3">
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
