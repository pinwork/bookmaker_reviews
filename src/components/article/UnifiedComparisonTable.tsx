'use client';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { ComparisonTable } from '@/types';
import type { BookmakerComplete } from '@/types';

// Row can be either legacy format (string[]) or new format ({ id, cells })
type TableRow = string[] | { id: string; cells: string[] };

interface UnifiedComparisonTableProps {
  table: ComparisonTable;
  bookmakers?: BookmakerComplete[];
  /** Map of item id to URL (new format) */
  itemUrls?: Record<string, string>;
}

function generateRowsFromBookmakers(
  bookmakers: BookmakerComplete[],
  headers: string[]
): { cells: string[]; url: string; name: string }[] {
  return bookmakers.map((bookmaker) => ({
    cells: [
      bookmaker.name,
      bookmaker.content.tagline,
      bookmaker.primaryOffer?.shortTitle || '-',
      bookmaker.content.highlights[0] || '-',
    ].slice(0, headers.length),
    url: bookmaker.affiliateLink,
    name: bookmaker.name,
  }));
}

// Helper to check if row is new format with id
function isRowWithId(row: TableRow): row is { id: string; cells: string[] } {
  return typeof row === 'object' && !Array.isArray(row) && 'id' in row && 'cells' in row;
}

// Helper to get cells from row (handles both formats)
function getRowCells(row: TableRow): string[] {
  return isRowWithId(row) ? row.cells : row;
}

// Helper to get URL for row
function getRowUrl(row: TableRow, itemUrls?: Record<string, string>): string | undefined {
  if (!itemUrls) return undefined;

  if (isRowWithId(row)) {
    return itemUrls[row.id];
  } else {
    return itemUrls[row[0]];
  }
}

// Mobile Card component for a single row
function MobileCard({
  cells,
  headers,
  url,
}: {
  cells: string[];
  headers: string[];
  url?: string;
}) {
  const title = cells[0];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* Card title (first cell) */}
      <div className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            {title}
            <ExternalLinkIcon className="h-3 w-3 flex-shrink-0" />
          </a>
        ) : (
          title
        )}
      </div>

      {/* Header:Value pairs for remaining cells */}
      <dl className="space-y-2">
        {cells.slice(1).map((cell, index) => (
          <div key={index} className="flex justify-between gap-4">
            <dt className="text-sm text-gray-500 flex-shrink-0">{headers[index + 1]}</dt>
            <dd className="text-sm text-gray-900 text-right">{cell}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function UnifiedComparisonTable({
  table,
  bookmakers,
  itemUrls,
}: UnifiedComparisonTableProps) {
  const hasBookmakers = bookmakers && bookmakers.length > 0;
  const hasManualRows = table.rows && table.rows.length > 0;
  const shouldAutoGenerate = table.linkedResourceType === 'bookmaker' && hasBookmakers && !hasManualRows;

  if (table.linkedResourceType === 'bookmaker' && !hasBookmakers) {
    return null;
  }

  const generatedRows = shouldAutoGenerate
    ? generateRowsFromBookmakers(bookmakers!, table.headers)
    : null;

  const manualRows = hasManualRows ? (table.rows as TableRow[]) : null;

  if (!generatedRows && !manualRows) {
    return null;
  }

  // Prepare unified row data for both views
  const rows = generatedRows
    ? generatedRows.map((row) => ({ cells: row.cells, url: row.url }))
    : manualRows!.map((row) => ({
        cells: getRowCells(row),
        url: getRowUrl(row, itemUrls),
      }));

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{table.title}</h2>

      {/* Mobile: Card View (<768px) */}
      <div className="md:hidden space-y-3">
        {rows.map((row, index) => (
          <MobileCard
            key={index}
            cells={row.cells}
            headers={table.headers}
            url={row.url}
          />
        ))}
      </div>

      {/* Desktop: Table View (≥768px) */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
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
            {rows.map((row, rowIndex) => (
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
                    {cellIndex === 0 && row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <span>{cell}</span>
                        <ExternalLinkIcon className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      cell
                    )}
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
