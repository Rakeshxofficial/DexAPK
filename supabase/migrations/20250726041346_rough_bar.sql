/*
  # Create Blog System

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `content` (text, markdown)
      - `excerpt` (text)
      - `thumbnail_image` (text)
      - `author` (text)
      - `category` (text)
      - `tags` (jsonb)
      - `reading_time` (integer, minutes)
      - `published_date` (date)
      - `is_published` (boolean)
      - `is_featured` (boolean)
      - `seo_title` (text)
      - `seo_description` (text)
      - `seo_keywords` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policies for public read access to published posts
    - Add policies for authenticated users to manage posts

  3. Indexes
    - Add indexes for performance optimization
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  thumbnail_image text,
  author text DEFAULT 'DexAPK Team',
  category text DEFAULT 'General',
  tags jsonb DEFAULT '[]'::jsonb,
  reading_time integer DEFAULT 5,
  published_date date DEFAULT CURRENT_DATE,
  is_published boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies for public access to published posts
CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  TO public
  USING (is_published = true);

-- Policies for authenticated users (admin)
CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts (is_published) WHERE (is_published = true);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts (is_featured) WHERE (is_featured = true);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts (category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts (published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts (author);

-- Trigger for updating updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_updated_at();