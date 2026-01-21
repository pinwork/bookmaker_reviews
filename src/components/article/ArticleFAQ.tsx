'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQItem {
  q: string;
  a: string;
}

interface ArticleFAQProps {
  faq: FAQItem[];
}

const INITIAL_VISIBLE_COUNT = 3;

export function ArticleFAQ({ faq }: ArticleFAQProps) {
  const [showAll, setShowAll] = useState(false);
  const hasMoreItems = faq.length > INITIAL_VISIBLE_COUNT;
  const hiddenCount = faq.length - INITIAL_VISIBLE_COUNT;

  if (faq.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-6">
        <HelpCircle className="h-6 w-6 text-blue-600" />
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
        {faq.map((item, index) => {
          const isHidden = !showAll && index >= INITIAL_VISIBLE_COUNT;

          return (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className={cn(
                'bg-gray-50 rounded-lg border-0 overflow-hidden',
                // CSS-based hiding for SEO (content remains in DOM)
                isHidden && 'hidden'
              )}
            >
              <AccordionTrigger className="w-full flex items-center justify-between gap-3 px-5 py-5 text-left hover:bg-gray-100 hover:no-underline transition-colors [&>svg]:text-gray-500">
                <span className="flex items-start gap-3 text-lg font-semibold text-gray-900">
                  <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0">
                <p className="text-gray-600 pl-8 leading-relaxed">
                  {item.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {hasMoreItems && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              showAll && 'rotate-180'
            )}
          />
          {showAll
            ? 'Show fewer questions'
            : `Show ${hiddenCount} more question${hiddenCount > 1 ? 's' : ''}`}
        </button>
      )}
    </section>
  );
}
