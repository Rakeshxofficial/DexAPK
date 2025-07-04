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