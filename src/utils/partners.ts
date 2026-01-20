// src/utils/partners.ts
// Server-side only - uses Node.js fs module
// Import directly: import { getPartnerLogoPath } from '@/utils/partners'
import fs from 'fs';
import path from 'path';

const PARTNERS_DIR = path.join(process.cwd(), 'public/images/partners');
const SUPPORTED_EXTENSIONS = ['.svg', '.png', '.webp', '.jpg', '.jpeg'];

/**
 * Finds the path to a partner logo by id.
 * Searches for files with supported extensions in priority order (SVG first).
 *
 * @param id - Partner identifier (e.g., 'flashscore')
 * @returns Path like '/images/partners/flashscore.svg' or null if not found
 */
export function getPartnerLogoPath(id: string): string | null {
  for (const ext of SUPPORTED_EXTENSIONS) {
    const filePath = path.join(PARTNERS_DIR, `${id}${ext}`);
    if (fs.existsSync(filePath)) {
      return `/images/partners/${id}${ext}`;
    }
  }
  return null;
}

/**
 * Gets all available partner logos.
 * Useful for preloading or validation.
 *
 * @returns Map of id to path
 */
export function getAllPartnerLogos(): Map<string, string> {
  const logos = new Map<string, string>();

  if (!fs.existsSync(PARTNERS_DIR)) {
    return logos;
  }

  const files = fs.readdirSync(PARTNERS_DIR);

  for (const file of files) {
    if (file.startsWith('.')) continue;

    const ext = path.extname(file).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.includes(ext)) continue;

    const id = path.basename(file, ext);
    // Only add if not already present (maintains priority order)
    if (!logos.has(id)) {
      logos.set(id, `/images/partners/${file}`);
    }
  }

  return logos;
}
