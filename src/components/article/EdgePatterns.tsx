import { BarChart3 } from 'lucide-react';
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
            <p className="text-slate-800 font-medium leading-snug mb-2">
              {pattern.pattern}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              <span>Source: {pattern.source}</span>
              <span>{pattern.period}</span>
              <span className="font-medium text-amber-700">n={pattern.sampleSize}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
