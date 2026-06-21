/**
 * Bump CACHE_VERSION when you replace an image in /public with the same filename.
 * Next.js caches optimized images by URL — same path serves the old cache.
 */
const CACHE_VERSION = "2";

function asset(path: string) {
  return `${path}?v=${CACHE_VERSION}`;
}

export const images = {
  hero: asset("/ongoing-service.jpg"),
  church: asset("/church.jpg"),
  insideChurch: asset("/inside-church.jpg"),
  congregation: asset("/congregation-worshipping.jpg"),
  congregationAlt: asset("/congregation-worshipping2.jpg"),
  /** Shared image for login, register, and all auth screens */
  auth: asset("/inside-church.jpg"),
  featuresHero: asset("/church.jpg"),
  storiesHero: asset("/congregation-worshipping2.jpg"),
} as const;
