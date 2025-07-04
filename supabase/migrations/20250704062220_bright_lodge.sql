/*
  # Add article content field to apps table

  1. New Column
    - `article_content` (text) - Markdown content for the article

  2. Default Values
    - Allow null values for backward compatibility
    - Existing apps will use default content generation

  3. Indexes
    - No additional indexes needed for this field
*/

-- Add article_content column to apps table
DO $$
BEGIN
  -- Add article_content column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'apps' AND column_name = 'article_content'
  ) THEN
    ALTER TABLE apps ADD COLUMN article_content text;
  END IF;
END $$;