/*
  # Add support for multiple download tasks per app

  1. Changes
    - Remove unique constraint on app_id and task_id in app_download_tasks table
    - Add functions to manage multiple tasks per app
    - Add functions to remove tasks from apps

  2. Purpose
    - Allow multiple tasks to be assigned to a single app
    - Enable more flexible task management
    - Support removing tasks from apps
*/

-- Remove the unique constraint on app_id and task_id
ALTER TABLE app_download_tasks DROP CONSTRAINT IF EXISTS app_download_tasks_app_id_task_id_key;

-- Drop the index if it exists
DROP INDEX IF EXISTS app_download_tasks_app_id_task_id_key;

-- Create a new index without the uniqueness constraint
CREATE INDEX IF NOT EXISTS idx_app_download_tasks_app_task ON app_download_tasks(app_id, task_id);