// src/utils/linkedResources.ts
import type { LinkedResource, BookmakerComplete, ResourceType } from '@/types';
import { getBookmakerBySlug } from '@/data';

/**
 * Filters linked resources to return only active ones
 */
export function getActiveLinkedResources(
  resources: LinkedResource[] | undefined
): LinkedResource[] {
  if (!resources || resources.length === 0) {
    return [];
  }
  return resources.filter((resource) => resource.active);
}

/**
 * Filters linked resources by type
 */
export function getLinkedResourcesByType(
  resources: LinkedResource[] | undefined,
  type: ResourceType
): LinkedResource[] {
  if (!resources || resources.length === 0) {
    return [];
  }
  return resources.filter((resource) => resource.type === type);
}

/**
 * Resolves bookmaker resources to full BookmakerComplete objects
 */
export function resolveBookmakerResources(
  resources: LinkedResource[] | undefined,
  region: string
): BookmakerComplete[] {
  if (!resources || resources.length === 0) {
    return [];
  }

  const bookmakerResources = resources.filter((r) => r.type === 'bookmaker');
  const resolved: BookmakerComplete[] = [];

  for (const resource of bookmakerResources) {
    const bookmaker = getBookmakerBySlug(resource.id, region);
    if (bookmaker) {
      resolved.push(bookmaker);
    }
  }

  return resolved;
}
