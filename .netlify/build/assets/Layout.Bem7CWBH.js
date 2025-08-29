import { c as createComponent, m as maybeRenderHead, f as renderScript, a as renderTemplate, d as createAstro, r as renderComponent, i as renderSlot, j as renderHead, u as unescapeHTML, e as addAttribute, F as Fragment } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$TelegramHelpButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="tg://resolve?domain=DexAPKbot" id="telegram-help-button" class="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" aria-label="Get help on Telegram" role="button" tabindex="0" data-astro-cid-wnutocih> <span class="sr-only" data-astro-cid-wnutocih>Get help on Telegram</span> <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-wnutocih> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.176-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.832z" data-astro-cid-wnutocih></path> </svg> </a>  ${renderScript($$result, "/home/project/src/components/TelegramHelpButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/TelegramHelpButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "DexAPK - Fast & Secure APK Downloads",
    description = "Download the latest Android APK files safely and quickly. DexAPK provides secure APK downloads with fast loading times.",
    seoData
  } = Astro2.props;
  const cleanTitle = (titleText) => {
    return titleText.replace(/\s*-\s*DexAPK\s*$/, "");
  };
  const finalTitle = cleanTitle(seoData?.title || title);
  const finalDescription = seoData?.description || description;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DexAPK",
    "url": "https://dexapk.com",
    "logo": "https://dexapk.com/web-app-manifest-512x512.png",
    "sameAs": [
      "https://twitter.com/dexapk",
      "https://github.com/dexapk"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DexAPK",
    "url": "https://dexapk.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dexapk.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return renderTemplate(_b || (_b = __template(['<html lang="en-US" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon-96x96.png"><meta name="generator"', '><!-- Primary Meta Tags --><meta http-equiv="content-language" content="en-US"><title>', '</title><meta name="title"', '><meta name="description"', "><!-- SEO Meta Tags -->", '<meta name="author" content="DexAPK"><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow"><meta name="bingbot" content="index, follow"><!-- Canonical URL -->', '<!-- Language and Locale --><meta name="language" content="en-US"><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><meta property="og:site_name" content="DexAPK"><meta property="og:locale" content="en_US"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><meta property="twitter:site" content="@dexapk"><meta property="twitter:creator" content="@dexapk"><!-- Additional Meta Tags --><meta name="theme-color" content="#3b82f6"><meta name="msapplication-TileColor" content="#3b82f6"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="DexAPK"><meta name="format-detection" content="telephone=no"><meta name="image-rendering" content="auto"><meta http-equiv="Accept-CH" content="DPR, Width, Viewport-Width"><meta name="color-scheme" content="dark light"><!-- Preconnect to external domains for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://cdn.dexapk.com" crossorigin><!-- Critical CSS inline for faster rendering --><!-- App-specific Meta Tags -->', '<!-- Favicon and Icons --><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png"><link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512\xD7512-new.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="mask-icon" href="/favicon-96x96.png" color="#3b82f6"><link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Web App Manifest --><link rel="manifest" href="/manifest.json"><!-- Base Structured Data --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script><!-- App Structured Data -->", `<!-- Additional SEO Meta Tags --><meta name="rating" content="general"><meta name="distribution" content="global"><meta name="revisit-after" content="1 days"><meta name="coverage" content="Worldwide"><meta name="target" content="all"><meta name="HandheldFriendly" content="true"><meta name="MobileOptimized" content="320"><!-- Security Headers --><!-- Security headers are now set in netlify.toml instead of meta tags --><!-- RSS Feed and Sitemap --><link rel="alternate" type="application/rss+xml" title="DexAPK RSS Feed" href="/rss.xml"><link rel="sitemap" type="application/xml" href="/sitemap.xml"><link rel="sitemap" type="application/xml" href="/apps-sitemap.xml"><link rel="sitemap" type="application/xml" href="/blog-sitemap.xml"><!-- Theme Detection Script --><script defer>
      // Immediate theme detection without localStorage check
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    <\/script><!-- Load fonts asynchronously after page load --><script>
      window.addEventListener('load', function() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      });
    <\/script><!-- Analytics loaded after page is interactive --><script>
      window.addEventListener('load', function() {
        // Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SBX87GMGRB');
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SBX87GMGRB';
        document.head.appendChild(script);
      });
    <\/script>`, '</head> <body class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100" data-astro-cid-sckkx6r4> ', " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), finalTitle, addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), seoData?.keywords && renderTemplate`<meta name="keywords"${addAttribute(seoData.keywords, "content")}>`, seoData?.canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(seoData.canonicalUrl, "href")}>`, addAttribute(seoData?.type || "website", "content"), addAttribute(seoData?.canonicalUrl || Astro2.url.href, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(seoData?.featuredImage || "/web-app-manifest-512x512.png", "content"), addAttribute(finalTitle, "content"), addAttribute(seoData?.canonicalUrl || Astro2.url.href, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(seoData?.featuredImage || "/web-app-manifest-512x512.png", "content"), addAttribute(finalTitle, "content"), seoData?.appName && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`<meta name="application-name"${addAttribute(seoData.appName, "content")}><meta property="al:android:app_name"${addAttribute(seoData.appName, "content")}><meta property="al:android:package"${addAttribute(`com.${seoData.appName.toLowerCase().replace(/\s+/g, "")}`, "content")}>` })}`, unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(websiteSchema)), seoData?.appName && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": seoData.appName,
    "applicationCategory": "MobileApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    ...seoData.appVersion && { "softwareVersion": seoData.appVersion },
    ...seoData.appCategory && { "applicationSubCategory": seoData.appCategory },
    ...seoData.appRating && seoData.appVotes && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": seoData.appRating,
        "ratingCount": seoData.appVotes,
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    ...seoData.appPublisher && {
      "author": {
        "@type": "Organization",
        "name": seoData.appPublisher
      }
    },
    ...seoData.appSize && { "fileSize": seoData.appSize },
    ...seoData.lastUpdated && { "dateModified": seoData.lastUpdated },
    ...finalDescription && { "description": finalDescription },
    ...seoData.featuredImage && { "image": seoData.featuredImage }
  }))), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "TelegramHelpButton", $$TelegramHelpButton, { "data-astro-cid-sckkx6r4": true }));
}, "/home/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
