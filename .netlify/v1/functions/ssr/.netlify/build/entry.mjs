import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D3n4wVPh.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/apps/edit/_slug_.astro.mjs');
const _page3 = () => import('./pages/admin/apps/new.astro.mjs');
const _page4 = () => import('./pages/admin/apps.astro.mjs');
const _page5 = () => import('./pages/admin/login.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/apps.astro.mjs');
const _page8 = () => import('./pages/categories/_slug_.astro.mjs');
const _page9 = () => import('./pages/categories.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/games.astro.mjs');
const _page12 = () => import('./pages/help.astro.mjs');
const _page13 = () => import('./pages/privacy.astro.mjs');
const _page14 = () => import('./pages/rss.xml.astro.mjs');
const _page15 = () => import('./pages/search.astro.mjs');
const _page16 = () => import('./pages/sitemap.xml.astro.mjs');
const _page17 = () => import('./pages/terms.astro.mjs');
const _page18 = () => import('./pages/trending.astro.mjs');
const _page19 = () => import('./pages/_slug_.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/apps/edit/[slug].astro", _page2],
    ["src/pages/admin/apps/new.astro", _page3],
    ["src/pages/admin/apps/index.astro", _page4],
    ["src/pages/admin/login.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/apps.astro", _page7],
    ["src/pages/categories/[slug].astro", _page8],
    ["src/pages/categories.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/games.astro", _page11],
    ["src/pages/help.astro", _page12],
    ["src/pages/privacy.astro", _page13],
    ["src/pages/rss.xml.ts", _page14],
    ["src/pages/search.astro", _page15],
    ["src/pages/sitemap.xml.ts", _page16],
    ["src/pages/terms.astro", _page17],
    ["src/pages/trending.astro", _page18],
    ["src/pages/[slug].astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "562391e4-e3af-4370-9f6d-810551097883"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
