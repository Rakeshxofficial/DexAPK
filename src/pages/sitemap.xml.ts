import { getAllApps } from '../lib/supabase';

export async function GET({ request }) {
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current date in ISO format
  const now = new Date().toISOString();
  
  // Initialize arrays for all data
  let apps = [];
  let blogPosts = [];
  let blogCategories = [];
  let blogTags = [];
  let publishers = [];
  
  try {
    // Try to fetch apps data
    apps = await getAllApps();
  } catch (error) {
    console.error('Error fetching apps for sitemap:', error);
    apps = [];
  }
  
  try {
    // Try to fetch blog data using dynamic imports to avoid build issues
    const { getAllBlogPosts, getAllBlogCategories, getAllBlogTags, getAllPublishers } = await import('../lib/supabase');
    
    // Fetch blog posts with error handling
    try {
      blogPosts = await getAllBlogPosts();
    } catch (error) {
      console.error('Error fetching blog posts for sitemap:', error);
      blogPosts = [];
    }
    
    // Fetch blog categories with error handling
    try {
      blogCategories = await getAllBlogCategories();
    } catch (error) {
      console.error('Error fetching blog categories for sitemap:', error);
      blogCategories = [];
    }
    
    // Fetch blog tags with error handling
    try {
      blogTags = await getAllBlogTags();
    } catch (error) {
      console.error('Error fetching blog tags for sitemap:', error);
      blogTags = [];
    }
    
    // Fetch publishers with error handling
    try {
      publishers = await getAllPublishers();
    } catch (error) {
      console.error('Error fetching publishers for sitemap:', error);
      publishers = [];
    }
  } catch (importError) {
    console.error('Error importing blog functions for sitemap:', importError);
    // If import fails, provide fallback data
    blogPosts = [];
    blogCategories = ['Tutorials', 'News', 'Reviews', 'Tips & Tricks', 'Android', 'Technology', 'General'];
    blogTags = ['android', 'tutorial', 'mod apk', 'guide', 'tips', 'review', 'news', 'technology'];
    publishers = [
      { name: 'DexAPK Team', slug: 'dexapk-team' },
      { name: 'Google LLC', slug: 'google-llc' },
      { name: 'Meta Platforms', slug: 'meta-platforms' },
      { name: 'Microsoft Corporation', slug: 'microsoft-corporation' }
    ];
  }
  
  // Generate sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/web-app-manifest-512x512.png</image:loc>
      <image:title>DexAPK Logo</image:title>
      <image:caption>DexAPK - MOD APK Downloads</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/apps</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/trending</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/games</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/search</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/help</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/tags</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/publisher</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Category Pages -->
  <url>
    <loc>${baseUrl}/categories/productivity</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/music</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/video</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/entertainment</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/social</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/photography</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/games</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/media</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/apps</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog Category Pages -->
  ${blogCategories.map(category => {
    const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `
  <url>
    <loc>${baseUrl}/blog/category/${categorySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/blog/category/${categorySlug}"/>
  </url>`;
  }).join('')}
  
  <!-- Blog Tag Pages -->
  ${blogTags.map(tag => {
    const tagSlug = tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `
  <url>
    <loc>${baseUrl}/blog/tag/${tagSlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/blog/tag/${tagSlug}"/>
  </url>`;
  }).join('')}
  
  <!-- Blog Post Pages -->
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updated_at || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/blog/${post.slug}"/>
    ${post.thumbnail_image ? `
    <image:image>
      <image:loc>${post.thumbnail_image}</image:loc>
      <image:title>${post.title}</image:title>
      <image:caption>Thumbnail for ${post.title} blog post</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
  
  <!-- Publisher Detail Pages -->
  ${publishers.map(publisher => {
    return `
  <url>
    <loc>${baseUrl}/publisher/${publisher.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/publisher/${publisher.slug}"/>
  </url>`;
  }).join('')}
  
  <!-- App Detail Pages -->
  ${apps.map(app => `
  <url>
    <loc>${baseUrl}/${app.slug}</loc>
    <lastmod>${app.updated_at || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/${app.slug}"/>
    ${app.icon ? `
    <image:image>
      <image:loc>${app.icon}</image:loc>
      <image:title>${app.name} icon</image:title>
      <image:caption>Icon for ${app.name} MOD APK</image:caption>
    </image:image>` : ''}
    ${app.screenshots && Array.isArray(app.screenshots) ? app.screenshots.map((screenshot, index) => `
    <image:image>
      <image:loc>${screenshot}</image:loc>
      <image:title>${app.name} screenshot ${index + 1}</image:title>
      <image:caption>Screenshot of ${app.name} MOD APK</image:caption>
    </image:image>`).join('') : ''}
  </url>
  <url>
    <loc>${baseUrl}/${app.slug}/download</loc>
    <lastmod>${app.updated_at || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/${app.slug}/download"/>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}