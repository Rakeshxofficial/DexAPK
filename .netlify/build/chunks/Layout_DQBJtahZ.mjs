import { e as createComponent, f as createAstro, r as renderTemplate, n as renderSlot, o as renderHead, h as addAttribute } from './astro/server_CfnP6yzT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "DexAPK - Fast & Secure APK Downloads", description = "Download the latest Android APK files safely and quickly. DexAPK provides secure APK downloads with fast loading times." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- Default meta tags (will be overridden by SEOHead component if used) --><title>", '</title><meta name="description"', "><!-- Allow SEOHead component to override these -->", `<!-- Preload Critical Resources --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Theme Detection Script --><script>
      const getThemePreference = () => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      };
      
      const isDark = getThemePreference() === 'dark';
      document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
      
      if (typeof localStorage !== 'undefined') {
        const observer = new MutationObserver(() => {
          const isDark = document.documentElement.classList.contains('dark');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      }
    <\/script>`, '</head> <body class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300" data-astro-cid-sckkx6r4> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
