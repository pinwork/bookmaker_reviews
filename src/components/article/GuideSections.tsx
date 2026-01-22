import ReactMarkdown from 'react-markdown';

interface KeyStat {
  label: string;
  value: string;
}

interface GuideItem {
  id: string;
  title: string;
  content: string;
  keyStats?: KeyStat[];
}

interface GuideSection {
  groupName: string;
  items: GuideItem[];
}

export interface GuideSectionsProps {
  sections: GuideSection[];
}

function GuideCard({ item }: { item: GuideItem }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header with title */}
      <header className="p-4 border-b border-gray-100 bg-gray-50">
        <h3 className="text-xl font-bold text-gray-900">
          {item.title}
        </h3>
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

      {/* Content - always visible, no collapsible */}
      <div className="p-6">
        <div className="prose prose-gray max-w-none prose-headings:text-lg prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-3 prose-headings:text-pretty">
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

export function GuideSections({ sections }: GuideSectionsProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 text-pretty">
            {section.groupName}
          </h2>

          <div className="space-y-8">
            {section.items.map((item, itemIndex) => (
              <GuideCard key={itemIndex} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
