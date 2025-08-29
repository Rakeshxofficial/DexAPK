import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../assets/Footer.WjzTwqKo.js';
/* empty css                              */

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Page Not Found - DexAPK";
  const description = "The page you're looking for doesn't exist or has been moved.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center" data-astro-cid-zetdm5md> <div class="max-w-xl mx-auto px-4 py-16 sm:py-24 text-center" data-astro-cid-zetdm5md> <div class="mb-8" data-astro-cid-zetdm5md> <div class="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto" data-astro-cid-zetdm5md> <svg class="w-12 h-12 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-zetdm5md></path> </svg> </div> </div> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-zetdm5md>404 - Page Not Found</h1> <p class="text-lg text-gray-600 dark:text-gray-400 mb-8" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or has been moved.
</p> <div class="space-y-4" data-astro-cid-zetdm5md> <a href="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md" data-astro-cid-zetdm5md> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-zetdm5md></path> </svg>
Back to Home
</a> <div class="pt-4" data-astro-cid-zetdm5md> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-zetdm5md>
Looking for something specific? Try searching our site.
</p> <a href="/search" class="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline" data-astro-cid-zetdm5md> <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-zetdm5md></path> </svg>
Search our site
</a> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} ` })} `;
}, "/home/project/src/pages/404.astro", void 0);

const $$file = "/home/project/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
