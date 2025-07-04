# DexAPK - MOD APK Website

A modern, responsive website for downloading MOD APKs built with Astro, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with dark mode support
- **Admin Panel**: Full-featured admin dashboard for content management
- **Database Integration**: Supabase for data storage and authentication
- **SEO Optimized**: Static site generation with dynamic content
- **Mobile First**: Optimized for all device sizes
- **Fast Performance**: Built with Astro for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Deployment**: Netlify
- **Language**: TypeScript/JavaScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dexapk
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

## 🌐 Deployment to Netlify

### Prerequisites

1. **Supabase Project**: Set up a Supabase project and get your credentials
2. **Netlify Account**: Create a free Netlify account
3. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket

### Deployment Steps

1. **Connect Repository to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your Git provider and select your repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Set Environment Variables**:
   - Go to Site settings → Environment variables
   - Add the following variables:
     ```
     VITE_SUPABASE_URL = your_supabase_project_url
     VITE_SUPABASE_ANON_KEY = your_supabase_anon_key
     ```

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Environment Variables Setup

In your Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Add these variables:

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `VITE_SUPABASE_URL` | `https://your-project.supabase.co` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | `your-anon-key` | Your Supabase anonymous key |

### Server-Side Functionality

The website includes server-side functionality for:

- **Admin Authentication**: Secure login system
- **Dynamic Routing**: Server-rendered admin pages
- **Database Operations**: Real-time data from Supabase
- **Form Handling**: Server-side form processing

This is achieved through:
- **Astro Hybrid Mode**: Static generation with server-side rendering for admin pages
- **Netlify Functions**: Automatic serverless function deployment
- **Environment Variables**: Secure credential management

### Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions

## 🗄️ Database Setup

1. **Create Supabase Project**:
   - Go to [Supabase Dashboard](https://app.supabase.com)
   - Create a new project

2. **Run Migrations**:
   - The SQL migrations are in `supabase/migrations/`
   - Run them in your Supabase SQL editor

3. **Set Up Authentication**:
   - Enable email authentication in Supabase Auth settings
   - Create an admin user account

## 🔧 Configuration

### Netlify Configuration

The `netlify.toml` file includes:

- **Build Settings**: Optimized build configuration
- **Redirects**: Proper routing for SPA functionality
- **Headers**: Security and caching headers
- **Environment**: Node.js version specification

### Astro Configuration

The `astro.config.mjs` includes:

- **Netlify Adapter**: For serverless deployment
- **Hybrid Output**: Static + server-side rendering
- **Environment Variables**: Proper variable handling

## 📱 Features

### Public Features
- Browse MOD APKs by category
- Search functionality
- Responsive design
- Dark/light mode
- App detail pages with screenshots
- Download links

### Admin Features
- Secure authentication
- Dashboard with statistics
- Add/edit/delete apps
- Manage app metadata
- Upload images and screenshots
- Toggle featured status

## 🚀 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## 🔒 Security

- **Environment Variables**: Secure credential storage
- **Row Level Security**: Database-level permissions
- **HTTPS**: SSL encryption via Netlify
- **CSP Headers**: Content Security Policy
- **Authentication**: Supabase Auth integration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using Astro, Tailwind CSS, and Supabase**