import { c as createComponent, d as createAstro, m as maybeRenderHead, f as renderScript, e as addAttribute, a as renderTemplate } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BreadcrumbNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreadcrumbNav;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Breadcrumb" data-astro-cid-xxae4cpn> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-xxae4cpn> <div class="overflow-x-auto breadcrumb-container py-4" data-astro-cid-xxae4cpn> <ol class="flex items-center space-x-2 text-sm whitespace-nowrap min-w-max" role="list" itemscope itemtype="https://schema.org/BreadcrumbList" data-astro-cid-xxae4cpn> ${items.map((item, index) => renderTemplate`<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" data-astro-cid-xxae4cpn> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-xxae4cpn> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-xxae4cpn></path> </svg>`} ${item.current ? renderTemplate`<span class="font-medium text-gray-900 dark:text-white inline-flex items-center min-h-[32px]" aria-current="page" itemprop="name" data-astro-cid-xxae4cpn> ${item.label} </span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center min-h-[32px]" itemprop="item" data-astro-cid-xxae4cpn> <span itemprop="name" data-astro-cid-xxae4cpn>${item.label}</span> </a>`} <meta itemprop="position"${addAttribute(`${index + 1}`, "content")}> </li>`)} </ol> </div> </div> </nav>  ${renderScript($$result, "/home/project/src/components/BreadcrumbNav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/BreadcrumbNav.astro", void 0);

export { $$BreadcrumbNav as $ };
