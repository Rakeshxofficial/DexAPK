import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../../assets/Footer.WjzTwqKo.js';
import { $ as $$BreadcrumbNav } from '../../assets/BreadcrumbNav.umEPYkbh.js';
import { getAllBlogTags, getBlogPostsByTag } from '../../assets/supabase.Y_3SlIME.js';
/* empty css                                  */

const prerender = true;
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  let allTags = [];
  let tagsWithCounts = [];
  try {
    allTags = await getAllBlogTags();
    tagsWithCounts = await Promise.all(
      allTags.map(async (tag) => {
        try {
          const posts = await getBlogPostsByTag(tag);
          return {
            name: tag,
            slug: tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
            count: posts ? posts.length : 0
          };
        } catch (error) {
          console.error(`Error getting posts for tag "${tag}":`, error);
          return {
            name: tag,
            slug: tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
            count: 0
          };
        }
      })
    );
    tagsWithCounts.sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    console.error("Error loading blog tags:", error);
    allTags = [];
    tagsWithCounts = [];
  }
  const title = "Blog Tags - DexAPK";
  const description = `Explore all blog topics and tags. Find articles about ${allTags.slice(0, 5).join(", ")} and more.`;
  function getTagColor(count) {
    if (count >= 5) return "from-blue-500 to-purple-600";
    if (count >= 3) return "from-green-500 to-blue-500";
    if (count >= 2) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  }
  function getTagSize(count) {
    if (count >= 5) return "text-lg px-6 py-3";
    if (count >= 3) return "text-base px-5 py-2.5";
    if (count >= 2) return "text-sm px-4 py-2";
    return "text-xs px-3 py-1.5";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-gxygfabc": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-gxygfabc": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-gxygfabc> <!-- Enhanced Breadcrumbs --> <div class="breadcrumb-wrapper" data-astro-cid-gxygfabc> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Tags", href: "/blog/tags", current: true }
  ], "data-astro-cid-gxygfabc": true })} </div> <!-- Page Header --> <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16" data-astro-cid-gxygfabc> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-gxygfabc> <div class="flex items-center justify-center mb-6" data-astro-cid-gxygfabc> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" data-astro-cid-gxygfabc> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-gxygfabc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-gxygfabc></path> </svg> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-gxygfabc>
Blog Tags
</h1> <p class="text-xl text-blue-100 max-w-3xl mx-auto" data-astro-cid-gxygfabc>
Explore all topics and find articles by tags
</p> <div class="mt-6 flex items-center justify-center text-blue-100" data-astro-cid-gxygfabc> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-gxygfabc> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-gxygfabc></path> </svg> <span class="text-lg font-medium" data-astro-cid-gxygfabc>${tagsWithCounts.length} Tags Available</span> </div> </div> </section> <!-- Tags Cloud --> <section class="py-8 sm:py-12" data-astro-cid-gxygfabc> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-gxygfabc> <!-- Popular Tags --> ${tagsWithCounts.filter((tag) => tag.count > 0).length > 0 && renderTemplate`<div class="mb-12" data-astro-cid-gxygfabc> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6" data-astro-cid-gxygfabc>Popular Tags</h2> <div class="flex flex-wrap gap-3 justify-center" data-astro-cid-gxygfabc> ${tagsWithCounts.filter((tag) => tag.count > 0).slice(0, 20).map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.slug}`, "href")}${addAttribute(`inline-flex items-center ${getTagSize(tag.count)} bg-gradient-to-r ${getTagColor(tag.count)} text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`, "class")}${addAttribute(`View ${tag.count} articles tagged with ${tag.name}`, "aria-label")} data-astro-cid-gxygfabc> <svg class="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-gxygfabc> <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-astro-cid-gxygfabc></path> </svg>
#${tag.name} <span class="ml-2 bg-white/20 rounded-full px-2 py-0.5 text-xs font-medium" data-astro-cid-gxygfabc> ${tag.count} </span> </a>`)} </div> </div>`} <!-- All Tags --> <div data-astro-cid-gxygfabc> <div class="flex items-center justify-between mb-6" data-astro-cid-gxygfabc> <h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-gxygfabc>All Tags</h2> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-gxygfabc> ${tagsWithCounts.length} tags total
</p> </div> ${tagsWithCounts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-astro-cid-gxygfabc> ${tagsWithCounts.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.slug}`, "href")} class="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"${addAttribute(`View ${tag.count} articles tagged with ${tag.name}`, "aria-label")} data-astro-cid-gxygfabc> <div class="flex items-center justify-between" data-astro-cid-gxygfabc> <div class="flex items-center" data-astro-cid-gxygfabc> <div${addAttribute(`w-8 h-8 bg-gradient-to-r ${getTagColor(tag.count)} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`, "class")} data-astro-cid-gxygfabc> <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-gxygfabc> <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-astro-cid-gxygfabc></path> </svg> </div> <div data-astro-cid-gxygfabc> <h3 class="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-gxygfabc>
#${tag.name} </h3> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-gxygfabc> ${tag.count} article${tag.count !== 1 ? "s" : ""} </p> </div> </div> <svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-gxygfabc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-gxygfabc></path> </svg> </div> </a>`)} </div>` : renderTemplate`<div class="text-center py-12" role="status" aria-live="polite" data-astro-cid-gxygfabc> <div class="text-gray-500 dark:text-gray-400" data-astro-cid-gxygfabc> <svg class="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-gxygfabc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-gxygfabc></path> </svg> <h3 class="text-lg font-medium mb-2" data-astro-cid-gxygfabc>No tags found</h3> <p class="text-sm" data-astro-cid-gxygfabc>Blog posts with tags will appear here when available.</p> </div> </div>`} </div> <!-- Back to Blog --> <div class="text-center mt-12" data-astro-cid-gxygfabc> <a href="/blog" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" data-astro-cid-gxygfabc> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-gxygfabc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" data-astro-cid-gxygfabc></path> </svg>
Back to All Blog Posts
</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-gxygfabc": true })} ` })} `;
}, "/home/project/src/pages/blog/tags.astro", void 0);

const $$file = "/home/project/src/pages/blog/tags.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tags,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
