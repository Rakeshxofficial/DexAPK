// Image optimization utilities for AMP-level performance

/**
 * Generates a responsive image srcset based on the original image URL
 * This function assumes your CDN or image server supports dynamic resizing
 * If not, you'll need to pre-generate these sizes or use a service like Cloudinary
 * 
 * @param {string} src - Original image URL
 * @param {Array<number>} widths - Array of widths to generate
 * @returns {string} - Formatted srcset string
 */
export function generateResponsiveSrcSet(src, widths = [320, 640, 960, 1280, 1920]) {
  // Don't modify the URL if it's from an external domain
  if (!src || !src.includes('dexapk.com')) {
    return src;
  }
  
  // For CDNs that don't support dynamic resizing, just return the original
  return src;
}

/**
 * Calculates the dominant color of an image (placeholder implementation)
 * In production, this would be done server-side during image upload/processing
 * 
 * @param {string} src - Image URL
 * @returns {string} - Hex color code
 */
export function getDominantColor(src) {
  // This is a placeholder - in production you'd use a library like node-vibrant
  // or pre-compute this value during image upload
  return "#e1e1e1";
}

/**
 * Generates a blurhash placeholder for an image (placeholder implementation)
 * In production, this would be done server-side during image upload/processing
 * 
 * @param {string} src - Image URL
 * @returns {string} - Blurhash string
 */
export function generateBlurhash(src) {
  // This is a placeholder - in production you'd use the blurhash library
  // or pre-compute this value during image upload
  return "L6PZfSi_.AyE_3t7t7R**0o#DgR4";
}

/**
 * Determines if an image should be eagerly loaded based on its position
 * 
 * @param {boolean} isAboveFold - Whether the image is above the fold
 * @param {boolean} isHero - Whether the image is a hero/featured image
 * @returns {string} - 'eager' or 'lazy'
 */
export function getLoadingStrategy(isAboveFold, isHero) {
  if (isHero || isAboveFold) {
    return 'eager';
  }
  return 'lazy';
}

/**
 * Determines the appropriate fetchpriority for an image
 * 
 * @param {boolean} isHero - Whether the image is a hero/featured image
 * @param {boolean} isAboveFold - Whether the image is above the fold
 * @returns {string} - 'high', 'low', or 'auto'
 */
export function getFetchPriority(isHero, isAboveFold) {
  if (isHero) {
    return 'high';
  }
  if (isAboveFold) {
    return 'auto';
  }
  return 'low';
}

/**
 * Generates an appropriate sizes attribute based on the image's usage context
 * 
 * @param {string} context - Where the image is used (hero, card, thumbnail, etc.)
 * @returns {string} - Sizes attribute value
 */
export function getSizesAttribute(context) {
  switch (context) {
    case 'hero':
      return '(max-width: 640px) 100vw, 100vw';
    case 'card':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'thumbnail':
      return '(max-width: 640px) 50vw, 150px';
    case 'gallery':
      return '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw';
    default:
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }
}