'use client';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { ComparisonTable } from '@/types';
import type { ExternalAppResource } from '@/data/resources/externalApps';
import type { BookmakerComplete } from '@/types';

type Resource = ExternalAppResource | BookmakerComplete;

interface UnifiedComparisonTableProps {
  table: ComparisonTable;
  resources?: Resource[];
}

function isExternalApp(resource: Resource): resource is ExternalAppResource {
  return 'tableData' in resource;
}

function isBookmaker(resource: Resource): resource is BookmakerComplete {
  return 'affiliateLink' in resource;
}

function getResourceUrl(resource: Resource): string {
  if (isBookmaker(resource)) {
    return resource.affiliateLink;
  }
  return resource.url;
}

function generateRowsFromResources(
  resources: Resource[],
  headers: string[]
): { cells: string[]; url: string; name: string }[] {
  return resources.map((resource) => {
    if (isExternalApp(resource)) {
      return {
        cells: [
          resource.name,
          resource.tableData.bestFor,
          resource.tableData.price,
          resource.tableData.keyFeature,
        ].slice(0, headers.length),
        url: resource.url,
        name: resource.name,
      };
    }

    if (isBookmaker(resource)) {
      return {
        cells: [
          resource.name,
          resource.content.tagline,
          resource.primaryOffer?.shortTitle || '-',
          resource.content.highlights[0] || '-',
        ].slice(0, headers.length),
        url: resource.affiliateLink,
        name: resource.name,
      };
    }

    return { cells: [], url: '', name: '' };
  });
}

export function UnifiedComparisonTable({
  table,
  resources,
}: UnifiedComparisonTableProps) {
  const hasResources = resources && resources.length > 0;
  const hasManualRows = table.rows && table.rows.length > 0;
  const shouldAutoGenerate = table.linkedResourceType && hasResources && !hasManualRows;

  // If linkedResourceType is set but no resources provided, render nothing
  if (table.linkedResourceType && !hasResources) {
    return null;
  }

  // Generate rows from resources if needed
  const generatedRows = shouldAutoGenerate
    ? generateRowsFromResources(resources!, table.headers)
    : null;

  // Use manual rows if available
  const manualRows = hasManualRows ? table.rows : null;

  // Nothing to render
  if (!generatedRows && !manualRows) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{table.title}</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              {table.headers.map((header, index) => (
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
            {generatedRows
              ? generatedRows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`
                      border-b border-gray-200
                      ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      hover:bg-blue-50 transition-colors
                    `}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-medium' : 'text-gray-600'}`}
                      >
                        <div className="max-w-[200px] truncate" title={cell}>
                          {cellIndex === 0 ? (
                            <a
                              href={row.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors group"
                            >
                              <span className="truncate">{cell}</span>
                              <ExternalLinkIcon className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            cell
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              : manualRows!.map((row, rowIndex) => (
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
                        className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}
                      >
                        <div className="max-w-[200px] truncate" title={cell}>
                          {cell}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
