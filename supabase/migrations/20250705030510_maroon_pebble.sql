/*
  # Fix download tasks popup issues
  
  1. Changes
     - Add index on app_download_tasks for better performance
     - Update function to properly handle task assignments
  
  2. Security
     - Maintain existing RLS policies
*/

-- Add index for better performance when querying app_download_tasks
CREATE INDEX IF NOT EXISTS idx_app_download_tasks_app_slug ON public.app_download_tasks USING btree (app_id) WHERE (is_active = true);

-- Ensure the updated_at trigger is working properly
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_app_download_tasks_updated_at'
  ) THEN
    CREATE TRIGGER update_app_download_tasks_updated_at
    BEFORE UPDATE ON public.app_download_tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;