'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ExternalLink as ExternalLinkIcon, Star, ChevronDown, Quote } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { slugify } from '@/utils/slugify';

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
    <span className="inline-flex items-center" aria-label={`Rating: ${rating} out of 5`}>
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
  sectionId?: string; // For ToC navigation in flat lists
}

function CardItem({ item, logoPath, bgColor, sectionId }: CardItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <article
        id={sectionId}
        className="bg-white border border-gray-200 rounded-xl overflow-visible shadow-sm relative scroll-mt-16"
      >
        {/* Badge ribbon above card (centered) */}
        {item.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm z-10">
            {item.badge}
          </div>
        )}

        {/* === SUMMARY SECTION (always visible) === */}

        {/* Service Header: Logo (left) | Title+Verdict (center) | Rating (right) */}
        <header className="flex items-center gap-4 p-4 border-b border-gray-100 bg-gray-50">
          {/* Logo (left) - smaller on mobile */}
          {logoPath && (
            <a
              href={item.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-20 h-12 sm:w-24 sm:h-14 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-300 transition-colors p-2"
              style={{ backgroundColor: bgColor }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoPath}
                alt={item.title}
                className="max-h-8 sm:max-h-10 max-w-16 sm:max-w-20 object-contain"
              />
            </a>
          )}

          {/* Title + Verdict (center) */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 truncate">
              {item.title}
            </h3>

            {item.quickVerdict && (
              <div className="flex items-start gap-1.5 mt-1">
                <Quote className="h-3.5 w-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 italic line-clamp-2 sm:truncate sm:line-clamp-none">
                  {item.quickVerdict}
                </p>
              </div>
            )}
          </div>

          {/* Rating (right) */}
          {item.rating && (
            <div className="flex-shrink-0">
              <StarRating rating={item.rating} />
            </div>
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
            <div className="prose prose-gray max-w-none prose-headings:text-lg prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-3 prose-headings:text-pretty">
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

  return (
    <div className="space-y-12">
      {groups.map((group, groupIndex) => (
        <section key={groupIndex}>
          {/* Hide group header for flat lists */}
          {!isFlatList && (
            <h2
              id={slugify(group.groupName)}
              className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 text-pretty scroll-mt-16"
            >
              {group.groupName}
            </h2>
          )}

          <div className="space-y-8">
            {group.items.map((item, itemIndex) => {
              const logoPath = logoPaths?.[item.id] ?? null;
              // Priority: bgColors map (includes auto-detected) > item.bgColor > default white
              const bgColor = bgColors?.[item.id] || item.bgColor || '#ffffff';

              return (
                <CardItem
                  key={itemIndex}
                  item={item}
                  logoPath={logoPath}
                  bgColor={bgColor}
                  sectionId={isFlatList ? slugify(item.title) : undefined}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
