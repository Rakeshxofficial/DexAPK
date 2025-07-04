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
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getAllApps:", error);
    return [];
  }
}
async function getFeaturedApps(limit = 10) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) ;
    const { data, error } = await supabase.from("apps").select("*").eq("is_active", true).eq("is_featured", true).order("rating", { ascending: false }).limit(limit);
    if (error) {
      console.error("Supabase error fetching featured apps:", error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error("Error in getFeaturedApps:", error);
    return [];
  }
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

export { getAppsByCategory as a, getRelatedApps as b, getFeaturedApps as c, getAllApps as g };
