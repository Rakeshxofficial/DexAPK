import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from '../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../../assets/Footer.WjzTwqKo.js';
import { $ as $$BreadcrumbNav } from '../../assets/BreadcrumbNav.umEPYkbh.js';
import { $ as $$ImageOptimized } from '../../assets/ImageOptimized.BHpdBgJX.js';
import { getAppsByPublisherSlug, getBlogPostsByPublisher, getAllPublishers } from '../../assets/supabase.Y_3SlIME.js';
/* empty css                                    */

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const publishers = await getAllPublishers();
    const dexapkTeamPublisher = {
      name: "DexAPK Team",
      slug: "dexapk-team",
      appCount: 0
    };
    const hasDexAPKTeam = publishers.some((p) => p.slug === "dexapk-team");
    if (!hasDexAPKTeam) {
      publishers.push(dexapkTeamPublisher);
    }
    return publishers.map((publisher) => ({
      params: { slug: publisher.slug },
      props: {
        publisher,
        publisherName: publisher.name
      }
    }));
  } catch (error) {
    console.error("Error generating static paths for publishers:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { publisher, publisherName } = Astro2.props;
  if (!publisher) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  let publisherApps = [];
  try {
    if (slug === "dexapk-team") {
      publisherApps = [];
    } else {
      publisherApps = await getAppsByPublisherSlug(slug);
    }
  } catch (error) {
    console.error("Error loading publisher apps:", error);
  }
  let publisherBlogs = [];
  try {
    publisherBlogs = await getBlogPostsByPublisher(publisherName);
  } catch (error) {
    console.error("Error loading publisher blogs:", error);
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
  const title = `${publisherName} MOD APKs - DexAPK`;
  const description = `Download MOD APKs published by ${publisherName}. ${publisherApps.length} premium modified applications available.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-e7nazwmg": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-e7nazwmg": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-e7nazwmg> <!-- Enhanced Breadcrumbs with Schema.org markup --> <div class="breadcrumb-wrapper" data-astro-cid-e7nazwmg> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Publishers", href: "/publisher" },
    { label: publisherName, href: `/publisher/${slug}`, current: true }
  ], "data-astro-cid-e7nazwmg": true })} </div> <!-- Publisher Header --> <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16" data-astro-cid-e7nazwmg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-e7nazwmg> <!-- Publisher Logo --> <div class="flex items-center justify-center mb-6" data-astro-cid-e7nazwmg> <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg" data-astro-cid-e7nazwmg> <span class="text-4xl font-bold text-white" data-astro-cid-e7nazwmg> ${publisherName.charAt(0).toUpperCase()} </span> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-e7nazwmg> ${publisherName} </h1> <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-6" data-astro-cid-e7nazwmg>
Premium MOD APKs published by ${publisherName} </p> <div class="flex items-center justify-center text-blue-100" data-astro-cid-e7nazwmg> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-e7nazwmg> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-e7nazwmg></path> </svg> <span class="text-lg font-medium" data-astro-cid-e7nazwmg>${publisherApps.length} Apps Available</span> </div> </div> </section> <!-- Publisher Stats --> <section class="bg-white dark:bg-gray-800 py-8" data-astro-cid-e7nazwmg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-e7nazwmg> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-e7nazwmg> <div class="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl" data-astro-cid-e7nazwmg> <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4" data-astro-cid-e7nazwmg> <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-e7nazwmg></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2" data-astro-cid-e7nazwmg> ${publisherApps.length} </h3> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-e7nazwmg>Total Apps</p> </div> <div class="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl" data-astro-cid-e7nazwmg> <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4" data-astro-cid-e7nazwmg> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-e7nazwmg> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-e7nazwmg></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2" data-astro-cid-e7nazwmg> ${publisherApps.length > 0 ? (publisherApps.reduce((sum, app) => sum + app.rating, 0) / publisherApps.length).toFixed(1) : "0.0"} </h3> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-e7nazwmg>Average Rating</p> </div> <div class="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl" data-astro-cid-e7nazwmg> <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4" data-astro-cid-e7nazwmg> <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-e7nazwmg></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2" data-astro-cid-e7nazwmg> ${[...new Set(publisherApps.map((app) => app.category))].length} </h3> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-e7nazwmg>Categories</p> </div> </div> </div> </section> <!-- Apps Grid --> <section class="py-8 sm:py-12" data-astro-cid-e7nazwmg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-e7nazwmg> <!-- Results Info --> <div class="flex items-center justify-between mb-6" data-astro-cid-e7nazwmg> <h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-e7nazwmg>
Apps by ${publisherName} </h2> <p class="text-gray-600 dark:text-gray-400" aria-live="polite" data-astro-cid-e7nazwmg> ${publisherApps.length} apps available
</p> </div> <!-- Apps Container --> <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"${addAttribute(`${publisherName} MOD APKs collection`, "aria-label")} data-astro-cid-e7nazwmg> ${publisherApps.length > 0 ? publisherApps.map((app, index) => renderTemplate`<article class="app-card group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900" data-astro-cid-e7nazwmg> <a${addAttribute(`/${app.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`Download ${app.name} v${app.version} MOD APK - ${app.category} app with premium features unlocked`, "aria-label")} data-astro-cid-e7nazwmg> <div class="relative h-32 sm:h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300" data-astro-cid-e7nazwmg> <!-- Status Badges --> <div class="absolute top-2 left-2 flex gap-1.5 z-10" data-astro-cid-e7nazwmg> <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm" data-astro-cid-e7nazwmg> <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-e7nazwmg> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-e7nazwmg></path> </svg>
NEW
</span> <span class="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm" data-astro-cid-e7nazwmg>
MOD
</span> </div> <!-- App Icon --> <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-colors duration-300 shadow-lg overflow-hidden" data-astro-cid-e7nazwmg> ${app.icon ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-e7nazwmg": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ImageOptimized", $$ImageOptimized, { "src": app.icon, "alt": `${app.name} icon`, "class": "w-full h-full object-cover rounded-2xl sm:rounded-3xl", "loading": "lazy", "width": 96, "height": 96, "onerror": "this.style.display='none'; this.nextElementSibling.style.display='flex';", "data-astro-cid-e7nazwmg": true })} <div class="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300 hidden items-center justify-center" data-astro-cid-e7nazwmg> <svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-e7nazwmg></path> </svg> </div> ` })}` : renderTemplate`<svg class="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-e7nazwmg></path> </svg>`} </div> <!-- Hover Overlay --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-astro-cid-e7nazwmg> <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" data-astro-cid-e7nazwmg> <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-e7nazwmg></path> </svg> </div> </div> </div> <!-- App Details --> <div class="p-3 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" data-astro-cid-e7nazwmg> <h3 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-astro-cid-e7nazwmg> ${app.name} </h3> <p class="text-xs sm:text-sm font-medium mb-2 text-blue-600 dark:text-blue-400 transition-colors duration-300" data-astro-cid-e7nazwmg> ${app.category} </p> <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400" data-astro-cid-e7nazwmg> <div class="flex items-center gap-1"${addAttribute(`Version ${app.version}`, "title")} data-astro-cid-e7nazwmg> <svg class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-e7nazwmg> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-e7nazwmg></path> </svg> <span class="text-xs" data-astro-cid-e7nazwmg>${app.rating}</span> </div> <div class="flex items-center gap-1"${addAttribute(`File size: ${app.size}`, "title")} data-astro-cid-e7nazwmg> <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-e7nazwmg></path> </svg> <span class="text-xs" data-astro-cid-e7nazwmg>${app.size}</span> </div> </div> </div> <!-- Screen Reader Content --> <div class="sr-only" data-astro-cid-e7nazwmg>
Rating: ${app.rating} out of 5 stars with ${app.votes} votes.
                  Last updated: ${app.last_updated}.
                  Category: ${app.category}.
                  Requirements: ${app.requirements}.
                  Click to download and view more details.
</div> </a> </article>`) : renderTemplate`<div class="col-span-full text-center py-12" role="status" aria-live="polite" data-astro-cid-e7nazwmg> <div class="text-gray-500 dark:text-gray-400" data-astro-cid-e7nazwmg> <svg class="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-e7nazwmg></path> </svg> <h3 class="text-lg font-medium mb-2" data-astro-cid-e7nazwmg>No apps available</h3> <p class="text-sm" data-astro-cid-e7nazwmg>This publisher doesn't have any published apps yet.</p> </div> </div>`} </div> </div> </section> <!-- Blog Posts by Publisher --> ${publisherBlogs.length > 0 && renderTemplate`<section class="py-8 bg-white dark:bg-gray-800" data-astro-cid-e7nazwmg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-e7nazwmg> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6" data-astro-cid-e7nazwmg>
Blogs by ${publisherName} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-e7nazwmg> ${publisherBlogs.map((post) => renderTemplate`<article class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700" data-astro-cid-e7nazwmg> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block" data-astro-cid-e7nazwmg> <div class="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden" data-astro-cid-e7nazwmg> ${post.thumbnail_image ? renderTemplate`${renderComponent($$result2, "ImageOptimized", $$ImageOptimized, { "src": post.thumbnail_image, "alt": post.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", "loading": "lazy", "width": 400, "height": 200, "data-astro-cid-e7nazwmg": true })}` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-astro-cid-e7nazwmg> <svg class="w-16 h-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-e7nazwmg></path> </svg> </div>`} ${post.is_featured && renderTemplate`<div class="absolute top-4 left-4" data-astro-cid-e7nazwmg> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" data-astro-cid-e7nazwmg>
Featured
</span> </div>`} </div> <div class="p-6" data-astro-cid-e7nazwmg> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3" data-astro-cid-e7nazwmg> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-3" data-astro-cid-e7nazwmg> ${post.category} </span> <time${addAttribute(post.published_date, "datetime")} data-astro-cid-e7nazwmg>${formatDate(post.published_date)}</time> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-e7nazwmg> ${post.title} </h3> ${post.excerpt && renderTemplate`<p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3" data-astro-cid-e7nazwmg> ${post.excerpt} </p>`} <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400" data-astro-cid-e7nazwmg> <span data-astro-cid-e7nazwmg>By ${post.author}</span> <span data-astro-cid-e7nazwmg>${post.reading_time || calculateReadingTime(post.content)} min read</span> </div> </div> </a> </article>`)} </div> <div class="text-center mt-8" data-astro-cid-e7nazwmg> <a href="/blog" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" data-astro-cid-e7nazwmg>
View All Blog Posts
<svg class="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e7nazwmg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-e7nazwmg></path> </svg> </a> </div> </div> </section>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-e7nazwmg": true })} ` })} `;
}, "/home/project/src/pages/publisher/[slug].astro", void 0);

const $$file = "/home/project/src/pages/publisher/[slug].astro";
const $$url = "/publisher/[slug]";

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
