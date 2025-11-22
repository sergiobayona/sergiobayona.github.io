# Deploy to GitHub Pages - Complete Guide

This guide covers deploying your Lexi Commerce landing page to GitHub Pages as a fully static site.

## 🎯 Two Deployment Options

### Option 1: Automatic Deployment (Recommended)
Every push to `main` branch automatically builds and deploys

### Option 2: Manual Deployment
Run a command to deploy whenever you want

---

## 🚀 Option 1: Automatic Deployment with GitHub Actions

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Lexi Commerce landing page"

# Create repository on GitHub (via web interface or CLI)
# Then add remote:
git remote add origin https://github.com/YOUR_USERNAME/lexi-commerce-landing.git

# Push to GitHub
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. That's it! The workflow will run automatically

### Step 3: Configure Base Path (If Using Project Page)

If deploying to `username.github.io/repo-name`:

Edit `.github/workflows/deploy.yml` line 50:

```yaml
# Uncomment and set your repo name:
BASE_PATH: '/lexi-commerce-landing/'
```

If deploying to `username.github.io` (user/org page):
- Leave it as is (uses '/' as base)

### Step 4: Wait for Deployment

- Go to **Actions** tab in your repository
- Watch the deployment workflow run
- Once complete, visit: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Step 5: Custom Domain (Optional)

In repository **Settings** → **Pages**:
1. Add custom domain: `www.lexicommerce.com`
2. Wait for DNS check
3. Enable "Enforce HTTPS"

Configure DNS:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

---

## 🔧 Option 2: Manual Deployment

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build the Site

```bash
npm run build
```

This creates a `dist/` folder with all static files.

### Step 3: Deploy to GitHub Pages

```bash
# Deploy to gh-pages branch
npm run deploy
```

This command:
1. Builds your site
2. Creates/updates `gh-pages` branch
3. Pushes static files to that branch

### Step 4: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `/ (root)`
3. Click **Save**

### Step 5: Access Your Site

Visit: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 🔄 Updating Your Site

### Automatic Deployment:
```bash
# Make changes to your code
git add .
git commit -m "Update landing page"
git push
# Deployment happens automatically!
```

### Manual Deployment:
```bash
# Make changes to your code
npm run deploy
# Done! Changes are live
```

---

## 📝 Configuration Details

### For Project Page (username.github.io/repo-name)

**Update `vite.config.js`:**

Uncomment the BASE_PATH in the workflow file, OR update vite.config.js directly:

```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

### For User/Org Page (username.github.io)

**Repository name must be:** `USERNAME.github.io`

**vite.config.js stays as:**
```javascript
base: '/',
```

---

## 🐛 Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution 1:** Check base path
- Make sure `base` in `vite.config.js` matches your deployment type
- Project page: `base: '/repo-name/'`
- User page: `base: '/'`

**Solution 2:** Rebuild and redeploy
```bash
rm -rf dist
npm run build
npm run deploy
```

### Issue: CSS/JS Not Loading

**Cause:** Incorrect base path

**Solution:** 
```bash
# For project pages, ensure vite.config.js has:
base: '/your-repo-name/',  # Must include trailing slash!

# Rebuild
npm run build
npm run deploy
```

### Issue: GitHub Actions Workflow Failing

**Solution 1:** Check Node version
- Workflow uses Node 20
- If you need different version, edit `.github/workflows/deploy.yml`

**Solution 2:** Check permissions
- Go to Settings → Actions → General
- Under "Workflow permissions", select:
  - ✅ Read and write permissions

### Issue: Custom Domain Not Working

**Solution:**
1. Add `CNAME` file to `/public` folder:
   ```bash
   echo "www.lexicommerce.com" > public/CNAME
   ```
2. Configure DNS at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
3. Rebuild and deploy

---

## 📁 Project Structure for GitHub Pages

```
lexi-commerce-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets (optional)
│   └── CNAME                  # For custom domain (optional)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── LexiCommerceLanding.jsx
├── dist/                       # Build output (git ignored)
├── index.html
├── package.json
├── vite.config.js             # Build configuration
└── tailwind.config.js
```

---

## 🎨 Customization Before Deploy

### 1. Update Contact Links

Edit `src/LexiCommerceLanding.jsx`:

```javascript
// Find CTA buttons and add real links
const handleDemoClick = () => {
  window.open('https://calendly.com/your-link', '_blank');
};

// Update all button onClick handlers
<button onClick={handleDemoClick} className="...">
  {t.hero.cta}
</button>
```

### 2. Add Analytics

Edit `index.html` - add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Update Meta Tags

Edit `index.html`:

```html
<title>Your Actual Title</title>
<meta name="description" content="Your actual description" />
<meta property="og:url" content="https://yourusername.github.io/repo-name/" />
<!-- Update all URLs and content -->
```

---

## 🔒 Environment Variables

GitHub Pages is static, so environment variables must be set at **build time**.

### Using GitHub Secrets

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click "New repository secret"
3. Add secrets (e.g., `VITE_ANALYTICS_ID`)

### Update Workflow

Edit `.github/workflows/deploy.yml`:

```yaml
- name: Build
  run: npm run build
  env:
    GITHUB_PAGES: true
    VITE_ANALYTICS_ID: ${{ secrets.ANALYTICS_ID }}
```

### Access in Code

```javascript
// src/LexiCommerceLanding.jsx
const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
```

---

## 📊 Performance Tips

### 1. Optimize Images

```bash
# Install image optimization
npm install -D vite-plugin-imagemin

# Add to vite.config.js
import viteImagemin from 'vite-plugin-imagemin'

plugins: [
  react(),
  viteImagemin({
    gifsicle: { optimizationLevel: 7 },
    optipng: { optimizationLevel: 7 },
    mozjpeg: { quality: 80 },
    pngquant: { quality: [0.8, 0.9] },
    svgo: { plugins: [{ name: 'removeViewBox', active: false }] }
  })
]
```

### 2. Enable Compression

Add to `index.html`:

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

### 3. Check Bundle Size

```bash
npm run build

# Check dist/ folder size
du -sh dist/
```

Target: < 500KB total

---

## 🚦 Quick Start Commands

```bash
# Setup
git clone https://github.com/YOUR_USERNAME/lexi-commerce-landing.git
cd lexi-commerce-landing
npm install

# Development
npm run dev

# Deploy (automatic with GitHub Actions)
git add .
git commit -m "Update site"
git push

# Deploy (manual)
npm run deploy

# Preview production build locally
npm run build
npm run preview
```

---

## ✅ Pre-Deployment Checklist

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Check dist/ folder: All files present
- [ ] Update all placeholder content
- [ ] Add real contact form/Calendly links
- [ ] Update meta tags and titles
- [ ] Configure base path correctly
- [ ] Test language switcher
- [ ] Verify mobile responsiveness
- [ ] Add analytics tracking
- [ ] Configure custom domain (optional)

---

## 🌐 Live URLs

### Project Page
- Format: `https://USERNAME.github.io/REPO_NAME/`
- Example: `https://sergioal.github.io/lexi-commerce-landing/`

### User/Org Page
- Format: `https://USERNAME.github.io/`
- Example: `https://lexicommerce.github.io/`

### Custom Domain
- Format: `https://www.yourdomain.com`
- Example: `https://www.lexicommerce.com`

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🎉 Success!

Your Lexi Commerce landing page is now:
- ✅ Fully static
- ✅ Deployed to GitHub Pages
- ✅ Automatically updated on push
- ✅ Served over HTTPS
- ✅ Free hosting forever

Visit your live site and share it with potential customers! 🚀
