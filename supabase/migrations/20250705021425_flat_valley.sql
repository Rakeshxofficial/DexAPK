/*
  # Create download tasks system

  1. New Tables
    - `download_tasks` - Stores task definitions
      - `id` (uuid, primary key)
      - `name` (text) - Task name
      - `description` (text) - Task description
      - `task_type` (text) - Type of task (telegram, instagram, youtube, etc.)
      - `task_url` (text) - URL for the task
      - `task_icon` (text) - Icon for the task
      - `is_active` (boolean) - Whether task is active
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Update timestamp
    
    - `app_download_tasks` - Junction table for apps and tasks
      - `id` (uuid, primary key)
      - `app_id` (uuid) - Reference to apps table
      - `task_id` (uuid) - Reference to download_tasks table
      - `is_active` (boolean) - Whether this assignment is active
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Update timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to manage tasks

  3. Indexes
    - Index on app_id and task_id for fast lookups
*/

-- Create download_tasks table
CREATE TABLE IF NOT EXISTS download_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  task_type text NOT NULL,
  task_url text NOT NULL,
  task_icon text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create app_download_tasks junction table
CREATE TABLE IF NOT EXISTS app_download_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  app_id uuid NOT NULL REFERENCES apps(id) ON DELETE CASCADE,
  task_id uuid NOT NULL REFERENCES download_tasks(id) ON DELETE CASCADE,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(app_id, task_id)
);

-- Enable Row Level Security
ALTER TABLE download_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_download_tasks ENABLE ROW LEVEL SECURITY;

-- Create policies for download_tasks
CREATE POLICY "Download tasks are viewable by everyone"
  ON download_tasks
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert download tasks"
  ON download_tasks
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update download tasks"
  ON download_tasks
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete download tasks"
  ON download_tasks
  FOR DELETE
  TO authenticated
  USING (true);

-- Create policies for app_download_tasks
CREATE POLICY "App download tasks are viewable by everyone"
  ON app_download_tasks
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert app download tasks"
  ON app_download_tasks
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update app download tasks"
  ON app_download_tasks
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete app download tasks"
  ON app_download_tasks
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_app_download_tasks_app_id ON app_download_tasks(app_id);
CREATE INDEX IF NOT EXISTS idx_app_download_tasks_task_id ON app_download_tasks(task_id);
CREATE INDEX IF NOT EXISTS idx_download_tasks_active ON download_tasks(is_active) WHERE is_active = true;

-- Create triggers to update updated_at timestamp
CREATE TRIGGER update_download_tasks_updated_at
  BEFORE UPDATE ON download_tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_app_download_tasks_updated_at
  BEFORE UPDATE ON app_download_tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample download tasks
INSERT INTO download_tasks (name, description, task_type, task_url, task_icon, is_active)
VALUES 
  ('Join Telegram', 'Join our Telegram channel for updates', 'telegram', 'https://t.me/dexapk_com', 'telegram', true),
  ('Join Telegram Group', 'Join our Telegram group for discussions', 'telegram', 'https://t.me/dexapk_group', 'telegram', true),
  ('Follow on Instagram', 'Follow us on Instagram for latest updates', 'instagram', 'https://instagram.com/dexapk', 'instagram', true),
  ('Subscribe on YouTube', 'Subscribe to our YouTube channel', 'youtube', 'https://youtube.com/@rakeshxofficiall', 'youtube', true);