import { c as createComponent, d as createAstro, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../assets/Footer.WjzTwqKo.js';
import { getAllApps } from '../assets/supabase.Y_3SlIME.js';
/* empty css                                 */

const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = new URL(Astro2.request.url);
  const searchQuery = url.searchParams.get("q") || "";
  let allApps = [];
  try {
    allApps = await getAllApps();
  } catch (error) {
    console.error("Error loading apps:", error);
    allApps = [];
  }
  const categories = [
    {
      name: "Productivity",
      slug: "productivity",
      description: "Boost your efficiency with powerful productivity apps",
      gradient: "from-gray-500 to-gray-700",
      color: "text-gray-600 dark:text-gray-400"
    },
    {
      name: "Music",
      slug: "music",
      description: "Premium music streaming and audio editing apps",
      gradient: "from-purple-500 to-pink-600",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      name: "Video",
      slug: "video",
      description: "Professional video editing and streaming apps",
      gradient: "from-red-500 to-orange-600",
      color: "text-red-600 dark:text-red-400"
    },
    {
      name: "Entertainment",
      slug: "entertainment",
      description: "Movies, TV shows, and entertainment content",
      gradient: "from-indigo-500 to-purple-600",
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      name: "Social",
      slug: "social",
      description: "Connect and share with social networking apps",
      gradient: "from-blue-500 to-cyan-600",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      name: "Photography",
      slug: "photography",
      description: "Professional photo editing and camera apps",
      gradient: "from-teal-500 to-green-600",
      color: "text-teal-600 dark:text-teal-400"
    },
    {
      name: "Games",
      slug: "games",
      description: "Unlimited resources and unlocked game features",
      gradient: "from-green-500 to-blue-600",
      color: "text-green-600 dark:text-green-400"
    },
    {
      name: "Media",
      slug: "media",
      description: "Media players and content management apps",
      gradient: "from-orange-500 to-red-600",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      name: "Apps",
      slug: "apps",
      description: "General utility and lifestyle applications",
      gradient: "from-blue-500 to-purple-600",
      color: "text-blue-600 dark:text-blue-400"
    }
  ];
  function searchContent(query) {
    if (!query.trim()) {
      return { apps: [], categories: [] };
    }
    const searchTerm = query.toLowerCase().trim();
    const matchingApps = allApps.filter((app) => {
      return app.name.toLowerCase().includes(searchTerm) || app.description.toLowerCase().includes(searchTerm) || app.category.toLowerCase().includes(searchTerm) || app.publisher.toLowerCase().includes(searchTerm) || app.features && app.features.some((feature) => feature.toLowerCase().includes(searchTerm)) || app.mod_info && app.mod_info.some((info) => info.toLowerCase().includes(searchTerm));
    });
    const matchingCategories = categories.filter((category) => {
      return category.name.toLowerCase().includes(searchTerm) || category.description.toLowerCase().includes(searchTerm);
    });
    return { apps: matchingApps, categories: matchingCategories };
  }
  const searchResults = searchContent(searchQuery);
  const totalResults = searchResults.apps.length + searchResults.categories.length;
  const title = searchQuery ? `Search results for "${searchQuery}" - DexAPK` : "Search - DexAPK";
  const description = searchQuery ? `Found ${totalResults} results for "${searchQuery}". Search MOD APKs, categories, and more on DexAPK.` : "Search for MOD APKs, categories, and content on DexAPK. Find your favorite modified Android applications.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-ipsxrsrh": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ipsxrsrh": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-ipsxrsrh> <!-- Breadcrumbs --> <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Breadcrumb" data-astro-cid-ipsxrsrh> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ipsxrsrh> <ol class="flex items-center space-x-2 py-4 text-sm" role="list" data-astro-cid-ipsxrsrh> <li data-astro-cid-ipsxrsrh> <a href="/" class="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label="Go to homepage" data-astro-cid-ipsxrsrh> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-ipsxrsrh> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-astro-cid-ipsxrsrh></path> </svg> <span class="sr-only" data-astro-cid-ipsxrsrh>Home</span> </a> </li> <li class="flex items-center" data-astro-cid-ipsxrsrh> <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-ipsxrsrh> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-ipsxrsrh></path> </svg> <span class="ml-2 font-medium text-gray-900 dark:text-white" aria-current="page" data-astro-cid-ipsxrsrh> ${searchQuery ? `Search: "${searchQuery}"` : "Search"} </span> </li> </ol> </div> </nav> <!-- Search Header --> <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16" data-astro-cid-ipsxrsrh> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ipsxrsrh> <div class="text-center mb-8" data-astro-cid-ipsxrsrh> <div class="flex items-center justify-center mb-6" data-astro-cid-ipsxrsrh> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" data-astro-cid-ipsxrsrh> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ipsxrsrh></path> </svg> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-ipsxrsrh> ${searchQuery ? "Search Results" : "Search DexAPK"} </h1> <p class="text-xl text-blue-100 max-w-3xl mx-auto" data-astro-cid-ipsxrsrh> ${searchQuery ? `Found ${totalResults} results for "${searchQuery}"` : "Find MOD APKs, categories, and content across our entire collection"} </p> </div> <!-- Search Form --> <div class="max-w-2xl mx-auto" data-astro-cid-ipsxrsrh> <form method="GET" action="/search" class="relative" role="search" data-astro-cid-ipsxrsrh> <label for="search-input" class="sr-only" data-astro-cid-ipsxrsrh>Search for MOD APKs and content</label> <div class="relative" data-astro-cid-ipsxrsrh> <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-astro-cid-ipsxrsrh> <svg class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ipsxrsrh></path> </svg> </div> <input type="text" id="search-input" name="q"${addAttribute(searchQuery, "value")} class="w-full pl-12 pr-32 py-4 text-lg border-0 rounded-2xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:outline-none transition-all duration-200" placeholder="Search MOD APKs, categories, features..." aria-label="Search for MOD APKs and content" autocomplete="off" spellcheck="false" data-astro-cid-ipsxrsrh> <div class="absolute inset-y-0 right-0 flex items-center pr-2" data-astro-cid-ipsxrsrh> <button type="submit" class="inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 min-w-[44px] min-h-[44px]" aria-label="Search" data-astro-cid-ipsxrsrh> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ipsxrsrh></path> </svg>
Search
</button> </div> </div> </form> </div> </div> </section> <!-- Search Results --> ${searchQuery && renderTemplate`<section class="py-8 sm:py-12" data-astro-cid-ipsxrsrh> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ipsxrsrh> <!-- Results Summary --> <div class="mb-8" data-astro-cid-ipsxrsrh> <div class="flex items-center justify-between" data-astro-cid-ipsxrsrh> <div data-astro-cid-ipsxrsrh> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2" data-astro-cid-ipsxrsrh>
Search Results
</h2> <p class="text-gray-600 dark:text-gray-400" aria-live="polite" data-astro-cid-ipsxrsrh>
Found <span class="font-semibold" data-astro-cid-ipsxrsrh>${totalResults}</span> results for
<span class="font-semibold" data-astro-cid-ipsxrsrh>"${searchQuery}"</span> ${totalResults > 0 && renderTemplate`<span data-astro-cid-ipsxrsrh> - ${searchResults.apps.length} apps and ${searchResults.categories.length} categories</span>`} </p> </div> ${searchQuery && renderTemplate`<a href="/search" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 min-w-[44px] min-h-[44px]" aria-label="Clear search and start new search" data-astro-cid-ipsxrsrh> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ipsxrsrh></path> </svg>
Clear Search
</a>`} </div> </div> ${totalResults === 0 ? renderTemplate`<!-- No Results -->
            <div class="text-center py-12" role="status" aria-live="polite" data-astro-cid-ipsxrsrh> <div class="text-gray-500 dark:text-gray-400" data-astro-cid-ipsxrsrh> <svg class="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ipsxrsrh></path> </svg> <h3 class="text-xl font-medium mb-2" data-astro-cid-ipsxrsrh>No results found</h3> <p class="text-sm mb-6" data-astro-cid-ipsxrsrh>
We couldn't find anything matching "<span class="font-semibold" data-astro-cid-ipsxrsrh>${searchQuery}</span>"
</p> <div class="space-y-2 text-sm" data-astro-cid-ipsxrsrh> <p class="font-medium" data-astro-cid-ipsxrsrh>Try:</p> <ul class="space-y-1" data-astro-cid-ipsxrsrh> <li data-astro-cid-ipsxrsrh>• Checking your spelling</li> <li data-astro-cid-ipsxrsrh>• Using different keywords</li> <li data-astro-cid-ipsxrsrh>• Searching for app categories like "music" or "games"</li> <li data-astro-cid-ipsxrsrh>• Looking for specific features like "premium" or "unlocked"</li> </ul> </div> </div> </div>` : renderTemplate`<div class="space-y-12" data-astro-cid-ipsxrsrh> <!-- Categories Results --> ${searchResults.categories.length > 0 && renderTemplate`<div data-astro-cid-ipsxrsrh> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center" data-astro-cid-ipsxrsrh> <svg class="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-ipsxrsrh></path> </svg>
Categories (${searchResults.categories.length})
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="grid" aria-label="Matching categories" data-astro-cid-ipsxrsrh> ${searchResults.categories.map((category) => renderTemplate`<article role="gridcell" class="category-card group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900" data-astro-cid-ipsxrsrh> <a${addAttribute(`/categories/${category.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`Browse ${category.name} category - ${category.description}`, "aria-label")} data-astro-cid-ipsxrsrh> <div${addAttribute(`relative h-32 bg-gradient-to-r ${category.gradient} flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300`, "class")} data-astro-cid-ipsxrsrh> <!-- Category Icon --> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300" data-astro-cid-ipsxrsrh> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-ipsxrsrh></path> </svg> </div> </div> <!-- Category Details --> <div class="p-6 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" data-astro-cid-ipsxrsrh> <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-astro-cid-ipsxrsrh> ${category.name} </h4> <p class="text-gray-600 dark:text-gray-400 text-sm" data-astro-cid-ipsxrsrh> ${category.description} </p> </div> </a> </article>`)} </div> </div>`} <!-- Apps Results --> ${searchResults.apps.length > 0 && renderTemplate`<div data-astro-cid-ipsxrsrh> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center" data-astro-cid-ipsxrsrh> <svg class="w-6 h-6 mr-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-ipsxrsrh></path> </svg>
MOD APKs (${searchResults.apps.length})
</h3> <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6" role="grid" aria-label="Matching MOD APKs" data-astro-cid-ipsxrsrh> ${searchResults.apps.map((app, index) => renderTemplate`<article class="app-card group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"${addAttribute(app.name, "data-app-name")}${addAttribute(app.category, "data-app-category")} data-astro-cid-ipsxrsrh> <a${addAttribute(`/${app.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`Download ${app.name} v${app.version} MOD APK - ${app.category} app with premium features unlocked`, "aria-label")} data-astro-cid-ipsxrsrh> <div class="relative h-32 sm:h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300" data-astro-cid-ipsxrsrh> <!-- Status Badges --> <div class="absolute top-2 left-2 flex gap-1.5 z-10" data-astro-cid-ipsxrsrh> <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm" data-astro-cid-ipsxrsrh> <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-ipsxrsrh> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ipsxrsrh></path> </svg>
MATCH
</span> <span class="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm" data-astro-cid-ipsxrsrh>
MOD
</span> </div> <!-- App Icon --> <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-colors duration-300 shadow-lg overflow-hidden" data-astro-cid-ipsxrsrh> ${app.icon ? renderTemplate`<img${addAttribute(app.icon, "src")}${addAttribute(`${app.name} icon`, "alt")} class="w-full h-full object-cover rounded-2xl sm:rounded-3xl" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" data-astro-cid-ipsxrsrh>
                                <div class="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300 hidden items-center justify-center" data-astro-cid-ipsxrsrh> <svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-ipsxrsrh></path> </svg> </div>` : renderTemplate`<svg class="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-ipsxrsrh></path> </svg>`} </div> <!-- Hover Overlay --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-astro-cid-ipsxrsrh> <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" data-astro-cid-ipsxrsrh> <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-ipsxrsrh></path> </svg> </div> </div> </div> <!-- App Details --> <div class="p-3 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" data-astro-cid-ipsxrsrh> <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-astro-cid-ipsxrsrh> ${app.name} </h4> <p class="text-xs sm:text-sm font-medium mb-2 text-blue-600 dark:text-blue-400 transition-colors duration-300" data-astro-cid-ipsxrsrh> ${app.category} </p> <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400" data-astro-cid-ipsxrsrh> <div class="flex items-center gap-1"${addAttribute(`Version ${app.version}`, "title")} data-astro-cid-ipsxrsrh> <svg class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-ipsxrsrh> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-ipsxrsrh></path> </svg> <span class="text-xs" data-astro-cid-ipsxrsrh>${app.version}</span> </div> <div class="flex items-center gap-1"${addAttribute(`File size: ${app.size}`, "title")} data-astro-cid-ipsxrsrh> <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-ipsxrsrh></path> </svg> <span class="text-xs" data-astro-cid-ipsxrsrh>${app.size}</span> </div> </div> </div> <!-- Screen Reader Content --> <div class="sr-only" data-astro-cid-ipsxrsrh>
Rating: ${app.rating} out of 5 stars with ${app.votes} votes.
                            Last updated: ${app.last_updated}.
                            Publisher: ${app.publisher}.
                            Requirements: ${app.requirements}.
                            Click to download and view more details.
</div> </a> </article>`)} </div> </div>`} </div>`} </div> </section>`} <!-- Popular Searches / Suggestions (when no search query) --> ${!searchQuery && renderTemplate`<section class="py-8 sm:py-12" data-astro-cid-ipsxrsrh> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ipsxrsrh> <!-- Popular Categories --> <div class="mb-12" data-astro-cid-ipsxrsrh> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center" data-astro-cid-ipsxrsrh> <svg class="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-ipsxrsrh></path> </svg>
Popular Categories
</h2> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" data-astro-cid-ipsxrsrh> ${categories.slice(0, 10).map((category) => renderTemplate`<a${addAttribute(`/categories/${category.slug}`, "href")} class="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center justify-center"${addAttribute(`Browse ${category.name} category`, "aria-label")} data-astro-cid-ipsxrsrh> <div class="text-center" data-astro-cid-ipsxrsrh> <div${addAttribute(`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center`, "class")} data-astro-cid-ipsxrsrh> <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-ipsxrsrh></path> </svg> </div> <span class="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-ipsxrsrh> ${category.name} </span> </div> </a>`)} </div> </div> <!-- Search Suggestions --> <div data-astro-cid-ipsxrsrh> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center" data-astro-cid-ipsxrsrh> <svg class="w-6 h-6 mr-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-astro-cid-ipsxrsrh></path> </svg>
Popular Searches
</h2> <div class="flex flex-wrap gap-3" data-astro-cid-ipsxrsrh> ${["premium", "unlocked", "music", "games", "video", "productivity", "social", "photography", "entertainment", "media"].map((term) => renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(term)}`, "href")} class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[44px] min-h-[44px]"${addAttribute(`Search for ${term}`, "aria-label")} data-astro-cid-ipsxrsrh> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ipsxrsrh></path> </svg> ${term} </a>`)} </div> </div> </div> </section>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ipsxrsrh": true })} ` })} ${renderScript($$result, "/home/project/src/pages/search.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/pages/search.astro", void 0);

const $$file = "/home/project/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
