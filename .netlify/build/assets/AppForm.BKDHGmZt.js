import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderScript, a as renderTemplate } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$AppForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppForm;
  const { app, mode } = Astro2.props;
  const isEdit = mode === "edit";
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8"> <div class="flex items-center justify-between mb-8"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white"> ${isEdit ? "Edit App" : "Add New App"} </h2> <div class="flex items-center gap-2"> <div class="w-3 h-3 bg-green-500 rounded-full"></div> <span class="text-sm text-gray-600 dark:text-gray-400"> ${isEdit ? "Editing Mode" : "Creation Mode"} </span> </div> </div> <form id="app-form" class="space-y-8"> <!-- Basic Information --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
Basic Information
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
App Name *
</label> <input type="text" id="name" name="name"${addAttribute(app?.name || "", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Enter app name"> </div> <div> <label for="slug" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
URL Slug *
</label> <input type="text" id="slug" name="slug"${addAttribute(app?.slug || "", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="app-name-slug"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
URL-friendly version (e.g., chatgpt-premium)
</p> </div> <div> <label for="version" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Version *
</label> <input type="text" id="version" name="version"${addAttribute(app?.version || "1.0.0", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="1.0.0"> </div> <div> <label for="size" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
File Size *
</label> <input type="text" id="size" name="size"${addAttribute(app?.size || "0 MB", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="25.5 MB"> </div> <div> <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Category *
</label> <select id="category" name="category" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"> <option value="">Select Category</option> <option value="Productivity"${addAttribute(app?.category === "Productivity", "selected")}>Productivity</option> <option value="Music"${addAttribute(app?.category === "Music", "selected")}>Music</option> <option value="Video"${addAttribute(app?.category === "Video", "selected")}>Video</option> <option value="Entertainment"${addAttribute(app?.category === "Entertainment", "selected")}>Entertainment</option> <option value="Social"${addAttribute(app?.category === "Social", "selected")}>Social</option> <option value="Photography"${addAttribute(app?.category === "Photography", "selected")}>Photography</option> <option value="Games"${addAttribute(app?.category === "Games", "selected")}>Games</option> <option value="Media"${addAttribute(app?.category === "Media", "selected")}>Media</option> <option value="Apps"${addAttribute(app?.category === "Apps", "selected")}>Apps</option> </select> </div> <div> <label for="publisher" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Publisher *
</label> <input type="text" id="publisher" name="publisher"${addAttribute(app?.publisher || "Unknown", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Publisher Name"> </div> <div> <label for="requirements" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Requirements *
</label> <input type="text" id="requirements" name="requirements"${addAttribute(app?.requirements || "Android 5.0+", "value")} required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Android 5.0+"> </div> <div> <label for="price" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Price
</label> <input type="text" id="price" name="price"${addAttribute(app?.price || "Free", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Free"> </div> <div> <label for="platform" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Platform
</label> <input type="text" id="platform" name="platform"${addAttribute(app?.platform || "Google Play", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Google Play"> </div> <div> <label for="last_updated" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Last Updated
</label> <input type="text" id="last_updated" name="last_updated"${addAttribute(app?.last_updated || (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }), "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Jan 01, 2025"> </div> <div> <label for="rating" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Rating (0-5)
</label> <input type="number" id="rating" name="rating" min="0" max="5" step="0.1"${addAttribute(app?.rating || 4, "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="4.0"> </div> <div> <label for="votes" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Vote Count
</label> <input type="number" id="votes" name="votes" min="0"${addAttribute(app?.votes || 0, "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="1000"> </div> </div> <!-- Description --> <div> <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Description *
</label> <textarea id="description" name="description" rows="4" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Enter app description...">${app?.description || ""}</textarea> </div> <!-- URLs --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="icon" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Icon URL
</label> <input type="url" id="icon" name="icon"${addAttribute(app?.icon || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/icon.png"> </div> <div> <label for="download_url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Download URL
</label> <input type="url" id="download_url" name="download_url"${addAttribute(app?.download_url || "#", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/download"> </div> </div> <!-- Features --> <div> <label for="features" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Features (one per line)
</label> <textarea id="features" name="features" rows="4" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Premium features unlocked
No ads
Unlimited access">${app?.features ? app.features.join("\n") : ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Enter each feature on a new line
</p> </div> <!-- MOD Info --> <div> <label for="mod_info" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
MOD Information (one per line)
</label> <textarea id="mod_info" name="mod_info" rows="4" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Premium Unlocked
Ad-Free Experience
No Root Required">${app?.mod_info ? app.mod_info.join("\n") : ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Enter each MOD feature on a new line
</p> </div> <!-- Screenshots --> <div> <label for="screenshots" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Screenshot URLs (one per line)
</label> <textarea id="screenshots" name="screenshots" rows="3" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/screenshot1.jpg
https://example.com/screenshot2.jpg">${app?.screenshots ? app.screenshots.join("\n") : ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Enter each screenshot URL on a new line
</p> </div> </div> <!-- Article Content --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center"> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Article Content
</h3> <div> <label for="article_content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Article Content (Markdown)
</label> <div class="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"> <h4 class="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Markdown Support:</h4> <div class="text-xs text-blue-700 dark:text-blue-300 space-y-1"> <p><strong>Headings:</strong> # H1, ## H2, ### H3</p> <p><strong>Text:</strong> **bold**, *italic*, \`code\`, ~~strikethrough~~</p> <p><strong>Lists:</strong> - item or 1. item</p> <p><strong>Links:</strong> [text](url)</p> <p><strong>Tables:</strong> | Column 1 | Column 2 |</p> <p><strong>Code blocks:</strong> \`\`\`language</p> <p><strong>Quotes:</strong> > quote text</p> </div> </div> <textarea id="article_content" name="article_content" rows="20" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200 font-mono text-sm" placeholder="# Introduction

Write your article content here using Markdown syntax...

## Key Features

- Feature 1
- Feature 2
- Feature 3

## Installation Guide

1. Download the APK
2. Enable unknown sources
3. Install the app

## Conclusion

Your conclusion here...">${app?.article_content || ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Write your article content using Markdown syntax. This will replace the hard-coded content on the app details page.
</p> </div> <!-- Article Preview --> <div> <button type="button" id="preview-article" class="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg>
Preview Article
</button> <div id="article-preview" class="hidden mt-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"> <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Article Preview:</h4> <div id="preview-content" class="prose prose-gray dark:prose-invert max-w-none"> <!-- Preview content will be rendered here using MarkdownRenderer --> </div> </div> </div> </div> <!-- SEO Settings --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
SEO Settings
</h3> <div class="grid grid-cols-1 gap-6"> <div> <label for="seo_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Title
</label> <input type="text" id="seo_title" name="seo_title"${addAttribute(app?.seo_title || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Custom SEO title (leave empty for auto-generated)"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
If empty, will auto-generate: "${app?.name || "App Name"} v${app?.version || "1.0.0"} MOD APK - Premium Features Unlocked | DexAPK"
</p> </div> <div> <label for="seo_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Description
</label> <textarea id="seo_description" name="seo_description" rows="3" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Custom SEO description (leave empty for auto-generated)">${app?.seo_description || ""}</textarea> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Recommended length: 150-160 characters. If empty, will auto-generate from app description.
</p> </div> <div> <label for="custom_h1_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Custom H1 Title
</label> <input type="text" id="custom_h1_title" name="custom_h1_title"${addAttribute(app?.custom_h1_title || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="Custom H1 heading for app details page"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Custom H1 title for the app details page. If empty, will use default format: "${app?.name || "App Name"} v${app?.version || "1.0.0"} MOD APK"
</p> </div> <div> <label for="seo_featured_image" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Featured Image URL
</label> <input type="url" id="seo_featured_image" name="seo_featured_image"${addAttribute(app?.seo_featured_image || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://example.com/featured-image.jpg"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Used for social media sharing (OG/Twitter cards). If empty, will use app icon. Recommended size: 1200x630px.
</p> </div> <div> <label for="seo_keywords" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
SEO Keywords
</label> <input type="text" id="seo_keywords" name="seo_keywords"${addAttribute(app?.seo_keywords || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="keyword1, keyword2, keyword3"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Comma-separated keywords. If empty, will auto-generate from app name and category.
</p> </div> <div> <label for="seo_canonical_url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Canonical URL
</label> <input type="url" id="seo_canonical_url" name="seo_canonical_url"${addAttribute(app?.seo_canonical_url || "", "value")} class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200" placeholder="https://dexapk.com/app-slug"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Custom canonical URL. If empty, will use the default app URL.
</p> </div> </div> </div> <!-- Status Toggles --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
Status Settings
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"> <div> <label for="is_featured" class="text-sm font-medium text-gray-700 dark:text-gray-300">
Featured App
</label> <p class="text-xs text-gray-500 dark:text-gray-400">
Show in featured section
</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="is_featured" name="is_featured"${addAttribute(app?.is_featured || false, "checked")} class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </label> </div> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"> <div> <label for="is_active" class="text-sm font-medium text-gray-700 dark:text-gray-300">
Active Status
</label> <p class="text-xs text-gray-500 dark:text-gray-400">
Publicly visible
</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="is_active" name="is_active"${addAttribute(app?.is_active !== false, "checked")} class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </label> </div> <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"> <div> <label for="disable_download_page" class="text-sm font-medium text-gray-700 dark:text-gray-300">
Disable Download Page
</label> <p class="text-xs text-gray-500 dark:text-gray-400">
Skip download page and link directly to file
</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="disable_download_page" name="disable_download_page"${addAttribute(app?.disable_download_page || false, "checked")} class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> </label> </div> </div> </div> <!-- Form Actions --> <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700"> <button type="button" onclick="window.history.back()" class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
Cancel
</button> <div class="flex items-center gap-3"> <button type="button" id="preview-btn" class="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200">
Preview
</button> <button type="submit" id="submit-btn" class="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${isEdit ? "Update App" : "Create App"} </button> </div> </div> </form> </div> <!-- Loading Overlay --> <div id="loading-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center z-50"> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 text-center"> <div class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2"> ${isEdit ? "Updating App..." : "Creating App..."} </h3> <p class="text-gray-600 dark:text-gray-400">
Please wait while we process your request.
</p> </div> </div> <!-- Success/Error Toast --> <div id="toast" class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg transform translate-y-full transition-transform duration-300 z-50"> <div class="flex items-center gap-3"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span id="toast-message">App saved successfully!</span> </div> </div> ${renderScript($$result, "/home/project/src/components/admin/AppForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/admin/AppForm.astro", void 0);

export { $$AppForm as $ };
