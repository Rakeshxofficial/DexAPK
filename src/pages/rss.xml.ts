import { getAllApps } from '../lib/supabase';
import { getAllBlogPosts } from '../lib/supabase';

export async function GET() {
  const apps = await getAllApps();
  const blogPosts = await getAllBlogPosts();
  
  // Base URL for the site
  const baseUrl = 'https://dexapk.com';
  
  // Current date in RFC 822 format
  const now = new Date().toUTCString();
  
  // Sort apps by updated_at date (newest first)
  const sortedApps = [...apps].sort((a, b) => {
    const dateA = new Date(a.updated_at || a.created_at || 0);
    const dateB = new Date(b.updated_at || b.created_at || 0);
    return dateB.getTime() - dateA.getTime();
  });
  
  // Sort blog posts by published_date (newest first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.published_date || a.created_at || 0);
    const dateB = new Date(b.published_date || b.created_at || 0);
    return dateB.getTime() - dateA.getTime();
  });
  
  // Take only the 20 most recent apps
  const recentApps = sortedApps.slice(0, 20);
  
  // Take only the 10 most recent blog posts
  const recentBlogPosts = sortedBlogPosts.slice(0, 10);
  
  // Generate RSS XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DexAPK - Latest MOD APKs and Blog Posts</title>
    <link>${baseUrl}</link>
    <description>Download the latest modified Android applications with premium features unlocked. Read our blog for tutorials and insights. Fast, secure, and always updated.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/favicon.svg</url>
      <title>DexAPK</title>
      <link>${baseUrl}</link>
    </image>
    <category>Android</category>
    <category>APK</category>
    <category>MOD</category>
    <category>Apps</category>
    <category>Games</category>
    <category>Blog</category>
    <category>Tutorials</category>
    
    ${recentApps.map(app => `
    <item>
      <title>${app.name} v${app.version} MOD APK</title>
      <link>${baseUrl}/${app.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${app.slug}</guid>
      <pubDate>${new Date(app.updated_at || app.created_at || now).toUTCString()}</pubDate>
      <description><![CDATA[
        <p>${app.description}</p>
        <h3>Features:</h3>
        <ul>
          ${app.features ? app.features.map(feature => `<li>${feature}</li>`).join('') : ''}
        </ul>
        <h3>MOD Info:</h3>
        <ul>
          ${app.mod_info ? app.mod_info.map(info => `<li>${info}</li>`).join('') : ''}
        </ul>
        <p><a href="${baseUrl}/${app.slug}">Download Now</a></p>
      ]]></description>
      <category>${app.category}</category>
    </item>`).join('')}
    
    ${recentBlogPosts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.published_date || post.created_at || now).toUTCString()}</pubDate>
      <description><![CDATA[
        ${post.excerpt ? `<p>${post.excerpt}</p>` : ''}
        <p>By ${post.author} | ${post.reading_time || 5} min read</p>
        <p><a href="${baseUrl}/blog/${post.slug}">Read Full Article</a></p>
      ]]></description>
      <category>${post.category}</category>
      <author>${post.author}</author>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
}