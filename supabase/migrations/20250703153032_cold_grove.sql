/*
  # Create apps table for MOD APK data

  1. New Tables
    - `apps`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `name` (text) - App name
      - `version` (text) - App version
      - `size` (text) - App size
      - `category` (text) - App category
      - `publisher` (text) - App publisher
      - `requirements` (text) - System requirements
      - `price` (text) - App price
      - `platform` (text) - Platform (Google Play, etc.)
      - `last_updated` (text) - Last update date
      - `rating` (numeric) - App rating
      - `votes` (integer) - Number of votes
      - `description` (text) - App description
      - `icon` (text) - Icon URL
      - `screenshots` (jsonb) - Array of screenshot URLs
      - `download_url` (text) - Download URL
      - `features` (jsonb) - Array of features
      - `mod_info` (jsonb) - Array of MOD information
      - `is_featured` (boolean) - Whether app is featured
      - `is_active` (boolean) - Whether app is active
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Update timestamp

  2. Security
    - Enable RLS on `apps` table
    - Add policy for public read access
    - Add policy for authenticated users to manage apps

  3. Indexes
    - Index on slug for fast lookups
    - Index on category for filtering
    - Index on is_featured for homepage
*/

CREATE TABLE IF NOT EXISTS apps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  version text NOT NULL DEFAULT '1.0.0',
  size text NOT NULL DEFAULT '0 MB',
  category text NOT NULL DEFAULT 'Apps',
  publisher text NOT NULL DEFAULT 'Unknown',
  requirements text NOT NULL DEFAULT 'Android 5.0+',
  price text NOT NULL DEFAULT 'Free',
  platform text NOT NULL DEFAULT 'Google Play',
  last_updated text NOT NULL DEFAULT 'Jan 01, 2025',
  rating numeric(2,1) NOT NULL DEFAULT 4.0 CHECK (rating >= 0 AND rating <= 5),
  votes integer NOT NULL DEFAULT 0 CHECK (votes >= 0),
  description text NOT NULL DEFAULT '',
  icon text DEFAULT '',
  screenshots jsonb DEFAULT '[]'::jsonb,
  download_url text DEFAULT '#',
  features jsonb DEFAULT '[]'::jsonb,
  mod_info jsonb DEFAULT '[]'::jsonb,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE apps ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Apps are viewable by everyone"
  ON apps
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert apps"
  ON apps
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update apps"
  ON apps
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete apps"
  ON apps
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_apps_slug ON apps(slug);
CREATE INDEX IF NOT EXISTS idx_apps_category ON apps(category);
CREATE INDEX IF NOT EXISTS idx_apps_featured ON apps(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_apps_active ON apps(is_active) WHERE is_active = true;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_apps_updated_at
  BEFORE UPDATE ON apps
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();