/**
 * Utility functions for image optimization
 */
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

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
 * Calculate the optimal sizes for responsive images
 * @param originalWidth The original width of the image
 * @returns Array of widths for responsive images
 */
export function calculateResponsiveSizes(originalWidth: number): number[] {
  // Don't create sizes larger than the original
  const maxWidth = originalWidth;
  
  // Common breakpoints
  const sizes = [320, 640, 960, 1280, 1920];
  
  // Filter out sizes larger than the original
  return sizes.filter(size => size <= maxWidth);
}

/**
 * Generate a blurhash for an image
 * @param imagePath Path to the image
 * @returns Promise resolving to the blurhash string
 */
export async function generateBlurhash(imagePath: string): Promise<string | null> {
  try {
    // This would use a blurhash library
    // For now, return null as we don't have the library
    return null;
  } catch (error) {
    console.error('Error generating blurhash:', error);
    return null;
  }
}

/**
 * Optimize an image and convert to WebP
 * @param inputPath Path to the input image
 * @param outputPath Path to save the optimized image
 * @param options Options for optimization
 * @returns Promise resolving to the path of the optimized image
 */
export async function optimizeImage(
  inputPath: string, 
  outputPath: string, 
  options: { 
    width?: number; 
    height?: number; 
    quality?: number;
  } = {}
): Promise<string> {
  try {
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    await fs.mkdir(outputDir, { recursive: true });
    
    // Process with sharp
    let sharpInstance = sharp(inputPath);
    
    // Resize if dimensions provided
    if (options.width || options.height) {
      sharpInstance = sharpInstance.resize({
        width: options.width,
        height: options.height,
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to WebP and save
    await sharpInstance
      .webp({ quality: options.quality || 80 })
      .toFile(outputPath);
    
    // Further optimize with imagemin
    await imagemin([outputPath], {
      destination: path.dirname(outputPath),
      plugins: [
        imageminWebp({ quality: options.quality || 80 })
      ]
    });
    
    return outputPath;
  } catch (error) {
    console.error('Error optimizing image:', error);
    // Return original path if optimization fails
    return inputPath;
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
 * Get image dimensions from a URL or file
 * @param imagePathOrUrl Path or URL to the image
 * @returns Promise resolving to width and height
 */
export async function getImageDimensionsFromFile(imagePathOrUrl: string): Promise<{ width: number, height: number } | null> {
  try {
    if (imagePathOrUrl.startsWith('http')) {
      // For remote images, we'd need to fetch them first
      // This is a simplified version
      return null;
    } else {
      // For local files
      const metadata = await sharp(imagePathOrUrl).metadata();
      if (metadata.width && metadata.height) {
        return { width: metadata.width, height: metadata.height };
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting image dimensions:', error);
    return null;
  }
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