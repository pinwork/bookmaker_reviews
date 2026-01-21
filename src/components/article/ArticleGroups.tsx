'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ExternalLink as ExternalLinkIcon, Star, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

interface KeyStat {
  label: string;
  value: string;
}

interface GroupItem {
  id: string;
  title: string;
  url?: string; // Direct affiliate link from article data
  bgColor?: string; // Brand background color from article data
  quickVerdict?: string;
  rating?: number;
  bestFor?: string;
  badge?: string;
  pros?: string[];
  cons?: string[];
  keyStats?: KeyStat[];
  content: string;
}

interface Group {
  groupName: string;
  items: GroupItem[];
}

export interface ArticleGroupsProps {
  groups: Group[];
  logoPaths?: Record<string, string | null>; // Map of item.id -> logo path
  bgColors?: Record<string, string>; // Map of item.id -> background color (includes auto-detected for JPG)
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="inline-flex items-center ml-2" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalf && (
        <span className="relative h-4 w-4">
          <Star className="absolute h-4 w-4 fill-none text-yellow-400" />
          <span className="absolute overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </span>
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 fill-none text-yellow-400" />
      ))}
    </span>
  );
}

interface CardItemProps {
  item: GroupItem;
  logoPath: string | null;
  bgColor: string;
  defaultOpen: boolean;
}

function CardItem({ item, logoPath, bgColor, defaultOpen }: CardItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <article className="bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm relative">
        {/* Badge ribbon above card */}
        {item.badge && (
          <div className="absolute -top-3 left-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm z-10">
            {item.badge}
          </div>
        )}

        {/* === SUMMARY SECTION (always visible) === */}

        {/* Service Header: Tagline left, Logo right */}
        <header className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item.title}
                  <ExternalLinkIcon className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              )}
              {item.rating && <StarRating rating={item.rating} />}
            </div>

            {item.quickVerdict && (
              <p className="mt-1 text-sm text-gray-600 italic truncate">
                {item.quickVerdict}
              </p>
            )}
          </div>

          {/* Logo */}
          {logoPath && (
            <a
              href={item.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-24 h-12 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              style={{ backgroundColor: bgColor }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoPath}
                alt={item.title}
                className="max-h-8 max-w-20 object-contain"
              />
            </a>
          )}
        </header>

        {/* Key Stats Row */}
        {item.keyStats && item.keyStats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-100">
            {item.keyStats.map((stat, statIndex) => (
              <div key={statIndex} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Best For */}
        {item.bestFor && (
          <p className="px-6 py-3 text-sm text-gray-700 bg-gray-50 border-b border-gray-100">
            <span className="font-semibold">Best For:</span> {item.bestFor}
          </p>
        )}

        {/* Pros & Cons */}
        <div className="p-6">
          <div className="mb-4">
            {/* Pros */}
            {item.pros && item.pros.length > 0 && (
              <ul className="mb-4 space-y-1">
                {item.pros.map((pro, proIndex) => (
                  <li key={proIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            )}

            {/* Cons */}
            {item.cons && item.cons.length > 0 && (
              <ul className="space-y-1">
                {item.cons.map((con, conIndex) => (
                  <li key={conIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center gap-3">
            <CollapsibleTrigger asChild>
              <button
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 rounded-lg font-medium transition-colors"
              >
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
                {isOpen ? 'Hide review' : 'Read full review'}
              </button>
            </CollapsibleTrigger>

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors max-w-[200px] w-1/2"
              >
                Visit Site
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* === DETAILS SECTION (collapsible) === */}
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="px-6 pb-6 pt-4 border-t border-gray-100">
            <div className="prose prose-sm prose-gray max-w-none prose-headings:text-lg prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-3">
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </div>
          </div>
        </CollapsibleContent>
      </article>
    </Collapsible>
  );
}

export function ArticleGroups({ groups, logoPaths, bgColors }: ArticleGroupsProps) {
  // Check if this is a flat list (single group with generic name like "Reviews")
  const isFlatList = groups.length === 1 && groups[0].groupName.toLowerCase() === 'reviews';

  // Track first item globally for default expanded state
  let globalItemIndex = 0;

  return (
    <div className="space-y-12">
      {groups.map((group, groupIndex) => (
        <section key={groupIndex}>
          {/* Hide group header for flat lists */}
          {!isFlatList && (
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              {group.groupName}
            </h2>
          )}

          <div className="space-y-8">
            {group.items.map((item, itemIndex) => {
              const logoPath = logoPaths?.[item.id] ?? null;
              // Priority: bgColors map (includes auto-detected) > item.bgColor > default white
              const bgColor = bgColors?.[item.id] || item.bgColor || '#ffffff';
              const isFirstItem = globalItemIndex === 0;
              globalItemIndex++;

              return (
                <CardItem
                  key={itemIndex}
                  item={item}
                  logoPath={logoPath}
                  bgColor={bgColor}
                  defaultOpen={isFirstItem}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
