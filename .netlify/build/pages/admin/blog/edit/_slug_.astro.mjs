import { c as createComponent, d as createAstro, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../assets/Layout.Bem7CWBH.js';
import { $ as $$BlogForm } from '../../../../assets/BlogForm.DUG65bm8.js';
import { getAllBlogPosts } from '../../../../assets/supabase.Y_3SlIME.js';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const blogPosts = await getAllBlogPosts();
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseUrl = "https://esqsxkhlwkhwgxxsbczc.supabase.co";
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcXN4a2hsd2tod2d4eHNiY3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTY5NjAsImV4cCI6MjA2NzEzMjk2MH0.7CNrL08UtpwKdjAin_b-dS4viOhwEOoQZnYwwe4WjCc";
    if (supabaseUrl && supabaseAnonKey) {
      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      const { data: allPosts } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
      if (allPosts) {
        return allPosts.map((post) => ({
          params: { slug: post.slug },
          props: { post }
        }));
      }
    }
    return blogPosts.map((post) => ({
      params: { slug: post.slug },
      props: { post }
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
  const { post } = Astro2.props;
  if (!post) {
    return Astro2.redirect("/admin/blog");
  }
  const title = `Edit ${post.title} - Admin Dashboard`;
  const description = `Edit ${post.title} blog post in the admin dashboard`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 dark:bg-gray-900"> <!-- Admin Header --> <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"> <a href="/admin" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
Admin
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a href="/admin/blog" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
Blog Posts
</a> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-900 dark:text-white font-medium">Edit ${post.title}</span> </nav> <!-- User Menu --> <div class="flex items-center space-x-4"> <div class="text-right"> <p class="text-sm font-medium text-gray-900 dark:text-white" id="user-email">Loading...</p> <p class="text-xs text-gray-500 dark:text-gray-400">Administrator</p> </div> <button id="logout-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path> </svg>
Logout
</button> </div> </div> </div> </header> <!-- Main Content --> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <!-- Page Header --> <div class="mb-8"> <div class="flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Edit Blog Post</h1> <p class="text-gray-600 dark:text-gray-400 mt-2">Update "${post.title}" information</p> </div> <div class="flex items-center space-x-3"> <a${addAttribute(`/blog/${post.slug}`, "href")} target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg>
Preview
</a> <span class="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"> <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg>
Editing Mode
</span> </div> </div> </div> <!-- Blog Form --> ${renderComponent($$result2, "BlogForm", $$BlogForm, { "post": post, "mode": "edit" })} </main> </div> ` })} ${renderScript($$result, "/home/project/src/pages/admin/blog/edit/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/admin/blog/edit/[slug].astro", void 0);
const $$file = "/home/project/src/pages/admin/blog/edit/[slug].astro";
const $$url = "/admin/blog/edit/[slug]";

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
