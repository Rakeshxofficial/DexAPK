import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate, e as addAttribute } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
import 'clsx';
import { getAppsByCategory, getAllApps } from './supabase.Y_3SlIME.js';

const $$Astro = createAstro();
const $$InternalLinkModule = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InternalLinkModule;
  const {
    currentSlug = "",
    currentCategory = "",
    maxLinks = 5,
    showHeading = true,
    headingText = "You May Also Like"
  } = Astro2.props;
  let relatedApps = [];
  try {
    if (currentCategory) {
      relatedApps = await getAppsByCategory(currentCategory, 10);
      if (currentSlug) {
        relatedApps = relatedApps.filter((app) => app.slug !== currentSlug);
      }
    } else {
      const allApps = await getAllApps();
      relatedApps = allApps.sort(() => 0.5 - Math.random()).slice(0, maxLinks * 2);
    }
    relatedApps = relatedApps.slice(0, maxLinks);
  } catch (error) {
    console.error("Error loading related apps for internal linking:", error);
    relatedApps = [];
  }
  function generateAnchorText(app) {
    const variations = [
      `Download ${app.name} MOD APK`,
      `${app.name} Premium Unlocked`,
      `${app.name} v${app.version} MOD`,
      `${app.category}: ${app.name}`
    ];
    return variations[Math.floor(Math.random() * variations.length)];
  }
  return renderTemplate`${relatedApps.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-xl p-4 my-6 border border-gray-200 dark:border-gray-700">${showHeading && renderTemplate`<div class="text-lg font-semibold text-gray-900 dark:text-white mb-3">${headingText}</div>`}<ul class="space-y-2">${relatedApps.map((app) => renderTemplate`<li><a${addAttribute(`/${app.slug}`, "href")} class="text-blue-600 dark:text-blue-400 hover:underline flex items-center" rel="prefetch"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>${generateAnchorText(app)}</a></li>`)}</ul></div>`}`;
}, "/home/project/src/components/InternalLinkModule.astro", void 0);

export { $$InternalLinkModule as $ };
