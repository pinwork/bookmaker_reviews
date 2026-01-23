'use client';

import ReactMarkdown from 'react-markdown';
import { slugify } from '@/utils/slugify';

interface MarkdownBodyProps {
  content: string;
}

export function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <ReactMarkdown
        components={{
          h2: ({ children }) => {
            const id = slugify(String(children));
            return <h2 id={id} className="scroll-mt-20">{children}</h2>;
          },
          h3: ({ children }) => {
            const id = slugify(String(children));
            return <h3 id={id} className="scroll-mt-20">{children}</h3>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
