import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, a as renderTemplate, u as unescapeHTML } from './vendor.DF5xVtK3.js';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ImageOptimized = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageOptimized;
  const {
    src,
    alt,
    width,
    height,
    class: className = "",
    sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    loading = "auto",
    decoding = "async",
    fetchpriority = "auto",
    addStructuredData = false,
    placeholder = "blur",
    quality = 80,
    isOffScreen = false,
    ...rest
  } = Astro2.props;
  function isExternalImage(url) {
    if (!url) return false;
    return url.startsWith("http") && !url.includes("dexapk.com");
  }
  src.includes("pexels.com");
  const qualityParam = src.includes("?") ? `&q=${quality}` : `?q=${quality}`;
  src.includes("?") ? "&auto=format" : "?auto=format";
  const optimizedSrc = isExternalImage(src) ? src : `${src}${qualityParam}`;
  const finalLoading = isOffScreen ? "lazy" : loading === "auto" ? fetchpriority === "high" ? "eager" : "lazy" : loading;
  const finalFetchpriority = isOffScreen ? "low" : fetchpriority;
  return renderTemplate`<!-- Image with proper attributes -->${maybeRenderHead()}<img${addAttribute(optimizedSrc, "src")}${addAttribute(alt, "alt")}${addAttribute(`${className || ""}`, "class")}${addAttribute(finalLoading, "loading")}${addAttribute(finalFetchpriority, "fetchpriority")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(sizes, "sizes")}${addAttribute(decoding, "decoding")}${spreadAttributes(rest)}> <!-- Preload critical images --> ${fetchpriority === "high" && renderTemplate`<link rel="preload" as="image"${addAttribute(optimizedSrc, "href")}>`} <!-- Add structured data for images --> ${addStructuredData && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": optimizedSrc,
    "name": alt,
    "width": width,
    "height": height,
    "encodingFormat": src.endsWith(".webp") ? "image/webp" : src.endsWith(".jpg") || src.endsWith(".jpeg") ? "image/jpeg" : src.endsWith(".png") ? "image/png" : "image/webp"
  })))}`;
}, "/home/project/src/components/ImageOptimized.astro", void 0);

export { $$ImageOptimized as $ };
