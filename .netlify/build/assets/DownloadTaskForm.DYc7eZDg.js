import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, f as renderScript, F as Fragment, a as renderTemplate, u as unescapeHTML } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
/* empty css                       */

const $$Astro = createAstro();
const $$DownloadTaskForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DownloadTaskForm;
  const { task, mode } = Astro2.props;
  const isEdit = mode === "edit";
  function getTaskTypeClass(taskType) {
    switch (taskType?.toLowerCase()) {
      case "telegram":
        return "from-blue-500 to-blue-600 text-white";
      case "instagram":
        return "from-purple-500 to-pink-600 text-white";
      case "youtube":
        return "from-red-500 to-red-600 text-white";
      case "twitter":
      case "x":
        return "from-gray-700 to-gray-900 text-white";
      case "facebook":
        return "from-blue-600 to-blue-800 text-white";
      default:
        return "from-gray-500 to-gray-600 text-white";
    }
  }
  function getTaskTypeIcon(taskType) {
    switch (taskType?.toLowerCase()) {
      case "telegram":
        return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.176-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.832z"/>
      </svg>`;
      case "instagram":
        return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>`;
      case "youtube":
        return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>`;
      case "twitter":
      case "x":
        return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>`;
      case "facebook":
        return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>`;
      default:
        return `<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8" data-astro-cid-cec75dld> <form id="task-form" class="space-y-6"${addAttribute(task?.id || "", "data-task-id")}${addAttribute(mode, "data-mode")} data-astro-cid-cec75dld> <!-- Task Name --> <div data-astro-cid-cec75dld> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-cec75dld>
Task Name *
</label> <input type="text" id="name" name="name"${addAttribute(task?.name || "", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Join our Telegram channel" data-astro-cid-cec75dld> </div> <!-- Task Description --> <div data-astro-cid-cec75dld> <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-cec75dld>
Description
</label> <textarea id="description" name="description" rows="3" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Join our Telegram channel for updates and support" data-astro-cid-cec75dld>${task?.description || ""}</textarea> </div> <!-- Task Type --> <div data-astro-cid-cec75dld> <label for="task_type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-cec75dld>
Task Type *
</label> <select id="task_type" name="task_type" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" data-astro-cid-cec75dld> <option value="" data-astro-cid-cec75dld>Select Task Type</option> <option value="telegram"${addAttribute(task?.task_type === "telegram", "selected")} data-astro-cid-cec75dld>Telegram</option> <option value="instagram"${addAttribute(task?.task_type === "instagram", "selected")} data-astro-cid-cec75dld>Instagram</option> <option value="youtube"${addAttribute(task?.task_type === "youtube", "selected")} data-astro-cid-cec75dld>YouTube</option> <option value="twitter"${addAttribute(task?.task_type === "twitter", "selected")} data-astro-cid-cec75dld>Twitter/X</option> <option value="facebook"${addAttribute(task?.task_type === "facebook", "selected")} data-astro-cid-cec75dld>Facebook</option> <option value="other"${addAttribute(task?.task_type === "other", "selected")} data-astro-cid-cec75dld>Other</option> </select> </div> <!-- Task URL --> <div data-astro-cid-cec75dld> <label for="task_url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-cec75dld>
Task URL *
</label> <input type="url" id="task_url" name="task_url"${addAttribute(task?.task_url || "", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://t.me/dexapk_com" data-astro-cid-cec75dld> </div> <!-- Task Icon (Optional) --> <div data-astro-cid-cec75dld> <label for="task_icon" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-cec75dld>
Custom Icon URL (Optional)
</label> <input type="url" id="task_icon" name="task_icon"${addAttribute(task?.task_icon || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/icon.png" data-astro-cid-cec75dld> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1" data-astro-cid-cec75dld>
Leave empty to use default icon for the selected task type
</p> </div> <!-- Active Status --> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl" data-astro-cid-cec75dld> <div data-astro-cid-cec75dld> <label for="is_active" class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-cec75dld>
Active Status
</label> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-cec75dld>
Enable this task for use
</p> </div> <label class="relative inline-flex items-center cursor-pointer" data-astro-cid-cec75dld> <input type="checkbox" id="is_active" name="is_active"${addAttribute(task?.is_active !== false, "checked")} class="sr-only peer" data-astro-cid-cec75dld> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" data-astro-cid-cec75dld></div> </label> </div> <!-- Preview --> <div data-astro-cid-cec75dld> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-astro-cid-cec75dld>Task Preview</h3> <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl" data-astro-cid-cec75dld> <button id="preview-task-button"${addAttribute(`w-full py-4 px-6 rounded-xl flex items-center justify-between bg-gradient-to-r ${getTaskTypeClass(task?.task_type || "telegram")}`, "class")} type="button" data-astro-cid-cec75dld> <div class="flex items-center" data-astro-cid-cec75dld> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(getTaskTypeIcon(task?.task_type || "telegram"))}` })} <span class="ml-3 font-medium text-white" id="preview-task-name" data-astro-cid-cec75dld>${task?.name || "Join our Telegram channel"}</span> </div> </button> </div> </div> <!-- Form Actions --> <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700" data-astro-cid-cec75dld> <a href="/admin/download-tasks" class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-cec75dld>
Cancel
</a> <button type="submit" id="submit-btn" class="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2" data-astro-cid-cec75dld> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-cec75dld> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-cec75dld></path> </svg> ${isEdit ? "Update Task" : "Create Task"} </button> </div> </form> </div> ${renderScript($$result, "/home/project/src/components/admin/DownloadTaskForm.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/components/admin/DownloadTaskForm.astro", void 0);

export { $$DownloadTaskForm as $ };
