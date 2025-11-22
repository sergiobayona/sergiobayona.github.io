# Lexi Commerce Landing Page - Setup Guide

## Infrastructure Requirements

Your landing page is a React component that needs a few things to run. Here are your options from simplest to most robust:

---

## Option 1: Quick Start with Vite (Recommended for Speed)

**Best for:** Fast development, modern tooling, easy deployment

### Step 1: Create Project

```bash
# Create new Vite + React project
npm create vite@latest lexi-commerce-landing -- --template react

# Navigate to project
cd lexi-commerce-landing

# Install dependencies
npm install

# Install required packages
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Configure Tailwind CSS

Edit `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 3: Add Your Component

Replace `src/App.jsx` with the landing page component (copy the entire lexi-commerce-landing.jsx content)

### Step 4: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### Step 5: Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files ready to deploy.

---

## Option 2: Next.js Setup (Recommended for Production)

**Best for:** SEO, server-side rendering, routing, production deployments

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest lexi-commerce-landing
# Choose:
# ✅ TypeScript? No
# ✅ ESLint? Yes
# ✅ Tailwind CSS? Yes
# ✅ src/ directory? Yes
# ✅ App Router? Yes
# ✅ Import alias? No

cd lexi-commerce-landing
```

### Step 2: Install Icons

```bash
npm install lucide-react
```

### Step 3: Create Landing Page

Create `src/app/page.js`:

```javascript
'use client';

import LexiCommerceLanding from './components/LexiCommerceLanding';

export default function Home() {
  return <LexiCommerceLanding />;
}
```

Create `src/app/components/LexiCommerceLanding.jsx` and paste your landing page code.

### Step 4: Update Metadata (Optional SEO)

Edit `src/app/layout.js`:

```javascript
export const metadata = {
  title: 'Lexi Commerce - AI-Powered WhatsApp Commerce',
  description: 'Transform your WhatsApp into a 24/7 sales machine with specialized AI agents',
  keywords: 'WhatsApp Business, AI Commerce, Colombia, LATAM, Chatbot',
}
```

### Step 5: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### Step 6: Build for Production

```bash
npm run build
npm start  # Test production build locally
```

---

## Option 3: Static HTML (No Build Tools)

**Best for:** Maximum simplicity, CDN hosting, no JavaScript tooling

### Step 1: Create HTML File

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lexi Commerce - AI WhatsApp Commerce</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://unpkg.com/lucide-react@0.263.1/dist/umd/lucide-react.js"></script>
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    const { MessageSquare, Bot, ShoppingCart, Headphones, Package, Zap, TrendingUp, Shield, Globe, ChevronRight, Check, Star } = lucideReact;
    
    // Paste your entire component code here
    // Replace: import React, { useState } from 'react';
    // With: const { useState } = React;
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LexiCommerceLanding />);
  </script>
</body>
</html>
```

**Note:** This approach works but is NOT recommended for production (slow loading, no optimization).

---

## Deployment Options

### 1. Vercel (Easiest - Recommended)

**Best for Next.js or Vite projects**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect GitHub repo for auto-deployments
# Visit: https://vercel.com/new
```

**Features:**
- Free SSL certificate
- Global CDN
- Automatic deployments from Git
- Custom domains
- Environment variables support

**Cost:** Free tier available

---

### 2. Netlify

**Best for static sites (Vite builds)**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Or use drag-and-drop:**
1. Build: `npm run build`
2. Visit: https://app.netlify.com/drop
3. Drag `dist/` folder

**Features:**
- Free SSL
- Custom domains
- Form handling
- Serverless functions

**Cost:** Free tier available

---

### 3. AWS S3 + CloudFront

**Best for enterprise/custom infrastructure**

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Configure CloudFront for CDN
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

**Features:**
- Full control
- Scalable
- Integrates with existing AWS infrastructure

**Cost:** Pay-as-you-go (typically $1-5/month for small sites)

---

### 4. GitHub Pages

**Best for simple static hosting**

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

**Features:**
- Free hosting
- Auto-deploy from GitHub
- Custom domains supported

**Cost:** Free

---

## Complete Quick Start (Copy-Paste Ready)

Here's everything to get running in 2 minutes:

```bash
# 1. Create project
npm create vite@latest lexi-landing -- --template react
cd lexi-landing

# 2. Install everything
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Configure Tailwind
cat > tailwind.config.js << 'EOF'
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
EOF

# 4. Setup CSS
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# 5. Copy your landing page component to src/App.jsx
# (Replace the entire file with lexi-commerce-landing.jsx content)

# 6. Run it!
npm run dev
```

---

## Production Checklist

Before deploying to production:

- [ ] Replace demo CTAs with real contact forms/calendly links
- [ ] Add Google Analytics or privacy-friendly analytics
- [ ] Add meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Optimize images (if you add any later)
- [ ] Test on mobile devices
- [ ] Add cookie consent banner (GDPR/CCPA compliance)
- [ ] Set up error tracking (Sentry)
- [ ] Configure custom domain
- [ ] Add SSL certificate (auto with Vercel/Netlify)
- [ ] Test language switcher thoroughly

---

## Environment Variables (if needed later)

Create `.env.local`:

```bash
# If you add contact form functionality
VITE_CONTACT_FORM_API=https://your-api.com/contact
VITE_ANALYTICS_ID=G-XXXXXXXXXX

# For Next.js use:
NEXT_PUBLIC_CONTACT_FORM_API=https://your-api.com/contact
```

---

## Adding Contact Form Integration

To make the CTA buttons functional, you can integrate:

### Option A: Calendly (Easiest)

```jsx
// Add to your component
const handleDemoClick = () => {
  window.open('https://calendly.com/your-link', '_blank');
};

// Update button:
<button onClick={handleDemoClick} className="...">
  {t.hero.cta}
</button>
```

### Option B: Typeform

```jsx
const handleDemoClick = () => {
  window.open('https://form.typeform.com/to/your-form', '_blank');
};
```

### Option C: Custom Form + Email Service

Use services like:
- **EmailJS** (free tier)
- **SendGrid**
- **AWS SES**
- **Resend**

---

## Performance Optimization

Once deployed, optimize with:

1. **Image Optimization**: Use Next.js Image component or optimize manually
2. **Code Splitting**: Already handled by Vite/Next.js
3. **CDN**: Use Vercel/Netlify edge network
4. **Lazy Loading**: Split heavy components if page grows
5. **Analytics**: Track conversion funnel

---

## Recommended Stack for Lexi Commerce

Given your Rails backend and need for professional deployment:

```
Frontend: Next.js + Tailwind
Hosting: Vercel
Analytics: Plausible or Simple Analytics (privacy-friendly)
Forms: Typeform or Calendly for demos
Domain: Custom domain (lexicommerce.co or similar)
```

**Total Cost:** $0-20/month (depending on traffic)

---

## Need Help?

Common issues:

1. **Icons not showing**: Make sure `lucide-react` is installed
2. **Tailwind not working**: Check `tailwind.config.js` content paths
3. **Build fails**: Clear cache with `rm -rf node_modules package-lock.json && npm install`
4. **Deployment issues**: Check build command matches your setup (`npm run build`)

---

## Next Steps

1. Set up the development environment (Option 1 or 2)
2. Test the landing page locally
3. Add real contact form/calendly integration
4. Deploy to Vercel/Netlify
5. Configure custom domain
6. Add analytics tracking
7. Test conversion funnel

Your landing page is production-ready code - just needs the infrastructure!
