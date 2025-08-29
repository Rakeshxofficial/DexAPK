import { getAllBlogPosts, getAllBlogCategories, getAllBlogTags } from '../assets/supabase.Y_3SlIME.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';

async function GET() {
  const baseUrl = "https://dexapk.com";
  const lastModified = "2025-07-26T07:30:00.000Z";
  let blogPosts = [];
  let blogCategories = [];
  let blogTags = [];
  try {
    blogPosts = await getAllBlogPosts();
    console.log("Blog sitemap: Fetched blog posts:", blogPosts.length);
  } catch (error) {
    console.error("Blog sitemap: Error fetching blog posts:", error);
    blogPosts = [
      {
        slug: "how-to-install-mod-apks-safely",
        title: "How to Install MOD APKs Safely",
        updated_at: lastModified,
        published_date: "2025-01-10"
      },
      {
        slug: "best-android-games-2025",
        title: "Best Android Games 2025",
        updated_at: lastModified,
        published_date: "2025-01-12"
      },
      {
        slug: "top-productivity-apps-with-premium-features",
        title: "Top Productivity Apps with Premium Features",
        updated_at: lastModified,
        published_date: "2025-01-14"
      },
      {
        slug: "ultimate-guide-to-mod-apks",
        title: "Ultimate Guide to MOD APKs",
        updated_at: lastModified,
        published_date: "2025-01-08"
      },
      {
        slug: "android-security-tips-for-mod-apps",
        title: "Android Security Tips for MOD Apps",
        updated_at: lastModified,
        published_date: "2025-01-06"
      },
      {
        slug: "best-music-streaming-apps-modded",
        title: "Best Music Streaming Apps Modded",
        updated_at: lastModified,
        published_date: "2025-01-04"
      },
      {
        slug: "video-editing-apps-premium-unlocked",
        title: "Video Editing Apps Premium Unlocked",
        updated_at: lastModified,
        published_date: "2025-01-02"
      },
      {
        slug: "social-media-apps-without-ads",
        title: "Social Media Apps Without Ads",
        updated_at: lastModified,
        published_date: "2024-12-30"
      },
      {
        slug: "photography-apps-pro-features-free",
        title: "Photography Apps Pro Features Free",
        updated_at: lastModified,
        published_date: "2024-12-28"
      },
      {
        slug: "gaming-apps-unlimited-resources",
        title: "Gaming Apps Unlimited Resources",
        updated_at: lastModified,
        published_date: "2024-12-26"
      }
    ];
  }
  try {
    blogCategories = await getAllBlogCategories();
    console.log("Blog sitemap: Fetched blog categories:", blogCategories.length);
  } catch (error) {
    console.error("Blog sitemap: Error fetching blog categories:", error);
    blogCategories = ["Tutorials", "News", "Reviews", "Tips & Tricks", "Android", "Technology", "General"];
  }
  try {
    blogTags = await getAllBlogTags();
    console.log("Blog sitemap: Fetched blog tags:", blogTags.length);
  } catch (error) {
    console.error("Blog sitemap: Error fetching blog tags:", error);
    blogTags = [
      "android",
      "tutorial",
      "mod apk",
      "guide",
      "tips",
      "review",
      "news",
      "technology",
      "apps",
      "games",
      "productivity",
      "music",
      "video",
      "entertainment",
      "social",
      "photography",
      "security",
      "installation",
      "premium",
      "unlocked",
      "features",
      "download",
      "mobile",
      "smartphone"
    ];
  }
  console.log("Blog sitemap: Final counts:", {
    blogPosts: blogPosts.length,
    blogCategories: blogCategories.length,
    blogTags: blogTags.length
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Blog Main Page -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog Tags Index -->
  <url>
    <loc>${baseUrl}/blog/tags</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog Category Pages -->
${blogCategories.map((category) => {
    const categorySlug = category.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `  <url>
    <loc>${baseUrl}/blog/category/${categorySlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join("\n")}
  
  <!-- Blog Tag Pages -->
${blogTags.map((tag) => {
    const tagSlug = tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `  <url>
    <loc>${baseUrl}/blog/tag/${tagSlug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join("\n")}
  
  <!-- Blog Post Pages -->
${blogPosts.map((post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updated_at || post.published_date || lastModified}</lastmod>
    <changefreq>monthly</changefreq>
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
