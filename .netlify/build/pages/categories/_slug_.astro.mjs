import { c as createComponent, d as createAstro, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from '../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../../assets/Footer.WjzTwqKo.js';
import { $ as $$ImageOptimized } from '../../assets/ImageOptimized.BHpdBgJX.js';
import { $ as $$BreadcrumbNav } from '../../assets/BreadcrumbNav.umEPYkbh.js';
import { getAppsByCategory } from '../../assets/supabase.Y_3SlIME.js';
/* empty css                                    */

function getRelatedCategories(currentCategory) {
  const categoryRelations = {
    "Games": ["Entertainment", "Media", "Social"],
    "Productivity": ["Media", "Photography", "Apps"],
    "Music": ["Entertainment", "Media", "Social"],
    "Video": ["Entertainment", "Media", "Photography"],
    "Entertainment": ["Games", "Music", "Video"],
    "Social": ["Games", "Music", "Apps"],
    "Photography": ["Productivity", "Video", "Media"],
    "Media": ["Music", "Video", "Entertainment"],
    "Apps": ["Productivity", "Social", "Games"]
  };
  return categoryRelations[currentCategory] || ["Games", "Productivity", "Music"];
}

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const categories = [
    { slug: "productivity", name: "Productivity" },
    { slug: "music", name: "Music" },
    { slug: "video", name: "Video" },
    { slug: "entertainment", name: "Entertainment" },
    { slug: "social", name: "Social" },
    { slug: "photography", name: "Photography" },
    { slug: "games", name: "Games" },
    { slug: "media", name: "Media" },
    { slug: "apps", name: "Apps" }
  ];
  const paths = [];
  for (const category of categories) {
    try {
      const apps = await getAppsByCategory(category.name, 100);
      paths.push({
        params: { slug: category.slug },
        props: {
          category: category.name,
          categorySlug: category.slug,
          apps: apps || []
        }
      });
    } catch (error) {
      console.error(`Error loading apps for category ${category.name}:`, error);
      paths.push({
        params: { slug: category.slug },
        props: {
          category: category.name,
          categorySlug: category.slug,
          apps: []
        }
      });
    }
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { category, categorySlug, apps } = Astro2.props;
  const categoryMeta = {
    "productivity": {
      description: "Boost your efficiency with powerful productivity apps featuring premium unlocked features",
      gradient: "from-gray-500 to-gray-700",
      icon: "productivity"
    },
    "music": {
      description: "Premium music streaming and audio editing apps with unlimited access",
      gradient: "from-purple-500 to-pink-600",
      icon: "music"
    },
    "video": {
      description: "Professional video editing and streaming apps with premium features unlocked",
      gradient: "from-red-500 to-orange-600",
      icon: "video"
    },
    "entertainment": {
      description: "Movies, TV shows, and entertainment content with premium subscriptions unlocked",
      gradient: "from-indigo-500 to-purple-600",
      icon: "entertainment"
    },
    "social": {
      description: "Connect and share with social networking apps featuring premium features",
      gradient: "from-blue-500 to-cyan-600",
      icon: "social"
    },
    "photography": {
      description: "Professional photo editing and camera apps with all filters and tools unlocked",
      gradient: "from-teal-500 to-green-600",
      icon: "photography"
    },
    "games": {
      description: "Unlimited resources, unlocked levels, and premium game features",
      gradient: "from-green-500 to-blue-600",
      icon: "games"
    },
    "media": {
      description: "Media players and content management apps with premium codecs and features",
      gradient: "from-orange-500 to-red-600",
      icon: "media"
    },
    "apps": {
      description: "General utility and lifestyle applications with premium features unlocked",
      gradient: "from-blue-500 to-purple-600",
      icon: "apps"
    }
  };
  const meta = categoryMeta[categorySlug] || categoryMeta["apps"];
  const title = `${category} MOD APKs - DexAPK`;
  const description = `Download the best ${category.toLowerCase()} MOD APKs. ${meta.description}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-dqg6fwsj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-dqg6fwsj": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-dqg6fwsj> <!-- Enhanced Breadcrumbs with Schema.org markup --> <div class="breadcrumb-wrapper" data-astro-cid-dqg6fwsj> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: category, href: `/categories/${categorySlug}`, current: true }
  ], "data-astro-cid-dqg6fwsj": true })} </div> <!-- Category Header --> <section${addAttribute(`bg-gradient-to-r ${meta.gradient} py-12 sm:py-16`, "class")} data-astro-cid-dqg6fwsj> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-dqg6fwsj> <div class="flex items-center justify-center mb-6" data-astro-cid-dqg6fwsj> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" data-astro-cid-dqg6fwsj> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-dqg6fwsj> ${meta.icon === "productivity" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4a2 2 0 002 2h2a2 2 0 002-2v-4m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v0" data-astro-cid-dqg6fwsj></path>`} ${meta.icon === "music" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" data-astro-cid-dqg6fwsj></path>`} ${meta.icon === "video" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-dqg6fwsj></path>`} ${meta.icon === "entertainment" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3" data-astro-cid-dqg6fwsj></path>`} ${meta.icon === "social" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-dqg6fwsj></path>`} ${meta.icon === "photography" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-astro-cid-dqg6fwsj></path>`} ${meta.icon === "games" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" data-astro-cid-dqg6fwsj></path>`} ${(meta.icon === "media" || meta.icon === "apps") && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-dqg6fwsj></path>`} </svg> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-dqg6fwsj> ${category} MOD APKs
</h1> <p class="text-xl text-white/90 max-w-3xl mx-auto mb-6" data-astro-cid-dqg6fwsj> ${meta.description} </p> <div class="flex items-center justify-center text-white/90" data-astro-cid-dqg6fwsj> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-dqg6fwsj> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-dqg6fwsj></path> </svg> <span class="text-lg font-medium" data-astro-cid-dqg6fwsj>${apps.length} Apps Available</span> </div> </div> </section> <!-- Search and Filters --> <section class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6" data-astro-cid-dqg6fwsj> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-dqg6fwsj> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4" data-astro-cid-dqg6fwsj> <!-- Search --> <div class="flex-1 max-w-md" data-astro-cid-dqg6fwsj> <label for="search-category-apps" class="sr-only" data-astro-cid-dqg6fwsj>Search ${category} apps</label> <div class="relative" data-astro-cid-dqg6fwsj> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-astro-cid-dqg6fwsj> <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-dqg6fwsj></path> </svg> </div> <input type="text" id="search-category-apps" class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"${addAttribute(`Search ${category} MOD APKs...`, "placeholder")}${addAttribute(`Search for ${category} MOD APKs`, "aria-label")} data-astro-cid-dqg6fwsj> </div> </div> <!-- Sort Filter --> <div data-astro-cid-dqg6fwsj> <label for="sort-category-apps" class="sr-only" data-astro-cid-dqg6fwsj>Sort ${category} apps</label> <select id="sort-category-apps" class="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"${addAttribute(`Sort ${category} apps`, "aria-label")} data-astro-cid-dqg6fwsj> <option value="rating" data-astro-cid-dqg6fwsj>Highest Rated</option> <option value="name" data-astro-cid-dqg6fwsj>Name A-Z</option> <option value="newest" data-astro-cid-dqg6fwsj>Newest First</option> <option value="popular" data-astro-cid-dqg6fwsj>Most Popular</option> </select> </div> </div> </div> </section> <!-- Apps Grid --> <section class="py-8 sm:py-12" data-astro-cid-dqg6fwsj> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-dqg6fwsj> <!-- Results Info --> <div class="flex items-center justify-between mb-6" data-astro-cid-dqg6fwsj> <p class="text-gray-600 dark:text-gray-400" id="category-results-count" aria-live="polite" data-astro-cid-dqg6fwsj>
Showing <span id="showing-category-count" data-astro-cid-dqg6fwsj>${apps.length}</span> of <span id="total-category-count" data-astro-cid-dqg6fwsj>${apps.length}</span> ${category.toLowerCase()} apps
</p> </div> <!-- Apps Container --> <div id="category-apps-container" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"${addAttribute(`${category} MOD APKs collection`, "aria-label")} data-astro-cid-dqg6fwsj> ${apps.length > 0 ? apps.map((app, index) => renderTemplate`<article class="category-app-card group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"${addAttribute(app.name, "data-app-name")}${addAttribute(app.rating, "data-app-rating")}${addAttribute(app.created_at, "data-app-date")} data-astro-cid-dqg6fwsj> <a${addAttribute(`/${app.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`Download ${app.name} v${app.version} MOD APK - ${category} app with premium features unlocked`, "aria-label")} data-astro-cid-dqg6fwsj> <div class="relative h-32 sm:h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300" data-astro-cid-dqg6fwsj> <!-- Status Badges --> <div class="absolute top-2 left-2 flex gap-1.5 z-10" data-astro-cid-dqg6fwsj> <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm" data-astro-cid-dqg6fwsj> <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-dqg6fwsj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-dqg6fwsj></path> </svg>
NEW
</span> <span class="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm" data-astro-cid-dqg6fwsj>
MOD
</span> </div> <!-- App Icon --> <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-colors duration-300 shadow-lg overflow-hidden" data-astro-cid-dqg6fwsj> ${app.icon ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-dqg6fwsj": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ImageOptimized", $$ImageOptimized, { "src": app.icon, "alt": `${app.name} icon`, "class": "w-full h-full object-cover rounded-2xl sm:rounded-3xl", "loading": "lazy", "width": 48, "height": 48, "onerror": "this.style.display='none'; this.nextElementSibling.style.display='flex';", "data-astro-cid-dqg6fwsj": true })} <div class="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300 hidden items-center justify-center" data-astro-cid-dqg6fwsj> <svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-dqg6fwsj></path> </svg> </div> ` })}` : renderTemplate`<svg class="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-dqg6fwsj></path> </svg>`} </div> <!-- Hover Overlay --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-astro-cid-dqg6fwsj> <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" data-astro-cid-dqg6fwsj> <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-dqg6fwsj></path> </svg> </div> </div> </div> <!-- App Details --> <div class="p-3 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" data-astro-cid-dqg6fwsj> <h3 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-astro-cid-dqg6fwsj> ${app.name} </h3> <p class="text-xs sm:text-sm font-medium mb-2 text-blue-600 dark:text-blue-400 transition-colors duration-300" data-astro-cid-dqg6fwsj> ${category} </p> <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400" data-astro-cid-dqg6fwsj> <div class="flex items-center gap-1"${addAttribute(`Version ${app.version}`, "title")} data-astro-cid-dqg6fwsj> <svg class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-dqg6fwsj> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-dqg6fwsj></path> </svg> <span class="text-xs" data-astro-cid-dqg6fwsj>${app.version}</span> </div> <div class="flex items-center gap-1"${addAttribute(`File size: ${app.size}`, "title")} data-astro-cid-dqg6fwsj> <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-dqg6fwsj></path> </svg> <span class="text-xs" data-astro-cid-dqg6fwsj>${app.size}</span> </div> </div> </div> <!-- Screen Reader Content --> <div class="sr-only" data-astro-cid-dqg6fwsj>
Rating: ${app.rating} out of 5 stars with ${app.votes} votes.
                  Last updated: ${app.last_updated}.
                  Publisher: ${app.publisher}.
                  Requirements: ${app.requirements}.
                  Click to download and view more details.
</div> </a> </article>`) : renderTemplate`<div class="col-span-full text-center py-12" role="status" aria-live="polite" data-astro-cid-dqg6fwsj> <div class="text-gray-500 dark:text-gray-400" data-astro-cid-dqg6fwsj> <svg class="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-dqg6fwsj></path> </svg> <h3 class="text-lg font-medium mb-2" data-astro-cid-dqg6fwsj>No ${category.toLowerCase()} apps available</h3> <p class="text-sm" data-astro-cid-dqg6fwsj>Please connect to Supabase to load app data.</p> </div> </div>`} </div> </div> </section> <!-- Related Categories Section --> <section class="py-8 bg-white dark:bg-gray-800" data-astro-cid-dqg6fwsj> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-dqg6fwsj> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6" data-astro-cid-dqg6fwsj>Related Categories</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6" data-astro-cid-dqg6fwsj> ${getRelatedCategories(category).map((relatedCategory) => renderTemplate`<a${addAttribute(`/categories/${relatedCategory.toLowerCase()}`, "href")} class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-md transition-all duration-200 group" data-astro-cid-dqg6fwsj> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-dqg6fwsj> ${relatedCategory} MOD APKs
</h3> <p class="text-gray-600 dark:text-gray-400 mb-4" data-astro-cid-dqg6fwsj>
Download premium ${relatedCategory.toLowerCase()} apps with unlocked features
</p> <div class="flex items-center text-blue-600 dark:text-blue-400" data-astro-cid-dqg6fwsj> <span class="text-sm font-medium" data-astro-cid-dqg6fwsj>Explore ${relatedCategory}</span> <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-dqg6fwsj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-dqg6fwsj></path> </svg> </div> </a>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-dqg6fwsj": true })} ` })} ${renderScript($$result, "/home/project/src/pages/categories/[slug].astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/pages/categories/[slug].astro", void 0);

const $$file = "/home/project/src/pages/categories/[slug].astro";
const $$url = "/categories/[slug]";

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
