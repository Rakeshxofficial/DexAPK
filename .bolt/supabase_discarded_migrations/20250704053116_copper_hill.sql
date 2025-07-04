/*
  # Add SEO fields to apps table

  1. New SEO Fields
    - `seo_title` (text) - Custom SEO title for meta tags
    - `seo_description` (text) - Custom SEO description for meta tags  
    - `seo_featured_image` (text) - Featured image URL for OG and Twitter cards
    - `seo_keywords` (text) - SEO keywords for meta keywords tag
    - `seo_canonical_url` (text) - Canonical URL for the app page

  2. SEO Enhancement
    - These fields will be used to generate dynamic meta tags
    - Fallback to app name/description if SEO fields are empty
    - Support for Open Graph and Twitter Card optimization
*/

-- Add SEO fields to apps table
DO $$
BEGIN
  -- Add seo_title column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'seo_title'
  ) THEN
    ALTER TABLE apps ADD COLUMN seo_title text;
  END IF;

  -- Add seo_description column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'seo_description'
  ) THEN
    ALTER TABLE apps ADD COLUMN seo_description text;
  END IF;

  -- Add seo_featured_image column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'seo_featured_image'
  ) THEN
    ALTER TABLE apps ADD COLUMN seo_featured_image text;
  END IF;

  -- Add seo_keywords column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'seo_keywords'
  ) THEN
    ALTER TABLE apps ADD COLUMN seo_keywords text;
  END IF;

  -- Add seo_canonical_url column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'seo_canonical_url'
  ) THEN
    ALTER TABLE apps ADD COLUMN seo_canonical_url text;
  END IF;
END $$;

-- Create indexes for SEO fields to improve search performance
CREATE INDEX IF NOT EXISTS idx_apps_seo_title ON apps(seo_title);
CREATE INDEX IF NOT EXISTS idx_apps_seo_keywords ON apps(seo_keywords);