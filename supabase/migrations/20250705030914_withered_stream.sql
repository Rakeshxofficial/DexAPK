/*
  # Fix download tasks popup functionality

  1. Changes
     - Add index for better performance when querying app_download_tasks by app_id
     - Ensure the updated_at trigger is working properly
     - Remove unique constraint on app_id and task_id to allow multiple tasks per app
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

-- Remove unique constraint on app_id and task_id if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'app_download_tasks_app_id_task_id_key' 
    AND conrelid = 'app_download_tasks'::regclass
  ) THEN
    ALTER TABLE public.app_download_tasks DROP CONSTRAINT app_download_tasks_app_id_task_id_key;
  END IF;
EXCEPTION
  WHEN undefined_table THEN
    RAISE NOTICE 'Table app_download_tasks does not exist';
  WHEN undefined_object THEN
    RAISE NOTICE 'Constraint app_download_tasks_app_id_task_id_key does not exist';
END $$;