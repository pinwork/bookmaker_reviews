'use client';

import { BarChart3, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { EdgePattern } from '@/types';

interface EdgePatternsProps {
  patterns: EdgePattern[];
  title?: string;
}

export function EdgePatterns({ patterns, title = 'Edge Patterns' }: EdgePatternsProps) {
  if (!patterns || patterns.length === 0) return null;

  return (
    <section className="my-8">
      <div className="flex items-center gap-2 mb-4 text-amber-700 font-semibold text-sm uppercase tracking-wide">
        <BarChart3 className="w-4 h-4" />
        <span>{title}</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {patterns.map((pattern, i) => (
          <div
            key={i}
            className="p-4 bg-amber-50 border border-amber-200 rounded-lg"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-slate-800 font-medium leading-snug">
                {pattern.pattern}
              </p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 text-amber-600 hover:text-amber-800 rounded-full hover:bg-amber-100 transition-colors"
                    aria-label="View source details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="max-w-xs bg-slate-900 text-white p-3"
                >
                  <div className="space-y-1 text-xs">
                    <p><span className="text-slate-400">Source:</span> {pattern.source}</p>
                    <p><span className="text-slate-400">Period:</span> {pattern.period}</p>
                    <p><span className="text-slate-400">Sample Size:</span> {pattern.sampleSize.toLocaleString()}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
