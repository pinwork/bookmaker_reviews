// src/utils/images.ts
// Server-side only - uses Node.js fs module
// Import directly: import { findImagePath, getPartnerLogoPath, getTrustBadgeImagePath } from '@/utils/images'
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const SUPPORTED_EXTENSIONS = ['.svg', '.png', '.webp', '.jpg', '.jpeg'];

/**
 * Finds an image path by folder and name.
 * Searches for files with supported extensions in priority order (SVG first).
 *
 * @param folder - Subfolder in public/images (e.g., 'partners', 'trust')
 * @param name - File name without extension (e.g., 'flashscore')
 * @returns Path like '/images/partners/flashscore.svg' or null if not found
 */
export function findImagePath(folder: string, name: string): string | null {
  const folderPath = path.join(IMAGES_DIR, folder);

  for (const ext of SUPPORTED_EXTENSIONS) {
    const filePath = path.join(folderPath, `${name}${ext}`);
    if (fs.existsSync(filePath)) {
      return `/images/${folder}/${name}${ext}`;
    }
  }
  return null;
}

/**
 * Shortcut for partner logos.
 * @param id - Partner identifier (e.g., 'flashscore')
 * @returns Path like '/images/partners/flashscore.svg' or null
 */
export function getPartnerLogoPath(id: string): string | null {
  return findImagePath('partners', id);
}

/**
 * Shortcut for trust badge images.
 * @param slug - Trust badge slug (e.g., 'gamstop')
 * @returns Path like '/images/trust/gamstop.svg' or null
 */
export function getTrustBadgeImagePath(slug: string): string | null {
  return findImagePath('trust', slug);
}
