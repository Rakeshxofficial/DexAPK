import { getAllApps } from '../lib/supabase';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current timestamp for when sitemap was last updated
  const lastModified = '2025-07-26T07:30:00.000Z';
  
  // Initialize arrays for apps data
  let apps = [];
  let categories = [];
  let publishers = [];
  
  try {
    // Fetch apps
    apps = await getAllApps();
    console.log('Apps sitemap: Fetched apps:', apps.length);
  } catch (error) {
    console.error('Apps sitemap: Error fetching apps:', error);
    // Fallback apps data
    apps = [];
  }
  
  try {
    // Import functions dynamically to avoid build issues
    const supabaseModule = await import('../lib/supabase');
    
    // Fetch publishers
    try {
      publishers = await supabaseModule.getAllPublishers();
      console.log('Apps sitemap: Fetched publishers:', publishers.length);
    } catch (error) {
      console.error('Apps sitemap: Error fetching publishers:', error);
      publishers = [];
    }
  } catch (importError) {
    console.error('Apps sitemap: Error importing functions:', importError);
  }
  
  // Extract unique categories from apps
  if (apps.length > 0) {
    categories = [...new Set(apps.map(app => app.category).filter(Boolean))];
  } else {
    // Fallback categories
    categories = ['Productivity', 'Music', 'Video', 'Entertainment', 'Social', 'Photography', 'Games', 'Media', 'Apps'];
  }
  
  // Provide comprehensive fallback data if database calls fail
  if (publishers.length === 0) {
    publishers = [
      { name: 'DexAPK Team', slug: 'dexapk-team' },
      { name: 'Google LLC', slug: 'google-llc' },
      { name: 'Meta Platforms', slug: 'meta-platforms' },
      { name: 'Microsoft Corporation', slug: 'microsoft-corporation' },
      { name: 'Adobe Inc.', slug: 'adobe-inc' },
      { name: 'Spotify AB', slug: 'spotify-ab' },
      { name: 'Netflix Inc.', slug: 'netflix-inc' },
      { name: 'TikTok Pte. Ltd.', slug: 'tiktok-pte-ltd' },
      { name: 'Instagram LLC', slug: 'instagram-llc' },
      { name: 'WhatsApp LLC', slug: 'whatsapp-llc' }
    ];
    console.log('Apps sitemap: Using fallback publishers');
  }
  
  console.log('Apps sitemap: Final counts:', {
    apps: apps.length,
    categories: categories.length,
    publishers: publishers.length
  });
  
  // Generate apps sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Apps Main Page -->
  <url>
    <loc>${baseUrl}/apps</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Categories Main Page -->
  <url>
    <loc>${baseUrl}/categories</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Trending Page -->
  <url>
    <loc>${baseUrl}/trending</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Games Page -->
  <url>
    <loc>${baseUrl}/games</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Publisher Main Page -->
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
  
  <!-- Publisher Detail Pages -->
${publishers.map(publisher => `  <url>
    <loc>${baseUrl}/publisher/${publisher.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
  
  <!-- App Detail Pages -->
${apps.map(app => `  <url>
    <loc>${baseUrl}/${app.slug}</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/${app.slug}/amp</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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