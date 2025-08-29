import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../../../assets/Footer.WjzTwqKo.js';
import { $ as $$BreadcrumbNav } from '../../../assets/BreadcrumbNav.umEPYkbh.js';
import { $ as $$ImageOptimized } from '../../../assets/ImageOptimized.BHpdBgJX.js';
import { getAllBlogTags, getBlogPostsByTag } from '../../../assets/supabase.Y_3SlIME.js';
/* empty css                                       */

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const tags = await getAllBlogTags();
    const paths = [];
    for (const tag of tags) {
      const tagSlug = tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const posts = await getBlogPostsByTag(tag);
      console.log(`Generating static path for tag "${tag}" (slug: ${tagSlug}) with ${posts?.length || 0} posts`);
      paths.push({
        params: { slug: tagSlug },
        props: {
          tag,
          tagSlug,
          posts: posts || []
        }
      });
    }
    console.log(`Generated ${paths.length} tag paths`);
    return paths;
  } catch (error) {
    console.error("Error generating static paths for blog tags:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { tag, tagSlug, posts } = Astro2.props;
  if (!tag) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  const title = `#${tag} Blog Posts - DexAPK`;
  const description = `Read all blog posts tagged with #${tag}. ${posts.length} articles available covering ${tag} topics.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-c7gcfrez": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-c7gcfrez": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-c7gcfrez> <!-- Enhanced Breadcrumbs with Schema.org markup --> <div class="breadcrumb-wrapper" data-astro-cid-c7gcfrez> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Tags", href: "/blog" },
    { label: `#${tag}`, href: `/blog/tag/${tagSlug}`, current: true }
  ], "data-astro-cid-c7gcfrez": true })} </div> <!-- Tag Header --> <section class="bg-gradient-to-r from-purple-600 to-pink-600 py-12 sm:py-16" data-astro-cid-c7gcfrez> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-c7gcfrez> <div class="flex items-center justify-center mb-6" data-astro-cid-c7gcfrez> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" data-astro-cid-c7gcfrez> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-c7gcfrez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-c7gcfrez></path> </svg> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-c7gcfrez>
#${tag} </h1> <p class="text-xl text-purple-100 max-w-3xl mx-auto mb-6" data-astro-cid-c7gcfrez>
Explore all articles tagged with #${tag} </p> <div class="flex items-center justify-center text-purple-100" data-astro-cid-c7gcfrez> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-c7gcfrez> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-c7gcfrez></path> </svg> <span class="text-lg font-medium" data-astro-cid-c7gcfrez>${posts.length} Articles Tagged</span> </div> </div> </section> <!-- Blog Posts Grid --> <section class="py-8 sm:py-12" data-astro-cid-c7gcfrez> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-c7gcfrez> <!-- Results Info --> <div class="flex items-center justify-between mb-6" data-astro-cid-c7gcfrez> <h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-c7gcfrez>
Articles tagged with #${tag} </h2> <p class="text-gray-600 dark:text-gray-400" aria-live="polite" data-astro-cid-c7gcfrez> ${posts.length} articles available
</p> </div> <!-- Posts Container --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${addAttribute(`#${tag} blog posts collection`, "aria-label")} data-astro-cid-c7gcfrez> ${posts.length > 0 ? posts.map((post, index) => renderTemplate`<article class="blog-post-card group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900" data-astro-cid-c7gcfrez> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`Read ${post.title} - Tagged with #${tag} by ${post.author}`, "aria-label")} data-astro-cid-c7gcfrez> <div class="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden" data-astro-cid-c7gcfrez> ${post.thumbnail_image ? renderTemplate`${renderComponent($$result2, "ImageOptimized", $$ImageOptimized, { "src": post.thumbnail_image, "alt": post.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", "loading": "lazy", "width": 400, "height": 200, "isOffScreen": index > 5, "data-astro-cid-c7gcfrez": true })}` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center" data-astro-cid-c7gcfrez> <svg class="w-16 h-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-c7gcfrez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-c7gcfrez></path> </svg> </div>`} <!-- Tag Badge --> <div class="absolute top-4 left-4" data-astro-cid-c7gcfrez> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" data-astro-cid-c7gcfrez>
#${tag} </span> </div> ${post.is_featured && renderTemplate`<div class="absolute top-4 right-4" data-astro-cid-c7gcfrez> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" data-astro-cid-c7gcfrez>
Featured
</span> </div>`} </div> <div class="p-6" data-astro-cid-c7gcfrez> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3" data-astro-cid-c7gcfrez> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-3" data-astro-cid-c7gcfrez> ${post.category} </span> <time${addAttribute(post.published_date, "datetime")} data-astro-cid-c7gcfrez>${formatDate(post.published_date)}</time> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" data-astro-cid-c7gcfrez> ${post.title} </h3> ${post.excerpt && renderTemplate`<p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3" data-astro-cid-c7gcfrez> ${post.excerpt} </p>`} <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400" data-astro-cid-c7gcfrez> <span data-astro-cid-c7gcfrez>By ${post.author}</span> <span data-astro-cid-c7gcfrez>${post.reading_time || calculateReadingTime(post.content)} min read</span> </div> </div> <!-- Screen Reader Content --> <div class="sr-only" data-astro-cid-c7gcfrez>
Published on ${formatDate(post.published_date)} by ${post.author}.
                  Category: ${post.category}.
                  Tagged with: #${tag}.
                  Estimated reading time: ${post.reading_time || calculateReadingTime(post.content)} minutes.
                  Click to read the full article.
</div> </a> </article>`) : renderTemplate`<div class="col-span-full text-center py-12" role="status" aria-live="polite" data-astro-cid-c7gcfrez> <div class="text-gray-500 dark:text-gray-400" data-astro-cid-c7gcfrez> <svg class="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-c7gcfrez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-c7gcfrez></path> </svg> <h3 class="text-lg font-medium mb-2" data-astro-cid-c7gcfrez>No articles found</h3> <p class="text-sm" data-astro-cid-c7gcfrez>No blog posts tagged with #${tag} yet.</p> </div> </div>`} </div> <!-- Back to Blog --> <div class="text-center mt-12" data-astro-cid-c7gcfrez> <a href="/blog" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" data-astro-cid-c7gcfrez> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-c7gcfrez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" data-astro-cid-c7gcfrez></path> </svg>
Back to All Blog Posts
</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-c7gcfrez": true })} ` })} `;
}, "/home/project/src/pages/blog/tag/[slug].astro", void 0);

const $$file = "/home/project/src/pages/blog/tag/[slug].astro";
const $$url = "/blog/tag/[slug]";

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
