/* empty css                                  */
import { e as createComponent, f as createAstro, h as addAttribute, r as renderTemplate, u as unescapeHTML, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CfnP6yzT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DQBJtahZ.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CY7kujTV.mjs';
import 'clsx';
import { b as getRelatedApps, g as getAllApps } from '../chunks/supabase_F9LZmeZc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    canonical,
    image,
    imageAlt,
    keywords,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "DexAPK",
    siteName = "DexAPK",
    twitterHandle = "@dexapk",
    noindex = false,
    nofollow = false
  } = Astro2.props;
  const currentUrl = canonical || Astro2.url.href;
  const absoluteImage = image ? image.startsWith("http") ? image : `${Astro2.site}${image}` : `${Astro2.site}/favicon.svg`;
  const cleanTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  const cleanDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const robotsContent = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`;
  return renderTemplate`<!-- Primary Meta Tags --><title>${cleanTitle}</title><meta name="title"${addAttribute(cleanTitle, "content")}><meta name="description"${addAttribute(cleanDescription, "content")}>${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}<meta name="robots"${addAttribute(robotsContent, "content")}><meta name="googlebot"${addAttribute(robotsContent, "content")}><meta name="bingbot"${addAttribute(robotsContent, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(currentUrl, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(currentUrl, "content")}><meta property="og:title"${addAttribute(cleanTitle, "content")}><meta property="og:description"${addAttribute(cleanDescription, "content")}><meta property="og:image"${addAttribute(absoluteImage, "content")}>${imageAlt && renderTemplate`<meta property="og:image:alt"${addAttribute(imageAlt, "content")}>`}<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name"${addAttribute(siteName, "content")}><meta property="og:locale" content="en_US">${publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`}${modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`}${author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`}<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"${addAttribute(currentUrl, "content")}><meta name="twitter:title"${addAttribute(cleanTitle, "content")}><meta name="twitter:description"${addAttribute(cleanDescription, "content")}><meta name="twitter:image"${addAttribute(absoluteImage, "content")}>${imageAlt && renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>`}${twitterHandle && renderTemplate`<meta name="twitter:site"${addAttribute(twitterHandle, "content")}>`}${twitterHandle && renderTemplate`<meta name="twitter:creator"${addAttribute(twitterHandle, "content")}>`}<!-- Additional SEO Meta Tags --><meta name="format-detection" content="telephone=no"><meta name="theme-color" content="#3b82f6"><meta name="msapplication-TileColor" content="#3b82f6"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title"${addAttribute(siteName, "content")}><!-- Structured Data for Apps -->${type === "article" && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title.replace(" MOD APK", "").replace(/v[\d.]+/, "").trim(),
    "description": cleanDescription,
    "image": absoluteImage,
    "url": currentUrl,
    "applicationCategory": "MobileApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": siteName,
      "url": Astro2.site
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": Astro2.site
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime
  })))}<!-- Preconnect to external domains for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- DNS Prefetch for better performance --><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com">`;
}, "/home/project/src/components/SEOHead.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const apps = await getAllApps();
    return apps.map((app) => ({
      params: { slug: app.slug },
      props: { app }
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { app } = Astro2.props;
  if (!app) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  let relatedApps = [];
  try {
    relatedApps = await getRelatedApps(app.slug, app.category, 4);
  } catch (error) {
    console.error("Error loading related apps:", error);
  }
  const seoTitle = app.seo_title || `${app.name} MOD APK v${app.version} - Premium Features Unlocked`;
  const seoDescription = app.seo_description || `Download ${app.name} MOD APK v${app.version} with premium features unlocked. ${app.description.substring(0, 100)}...`;
  const seoImage = app.seo_featured_image || app.icon || "/favicon.svg";
  const seoKeywords = app.seo_keywords || `${app.name.toLowerCase()}, ${app.category.toLowerCase()}, mod apk, premium unlocked, android app, free download`;
  const canonicalUrl = app.seo_canonical_url || `${Astro2.site}${app.slug}`;
  const publishedTime = new Date(app.created_at).toISOString();
  const modifiedTime = new Date(app.updated_at).toISOString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900"> <!-- Breadcrumbs with Schema.org markup --> <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Breadcrumb"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <ol class="flex items-center space-x-2 py-4 text-sm" role="list" itemscope itemtype="https://schema.org/BreadcrumbList"> <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"> <a href="/" itemprop="item" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"> <span itemprop="name">Home</span> <meta itemprop="position" content="1"> </a> </li> <li class="flex items-center"> <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </li> <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"> <a${addAttribute(`/categories/${app.category.toLowerCase()}`, "href")} itemprop="item" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"> <span itemprop="name">${app.category}</span> <meta itemprop="position" content="2"> </a> </li> <li class="flex items-center"> <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </li> <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"> <span itemprop="name" class="font-medium text-gray-900 dark:text-white">${app.name}</span> <meta itemprop="position" content="3"> </li> </ol> </div> </nav> <!-- App Details Section with Schema.org markup --> <section class="py-8 sm:py-12" itemscope itemtype="https://schema.org/SoftwareApplication"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"> <!-- App Header --> <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-8 sm:py-12"> <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6"> <!-- App Icon --> <div class="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center overflow-hidden"> ${app.icon ? renderTemplate`<img${addAttribute(app.icon, "src")}${addAttribute(`${app.name} icon`, "alt")} itemprop="image" class="w-full h-full object-cover rounded-3xl" loading="eager">` : renderTemplate`<svg class="w-16 h-16 sm:w-20 sm:h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path> </svg>`} </div> <!-- App Info --> <div class="flex-1 text-center sm:text-left"> <h1 itemprop="name" class="text-3xl sm:text-4xl font-bold text-white mb-2"> ${app.name} </h1> <p class="text-xl text-blue-100 mb-4">
v${app.version} MOD APK
</p> <p itemprop="description" class="text-blue-100 mb-6 max-w-2xl">
[Premium Unlocked] for Android
</p> <!-- App Stats --> <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-blue-100"> <div class="flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating"> <span itemprop="ratingValue">${app.rating}</span> <meta itemprop="bestRating" content="5"> <meta itemprop="worstRating" content="1"> <meta itemprop="ratingCount"${addAttribute(app.votes, "content")}> </span> </div> <div class="flex items-center gap-2"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path> </svg> <span>${app.votes.toLocaleString()} downloads</span> </div> <div class="flex items-center gap-2"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${app.last_updated}</span> </div> </div> </div> </div> </div> <!-- App Details Grid --> <div class="p-6 sm:p-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Content --> <div class="lg:col-span-2 space-y-8"> <!-- Quick Info --> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4"> <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center"> <div class="text-2xl font-bold text-gray-900 dark:text-white" itemprop="softwareVersion">v${app.version}</div> <div class="text-sm text-gray-600 dark:text-gray-400">Version</div> </div> <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center"> <div class="text-2xl font-bold text-gray-900 dark:text-white">${app.size}</div> <div class="text-sm text-gray-600 dark:text-gray-400">Size</div> </div> <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center"> <div class="text-2xl font-bold text-gray-900 dark:text-white" itemprop="applicationCategory">${app.category}</div> <div class="text-sm text-gray-600 dark:text-gray-400">Category</div> </div> <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center"> <div class="text-2xl font-bold text-gray-900 dark:text-white">${app.price}</div> <div class="text-sm text-gray-600 dark:text-gray-400">Price</div> </div> </div> <!-- Description --> <div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About ${app.name}</h2> <div class="prose prose-gray dark:prose-invert max-w-none"> <p class="text-gray-600 dark:text-gray-300 leading-relaxed"> ${app.description} </p> </div> </div> <!-- MOD Features --> ${app.mod_info && app.mod_info.length > 0 && renderTemplate`<div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">🔥 MOD Features</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> ${app.mod_info.map((feature, index) => renderTemplate`<div${addAttribute(index, "key")} class="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"> <svg class="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-900 dark:text-white font-medium">${feature}</span> </div>`)} </div> </div>`} <!-- App Features --> ${app.features && app.features.length > 0 && renderTemplate`<div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">✨ Features</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> ${app.features.map((feature, index) => renderTemplate`<div${addAttribute(index, "key")} class="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"> <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-900 dark:text-white font-medium">${feature}</span> </div>`)} </div> </div>`} <!-- Screenshots --> ${app.screenshots && app.screenshots.length > 0 && renderTemplate`<div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">📱 Screenshots</h3> <div class="grid grid-cols-2 sm:grid-cols-3 gap-4"> ${app.screenshots.map((screenshot, index) => renderTemplate`<div${addAttribute(index, "key")} class="aspect-[9/16] bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden"> <img${addAttribute(screenshot, "src")}${addAttribute(`${app.name} screenshot ${index + 1}`, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy"> </div>`)} </div> </div>`} </div> <!-- Sidebar --> <div class="space-y-6"> <!-- Download Card --> <div class="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 text-white text-center"> <h3 class="text-xl font-bold mb-4">Download Now</h3> <a${addAttribute(app.download_url || "#", "href")} class="block w-full bg-white text-gray-900 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200 mb-4" itemprop="downloadUrl"> <svg class="w-6 h-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path> </svg>
Download APK
</a> <p class="text-sm text-blue-100">
Safe & Secure • No Malware • Fast Download
</p> </div> <!-- App Info --> <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6"> <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">App Information</h3> <div class="space-y-3"> <div class="flex justify-between"> <span class="text-gray-600 dark:text-gray-400">Publisher</span> <span class="font-medium text-gray-900 dark:text-white" itemprop="author">${app.publisher}</span> </div> <div class="flex justify-between"> <span class="text-gray-600 dark:text-gray-400">Requirements</span> <span class="font-medium text-gray-900 dark:text-white" itemprop="operatingSystem">${app.requirements}</span> </div> <div class="flex justify-between"> <span class="text-gray-600 dark:text-gray-400">Platform</span> <span class="font-medium text-gray-900 dark:text-white">${app.platform}</span> </div> <div class="flex justify-between"> <span class="text-gray-600 dark:text-gray-400">Last Updated</span> <span class="font-medium text-gray-900 dark:text-white"> <time itemprop="dateModified"${addAttribute(modifiedTime, "datetime")}> ${app.last_updated} </time> </span> </div> </div> </div> <!-- Rating Card --> <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center"> <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">User Rating</h3> <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">${app.rating}</div> <div class="flex justify-center mb-2"> ${[1, 2, 3, 4, 5].map((star) => renderTemplate`<svg${addAttribute(star, "key")}${addAttribute(`w-5 h-5 ${star <= Math.floor(app.rating) ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-sm text-gray-600 dark:text-gray-400">
Based on ${app.votes.toLocaleString()} reviews
</p> </div> </div> </div> </div> </div> </div> </section> <!-- Related Apps --> ${relatedApps.length > 0 && renderTemplate`<section class="py-8 sm:py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
More ${app.category} Apps
</h2> <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"> ${relatedApps.map((relatedApp) => renderTemplate`<article class="group bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-600"> <a${addAttribute(`/${relatedApp.slug}`, "href")} class="block"> <div class="relative h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"> <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-2xl flex items-center justify-center overflow-hidden"> ${relatedApp.icon ? renderTemplate`<img${addAttribute(relatedApp.icon, "src")}${addAttribute(`${relatedApp.name} icon`, "alt")} class="w-full h-full object-cover rounded-2xl" loading="lazy">` : renderTemplate`<svg class="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path> </svg>`} </div> </div> <div class="p-3"> <h3 class="font-semibold text-gray-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"> ${relatedApp.name} </h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">${relatedApp.category}</p> <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span>${relatedApp.rating}</span> </div> <span>${relatedApp.size}</span> </div> </div> </a> </article>`)} </div> </div> </section>`} </main> ${renderComponent($$result2, "Footer", $$Footer, {})}  <meta itemprop="datePublished"${addAttribute(publishedTime, "content")}> <meta itemprop="dateModified"${addAttribute(modifiedTime, "content")}> <meta itemprop="url"${addAttribute(canonicalUrl, "content")}> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEOHead", $$SEOHead, { "slot": "head", "title": seoTitle, "description": seoDescription, "canonical": canonicalUrl, "image": seoImage, "imageAlt": `${app.name} MOD APK icon`, "keywords": seoKeywords, "type": "article", "publishedTime": publishedTime, "modifiedTime": modifiedTime, "author": "DexAPK Team", "siteName": "DexAPK", "twitterHandle": "@dexapk" })}` })}`;
}, "/home/project/src/pages/[slug].astro", void 0);

const $$file = "/home/project/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
