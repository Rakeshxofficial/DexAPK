import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate, e as addAttribute, r as renderComponent, F as Fragment, u as unescapeHTML } from '../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { $ as $$Layout } from '../assets/Layout.Bem7CWBH.js';
import { $ as $$Header, a as $$Footer } from '../assets/Footer.WjzTwqKo.js';
import { $ as $$ImageOptimized } from '../assets/ImageOptimized.BHpdBgJX.js';
import { $ as $$BreadcrumbNav } from '../assets/BreadcrumbNav.umEPYkbh.js';
import { $ as $$InternalLinkModule } from '../assets/InternalLinkModule.i2bvXFln.js';
import { $ as $$MarkdownRenderer } from '../assets/MarkdownRenderer.DssP-rX_.js';
import 'clsx';
/* empty css                                 */
import { getAllBlogPosts, getAllApps, getRelatedApps } from '../assets/supabase.Y_3SlIME.js';

const $$Astro$5 = createAstro();
const $$DynamicFAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DynamicFAQ;
  const { app } = Astro2.props;
  function generateDynamicFAQ(app2) {
    const faqs = [];
    faqs.push({
      question: `Is this ${app2.name} safe to use?`,
      answer: `Yes, our ${app2.name} is thoroughly tested and scanned for malware. It's completely safe to install and use on your Android device.`
    });
    faqs.push({
      question: "Do I need to root my device?",
      answer: `No, this ${app2.name} works on both rooted and non-rooted devices. No root access is required for installation or usage.`
    });
    if (app2.category === "Games") {
      faqs.push({
        question: `Will I get unlimited resources?`,
        answer: `Yes, this version of ${app2.name} provides unlimited coins, gems, and other in-game resources to enhance your gaming experience.`
      });
      faqs.push({
        question: `Are all levels unlocked?`,
        answer: `Absolutely! All levels, characters, and premium content are unlocked from the start in this ${app2.name}.`
      });
    }
    if (app2.category === "Music" || app2.category === "Video" || app2.category === "Entertainment") {
      faqs.push({
        question: `Is the premium subscription included?`,
        answer: `Yes, this ${app2.name} includes all premium subscription features unlocked, giving you access to ad-free content and exclusive features.`
      });
      faqs.push({
        question: `Can I download content for offline viewing?`,
        answer: `Yes, this version allows you to download and save content for offline access, even without a premium subscription.`
      });
    }
    if (app2.category === "Productivity" || app2.category === "Photography") {
      faqs.push({
        question: `Are all premium features unlocked?`,
        answer: `Yes, all premium tools, filters, and advanced features are unlocked in this ${app2.name} without any subscription required.`
      });
      faqs.push({
        question: `Will there be watermarks on my work?`,
        answer: `No, this version removes all watermarks, allowing you to create and export professional content without any branding.`
      });
    }
    if (app2.category === "Social") {
      faqs.push({
        question: `Can I access premium features for free?`,
        answer: `Yes, this ${app2.name} unlocks all premium social features, enhanced privacy options, and advanced customization tools.`
      });
    }
    faqs.push({
      question: `Will I receive automatic updates?`,
      answer: `You'll need to manually download and install updates from our website when new versions of ${app2.name} are available.`
    });
    faqs.push({
      question: `What's new in version ${app2.version}?`,
      answer: `Version ${app2.version} includes enhanced performance, improved stability, bug fixes, and new premium features. Check the changelog above for detailed information.`
    });
    if (parseInt(app2.size) > 100) {
      faqs.push({
        question: `Why is the file size large?`,
        answer: `The ${app2.size} size includes all premium features, high-quality assets, and additional content that's normally downloaded separately in the original version.`
      });
    }
    faqs.push({
      question: `Is my device compatible with ${app2.name}?`,
      answer: `This app requires ${app2.requirements}. Most modern Android devices should be compatible with this version.`
    });
    return faqs;
  }
  const dynamicFAQs = generateDynamicFAQ(app);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700" data-astro-cid-sap5l3js> <div class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center" data-astro-cid-sap5l3js> <svg class="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sap5l3js> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-sap5l3js></path> </svg>
Frequently Asked Questions
</div> <div class="space-y-6" data-astro-cid-sap5l3js> ${dynamicFAQs.map((faq, index) => renderTemplate`<details class="group border-l-4 border-blue-500 pl-4 transition-all duration-200 hover:border-blue-600" data-astro-cid-sap5l3js> <summary class="cursor-pointer font-semibold text-gray-900 dark:text-white mb-2 flex items-center justify-between group-open:text-blue-600 dark:group-open:text-blue-400 transition-colors duration-200" data-astro-cid-sap5l3js> <span data-astro-cid-sap5l3js>${faq.question}</span> <svg class="w-5 h-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sap5l3js> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-sap5l3js></path> </svg> </summary> <div class="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed" data-astro-cid-sap5l3js> ${faq.answer} </div> </details>`)} </div> </div> `;
}, "/home/project/src/components/DynamicFAQ.astro", void 0);

const $$Astro$4 = createAstro();
const $$BlogsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogsSection;
  const {
    maxBlogs = 6,
    showHeading = true,
    headingText = "Recent Blog Posts",
    currentSlug = ""
  } = Astro2.props;
  let recentBlogs = [];
  try {
    const allBlogs = await getAllBlogPosts();
    recentBlogs = allBlogs.sort((a, b) => new Date(b.published_date || b.created_at) - new Date(a.published_date || a.created_at)).slice(0, maxBlogs);
  } catch (error) {
    console.error("Error loading recent blogs:", error);
    recentBlogs = [];
  }
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  return renderTemplate`${recentBlogs.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-qbywmxa5>${showHeading && renderTemplate`<div class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center" data-astro-cid-qbywmxa5><svg class="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qbywmxa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-qbywmxa5></path></svg>${headingText}</div>`}<div class="space-y-4" data-astro-cid-qbywmxa5>${recentBlogs.map((blog, index) => renderTemplate`<article class="group" data-astro-cid-qbywmxa5><a${addAttribute(`/blog/${blog.slug}`, "href")} class="flex items-start p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-qbywmxa5><!-- Blog Thumbnail --><div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden" data-astro-cid-qbywmxa5>${blog.thumbnail_image ? renderTemplate`${renderComponent($$result, "ImageOptimized", $$ImageOptimized, { "src": blog.thumbnail_image, "alt": blog.title, "class": "w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300", "loading": "lazy", "width": 64, "height": 64, "isOffScreen": index > 2, "data-astro-cid-qbywmxa5": true })}` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center" data-astro-cid-qbywmxa5><svg class="w-8 h-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qbywmxa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-qbywmxa5></path></svg></div>`}</div><!-- Blog Content --><div class="flex-1 min-w-0" data-astro-cid-qbywmxa5><div class="flex items-center gap-2 mb-1" data-astro-cid-qbywmxa5><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" data-astro-cid-qbywmxa5>${blog.category}</span>${blog.is_featured && renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" data-astro-cid-qbywmxa5>
Featured
</span>`}${index < 3 && renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" data-astro-cid-qbywmxa5>
New
</span>`}</div><p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1 leading-tight" data-astro-cid-qbywmxa5>${blog.title}</p><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-gray-500 dark:text-gray-400" data-astro-cid-qbywmxa5><div class="flex items-center gap-2 min-w-0" data-astro-cid-qbywmxa5><time${addAttribute(blog.published_date, "datetime")} data-astro-cid-qbywmxa5>${formatDate(blog.published_date)}</time><span data-astro-cid-qbywmxa5>•</span><span class="whitespace-nowrap" data-astro-cid-qbywmxa5>${blog.reading_time || calculateReadingTime(blog.content)} min read</span></div><span class="text-xs text-gray-400 dark:text-gray-500 truncate" data-astro-cid-qbywmxa5>By ${blog.author}</span></div>${blog.excerpt && renderTemplate`<p class="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed" data-astro-cid-qbywmxa5>${blog.excerpt}</p>`}</div><!-- Arrow Icon --><svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qbywmxa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-qbywmxa5></path></svg></a></article>`)}<!-- View All Blogs Link --><div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-qbywmxa5><a href="/blog" class="flex items-center justify-center w-full p-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors duration-200" data-astro-cid-qbywmxa5><svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qbywmxa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-qbywmxa5></path></svg>
View All Blog Posts
<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qbywmxa5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-qbywmxa5></path></svg></a></div></div></div>`}`;
}, "/home/project/src/components/BlogsSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$NewPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NewPosts;
  const {
    maxApps = 5,
    showHeading = true,
    headingText = "New Posts",
    currentSlug = ""
  } = Astro2.props;
  let latestApps = [];
  try {
    const allApps = await getAllApps();
    latestApps = allApps.filter((app) => app.slug !== currentSlug).sort((a, b) => new Date(b.created_at || b.updated_at) - new Date(a.created_at || a.updated_at)).slice(0, maxApps);
  } catch (error) {
    console.error("Error loading latest apps:", error);
    latestApps = [];
  }
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  function getTimeAgo(dateString) {
    const now = /* @__PURE__ */ new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1e3 * 60 * 60));
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  }
  return renderTemplate`${latestApps.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-zn7t3edv>${showHeading && renderTemplate`<div class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center" data-astro-cid-zn7t3edv><svg class="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zn7t3edv><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-zn7t3edv></path></svg>${headingText}</div>`}<div class="space-y-4" data-astro-cid-zn7t3edv>${latestApps.map((app, index) => renderTemplate`<article class="group" data-astro-cid-zn7t3edv><a${addAttribute(`/${app.slug}`, "href")} class="flex items-start p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-zn7t3edv><!-- App Icon --><div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden" data-astro-cid-zn7t3edv>${app.icon ? renderTemplate`${renderComponent($$result, "ImageOptimized", $$ImageOptimized, { "src": app.icon, "alt": `${app.name} icon`, "class": "w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300", "loading": "lazy", "width": 64, "height": 64, "isOffScreen": index > 2, "data-astro-cid-zn7t3edv": true })}` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center" data-astro-cid-zn7t3edv><svg class="w-8 h-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zn7t3edv><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-zn7t3edv></path></svg></div>`}</div><!-- App Content --><div class="flex-1 min-w-0" data-astro-cid-zn7t3edv><div class="flex items-center gap-2 mb-1" data-astro-cid-zn7t3edv><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" data-astro-cid-zn7t3edv>${app.category}</span>${app.is_featured && renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" data-astro-cid-zn7t3edv>
Featured
</span>`}${index < 3 && renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" data-astro-cid-zn7t3edv>
New
</span>`}</div><p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200 mb-1 leading-tight" data-astro-cid-zn7t3edv>${app.name} v${app.version}</p><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-gray-500 dark:text-gray-400" data-astro-cid-zn7t3edv><div class="flex items-center gap-2 min-w-0" data-astro-cid-zn7t3edv><time${addAttribute(app.created_at || app.updated_at, "datetime")} data-astro-cid-zn7t3edv>${getTimeAgo(app.created_at || app.updated_at)}</time><span data-astro-cid-zn7t3edv>•</span><div class="flex items-center gap-1" data-astro-cid-zn7t3edv><svg class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-zn7t3edv><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-zn7t3edv></path></svg><span class="whitespace-nowrap" data-astro-cid-zn7t3edv>${app.rating}</span></div></div><span class="text-xs text-gray-400 dark:text-gray-500 truncate" data-astro-cid-zn7t3edv>${app.size}</span></div>${app.description && renderTemplate`<p class="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed" data-astro-cid-zn7t3edv>${app.description.substring(0, 80)}...
</p>`}</div><!-- Arrow Icon --><svg class="w-4 h-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zn7t3edv><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-zn7t3edv></path></svg></a></article>`)}<!-- View All Apps Link --><div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-zn7t3edv><a href="/apps" class="flex items-center justify-center w-full p-3 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl transition-colors duration-200" data-astro-cid-zn7t3edv><svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zn7t3edv><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-zn7t3edv></path></svg>
View All Latest Apps
<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zn7t3edv><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-zn7t3edv></path></svg></a></div></div></div>`}`;
}, "/home/project/src/components/NewPosts.astro", void 0);

const $$Astro$2 = createAstro();
const $$TopCategories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TopCategories;
  const {
    maxCategories = 6,
    showHeading = true,
    headingText = "Top Categories",
    currentCategory = ""
  } = Astro2.props;
  let categoryStats = {};
  try {
    const allApps = await getAllApps();
    allApps.forEach((app) => {
      if (!categoryStats[app.category]) {
        categoryStats[app.category] = {
          name: app.category,
          count: 0,
          totalRating: 0,
          totalVotes: 0,
          apps: []
        };
      }
      categoryStats[app.category].count++;
      categoryStats[app.category].totalRating += app.rating;
      categoryStats[app.category].totalVotes += app.votes;
      categoryStats[app.category].apps.push(app);
    });
    Object.keys(categoryStats).forEach((category) => {
      const stats = categoryStats[category];
      stats.averageRating = stats.totalRating / stats.count;
      stats.popularityScore = stats.averageRating * stats.totalVotes + stats.count * 10;
    });
  } catch (error) {
    console.error("Error loading apps for category stats:", error);
    categoryStats = {};
  }
  const topCategories = Object.values(categoryStats).filter((category) => category.name !== currentCategory).sort((a, b) => b.popularityScore - a.popularityScore).slice(0, maxCategories);
  const categoryMeta = {
    "Productivity": {
      description: "Boost your efficiency with powerful productivity apps",
      gradient: "from-gray-500 to-gray-700",
      icon: "productivity",
      color: "text-gray-600 dark:text-gray-400"
    },
    "Music": {
      description: "Premium music streaming and audio editing apps",
      gradient: "from-purple-500 to-pink-600",
      icon: "music",
      color: "text-purple-600 dark:text-purple-400"
    },
    "Video": {
      description: "Professional video editing and streaming apps",
      gradient: "from-red-500 to-orange-600",
      icon: "video",
      color: "text-red-600 dark:text-red-400"
    },
    "Entertainment": {
      description: "Movies, TV shows, and entertainment content",
      gradient: "from-indigo-500 to-purple-600",
      icon: "entertainment",
      color: "text-indigo-600 dark:text-indigo-400"
    },
    "Social": {
      description: "Connect and share with social networking apps",
      gradient: "from-blue-500 to-cyan-600",
      icon: "social",
      color: "text-blue-600 dark:text-blue-400"
    },
    "Photography": {
      description: "Professional photo editing and camera apps",
      gradient: "from-teal-500 to-green-600",
      icon: "photography",
      color: "text-teal-600 dark:text-teal-400"
    },
    "Games": {
      description: "Unlimited resources and unlocked game features",
      gradient: "from-green-500 to-blue-600",
      icon: "games",
      color: "text-green-600 dark:text-green-400"
    },
    "Media": {
      description: "Media players and content management apps",
      gradient: "from-orange-500 to-red-600",
      icon: "media",
      color: "text-orange-600 dark:text-orange-400"
    },
    "Apps": {
      description: "General utility and lifestyle applications",
      gradient: "from-blue-500 to-purple-600",
      icon: "apps",
      color: "text-blue-600 dark:text-blue-400"
    }
  };
  function getCategorySlug(categoryName) {
    return categoryName.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  return renderTemplate`${topCategories.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-3moems3o>${showHeading && renderTemplate`<div class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center" data-astro-cid-3moems3o><svg class="w-5 h-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3moems3o><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-3moems3o></path></svg>${headingText}</div>`}<div class="space-y-3" data-astro-cid-3moems3o>${topCategories.map((category, index) => {
    const meta = categoryMeta[category.name] || categoryMeta["Apps"];
    const categorySlug = getCategorySlug(category.name);
    return renderTemplate`<article class="group" data-astro-cid-3moems3o><a${addAttribute(`/categories/${categorySlug}`, "href")} class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-100 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600" data-astro-cid-3moems3o><!-- Category Icon --><div${addAttribute(`w-12 h-12 bg-gradient-to-r ${meta.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`, "class")} data-astro-cid-3moems3o><svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3moems3o>${meta.icon === "productivity" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4a2 2 0 002 2h2a2 2 0 002-2v-4m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v0" data-astro-cid-3moems3o></path>`}${meta.icon === "music" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" data-astro-cid-3moems3o></path>`}${meta.icon === "video" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-3moems3o></path>`}${meta.icon === "entertainment" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3" data-astro-cid-3moems3o></path>`}${meta.icon === "social" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-3moems3o></path>`}${meta.icon === "photography" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-astro-cid-3moems3o></path>`}${meta.icon === "games" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" data-astro-cid-3moems3o></path>`}${(meta.icon === "media" || meta.icon === "apps") && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-3moems3o></path>`}</svg></div><!-- Category Content --><div class="flex-1 min-w-0" data-astro-cid-3moems3o><div class="flex items-center justify-between mb-2" data-astro-cid-3moems3o><h3 class="text-base font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 truncate" data-astro-cid-3moems3o>${category.name}</h3><span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2.5 py-1 rounded-full flex-shrink-0 ml-3" data-astro-cid-3moems3o>
#${index + 1}</span></div><div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2" data-astro-cid-3moems3o><div class="flex items-center gap-2" data-astro-cid-3moems3o><span class="truncate" data-astro-cid-3moems3o>${category.count} apps</span><span data-astro-cid-3moems3o>•</span><div class="flex items-center gap-1" data-astro-cid-3moems3o><svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-3moems3o><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-3moems3o></path></svg><span class="text-sm font-medium" data-astro-cid-3moems3o>${category.averageRating}</span></div></div></div><p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed" data-astro-cid-3moems3o>${meta.description}</p></div><!-- Arrow Icon --><svg class="w-5 h-5 text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3moems3o><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-3moems3o></path></svg></a></article>`;
  })}<!-- View All Categories Link --><div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-3moems3o><a href="/categories" class="flex items-center justify-center w-full p-3 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl transition-colors duration-200" data-astro-cid-3moems3o><svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3moems3o><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-3moems3o></path></svg>
View All Categories
<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3moems3o><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-3moems3o></path></svg></a></div></div></div>`}`;
}, "/home/project/src/components/TopCategories.astro", void 0);

const $$Astro$1 = createAstro();
const $$TopPublishers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TopPublishers;
  const {
    maxPublishers = 6,
    showHeading = true,
    headingText = "Top Publishers",
    currentPublisher = ""
  } = Astro2.props;
  let publisherStats = {};
  try {
    const allApps = await getAllApps();
    allApps.forEach((app) => {
      if (!publisherStats[app.publisher]) {
        publisherStats[app.publisher] = {
          name: app.publisher,
          count: 0,
          totalRating: 0,
          totalVotes: 0,
          apps: []
        };
      }
      publisherStats[app.publisher].count++;
      publisherStats[app.publisher].totalRating += app.rating;
      publisherStats[app.publisher].totalVotes += app.votes;
      publisherStats[app.publisher].apps.push(app);
    });
    Object.keys(publisherStats).forEach((publisher) => {
      const stats = publisherStats[publisher];
      stats.averageRating = stats.totalRating / stats.count;
      stats.popularityScore = stats.averageRating * stats.totalVotes + stats.count * 10;
    });
  } catch (error) {
    console.error("Error loading apps for publisher stats:", error);
    publisherStats = {};
  }
  const topPublishers = Object.values(publisherStats).filter((publisher) => publisher.name !== currentPublisher && publisher.name !== "Unknown").sort((a, b) => b.popularityScore - a.popularityScore).slice(0, maxPublishers);
  function getPublisherSlug(publisherName) {
    return publisherName.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function getPublisherInitials(publisherName) {
    return publisherName.split(" ").map((word) => word.charAt(0)).join("").substring(0, 2).toUpperCase();
  }
  function getPublisherColor(publisherName) {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-green-500 to-green-600",
      "from-red-500 to-red-600",
      "from-yellow-500 to-yellow-600",
      "from-pink-500 to-pink-600",
      "from-indigo-500 to-indigo-600",
      "from-teal-500 to-teal-600",
      "from-orange-500 to-orange-600",
      "from-cyan-500 to-cyan-600"
    ];
    const hash = publisherName.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  }
  return renderTemplate`${topPublishers.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-kqdpjscr>${showHeading && renderTemplate`<div class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center" data-astro-cid-kqdpjscr><svg class="w-5 h-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kqdpjscr><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-kqdpjscr></path></svg>${headingText}</div>`}<div class="space-y-3" data-astro-cid-kqdpjscr>${topPublishers.map((publisher, index) => {
    const publisherSlug = getPublisherSlug(publisher.name);
    const publisherInitials = getPublisherInitials(publisher.name);
    const publisherColor = getPublisherColor(publisher.name);
    return renderTemplate`<article class="group" data-astro-cid-kqdpjscr><a${addAttribute(`/publisher/${publisherSlug}`, "href")} class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600" data-astro-cid-kqdpjscr><!-- Publisher Avatar --><div${addAttribute(`w-12 h-12 bg-gradient-to-r ${publisherColor} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`, "class")} data-astro-cid-kqdpjscr><span class="text-white text-sm font-bold" data-astro-cid-kqdpjscr>${publisherInitials}</span></div><!-- Publisher Content --><div class="flex-1 min-w-0" data-astro-cid-kqdpjscr><div class="flex items-center justify-between mb-2" data-astro-cid-kqdpjscr><h3 class="text-base font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200 truncate" data-astro-cid-kqdpjscr>${publisher.name}</h3><span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2.5 py-1 rounded-full flex-shrink-0 ml-3" data-astro-cid-kqdpjscr>
#${index + 1}</span></div><div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2" data-astro-cid-kqdpjscr><div class="flex items-center gap-2" data-astro-cid-kqdpjscr><span class="truncate" data-astro-cid-kqdpjscr>${publisher.count} apps</span><span data-astro-cid-kqdpjscr>•</span><div class="flex items-center gap-1" data-astro-cid-kqdpjscr><svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kqdpjscr><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-kqdpjscr></path></svg><span class="text-sm font-medium" data-astro-cid-kqdpjscr>${publisher.averageRating.toFixed(1)}</span></div></div></div><p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 leading-relaxed" data-astro-cid-kqdpjscr>${publisher.count > 1 ? `Publisher of ${publisher.count} premium MOD APKs` : "Premium MOD APK publisher"}</p></div><!-- Arrow Icon --><svg class="w-5 h-5 text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kqdpjscr><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-kqdpjscr></path></svg></a></article>`;
  })}<!-- View All Publishers Link --><div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-kqdpjscr><a href="/publisher" class="flex items-center justify-center w-full p-3 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl transition-colors duration-200" data-astro-cid-kqdpjscr><svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kqdpjscr><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-kqdpjscr></path></svg>
View All Publishers
<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kqdpjscr><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-kqdpjscr></path></svg></a></div></div></div>`}`;
}, "/home/project/src/components/TopPublishers.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  try {
    const apps = await getAllApps();
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
  async function getTrendingApps(limit = 6) {
    try {
      const allApps = await getAllApps();
      const trendingApps2 = allApps.map((app2) => ({
        ...app2,
        trendingScore: app2.rating * app2.votes + (app2.is_featured ? 1e3 : 0)
      })).sort((a, b) => b.trendingScore - a.trendingScore).slice(0, limit);
      return trendingApps2;
    } catch (error) {
      console.error("Error loading trending apps:", error);
      return [];
    }
  }
  const { slug } = Astro2.params;
  const { app } = Astro2.props;
  if (!app) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  let relatedApps = [];
  try {
    relatedApps = await getRelatedApps(app.slug, app.category, 4);
  } catch (error) {
    console.error("Error loading related apps:", error);
  }
  let trendingApps = [];
  try {
    trendingApps = await getTrendingApps(6);
    trendingApps = trendingApps.filter((trendingApp) => trendingApp.slug !== app.slug);
    trendingApps = trendingApps.slice(0, 6);
  } catch (error) {
    console.error("Error loading trending apps:", error);
  }
  const seoTitle = app.seo_title || `${app.name} v${app.version} MOD APK - Premium Features Unlocked`;
  const seoDescription = app.seo_description || `Download ${app.name} MOD APK v${app.version} with premium features unlocked. ${app.description.substring(0, 100)}...`;
  const seoKeywords = app.seo_keywords || `${app.name.toLowerCase()}, ${app.category.toLowerCase()}, mod apk, premium unlocked, android app, free download`;
  const seoFeaturedImage = app.seo_featured_image || app.icon || "/favicon.svg";
  const canonicalUrl = app.seo_canonical_url || `https://dexapk.com/${app.slug}`;
  const seoData = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    canonicalUrl,
    featuredImage: seoFeaturedImage,
    appName: app.name,
    appVersion: app.version,
    appCategory: app.category,
    appRating: app.rating,
    appVotes: app.votes,
    appPublisher: app.publisher,
    appSize: app.size,
    lastUpdated: app.last_updated,
    type: "product"
  };
  const defaultArticleContent = `# Introduction

${app.description}

The main objective of this exceptional application package (APK) is to enhance the quality of your experience with ${app.name}. One possible solution could be to enable individuals to establish unique and captivating interactions with their favorite apps, thereby unlocking unexplored opportunities.

You can be reassured that it incorporates supplementary characteristics that will enhance your overall user experience. The ${app.name} MOD APK provides users with premium features that are typically locked behind a paywall in the official version.

## Key Features

${app.features && app.features.length > 0 ? app.features.map((feature) => `- ${feature}`).join("\n") : "- Premium features unlocked\n- Enhanced user experience\n- No limitations"}

## What's New in v${app.version}

- Enhanced performance and stability
- Improved user interface
- Bug fixes and optimizations
- New premium features added
- Better compatibility with latest Android versions

## Installation Guide

1. **Download the APK** - Click the download button above to get the ${app.name} MOD APK file.
2. **Enable Unknown Sources** - Go to Settings > Security > Unknown Sources and enable it.
3. **Install the APK** - Locate the downloaded file and tap to install.
4. **Enjoy Premium Features** - Open the app and enjoy all premium features unlocked!

## Conclusion

${app.name} MOD APK offers an exceptional experience with all premium features unlocked for free. Whether you're looking for enhanced functionality, ad-free experience, or premium content access, this app provides everything you need without any limitations. Download now and experience the full potential of ${app.name} on your Android device.`;
  const articleContent = app.article_content || defaultArticleContent;
  const dynamicFAQs = app ? [
    {
      question: `What is ${app.name} MOD APK?`,
      answer: `${app.name} MOD APK is a modified version of the original ${app.name} app that provides premium features unlocked for free. It offers enhanced functionality and removes limitations present in the standard version.`
    },
    {
      question: `Is ${app.name} MOD APK safe to download?`,
      answer: `Yes, our ${app.name} MOD APK is thoroughly tested and scanned for malware. We ensure all our APK files are safe and secure for download and installation.`
    },
    {
      question: `How do I install ${app.name} MOD APK?`,
      answer: `To install ${app.name} MOD APK, first enable "Unknown Sources" in your Android settings, then download the APK file and tap to install it on your device.`
    },
    {
      question: `What are the system requirements for ${app.name}?`,
      answer: `${app.name} requires ${app.requirements} to run properly on your Android device.`
    },
    {
      question: `Can I update ${app.name} MOD APK?`,
      answer: `You can update ${app.name} MOD APK by downloading the latest version from our website. Make sure to uninstall the previous version before installing the new one.`
    }
  ] : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seoData": seoData, "data-astro-cid-yvbahnfj": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-yvbahnfj": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 dark:bg-gray-900" data-astro-cid-yvbahnfj> <!-- AMP Version Link --> <link rel="amphtml"${addAttribute(`/${app.slug}/amp`, "href")}> <!-- Enhanced Breadcrumbs with Schema.org markup --> <div class="breadcrumb-wrapper" data-astro-cid-yvbahnfj> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": [
    { label: "Home", href: "/" },
    { label: "Apps", href: "/apps" },
    { label: app.category, href: `/categories/${app.category.toLowerCase()}` },
    { label: app.name, href: `/${app.slug}`, current: true }
  ], "data-astro-cid-yvbahnfj": true })} </div> <!-- App Header --> <section class="bg-white dark:bg-gray-800 py-8 sm:py-12" data-astro-cid-yvbahnfj> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-yvbahnfj> <div class="text-center" data-astro-cid-yvbahnfj> <!-- App Icon --> <div class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-white dark:bg-gray-700 rounded-3xl shadow-lg flex items-center justify-center overflow-hidden" style="contain: layout paint;" data-astro-cid-yvbahnfj> ${app.icon ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-yvbahnfj": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ImageOptimized", $$ImageOptimized, { "src": app.icon, "alt": `${app.name} icon`, "class": "w-full h-full object-cover rounded-3xl", "width": 128, "height": 128, "loading": "eager", "fetchpriority": "high", "placeholder": "blur", "quality": 90, "data-astro-cid-yvbahnfj": true })} <div class="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 dark:text-gray-500 hidden items-center justify-center" data-astro-cid-yvbahnfj> <svg class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-yvbahnfj></path> </svg> </div> ` })}` : renderTemplate`<svg class="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-yvbahnfj></path> </svg>`} </div> <!-- App Title --> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-yvbahnfj> ${app.custom_h1_title || `${app.name} v${app.version} MOD APK`} </h1> ${app.mod_info && app.mod_info.length > 0 && renderTemplate`<p class="text-xl text-gray-600 dark:text-gray-400 mb-6" data-astro-cid-yvbahnfj> ${app.mod_info[0]} </p>`} <!-- App Meta --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8" data-astro-cid-yvbahnfj> <div class="flex items-center gap-1" data-astro-cid-yvbahnfj> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-yvbahnfj></path> </svg> <span data-astro-cid-yvbahnfj>v${app.version}</span> </div> <div class="flex items-center gap-1" data-astro-cid-yvbahnfj> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-astro-cid-yvbahnfj></path> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-astro-cid-yvbahnfj></path> </svg> <span data-astro-cid-yvbahnfj>${app.last_updated}</span> </div> </div> <!-- Rating --> <div class="flex items-center justify-center mb-8" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> ${[1, 2, 3, 4, 5].map((star) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${star <= Math.floor(app.rating) ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-yvbahnfj></path> </svg>`)} </div> <span class="ml-3 text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-yvbahnfj> ${app.rating} (${app.votes.toLocaleString()} votes)
</span> </div> <!-- Download Button --> ${app.disable_download_page ? renderTemplate`<a${addAttribute(app.download_url || "#", "href")} id="download-button" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"${addAttribute(`Download ${app.name} v${app.version} MOD APK directly`, "aria-label")} data-astro-cid-yvbahnfj> <svg class="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-yvbahnfj></path> </svg>
Download Now
<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-yvbahnfj></path> </svg> </a>` : renderTemplate`<a${addAttribute(`/${app.slug}/download`, "href")} id="download-button" class="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"${addAttribute(`Download ${app.name} v${app.version} MOD APK`, "aria-label")} data-astro-cid-yvbahnfj> <svg class="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" data-astro-cid-yvbahnfj></path> </svg>
Download
</a>`} </div> </div> </section> <!-- App Details --> <section class="py-8 sm:py-12" data-astro-cid-yvbahnfj> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-yvbahnfj> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-yvbahnfj> <!-- Main Content --> <div class="lg:col-span-2 space-y-8" data-astro-cid-yvbahnfj> <!-- App Info Cards --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-yvbahnfj> <!-- Version --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4" data-astro-cid-yvbahnfj> <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-yvbahnfj></path> </svg> </div> <div data-astro-cid-yvbahnfj> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-yvbahnfj>Version</p> <p class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-yvbahnfj>v${app.version}</p> </div> </div> </div> <!-- Last Updated --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mr-4" data-astro-cid-yvbahnfj> <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-yvbahnfj></path> </svg> </div> <div data-astro-cid-yvbahnfj> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-yvbahnfj>Last Updated</p> <p class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-yvbahnfj>${app.last_updated}</p> </div> </div> </div> <!-- Publisher --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mr-4" data-astro-cid-yvbahnfj> <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-yvbahnfj></path> </svg> </div> <div data-astro-cid-yvbahnfj> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-yvbahnfj>Publisher</p> <a${addAttribute(`/publisher/${app.publisher.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, "href")} class="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200" data-astro-cid-yvbahnfj> ${app.publisher} </a> </div> </div> </div> <!-- Requirements --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mr-4" data-astro-cid-yvbahnfj> <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-yvbahnfj></path> </svg> </div> <div data-astro-cid-yvbahnfj> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-yvbahnfj>Requirements</p> <p class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-yvbahnfj>${app.requirements}</p> </div> </div> </div> <!-- Category --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-4" data-astro-cid-yvbahnfj> <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-yvbahnfj></path> </svg> </div> <div data-astro-cid-yvbahnfj> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-yvbahnfj>Category</p> <a${addAttribute(`/categories/${app.category.toLowerCase()}`, "href")} class="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200" data-astro-cid-yvbahnfj> ${app.category} </a> </div> </div> </div> <!-- Size --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4" data-astro-cid-yvbahnfj> <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" data-astro-cid-yvbahnfj></path> </svg> </div> <div data-astro-cid-yvbahnfj> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-yvbahnfj>Size</p> <p class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-yvbahnfj>${app.size}</p> </div> </div> </div> </div> <!-- Screenshots --> ${app.screenshots && app.screenshots.length > 0 && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="text-2xl font-bold text-gray-900 dark:text-white mb-6" id="screenshots" data-astro-cid-yvbahnfj>Screenshots</div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-4" data-astro-cid-yvbahnfj> ${app.screenshots.map((screenshot, index) => renderTemplate`<div class="aspect-[9/16] bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden" data-astro-cid-yvbahnfj> ${renderComponent($$result2, "ImageOptimized", $$ImageOptimized, { "src": screenshot, "alt": `${app.name} screenshot ${index + 1}`, "class": "w-full h-full object-cover hover:scale-105 transition-transform duration-300", "loading": "lazy", "width": 300, "height": 533, "placeholder": "dominant-color", "quality": 85, "isOffScreen": true, "isOffScreen": false, "data-astro-cid-yvbahnfj": true })} </div>`)} </div> </div>`} <!-- MOD Info --> ${app.mod_info && app.mod_info.length > 0 && renderTemplate`<details class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden" data-astro-cid-yvbahnfj> <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-yvbahnfj> <div class="flex items-center" data-astro-cid-yvbahnfj> <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-3" data-astro-cid-yvbahnfj> <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-astro-cid-yvbahnfj></path> </svg> </div> <div class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-yvbahnfj>MOD Info?</div> </div> <svg class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-yvbahnfj></path> </svg> </summary> <div class="px-6 pb-6" data-astro-cid-yvbahnfj> <ul class="space-y-2" data-astro-cid-yvbahnfj> ${app.mod_info.map((info) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-yvbahnfj> <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-yvbahnfj></path> </svg> ${info} </li>`)} </ul> </div> </details>`} <!-- Article Content --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> ${renderComponent($$result2, "MarkdownRenderer", $$MarkdownRenderer, { "content": articleContent, "generateToc": true, "data-astro-cid-yvbahnfj": true })} <!-- Internal linking module --> ${renderComponent($$result2, "InternalLinkModule", $$InternalLinkModule, { "currentSlug": app.slug, "currentCategory": app.category, "maxLinks": 5, "headingText": "Similar Apps You Might Like", "data-astro-cid-yvbahnfj": true })} </div> <!-- Dynamic FAQ --> ${renderComponent($$result2, "DynamicFAQ", $$DynamicFAQ, { "app": app, "data-astro-cid-yvbahnfj": true })} </div> <!-- Sidebar --> <div class="lg:col-span-1" data-astro-cid-yvbahnfj> <div class="sticky top-8 space-y-6" data-astro-cid-yvbahnfj> <!-- Related Apps --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-astro-cid-yvbahnfj>Related Posts</div> ${relatedApps.length > 0 ? renderTemplate`<div class="space-y-4" data-astro-cid-yvbahnfj> ${relatedApps.map((relatedApp) => renderTemplate`<a${addAttribute(`/${relatedApp.slug}`, "href")} class="flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 flex-shrink-0" data-astro-cid-yvbahnfj> ${relatedApp.icon ? renderTemplate`<img${addAttribute(relatedApp.icon, "src")}${addAttribute(relatedApp.name, "alt")} class="w-full h-full object-cover rounded-xl" data-astro-cid-yvbahnfj>` : renderTemplate`<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-yvbahnfj></path> </svg>`} </div> <div class="flex-1 min-w-0" data-astro-cid-yvbahnfj> <p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-astro-cid-yvbahnfj>${relatedApp.name}</p> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-yvbahnfj>${relatedApp.category}</p> </div> </a>`)} <!-- Additional internal links for SEO --> <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl" data-astro-cid-yvbahnfj> <div class="text-sm font-medium text-gray-900 dark:text-white mb-2" data-astro-cid-yvbahnfj>Popular Categories</div> <div class="flex flex-wrap gap-2" data-astro-cid-yvbahnfj> ${["Games", "Productivity", "Music", "Social", "Photography"].map((cat) => renderTemplate`<a${addAttribute(`/categories/${cat.toLowerCase()}`, "href")} class="text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full" data-astro-cid-yvbahnfj>${cat} Apps</a>`)} </div> </div> </div>` : renderTemplate`<p class="text-gray-500 dark:text-gray-400 text-center py-4" data-astro-cid-yvbahnfj>No related apps found</p>`} </div> <!-- Trending Apps --> ${trendingApps.length > 0 && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <div class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center" data-astro-cid-yvbahnfj> <svg class="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-yvbahnfj></path> </svg>
Trending Apps
</div> <div class="space-y-3" data-astro-cid-yvbahnfj> ${trendingApps.map((trendingApp, index) => renderTemplate`<a${addAttribute(`/${trendingApp.slug}`, "href")} class="flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group" data-astro-cid-yvbahnfj> <div class="relative mr-3 flex-shrink-0" data-astro-cid-yvbahnfj> <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center" data-astro-cid-yvbahnfj> ${trendingApp.icon ? renderTemplate`<img${addAttribute(trendingApp.icon, "src")}${addAttribute(trendingApp.name, "alt")} class="w-full h-full object-cover rounded-xl" data-astro-cid-yvbahnfj>` : renderTemplate`<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-yvbahnfj></path> </svg>`} </div> <!-- Trending Position Badge --> <div${addAttribute(`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : index === 2 ? "bg-orange-600" : "bg-red-500"}`, "class")} data-astro-cid-yvbahnfj> ${index + 1} </div> </div> <div class="flex-1 min-w-0" data-astro-cid-yvbahnfj> <p class="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200" data-astro-cid-yvbahnfj></p><p class="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200" data-astro-cid-yvbahnfj> ${trendingApp.name} </p> <div class="flex items-center justify-between" data-astro-cid-yvbahnfj> <p class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-yvbahnfj>${trendingApp.category}</p> <div class="flex items-center gap-1" data-astro-cid-yvbahnfj> <svg class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-yvbahnfj></path> </svg> <span class="text-xs font-medium" data-astro-cid-yvbahnfj>${trendingApp.rating}</span> </div> </div> </div> <svg class="w-4 h-4 text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-yvbahnfj></path> </svg> </a>`)} <!-- View All Trending Link --> <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-yvbahnfj> <a href="/trending" class="flex items-center justify-center w-full p-3 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors duration-200" data-astro-cid-yvbahnfj> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yvbahnfj> <path d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-yvbahnfj></path> </svg>
View All Trending Apps
<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yvbahnfj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-yvbahnfj></path> </svg> </a> </div> </div> </div>`} <!-- Recent Blog Posts --> ${renderComponent($$result2, "BlogsSection", $$BlogsSection, { "maxBlogs": 6, "headingText": "Recent Articles", "showHeading": true, "data-astro-cid-yvbahnfj": true })} <!-- New Posts Section --> ${renderComponent($$result2, "NewPosts", $$NewPosts, { "maxApps": 5, "headingText": "New Posts", "showHeading": true, "currentSlug": app.slug, "data-astro-cid-yvbahnfj": true })} <!-- Top Categories Section --> ${renderComponent($$result2, "TopCategories", $$TopCategories, { "maxCategories": 6, "headingText": "Top Categories", "showHeading": true, "currentCategory": app.category, "data-astro-cid-yvbahnfj": true })} <!-- Top Publishers Section --> ${renderComponent($$result2, "TopPublishers", $$TopPublishers, { "maxPublishers": 6, "headingText": "Top Publishers", "showHeading": true, "currentPublisher": app.publisher, "data-astro-cid-yvbahnfj": true })} </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-yvbahnfj": true })} `, "head": async ($$result2) => renderTemplate`${app && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template(["  ", "", ' <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> "])), app.icon && renderTemplate`<link rel="preload"${addAttribute(app.icon, "href")} as="image">`, app.screenshots && app.screenshots[0] && renderTemplate`<link rel="preload"${addAttribute(app.screenshots[0], "href")} as="image" fetchpriority="high">`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dynamicFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dexapk.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Apps",
        "item": "https://dexapk.com/apps"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": app.category,
        "item": `https://dexapk.com/categories/${app.category.toLowerCase()}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": app.name,
        "item": `https://dexapk.com/${app.slug}`
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "applicationCategory": "MobileApplication",
    "applicationSubCategory": app.category,
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": app.rating,
      "ratingCount": app.votes,
      "bestRating": "5",
      "worstRating": "1"
    },
    "softwareVersion": app.version,
    "fileSize": app.size,
    "datePublished": app.created_at || (/* @__PURE__ */ new Date()).toISOString(),
    "dateModified": app.updated_at || (/* @__PURE__ */ new Date()).toISOString(),
    "description": app.description
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": app.name,
      "applicationCategory": "MobileApplication",
      "operatingSystem": "Android"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": app.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "DexAPK"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DexAPK"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DexAPK",
    "url": "https://dexapk.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dexapk.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }))) })}`}` })} `;
}, "/home/project/src/pages/[slug].astro", void 0);

const $$file = "/home/project/src/pages/[slug].astro";
const $$url = "/[slug]";

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
