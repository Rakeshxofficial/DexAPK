import { c as createComponent, d as createAstro, r as renderComponent, f as renderScript, a as renderTemplate, F as Fragment, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../../assets/Footer.WjzTwqKo.js';
import { $ as $$BreadcrumbNav } from '../../assets/BreadcrumbNav.umEPYkbh.js';
import { $ as $$ImageOptimized } from '../../assets/ImageOptimized.BHpdBgJX.js';
import { $ as $$MarkdownRenderer } from '../../assets/MarkdownRenderer.DssP-rX_.js';
import { getRelatedBlogPosts, getAllBlogPosts } from '../../assets/supabase.Y_3SlIME.js';
/* empty css                                    */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const blogPosts = await getAllBlogPosts();
    return blogPosts.map((post) => ({
      params: { slug: post.slug },
      props: { post }
    }));
  } catch (error) {
    console.error("Error generating static paths for blog:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { post } = Astro2.props;
  if (!post) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  let relatedPosts = [];
  try {
    relatedPosts = await getRelatedBlogPosts(post.slug, post.category, 3);
  } catch (error) {
    console.error("Error loading related posts:", error);
  }
  const seoTitle = post.seo_title || `${post.title} - DexAPK Blog`;
  const seoDescription = post.seo_description || post.excerpt || `${post.title} - Read the latest insights and tutorials on DexAPK Blog.`;
  const seoKeywords = post.seo_keywords || `${post.title.toLowerCase()}, ${post.category.toLowerCase()}, android, apk, blog, tutorial`;
  const canonicalUrl = `https://dexapk.com/blog/${post.slug}`;
  const seoData = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    canonicalUrl,
    featuredImage: post.thumbnail_image || "/web-app-manifest-512x512.png",
    type: "article"
  };
  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  const readingTime = post.reading_time || calculateReadingTime(post.content);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seoData": seoData, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-4sn4zg3r> <!-- Enhanced Breadcrumbs --> <div class="breadcrumb-wrapper" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}`, current: true }
  ], "data-astro-cid-4sn4zg3r": true })} </div> <!-- Article Header --> <article class="bg-white dark:bg-gray-800 py-8 sm:py-12" data-astro-cid-4sn4zg3r> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-4sn4zg3r> <!-- Article Meta --> <div class="text-center mb-8" data-astro-cid-4sn4zg3r> <div class="flex items-center justify-center mb-4" data-astro-cid-4sn4zg3r> <a${addAttribute(`/blog/category/${post.category.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, "href")} class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200" data-astro-cid-4sn4zg3r> ${post.category} </a> </div> <!-- Article Title --> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" data-astro-cid-4sn4zg3r> ${post.title} </h1> <!-- Article Info --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8" data-astro-cid-4sn4zg3r> <div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center" data-astro-cid-4sn4zg3r> <span class="text-white text-sm font-bold" data-astro-cid-4sn4zg3r>${post.author.charAt(0).toUpperCase()}</span> </div> <a${addAttribute(`/publisher/${post.author.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, "href")} class="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200" data-astro-cid-4sn4zg3r> ${post.author} </a> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> <time${addAttribute(post.published_date, "datetime")} data-astro-cid-4sn4zg3r>${formatDate(post.published_date)}</time> </div> <div class="flex items-center gap-1" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>${readingTime} min read</span> </div> </div> </div> <!-- Thumbnail Image --> ${post.thumbnail_image && renderTemplate`<div class="mb-8" data-astro-cid-4sn4zg3r> <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "ImageOptimized", $$ImageOptimized, { "src": post.thumbnail_image, "alt": post.title, "class": "w-full h-full object-cover", "loading": "eager", "fetchpriority": "high", "width": 800, "height": 450, "placeholder": "blur", "quality": 90, "data-astro-cid-4sn4zg3r": true })} </div> </div>`} </div> </article> <!-- Article Content --> <section class="py-8 sm:py-12" data-astro-cid-4sn4zg3r> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-4sn4zg3r> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8" data-astro-cid-4sn4zg3r> <!-- Main Content --> <div class="lg:col-span-3" data-astro-cid-4sn4zg3r> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700" data-astro-cid-4sn4zg3r> <!-- Article Content with Markdown --> ${renderComponent($$result2, "MarkdownRenderer", $$MarkdownRenderer, { "content": post.content, "generateToc": true, "data-astro-cid-4sn4zg3r": true })} <!-- Tags --> ${post.tags && post.tags.length > 0 && renderTemplate`<div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700" data-astro-cid-4sn4zg3r> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-astro-cid-4sn4zg3r>Tags</h3> <div class="flex flex-wrap gap-2" data-astro-cid-4sn4zg3r> ${post.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, "href")} class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200" data-astro-cid-4sn4zg3r>
#${tag} </a>`)} </div> </div>`} <!-- Share Section --> <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700" data-astro-cid-4sn4zg3r> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-astro-cid-4sn4zg3r>Share this article</h3> <div class="flex items-center justify-center gap-3 flex-wrap" data-astro-cid-4sn4zg3r> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Share on X (Twitter)" title="Share on X" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-4sn4zg3r></path> </svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Share on Facebook" title="Share on Facebook" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-4sn4zg3r></path> </svg> </a> <a${addAttribute(`https://t.me/share/url?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Share on Telegram" title="Share on Telegram" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.176-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.832z" data-astro-cid-4sn4zg3r></path> </svg> </a> <a${addAttribute(`https://wa.me/?text=${encodeURIComponent(post.title + " " + canonicalUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Share on WhatsApp" title="Share on WhatsApp" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" data-astro-cid-4sn4zg3r></path> </svg> </a> <button id="copy-link-button" class="inline-flex items-center justify-center w-12 h-12 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Copy link to clipboard" title="Copy Link" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> </svg> </button> </div> </div> </div> </div> <!-- Sidebar --> <div class="lg:col-span-1" data-astro-cid-4sn4zg3r> <div class="sticky top-8 space-y-6" data-astro-cid-4sn4zg3r> <!-- Author Info --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-4sn4zg3r> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-astro-cid-4sn4zg3r>About the Author</h3> <div class="flex items-center mb-4" data-astro-cid-4sn4zg3r> <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4" data-astro-cid-4sn4zg3r> <span class="text-white text-lg font-bold" data-astro-cid-4sn4zg3r>${post.author.charAt(0).toUpperCase()}</span> </div> <div data-astro-cid-4sn4zg3r> <a${addAttribute(`/publisher/${post.author.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, "href")} class="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200" data-astro-cid-4sn4zg3r> ${post.author} </a> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-4sn4zg3r>Content Writer</p> </div> </div> <p class="text-gray-600 dark:text-gray-400 text-sm" data-astro-cid-4sn4zg3r>
Expert in Android applications and mobile technology, sharing insights about the latest MOD APKs and app developments.
</p> </div> <!-- Related Posts --> ${relatedPosts.length > 0 && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-4sn4zg3r> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-astro-cid-4sn4zg3r>Related Articles</h3> <div class="space-y-4" data-astro-cid-4sn4zg3r> ${relatedPosts.map((relatedPost) => renderTemplate`<a${addAttribute(`/blog/${relatedPost.slug}`, "href")} class="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-4sn4zg3r> <h4 class="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2" data-astro-cid-4sn4zg3r> ${relatedPost.title} </h4> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400" data-astro-cid-4sn4zg3r> <time${addAttribute(relatedPost.published_date, "datetime")} data-astro-cid-4sn4zg3r>${formatDate(relatedPost.published_date)}</time> <span class="mx-2" data-astro-cid-4sn4zg3r>•</span> <span data-astro-cid-4sn4zg3r>${relatedPost.reading_time || calculateReadingTime(relatedPost.content)} min read</span> </div> </a>`)} </div> </div>`} <!-- Back to Blog --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-4sn4zg3r> <a href="/blog" class="inline-flex items-center w-full justify-center px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200" <span class="font-medium text-gray-900 dark:text-white" data-astro-cid-4sn4zg3r> ${post.author} </a></div> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} `, "head": async ($$result2) => renderTemplate`${post && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template(["  ", ' <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> "])), post.thumbnail_image && renderTemplate`<link rel="preload"${addAttribute(post.thumbnail_image, "href")} as="image">`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || seoDescription,
    "image": post.thumbnail_image || "/web-app-manifest-512x512.png",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DexAPK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dexapk.com/web-app-manifest-512x512.png"
      }
    },
    "datePublished": post.published_date,
    "dateModified": post.updated_at || post.published_date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": post.category,
    "keywords": post.tags ? post.tags.join(", ") : seoKeywords,
    "wordCount": post.content.split(/\s+/).length,
    "timeRequired": `PT${readingTime}M`
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dexapk.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://dexapk.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": canonicalUrl
      }
    ]
  }))) })}`}` })} ${renderScript($$result, "/home/project/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/project/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

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
