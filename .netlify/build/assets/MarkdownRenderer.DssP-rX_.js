import { c as createComponent, d as createAstro, u as unescapeHTML, f as renderScript, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './vendor.DF5xVtK3.js';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$MarkdownRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownRenderer;
  const { content, generateToc = true } = Astro2.props;
  function parseMarkdown(markdown) {
    if (!markdown) return { html: "", toc: [] };
    const lines = markdown.split("\n");
    const toc2 = [];
    let html2 = "";
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
          html2 += `<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"><code class="language-${language}">`;
        } else {
          html2 += "</code></pre>";
        }
        continue;
      }
      if (inCodeBlock) {
        html2 += escapeHtml(line) + "\n";
        continue;
      }
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = formatInlineMarkdown(headingMatch[2]);
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        if (generateToc) {
          const plainText = headingMatch[2].replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1");
          toc2.push({ level, text: plainText, id });
        }
        html2 += `<h${level} id="${id}" class="text-${level === 1 ? "3xl" : level === 2 ? "2xl" : level === 3 ? "xl" : "lg"} font-bold text-gray-900 dark:text-white mb-4 mt-8">${text}</h${level}>`;
        continue;
      }
      if (line.match(/^---+$/)) {
        html2 += '<hr class="border-gray-200 dark:border-gray-700 my-8">';
        continue;
      }
      const listMatch = line.match(/^(\s*)([-*+]|\d+\.)\s+(.+)$/);
      if (listMatch) {
        const indent = listMatch[1].length;
        const marker = listMatch[2];
        const text = listMatch[3];
        const isOrdered = /^\d+\./.test(marker);
        if (!inList) {
          inList = true;
          listType = isOrdered ? "ol" : "ul";
          html2 += `<${listType} class="${listType === "ol" ? "list-decimal" : "list-disc"} list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">`;
        }
        html2 += `<li class="ml-${Math.floor(indent / 2) * 4}">${formatInlineMarkdown(text)}</li>`;
        continue;
      } else if (inList) {
        inList = false;
        html2 += `</${listType}>`;
      }
      if (line.startsWith("> ")) {
        html2 += `<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">${formatInlineMarkdown(line.slice(2))}</blockquote>`;
        continue;
      }
      if (line.includes("|")) {
        const cells = line.split("|").map((cell) => cell.trim()).filter(Boolean);
        if (cells.length === 0) {
          continue;
        }
        if (cells.length >= 1) {
          const nextLine = lines[i + 1];
          if (!inTable && nextLine && nextLine.includes("|") && nextLine.includes("---")) {
            inTable = true;
            html2 += '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"><thead class="bg-gray-50 dark:bg-gray-800"><tr>';
            cells.forEach((cell) => {
              html2 += `<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">${formatInlineMarkdown(cell)}</th>`;
            });
            html2 += '</tr></thead><tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">';
            i++;
            continue;
          } else if (inTable) {
            html2 += "<tr>";
            cells.forEach((cell) => {
              html2 += `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">${formatInlineMarkdown(cell)}</td>`;
            });
            html2 += "</tr>";
            continue;
          }
        }
      }
      if (inTable && !line.includes("|")) {
        html2 += "</tbody></table></div>";
        inTable = false;
      }
      if (line.trim()) {
        html2 += `<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">${formatInlineMarkdown(line)}</p>`;
      } else {
        html2 += "<br>";
      }
    }
    if (inList) {
      html2 += `</${listType}>`;
    }
    if (inTable) {
      html2 += "</tbody></table></div>";
    }
    return { html: html2, toc: toc2 };
  }
  function formatInlineMarkdown(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>').replace(/\*(.*?)\*/g, '<em class="italic">$1</em>').replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(match, text2, url) {
      if (url.startsWith("/") || url.startsWith("#") || url.includes("dexapk.com")) {
        return `<a href="${url}" class="text-blue-600 dark:text-blue-400 hover:underline">${text2}</a>`;
      } else {
        return `<a href="${url}" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">${text2}</a>`;
      }
    }).replace(/~~(.*?)~~/g, '<del class="line-through">$1</del>');
  }
  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  const { html, toc } = parseMarkdown(content);
  return renderTemplate`<!-- Table of Contents (if enabled and has headings) -->${generateToc && toc.length > 0 && renderTemplate`${maybeRenderHead()}<details class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-8 border border-gray-200 dark:border-gray-600" data-astro-cid-ioosybgm><summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-astro-cid-ioosybgm><div class="flex items-center" data-astro-cid-ioosybgm><svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ioosybgm><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" data-astro-cid-ioosybgm></path></svg>
Table of Contents
</div><svg class="w-5 h-5 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ioosybgm><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ioosybgm></path></svg></summary><nav class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600" aria-label="Table of contents" data-astro-cid-ioosybgm><ul class="space-y-2" data-astro-cid-ioosybgm>${toc.map((item, index) => renderTemplate`<li${addAttribute(`ml-${(item.level - 1) * 4}`, "class")} data-astro-cid-ioosybgm><a${addAttribute(`#${item.id}`, "href")} class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200 text-sm block py-1" data-astro-cid-ioosybgm>${item.level <= 2 && renderTemplate`<span class="font-medium" data-astro-cid-ioosybgm>${index + 1}. </span>`}${item.text}</a></li>`)}</ul></nav></details>`}<!-- Article Content --><div class="prose prose-gray dark:prose-invert max-w-none" data-astro-cid-ioosybgm> <div data-astro-cid-ioosybgm>${unescapeHTML(html)}</div> </div>  ${renderScript($$result, "/home/project/src/components/MarkdownRenderer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/MarkdownRenderer.astro", void 0);

export { $$MarkdownRenderer as $ };
