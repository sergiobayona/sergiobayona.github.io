# Lexi Commerce Landing Page

Modern, conversion-optimized landing page for Lexi Commerce with full bilingual support (Spanish/English).

**Deployed to GitHub Pages** - Fully static, free hosting forever! 🚀

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📦 What's Included

- ✅ React 18 + Vite
- ✅ Tailwind CSS 3.4
- ✅ Lucide React Icons
- ✅ Fully responsive design
- ✅ Spanish/English localization
- ✅ Modern UI components
- ✅ Production-ready code
- ✅ **GitHub Pages ready** - Zero config deployment

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

Every push to `main` automatically builds and deploys:

```bash
# 1. Create GitHub repository and push
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/lexi-commerce-landing.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to Settings → Pages → Source: GitHub Actions

# 3. Done! Every push now auto-deploys 🎉
```

### Option 2: Manual Deployment

Deploy whenever you want with one command:

```bash
# Build and deploy
npm run deploy

# Or use the convenience script
./deploy.sh
```

**See [GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md) for complete deployment guide.**

## 🏗️ Project Structure

```
lexi-commerce-landing/
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # App wrapper
    ├── index.css           # Global styles + Tailwind
    └── LexiCommerceLanding.jsx  # Main landing page component
```

## 🛠️ Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

Your site is configured for **GitHub Pages** with both automatic and manual deployment options.

### Automatic Deployment
- Push to `main` branch → Automatic build & deploy
- Configured via GitHub Actions (`.github/workflows/deploy.yml`)

### Manual Deployment  
```bash
npm run deploy
```

### Live URL
- Project page: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- Custom domain: Configure in Settings → Pages

**Complete deployment guide:** [GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md)

## 🌐 Features

### Design
- Modern gradient backgrounds
- Sticky navigation with backdrop blur
- Smooth scroll animations
- Interactive hover effects
- Mobile-first responsive design

### Content Sections
1. **Hero** - Value proposition with stats
2. **Problem** - Customer pain points
3. **Solution** - 4 AI agents showcase
4. **Features** - Key differentiators
5. **How It Works** - Process visualization
6. **Pricing** - Custom pricing section
7. **Testimonials** - Social proof
8. **Final CTA** - Conversion focused
9. **Footer** - Professional branding

### Bilingual Support
- Language toggle in navigation
- Complete Spanish/English translations
- Colombian Spanish cultural adaptation
- Maintains marketing tone in both languages

## 🎨 Customization

### Update Content

Edit `src/LexiCommerceLanding.jsx` and modify the `content` object:

```javascript
const content = {
  es: {
    // Spanish content
  },
  en: {
    // English content
  }
};
```

### Add Contact Form

Replace the CTA buttons with real functionality:

```javascript
const handleDemoClick = () => {
  // Option 1: Calendly
  window.open('https://calendly.com/your-link', '_blank');
  
  // Option 2: Typeform
  window.open('https://form.typeform.com/to/your-form', '_blank');
  
  // Option 3: Custom form
  // Implement your form submission logic
};
```

### Change Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

## 📊 Analytics Integration

Add Google Analytics or privacy-friendly alternatives:

```javascript
// In index.html <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Or use privacy-friendly alternatives:
- [Plausible Analytics](https://plausible.io)
- [Simple Analytics](https://simpleanalytics.com)
- [Fathom Analytics](https://usefathom.com)

## 🔒 SEO Optimization

The landing page includes:
- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook)
- Twitter Card tags
- Proper heading hierarchy
- Alt text ready for images

Update meta tags in `index.html` with your actual URLs and content.

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Icons not showing
```bash
npm install lucide-react
```

### Tailwind not working
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

Copyright © 2024 Lexi Commerce. All rights reserved.

## 🤝 Support

For questions or support:
- Email: support@lexicommerce.com
- Documentation: See SETUP_GUIDE.md for detailed instructions

---

Built with ❤️ for food and dessert businesses in Colombia and LATAM
