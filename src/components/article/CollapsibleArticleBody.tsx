'use client';

import { useState } from 'react';
import { TableOfContents, TocSection } from './TableOfContents';
import { MarkdownBody } from './MarkdownBody';

interface CollapsibleArticleBodyProps {
  content: string;
  tocSections: TocSection[];
  collapsedHeight?: number;
}

/**
 * Client wrapper that coordinates ToC navigation with collapsible body.
 * When a ToC section is clicked, it auto-expands the body before scrolling.
 * The wrapper div ensures proper sticky context for ToC throughout the article.
 */
export function CollapsibleArticleBody({
  content,
  tocSections,
  collapsedHeight = 500,
}: CollapsibleArticleBodyProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <div className="relative">
      <TableOfContents
        sections={tocSections}
        onBeforeNavigate={handleExpand}
      />
      <MarkdownBody
        content={content}
        collapsedHeight={collapsedHeight}
        expanded={expanded}
        onExpand={handleExpand}
      />
    </div>
  );
}
