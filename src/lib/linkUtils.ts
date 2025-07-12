/**
 * Utility functions for internal linking strategy
 */

/**
 * Generate a list of related categories based on the current category
 * @param currentCategory The current category
 * @returns Array of related categories
 */
export function getRelatedCategories(currentCategory: string): string[] {
  const categoryRelations = {
    'Games': ['Entertainment', 'Media', 'Social'],
    'Productivity': ['Media', 'Photography', 'Apps'],
    'Music': ['Entertainment', 'Media', 'Social'],
    'Video': ['Entertainment', 'Media', 'Photography'],
    'Entertainment': ['Games', 'Music', 'Video'],
    'Social': ['Games', 'Music', 'Apps'],
    'Photography': ['Productivity', 'Video', 'Media'],
    'Media': ['Music', 'Video', 'Entertainment'],
    'Apps': ['Productivity', 'Social', 'Games']
  };
  
  return categoryRelations[currentCategory] || ['Games', 'Productivity', 'Music'];
}

/**
 * Generate SEO-friendly anchor text variations for a given app
 * @param appName The name of the app
 * @param category The app category
 * @param version The app version
 * @returns Array of anchor text variations
 */
export function generateAnchorTextVariations(appName: string, category: string, version: string): string[] {
  return [
    `Download ${appName} MOD APK`,
    `${appName} v${version} Premium Unlocked`,
    `${appName} MOD APK - No Ads`,
    `${category}: ${appName} Premium`,
    `${appName} Pro Features Unlocked`,
    `${appName} Latest Version MOD`
  ];
}

/**
 * Generate a URL-friendly slug from a string
 * @param text The text to convert to a slug
 * @returns A URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Check if a URL is an internal link
 * @param url The URL to check
 * @returns Boolean indicating if the URL is internal
 */
export function isInternalLink(url: string): boolean {
  if (!url) return false;
  return url.startsWith('/') || 
         url.startsWith('#') || 
         url.includes('dexapk.com');
}

/**
 * Get appropriate rel attributes for a link
 * @param url The URL of the link
 * @returns String containing appropriate rel attributes
 */
export function getLinkRelAttributes(url: string): string {
  if (isInternalLink(url)) {
    return '';
  }
  return 'noopener noreferrer';
}