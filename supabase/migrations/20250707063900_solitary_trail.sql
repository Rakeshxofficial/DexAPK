/*
  # Add Cache Headers for Static Assets

  1. Purpose
    - Improve page performance by setting proper cache headers
    - Fix "Use efficient cache lifetimes" warning in PageSpeed Insights
    - Ensure static assets are cached efficiently

  2. Changes
    - Add cache headers for images (jpg, jpeg, png, gif, webp, svg, ico)
    - Add cache headers for fonts (woff, woff2, ttf, otf, eot)
    - Ensure all static assets have proper cache-control directives
*/

-- This migration doesn't modify the database schema
-- It's included to document the cache header changes made to the application