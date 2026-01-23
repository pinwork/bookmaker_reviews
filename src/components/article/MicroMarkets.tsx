import { Target } from 'lucide-react';

interface MicroMarketsProps {
  markets: string[];
  title?: string;
}

export function MicroMarkets({ markets, title = 'Micro-Markets (Props)' }: MicroMarketsProps) {
  if (!markets || markets.length === 0) return null;

  return (
    <section className="my-8 p-5 bg-purple-50 border border-purple-200 rounded-xl">
      <div className="flex items-center gap-2 mb-4 text-purple-700 font-semibold text-sm uppercase tracking-wide">
        <Target className="w-4 h-4" />
        <span>{title}</span>
      </div>

      <ul className="flex flex-wrap gap-2">
        {markets.map((market, i) => (
          <li
            key={i}
            className="px-3 py-1 bg-white border border-purple-200 rounded-full text-sm text-slate-700"
          >
            {market}
          </li>
        ))}
      </ul>
    </section>
  );
}
