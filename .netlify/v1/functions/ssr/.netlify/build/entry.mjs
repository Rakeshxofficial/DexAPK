import { b as renderers } from './assets/vendor.DF5xVtK3.js';
import { s as serverEntrypointModule } from './assets/_@astrojs-ssr-adapter.CvSoi7hX.js';
import { manifest } from './manifest_DKhaVO7W.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/apps/edit/_slug_.astro.mjs');
const _page4 = () => import('./pages/admin/apps/new.astro.mjs');
const _page5 = () => import('./pages/admin/apps.astro.mjs');
const _page6 = () => import('./pages/admin/blog/edit/_slug_.astro.mjs');
const _page7 = () => import('./pages/admin/blog/new.astro.mjs');
const _page8 = () => import('./pages/admin/blog.astro.mjs');
const _page9 = () => import('./pages/admin/contacts.astro.mjs');
const _page10 = () => import('./pages/admin/download-tasks/edit/_id_.astro.mjs');
const _page11 = () => import('./pages/admin/download-tasks/new.astro.mjs');
const _page12 = () => import('./pages/admin/download-tasks.astro.mjs');
const _page13 = () => import('./pages/admin/login.astro.mjs');
const _page14 = () => import('./pages/admin.astro.mjs');
const _page15 = () => import('./pages/apps.astro.mjs');
const _page16 = () => import('./pages/apps-sitemap.xml.astro.mjs');
const _page17 = () => import('./pages/blog/category/_slug_.astro.mjs');
const _page18 = () => import('./pages/blog/tag/_slug_.astro.mjs');
const _page19 = () => import('./pages/blog/tags.astro.mjs');
const _page20 = () => import('./pages/blog/_slug_.astro.mjs');
const _page21 = () => import('./pages/blog.astro.mjs');
const _page22 = () => import('./pages/blog-sitemap.xml.astro.mjs');
const _page23 = () => import('./pages/categories/_slug_.astro.mjs');
const _page24 = () => import('./pages/categories.astro.mjs');
const _page25 = () => import('./pages/contact.astro.mjs');
const _page26 = () => import('./pages/games.astro.mjs');
const _page27 = () => import('./pages/help.astro.mjs');
const _page28 = () => import('./pages/image-sitemap.xml.astro.mjs');
const _page29 = () => import('./pages/privacy.astro.mjs');
const _page30 = () => import('./pages/publisher/_slug_.astro.mjs');
const _page31 = () => import('./pages/publisher.astro.mjs');
const _page32 = () => import('./pages/rss.xml.astro.mjs');
const _page33 = () => import('./pages/search.astro.mjs');
const _page34 = () => import('./pages/sitemap.xml.astro.mjs');
const _page35 = () => import('./pages/terms.astro.mjs');
const _page36 = () => import('./pages/trending.astro.mjs');
const _page37 = () => import('./pages/_slug_/amp.astro.mjs');
const _page38 = () => import('./pages/_slug_/download.astro.mjs');
const _page39 = () => import('./pages/_slug_.astro.mjs');
const _page40 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin/apps/edit/[slug].astro", _page3],
    ["src/pages/admin/apps/new.astro", _page4],
    ["src/pages/admin/apps/index.astro", _page5],
    ["src/pages/admin/blog/edit/[slug].astro", _page6],
    ["src/pages/admin/blog/new.astro", _page7],
    ["src/pages/admin/blog/index.astro", _page8],
    ["src/pages/admin/contacts/index.astro", _page9],
    ["src/pages/admin/download-tasks/edit/[id].astro", _page10],
    ["src/pages/admin/download-tasks/new.astro", _page11],
    ["src/pages/admin/download-tasks/index.astro", _page12],
    ["src/pages/admin/login.astro", _page13],
    ["src/pages/admin/index.astro", _page14],
    ["src/pages/apps.astro", _page15],
    ["src/pages/apps-sitemap.xml.ts", _page16],
    ["src/pages/blog/category/[slug].astro", _page17],
    ["src/pages/blog/tag/[slug].astro", _page18],
    ["src/pages/blog/tags.astro", _page19],
    ["src/pages/blog/[slug].astro", _page20],
    ["src/pages/blog/index.astro", _page21],
    ["src/pages/blog-sitemap.xml.ts", _page22],
    ["src/pages/categories/[slug].astro", _page23],
    ["src/pages/categories.astro", _page24],
    ["src/pages/contact.astro", _page25],
    ["src/pages/games.astro", _page26],
    ["src/pages/help.astro", _page27],
    ["src/pages/image-sitemap.xml.ts", _page28],
    ["src/pages/privacy.astro", _page29],
    ["src/pages/publisher/[slug].astro", _page30],
    ["src/pages/publisher/index.astro", _page31],
    ["src/pages/rss.xml.ts", _page32],
    ["src/pages/search.astro", _page33],
    ["src/pages/sitemap.xml.ts", _page34],
    ["src/pages/terms.astro", _page35],
    ["src/pages/trending.astro", _page36],
    ["src/pages/[slug]/amp.astro", _page37],
    ["src/pages/[slug]/download.astro", _page38],
    ["src/pages/[slug].astro", _page39],
    ["src/pages/index.astro", _page40]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d8da66f8-a9fe-48c6-973a-dd03ac398721"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
