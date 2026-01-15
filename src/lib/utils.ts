import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn() - utility for merging Tailwind CSS classes
 * Combines clsx (conditional classes) + tailwind-merge (deduplicates Tailwind classes)
 * 
 * Example:
 * cn("text-base", isActive && "text-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
