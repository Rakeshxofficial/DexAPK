import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../assets/Layout.Bem7CWBH.js';
import { $ as $$DownloadTaskForm } from '../../../assets/DownloadTaskForm.DYc7eZDg.js';
/* empty css                                    */

const prerender = false;
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Add New Download Task - Admin Dashboard";
  const description = "Create a new download task for MOD APKs in the admin dashboard";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-uelaejg7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-uelaejg7> <!-- Admin Header --> <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700" data-astro-cid-uelaejg7> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uelaejg7> <div class="flex items-center justify-between h-16" data-astro-cid-uelaejg7> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-uelaejg7> <a href="/admin" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-astro-cid-uelaejg7>
Admin
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-uelaejg7> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-uelaejg7></path> </svg> <a href="/admin/download-tasks" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-astro-cid-uelaejg7>
Download Tasks
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-uelaejg7> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-uelaejg7></path> </svg> <span class="text-gray-900 dark:text-white font-medium" data-astro-cid-uelaejg7>New</span> </nav> <!-- User Menu --> <div class="flex items-center space-x-4" data-astro-cid-uelaejg7> <div class="text-right" data-astro-cid-uelaejg7> <p class="text-sm font-medium text-gray-900 dark:text-white" id="user-email" data-astro-cid-uelaejg7>Loading...</p> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-uelaejg7>Administrator</p> </div> <button id="logout-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200" data-astro-cid-uelaejg7> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uelaejg7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-uelaejg7></path> </svg>
Logout
</button> </div> </div> </div> </header> <!-- Main Content --> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-uelaejg7> <!-- Page Header --> <div class="mb-8" data-astro-cid-uelaejg7> <h1 class="text-3xl font-bold text-gray-900 dark:text-white" data-astro-cid-uelaejg7>Add New Download Task</h1> <p class="text-gray-600 dark:text-gray-400 mt-2" data-astro-cid-uelaejg7>Create a new task that users need to complete before downloading</p> </div> <!-- Task Form --> ${renderComponent($$result2, "DownloadTaskForm", $$DownloadTaskForm, { "mode": "create", "data-astro-cid-uelaejg7": true })} </main> </div>  <div id="loading-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50" data-astro-cid-uelaejg7> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 text-center" data-astro-cid-uelaejg7> <div class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" data-astro-cid-uelaejg7></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-uelaejg7>Creating Task...</h3> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-uelaejg7>Please wait while we process your request.</p> </div> </div>  <div id="toast" class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg transform translate-y-full transition-transform duration-300 z-50" data-astro-cid-uelaejg7> <div class="flex items-center gap-3" data-astro-cid-uelaejg7> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-uelaejg7> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-uelaejg7></path> </svg> <span id="toast-message" data-astro-cid-uelaejg7>Task created successfully!</span> </div> </div> ` })} ${renderScript($$result, "/home/project/src/pages/admin/download-tasks/new.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/pages/admin/download-tasks/new.astro", void 0);

const $$file = "/home/project/src/pages/admin/download-tasks/new.astro";
const $$url = "/admin/download-tasks/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
