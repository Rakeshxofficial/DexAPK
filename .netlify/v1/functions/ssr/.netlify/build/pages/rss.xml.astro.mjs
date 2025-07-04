import { g as getAllApps } from '../chunks/supabase_F9LZmeZc.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const apps = await getAllApps();
  const baseUrl = "https://dexapk.com";
  const now = (/* @__PURE__ */ new Date()).toUTCString();
  const sortedApps = [...apps].sort((a, b) => {
    const dateA = new Date(a.updated_at || a.created_at || 0);
    const dateB = new Date(b.updated_at || b.created_at || 0);
    return dateB.getTime() - dateA.getTime();
  });
  const recentApps = sortedApps.slice(0, 20);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DexAPK - Latest MOD APKs</title>
    <link>${baseUrl}</link>
    <description>Download the latest modified Android applications with premium features unlocked. Fast, secure, and always updated.</description>
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
    
    ${recentApps.map((app) => `
    <item>
      <title>${app.name} v${app.version} MOD APK</title>
      <link>${baseUrl}/${app.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${app.slug}</guid>
      <pubDate>${new Date(app.updated_at || app.created_at || now).toUTCString()}</pubDate>
      <description><![CDATA[
        <p>${app.description}</p>
        <h3>Features:</h3>
        <ul>
          ${app.features ? app.features.map((feature) => `<li>${feature}</li>`).join("") : ""}
        </ul>
        <h3>MOD Info:</h3>
        <ul>
          ${app.mod_info ? app.mod_info.map((info) => `<li>${info}</li>`).join("") : ""}
        </ul>
        <p><a href="${baseUrl}/${app.slug}">Download Now</a></p>
      ]]></description>
      <category>${app.category}</category>
    </item>`).join("")}
  </channel>
</rss>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=3600"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
