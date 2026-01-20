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

interface ExternalLink {
  id: string;
  name: string;
  url: string;
}

interface ArticleGroupsProps {
  groups: Group[];
  externalLinks?: ExternalLink[];
}

export function ArticleGroups({ groups, externalLinks }: ArticleGroupsProps) {
  const getExternalUrl = (id: string): string | null => {
    if (!externalLinks) return null;
    const link = externalLinks.find((l) => l.id === id);
    return link?.url || null;
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
              const externalUrl = getExternalUrl(item.id);

              return (
                <article
                  key={itemIndex}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                >
                  <header className="mb-4">
                    {externalUrl ? (
                      <a
                        href={externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {item.title}
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    )}

                    {item.quickVerdict && (
                      <p className="mt-2 text-gray-600 italic">
                        {item.quickVerdict}
                      </p>
                    )}
                  </header>

                  <div className="prose prose-sm prose-gray max-w-none prose-headings:text-lg prose-headings:font-semibold prose-headings:mt-6 prose-headings:mb-3">
                    <ReactMarkdown>{item.content}</ReactMarkdown>
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
