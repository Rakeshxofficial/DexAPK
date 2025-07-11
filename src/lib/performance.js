// Performance monitoring utilities
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

// Function to send metrics to analytics
const sendToAnalytics = ({ name, delta, id }) => {
  // This would normally send to your analytics service
  // For now, we'll just log to console in development
  if (import.meta.env.DEV) {
    console.log(`Web Vitals: ${name}`, {
      name,
      delta: Math.round(delta),
      id
    });
  }
  
  // In production, you might send to Google Analytics or other services
  // Example for Google Analytics:
  // if (window.gtag) {
  //   window.gtag('event', name, {
  //     event_category: 'Web Vitals',
  //     event_label: id,
  //     value: Math.round(name === 'CLS' ? delta * 1000 : delta),
  //     non_interaction: true,
  //   });
  // }
};

// Report all web vitals
export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getLCP(sendToAnalytics);
  getFCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  // Only run in the browser
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback to avoid impacting page load performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        reportWebVitals();
      });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        reportWebVitals();
      }, 2000);
    }
  }
}

// Optimize third-party script loading
export function loadScriptAsync(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  
  if (callback) {
    script.onload = callback;
  }
  
  document.body.appendChild(script);
}

// Optimize image loading
export function lazyLoadImages() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    // You could use a library like lazysizes or implement your own solution
    console.log('Browser does not support native lazy loading');
  }
}

// Optimize font loading
export function optimizeFontLoading() {
  // Check if the browser supports the Font Loading API
  if ('fonts' in document) {
    // Preload and swap important fonts
    Promise.all([
      document.fonts.load('1em Inter'),
      document.fonts.load('bold 1em Inter')
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
}

// Reduce layout thrashing by batching DOM reads and writes
export class DOMBatch {
  constructor() {
    this.reads = [];
    this.writes = [];
    this.scheduled = false;
  }
  
  read(fn) {
    this.reads.push(fn);
    this.schedule();
    return this;
  }
  
  write(fn) {
    this.writes.push(fn);
    this.schedule();
    return this;
  }
  
  schedule() {
    if (!this.scheduled) {
      this.scheduled = true;
      requestAnimationFrame(() => this.execute());
    }
  }
  
  execute() {
    // Process all reads
    const results = this.reads.map(fn => fn());
    
    // Process all writes
    this.writes.forEach((fn, i) => fn(results[i]));
    
    // Reset
    this.reads = [];
    this.writes = [];
    this.scheduled = false;
  }
}

// Export a singleton instance
export const domBatch = new DOMBatch();