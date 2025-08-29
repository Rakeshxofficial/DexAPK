import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../assets/Footer.WjzTwqKo.js';
import { $ as $$BreadcrumbNav } from '../assets/BreadcrumbNav.umEPYkbh.js';
import { getAllPublishers } from '../assets/supabase.Y_3SlIME.js';
/* empty css                                */

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let publishers = [];
  try {
    publishers = await getAllPublishers();
  } catch (error) {
    console.error("Error loading publishers:", error);
    publishers = [];
  }
  const title = "Publishers - DexAPK";
  const description = "Browse MOD APKs by publisher. Discover apps from your favorite developers and publishers.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-gfsgeucv": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-gfsgeucv": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-gfsgeucv> <!-- Enhanced Breadcrumbs with Schema.org markup --> <div class="breadcrumb-wrapper" data-astro-cid-gfsgeucv> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Publishers", href: "/publisher", current: true }
  ], "data-astro-cid-gfsgeucv": true })} </div> <!-- Page Header --> <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16" data-astro-cid-gfsgeucv> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-gfsgeucv> <div class="flex items-center justify-center mb-6" data-astro-cid-gfsgeucv> <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" data-astro-cid-gfsgeucv> <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-gfsgeucv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-gfsgeucv></path> </svg> </div> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-astro-cid-gfsgeucv>
Publishers
</h1> <p class="text-xl text-blue-100 max-w-3xl mx-auto" data-astro-cid-gfsgeucv>
Discover MOD APKs from your favorite developers and publishers
</p> <div class="mt-6 flex items-center justify-center text-blue-100" data-astro-cid-gfsgeucv> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-gfsgeucv> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-gfsgeucv></path> </svg> <span class="text-lg font-medium" data-astro-cid-gfsgeucv>${publishers.length} Publishers Available</span> </div> </div> </section> <!-- Publishers Grid --> <section class="py-8 sm:py-12" data-astro-cid-gfsgeucv> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-gfsgeucv> <!-- Results Info --> <div class="flex items-center justify-between mb-6" data-astro-cid-gfsgeucv> <p class="text-gray-600 dark:text-gray-400" aria-live="polite" data-astro-cid-gfsgeucv>
Showing ${publishers.length} publishers
</p> </div> <!-- Publishers Container --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6" aria-label="Publishers collection" data-astro-cid-gfsgeucv> ${publishers.length > 0 ? publishers.map((publisher, index) => renderTemplate`<article class="publisher-card group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900" data-astro-cid-gfsgeucv> <a${addAttribute(`/publisher/${publisher.slug}`, "href")} class="block w-full h-full focus:outline-none"${addAttribute(`View apps by ${publisher.name} - ${publisher.appCount} apps available`, "aria-label")} data-astro-cid-gfsgeucv> <div class="relative h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300" data-astro-cid-gfsgeucv> <!-- Publisher Logo (First Character) --> <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg" data-astro-cid-gfsgeucv> <span class="text-2xl sm:text-3xl font-bold text-white" data-astro-cid-gfsgeucv> ${publisher.name.charAt(0).toUpperCase()} </span> </div> <!-- App Count Badge --> <div class="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1" data-astro-cid-gfsgeucv> <span class="text-white text-sm font-medium" data-astro-cid-gfsgeucv>${publisher.appCount}</span> </div> <!-- Hover Overlay --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-astro-cid-gfsgeucv> <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" data-astro-cid-gfsgeucv> <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-gfsgeucv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-gfsgeucv></path> </svg> </div> </div> </div> <!-- Publisher Details --> <div class="p-4 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" data-astro-cid-gfsgeucv> <h3 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-astro-cid-gfsgeucv> ${publisher.name} </h3> <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300" data-astro-cid-gfsgeucv> ${publisher.appCount} app${publisher.appCount !== 1 ? "s" : ""} available
</p> </div> <!-- Screen Reader Content --> <div class="sr-only" data-astro-cid-gfsgeucv>
Publisher: ${publisher.name}.
${publisher.appCount} apps available.
                  Click to view all apps by this publisher.
</div> </a> </article>`) : renderTemplate`<div class="col-span-full text-center py-12" role="status" aria-live="polite" data-astro-cid-gfsgeucv> <div class="text-gray-500 dark:text-gray-400" data-astro-cid-gfsgeucv> <svg class="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-gfsgeucv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-gfsgeucv></path> </svg> <h3 class="text-lg font-medium mb-2" data-astro-cid-gfsgeucv>No publishers available</h3> <p class="text-sm" data-astro-cid-gfsgeucv>Please connect to Supabase to load publisher data.</p> </div> </div>`} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-gfsgeucv": true })} ` })} `;
}, "/home/project/src/pages/publisher/index.astro", void 0);

const $$file = "/home/project/src/pages/publisher/index.astro";
const $$url = "/publisher";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
