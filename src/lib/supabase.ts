import { createClient } from '@supabase/supabase-js';

// Get environment variables - prioritize runtime environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Validate environment variables and create client
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    url: supabaseUrl ? 'Set' : 'Missing',
    key: supabaseAnonKey ? 'Set' : 'Missing'
  });
}

// Always create the real Supabase client, even if env vars are empty
// This allows the client to work when env vars are available at runtime
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);

// App-related database functions
export async function getAllApps() {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('apps')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching apps:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAllApps:', error);
    return [];
  }
}

export async function getFeaturedApps(limit = 10) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('apps')
      .select('*')
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error fetching featured apps:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getFeaturedApps:', error);
    return [];
  }
}

export async function getAppBySlug(slug: string) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return null;
    }

    const { data, error } = await supabase
      .from('apps')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Supabase error fetching app by slug:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getAppBySlug:', error);
    return null;
  }
}

export async function getAppsByCategory(category: string, limit = 20) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('apps')
      .select('*')
      .eq('is_active', true)
      .eq('category', category)
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error fetching apps by category:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAppsByCategory:', error);
    return [];
  }
}

export async function getRelatedApps(currentSlug: string, category: string, limit = 4) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('apps')
      .select('*')
      .eq('is_active', true)
      .eq('category', category)
      .neq('slug', currentSlug)
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error fetching related apps:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getRelatedApps:', error);
    return [];
  }
}

export async function searchApps(query: string, limit = 20) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('apps')
      .select('*')
      .eq('is_active', true)
      .or(`name.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`)
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error searching apps:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in searchApps:', error);
    return [];
  }
}

// Admin functions (require authentication)
export async function createApp(appData: any) {
  try {
    console.log('Creating app with data:', appData);
    
    // Ensure all fields including article_content are included
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
      article_content: appData.article_content || null
    };
    
    const { data, error } = await supabase
      .from('apps')
      .insert([completeAppData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating app:', error);
      return { success: false, error: error.message };
    }

    console.log('App created successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in createApp:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateApp(slug: string, updates: any) {
  try {
    console.log('Updating app with slug:', slug);
    console.log('Update data:', updates);
    
    // First, check if the app exists
    const { data: existingApp, error: fetchError } = await supabase
      .from('apps')
      .select('*')
      .eq('slug', slug)
      .single();

    if (fetchError) {
      console.error('Error fetching existing app:', fetchError);
      return { success: false, error: `App not found: ${fetchError.message}` };
    }

    console.log('Existing app found:', existingApp);

    // Ensure all fields including article_content are included in the update
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
      // Update the updated_at timestamp
      updated_at: new Date().toISOString()
    };

    console.log('Complete update data with all fields:', completeUpdates);

    // Perform the update
    const { data, error } = await supabase
      .from('apps')
      .update(completeUpdates)
      .eq('slug', slug)
      .select()
      .single();

    if (error) {
      console.error('Supabase error updating app:', error);
      return { success: false, error: error.message };
    }

    console.log('App updated successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in updateApp:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteApp(slug: string) {
  try {
    console.log('Attempting to delete app with slug:', slug);

    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return { success: false, error: 'Supabase credentials not available' };
    }

    // First, verify the app exists
    const { data: existingApp, error: fetchError } = await supabase
      .from('apps')
      .select('id')
      .eq('slug', slug)
      .single();

    if (fetchError) {
      console.error('Error fetching app before deletion:', fetchError);
      return { success: false, error: `App not found: ${fetchError.message}` };
    }

    if (!existingApp) {
      console.error('App not found for deletion:', slug);
      return { success: false, error: 'App not found' };
    }

    console.log('Found app to delete:', existingApp.id);

    // Perform the deletion
    const { error } = await supabase
      .from('apps')
      .delete()
      .eq('slug', slug);

    if (error) {
      console.error('Supabase error deleting app with slug', slug, ':', error);
      return { success: false, error: error.message };
    }

    console.log('App deleted successfully:', slug);
    return { success: true };
  } catch (error) {
    console.error('Error in deleteApp for slug', slug, ':', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Download Tasks related functions
export async function getAllDownloadTasks() {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('download_tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching download tasks:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAllDownloadTasks:', error);
    return [];
  }
}

export async function getActiveDownloadTasks() {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('download_tasks')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching active download tasks:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getActiveDownloadTasks:', error);
    return [];
  }
}

export async function getDownloadTaskById(id: string) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return null;
    }

    const { data, error } = await supabase
      .from('download_tasks')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase error fetching download task by id:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getDownloadTaskById:', error);
    return null;
  }
}

export async function createDownloadTask(taskData: any) {
  try {
    console.log('Creating download task with data:', taskData);
    
    const { data, error } = await supabase
      .from('download_tasks')
      .insert([taskData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating download task:', error);
      return { success: false, error: error.message };
    }

    console.log('Download task created successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in createDownloadTask:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateDownloadTask(id: string, updates: any) {
  try {
    console.log('Updating download task with id:', id);
    console.log('Update data:', updates);
    
    const { data, error } = await supabase
      .from('download_tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error updating download task:', error);
      return { success: false, error: error.message };
    }

    console.log('Download task updated successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in updateDownloadTask:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteDownloadTask(id: string) {
  try {
    console.log('Attempting to delete download task with id:', id);

    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return { success: false, error: 'Supabase credentials not available' };
    }

    // First, verify the task exists
    const { data: existingTask, error: fetchError } = await supabase
      .from('download_tasks')
      .select('id')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error('Error fetching task before deletion:', fetchError);
      return { success: false, error: `Task not found: ${fetchError.message}` };
    }

    if (!existingTask) {
      console.error('Task not found for deletion:', id);
      return { success: false, error: 'Task not found' };
    }

    console.log('Found task to delete:', existingTask.id);

    // Delete all app associations first
    const { error: deleteAssociationsError } = await supabase
      .from('app_download_tasks')
      .delete()
      .eq('task_id', id);

    if (deleteAssociationsError) {
      console.error('Error deleting task associations:', deleteAssociationsError);
      return { success: false, error: `Failed to delete task associations: ${deleteAssociationsError.message}` };
    }

    // Perform the deletion
    const { error } = await supabase
      .from('download_tasks')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error deleting download task with id', id, ':', error);
      return { success: false, error: error.message };
    }

    console.log('Download task deleted successfully:', id);
    return { success: true };
  } catch (error) {
    console.error('Error in deleteDownloadTask for id', id, ':', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function getAppDownloadTasks(appId: string) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('app_download_tasks')
      .select(`
        id,
        is_active,
        download_tasks (*)
      `)
      .eq('app_id', appId)
      .eq('is_active', true);

    if (error) {
      console.error('Supabase error fetching app download tasks:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAppDownloadTasks:', error);
    return [];
  }
}

export async function getAppDownloadTasksById(appId: string) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    const { data, error } = await supabase
      .from('app_download_tasks')
      .select(`
        id,
        is_active,
        download_tasks (*)
      `)
      .eq('app_id', appId)
      .eq('is_active', true);

    if (error) {
      console.error('Supabase error fetching app download tasks by ID:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAppDownloadTasksById:', error);
    return [];
  }
}

export async function getAppDownloadTasksBySlug(slug: string) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) return [];

    // First get the app id from the slug
    const { data: app, error: appError } = await supabase
      .from('apps')
      .select('id')
      .eq('slug', slug)
      .single();

    if (appError || !app) return [];

    console.log('Found app with slug:', slug, 'ID:', app.id);

    // Then get the download tasks for this app
    const { data, error } = await supabase
      .from('app_download_tasks')
      .select(`
        id,
        is_active,
        download_tasks (*)
      `)
      .eq('app_id', app.id)
      .eq('is_active', true);

    if (error) return [];

    console.log('Found download tasks for app:', data?.length || 0);
    return data || [];
  } catch (error) {
    console.error('Error in getAppDownloadTasksBySlug:', error);
    return [];
  }
}

export async function assignTaskToApp(appId: string, taskId: string, deactivateExisting: boolean = false) {
  try {
    console.log('Assigning task to app:', { appId, taskId });

    // Check if this task is already assigned to this app
    const { data: existingAssignment, error: checkAssignmentError } = await supabase
      .from('app_download_tasks')
      .select('*')
      .eq('app_id', appId)
      .eq('task_id', taskId);

    if (checkAssignmentError) return { success: false, error: checkAssignmentError.message };

    // If the task is already assigned, just activate it
    if (existingAssignment && existingAssignment.length > 0) {
      const { data, error } = await supabase
        .from('app_download_tasks')
        .update({ is_active: true })
        .eq('id', existingAssignment[0].id)
        .select()
        .single();

      console.log('Existing task assignment activated:', data);
      return { success: true, data };
    }

    // Otherwise, create a new assignment
    const { data, error } = await supabase
      .from('app_download_tasks')
      .insert([{
        app_id: appId,
        task_id: taskId,
        is_active: true
      }])
      .select()
      .single();

    if (error) return { success: false, error: error.message };

    console.log('Task assigned to app successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in assignTaskToApp:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function removeTaskFromApp(appId: string, taskId: string) {
  try {
    console.log('Removing task from app:', { appId, taskId });
    
    // Deactivate the specific task assignment
    const { data, error } = await supabase
      .from('app_download_tasks')
      .update({ is_active: false })
      .eq('app_id', appId)
      .eq('task_id', taskId)
      .select();

    if (error) {
      console.error('Supabase error removing task from app:', error);
      return { success: false, error: error.message };
    }

    console.log('Task removed from app successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in removeTaskFromApp:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function removeAllTasksFromApp(appId: string) {
  try {
    console.log('Removing all tasks from app:', appId);
    
    // Get all active tasks for this app
    const { data: existingTasks, error: checkError } = await supabase
      .from('app_download_tasks')
      .select('*')
      .eq('app_id', appId)
      .eq('is_active', true);

    if (checkError) {
      console.error('Supabase error checking existing tasks:', checkError);
      return { success: false, error: checkError.message };
    }

    // If there are existing active tasks, deactivate them
    if (existingTasks && existingTasks.length > 0) {
      for (const task of existingTasks) {
        const { error: updateError } = await supabase
          .from('app_download_tasks')
          .update({ is_active: false })
          .eq('id', task.id);

        if (updateError) {
          console.error('Supabase error deactivating existing task:', updateError);
          return { success: false, error: updateError.message };
        }
      }
      
      return { success: true, message: `Removed ${existingTasks.length} tasks from app` };
    } else {
      return { success: true, message: 'No active tasks to remove' };
    }
  } catch (error) {
    console.error('Error in removeAllTasksFromApp:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function getAppsWithTasks() {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not available');
      return [];
    }

    // Get all apps with active tasks
    const { data, error } = await supabase
      .from('app_download_tasks')
      .select(`
        id,
        app_id,
        task_id,
        is_active,
        apps (id, name, slug),
        download_tasks (id, name, task_type)
      `)
      .eq('is_active', true);

    if (error) {
      console.error('Supabase error fetching apps with tasks:', error);
      return [];
    }

    // Group by app_id to show multiple tasks per app
    const appsWithTasks = {};
    data.forEach(item => {
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
    console.error('Error in getAppsWithTasks:', error);
    return [];
  }
}

export async function getAppWithTasks(appId: string) {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey) return null;

    // Get app details
    const { data: app, error: appError } = await supabase
      .from('apps')
      .select('*')
      .eq('id', appId)
      .single();

    if (appError || !app) return null;

    // Get all active tasks for this app
    const { data: tasks, error: tasksError } = await supabase
      .from('app_download_tasks')
      .select(`
        id,
        task_id,
        is_active,
        download_tasks (*)
      `)
      .eq('app_id', appId)
      .eq('is_active', true);

    if (tasksError) return null;
    
    return {
      app,
      tasks: tasks.map(t => ({
        id: t.id,
        task: t.download_tasks,
        is_active: t.is_active
      }))
    };
  } catch (error) {
    console.error('Error in getAppWithTasks:', error);
    return null;
  }
}

export async function getAppsWithoutActiveTasks() {
  try {
    // Check if we have valid credentials before making the request
    if (!supabaseUrl || !supabaseAnonKey || !supabase) {
      console.warn('Supabase credentials not available');
      return [];
    }

    // Get all apps
    const { data: allApps, error: appsError } = await supabase
      .from('apps')
      .select('*')
      .eq('is_active', true);
    if (appsError) {
      return [];
    }

    // Get all apps with active tasks
    const { data: appTaskAssignments, error: tasksError } = await supabase
      .from('app_download_tasks')
      .select('app_id')
      .eq('is_active', true);
    if (tasksError) {
      return [];
    }

    // Filter out apps that already have active tasks
    const appIdsWithTasks = [...new Set(appTaskAssignments.map(item => item.app_id))];
    const appsWithoutTasks = allApps.filter(app => !appIdsWithTasks.includes(app.id) || true); // Show all apps for now

    return appsWithoutTasks || [];
  } catch (error) {
    console.error('Error in getAppsWithoutActiveTasks:', error);
    return [];
  }
}