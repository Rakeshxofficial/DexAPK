/**
 * Simple markdown parser for client-side rendering
 */

// Parse markdown content with optional TOC generation
export function parseMarkdown(markdown, generateToc = true) {
  if (!markdown) return { html: '', toc: [] };
  
  const lines = markdown.split('\n');
  const toc = [];
  let html = '';
  let inCodeBlock = false;
  let inList = false;
  let listType = '';
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Handle code blocks
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      if (inCodeBlock) {
        const language = line.slice(3).trim();
        html += `<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"><code class="language-${language}">`;
      } else {
        html += '</code></pre>';
      }
      continue;
    }
    
    if (inCodeBlock) {
      html += escapeHtml(line) + '\n';
      continue;
    }
    
    // Handle headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      
      if (generateToc) {
        toc.push({ level, text, id });
      }
      
      html += `<h${level} id="${id}" class="text-${level === 1 ? '3xl' : level === 2 ? '2xl' : level === 3 ? 'xl' : 'lg'} font-bold text-gray-900 dark:text-white mb-4 mt-8">${text}</h${level}>`;
      continue;
    }
    
    // Handle horizontal rules
    if (line.match(/^---+$/)) {
      html += '<hr class="border-gray-200 dark:border-gray-700 my-8">';
      continue;
    }
    
    // Handle lists
    const listMatch = line.match(/^(\s*)([-*+]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const indent = listMatch[1].length;
      const marker = listMatch[2];
      const text = listMatch[3];
      const isOrdered = /^\d+\./.test(marker);
      
      if (!inList) {
        inList = true;
        listType = isOrdered ? 'ol' : 'ul';
        html += `<${listType} class="${listType === 'ol' ? 'list-decimal' : 'list-disc'} list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">`;
      }
      
      html += `<li class="ml-${Math.floor(indent / 2) * 4}">${formatInlineMarkdown(text)}</li>`;
      continue;
    } else if (inList) {
      inList = false;
      html += `</${listType}>`;
    }
    
    // Handle blockquotes
    if (line.startsWith('> ')) {
      html += `<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">${formatInlineMarkdown(line.slice(2))}</blockquote>`;
      continue;
    }
    
    // Handle tables
    if (line.includes('|')) {
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
      if (cells.length > 1) {
        // Check if next line is table separator
        const nextLine = lines[i + 1];
        if (nextLine && nextLine.includes('---')) {
          // Table header
          html += '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"><thead class="bg-gray-50 dark:bg-gray-800"><tr>';
          cells.forEach(cell => {
            html += `<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">${formatInlineMarkdown(cell)}</th>`;
          });
          html += '</tr></thead><tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">';
          i++; // Skip separator line
        } else {
          // Table row
          html += '<tr>';
          cells.forEach(cell => {
            html += `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">${formatInlineMarkdown(cell)}</td>`;
          });
          html += '</tr>';
        }
        continue;
      }
    }
    
    // Handle paragraphs
    if (line.trim()) {
      html += `<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">${formatInlineMarkdown(line)}</p>`;
    } else {
      html += '<br>';
    }
  }
  
  // Close any open lists
  if (inList) {
    html += `</${listType}>`;
  }
  
  // Close any open tables
  if (html.includes('<tbody') && !html.includes('</tbody>')) {
    html += '</tbody></table></div>';
  }
  
  return { html, toc };
}

// Format inline markdown elements
function formatInlineMarkdown(text) {
  return text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Code
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Strikethrough
    .replace(/~~(.*?)~~/g, '<del class="line-through">$1</del>');
}

// Escape HTML special characters
function escapeHtml(text) {
  return text
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#39;');
}