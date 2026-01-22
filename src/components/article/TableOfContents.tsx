'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TocSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [currentSection, setCurrentSection] = useState<string>(sections[0]?.id || '');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shouldRender = sections.length >= 3;

  // Track current section with IntersectionObserver
  useEffect(() => {
    if (!shouldRender) return;
    const sectionElements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that's intersecting (from top)
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px', // Trigger when section is near top
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [sections, shouldRender]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentTitle = sections.find((s) => s.id === currentSection)?.title || sections[0]?.title;

  // Don't render if fewer than 3 sections
  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      className="md:hidden sticky top-1 z-40 mx-4 mt-4"
    >
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-left"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2 min-w-0">
          <List className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm font-medium text-gray-700 truncate">{currentTitle}</span>
        </div>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-gray-500 flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          role="listbox"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={cn(
                'w-full px-4 py-3 text-left text-sm transition-colors',
                currentSection === section.id
                  ? 'bg-amber-50 text-amber-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
              role="option"
              aria-selected={currentSection === section.id}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Helper function to generate slug from section title
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
