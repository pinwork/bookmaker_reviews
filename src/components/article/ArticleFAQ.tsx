'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface ArticleFAQProps {
  faq: FAQItem[];
}

export function ArticleFAQ({ faq }: ArticleFAQProps) {
  // First item expanded by default
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  if (faq.length === 0) return null;

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faq.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between gap-3 p-5 text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="flex items-start gap-3 text-lg font-semibold text-gray-900">
                  <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  {item.q}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isExpanded && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 pl-8 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
