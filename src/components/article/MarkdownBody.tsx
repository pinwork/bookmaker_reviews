'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronDown } from 'lucide-react';
import { slugify } from '@/utils/slugify';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MarkdownBodyProps {
  content: string;
  /** Initial collapsed height in pixels. Set to 0 to disable collapsing. */
  collapsedHeight?: number;
  /** Controlled mode: whether the body is expanded */
  expanded?: boolean;
  /** Controlled mode: callback when expand is requested */
  onExpand?: () => void;
}

export function MarkdownBody({
  content,
  collapsedHeight = 500,
  expanded: controlledExpanded,
  onExpand,
}: MarkdownBodyProps) {
  // Support both controlled and uncontrolled modes
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const isCollapsible = collapsedHeight > 0;

  const handleExpand = () => {
    if (isControlled && onExpand) {
      onExpand();
    } else {
      setInternalExpanded(true);
    }
  };

  // Sync internal state if controlled mode switches
  useEffect(() => {
    if (isControlled) {
      setInternalExpanded(controlledExpanded);
    }
  }, [isControlled, controlledExpanded]);

  return (
    <div className="relative">
      {/* Content wrapper - full content always in DOM for SEO */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-500 ease-in-out',
          isCollapsible && !expanded && `max-h-[${collapsedHeight}px]`
        )}
        style={isCollapsible && !expanded ? { maxHeight: collapsedHeight } : undefined}
      >
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
      </div>

      {/* Gradient fade overlay - only when collapsed */}
      {isCollapsible && !expanded && (
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Expand button - only when collapsed */}
      {isCollapsible && !expanded && (
        <div className="relative z-10 flex justify-center -mt-4 pt-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleExpand}
            className="gap-2 bg-white hover:bg-slate-50 border-slate-300 shadow-sm"
          >
            Read Full Guide
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
