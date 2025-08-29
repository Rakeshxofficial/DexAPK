import { getAllApps } from '../assets/supabase.Y_3SlIME.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';

async function GET() {
  const baseUrl = "https://dexapk.com";
  const lastModified = "2025-07-26T07:30:00.000Z";
  let apps = [];
  let categories = [];
  let publishers = [];
  try {
    apps = await getAllApps();
    console.log("Apps sitemap: Fetched apps:", apps.length);
  } catch (error) {
    console.error("Apps sitemap: Error fetching apps:", error);
    apps = [];
  }
  try {
    const supabaseModule = await import('../assets/supabase.Y_3SlIME.js');
    try {
      publishers = await supabaseModule.getAllPublishers();
      console.log("Apps sitemap: Fetched publishers:", publishers.length);
    } catch (error) {
      console.error("Apps sitemap: Error fetching publishers:", error);
      publishers = [];
    }
  } catch (importError) {
    console.error("Apps sitemap: Error importing functions:", importError);
  }
  if (apps.length > 0) {
    categories = [...new Set(apps.map((app) => app.category).filter(Boolean))];
  } else {
    categories = ["Productivity", "Music", "Video", "Entertainment", "Social", "Photography", "Games", "Media", "Apps"];
  }
  if (publishers.length === 0) {
    publishers = [
      { name: "DexAPK Team", slug: "dexapk-team" },
      { name: "Google LLC", slug: "google-llc" },
      { name: "Meta Platforms", slug: "meta-platforms" },
      { name: "Microsoft Corporation", slug: "microsoft-corporation" },
      { name: "Adobe Inc.", slug: "adobe-inc" },
      { name: "Spotify AB", slug: "spotify-ab" },
      { name: "Netflix Inc.", slug: "netflix-inc" },
      { name: "TikTok Pte. Ltd.", slug: "tiktok-pte-ltd" },
      { name: "Instagram LLC", slug: "instagram-llc" },
      { name: "WhatsApp LLC", slug: "whatsapp-llc" }
    ];
    console.log("Apps sitemap: Using fallback publishers");
  }
  console.log("Apps sitemap: Final counts:", {
    apps: apps.length,
    categories: categories.length,
    publishers: publishers.length
  });
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
${categories.map((category) => {
    const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `  <url>
    <loc>${baseUrl}/categories/${categorySlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join("\n")}
  
  <!-- Publisher Detail Pages -->
${publishers.map((publisher) => `  <url>
    <loc>${baseUrl}/publisher/${publisher.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join("\n")}
  
  <!-- App Detail Pages -->
${apps.map((app) => `  <url>
    <loc>${baseUrl}/${app.slug}</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/${app.slug}/download</loc>
    <lastmod>${app.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
