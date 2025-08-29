import { c as createComponent, d as createAstro, a as renderTemplate, g as defineScriptVars, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../assets/Layout.Bem7CWBH.js';
import { $ as $$DownloadTaskForm } from '../../../../assets/DownloadTaskForm.DYc7eZDg.js';
import { getDownloadTaskById } from '../../../../assets/supabase.Y_3SlIME.js';
/* empty css                                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let task = null;
  if (id) {
    task = await getDownloadTaskById(id);
  }
  if (!task) {
    return Astro2.redirect("/admin/download-tasks");
  }
  const title = `Edit ${task.name} - Admin Dashboard`;
  const description = `Edit download task in the admin dashboard`;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  import { getCurrentUser, signOut } from '../../../../lib/auth.js';\n\n  document.addEventListener('DOMContentLoaded', function() {\n    // Check authentication\n    checkAuth();\n    \n    // Set up form\n    setupForm();\n    \n    // Set up logout functionality\n    setupLogout();\n  });\n\n  async function checkAuth() {\n    try {\n      const result = await getCurrentUser();\n      \n      if (!result.success || !result.user) {\n        window.location.href = '/admin/login';\n        return;\n      }\n      \n      // Display user email\n      document.getElementById('user-email').textContent = result.user.email;\n    } catch (error) {\n      console.error('Auth check failed:', error);\n      window.location.href = '/admin/login';\n    }\n  }\n\n  function setupForm() {\n    // Form setup is now handled in the DownloadTaskForm component\n  }\n\n  function setupLogout() {\n    document.getElementById('logout-btn')?.addEventListener('click', async function() {\n      try {\n        await signOut();\n        window.location.href = '/admin/login';\n      } catch (error) {\n        console.error('Logout failed:', error);\n      }\n    });\n  }\n})();<\/script> "])), renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-yvqiccxr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-yvqiccxr> <!-- Admin Header --> <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700" data-astro-cid-yvqiccxr> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-yvqiccxr> <div class="flex items-center justify-between h-16" data-astro-cid-yvqiccxr> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-yvqiccxr> <a href="/admin" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-astro-cid-yvqiccxr>
Admin
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvqiccxr> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-yvqiccxr></path> </svg> <a href="/admin/download-tasks" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-astro-cid-yvqiccxr>
Download Tasks
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvqiccxr> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-yvqiccxr></path> </svg> <span class="text-gray-900 dark:text-white font-medium" data-astro-cid-yvqiccxr>Edit</span> </nav> <!-- User Menu --> <div class="flex items-center space-x-4" data-astro-cid-yvqiccxr> <div class="text-right" data-astro-cid-yvqiccxr> <p class="text-sm font-medium text-gray-900 dark:text-white" id="user-email" data-astro-cid-yvqiccxr>Loading...</p> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-yvqiccxr>Administrator</p> </div> <button id="logout-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200" data-astro-cid-yvqiccxr> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvqiccxr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-yvqiccxr></path> </svg>
Logout
</button> </div> </div> </div> </header> <!-- Main Content --> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-yvqiccxr> <!-- Page Header --> <div class="mb-8" data-astro-cid-yvqiccxr> <div class="flex items-center justify-between" data-astro-cid-yvqiccxr> <div data-astro-cid-yvqiccxr> <h1 class="text-3xl font-bold text-gray-900 dark:text-white" data-astro-cid-yvqiccxr>Edit Download Task</h1> <p class="text-gray-600 dark:text-gray-400 mt-2" data-astro-cid-yvqiccxr>Update "${task.name}" information</p> </div> <div class="flex items-center space-x-3" data-astro-cid-yvqiccxr> <a${addAttribute(task.task_url, "href")} target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200" data-astro-cid-yvqiccxr> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvqiccxr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-yvqiccxr></path> </svg>
Open URL
</a> <span class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" data-astro-cid-yvqiccxr> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvqiccxr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-yvqiccxr></path> </svg>
Editing Mode
</span> </div> </div> </div> <!-- Task Form --> ${renderComponent($$result2, "DownloadTaskForm", $$DownloadTaskForm, { "task": task, "mode": "edit", "data-astro-cid-yvqiccxr": true })} </main> </div>  <div id="loading-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50" data-astro-cid-yvqiccxr> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 text-center" data-astro-cid-yvqiccxr> <div class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" data-astro-cid-yvqiccxr></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-yvqiccxr>Updating Task...</h3> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-yvqiccxr>Please wait while we process your request.</p> </div> </div>  <div id="toast" class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg transform translate-y-full transition-transform duration-300 z-50" data-astro-cid-yvqiccxr> <div class="flex items-center gap-3" data-astro-cid-yvqiccxr> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvqiccxr> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-yvqiccxr></path> </svg> <span id="toast-message" data-astro-cid-yvqiccxr>Task updated successfully!</span> </div> </div> ` }), defineScriptVars({ task }));
}, "/home/project/src/pages/admin/download-tasks/edit/[id].astro", void 0);

const $$file = "/home/project/src/pages/admin/download-tasks/edit/[id].astro";
const $$url = "/admin/download-tasks/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
