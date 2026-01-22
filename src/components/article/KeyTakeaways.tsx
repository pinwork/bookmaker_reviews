import { Lightbulb } from 'lucide-react';

interface KeyTakeawaysProps {
  items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-6 mb-10 p-5 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
      {/* Left accent border */}
      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />

      <div className="flex items-center gap-2 mb-3 text-amber-700 font-semibold text-sm uppercase tracking-wide">
        <Lightbulb className="w-4 h-4" />
        <span>Key Takeaways</span>
      </div>

      <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-slate-700 leading-snug"
          >
            <span className="text-amber-500 mt-0.5 text-lg leading-none">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
