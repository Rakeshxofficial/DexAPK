/* empty css                                  */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DeKgRGar.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BXJnm_YX.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_Bbf7CUr9.mjs';
import { g as getAllApps } from '../chunks/supabase_F9LZmeZc.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  let allApps = [];
  try {
    allApps = await getAllApps();
  } catch (error) {
    console.error("Error loading apps:", error);
    allApps = [];
  }
  const categoryStats = {};
  allApps.forEach((app) => {
    if (!categoryStats[app.category]) {
      categoryStats[app.category] = {
        count: 0,
        totalRating: 0,
        apps: []
      };
    }
    categoryStats[app.category].count++;
    categoryStats[app.category].totalRating += app.rating;
    categoryStats[app.category].apps.push(app);
  });
  const categories = [
    {
      name: "Productivity",
      slug: "productivity",
      description: "Boost your efficiency with powerful productivity apps",
      icon: "productivity",
      gradient: "from-gray-500 to-gray-700",
      color: "text-gray-600 dark:text-gray-400"
    },
    {
      name: "Music",
      slug: "music",
      description: "Premium music streaming and audio editing apps",
      icon: "music",
      gradient: "from-purple-500 to-pink-600",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      name: "Video",
      slug: "video",
      description: "Professional video editing and streaming apps",
      icon: "video",
      gradient: "from-red-500 to-orange-600",
      color: "text-red-600 dark:text-red-400"
    },
    {
      name: "Entertainment",
      slug: "entertainment",
      description: "Movies, TV shows, and entertainment content",
      icon: "entertainment",
      gradient: "from-indigo-500 to-purple-600",
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      name: "Social",
      slug: "social",
      description: "Connect and share with social networking apps",
      icon: "social",
      gradient: "from-blue-500 to-cyan-600",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      name: "Photography",
      slug: "photography",
      description: "Professional photo editing and camera apps",
      icon: "photography",
      gradient: "from-teal-500 to-green-600",
      color: "text-teal-600 dark:text-teal-400"
    },
    {
      name: "Games",
      slug: "games",
      description: "Unlimited resources and unlocked game features",
      icon: "games",
      gradient: "from-green-500 to-blue-600",
      color: "text-green-600 dark:text-green-400"
    },
    {
      name: "Media",
      slug: "media",
      description: "Media players and content management apps",
      icon: "media",
      gradient: "from-orange-500 to-red-600",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      name: "Apps",
      slug: "apps",
      description: "General utility and lifestyle applications",
      icon: "apps",
      gradient: "from-blue-500 to-purple-600",
      color: "text-blue-600 dark:text-blue-400"
    }
  ];
  const categoriesWithStats = categories.map((category) => ({
    ...category,
    count: categoryStats[category.name]?.count || 0,
    averageRating: categoryStats[category.name] ? (categoryStats[category.name].totalRating / categoryStats[category.name].count).toFixed(1) : "0.0",
    topApps: categoryStats[category.name]?.apps.slice(0, 3) || []
  }));
  const title = "App Categories - DexAPK";
  const description = "Browse MOD APKs by category. Find productivity, entertainment, games, and more modified applications.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-hioekb44": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-hioekb44": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-hioekb44> <!-- Breadcrumbs --> <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Breadcrumb" data-astro-cid-hioekb44> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-hioekb44> <ol class="flex items-center space-x-2 py-4 text-sm" role="list" data-astro-cid-hioekb44> <li data-astro-cid-hioekb44> <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Go to homepage" data-astro-cid-hioekb44> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-hioekb44> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-astro-cid-hioekb44></path> </svg> <span class="sr-only" data-astro-cid-hioekb44>Home</span> </a> </li> <li class="flex items-center" data-astro-cid-hioekb44> <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-hioekb44> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-hioekb44></path> </svg> <span class="ml-2 font-medium text-gray-900 dark:text-white" aria-current="page" data-astro-cid-hioekb44>Categories</span> </li> </ol> </div> </nav> <!-- Page Header --> <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16" data-astro-cid-hioekb44> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-hioekb44> <div class="flex items-center justify-center mb-6" data-astro-cid-hioekb44> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" data-astro-cid-hioekb44> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-hioekb44> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-hioekb44></path> </svg> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-hioekb44>
App Categories
</h1> <p class="text-xl text-blue-100 max-w-3xl mx-auto" data-astro-cid-hioekb44>
Discover MOD APKs organized by category. Find exactly what you're looking for.
</p> <div class="mt-6 flex items-center justify-center text-blue-100" data-astro-cid-hioekb44> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-hioekb44> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-hioekb44></path> </svg> <span class="text-lg font-medium" data-astro-cid-hioekb44>${categoriesWithStats.length} Categories Available</span> </div> </div> </section> <!-- Popular Categories --> <section class="py-12 bg-white dark:bg-gray-800" data-astro-cid-hioekb44> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-hioekb44> <div class="text-center mb-8" data-astro-cid-hioekb44> <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-hioekb44>
Popular Categories
</h2> <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-astro-cid-hioekb44>
Explore our most popular app categories with the highest rated MOD APKs
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-astro-cid-hioekb44> ${categoriesWithStats.filter((cat) => cat.count > 0).sort((a, b) => b.count - a.count).slice(0, 3).map((category) => renderTemplate`<div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center" data-astro-cid-hioekb44> <div${addAttribute(`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`, "class")} data-astro-cid-hioekb44> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-hioekb44> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-hioekb44></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2" data-astro-cid-hioekb44>${category.name}</h3> <p class="text-gray-600 dark:text-gray-400 mb-4" data-astro-cid-hioekb44>${category.count} apps available</p> <div class="flex items-center justify-center text-yellow-500 mb-2" data-astro-cid-hioekb44> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-hioekb44> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-hioekb44></path> </svg> <span class="text-sm font-medium" data-astro-cid-hioekb44>${category.averageRating} average rating</span> </div> <a${addAttribute(`/categories/${category.slug}`, "href")}${addAttribute(`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${category.color} hover:bg-gray-200 dark:hover:bg-gray-600`, "class")} data-astro-cid-hioekb44>
Explore ${category.name} <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-hioekb44> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-hioekb44></path> </svg> </a> </div>`)} </div> </div> </section> <!-- All Categories Grid --> <section class="py-12" data-astro-cid-hioekb44> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-hioekb44> <div class="text-center mb-8" data-astro-cid-hioekb44> <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-hioekb44>
All Categories
</h2> <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-astro-cid-hioekb44>
Browse all available app categories and find your perfect MOD APK
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="grid" aria-label="App categories" data-astro-cid-hioekb44> ${categoriesWithStats.map((category) => renderTemplate`<article role="gridcell" class="category-card group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900" data-astro-cid-hioekb44> <a${addAttribute(`/categories/${category.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`Browse ${category.name} category - ${category.count} apps available with ${category.averageRating} average rating`, "aria-label")} data-astro-cid-hioekb44> <div${addAttribute(`relative h-32 bg-gradient-to-r ${category.gradient} flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300`, "class")} data-astro-cid-hioekb44> <!-- Category Icon --> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300" data-astro-cid-hioekb44> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-hioekb44> ${category.icon === "productivity" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4a2 2 0 002 2h2a2 2 0 002-2v-4m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v0" data-astro-cid-hioekb44></path>`} ${category.icon === "music" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" data-astro-cid-hioekb44></path>`} ${category.icon === "video" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-hioekb44></path>`} ${category.icon === "entertainment" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3" data-astro-cid-hioekb44></path>`} ${category.icon === "social" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-hioekb44></path>`} ${category.icon === "photography" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-astro-cid-hioekb44></path>`} ${category.icon === "games" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" data-astro-cid-hioekb44></path>`} ${(category.icon === "media" || category.icon === "apps") && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-hioekb44></path>`} </svg> </div> <!-- App Count Badge --> <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1" data-astro-cid-hioekb44> <span class="text-white text-sm font-medium" data-astro-cid-hioekb44>${category.count}</span> </div> </div> <!-- Category Details --> <div class="p-6 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" data-astro-cid-hioekb44> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-astro-cid-hioekb44> ${category.name} </h3> <p class="text-gray-600 dark:text-gray-400 text-sm mb-4" data-astro-cid-hioekb44> ${category.description} </p> <div class="flex items-center justify-between" data-astro-cid-hioekb44> <div class="flex items-center text-yellow-500" data-astro-cid-hioekb44> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-hioekb44> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-hioekb44></path> </svg> <span class="text-sm font-medium" data-astro-cid-hioekb44>${category.averageRating}</span> </div> <div class="flex items-center text-gray-500 dark:text-gray-400" data-astro-cid-hioekb44> <span class="text-sm" data-astro-cid-hioekb44>${category.count} apps</span> <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-hioekb44> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-hioekb44></path> </svg> </div> </div> </div> <!-- Screen Reader Content --> <div class="sr-only" data-astro-cid-hioekb44> ${category.name} category with ${category.count} apps available.
                  Average rating: ${category.averageRating} out of 5 stars.
${category.description}
Click to browse all ${category.name} apps.
</div> </a> </article>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hioekb44": true })} ` })} `;
}, "/home/project/src/pages/categories.astro", void 0);

const $$file = "/home/project/src/pages/categories.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
