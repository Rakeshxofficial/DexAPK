/*
  # Add custom H1 title field to apps table

  1. New Column
    - `custom_h1_title` (text) - Custom H1 title for app details page
    
  2. Purpose
    - Allow customization of the main heading on app detail pages
    - Improve SEO by allowing custom titles
    - Default to standard format if not specified
*/

-- Add custom_h1_title column to apps table
DO $$
BEGIN
  -- Add custom_h1_title column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'custom_h1_title'
  ) THEN
    ALTER TABLE apps ADD COLUMN custom_h1_title text;
  END IF;
END $$;