import { getAllApps, getAllBlogPosts, getAllBlogCategories, getAllBlogTags, getAllPublishers } from '../lib/supabase';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current timestamp for when sitemap was last updated
  const lastModified = new Date().toISOString();
  
  // Initialize arrays for all data
  let apps = [];
  let blogPosts = [];
  let blogCategories = [];
  let blogTags = [];
  let publishers = [];
  
  try {
    // Fetch all data
    apps = await getAllApps();
    console.log('Sitemap: Fetched apps:', apps.length);
  } catch (error) {
    console.error('Sitemap: Error fetching apps:', error);
    apps = [];
  }
  
  try {
    blogPosts = await getAllBlogPosts();
    console.log('Sitemap: Fetched blog posts:', blogPosts.length);
  } catch (error) {
    console.error('Sitemap: Error fetching blog posts:', error);
    blogPosts = [];
  }
  
  try {
    blogCategories = await getAllBlogCategories();
    console.log('Sitemap: Fetched blog categories:', blogCategories.length);
  } catch (error) {
    console.error('Sitemap: Error fetching blog categories:', error);
    blogCategories = ['Tutorials', 'News', 'Reviews', 'Tips & Tricks', 'Android', 'Technology', 'General'];
  }
  
  try {
    blogTags = await getAllBlogTags();
    console.log('Sitemap: Fetched blog tags:', blogTags.length);
  } catch (error) {
    console.error('Sitemap: Error fetching blog tags:', error);
    blogTags = [];
  }
  
  try {
    publishers = await getAllPublishers();
    console.log('Sitemap: Fetched publishers:', publishers.length);
  } catch (error) {
    console.error('Sitemap: Error fetching publishers:', error);
    publishers = [];
  }
  
  // Extract unique categories from apps
  const categories = [...new Set(apps.map(app => app.category).filter(Boolean))];
  
  console.log('Sitemap: Final counts:', {
    apps: apps.length,
    blogPosts: blogPosts.length,
    blogCategories: blogCategories.length,
    blogTags: blogTags.length,
    publishers: publishers.length,
    categories: categories.length
  });
  
  // Generate comprehensive sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/apps</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/categories</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/trending</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/games</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/search</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/help</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  
  <!-- Blog Pages -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog/tags</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Publisher Pages -->
  <url>
    <loc>${baseUrl}/publisher</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- App Category Pages -->
${categories.map(category => {
  const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `  <url>
    <loc>${baseUrl}/categories/${categorySlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join('\n')}
  
  <!-- Blog Category Pages -->
${blogCategories.map(category => {
  const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `  <url>
    <loc>${baseUrl}/blog/category/${categorySlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n')}
  
  <!-- Blog Tag Pages -->
${blogTags.map(tag => {
  const tagSlug = tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `  <url>
    <loc>${baseUrl}/blog/tag/${tagSlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join('\n')}
  
  <!-- Publisher Detail Pages -->
${publishers.map(publisher => `  <url>
    <loc>${baseUrl}/publisher/${publisher.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
  
  <!-- Blog Post Pages -->
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updated_at || post.published_date || lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    ${post.thumbnail_image ? `<image:image>
      <image:loc>${post.thumbnail_image}</image:loc>
      <image:title>${post.title}</image:title>
    </image:image>` : ''}
  </url>`).join('\n')}
  
  <!-- App Detail Pages -->
${apps.map(app => `  <url>
    <loc>${baseUrl}/${app.slug}</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${app.icon ? `<image:image>
      <image:loc>${app.icon}</image:loc>
      <image:title>${app.name} icon</image:title>
    </image:image>` : ''}
    ${app.screenshots && app.screenshots.length > 0 ? app.screenshots.map(screenshot => `<image:image>
      <image:loc>${screenshot}</image:loc>
      <image:title>${app.name} screenshot</image:title>
    </image:image>`).join('') : ''}
  </url>
  <url>
    <loc>${baseUrl}/${app.slug}/download</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}