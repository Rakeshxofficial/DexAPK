/*
  # Create app_versions table

  1. New Tables
    - `app_versions`
      - `id` (uuid, primary key)
      - `app_id` (uuid, foreign key to apps)
      - `version` (text)
      - `size` (text)
      - `mod_info` (text)
      - `download_url` (text)
      - `release_date` (date)
      - `is_active` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  2. Security
    - Enable RLS on `app_versions` table
    - Add policies for CRUD operations
*/

-- Create app_versions table
CREATE TABLE IF NOT EXISTS app_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  app_id uuid NOT NULL REFERENCES apps(id) ON DELETE CASCADE,
  version text NOT NULL,
  size text NOT NULL DEFAULT '0 MB',
  mod_info text,
  download_url text,
  release_date date DEFAULT CURRENT_DATE,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_app_versions_app_id ON app_versions(app_id);
CREATE INDEX IF NOT EXISTS idx_app_versions_active ON app_versions(is_active) WHERE (is_active = true);

-- Enable Row Level Security
ALTER TABLE app_versions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "App versions are viewable by everyone" 
  ON app_versions
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert app versions" 
  ON app_versions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update app versions" 
  ON app_versions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete app versions" 
  ON app_versions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_app_versions_updated_at
  BEFORE UPDATE ON app_versions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();