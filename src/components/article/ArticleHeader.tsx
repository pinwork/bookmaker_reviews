'use client';

import ReactMarkdown from 'react-markdown';

interface ArticleHeaderProps {
  h1: string;
  introTitle: string;
  introContent: string;
}

export function ArticleHeader({ h1, introTitle, introContent }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl font-black text-gray-900 mb-3 leading-tight text-pretty">
        {h1}
      </h1>

      <p className="text-xl font-semibold text-gray-700 mb-4">
        {introTitle}
      </p>

      <div className="prose prose-lg prose-gray max-w-none">
        <ReactMarkdown>{introContent}</ReactMarkdown>
      </div>
    </header>
  );
}
