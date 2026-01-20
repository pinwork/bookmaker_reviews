'use client';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { ExternalAppResource } from '@/data/resources/externalApps';

interface AutoComparisonTableProps {
  title: string;
  resources: ExternalAppResource[];
  columns?: string[];
}

const DEFAULT_COLUMNS = ['App', 'Best For', 'Price', 'Sports', 'Key Feature'];

export function AutoComparisonTable({
  title,
  resources,
  columns = DEFAULT_COLUMNS,
}: AutoComparisonTableProps) {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              {columns.map((header, index) => (
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
            {resources.map((resource, rowIndex) => (
              <tr
                key={resource.id}
                className={`
                  border-b border-gray-200
                  ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  hover:bg-blue-50 transition-colors
                `}
              >
                <td className="px-4 py-3 text-sm font-medium">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    {resource.name}
                    <ExternalLinkIcon className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {resource.tableData.bestFor}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {resource.tableData.price}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {resource.tableData.sports}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {resource.tableData.keyFeature}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
