import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://esqsxkhlwkhwgxxsbczc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcXN4a2hsd2tod2d4eHNiY3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTY5NjAsImV4cCI6MjA2NzEzMjk2MH0.7CNrL08UtpwKdjAin_b-dS4viOhwEOoQZnYwwe4WjCc";
const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
async function getAllApps() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error fetching apps:", error);
      return getFallbackApps();
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAllApps:", error);
    return getFallbackApps();
  }
}
async function getFeaturedApps(limit = 10) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).eq("is_featured", true).order("created_at", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching featured apps:", error);
      return getFallbackApps().slice(0, limit);
    }
    return data || [];
  } catch (error) {
    console.error("Error in getFeaturedApps:", error);
    return getFallbackApps().slice(0, limit);
  }
}
async function getAppBySlug(slug) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("slug", slug).eq("is_active", true).single();
    if (error) {
      console.error("Supabase error fetching app by slug:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error in getAppBySlug:", error);
    return null;
  }
}
function getFallbackApps() {
  return [
    {
      id: "1",
      slug: "chatgpt-premium",
      name: "ChatGPT Premium",
      version: "1.2024.052",
      size: "45.2 MB",
      category: "Productivity",
      publisher: "OpenAI",
      requirements: "Android 7.0+",
      price: "Free",
      platform: "Google Play",
      last_updated: "Jan 15, 2025",
      rating: 4.8,
      votes: 15420,
      description: "ChatGPT Premium MOD APK with unlimited access to GPT-4, no restrictions, and premium features unlocked.",
      icon: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=96&h=96",
      screenshots: [],
      download_url: "#",
      features: ["Unlimited GPT-4 Access", "No Rate Limits", "Premium Features Unlocked"],
      mod_info: ["Premium Subscription Unlocked", "No Ads", "Unlimited Usage"],
      is_featured: true,
      is_active: true,
      created_at: "2025-01-15T00:00:00Z",
      updated_at: "2025-01-15T00:00:00Z"
    },
    {
      id: "2",
      slug: "spotify-premium",
      name: "Spotify Premium",
      version: "8.9.12.487",
      size: "32.1 MB",
      category: "Music",
      publisher: "Spotify AB",
      requirements: "Android 5.0+",
      price: "Free",
      platform: "Google Play",
      last_updated: "Jan 12, 2025",
      rating: 4.7,
      votes: 28350,
      description: "Spotify Premium MOD APK with unlimited skips, no ads, and offline downloads.",
      icon: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=96&h=96",
      screenshots: [],
      download_url: "#",
      features: ["Unlimited Skips", "No Ads", "Offline Downloads", "High Quality Audio"],
      mod_info: ["Premium Subscription Unlocked", "Ad-Free Experience", "Unlimited Downloads"],
      is_featured: true,
      is_active: true,
      created_at: "2025-01-12T00:00:00Z",
      updated_at: "2025-01-12T00:00:00Z"
    }
  ];
}
async function getAppsByCategory(category, limit = 20) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).eq("category", category).order("rating", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching apps by category:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAppsByCategory:", error);
    return [];
  }
}
async function getRelatedApps(currentSlug, category, limit = 4) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).eq("category", category).neq("slug", currentSlug).order("rating", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching related apps:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getRelatedApps:", error);
    return [];
  }
}
async function searchApps(query, limit = 20) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).or(`name.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`).order("rating", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error searching apps:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in searchApps:", error);
    return [];
  }
}
async function createApp(appData) {
  try {
    console.log("Creating app with data:", appData);
    const completeAppData = {
      ...appData,
      // Ensure SEO fields are properly set (null if empty string)
      seo_title: appData.seo_title || null,
      seo_description: appData.seo_description || null,
      seo_featured_image: appData.seo_featured_image || null,
      seo_keywords: appData.seo_keywords || null,
      seo_canonical_url: appData.seo_canonical_url || null,
      // Custom H1 title - ensure it's properly handled
      custom_h1_title: appData.custom_h1_title ? appData.custom_h1_title.trim() : null,
      // Ensure article content is included
      article_content: appData.article_content || null,
      // Ensure disable_download_page is included
      disable_download_page: appData.disable_download_page || false
    };
    const { data, error } = await supabase.from("apps").insert([completeAppData]).select().single();
    if (error) {
      console.error("Supabase error creating app:", error);
      return { success: false, error: error.message };
    }
    console.log("App created successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in createApp:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function updateApp(slug, updates) {
  try {
    console.log("Updating app with slug:", slug);
    console.log("Update data:", updates);
    const { data: existingApp, error: fetchError } = await supabase.from("apps").select("*").eq("slug", slug).single();
    if (fetchError) {
      console.error("Error fetching existing app:", fetchError);
      return { success: false, error: `App not found: ${fetchError.message}` };
    }
    console.log("Existing app found:", existingApp);
    const completeUpdates = {
      ...updates,
      // Ensure SEO fields are properly set (null if empty string)
      seo_title: updates.seo_title || null,
      seo_description: updates.seo_description || null,
      seo_featured_image: updates.seo_featured_image || null,
      seo_keywords: updates.seo_keywords || null,
      seo_canonical_url: updates.seo_canonical_url || null,
      // Custom H1 title - ensure it's properly handled
      custom_h1_title: updates.custom_h1_title ? updates.custom_h1_title.trim() : null,
      // Ensure article content is included
      article_content: updates.article_content || null,
      // Ensure disable_download_page is included
      disable_download_page: updates.disable_download_page !== void 0 ? updates.disable_download_page : false,
      // Update the updated_at timestamp
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Complete update data with all fields:", completeUpdates);
    const { data, error } = await supabase.from("apps").update(completeUpdates).eq("slug", slug).select().single();
    if (error) {
      console.error("Supabase error updating app:", error);
      return { success: false, error: error.message };
    }
    console.log("App updated successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in updateApp:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function deleteApp(slug) {
  try {
    console.log("Attempting to delete app with slug:", slug);
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data: existingApp, error: fetchError } = await supabase.from("apps").select("id").eq("slug", slug).single();
    if (fetchError) {
      console.error("Error fetching app before deletion:", fetchError);
      return { success: false, error: `App not found: ${fetchError.message}` };
    }
    if (!existingApp) {
      console.error("App not found for deletion:", slug);
      return { success: false, error: "App not found" };
    }
    console.log("Found app to delete:", existingApp.id);
    const { error } = await supabase.from("apps").delete().eq("slug", slug);
    if (error) {
      console.error("Supabase error deleting app with slug", slug, ":", error);
      return { success: false, error: error.message };
    }
    console.log("App deleted successfully:", slug);
    return { success: true };
  } catch (error) {
    console.error("Error in deleteApp for slug", slug, ":", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function getAllDownloadTasks() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("download_tasks").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error fetching download tasks:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAllDownloadTasks:", error);
    return [];
  }
}
async function getActiveDownloadTasks() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("download_tasks").select("*").eq("is_active", true).order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error fetching active download tasks:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getActiveDownloadTasks:", error);
    return [];
  }
}
async function getDownloadTaskById(id) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("download_tasks").select("*").eq("id", id).single();
    if (error) {
      console.error("Supabase error fetching download task by id:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error in getDownloadTaskById:", error);
    return null;
  }
}
async function createDownloadTask(taskData) {
  try {
    console.log("Creating download task with data:", taskData);
    const { data, error } = await supabase.from("download_tasks").insert([taskData]).select().single();
    if (error) {
      console.error("Supabase error creating download task:", error);
      return { success: false, error: error.message };
    }
    console.log("Download task created successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in createDownloadTask:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function updateDownloadTask(id, updates) {
  try {
    console.log("Updating download task with id:", id);
    console.log("Update data:", updates);
    const { data, error } = await supabase.from("download_tasks").update(updates).eq("id", id).select().single();
    if (error) {
      console.error("Supabase error updating download task:", error);
      return { success: false, error: error.message };
    }
    console.log("Download task updated successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in updateDownloadTask:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function deleteDownloadTask(id) {
  try {
    console.log("Attempting to delete download task with id:", id);
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data: existingTask, error: fetchError } = await supabase.from("download_tasks").select("id").eq("id", id).single();
    if (fetchError) {
      console.error("Error fetching task before deletion:", fetchError);
      return { success: false, error: `Task not found: ${fetchError.message}` };
    }
    if (!existingTask) {
      console.error("Task not found for deletion:", id);
      return { success: false, error: "Task not found" };
    }
    console.log("Found task to delete:", existingTask.id);
    const { error: deleteAssociationsError } = await supabase.from("app_download_tasks").delete().eq("task_id", id);
    if (deleteAssociationsError) {
      console.error("Error deleting task associations:", deleteAssociationsError);
      return { success: false, error: `Failed to delete task associations: ${deleteAssociationsError.message}` };
    }
    const { error } = await supabase.from("download_tasks").delete().eq("id", id);
    if (error) {
      console.error("Supabase error deleting download task with id", id, ":", error);
      return { success: false, error: error.message };
    }
    console.log("Download task deleted successfully:", id);
    return { success: true };
  } catch (error) {
    console.error("Error in deleteDownloadTask for id", id, ":", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function getAppDownloadTasks(appId) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("app_download_tasks").select(`
        id,
        is_active,
        download_tasks (*)
      `).eq("app_id", appId).eq("is_active", true);
    if (error) {
      console.error("Supabase error fetching app download tasks:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAppDownloadTasks:", error);
    return [];
  }
}
async function getAppDownloadTasksById(appId) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("app_download_tasks").select(`
        id,
        is_active,
        download_tasks (*)
      `).eq("app_id", appId).eq("is_active", true);
    if (error) {
      console.error("Supabase error fetching app download tasks by ID:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAppDownloadTasksById:", error);
    return [];
  }
}
async function getAppDownloadTasksBySlug(slug) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    console.log("Getting app download tasks by slug:", slug, "Time:", (/* @__PURE__ */ new Date()).toISOString());
    const { data: app, error: appError } = await supabase.from("apps").select("id").eq("slug", slug).single();
    if (appError || !app) return [];
    console.log("Found app with slug:", slug, "ID:", app.id);
    console.log("App details:", app);
    if (!app.id) {
      console.error("Invalid app ID for slug:", slug);
      return [];
    }
    const { data, error } = await supabase.from("app_download_tasks").select(`
        id,
        app_id,
        is_active,
        download_tasks (*)
      `).eq("app_id", app.id).eq("is_active", true);
    if (error) {
      console.error("Error fetching download tasks:", error);
      return [];
    }
    console.log("Found download tasks for app:", data?.length || 0);
    if (data && data.length > 0) {
      data.forEach((item, index) => {
        console.log(`Task ${index + 1}:`, {
          id: item.id,
          app_id: item.app_id,
          is_active: item.is_active,
          task: item.download_tasks ? {
            id: item.download_tasks.id,
            name: item.download_tasks.name,
            task_type: item.download_tasks.task_type,
            is_active: item.download_tasks.is_active
          } : null
        });
      });
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAppDownloadTasksBySlug:", error);
    return [];
  }
}
async function assignTaskToApp(appId, taskId, deactivateExisting = false) {
  try {
    console.log("Assigning task to app:", { appId, taskId });
    const { data: existingAssignment, error: checkAssignmentError } = await supabase.from("app_download_tasks").select("*").eq("app_id", appId).eq("task_id", taskId);
    if (checkAssignmentError) return { success: false, error: checkAssignmentError.message };
    if (existingAssignment && existingAssignment.length > 0) {
      const { data: data2, error: error2 } = await supabase.from("app_download_tasks").update({ is_active: true }).eq("id", existingAssignment[0].id).select().single();
      console.log("Existing task assignment activated:", data2);
      return { success: true, data: data2 };
    }
    const { data, error } = await supabase.from("app_download_tasks").insert([{
      app_id: appId,
      task_id: taskId,
      is_active: true
    }]).select().single();
    if (error) return { success: false, error: error.message };
    console.log("Task assigned to app successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in assignTaskToApp:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function removeTaskFromApp(appId, taskId) {
  try {
    console.log("Removing task from app:", { appId, taskId });
    const { data, error } = await supabase.from("app_download_tasks").update({ is_active: false }).eq("app_id", appId).eq("task_id", taskId).select();
    if (error) {
      console.error("Supabase error removing task from app:", error);
      return { success: false, error: error.message };
    }
    console.log("Task removed from app successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in removeTaskFromApp:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function removeAllTasksFromApp(appId) {
  try {
    console.log("Removing all tasks from app:", appId);
    const { data: existingTasks, error: checkError } = await supabase.from("app_download_tasks").select("*").eq("app_id", appId).eq("is_active", true);
    if (checkError) {
      console.error("Supabase error checking existing tasks:", checkError);
      return { success: false, error: checkError.message };
    }
    if (existingTasks && existingTasks.length > 0) {
      for (const task of existingTasks) {
        const { error: updateError } = await supabase.from("app_download_tasks").update({ is_active: false }).eq("id", task.id);
        if (updateError) {
          console.error("Supabase error deactivating existing task:", updateError);
          return { success: false, error: updateError.message };
        }
      }
      return { success: true, message: `Removed ${existingTasks.length} tasks from app` };
    } else {
      return { success: true, message: "No active tasks to remove" };
    }
  } catch (error) {
    console.error("Error in removeAllTasksFromApp:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function getAppVersions(appId, limit = 3) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("app_versions").select("*").eq("app_id", appId).eq("is_active", true).order("release_date", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching app versions:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAppVersions:", error);
    return [];
  }
}
async function getAppVersionsBySlug(slug, limit = 3) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data: app, error: appError } = await supabase.from("apps").select("id").eq("slug", slug).single();
    if (appError || !app) {
      console.error("Error fetching app by slug:", appError);
      return [];
    }
    const { data, error } = await supabase.from("app_versions").select("*").eq("app_id", app.id).eq("is_active", true).order("release_date", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching app versions:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAppVersionsBySlug:", error);
    return [];
  }
}
async function createAppVersion(versionData) {
  try {
    console.log("Creating app version with data:", versionData);
    const { data, error } = await supabase.from("app_versions").insert([versionData]).select().single();
    if (error) {
      console.error("Supabase error creating app version:", error);
      return { success: false, error: error.message };
    }
    console.log("App version created successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in createAppVersion:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function updateAppVersion(id, updates) {
  try {
    console.log("Updating app version with id:", id);
    console.log("Update data:", updates);
    const { data, error } = await supabase.from("app_versions").update(updates).eq("id", id).select().single();
    if (error) {
      console.error("Supabase error updating app version:", error);
      return { success: false, error: error.message };
    }
    console.log("App version updated successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in updateAppVersion:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function deleteAppVersion(id) {
  try {
    if (!id || id === "null" || id === "undefined" || id === "") {
      console.error("Invalid app version ID for deletion:", id);
      return { success: false, error: "Invalid version ID" };
    }
    const { error } = await supabase.from("app_versions").delete().eq("id", id);
    if (error) {
      console.error("Supabase error deleting app version");
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (error) {
    console.error("Error in deleteAppVersion");
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function getAllContactMessages() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error fetching contact messages:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAllContactMessages:", error);
    return [];
  }
}
async function getUnreadContactMessages() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("contact_messages").select("*").eq("is_read", false).order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error fetching unread contact messages:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getUnreadContactMessages:", error);
    return [];
  }
}
async function markMessageAsRead(messageId) {
  try {
    console.log("Marking message as read:", messageId);
    const { data, error } = await supabase.from("contact_messages").update({ is_read: true }).eq("id", messageId).select().single();
    if (error) {
      console.error("Supabase error marking message as read:", error);
      return { success: false, error: error.message };
    }
    console.log("Message marked as read successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in markMessageAsRead:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function deleteContactMessage(messageId) {
  try {
    console.log("Deleting contact message:", messageId);
    const { error } = await supabase.from("contact_messages").delete().eq("id", messageId);
    if (error) {
      console.error("Supabase error deleting contact message:", error);
      return { success: false, error: error.message };
    }
    console.log("Contact message deleted successfully");
    return { success: true };
  } catch (error) {
    console.error("Error in deleteContactMessage:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function getAllBlogPosts() {
  try {
    if (globalThis._cachedBlogPosts && globalThis._blogCacheTimestamp && Date.now() - globalThis._blogCacheTimestamp < 6e4) {
      return globalThis._cachedBlogPosts;
    }
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("is_published", true).order("published_date", { ascending: false });
    if (error) {
      console.error("Supabase error fetching blog posts:", error);
      return [];
    }
    globalThis._cachedBlogPosts = data || [];
    globalThis._blogCacheTimestamp = Date.now();
    return data || [];
  } catch (error) {
    console.error("Error in getAllBlogPosts:", error);
    return [];
  }
}
async function getAllBlogCategories() {
  try {
    const { data, error } = await supabase.from("blog_posts").select("category").eq("is_published", true);
    if (error) {
      console.error("Error fetching blog categories:", error);
      return [];
    }
    const categories = [...new Set(data?.map((post) => post.category).filter(Boolean))];
    return categories;
  } catch (error) {
    console.error("Error in getAllBlogCategories:", error);
    return [];
  }
}
async function getAllBlogTags() {
  try {
    const { data, error } = await supabase.from("blog_posts").select("tags").eq("is_published", true);
    if (error) {
      console.error("Error fetching blog tags:", error);
      return [];
    }
    const allTags = [];
    data?.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        allTags.push(...post.tags);
      }
    });
    return [...new Set(allTags)].filter(Boolean);
  } catch (error) {
    console.error("Error in getAllBlogTags:", error);
    return [];
  }
}
async function getAllPublishers() {
  try {
    const { data, error } = await supabase.from("apps").select("publisher").eq("is_active", true);
    if (error) {
      console.error("Error fetching publishers:", error);
      return [];
    }
    const uniquePublishers = [...new Set(data?.map((app) => app.publisher).filter(Boolean))];
    return uniquePublishers.map((publisher) => ({
      name: publisher,
      slug: publisher.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      appCount: data?.filter((app) => app.publisher === publisher).length || 0
    }));
  } catch (error) {
    console.error("Error in getAllPublishers:", error);
    return [];
  }
}
async function getFeaturedBlogPosts(limit = 5) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("is_published", true).eq("is_featured", true).order("published_date", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching featured blog posts:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getFeaturedBlogPosts:", error);
    return [];
  }
}
async function getBlogPostBySlug(slug) {
  try {
    const cacheKey = `blog_${slug}`;
    if (globalThis[cacheKey] && globalThis[`${cacheKey}_timestamp`] && Date.now() - globalThis[`${cacheKey}_timestamp`] < 6e4) {
      return globalThis[cacheKey];
    }
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("is_published", true).single();
    if (error) {
      console.error("Supabase error fetching blog post by slug:", error);
      return null;
    }
    globalThis[cacheKey] = data;
    globalThis[`${cacheKey}_timestamp`] = Date.now();
    return data;
  } catch (error) {
    console.error("Error in getBlogPostBySlug:", error);
    return null;
  }
}
async function getBlogPostsByCategory(category, limit = 10) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("is_published", true).eq("category", category).order("published_date", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching blog posts by category:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getBlogPostsByCategory:", error);
    return [];
  }
}
async function getRelatedBlogPosts(currentSlug, category, limit = 3) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("is_published", true).eq("category", category).neq("slug", currentSlug).order("published_date", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching related blog posts:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getRelatedBlogPosts:", error);
    return [];
  }
}
async function createBlogPost(blogData) {
  try {
    console.log("Creating blog post with data:", blogData);
    const { data, error } = await supabase.from("blog_posts").insert([blogData]).select().single();
    if (error) {
      console.error("Supabase error creating blog post:", error);
      return { success: false, error: error.message };
    }
    console.log("Blog post created successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in createBlogPost:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function updateBlogPost(slug, updates) {
  try {
    console.log("Updating blog post with slug:", slug);
    console.log("Update data:", updates);
    const { data, error } = await supabase.from("blog_posts").update(updates).eq("slug", slug).select().single();
    if (error) {
      console.error("Supabase error updating blog post:", error);
      return { success: false, error: error.message };
    }
    console.log("Blog post updated successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error in updateBlogPost:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function deleteBlogPost(slug) {
  try {
    console.log("Attempting to delete blog post with slug:", slug);
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data: existingPost, error: fetchError } = await supabase.from("blog_posts").select("id").eq("slug", slug).single();
    if (fetchError) {
      console.error("Error fetching blog post before deletion:", fetchError);
      return { success: false, error: `Blog post not found: ${fetchError.message}` };
    }
    if (!existingPost) {
      console.error("Blog post not found for deletion:", slug);
      return { success: false, error: "Blog post not found" };
    }
    console.log("Found blog post to delete:", existingPost.id);
    const { error } = await supabase.from("blog_posts").delete().eq("slug", slug);
    if (error) {
      console.error("Supabase error deleting blog post with slug", slug, ":", error);
      return { success: false, error: error.message };
    }
    console.log("Blog post deleted successfully:", slug);
    return { success: true };
  } catch (error) {
    console.error("Error in deleteBlogPost for slug", slug, ":", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
async function getBlogPostsByTag(tag, limit = 20) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("is_published", true).order("published_date", { ascending: false });
    if (error) {
      console.error("Supabase error fetching blog posts by tag:", error);
      return [];
    }
    const filteredPosts = (data || []).filter((post) => {
      if (!post.tags || !Array.isArray(post.tags)) return false;
      return post.tags.some((postTag) => {
        if (!postTag || typeof postTag !== "string") return false;
        const normalizedPostTag = postTag.toLowerCase().trim();
        const normalizedSearchTag = tag.toLowerCase().trim();
        return normalizedPostTag === normalizedSearchTag || normalizedPostTag.includes(normalizedSearchTag) || normalizedSearchTag.includes(normalizedPostTag) || normalizedPostTag.replace(/\s+/g, "-") === normalizedSearchTag || normalizedSearchTag.replace(/\s+/g, "-") === normalizedPostTag;
      });
    });
    console.log(`Found ${filteredPosts.length} posts for tag "${tag}"`);
    return filteredPosts.slice(0, limit);
  } catch (error) {
    console.error("Error in getBlogPostsByTag:", error);
    return [];
  }
}
async function getBlogPostsByPublisher(publisher, limit = 20) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("blog_posts").select("*").eq("is_published", true).eq("author", publisher).order("published_date", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching blog posts by publisher:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getBlogPostsByPublisher:", error);
    return [];
  }
}
async function getAppsByPublisher(publisherName, limit = 50) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).order("created_at", { ascending: false }).limit(limit * 3);
    if (error) {
      console.error("Supabase error fetching apps by publisher:", error);
      return [];
    }
    const filteredApps = data.filter(
      (app) => app.publisher && app.publisher.toLowerCase().trim() === publisherName.toLowerCase().trim()
    ).slice(0, limit);
    return filteredApps || [];
  } catch (error) {
    console.error("Error in getAppsByPublisher:", error);
    return [];
  }
}
async function getAppsByPublisherSlug(publisherSlug, limit = 50) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error fetching apps by publisher slug:", error);
      return [];
    }
    const filteredApps = data.filter((app) => {
      if (!app.publisher || app.publisher === "Unknown") return false;
      const appPublisherSlug = app.publisher.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return appPublisherSlug === publisherSlug;
    }).slice(0, limit);
    return filteredApps || [];
  } catch (error) {
    console.error("Error in getAppsByPublisherSlug:", error);
    return [];
  }
}
async function getPublisherBySlug(slug) {
  try {
    const publishers = await getAllPublishers();
    return publishers.find((publisher) => publisher.slug === slug) || null;
  } catch (error) {
    console.error("Error in getPublisherBySlug:", error);
    return null;
  }
}
async function getAppsWithTasks() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("app_download_tasks").select(`
        id,
        app_id,
        task_id,
        is_active,
        apps (id, name, slug),
        download_tasks (id, name, task_type)
      `).eq("is_active", true);
    if (error) {
      console.error("Supabase error fetching apps with tasks:", error);
      return [];
    }
    const appsWithTasks = {};
    data.forEach((item) => {
      const appId = item.app_id;
      if (!appsWithTasks[appId]) {
        appsWithTasks[appId] = {
          app: item.apps,
          tasks: []
        };
      }
      appsWithTasks[appId].tasks.push({
        id: item.id,
        task: item.download_tasks,
        is_active: item.is_active
      });
    });
    return Object.values(appsWithTasks);
  } catch (error) {
    console.error("Error in getAppsWithTasks:", error);
    return [];
  }
}
async function getAppWithTasks(appId) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data: app, error: appError } = await supabase.from("apps").select("*").eq("id", appId).single();
    if (appError || !app) return null;
    const { data: tasks, error: tasksError } = await supabase.from("app_download_tasks").select(`
        id,
        task_id,
        is_active,
        download_tasks (*)
      `).eq("app_id", appId).eq("is_active", true);
    if (tasksError) return null;
    return {
      app,
      tasks: tasks.map((t) => ({
        id: t.id,
        task: t.download_tasks,
        is_active: t.is_active
      }))
    };
  } catch (error) {
    console.error("Error in getAppWithTasks:", error);
    return null;
  }
}
async function getAppsWithoutActiveTasks() {
  try {
    if (!supabaseUrl || !supabaseAnonKey || !supabase) {
      console.warn("Supabase credentials not available");
      return [];
    }
    const { data: allApps, error: appsError } = await supabase.from("apps").select("*").eq("is_active", true);
    if (appsError) {
      return [];
    }
    const { data: appTaskAssignments, error: tasksError } = await supabase.from("app_download_tasks").select("app_id").eq("is_active", true);
    if (tasksError) {
      return [];
    }
    const appIdsWithTasks = [...new Set(appTaskAssignments.map((item) => item.app_id))];
    const appsWithoutTasks = allApps.filter((app) => !appIdsWithTasks.includes(app.id) || true);
    return appsWithoutTasks || [];
  } catch (error) {
    console.error("Error in getAppsWithoutActiveTasks:", error);
    return [];
  }
}

export { assignTaskToApp, createApp, createAppVersion, createBlogPost, createDownloadTask, deleteApp, deleteAppVersion, deleteBlogPost, deleteContactMessage, deleteDownloadTask, getActiveDownloadTasks, getAllApps, getAllBlogCategories, getAllBlogPosts, getAllBlogTags, getAllContactMessages, getAllDownloadTasks, getAllPublishers, getAppBySlug, getAppDownloadTasks, getAppDownloadTasksById, getAppDownloadTasksBySlug, getAppVersions, getAppVersionsBySlug, getAppWithTasks, getAppsByCategory, getAppsByPublisher, getAppsByPublisherSlug, getAppsWithTasks, getAppsWithoutActiveTasks, getBlogPostBySlug, getBlogPostsByCategory, getBlogPostsByPublisher, getBlogPostsByTag, getDownloadTaskById, getFeaturedApps, getFeaturedBlogPosts, getPublisherBySlug, getRelatedApps, getRelatedBlogPosts, getUnreadContactMessages, markMessageAsRead, removeAllTasksFromApp, removeTaskFromApp, searchApps, supabase, updateApp, updateAppVersion, updateBlogPost, updateDownloadTask };
