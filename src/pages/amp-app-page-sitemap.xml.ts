import { getAllApps } from '../lib/supabase';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current timestamp for when sitemap was last updated
  const lastModified = new Date().toISOString();
  
  // Initialize array for apps data
  let apps = [];
  
  try {
    // Fetch apps
    apps = await getAllApps();
    console.log('AMP App sitemap: Fetched apps:', apps.length);
  } catch (error) {
    console.error('AMP App sitemap: Error fetching apps:', error);
    // Fallback apps data for demo purposes
    apps = [
      {
        slug: 'chatgpt-premium',
        name: 'ChatGPT Premium',
        updated_at: lastModified,
        created_at: '2025-01-15T00:00:00Z'
      },
      {
        slug: 'spotify-premium',
        name: 'Spotify Premium', 
        updated_at: lastModified,
        created_at: '2025-01-12T00:00:00Z'
      },
      {
        slug: 'netflix-premium',
        name: 'Netflix Premium',
        updated_at: lastModified,
        created_at: '2025-01-10T00:00:00Z'
      },
      {
        slug: 'youtube-premium',
        name: 'YouTube Premium',
        updated_at: lastModified,
        created_at: '2025-01-08T00:00:00Z'
      },
      {
        slug: 'instagram-plus',
        name: 'Instagram Plus',
        updated_at: lastModified,
        created_at: '2025-01-06T00:00:00Z'
      }
    ];
  }
  
  console.log('AMP App sitemap: Final count:', apps.length);
  
  // Generate AMP app pages sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- AMP App Detail Pages -->
${apps.map(app => `  <url>
    <loc>${baseUrl}/${app.slug}/amp</loc>
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