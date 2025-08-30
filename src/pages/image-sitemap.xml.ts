import { getAllApps, getAllBlogPosts } from '../lib/supabase';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current timestamp for when sitemap was last updated
  const lastModified = new Date().toISOString();
  
  // Initialize arrays for data
  let apps = [];
  let blogPosts = [];
  
  try {
    // Fetch apps
    apps = await getAllApps();
    console.log('Image sitemap: Fetched apps:', apps.length);
  } catch (error) {
    console.error('Image sitemap: Error fetching apps:', error);
    apps = [];
  }
  
  try {
    // Fetch blog posts
    blogPosts = await getAllBlogPosts();
    console.log('Image sitemap: Fetched blog posts:', blogPosts.length);
  } catch (error) {
    console.error('Image sitemap: Error fetching blog posts:', error);
    blogPosts = [];
  }
  
  // Collect all images from apps and blog posts
  const images = [];
  
  // Add app icons and screenshots
  apps.forEach(app => {
    if (app.icon) {
      images.push({
        loc: app.icon,
        title: `${app.name} app icon`,
        caption: `Download ${app.name} MOD APK - ${app.category} app with premium features unlocked`
      });
    }
    
    if (app.screenshots && Array.isArray(app.screenshots)) {
      app.screenshots.forEach((screenshot, index) => {
        images.push({
          loc: screenshot,
          title: `${app.name} screenshot ${index + 1}`,
          caption: `${app.name} app interface screenshot showing premium features`
        });
      });
    }
  });
  
  // Add blog post thumbnails
  blogPosts.forEach(post => {
    if (post.thumbnail_image) {
      images.push({
        loc: post.thumbnail_image,
        title: post.title,
        caption: post.excerpt || `Read ${post.title} on DexAPK Blog`
      });
    }
  });
  
  console.log('Image sitemap: Total images:', images.length);
  
  // Generate image sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(image => `  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title><![CDATA[${image.title}]]></image:title>
      <image:caption><![CDATA[${image.caption}]]></image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}