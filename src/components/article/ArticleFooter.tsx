'use client';

import { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleFooterProps {
  lastUpdated?: string;
  dataSource?: string;
}

export function ArticleFooter({ lastUpdated, dataSource }: ArticleFooterProps) {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);

  if (!lastUpdated && !dataSource) return null;

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200">
      <div className="flex items-center justify-between">
        {/* Last updated - left */}
        {lastUpdated && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        )}

        {/* Sources button - right */}
        {dataSource && (
          <button
            onClick={() => setIsSourcesOpen(!isSourcesOpen)}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Sources
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                isSourcesOpen && 'rotate-180'
              )}
            />
          </button>
        )}
      </div>

      {/* Collapsible sources content - SEO friendly (always in DOM) */}
      {dataSource && (
        <div
          className={cn(
            'overflow-hidden transition-all duration-200',
            isSourcesOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
          )}
        >
          <p className="text-xs text-gray-400">{dataSource}</p>
        </div>
      )}
    </footer>
  );
}
