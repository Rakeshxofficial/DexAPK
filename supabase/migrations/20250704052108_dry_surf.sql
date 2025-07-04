/*
  # Add SEO fields to apps table

  1. New Columns
    - `seo_title` (text) - Custom SEO title for meta tags
    - `seo_description` (text) - Custom SEO description for meta tags
    - `seo_featured_image` (text) - Featured image URL for OG/Twitter cards
    - `seo_keywords` (text) - SEO keywords
    - `seo_canonical_url` (text) - Custom canonical URL if needed

  2. Default Values
    - Use app name and description as fallbacks
    - Ensure proper SEO optimization

  3. Indexes
    - Add indexes for SEO fields for better performance
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

-- Create indexes for SEO fields
CREATE INDEX IF NOT EXISTS idx_apps_seo_title ON apps(seo_title);
CREATE INDEX IF NOT EXISTS idx_apps_seo_keywords ON apps(seo_keywords);

-- Update existing apps with default SEO values
UPDATE apps 
SET 
  seo_title = COALESCE(seo_title, name || ' MOD APK v' || version || ' - Premium Features Unlocked'),
  seo_description = COALESCE(seo_description, 
    'Download ' || name || ' MOD APK v' || version || ' with premium features unlocked. ' || 
    CASE 
      WHEN LENGTH(description) > 100 THEN LEFT(description, 100) || '...'
      ELSE description
    END
  ),
  seo_featured_image = COALESCE(seo_featured_image, icon),
  seo_keywords = COALESCE(seo_keywords, 
    LOWER(name) || ', ' || LOWER(category) || ', mod apk, premium unlocked, android app, free download'
  )
WHERE seo_title IS NULL OR seo_description IS NULL OR seo_featured_image IS NULL OR seo_keywords IS NULL;