import { getAllApps } from '../lib/supabase';

export async function GET() {
  const apps = await getAllApps();
  
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current date in ISO format
  const now = new Date().toISOString();
  
  // Generate Image Sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${apps.map(app => `
  <url>
    <loc>${baseUrl}/${app.slug}</loc>
    <lastmod>${app.updated_at || now}</lastmod>
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
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}