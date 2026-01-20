'use client';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ProcessedExternalLink {
  id: string;
  name: string;
  url: string;
  bgColor?: string;
  logoPath: string | null;
  resolvedBgColor: string;
}

interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: string[][];
  externalLinks?: ProcessedExternalLink[];
}

export function ComparisonTable({ title, headers, rows, externalLinks }: ComparisonTableProps) {
  const getExternalLink = (serviceName: string): ProcessedExternalLink | null => {
    if (!externalLinks) return null;
    return externalLinks.find(
      (l) => l.name.toLowerCase() === serviceName.toLowerCase()
    ) || null;
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const externalLink = getExternalLink(row[0]);

              return (
                <tr
                  key={rowIndex}
                  className={`
                    border-b border-gray-200
                    ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    hover:bg-blue-50 transition-colors
                  `}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-medium' : 'text-gray-600'}`}
                    >
                      {cellIndex === 0 && externalLink ? (
                        <a
                          href={externalLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors group"
                        >
                          {cell}
                          <ExternalLinkIcon className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <span className={cellIndex === 0 ? 'text-gray-900' : ''}>
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
