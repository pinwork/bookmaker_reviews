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
    // New format: lookup by id
    return itemUrls[row.id];
  } else {
    // Legacy format: lookup by first cell (display name)
    return itemUrls[row[0]];
  }
}

export function UnifiedComparisonTable({
  table,
  bookmakers,
  itemUrls,
}: UnifiedComparisonTableProps) {
  const hasBookmakers = bookmakers && bookmakers.length > 0;
  const hasManualRows = table.rows && table.rows.length > 0;
  const shouldAutoGenerate = table.linkedResourceType === 'bookmaker' && hasBookmakers && !hasManualRows;

  // If linkedResourceType is 'bookmaker' but no bookmakers provided, render nothing
  if (table.linkedResourceType === 'bookmaker' && !hasBookmakers) {
    return null;
  }

  // Generate rows from bookmakers if needed
  const generatedRows = shouldAutoGenerate
    ? generateRowsFromBookmakers(bookmakers!, table.headers)
    : null;

  // Use manual rows if available
  const manualRows = hasManualRows ? (table.rows as TableRow[]) : null;

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
                        className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}
                      >
                        <div className="max-w-[200px] truncate" title={cell}>
                          {cell}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              : manualRows!.map((row, rowIndex) => {
                  const cells = getRowCells(row);
                  const url = getRowUrl(row, itemUrls);

                  return (
                    <tr
                      key={rowIndex}
                      className={`
                        border-b border-gray-200
                        ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        hover:bg-blue-50 transition-colors
                      `}
                    >
                      {cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-medium' : 'text-gray-600'}`}
                        >
                          {/* First cell: link if URL available */}
                          {cellIndex === 0 && url ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <span className="max-w-[180px] truncate" title={cell}>{cell}</span>
                              <ExternalLinkIcon className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <div className="max-w-[200px] truncate" title={cell}>
                              {cell}
                            </div>
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
