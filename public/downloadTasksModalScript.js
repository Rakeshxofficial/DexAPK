// Global variables
let tasks = [];
let completedTasks = [];
let originalDownloadUrl = '';
let currentAppSlug = '';

// DOM elements
let modal;
let closeBtn;
let tasksList;
let progressBar;
let progressText;
let downloadNowBtn;

// Initialize when the component is loaded
function initializeModal() {
  console.log('Initializing download tasks modal');
  
  // Get DOM elements
  modal = document.getElementById('download-tasks-modal');
  closeBtn = document.getElementById('close-download-tasks');
  tasksList = document.getElementById('download-tasks-list');
  progressBar = document.getElementById('tasks-progress-bar');
  progressText = document.getElementById('tasks-progress-text');
  downloadNowBtn = document.getElementById('download-now-btn');
  
  // Get app slug from hidden input
  const slugInput = document.getElementById('modal-app-slug');
  currentAppSlug = slugInput ? slugInput.value : '';
  console.log('Modal initialized with app slug:', currentAppSlug);
  
  // Set up event listeners
  setupEventListeners();
}

// Function to open the download tasks modal with a specific app slug
window.openDownloadTasksModal = async function(appSlug) {
  if (!appSlug) return;
  
  // Update current app slug
  currentAppSlug = appSlug;
  
  // Update the hidden input value
  const slugInput = document.getElementById('modal-app-slug');
  if (slugInput) {
    slugInput.value = appSlug;
  }
  
  // Get the download button URL
  const downloadBtn = document.getElementById('download-button');
  if (downloadBtn) {
    originalDownloadUrl = downloadBtn.getAttribute('href') || '#';
  }
  
  // Reset tasks state
  tasks = [];
  completedTasks = [];
  
  // Reset download button state
  if (downloadNowBtn) {
    requestAnimationFrame(() => {
      downloadNowBtn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-400', 'dark:text-gray-500', 'cursor-not-allowed');
      downloadNowBtn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
    });
    downloadNowBtn.disabled = true;
    
    // Remove any existing click handlers
    downloadNowBtn.removeEventListener('click', directDownload);
  }
  
  // Show loading state
  if (tasksList) {
    tasksList.innerHTML = `
      <div class="flex items-center justify-center py-8">
        <div class="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    `;
  }
  
  // Load tasks from the server
  try {
    console.log('Fetching app details for slug:', appSlug);
    
    // Get app details and tasks using fetch API instead of direct imports
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase credentials not available');
      enableDirectDownload();
      return;
    }
    
    // First get the app by slug
    const appResponse = await fetch(`${supabaseUrl}/rest/v1/apps?slug=eq.${appSlug}&select=*`, {
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    });
    
    if (!appResponse.ok) {
      console.error('Failed to fetch app:', appResponse.status);
      enableDirectDownload();
      return;
    }
    
    const appData = await appResponse.json();
    const app = appData[0];
    
    if (!app) {
      console.error('App not found:', appSlug);
      enableDirectDownload();
      return;
    }
    
    console.log('Found app:', app.name);
    
    // Then get tasks for this app
    const tasksResponse = await fetch(
      `${supabaseUrl}/rest/v1/app_download_tasks?app_id=eq.${app.id}&is_active=eq.true&select=id,app_id,is_active,download_tasks(*)`, {
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    });
    
    if (!tasksResponse.ok) {
      console.error('Failed to fetch tasks:', tasksResponse.status);
      enableDirectDownload();
      return;
    }
    
    const appTasks = await tasksResponse.json();
    console.log('Download tasks found:', appTasks);
    
    // If no tasks, enable direct download
    if (!appTasks || appTasks.length === 0) {
      console.log('No tasks found, enabling direct download');
      enableDirectDownload();
      return;
    }
    
    // Process tasks
    tasks = appTasks
      .filter(item => item && item.download_tasks)
      .map(item => item.download_tasks);
    
    console.log('Processed tasks:', tasks);
    
    // Render tasks
    renderTasks();
    
    // Update progress
    updateProgress(completedTasks.length, tasks.length);
    
  } catch (error) {
    console.error('Error loading download tasks:', error);
    enableDirectDownload();
  }
};

// Set up event listeners
function setupEventListeners() {
  // Close modal handler
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDownloadTasksModal);
  }
  
  // Close on background click
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeDownloadTasksModal();
      }
    });
  }
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeDownloadTasksModal();
    }
  });
}

// Function to enable direct download without tasks
function enableDirectDownload() {
  if (tasksList) {
    tasksList.innerHTML = `
      <p class="text-gray-600 dark:text-gray-400 py-4">
        No tasks required. Click the button below to download.
      </p>
    `;
  }
  
  // Update progress
  updateProgress(1, 1);
  
  // Enable download button
  enableDownload();
}

// Function to render tasks
function renderTasks() {
  if (!tasksList || !tasks) return;
  
  console.log('Rendering tasks:', tasks);
  
  if (tasks.length === 0) {
    // If no tasks, enable direct download
    enableDirectDownload();
    return;
  }
  
  const tasksHtml = tasks.filter(Boolean).map((task, index) => {
    const isCompleted = completedTasks.includes(task.id);
    const taskTypeClass = getTaskTypeClass(task.task_type);
    const taskIcon = getTaskTypeIcon(task.task_type);
    
    return `
      <button
        class="task-button w-full py-4 px-6 rounded-xl flex items-center justify-between ${taskTypeClass} ${isCompleted ? 'opacity-75' : ''}"
        data-task-id="${task.id}"
        data-task-url="${task.task_url}"
        data-task-completed="${isCompleted}"
        ${isCompleted ? 'disabled' : ''}
      >
        <div class="flex items-center">
          ${taskIcon}
          <span class="ml-3 font-medium text-white">${task.name}</span>
        </div>
        ${isCompleted ? '<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : ''}
      </button>
    `;
  }).join('');
  
  tasksList.innerHTML = tasksHtml;
  
  // Add event listeners to task buttons
  document.querySelectorAll('.task-button').forEach(button => {
    if (!button.getAttribute('disabled')) {
      button.addEventListener('click', handleTaskClick);
    }
  });
}

// Function to handle task click
function handleTaskClick(e) {
  const button = e.currentTarget;
  const taskId = button.dataset.taskId;
  const taskUrl = button.dataset.taskUrl;
  
  if (!taskId || !taskUrl) {
    console.error('Task ID or URL missing:', { taskId, taskUrl });
    return;
  }

  // Open task URL in new tab
  window.open(taskUrl, '_blank', 'noopener,noreferrer');

  // Mark task as completed
  if (taskId && !completedTasks.includes(taskId)) {
    completedTasks.push(taskId);
    button.dataset.taskCompleted = 'true';
    button.setAttribute('disabled', 'true');
  
    // Add completed styles
    requestAnimationFrame(() => {
      button.classList.add('opacity-75');
    });
    button.innerHTML = button.innerHTML.replace(/<\/div>(?!.*<\/div>)/s, '</div><svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>');
  
    // Update progress
    updateProgress(completedTasks.length, tasks.length);
  
    // Check if all tasks are completed and enable download button
    if (completedTasks.length >= tasks.length) {
      enableDownload();
    }
  }
}

// Function to update progress
function updateProgress(completed, total) {
  if (!progressBar || !progressText) return;

  requestAnimationFrame(() => {
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    progressBar.style.width = `${Math.min(percentage, 100)}%`;
    progressText.textContent = `${completed} of ${total} tasks completed`;
  });
  
  // Announce to screen readers
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = `${completed} of ${total} tasks completed. ${completed === total ? 'All tasks completed. Download now available.' : ''}`;
  
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
}

// Function to enable download
function enableDownload() {
  if (!downloadNowBtn) return;
  
  // Use a single requestAnimationFrame for all DOM changes
  requestAnimationFrame(() => {
    downloadNowBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-400', 'dark:text-gray-500', 'cursor-not-allowed');
    downloadNowBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'transform', 'hover:-translate-y-1');
    downloadNowBtn.disabled = false;
    
    // Add click handler
    downloadNowBtn.addEventListener('click', directDownload, { once: true });
  });
}

// Function to perform direct download
function directDownload() {
  // Close the modal
  closeDownloadTasksModal();

  // Redirect to the original download URL
  if (originalDownloadUrl && originalDownloadUrl !== '#') {
    // Open in a new tab with proper attributes
    window.open(originalDownloadUrl, '_blank');
    console.log('Opening download URL in new tab:', originalDownloadUrl);
  } else {
    console.warn('No valid download URL found');
  }
}

// Function to close the modal
function closeDownloadTasksModal() {
  if (!modal) {
    modal = document.getElementById('download-tasks-modal');
    if (!modal) return;
  }
  
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  
  // Return focus to the download button
  const downloadBtn = document.getElementById('download-button');
  downloadBtn?.focus();
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize if the modal exists
  if (document.getElementById('download-tasks-modal')) {
    initializeModal();
  }
});

// Helper functions for task type styling
function getTaskTypeClass(taskType) {
  switch (taskType?.toLowerCase()) {
    case 'telegram':
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
    case 'instagram':
      return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white';
    case 'youtube':
      return 'bg-gradient-to-r from-red-500 to-red-600 text-white';
    case 'twitter':
    case 'x':
      return 'bg-gradient-to-r from-gray-700 to-gray-900 text-white';
    case 'facebook':
      return 'bg-gradient-to-r from-blue-600 to-blue-800 text-white';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  }
}

function getTaskTypeIcon(taskType) {
  switch (taskType?.toLowerCase()) {
    case 'telegram':
      return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.176-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.832z"/>
      </svg>`;
    case 'instagram':
      return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>`;
    case 'youtube':
      return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>`;
    case 'twitter':
    case 'x':
      return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>`;
    case 'facebook':
      return `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>`;
    default:
      return `<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`;
  }
}