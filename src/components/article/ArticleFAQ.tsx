import { HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface ArticleFAQProps {
  faq: FAQItem[];
}

export function ArticleFAQ({ faq }: ArticleFAQProps) {
  if (faq.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faq.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <h3 className="flex items-start gap-3 text-lg font-semibold text-gray-900 mb-3">
              <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              {item.q}
            </h3>
            <p className="text-gray-600 pl-8 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
