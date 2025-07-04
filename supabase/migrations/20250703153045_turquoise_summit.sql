/*
  # Seed initial app data

  1. Insert sample MOD APK data
    - ChatGPT Premium
    - Spotify Premium
    - YouTube Premium
    - Netflix
    - Instagram Private
    - And more popular apps

  2. Set featured apps for homepage display
*/

-- Insert ChatGPT Premium
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'chatgpt-premium',
  'ChatGPT Premium',
  '5.1.0.2',
  '47 MB',
  'Productivity',
  'OpenAI',
  'Android 5.1+',
  'Jul 02, 2025',
  4.4,
  70086,
  'OpenAI is a renowned group leading the vanguard of artificial intelligence research. Their latest Android application, named ChatGPT Mod APK, has been released. Download its mod for free.',
  '["Premium features unlocked", "No ads", "Unlimited conversations", "Advanced AI responses", "Voice chat mode", "Custom themes"]'::jsonb,
  '["Premium Unlocked", "Ad-Free Experience", "All Features Available", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert Spotify Premium
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'spotify-premium',
  'Spotify Premium',
  '8.9.98',
  '31.2 MB',
  'Music',
  'Spotify AB',
  'Android 5.0+',
  'Jan 15, 2025',
  4.3,
  125486,
  'Spotify is a digital music service that gives you access to millions of songs. With Spotify Premium MOD APK, enjoy unlimited music streaming with premium features unlocked.',
  '["Premium features unlocked", "No ads interruption", "Unlimited skips", "High quality audio", "Offline downloads", "Custom playlists"]'::jsonb,
  '["Premium Unlocked", "Ad-Free Experience", "Unlimited Skips", "High Quality Audio", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert YouTube Premium
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'youtube-premium',
  'YouTube Premium',
  '19.09.37',
  '45.8 MB',
  'Video',
  'Google LLC',
  'Android 6.0+',
  'Jan 10, 2025',
  4.2,
  89543,
  'YouTube Premium MOD APK gives you access to ad-free videos, background play, and YouTube Music premium features without any subscription.',
  '["Ad-free videos", "Background play", "YouTube Music premium", "Offline downloads", "Picture-in-picture mode", "Premium quality"]'::jsonb,
  '["Premium Unlocked", "Ad-Free Experience", "Background Play", "YouTube Music Access", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert Netflix
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'netflix-premium',
  'Netflix',
  '8.112.0',
  '28.4 MB',
  'Entertainment',
  'Netflix Inc.',
  'Android 5.0+',
  'Jan 08, 2025',
  4.5,
  156789,
  'Netflix MOD APK provides access to premium content, 4K streaming, and ad-free entertainment experience with all subscription features unlocked.',
  '["Premium subscription unlocked", "4K streaming", "Ad-free content", "Offline downloads", "Multiple profiles", "All regions content"]'::jsonb,
  '["Premium Unlocked", "4K Quality", "Ad-Free Streaming", "Global Content Access", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert Private Instagram
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'private-instagram',
  'Private insta',
  '1.0.1',
  '9 MB',
  'Social',
  'Meta Platforms',
  'Android 5.0+',
  'Jan 12, 2025',
  4.1,
  45632,
  'Private Instagram MOD APK allows you to view private profiles, download stories and posts, and access premium Instagram features.',
  '["View private profiles", "Download stories", "Download posts", "No ads", "Enhanced privacy", "Advanced features"]'::jsonb,
  '["Private Profile Access", "Download Features", "Ad-Free Experience", "Enhanced Privacy", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert Live Capture
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'live-capture',
  'Live Capture',
  '1.0.0',
  '6.9 MB',
  'Photography',
  'Live Capture Studio',
  'Android 6.0+',
  'Jan 05, 2025',
  4.0,
  23456,
  'Live Capture MOD APK provides professional camera features, advanced filters, and premium editing tools for stunning photography.',
  '["Professional camera modes", "Advanced filters", "Premium editing tools", "4K video recording", "No watermark", "Cloud storage"]'::jsonb,
  '["Premium Features Unlocked", "No Watermark", "Advanced Filters", "4K Recording", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert Big Small Game
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'big-small-game',
  'Big Small',
  '1.0',
  '6.8 MB',
  'Games',
  'Big Small Studios',
  'Android 4.4+',
  'Dec 28, 2024',
  3.9,
  12345,
  'Big Small Game MOD APK offers unlimited coins, unlocked levels, and premium gaming experience with enhanced gameplay features.',
  '["Unlimited coins", "All levels unlocked", "Premium characters", "No ads", "Enhanced graphics", "Bonus content"]'::jsonb,
  '["Unlimited Resources", "All Content Unlocked", "Ad-Free Gaming", "Premium Characters", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);

-- Insert VLC Media Player
INSERT INTO apps (
  slug,
  name,
  version,
  size,
  category,
  publisher,
  requirements,
  last_updated,
  rating,
  votes,
  description,
  features,
  mod_info,
  is_featured
) VALUES (
  'vlc-player',
  'VLC Player',
  '3.6.0',
  '42.1 MB',
  'Media',
  'VideoLAN',
  'Android 4.2+',
  'Jan 03, 2025',
  4.6,
  234567,
  'VLC Media Player MOD APK supports all video formats, provides advanced playback controls, and premium codec support.',
  '["All format support", "Advanced playback controls", "Premium codecs", "Network streaming", "Subtitle support", "Audio enhancement"]'::jsonb,
  '["All Formats Supported", "Premium Codecs", "Advanced Controls", "Network Streaming", "No Root Required", "Safe & Secure"]'::jsonb,
  true
);