import '../assets/supabase.Y_3SlIME.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';

async function GET({ request }) {
  const baseUrl = "https://dexapk.com";
  const lastModified = "2025-07-26T07:30:00.000Z";
  let blogPosts = [];
  let blogCategories = [];
  let blogTags = [];
  let publishers = [];
  try {
    const supabaseModule = await import('../assets/supabase.Y_3SlIME.js');
    try {
      blogPosts = await supabaseModule.getAllBlogPosts();
      console.log("Sitemap: Fetched blog posts:", blogPosts.length);
    } catch (error) {
      console.error("Sitemap: Error fetching blog posts:", error);
      blogPosts = [];
    }
    try {
      blogCategories = await supabaseModule.getAllBlogCategories();
      console.log("Sitemap: Fetched blog categories:", blogCategories.length);
    } catch (error) {
      console.error("Sitemap: Error fetching blog categories:", error);
      blogCategories = [];
    }
    try {
      blogTags = await supabaseModule.getAllBlogTags();
      console.log("Sitemap: Fetched blog tags:", blogTags.length);
    } catch (error) {
      console.error("Sitemap: Error fetching blog tags:", error);
      blogTags = [];
    }
    try {
      publishers = await supabaseModule.getAllPublishers();
      console.log("Sitemap: Fetched publishers:", publishers.length);
    } catch (error) {
      console.error("Sitemap: Error fetching publishers:", error);
      publishers = [];
    }
  } catch (importError) {
    console.error("Sitemap: Error importing blog functions:", importError);
  }
  if (blogCategories.length === 0) {
    blogCategories = ["Tutorials", "News", "Reviews", "Tips & Tricks", "Android", "Technology", "General"];
    console.log("Sitemap: Using fallback blog categories");
  }
  if (blogTags.length === 0) {
    blogTags = ["android", "tutorial", "mod apk", "guide", "tips", "review", "news", "technology", "apps", "games", "productivity", "music", "video", "entertainment", "social", "photography"];
    console.log("Sitemap: Using fallback blog tags");
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
    console.log("Sitemap: Using fallback publishers");
  }
  if (blogPosts.length === 0) {
    blogPosts = [
      {
        slug: "how-to-install-mod-apks-safely",
        title: "How to Install MOD APKs Safely",
        updated_at: lastModified
      },
      {
        slug: "best-android-games-2025",
        title: "Best Android Games 2025",
        updated_at: lastModified
      },
      {
        slug: "top-productivity-apps-with-premium-features",
        title: "Top Productivity Apps with Premium Features",
        updated_at: lastModified
      },
      {
        slug: "ultimate-guide-to-mod-apks",
        title: "Ultimate Guide to MOD APKs",
        updated_at: lastModified
      },
      {
        slug: "android-security-tips-for-mod-apps",
        title: "Android Security Tips for MOD Apps",
        updated_at: lastModified
      },
      {
        slug: "best-music-streaming-apps-modded",
        title: "Best Music Streaming Apps Modded",
        updated_at: lastModified
      },
      {
        slug: "video-editing-apps-premium-unlocked",
        title: "Video Editing Apps Premium Unlocked",
        updated_at: lastModified
      },
      {
        slug: "social-media-apps-without-ads",
        title: "Social Media Apps Without Ads",
        updated_at: lastModified
      },
      {
        slug: "photography-apps-pro-features-free",
        title: "Photography Apps Pro Features Free",
        updated_at: lastModified
      },
      {
        slug: "gaming-apps-unlimited-resources",
        title: "Gaming Apps Unlimited Resources",
        updated_at: lastModified
      }
    ];
    console.log("Sitemap: Using fallback blog posts");
  }
  console.log("Sitemap: Final counts:", {
    blogPosts: blogPosts.length,
    blogCategories: blogCategories.length,
    blogTags: blogTags.length,
    publishers: publishers.length
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
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
  
  <!-- Blog Main Pages -->
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
  
  <!-- Blog Category Pages -->${blogCategories.map((category) => {
    const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `
  <url>
    <loc>${baseUrl}/blog/category/${categorySlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join("")}
  
  <!-- Blog Tag Pages -->${blogTags.map((tag) => {
    const tagSlug = tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `
  <url>
    <loc>${baseUrl}/blog/tag/${tagSlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }).join("")}
  
  <!-- Blog Post Pages -->${blogPosts.map((post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updated_at || lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("")}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "noindex"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
