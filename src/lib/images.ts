/**
 * Bump CACHE_VERSION when you replace an image in /public with the same filename.
 * Next.js caches optimized images by URL — same path serves the old cache.
 */
const CACHE_VERSION = "3";

function asset(path: string) {
  return `${path}?v=${CACHE_VERSION}`;
}

export const images = {
  hero: asset("/ongoing-service.jpg"),
  church: asset("/church.jpg"),
  insideChurch: asset("/inside-church.jpg"),
  congregation: asset("/congregation-worshipping.jpg"),
  congregationAlt: asset("/ongoing-service.jpg"),
  worship: asset("/worship.jpg"),
  praying: asset("/praying.jpg"),
  blackWorship: asset("/black-worship.jpeg"),
  churchPng: asset("/church.png"),
  /** Shared image for login, register, and all auth screens */
  auth: asset("/inside-church.jpg"),
  featuresHero: asset("/worship.jpg"),
  pricingHero: asset("/congregation-worshipping.jpg"),
  storiesHero: asset("/ongoing-service.jpg"),
} as const;
