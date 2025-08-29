import { c as createComponent, d as createAstro, a as renderTemplate, r as renderComponent, e as addAttribute, u as unescapeHTML, j as renderHead, m as maybeRenderHead } from '../../assets/vendor.DF5xVtK3.js';
export { b as renderers } from '../../assets/vendor.DF5xVtK3.js';
import 'kleur/colors';
import { getRelatedApps, getAllApps } from '../../assets/supabase.Y_3SlIME.js';
/* empty css                                 */

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
const $$Amp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Amp;
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
    relatedApps = await getRelatedApps(app.slug, app.category, 3);
  } catch (error) {
    console.error("Error loading related apps:", error);
  }
  const seoTitle = app.seo_title || `${app.name} v${app.version} MOD APK - Premium Features Unlocked`;
  const seoDescription = app.seo_description || `Download ${app.name} MOD APK v${app.version} with premium features unlocked. ${app.description.substring(0, 100)}...`;
  const canonicalUrl = `https://dexapk.com/${app.slug}`;
  const ampUrl = `https://dexapk.com/${app.slug}/amp`;
  const defaultArticleContent = `# ${app.name} MOD APK

${app.description}

## Key Features

${app.features && app.features.length > 0 ? app.features.map((feature) => `- ${feature}`).join("\n") : "- Premium features unlocked\n- Enhanced user experience\n- No limitations"}

## What's New in v${app.version}

- Enhanced performance and stability
- Improved user interface
- Bug fixes and optimizations
- New premium features added

## Installation Guide

1. Download the APK file
2. Enable Unknown Sources in Settings
3. Install the APK
4. Enjoy premium features

## Conclusion

${app.name} MOD APK offers an exceptional experience with all premium features unlocked for free.`;
  const articleContent = app.article_content || defaultArticleContent;
  function markdownToHtml(markdown) {
    if (!markdown) return "";
    const lines = markdown.split("\n");
    let html = "";
    let inCodeBlock = false;
    let inList = false;
    let listType = "";
    let inTable = false;
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (line.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        if (inCodeBlock) {
          const language = line.slice(3).trim();
          html += `<pre class="code-block"><code class="language-${language}">`;
        } else {
          html += "</code></pre>";
        }
        continue;
      }
      if (inCodeBlock) {
        html += escapeHtml(line) + "\n";
        continue;
      }
      if (line.match(/^---+$/)) {
        html += '<hr class="divider">';
        continue;
      }
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = formatInlineMarkdown(headingMatch[2]);
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        html += `<h${level} id="${id}" class="heading-${level}">${text}</h${level}>`;
        continue;
      }
      if (line.includes("|")) {
        const cells = line.split("|").map((cell) => cell.trim()).filter(Boolean);
        if (cells.length === 0) continue;
        if (cells.length >= 1) {
          const nextLine = lines[i + 1];
          if (!inTable && nextLine && nextLine.includes("|") && nextLine.includes("---")) {
            inTable = true;
            html += '<div class="table-container"><table class="content-table"><thead><tr>';
            cells.forEach((cell) => {
              html += `<th>${formatInlineMarkdown(cell)}</th>`;
            });
            html += "</tr></thead><tbody>";
            i++;
            continue;
          } else if (inTable) {
            html += "<tr>";
            cells.forEach((cell) => {
              html += `<td>${formatInlineMarkdown(cell)}</td>`;
            });
            html += "</tr>";
            continue;
          }
        }
      }
      if (inTable && !line.includes("|")) {
        html += "</tbody></table></div>";
        inTable = false;
      }
      const listMatch = line.match(/^(\s*)([-*+]|\d+\.)\s+(.+)$/);
      if (listMatch) {
        listMatch[1].length;
        const marker = listMatch[2];
        const text = listMatch[3];
        const isOrdered = /^\d+\./.test(marker);
        if (!inList) {
          inList = true;
          listType = isOrdered ? "ol" : "ul";
          html += `<${listType} class="content-list">`;
        }
        html += `<li class="list-item">${formatInlineMarkdown(text)}</li>`;
        continue;
      } else if (inList) {
        inList = false;
        html += `</${listType}>`;
      }
      if (line.startsWith("> ")) {
        html += `<blockquote class="quote">${formatInlineMarkdown(line.slice(2))}</blockquote>`;
        continue;
      }
      if (line.trim()) {
        html += `<p class="paragraph">${formatInlineMarkdown(line)}</p>`;
      } else {
        html += "<br>";
      }
    }
    if (inList) {
      html += `</${listType}>`;
    }
    if (inTable) {
      html += "</tbody></table></div>";
    }
    return html;
  }
  function formatInlineMarkdown(text) {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`(.*?)`/g, "<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(match, text2, url) {
      if (url.startsWith("/") || url.startsWith("#") || url.includes("dexapk.com")) {
        return `<a href="${url}">${text2}</a>`;
      } else {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text2}</a>`;
      }
    }).replace(/~~(.*?)~~/g, "<del>$1</del>");
  }
  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  const htmlContent = markdownToHtml(articleContent);
  return renderTemplate(_a || (_a = __template(['<html \u26A1 lang="en" data-astro-cid-r2f34u3k> <head><meta charset="utf-8"><script async src="https://cdn.ampproject.org/v0.js"><\/script><script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"><\/script><script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"><\/script><script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"><\/script><title>', '</title><meta name="description"', '><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"><!-- Canonical and AMP --><link rel="canonical"', '><link rel="amphtml"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type" content="article"><meta property="og:image"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/png" href="/favicon-96x96.png"><!-- AMP Boilerplate -->', '<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript><!-- External AMP CSS --><link rel="stylesheet" href="/src/assets/amp-styles.css"><!-- Structured Data --><script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "SoftwareApplication",\n      "name": "{app.name}",\n      "applicationCategory": "MobileApplication",\n      "operatingSystem": "Android",\n      "offers": {\n        "@type": "Offer",\n        "price": "0",\n        "priceCurrency": "USD"\n      },\n      "aggregateRating": {\n        "@type": "AggregateRating",\n        "ratingValue": "{app.rating}",\n        "ratingCount": "{app.votes}",\n        "bestRating": "5",\n        "worstRating": "1"\n      },\n      "softwareVersion": "{app.version}",\n      "fileSize": "{app.size}",\n      "description": "{app.description}"\n    }\n  <\/script>', '</head> <body data-astro-cid-r2f34u3k> <!-- Header --> <header class="header" data-astro-cid-r2f34u3k> <div class="header-content" data-astro-cid-r2f34u3k> <a href="/" class="logo" data-astro-cid-r2f34u3k>DexAPK</a> <button class="menu-button" on="tap:sidebar.toggle" aria-label="Open menu" data-astro-cid-r2f34u3k> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <line x1="3" y1="6" x2="21" y2="6" data-astro-cid-r2f34u3k></line> <line x1="3" y1="12" x2="21" y2="12" data-astro-cid-r2f34u3k></line> <line x1="3" y1="18" x2="21" y2="18" data-astro-cid-r2f34u3k></line> </svg> </button> </div> </header> <!-- Breadcrumbs --> <nav class="breadcrumbs" aria-label="Breadcrumb" data-astro-cid-r2f34u3k> <ol class="breadcrumb-list" data-astro-cid-r2f34u3k> <li class="breadcrumb-item" data-astro-cid-r2f34u3k> <a href="/" class="breadcrumb-link" data-astro-cid-r2f34u3k>Home</a> </li> <li class="breadcrumb-separator" data-astro-cid-r2f34u3k>\u203A</li> <li class="breadcrumb-item" data-astro-cid-r2f34u3k> <a href="/apps" class="breadcrumb-link" data-astro-cid-r2f34u3k>Apps</a> </li> <li class="breadcrumb-separator" data-astro-cid-r2f34u3k>\u203A</li> <li class="breadcrumb-item" data-astro-cid-r2f34u3k> <a', ' class="breadcrumb-link" data-astro-cid-r2f34u3k>', '</a> </li> <li class="breadcrumb-separator" data-astro-cid-r2f34u3k>\u203A</li> <li class="breadcrumb-item" data-astro-cid-r2f34u3k> <span class="breadcrumb-current" data-astro-cid-r2f34u3k>', '</span> </li> </ol> </nav> <!-- Main Content --> <main class="main-content" data-astro-cid-r2f34u3k> <!-- App Header --> <section class="app-header" data-astro-cid-r2f34u3k> <div class="app-icon" data-astro-cid-r2f34u3k> ', ' </div> <h1 class="app-title" data-astro-cid-r2f34u3k>', '</h1> <div class="app-meta" data-astro-cid-r2f34u3k> <span data-astro-cid-r2f34u3k>Version: ', "</span> <span data-astro-cid-r2f34u3k>\u2022</span> <span data-astro-cid-r2f34u3k>Updated: ", "</span> <span data-astro-cid-r2f34u3k>\u2022</span> <span data-astro-cid-r2f34u3k>Size: ", '</span> </div> <div class="rating" data-astro-cid-r2f34u3k> <div class="stars" data-astro-cid-r2f34u3k> ', " </div> <span data-astro-cid-r2f34u3k>", " (", " votes)</span> </div> <a", ' class="download-button"', "", ' data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;" data-astro-cid-r2f34u3k> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-r2f34u3k></path> <polyline points="7,10 12,15 17,10" data-astro-cid-r2f34u3k></polyline> <line x1="12" y1="15" x2="12" y2="3" data-astro-cid-r2f34u3k></line> </svg>\nDownload Now\n</a> </section> <!-- Content Grid --> <div class="content-grid" data-astro-cid-r2f34u3k> <!-- Main Content --> <div data-astro-cid-r2f34u3k> <!-- App Info Cards --> <div class="info-cards" data-astro-cid-r2f34u3k> <div class="info-card" data-astro-cid-r2f34u3k> <div class="info-icon version" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" data-astro-cid-r2f34u3k></path> <line x1="7" y1="7" x2="7.01" y2="7" data-astro-cid-r2f34u3k></line> </svg> </div> <div class="info-text" data-astro-cid-r2f34u3k> <div class="info-label" data-astro-cid-r2f34u3k>Version</div> <div class="info-value" data-astro-cid-r2f34u3k>v', '</div> </div> </div> <div class="info-card" data-astro-cid-r2f34u3k> <div class="info-icon updated" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <circle cx="12" cy="12" r="10" data-astro-cid-r2f34u3k></circle> <polyline points="12,6 12,12 16,14" data-astro-cid-r2f34u3k></polyline> </svg> </div> <div class="info-text" data-astro-cid-r2f34u3k> <div class="info-label" data-astro-cid-r2f34u3k>Last Updated</div> <div class="info-value" data-astro-cid-r2f34u3k>', '</div> </div> </div> <div class="info-card" data-astro-cid-r2f34u3k> <div class="info-icon publisher" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-r2f34u3k></path> <circle cx="12" cy="7" r="4" data-astro-cid-r2f34u3k></circle> </svg> </div> <div class="info-text" data-astro-cid-r2f34u3k> <div class="info-label" data-astro-cid-r2f34u3k>Publisher</div> <div class="info-value" data-astro-cid-r2f34u3k>', '</div> </div> </div> <div class="info-card" data-astro-cid-r2f34u3k> <div class="info-icon requirements" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-astro-cid-r2f34u3k></rect> <line x1="8" y1="21" x2="16" y2="21" data-astro-cid-r2f34u3k></line> <line x1="12" y1="17" x2="12" y2="21" data-astro-cid-r2f34u3k></line> </svg> </div> <div class="info-text" data-astro-cid-r2f34u3k> <div class="info-label" data-astro-cid-r2f34u3k>Requirements</div> <div class="info-value" data-astro-cid-r2f34u3k>', '</div> </div> </div> <div class="info-card" data-astro-cid-r2f34u3k> <div class="info-icon category" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-r2f34u3k></rect> <rect x="9" y="9" width="6" height="6" data-astro-cid-r2f34u3k></rect> </svg> </div> <div class="info-text" data-astro-cid-r2f34u3k> <div class="info-label" data-astro-cid-r2f34u3k>Category</div> <div class="info-value" data-astro-cid-r2f34u3k>', '</div> </div> </div> <div class="info-card" data-astro-cid-r2f34u3k> <div class="info-icon size" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <ellipse cx="12" cy="5" rx="9" ry="3" data-astro-cid-r2f34u3k></ellipse> <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" data-astro-cid-r2f34u3k></path> <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" data-astro-cid-r2f34u3k></path> </svg> </div> <div class="info-text" data-astro-cid-r2f34u3k> <div class="info-label" data-astro-cid-r2f34u3k>Size</div> <div class="info-value" data-astro-cid-r2f34u3k>', "</div> </div> </div> </div> <!-- Screenshots --> ", " <!-- MOD Info --> ", ' <!-- Article Content --> <article class="card" data-astro-cid-r2f34u3k> <div class="article-content" data-astro-cid-r2f34u3k>', '</div> </article> <!-- FAQ --> <section class="card" data-astro-cid-r2f34u3k> <h2 class="card-title" data-astro-cid-r2f34u3k>Frequently Asked Questions</h2> ', " </section> </div> <!-- Sidebar Content --> <aside data-astro-cid-r2f34u3k> <!-- Related Apps --> ", ' <!-- Popular Categories --> <section class="card" data-astro-cid-r2f34u3k> <h3 class="card-title" data-astro-cid-r2f34u3k>Popular Categories</h3> <div class="category-links" data-astro-cid-r2f34u3k> <a href="/categories/games" class="category-link" data-astro-cid-r2f34u3k>\u{1F3AE} Games</a> <a href="/categories/productivity" class="category-link" data-astro-cid-r2f34u3k>\u{1F4CA} Productivity</a> <a href="/categories/music" class="category-link" data-astro-cid-r2f34u3k>\u{1F3B5} Music</a> <a href="/categories/social" class="category-link" data-astro-cid-r2f34u3k>\u{1F4F1} Social</a> <a href="/categories/photography" class="category-link" data-astro-cid-r2f34u3k>\u{1F4F8} Photography</a> <a href="/categories/video" class="category-link" data-astro-cid-r2f34u3k>\u{1F3AC} Video</a> </div> </section> </aside> </div> </main> <!-- Footer --> <footer class="footer" data-astro-cid-r2f34u3k> <div class="footer-content" data-astro-cid-r2f34u3k> <div class="footer-section" data-astro-cid-r2f34u3k> <h3 class="footer-title" data-astro-cid-r2f34u3k>DexAPK</h3> <p class="footer-description" data-astro-cid-r2f34u3k>Premium MOD APKs for Android</p> <div class="footer-social" data-astro-cid-r2f34u3k> <a href="https://t.me/dexapk_com" target="_blank" rel="noopener noreferrer" class="social-link" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-r2f34u3k> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.176-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.832z" data-astro-cid-r2f34u3k></path> </svg> </a> <a href="https://www.instagram.com/dexapk" target="_blank" rel="noopener noreferrer" class="social-link" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-r2f34u3k> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-r2f34u3k></path> </svg> </a> <a href="https://youtube.com/@rakeshxofficiall" target="_blank" rel="noopener noreferrer" class="social-link" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-r2f34u3k> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-astro-cid-r2f34u3k></path> </svg> </a> </div> </div> <div class="footer-section" data-astro-cid-r2f34u3k> <h4 class="footer-subtitle" data-astro-cid-r2f34u3k>Quick Links</h4> <nav class="footer-nav" data-astro-cid-r2f34u3k> <a href="/" class="footer-link" data-astro-cid-r2f34u3k>Home</a> <a href="/apps" class="footer-link" data-astro-cid-r2f34u3k>All Apps</a> <a href="/categories" class="footer-link" data-astro-cid-r2f34u3k>Categories</a> <a href="/trending" class="footer-link" data-astro-cid-r2f34u3k>Trending</a> <a href="/blog" class="footer-link" data-astro-cid-r2f34u3k>Blog</a> </nav> </div> <div class="footer-section" data-astro-cid-r2f34u3k> <h4 class="footer-subtitle" data-astro-cid-r2f34u3k>Categories</h4> <nav class="footer-nav" data-astro-cid-r2f34u3k> <a href="/categories/games" class="footer-link" data-astro-cid-r2f34u3k>Games</a> <a href="/categories/productivity" class="footer-link" data-astro-cid-r2f34u3k>Productivity</a> <a href="/categories/music" class="footer-link" data-astro-cid-r2f34u3k>Music</a> <a href="/categories/social" class="footer-link" data-astro-cid-r2f34u3k>Social</a> <a href="/categories/photography" class="footer-link" data-astro-cid-r2f34u3k>Photography</a> </nav> </div> <div class="footer-section" data-astro-cid-r2f34u3k> <h4 class="footer-subtitle" data-astro-cid-r2f34u3k>Support</h4> <nav class="footer-nav" data-astro-cid-r2f34u3k> <a href="/help" class="footer-link" data-astro-cid-r2f34u3k>Help Center</a> <a href="/contact" class="footer-link" data-astro-cid-r2f34u3k>Contact Us</a> <a href="/about" class="footer-link" data-astro-cid-r2f34u3k>About</a> <a href="/privacy" class="footer-link" data-astro-cid-r2f34u3k>Privacy Policy</a> <a href="/terms" class="footer-link" data-astro-cid-r2f34u3k>Terms of Service</a> </nav> </div> </div> <div class="footer-bottom" data-astro-cid-r2f34u3k> <div class="footer-bottom-content" data-astro-cid-r2f34u3k> <p class="footer-copyright" data-astro-cid-r2f34u3k>\xA9 2025 DexAPK. All rights reserved.</p> <div class="footer-links" data-astro-cid-r2f34u3k> <a href="/sitemap.xml" class="footer-bottom-link" data-astro-cid-r2f34u3k>Sitemap</a> <a href="/apps-sitemap.xml" class="footer-bottom-link" data-astro-cid-r2f34u3k>Apps</a> <a href="/blog-sitemap.xml" class="footer-bottom-link" data-astro-cid-r2f34u3k>Blog</a> </div> </div> </div> </footer> <!-- Sidebar Menu --> ', " </body> </html>"])), seoTitle, addAttribute(seoDescription, "content"), addAttribute(canonicalUrl, "href"), addAttribute(ampUrl, "href"), addAttribute(seoTitle, "content"), addAttribute(seoDescription, "content"), addAttribute(ampUrl, "content"), addAttribute(app.icon || "/web-app-manifest-512x512.png", "content"), addAttribute(seoTitle, "content"), addAttribute(seoDescription, "content"), addAttribute(app.icon || "/web-app-manifest-512x512.png", "content"), maybeRenderHead(), renderHead(), addAttribute(`/categories/${app.category.toLowerCase()}`, "href"), app.category, app.name, app.icon ? renderTemplate`${renderComponent($$result, "amp-img", "amp-img", { "src": app.icon, "alt": `${app.name} icon`, "width": "80", "height": "80", "layout": "fixed", "data-astro-cid-r2f34u3k": true })}` : renderTemplate`<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-astro-cid-r2f34u3k></rect> <line x1="8" y1="21" x2="16" y2="21" data-astro-cid-r2f34u3k></line> <line x1="12" y1="17" x2="12" y2="21" data-astro-cid-r2f34u3k></line> </svg>`, app.custom_h1_title || `${app.name} v${app.version} MOD APK`, app.version, app.last_updated, app.size, [1, 2, 3, 4, 5].map((star) => renderTemplate`<svg${addAttribute(`star ${star <= Math.floor(app.rating) ? "star-filled" : "star-empty"}`, "class")} viewBox="0 0 24 24" fill="currentColor" data-astro-cid-r2f34u3k> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-r2f34u3k></path> </svg>`), app.rating, app.votes.toLocaleString(), addAttribute(app.disable_download_page ? app.download_url || "#" : `/${app.slug}/download`, "href"), addAttribute(app.disable_download_page ? "_blank" : "_self", "target"), addAttribute(app.disable_download_page ? "noopener noreferrer" : "", "rel"), app.version, app.last_updated, app.publisher, app.requirements, app.category, app.size, app.screenshots && app.screenshots.length > 0 && renderTemplate`<section class="card" data-astro-cid-r2f34u3k> <h2 class="card-title" data-astro-cid-r2f34u3k>Screenshots</h2> ${renderComponent($$result, "amp-carousel", "amp-carousel", { "width": "400", "height": "300", "layout": "responsive", "type": "slides", "class": "screenshots", "data-astro-cid-r2f34u3k": true }, { "default": () => renderTemplate` ${app.screenshots.map((screenshot, index) => renderTemplate`<div class="screenshot" data-astro-cid-r2f34u3k> ${renderComponent($$result, "amp-img", "amp-img", { "src": screenshot, "alt": `${app.name} screenshot ${index + 1}`, "width": "300", "height": "533", "layout": "fill", "data-astro-cid-r2f34u3k": true })} </div>`)} ` })} </section>`, app.mod_info && app.mod_info.length > 0 && renderTemplate`<section class="mod-info" data-astro-cid-r2f34u3k> <div class="mod-info-title" data-astro-cid-r2f34u3k> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;" data-astro-cid-r2f34u3k> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-r2f34u3k></path> </svg>
MOD Features
</div> <ul class="mod-info-list" data-astro-cid-r2f34u3k> ${app.mod_info.map((info) => renderTemplate`<li class="mod-info-item" data-astro-cid-r2f34u3k>${info}</li>`)} </ul> </section>`, unescapeHTML(htmlContent), renderComponent($$result, "amp-accordion", "amp-accordion", { "data-astro-cid-r2f34u3k": true }, { "default": () => renderTemplate` <section data-astro-cid-r2f34u3k> <h4 data-astro-cid-r2f34u3k>Is ${app.name} safe to use?</h4> <div data-astro-cid-r2f34u3k> <p data-astro-cid-r2f34u3k>Yes, our ${app.name} is thoroughly tested and scanned for malware. It's completely safe to install and use on your Android device.</p> </div> </section> <section data-astro-cid-r2f34u3k> <h4 data-astro-cid-r2f34u3k>Do I need to root my device?</h4> <div data-astro-cid-r2f34u3k> <p data-astro-cid-r2f34u3k>No, this ${app.name} works on both rooted and non-rooted devices. No root access is required for installation or usage.</p> </div> </section> <section data-astro-cid-r2f34u3k> <h4 data-astro-cid-r2f34u3k>What's new in version ${app.version}?</h4> <div data-astro-cid-r2f34u3k> <p data-astro-cid-r2f34u3k>Version ${app.version} includes enhanced performance, improved stability, bug fixes, and new premium features. Check the changelog above for detailed information.</p> </div> </section> <section data-astro-cid-r2f34u3k> <h4 data-astro-cid-r2f34u3k>How do I install ${app.name}?</h4> <div data-astro-cid-r2f34u3k> <p data-astro-cid-r2f34u3k>Download the APK file, enable "Unknown Sources" in your Android settings, then tap the downloaded file to install it on your device.</p> </div> </section> ` }), relatedApps.length > 0 && renderTemplate`<section class="card" data-astro-cid-r2f34u3k> <h3 class="card-title" data-astro-cid-r2f34u3k>You May Also Like</h3> <div class="related-apps" data-astro-cid-r2f34u3k> ${relatedApps.map((relatedApp) => renderTemplate`<a${addAttribute(`/${relatedApp.slug}`, "href")} class="related-app" data-astro-cid-r2f34u3k> <div class="related-app-icon" data-astro-cid-r2f34u3k> ${relatedApp.icon ? renderTemplate`${renderComponent($$result, "amp-img", "amp-img", { "src": relatedApp.icon, "alt": relatedApp.name, "width": "48", "height": "48", "layout": "fixed", "data-astro-cid-r2f34u3k": true })}` : renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-astro-cid-r2f34u3k></rect> <line x1="8" y1="21" x2="16" y2="21" data-astro-cid-r2f34u3k></line> <line x1="12" y1="17" x2="12" y2="21" data-astro-cid-r2f34u3k></line> </svg>`} </div> <div class="related-app-info" data-astro-cid-r2f34u3k> <div class="related-app-name" data-astro-cid-r2f34u3k>${relatedApp.name}</div> <div class="related-app-category" data-astro-cid-r2f34u3k>${relatedApp.category}</div> </div> </a>`)} <!-- Additional Internal Links --> <div class="internal-links" data-astro-cid-r2f34u3k> <h4 class="internal-links-title" data-astro-cid-r2f34u3k>Popular in ${app.category}</h4> <div class="internal-links-grid" data-astro-cid-r2f34u3k> <a${addAttribute(`/categories/${app.category.toLowerCase()}`, "href")} class="internal-link" data-astro-cid-r2f34u3k>
All ${app.category} Apps
</a> <a href="/trending" class="internal-link" data-astro-cid-r2f34u3k>
Trending MOD APKs
</a> <a href="/games" class="internal-link" data-astro-cid-r2f34u3k>
MOD Games
</a> <a${addAttribute(`/publisher/${app.publisher.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, "href")} class="internal-link" data-astro-cid-r2f34u3k>
More by ${app.publisher} </a> </div> </div> </div> </section>`, renderComponent($$result, "amp-sidebar", "amp-sidebar", { "id": "sidebar", "layout": "nodisplay", "side": "left", "class": "sidebar", "data-astro-cid-r2f34u3k": true }, { "default": () => renderTemplate` <div class="sidebar-header" data-astro-cid-r2f34u3k> <h2 class="sidebar-title" data-astro-cid-r2f34u3k>Menu</h2> <button class="close-button" on="tap:sidebar.close" aria-label="Close menu" data-astro-cid-r2f34u3k> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r2f34u3k> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-r2f34u3k></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-r2f34u3k></line> </svg> </button> </div> <nav data-astro-cid-r2f34u3k> <a href="/" class="nav-link" data-astro-cid-r2f34u3k>Home</a> <a href="/apps" class="nav-link" data-astro-cid-r2f34u3k>All Apps</a> <a href="/categories" class="nav-link" data-astro-cid-r2f34u3k>Categories</a> <a href="/trending" class="nav-link" data-astro-cid-r2f34u3k>Trending</a> <a href="/publisher" class="nav-link" data-astro-cid-r2f34u3k>Publishers</a> <a href="/blog" class="nav-link" data-astro-cid-r2f34u3k>Blog</a> <a href="/about" class="nav-link" data-astro-cid-r2f34u3k>About</a> <a href="/contact" class="nav-link" data-astro-cid-r2f34u3k>Contact</a> </nav> ` }));
}, "/home/project/src/pages/[slug]/amp.astro", void 0);

const $$file = "/home/project/src/pages/[slug]/amp.astro";
const $$url = "/[slug]/amp";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Amp,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
