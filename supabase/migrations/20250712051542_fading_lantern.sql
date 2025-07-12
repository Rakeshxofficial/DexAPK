/*
  # Add disable_download_page field to apps table

  1. Changes
    - Add `disable_download_page` boolean field to apps table with default value of false
    - This field controls whether an app uses the dynamic download page or direct download

  2. Security
    - No changes to security policies
*/

-- Add disable_download_page field to apps table
ALTER TABLE public.apps 
ADD COLUMN IF NOT EXISTS disable_download_page BOOLEAN DEFAULT false;

-- Add index for better performance when querying
CREATE INDEX IF NOT EXISTS idx_apps_disable_download_page 
ON public.apps (disable_download_page);

-- Add comment to explain the field's purpose
COMMENT ON COLUMN public.apps.disable_download_page IS 
'Controls whether an app uses the dynamic download page (false) or direct download (true)';