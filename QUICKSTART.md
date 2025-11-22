# Quick Start - GitHub Pages Deployment

Get your Lexi Commerce landing page live in 5 minutes! ⚡

## 📋 Prerequisites

- Node.js 18+ installed
- GitHub account
- Git installed

## 🚀 Deploy in 5 Steps

### Step 1: Setup Local Project

```bash
# Navigate to project folder
cd lexi-commerce-landing

# Install dependencies
npm install
```

### Step 2: Test Locally (Optional)

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# Press Ctrl+C to stop
```

### Step 3: Create GitHub Repository

**Via GitHub Website:**
1. Go to https://github.com/new
2. Repository name: `lexi-commerce-landing`
3. Public or Private: Your choice
4. Don't add README, .gitignore, or license
5. Click "Create repository"

**Via Command Line:**
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Lexi Commerce landing page"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/lexi-commerce-landing.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "**GitHub Actions**"
5. Done! GitHub Actions will automatically deploy

### Step 5: Wait and Visit

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow run (takes ~1-2 minutes)
3. Once complete (green checkmark), visit:

```
https://YOUR_USERNAME.github.io/lexi-commerce-landing/
```

## 🎉 Success!

Your landing page is now live and will automatically redeploy on every push to `main`!

---

## 🔄 Making Updates

```bash
# 1. Edit your files
# 2. Commit and push
git add .
git commit -m "Update landing page content"
git push

# 3. Automatic deployment happens!
# Check Actions tab to watch progress
```

---

## 🛠️ Manual Deployment (Alternative)

If you prefer manual control:

```bash
# Option 1: Use npm script
npm run deploy

# Option 2: Use convenience script
./deploy.sh
```

This deploys to `gh-pages` branch. Configure Pages to use that branch:
- Settings → Pages → Source: "Deploy from a branch"
- Branch: `gh-pages` / `/ (root)`

---

## 🎨 Before Going Live

### Update Contact Links

Edit `src/LexiCommerceLanding.jsx` around line 150:

```javascript
const handleDemoClick = () => {
  // Replace with your Calendly link
  window.open('https://calendly.com/YOUR_LINK', '_blank');
};
```

Find all buttons and update their `onClick` handlers.

### Update Meta Tags

Edit `index.html`:

```html
<title>Your Company Name - Your Tagline</title>
<meta name="description" content="Your actual description" />
<meta property="og:url" content="https://yourusername.github.io/repo-name/" />
```

### Add Analytics (Optional)

Edit `index.html`, add before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Problem: 404 Error

**Solution:** Check if base path is configured correctly.

For project pages, edit `vite.config.js`:

```javascript
base: '/your-repo-name/',  // Must match repo name exactly
```

Then rebuild:
```bash
npm run build
npm run deploy
```

### Problem: CSS/JS Not Loading

**Solution:** Same as above - base path issue. Make sure it includes trailing slash!

### Problem: Changes Not Appearing

**Solution:** 
1. Clear browser cache (Ctrl+Shift+R)
2. Wait 5 minutes (GitHub Pages cache)
3. Check Actions tab for deployment status

### Problem: Workflow Failing

**Solution:** Check permissions
1. Settings → Actions → General
2. Workflow permissions: **Read and write permissions**
3. Re-run workflow

---

## 📊 Check Your Live Site

Visit these URLs to verify:

```
https://YOUR_USERNAME.github.io/lexi-commerce-landing/
```

Test:
- [ ] Homepage loads
- [ ] Language switcher works (ES ↔ EN)
- [ ] All sections display correctly
- [ ] Mobile responsive
- [ ] CTA buttons clickable
- [ ] Smooth scrolling works

---

## 🔗 Custom Domain (Optional)

### Add Custom Domain

1. Settings → Pages → Custom domain
2. Enter: `www.lexicommerce.com`
3. Wait for DNS check

### Configure DNS at Your Provider

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Add CNAME File

Create `public/CNAME`:
```bash
echo "www.lexicommerce.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

---

## 📚 Next Steps

1. ✅ Site is live
2. Test on multiple devices
3. Share with team for feedback
4. Update content based on feedback
5. Add Google Analytics
6. Submit to Google Search Console
7. Share on social media!

---

## 🆘 Need Help?

- **Detailed Guide:** See [GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md)
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

## 💡 Pro Tips

1. **Test Locally First:** Always run `npm run dev` before pushing
2. **Watch Actions Tab:** Monitor deployments in real-time
3. **Use Branches:** Create feature branches, merge to main when ready
4. **Keep Mobile in Mind:** 60%+ traffic will be mobile
5. **Monitor Analytics:** Track what works, iterate

---

**Your landing page is ready to convert visitors into customers! 🎯**
