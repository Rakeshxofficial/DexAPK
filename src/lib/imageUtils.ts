/**
 * Utility functions for image optimization
 */

/**
 * Generate SEO-friendly image filename from a title
 * @param title The title to convert to a filename
 * @param extension The file extension (default: webp)
 * @returns A URL-friendly filename
 */
export function generateImageFilename(title: string, extension: string = 'webp'): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim() + '.' + extension;
}

/**
 * Get appropriate image dimensions based on usage context
 * @param context Where the image will be used
 * @returns Object with width and height
 */
export function getImageDimensions(context: 'icon' | 'thumbnail' | 'screenshot' | 'banner' | 'featured'): { width: number, height: number } {
  switch (context) {
    case 'icon':
      return { width: 192, height: 192 };
    case 'thumbnail':
      return { width: 400, height: 300 };
    case 'screenshot':
      return { width: 1080, height: 1920 };
    case 'banner':
      return { width: 1200, height: 630 };
    case 'featured':
      return { width: 800, height: 600 };
    default:
      return { width: 800, height: 600 };
  }
}

/**
 * Generate image alt text based on app data
 * @param appName The name of the app
 * @param imageType The type of image
 * @param index Optional index for screenshots
 * @returns SEO-friendly alt text
 */
export function generateAltText(appName: string, imageType: 'icon' | 'screenshot' | 'banner', index?: number): string {
  switch (imageType) {
    case 'icon':
      return `${appName} app icon`;
    case 'screenshot':
      return `${appName} app screenshot ${index ? `#${index}` : ''} showing app interface`;
    case 'banner':
      return `${appName} promotional banner image`;
    default:
      return appName;
  }
}

/**
 * Check if an image URL is external
 * @param url The image URL to check
 * @returns Boolean indicating if the URL is external
 */
export function isExternalImage(url: string): boolean {
  if (!url) return false;
  return url.startsWith('http') && !url.includes('dexapk.com');
}

/**
 * Get image format from URL
 * @param url The image URL
 * @returns The image format (extension)
 */
export function getImageFormat(url: string): string {
  if (!url) return 'unknown';
  const extension = url.split('.').pop()?.toLowerCase();
  return extension || 'unknown';
}

/**
 * Check if image format is modern (webp, avif)
 * @param url The image URL
 * @returns Boolean indicating if the format is modern
 */
export function isModernImageFormat(url: string): boolean {
  const format = getImageFormat(url);
  return ['webp', 'avif'].includes(format);
}

/**
 * Generate structured data for an image
 * @param image Image object with properties
 * @returns Structured data object for the image
 */
export function generateImageStructuredData(image: { 
  url: string, 
  alt: string, 
  width?: number, 
  height?: number,
  caption?: string
}): object {
  return {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": image.url,
    "description": image.alt,
    "width": image.width || 800,
    "height": image.height || 600,
    "caption": image.caption || image.alt
  };
}