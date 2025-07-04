/* empty css                                        */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DeKgRGar.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BXJnm_YX.mjs';
import { $ as $$AppForm } from '../../../chunks/AppForm_B7UN-sY7.mjs';
export { renderers } from '../../../renderers.mjs';

const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Add New App - Admin Dashboard";
  const description = "Create a new APK application in the admin dashboard";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 dark:bg-gray-900"> <!-- Admin Header --> <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"> <a href="/admin" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
Admin
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a href="/admin/apps" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
Apps
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-900 dark:text-white font-medium">New</span> </nav> <!-- User Menu --> <div class="flex items-center space-x-4"> <div class="text-right"> <p class="text-sm font-medium text-gray-900 dark:text-white" id="user-email">Loading...</p> <p class="text-xs text-gray-500 dark:text-gray-400">Administrator</p> </div> <button id="logout-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path> </svg>
Logout
</button> </div> </div> </div> </header> <!-- Main Content --> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <!-- Page Header --> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Add New App</h1> <p class="text-gray-600 dark:text-gray-400 mt-2">Create a new APK listing for your collection</p> </div> <!-- App Form --> ${renderComponent($$result2, "AppForm", $$AppForm, { "mode": "create" })} </main> </div> ` })} ${renderScript($$result, "/home/project/src/pages/admin/apps/new.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/admin/apps/new.astro", void 0);

const $$file = "/home/project/src/pages/admin/apps/new.astro";
const $$url = "/admin/apps/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
