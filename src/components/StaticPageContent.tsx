'use client';

import ReactMarkdown from 'react-markdown';

interface StaticPageContentProps {
  content: string;
}

export function StaticPageContent({ content }: StaticPageContentProps) {
  return (
    <article className="prose prose-gray max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
