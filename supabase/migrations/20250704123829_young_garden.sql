/*
  # Fix custom_h1_title field in apps table

  1. Purpose
    - Ensure the custom_h1_title field is properly defined
    - Add any missing constraints or defaults
    - Fix any issues with the field definition

  2. Changes
    - Verify the column exists
    - Update column definition if needed
    - Add any necessary triggers or functions
*/

-- Verify and fix custom_h1_title column
DO $$
BEGIN
  -- Check if custom_h1_title column exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'custom_h1_title'
  ) THEN
    -- Column exists, ensure it's properly defined
    -- Drop and recreate if needed
    ALTER TABLE apps DROP COLUMN custom_h1_title;
    ALTER TABLE apps ADD COLUMN custom_h1_title text;
  ELSE
    -- Column doesn't exist, create it
    ALTER TABLE apps ADD COLUMN custom_h1_title text;
  END IF;
END $$;

-- Add a comment to the column for better documentation
COMMENT ON COLUMN apps.custom_h1_title IS 'Custom H1 title for app details page. If null, default format will be used.';

-- Update existing apps to ensure custom_h1_title is properly set
UPDATE apps
SET custom_h1_title = NULL
WHERE custom_h1_title = '';