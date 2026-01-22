'use client';

import { useEffect, useState, useRef } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      // Get the main content element or fallback to document
      const main = document.querySelector('main');
      if (!main) return;

      const mainRect = main.getBoundingClientRect();
      const mainTop = mainRect.top + window.scrollY;
      const mainHeight = main.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far we've scrolled through the main content
      const scrolled = window.scrollY - mainTop + viewportHeight;
      const total = mainHeight;

      // Clamp progress between 0 and 100
      const percent = Math.min(Math.max((scrolled / total) * 100, 0), 100);
      setProgress(percent);
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    // Initial calculation
    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-amber-500 z-50 transition-[width] duration-75"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
