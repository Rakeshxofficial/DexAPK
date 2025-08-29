// App Details Page JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeAppDetails();
});

function initializeAppDetails() {
  // Initialize rating stars
  initializeRatingStars();
  
  // Initialize screenshot gallery
  initializeScreenshots();
  
  // Initialize download button
  initializeDownloadButton();
  
  // Initialize sidebar interactions
  initializeSidebarInteractions();
  
  // Initialize accessibility features
  initializeAccessibility();
}

function initializeRatingStars() {
  const ratingContainer = document.querySelector('.rating-stars');
  if (!ratingContainer) return;
  
  const stars = ratingContainer.querySelectorAll('.rating-star');
  const ratingValue = parseFloat(ratingContainer.dataset.rating || '0');
  
  stars.forEach((star, index) => {
    if (index < Math.floor(ratingValue)) {
      star.classList.add('filled');
      star.classList.remove('empty');
    } else {
      star.classList.add('empty');
      star.classList.remove('filled');
    }
  });
}

function initializeScreenshots() {
  const screenshots = document.querySelectorAll('.screenshot-image');
  
  screenshots.forEach((screenshot, index) => {
    screenshot.addEventListener('click', function() {
      openScreenshotModal(this.src, this.alt, index);
    });
    
    // Add keyboard support
    screenshot.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openScreenshotModal(this.src, this.alt, index);
      }
    });
  });
}

function openScreenshotModal(src, alt, index) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('screenshot-modal');
  if (!modal) {
    modal = createScreenshotModal();
  }
  
  const modalImage = modal.querySelector('#modal-screenshot');
  const modalAlt = modal.querySelector('#modal-alt');
  const modalIndex = modal.querySelector('#modal-index');
  
  if (modalImage) modalImage.src = src;
  if (modalAlt) modalAlt.textContent = alt;
  if (modalIndex) modalIndex.textContent = `${index + 1}`;
  
  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus close button for accessibility
  const closeBtn = modal.querySelector('#close-screenshot-modal');
  if (closeBtn) closeBtn.focus();
}

function createScreenshotModal() {
  const modal = document.createElement('div');
  modal.id = 'screenshot-modal';
  modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm hidden items-center justify-center z-50';
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'modal-alt');
  
  modal.innerHTML = `
    <div class="relative max-w-4xl max-h-full p-4">
      <button
        id="close-screenshot-modal"
        class="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-200"
        aria-label="Close screenshot"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <img
        id="modal-screenshot"
        class="max-w-full max-h-full object-contain rounded-lg"
        alt=""
      />
      <div class="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg">
        <span id="modal-alt">Screenshot</span>
        <span class="ml-2">(#<span id="modal-index">1</span>)</span>
      </div>
    </div>
  `;
  
  // Add event listeners
  const closeBtn = modal.querySelector('#close-screenshot-modal');
  closeBtn.addEventListener('click', closeScreenshotModal);
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeScreenshotModal();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeScreenshotModal();
    }
  });
  
  document.body.appendChild(modal);
  return modal;
}

function closeScreenshotModal() {
  const modal = document.getElementById('screenshot-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function initializeDownloadButton() {
  const downloadBtn = document.getElementById('download-button');
  if (!downloadBtn) return;
  
  // Add click tracking
  downloadBtn.addEventListener('click', function(e) {
    // Track download click for analytics
    trackDownloadClick(this.href);
    
    // Add visual feedback
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
}

function initializeSidebarInteractions() {
  // Initialize trending apps hover effects
  const trendingApps = document.querySelectorAll('.trending-app-item');
  trendingApps.forEach(app => {
    app.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(4px)';
    });
    
    app.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Initialize category links
  const categoryLinks = document.querySelectorAll('.category-link');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackCategoryClick(this.textContent, this.href);
    });
  });
}

function initializeAccessibility() {
  // Add skip links for keyboard navigation
  addSkipLinks();
  
  // Enhance focus management
  enhanceFocusManagement();
  
  // Add screen reader announcements
  addScreenReaderSupport();
}

function addSkipLinks() {
  const skipLinks = document.createElement('div');
  skipLinks.className = 'sr-only focus-within:not-sr-only';
  skipLinks.innerHTML = `
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <a href="#sidebar-content" class="skip-link">Skip to sidebar</a>
  `;
  
  document.body.insertBefore(skipLinks, document.body.firstChild);
}

function enhanceFocusManagement() {
  // Trap focus in modals
  document.addEventListener('keydown', function(e) {
    const modal = document.querySelector('.modal:not(.hidden)');
    if (!modal) return;
    
    if (e.key === 'Tab') {
      trapFocus(e, modal);
    }
  });
}

function trapFocus(e, container) {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  if (e.shiftKey) {
    if (document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
  } else {
    if (document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}

function addScreenReaderSupport() {
  // Announce dynamic content changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Announce new content to screen readers
        announceToScreenReader('Content updated');
      }
    });
  });
  
  // Observe sidebar for dynamic content changes
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    observer.observe(sidebar, { childList: true, subtree: true });
  }
}

function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Analytics tracking functions
function trackDownloadClick(url) {
  // Track download clicks for analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download_click', {
      'download_url': url,
      'page_location': window.location.href
    });
  }
}

function trackCategoryClick(categoryName, url) {
  // Track category clicks for analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'category_click', {
      'category_name': categoryName,
      'click_url': url,
      'page_location': window.location.href
    });
  }
}

// Utility functions
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
  }
}

// Export functions for global access if needed
window.AppDetails = {
  openScreenshotModal,
  closeScreenshotModal,
  trackDownloadClick,
  trackCategoryClick,
  announceToScreenReader
};