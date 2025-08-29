import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderScript, a as renderTemplate, r as renderComponent } from '../../../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../assets/Layout.Bem7CWBH.js';
import { $ as $$AppForm } from '../../../../assets/AppForm.BKDHGmZt.js';
import 'clsx';
/* empty css                                          */
import { getAllApps } from '../../../../assets/supabase.Y_3SlIME.js';

const $$Astro$1 = createAstro();
const $$AppVersionsManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AppVersionsManager;
  const { app } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mt-8" data-astro-cid-wd7rajsn> <div class="flex items-center justify-between mb-8" data-astro-cid-wd7rajsn> <h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-wd7rajsn>
Manage App Versions
</h2> <button id="add-version-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200" data-astro-cid-wd7rajsn> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wd7rajsn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-wd7rajsn></path> </svg>
Add New Version
</button> </div> <!-- Versions Table --> <div class="overflow-x-auto" data-astro-cid-wd7rajsn> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-wd7rajsn> <thead class="bg-gray-50 dark:bg-gray-700" data-astro-cid-wd7rajsn> <tr data-astro-cid-wd7rajsn> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-wd7rajsn>Version</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-wd7rajsn>Size</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-wd7rajsn>MOD Info</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-wd7rajsn>Release Date</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-wd7rajsn>Status</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-wd7rajsn>Actions</th> </tr> </thead> <tbody id="versions-table" class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-wd7rajsn> <tr data-astro-cid-wd7rajsn> <td colspan="6" class="px-6 py-8 text-center text-gray-500 dark:text-gray-400" data-astro-cid-wd7rajsn> <div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" data-astro-cid-wd7rajsn></div> <p data-astro-cid-wd7rajsn>Loading versions...</p> </td> </tr> </tbody> </table> </div> <!-- No Versions Message --> <div id="no-versions-message" class="hidden text-center py-8" data-astro-cid-wd7rajsn> <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wd7rajsn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-astro-cid-wd7rajsn></path> </svg> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2" data-astro-cid-wd7rajsn>No versions found</h3> <p class="text-gray-500 dark:text-gray-400 mb-4" data-astro-cid-wd7rajsn>Add a new version to get started</p> <button id="add-first-version-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200" data-astro-cid-wd7rajsn> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wd7rajsn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-wd7rajsn></path> </svg>
Add First Version
</button> </div> </div> <!-- Version Form Modal --> <div id="version-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50" data-astro-cid-wd7rajsn> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4" data-astro-cid-wd7rajsn> <div class="flex items-center justify-between mb-6" data-astro-cid-wd7rajsn> <h3 class="text-xl font-bold text-gray-900 dark:text-white" id="modal-title" data-astro-cid-wd7rajsn>Add New Version</h3> <button id="close-modal" class="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200" data-astro-cid-wd7rajsn> <span class="sr-only" data-astro-cid-wd7rajsn>Close modal</span> <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wd7rajsn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-wd7rajsn></path> </svg> </button> </div> <form id="version-form" class="space-y-6" data-astro-cid-wd7rajsn> <input type="hidden" id="version-id" name="id" value="" data-astro-cid-wd7rajsn> <input type="hidden" id="app-id" name="app_id"${addAttribute(app.id, "value")} data-astro-cid-wd7rajsn> <!-- Version --> <div data-astro-cid-wd7rajsn> <label for="version" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-wd7rajsn>
Version *
</label> <input type="text" id="version" name="version" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="v1.0.0" data-astro-cid-wd7rajsn> </div> <!-- Size --> <div data-astro-cid-wd7rajsn> <label for="size" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-wd7rajsn>
Size *
</label> <input type="text" id="size" name="size" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="25.5 MB" data-astro-cid-wd7rajsn> </div> <!-- MOD Info --> <div data-astro-cid-wd7rajsn> <label for="mod_info" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-wd7rajsn>
MOD Info *
</label> <input type="text" id="mod_info" name="mod_info" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Premium Unlocked" data-astro-cid-wd7rajsn> </div> <!-- Download URL --> <div data-astro-cid-wd7rajsn> <label for="download_url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-wd7rajsn>
Download URL *
</label> <input type="url" id="download_url" name="download_url" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/download/app-v1.0.0.apk" data-astro-cid-wd7rajsn> </div> <!-- Release Date --> <div data-astro-cid-wd7rajsn> <label for="release_date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-wd7rajsn>
Release Date *
</label> <input type="date" id="release_date" name="release_date" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"${addAttribute((/* @__PURE__ */ new Date()).toISOString().split("T")[0], "value")} data-astro-cid-wd7rajsn> </div> <!-- Active Status --> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl" data-astro-cid-wd7rajsn> <div data-astro-cid-wd7rajsn> <label for="is_active" class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-wd7rajsn>
Active Status
</label> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-wd7rajsn>
Enable this version for use
</p> </div> <label class="relative inline-flex items-center cursor-pointer" data-astro-cid-wd7rajsn> <input type="checkbox" id="is_active" name="is_active" checked class="sr-only peer" data-astro-cid-wd7rajsn> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" data-astro-cid-wd7rajsn></div> </label> </div> <!-- Form Buttons --> <div class="flex items-center justify-end space-x-4 pt-4" data-astro-cid-wd7rajsn> <button type="button" id="cancel-version" class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-wd7rajsn>
Cancel
</button> <button type="submit" id="save-version" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200" data-astro-cid-wd7rajsn>
Save Version
</button> </div> </form> </div> </div> <!-- Delete Confirmation Modal --> <div id="delete-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50" data-astro-cid-wd7rajsn> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4" data-astro-cid-wd7rajsn> <div class="text-center" data-astro-cid-wd7rajsn> <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-wd7rajsn> <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wd7rajsn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-wd7rajsn></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-wd7rajsn>Delete Version</h3> <p class="text-gray-600 dark:text-gray-400 mb-6" data-astro-cid-wd7rajsn>
Are you sure you want to delete this version? This action cannot be undone.
</p> <div class="flex items-center justify-center space-x-4" data-astro-cid-wd7rajsn> <button id="cancel-delete" type="button" class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-wd7rajsn>
Cancel
</button> <button id="confirm-delete" type="button" class="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors duration-200" data-astro-cid-wd7rajsn>
Delete Version
</button> </div> </div> </div> </div> <!-- Loading Overlay --> <div id="loading-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50" data-astro-cid-wd7rajsn> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 text-center" data-astro-cid-wd7rajsn> <div class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" data-astro-cid-wd7rajsn></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-wd7rajsn>Processing...</h3> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-wd7rajsn>Please wait while we process your request.</p> </div> </div> <!-- Toast Notification --> <div id="toast" class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg transform translate-y-full transition-transform duration-300 z-50" data-astro-cid-wd7rajsn> <div class="flex items-center gap-3" data-astro-cid-wd7rajsn> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wd7rajsn> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-wd7rajsn></path> </svg> <span id="toast-message" data-astro-cid-wd7rajsn>Action completed successfully!</span> </div> </div> ${renderScript($$result, "/home/project/src/components/admin/AppVersionsManager.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/components/admin/AppVersionsManager.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const apps = await getAllApps();
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseUrl = "https://esqsxkhlwkhwgxxsbczc.supabase.co";
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcXN4a2hsd2tod2d4eHNiY3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTY5NjAsImV4cCI6MjA2NzEzMjk2MH0.7CNrL08UtpwKdjAin_b-dS4viOhwEOoQZnYwwe4WjCc";
    if (supabaseUrl && supabaseAnonKey) {
      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      const { data: allApps } = await supabase.from("apps").select("*").order("created_at", { ascending: false });
      if (allApps) {
        return allApps.map((app) => ({
          params: { slug: app.slug },
          props: { app }
        }));
      }
    }
    return apps.map((app) => ({
      params: { slug: app.slug },
      props: { app }
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { app } = Astro2.props;
  if (!app) {
    return Astro2.redirect("/admin/apps");
  }
  const title = `Edit ${app.name} - Admin Dashboard`;
  const description = `Edit ${app.name} APK application in the admin dashboard`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 dark:bg-gray-900"> <!-- Admin Header --> <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"> <a href="/admin" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
Admin
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a href="/admin/apps" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
Apps
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-900 dark:text-white font-medium">Edit ${app.name}</span> </nav> <!-- User Menu --> <div class="flex items-center space-x-4"> <div class="text-right"> <p class="text-sm font-medium text-gray-900 dark:text-white" id="user-email">Loading...</p> <p class="text-xs text-gray-500 dark:text-gray-400">Administrator</p> </div> <button id="logout-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path> </svg>
Logout
</button> </div> </div> </div> </header> <!-- Main Content --> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <!-- Page Header --> <div class="mb-8"> <div class="flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Edit App</h1> <p class="text-gray-600 dark:text-gray-400 mt-2">Update "${app.name}" information</p> </div> <div class="flex items-center space-x-3"> <a${addAttribute(`/${app.slug}`, "href")} target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg>
Preview
</a> <span class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg>
Editing Mode
</span> </div> </div> </div> <!-- App Form --> ${renderComponent($$result2, "AppForm", $$AppForm, { "app": app, "mode": "edit" })} <!-- App Versions Manager --> <div class="mt-8"> ${renderComponent($$result2, "AppVersionsManager", $$AppVersionsManager, { "app": app })} </div> </main> </div> ` })} ${renderScript($$result, "/home/project/src/pages/admin/apps/edit/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/admin/apps/edit/[slug].astro", void 0);
const $$file = "/home/project/src/pages/admin/apps/edit/[slug].astro";
const $$url = "/admin/apps/edit/[slug]";

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
