import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderScript, a as renderTemplate } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BlogForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogForm;
  const { post, mode } = Astro2.props;
  const isEdit = mode === "edit";
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8"> <div class="flex items-center justify-between mb-8"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white"> ${isEdit ? "Edit Blog Post" : "Add New Blog Post"} </h2> <div class="flex items-center gap-2"> <div class="w-3 h-3 bg-green-500 rounded-full"></div> <span class="text-sm text-gray-600 dark:text-gray-400"> ${isEdit ? "Editing Mode" : "Creation Mode"} </span> </div> </div> <form id="blog-form" class="space-y-8"> <!-- Basic Information --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
Basic Information
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Blog Title *
</label> <input type="text" id="title" name="title"${addAttribute(post?.title || "", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Enter blog title"> </div> <div> <label for="slug" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
URL Slug *
</label> <input type="text" id="slug" name="slug"${addAttribute(post?.slug || "", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="blog-post-slug"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
URL-friendly version (e.g., how-to-install-mod-apks)
</p> </div> <div> <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Category *
</label> <select id="category" name="category" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"> <option value="">Select Category</option> <option value="Tutorials"${addAttribute(post?.category === "Tutorials", "selected")}>Tutorials</option> <option value="News"${addAttribute(post?.category === "News", "selected")}>News</option> <option value="Reviews"${addAttribute(post?.category === "Reviews", "selected")}>Reviews</option> <option value="Tips & Tricks"${addAttribute(post?.category === "Tips & Tricks", "selected")}>Tips & Tricks</option> <option value="Android"${addAttribute(post?.category === "Android", "selected")}>Android</option> <option value="Technology"${addAttribute(post?.category === "Technology", "selected")}>Technology</option> <option value="General"${addAttribute(post?.category === "General", "selected")}>General</option> </select> </div> <div> <label for="author" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Author *
</label> <input type="text" id="author" name="author"${addAttribute(post?.author || "DexAPK Team", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Author Name"> </div> <div> <label for="published_date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Published Date *
</label> <input type="date" id="published_date" name="published_date"${addAttribute(post?.published_date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0], "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"> </div> <div> <label for="reading_time" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Reading Time (minutes)
</label> <input type="number" id="reading_time" name="reading_time" min="1" max="60"${addAttribute(post?.reading_time || 5, "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="5"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Leave empty to auto-calculate based on content
</p> </div> </div> <!-- Excerpt --> <div> <label for="excerpt" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Excerpt
</label> <textarea id="excerpt" name="excerpt" rows="3" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Brief description of the blog post...">${post?.excerpt || ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Short summary that appears in blog listings and social media shares
</p> </div> <!-- Thumbnail Image --> <div> <label for="thumbnail_image" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Thumbnail Image URL
</label> <input type="url" id="thumbnail_image" name="thumbnail_image"${addAttribute(post?.thumbnail_image || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/thumbnail.jpg"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Featured image for the blog post. Recommended size: 800x450px
</p> </div> <!-- Tags --> <div> <label for="tags" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Tags (comma-separated)
</label> <input type="text" id="tags" name="tags"${addAttribute(post?.tags ? post.tags.join(", ") : "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="android, tutorial, mod apk, guide"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Separate tags with commas (e.g., android, tutorial, guide)
</p> </div> </div> <!-- Blog Content --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center"> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Blog Content
</h3> <div> <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Content (Markdown) *
</label> <div class="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"> <h4 class="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Markdown Support:</h4> <div class="text-xs text-blue-700 dark:text-blue-300 space-y-1"> <p><strong>Headings:</strong> # H1, ## H2, ### H3</p> <p><strong>Text:</strong> **bold**, *italic*, \`code\`, ~~strikethrough~~</p> <p><strong>Lists:</strong> - item or 1. item</p> <p><strong>Links:</strong> [text](url)</p> <p><strong>Images:</strong> ![alt text](image-url)</p> <p><strong>Code blocks:</strong> \`\`\`language</p> <p><strong>Quotes:</strong> > quote text</p> </div> </div> <textarea id="content" name="content" rows="20" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200 font-mono text-sm" placeholder="# Blog Post Title

Write your blog content here using Markdown syntax...

## Introduction

Your introduction here...

## Main Content

Your main content here...

## Conclusion

Your conclusion here...">${post?.content || ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Write your blog content using Markdown syntax. This will be rendered on the blog detail page.
</p> </div> <!-- Content Preview --> <div> <button type="button" id="preview-content" class="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg>
Preview Content
</button> <div id="content-preview" class="hidden mt-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"> <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Preview:</h4> <div id="preview-html" class="prose prose-gray dark:prose-invert max-w-none"> <!-- Preview content will be rendered here using MarkdownRenderer --> </div> </div> </div> </div> <!-- SEO Settings --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
SEO Settings
</h3> <div class="grid grid-cols-1 gap-6"> <div> <label for="seo_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Title
</label> <input type="text" id="seo_title" name="seo_title"${addAttribute(post?.seo_title || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Custom SEO title (leave empty for auto-generated)"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
If empty, will auto-generate: "${post?.title || "Blog Title"} - DexAPK Blog"
</p> </div> <div> <label for="seo_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Description
</label> <textarea id="seo_description" name="seo_description" rows="3" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Custom SEO description (leave empty for auto-generated)">${post?.seo_description || ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Recommended length: 150-160 characters. If empty, will use excerpt or auto-generate.
</p> </div> <div> <label for="seo_keywords" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Keywords
</label> <input type="text" id="seo_keywords" name="seo_keywords"${addAttribute(post?.seo_keywords || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="keyword1, keyword2, keyword3"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Comma-separated keywords. If empty, will auto-generate from title and tags.
</p> </div> </div> </div> <!-- Status Toggles --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
Status Settings
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"> <div> <label for="is_featured" class="text-sm font-medium text-gray-700 dark:text-gray-300">
Featured Post
</label> <p class="text-xs text-gray-500 dark:text-gray-400">
Show in featured section
</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="is_featured" name="is_featured"${addAttribute(post?.is_featured || false, "checked")} class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </label> </div> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"> <div> <label for="is_published" class="text-sm font-medium text-gray-700 dark:text-gray-300">
Published Status
</label> <p class="text-xs text-gray-500 dark:text-gray-400">
Publicly visible
</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="is_published" name="is_published"${addAttribute(post?.is_published !== false, "checked")} class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </label> </div> </div> </div> <!-- Form Actions --> <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700"> <button type="button" onclick="window.history.back()" class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
Cancel
</button> <div class="flex items-center gap-3"> <button type="button" id="preview-btn" class="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200">
Preview
</button> <button type="submit" id="submit-btn" class="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${isEdit ? "Update Post" : "Create Post"} </button> </div> </div> </form> </div> <!-- Loading Overlay --> <div id="loading-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50"> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 text-center"> <div class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2"> ${isEdit ? "Updating Post..." : "Creating Post..."} </h3> <p class="text-gray-600 dark:text-gray-400">
Please wait while we process your request.
</p> </div> </div> <!-- Success/Error Toast --> <div id="toast" class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg transform translate-y-full transition-transform duration-300 z-50"> <div class="flex items-center gap-3"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span id="toast-message">Post saved successfully!</span> </div> </div> ${renderScript($$result, "/home/project/src/components/admin/BlogForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/admin/BlogForm.astro", void 0);

export { $$BlogForm as $ };
