'use client';

import ReactMarkdown from 'react-markdown';
import { Calendar } from 'lucide-react';

interface ArticleHeaderProps {
  h1: string;
  introTitle: string;
  introContent: string;
  lastUpdated?: string;
}

export function ArticleHeader({ h1, introTitle, introContent, lastUpdated }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl font-black text-gray-900 mb-3 leading-tight">
        {h1}
      </h1>

      <p className="text-xl font-semibold text-gray-700 mb-4">
        {introTitle}
      </p>

      {lastUpdated && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      )}

      <div className="prose prose-lg prose-gray max-w-none">
        <ReactMarkdown>{introContent}</ReactMarkdown>
      </div>
    </header>
  );
}
