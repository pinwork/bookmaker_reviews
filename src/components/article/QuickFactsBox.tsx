import { Info } from 'lucide-react';
import type { QuickFact } from '@/types';

interface QuickFactsBoxProps {
  facts: QuickFact[];
  title?: string;
}

export function QuickFactsBox({ facts, title = 'At a Glance' }: QuickFactsBoxProps) {
  if (!facts || facts.length === 0) return null;

  return (
    <section className="my-8 p-5 bg-blue-50 border border-blue-200 rounded-xl">
      <div className="flex items-center gap-2 mb-4 text-blue-700 font-semibold text-sm uppercase tracking-wide">
        <Info className="w-4 h-4" />
        <span>{title}</span>
      </div>

      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {facts.map((fact, i) => (
          <div key={i} className="flex flex-col">
            <dt className="text-xs text-slate-500 uppercase tracking-wide">{fact.label}</dt>
            <dd className="text-lg font-semibold text-slate-900">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
