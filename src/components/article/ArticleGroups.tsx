'use client';

import ReactMarkdown from 'react-markdown';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface GroupItem {
  id: string;
  title: string;
  quickVerdict?: string;
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
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Service Header: Tagline left, Logo right */}
                  <header className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                    <div className="flex-1 min-w-0 pr-4">
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

                  {/* Content */}
                  <div className="p-6">
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
