/**
 * DexAPK App Details - Main JavaScript
 * Handles all interactive functionality for app detail pages
 */

// Global variables
let currentApp = null;
let relatedApps = [];
let trendingApps = [];

// DOM Elements
let downloadButton = null;
let modInfoDetails = null;
let screenshotItems = [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DexAPK App Details initialized');
  
  // Initialize components
  initializeDownloadButton();
  initializeModInfo();
  initializeScreenshots();
  initializeRelatedApps();
  initializeTrendingApps();
  initializeAnalytics();
  initializeAccessibility();
  
  // Load app data from page
  loadAppData();
});

/**
 * Initialize download button functionality
 */
function initializeDownloadButton() {
  downloadButton = document.getElementById('download-button');
  
  if (!downloadButton) {
    console.warn('Download button not found');
    return;
  }
  
  // Add click tracking
  downloadButton.addEventListener('click', function(e) {
    const appName = this.getAttribute('data-app-name') || 'Unknown App';
    const appSlug = this.getAttribute('data-app-slug') || 'unknown';
    
    // Track download click
    trackDownloadClick(appName, appSlug);
    
    // Add visual feedback
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
    
    // Announce to screen readers
    announceToScreenReader(`Starting download for ${appName}`);
  });
  
  // Add keyboard support
  downloadButton.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
}

/**
 * Initialize MOD info accordion
 */
function initializeModInfo() {
  modInfoDetails = document.querySelector('.mod-info details');
  
  if (!modInfoDetails) {
    console.warn('MOD info details not found');
    return;
  }
  
  const summary = modInfoDetails.querySelector('summary');
  if (summary) {
    summary.addEventListener('click', function() {
      // Track accordion interaction
      trackEvent('mod_info_toggle', {
        action: modInfoDetails.open ? 'close' : 'open'
      });
    });
    
    // Add keyboard support
    summary.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        modInfoDetails.open = !modInfoDetails.open;
      }
    });
  }
}

/**
 * Initialize screenshot gallery
 */
function initializeScreenshots() {
  screenshotItems = document.querySelectorAll('.screenshot-item img');
  
  screenshotItems.forEach((img, index) => {
    // Add loading error handling
    img.addEventListener('error', function() {
      this.parentElement.innerHTML = `
        <div class="flex items-center justify-center h-full bg-gray-200 text-gray-500">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
      `;
    });
    
    // Add click handler for lightbox (optional)
    img.addEventListener('click', function() {
      trackEvent('screenshot_view', {
        screenshot_index: index + 1
      });
    });
  });
}

/**
 * Initialize related apps functionality
 */
function initializeRelatedApps() {
  const relatedAppItems = document.querySelectorAll('.related-app-item');
  
  relatedAppItems.forEach(item => {
    item.addEventListener('click', function() {
      const appName = this.querySelector('.related-app-name')?.textContent || 'Unknown';
      trackEvent('related_app_click', {
        app_name: appName
      });
    });
  });
}

/**
 * Initialize trending apps functionality
 */
function initializeTrendingApps() {
  const trendingAppItems = document.querySelectorAll('.trending-app-item');
  
  trendingAppItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      const appName = this.querySelector('.related-app-name')?.textContent || 'Unknown';
      trackEvent('trending_app_click', {
        app_name: appName,
        position: index + 1
      });
    });
  });
}

/**
 * Initialize analytics tracking
 */
function initializeAnalytics() {
  // Track page view
  trackPageView();
  
  // Track scroll depth
  let maxScrollDepth = 0;
  let scrollTimeout;
  
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if (scrollDepth >= 25 && maxScrollDepth < 25) {
          trackEvent('scroll_depth', { depth: 25 });
        } else if (scrollDepth >= 50 && maxScrollDepth < 50) {
          trackEvent('scroll_depth', { depth: 50 });
        } else if (scrollDepth >= 75 && maxScrollDepth < 75) {
          trackEvent('scroll_depth', { depth: 75 });
        } else if (scrollDepth >= 90 && maxScrollDepth < 90) {
          trackEvent('scroll_depth', { depth: 90 });
        }
      }
    }, 100);
  }, { passive: true });
  
  // Track time on page
  const startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', { seconds: timeOnPage });
  });
}

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
  // Add skip links
  addSkipLinks();
  
  // Enhance keyboard navigation
  enhanceKeyboardNavigation();
  
  // Add ARIA live regions
  addLiveRegions();
  
  // Handle reduced motion preferences
  handleReducedMotion();
}

/**
 * Load app data from page elements
 */
function loadAppData() {
  // Extract app data from page elements
  const appNameElement = document.querySelector('.app-title');
  const appCategoryElement = document.querySelector('[data-category]');
  
  if (appNameElement) {
    currentApp = {
      name: appNameElement.textContent.trim(),
      category: appCategoryElement?.dataset.category || 'Unknown'
    };
  }
}

/**
 * Track download button clicks
 */
function trackDownloadClick(appName, appSlug) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download_click', {
      app_name: appName,
      app_slug: appSlug,
      event_category: 'engagement',
      event_label: appName
    });
  }
  
  // Custom analytics
  trackEvent('download_click', {
    app_name: appName,
    app_slug: appSlug,
    timestamp: new Date().toISOString()
  });
  
  console.log('Download tracked:', { appName, appSlug });
}

/**
 * Track page views
 */
function trackPageView() {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-SBX87GMGRB', {
      page_title: document.title,
      page_location: window.location.href
    });
  }
  
  trackEvent('page_view', {
    page_title: document.title,
    page_url: window.location.href,
    user_agent: navigator.userAgent
  });
}

/**
 * Generic event tracking function
 */
function trackEvent(eventName, parameters = {}) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
  
  // Console logging for development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Event tracked:', eventName, parameters);
  }
  
  // Custom analytics endpoint (if needed)
  // You can add your own analytics service here
}

/**
 * Add skip links for accessibility
 */
function addSkipLinks() {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

/**
 * Enhance keyboard navigation
 */
function enhanceKeyboardNavigation() {
  // Add keyboard navigation for related apps
  const relatedApps = document.querySelectorAll('.related-app-item');
  
  relatedApps.forEach((item, index) => {
    item.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          const nextItem = relatedApps[index + 1];
          if (nextItem) nextItem.focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const prevItem = relatedApps[index - 1];
          if (prevItem) prevItem.focus();
          break;
        case 'Home':
          e.preventDefault();
          relatedApps[0].focus();
          break;
        case 'End':
          e.preventDefault();
          relatedApps[relatedApps.length - 1].focus();
          break;
      }
    });
  });
}

/**
 * Add ARIA live regions for announcements
 */
function addLiveRegions() {
  // Create polite live region
  const politeLiveRegion = document.createElement('div');
  politeLiveRegion.setAttribute('aria-live', 'polite');
  politeLiveRegion.setAttribute('aria-atomic', 'true');
  politeLiveRegion.className = 'sr-only';
  politeLiveRegion.id = 'polite-announcements';
  document.body.appendChild(politeLiveRegion);
  
  // Create assertive live region
  const assertiveLiveRegion = document.createElement('div');
  assertiveLiveRegion.setAttribute('aria-live', 'assertive');
  assertiveLiveRegion.setAttribute('aria-atomic', 'true');
  assertiveLiveRegion.className = 'sr-only';
  assertiveLiveRegion.id = 'assertive-announcements';
  document.body.appendChild(assertiveLiveRegion);
}

/**
 * Handle reduced motion preferences
 */
function handleReducedMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Announce messages to screen readers
 */
function announceToScreenReader(message, priority = 'polite') {
  const liveRegion = document.getElementById(priority === 'assertive' ? 'assertive-announcements' : 'polite-announcements');
  
  if (liveRegion) {
    liveRegion.textContent = message;
    
    // Clear the message after a delay
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }
}

/**
 * Handle image loading errors
 */
function handleImageError(img) {
  const fallback = document.createElement('div');
  fallback.className = 'flex items-center justify-center h-full bg-gray-200 text-gray-500';
  fallback.innerHTML = `
    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
  `;
  
  img.parentElement.replaceChild(fallback, img);
}

/**
 * Smooth scroll to element
 */
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const headerHeight = document.querySelector('header')?.offsetHeight || 80;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
  
  // Update URL without triggering page reload
  history.pushState(null, null, `#${elementId}`);
}

/**
 * Format numbers for display
 */
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Lazy load images when they come into viewport
 */
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
        
        // Track image load
        trackEvent('image_loaded', {
          image_src: img.src
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px 0px'
  });
  
  images.forEach(img => imageObserver.observe(img));
}

/**
 * Handle app rating display
 */
function updateRatingDisplay(rating, votes) {
  const ratingContainer = document.querySelector('.app-rating');
  if (!ratingContainer) return;
  
  const stars = ratingContainer.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < Math.floor(rating)) {
      star.classList.add('filled');
      star.classList.remove('empty');
    } else {
      star.classList.add('empty');
      star.classList.remove('filled');
    }
  });
  
  const ratingText = ratingContainer.querySelector('.rating-text');
  if (ratingText) {
    ratingText.textContent = `${rating} (${formatNumber(votes)} votes)`;
  }
}

/**
 * Handle app meta information display
 */
function updateAppMeta(appData) {
  const metaItems = document.querySelectorAll('.app-meta-item');
  
  metaItems.forEach(item => {
    const type = item.dataset.type;
    const valueElement = item.querySelector('.meta-value');
    
    if (valueElement && appData[type]) {
      valueElement.textContent = appData[type];
    }
  });
}

/**
 * Initialize error handling
 */
function initializeErrorHandling() {
  window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno
    });
  });
  
  window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    trackEvent('promise_rejection', {
      reason: e.reason?.toString() || 'Unknown'
    });
  });
}

/**
 * Performance monitoring
 */
function initializePerformanceMonitoring() {
  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => trackEvent('web_vital_cls', { value: metric.value }));
      getFID(metric => trackEvent('web_vital_fid', { value: metric.value }));
      getFCP(metric => trackEvent('web_vital_fcp', { value: metric.value }));
      getLCP(metric => trackEvent('web_vital_lcp', { value: metric.value }));
      getTTFB(metric => trackEvent('web_vital_ttfb', { value: metric.value }));
    });
  }
  
  // Track page load time
  window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    trackEvent('page_load_time', { milliseconds: loadTime });
  });
}

/**
 * Initialize theme handling
 */
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      trackEvent('theme_toggle', { theme: isDark ? 'dark' : 'light' });
      announceToScreenReader(`Switched to ${isDark ? 'dark' : 'light'} mode`);
    });
  }
}

/**
 * Initialize search functionality
 */
function initializeSearch() {
  const searchButton = document.getElementById('search-button');
  
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      trackEvent('search_button_click');
    });
  }
}

/**
 * Handle mobile menu functionality
 */
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        mobileMenu.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
      
      trackEvent('mobile_menu_toggle', { action: isOpen ? 'close' : 'open' });
    });
  }
}

/**
 * Initialize all components
 */
function initializeApp() {
  initializeErrorHandling();
  initializePerformanceMonitoring();
  initializeLazyLoading();
  initializeTheme();
  initializeSearch();
  initializeMobileMenu();
  
  // Mark app as fully initialized
  document.body.classList.add('app-initialized');
  
  console.log('DexAPK App fully initialized');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export functions for global access if needed
window.DexAPK = {
  trackEvent,
  announceToScreenReader,
  scrollToElement,
  formatNumber
};