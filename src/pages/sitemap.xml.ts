import { getAllApps } from '../lib/supabase';

export async function GET({ request }) {
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Use a fixed date to prevent constant regeneration
  const lastModified = '2025-07-26T07:00:00.000Z';
  
  // Initialize arrays for all data
  let apps = [];
  let blogPosts = [];
  let blogCategories = [];
  let blogTags = [];
  let publishers = [];
  
  try {
    // Try to fetch apps data
    apps = await getAllApps();
    console.log('Fetched apps for sitemap:', apps.length);
  } catch (error) {
    console.error('Error fetching apps for sitemap:', error);
    apps = [];
  }
  
  try {
    // Import blog functions dynamically
    const supabaseModule = await import('../lib/supabase');
    
    // Fetch blog posts
    try {
      blogPosts = await supabaseModule.getAllBlogPosts();
      console.log('Fetched blog posts for sitemap:', blogPosts.length);
    } catch (error) {
      console.error('Error fetching blog posts for sitemap:', error);
      blogPosts = [];
    }
    
    // Fetch blog categories
    try {
      blogCategories = await supabaseModule.getAllBlogCategories();
      console.log('Fetched blog categories for sitemap:', blogCategories.length);
    } catch (error) {
      console.error('Error fetching blog categories for sitemap:', error);
      blogCategories = [];
    }
    
    // Fetch blog tags
    try {
      blogTags = await supabaseModule.getAllBlogTags();
      console.log('Fetched blog tags for sitemap:', blogTags.length);
    } catch (error) {
      console.error('Error fetching blog tags for sitemap:', error);
      blogTags = [];
    }
    
    // Fetch publishers
    try {
      publishers = await supabaseModule.getAllPublishers();
      console.log('Fetched publishers for sitemap:', publishers.length);
    } catch (error) {
      console.error('Error fetching publishers for sitemap:', error);
      publishers = [];
    }
  } catch (importError) {
    console.error('Error importing blog functions for sitemap:', importError);
  }
  
  // Provide fallback data if database calls fail
  if (blogCategories.length === 0) {
    blogCategories = ['Tutorials', 'News', 'Reviews', 'Tips & Tricks', 'Android', 'Technology', 'General'];
    console.log('Using fallback blog categories');
  }
  
  if (blogTags.length === 0) {
    blogTags = ['android', 'tutorial', 'mod apk', 'guide', 'tips', 'review', 'news', 'technology', 'apps', 'games'];
    console.log('Using fallback blog tags');
  }
  
  if (publishers.length === 0) {
    publishers = [
      { name: 'DexAPK Team', slug: 'dexapk-team' },
      { name: 'Google LLC', slug: 'google-llc' },
      { name: 'Meta Platforms', slug: 'meta-platforms' },
      { name: 'Microsoft Corporation', slug: 'microsoft-corporation' },
      { name: 'Adobe Inc.', slug: 'adobe-inc' },
      { name: 'Spotify AB', slug: 'spotify-ab' }
    ];
    console.log('Using fallback publishers');
  }
  
  // If no blog posts from database, create some sample ones
  if (blogPosts.length === 0) {
    blogPosts = [
      {
        slug: 'how-to-install-mod-apks-safely',
        title: 'How to Install MOD APKs Safely',
        updated_at: lastModified,
        thumbnail_image: null
      },
      {
        slug: 'best-android-games-2025',
        title: 'Best Android Games 2025',
        updated_at: lastModified,
        thumbnail_image: null
      },
      {
        slug: 'top-productivity-apps-with-premium-features',
        title: 'Top Productivity Apps with Premium Features',
        updated_at: lastModified,
        thumbnail_image: null
      }
    ];
    console.log('Using fallback blog posts');
  }
  
  console.log('Final counts for sitemap:', {
    apps: apps.length,
    blogPosts: blogPosts.length,
    blogCategories: blogCategories.length,
    blogTags: blogTags.length,
    publishers: publishers.length
  });
  
  // Generate sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastModified}</lastmod>
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
    <changefreq>monthly</changefreq>
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
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/tags</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/publisher</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Category Pages -->
  <url>
    <loc>${baseUrl}/categories/productivity</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/music</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/video</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/entertainment</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/social</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/photography</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/games</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/media</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories/apps</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog Category Pages -->
  ${blogCategories.map(category => {
    const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `
  <url>
    <loc>${baseUrl}/blog/category/${categorySlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('')}
  
  <!-- Blog Tag Pages -->
  ${blogTags.map(tag => {
    const tagSlug = tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `
  <url>
    <loc>${baseUrl}/blog/tag/${tagSlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }).join('')}
  
  <!-- Blog Post Pages -->
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>${post.thumbnail_image ? `
    <image:image>
      <image:loc>${post.thumbnail_image}</image:loc>
      <image:title>${post.title}</image:title>
      <image:caption>Thumbnail for ${post.title} blog post</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
  
  <!-- Publisher Detail Pages -->
  ${publishers.map(publisher => `
  <url>
    <loc>${baseUrl}/publisher/${publisher.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
  
  <!-- App Detail Pages -->
  ${apps.map(app => `
  <url>
    <loc>${baseUrl}/${app.slug}</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>${app.icon ? `
    <image:image>
      <image:loc>${app.icon}</image:loc>
      <image:title>${app.name} icon</image:title>
      <image:caption>Icon for ${app.name} MOD APK</image:caption>
    </image:image>` : ''}${app.screenshots && Array.isArray(app.screenshots) ? app.screenshots.map((screenshot, index) => `
    <image:image>
      <image:loc>${screenshot}</image:loc>
      <image:title>${app.name} screenshot ${index + 1}</image:title>
      <image:caption>Screenshot of ${app.name} MOD APK</image:caption>
    </image:image>`).join('') : ''}
  </url>
  <url>
    <loc>${baseUrl}/${app.slug}/download</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}