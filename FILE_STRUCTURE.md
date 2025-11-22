# Lexi Commerce Landing Page - File Structure

Complete file structure for GitHub Pages deployment.

```
lexi-commerce-landing/
│
├── 📚 DOCUMENTATION (Read These First!)
│   ├── START_HERE.md                    ⭐ Start with this file
│   ├── QUICKSTART.md                    ⭐ 5-minute deployment guide
│   ├── GITHUB_PAGES_DEPLOY.md          Complete deployment reference
│   ├── DEPLOYMENT_CHECKLIST.md         Step-by-step checklist
│   ├── DEPLOYMENT_GUIDE.md             Production deployment guide
│   ├── SETUP_GUIDE.md                  Infrastructure reference
│   └── README.md                        Main documentation
│
├── ⚙️ CONFIGURATION FILES
│   ├── package.json                     Dependencies + scripts
│   ├── vite.config.js                   Build configuration (GitHub Pages ready)
│   ├── tailwind.config.js               Tailwind CSS config + animations
│   ├── postcss.config.js                PostCSS configuration
│   └── .gitignore                       Git ignore rules
│
├── 🚀 DEPLOYMENT
│   ├── .github/
│   │   └── workflows/
│   │       └── deploy.yml               GitHub Actions workflow (automatic)
│   └── deploy.sh                        Manual deployment script (executable)
│
├── 🎨 SOURCE FILES
│   ├── index.html                       HTML entry point (SEO meta tags)
│   └── src/
│       ├── main.jsx                     React entry point
│       ├── App.jsx                      App wrapper component
│       ├── LexiCommerceLanding.jsx      ⭐ Main landing page (1500+ lines)
│       └── index.css                    Global styles + Tailwind directives
│
├── 📦 PUBLIC ASSETS
│   └── public/
│       └── .nojekyll                    GitHub Pages compatibility file
│
└── 🔨 BUILD OUTPUT (Generated - Not in Git)
    └── dist/                            Production build (after npm run build)
        ├── index.html
        ├── assets/
        │   ├── index-[hash].js
        │   ├── index-[hash].css
        │   └── vendor-[hash].js
        └── .nojekyll
```

## 📊 File Count Summary

- **Documentation:** 7 files
- **Configuration:** 5 files
- **Source Code:** 4 files
- **Deployment:** 2 files
- **Total:** 18 files (excluding build output)

## 🎯 File Purposes

### Documentation Files

| File | Purpose | When to Read |
|------|---------|--------------|
| `START_HERE.md` | Overview and summary | First time setup |
| `QUICKSTART.md` | 5-minute deployment | Ready to deploy |
| `GITHUB_PAGES_DEPLOY.md` | Complete guide | Need details |
| `DEPLOYMENT_CHECKLIST.md` | Task tracking | During deployment |
| `README.md` | Main docs | Reference |
| `SETUP_GUIDE.md` | Infrastructure | Alternative hosting |
| `DEPLOYMENT_GUIDE.md` | Production guide | Going live |

### Core Files (Don't Delete These!)

| File | Purpose | Editable? |
|------|---------|-----------|
| `package.json` | Dependencies | ⚠️ Advanced only |
| `vite.config.js` | Build config | ⚠️ Usually no need |
| `index.html` | Entry point | ✅ Update meta tags |
| `src/LexiCommerceLanding.jsx` | Main component | ✅ Update content |
| `.github/workflows/deploy.yml` | Auto-deploy | ⚠️ Usually no need |

### Files You Should Edit

| File | What to Update | Priority |
|------|----------------|----------|
| `src/LexiCommerceLanding.jsx` | CTA links, content | 🔴 High |
| `index.html` | Meta tags, title | 🔴 High |
| `package.json` | Repository name | 🟡 Medium |
| `README.md` | Project specifics | 🟢 Low |

## 📦 File Sizes (Approximate)

```
Total Source Code:     ~250 KB
Documentation:         ~150 KB
Configuration:         ~10 KB
Build Output:          ~350 KB (minified)
```

## 🔄 File Workflow

### Development Flow
```
1. Edit: src/LexiCommerceLanding.jsx
2. Test: npm run dev (localhost:3000)
3. Commit: git add . && git commit -m "..."
4. Push: git push
5. Deploy: Automatic via GitHub Actions
```

### Build Process
```
Source Files (src/)
      ↓
Vite Build (npm run build)
      ↓
Optimized Output (dist/)
      ↓
GitHub Pages / CDN
      ↓
Live Website
```

## 🎨 Customization Guide

### Easy Customizations (No Code Changes)
- Meta tags: `index.html`
- Company name: `src/LexiCommerceLanding.jsx` (search for "Lexi Commerce")
- Contact links: `src/LexiCommerceLanding.jsx` (search for "Calendly")

### Medium Customizations
- Colors: `tailwind.config.js`
- Content: `src/LexiCommerceLanding.jsx` (content object)
- Structure: `src/LexiCommerceLanding.jsx` (JSX)

### Advanced Customizations
- Build config: `vite.config.js`
- Styling system: `tailwind.config.js`
- Deployment: `.github/workflows/deploy.yml`

## 🚫 Don't Touch These (Unless You Know What You're Doing)

- `node_modules/` - Auto-generated
- `dist/` - Build output
- `.github/workflows/deploy.yml` - Works out of the box
- `vite.config.js` - Pre-configured
- `postcss.config.js` - Standard config

## ✅ Safe to Delete (After Understanding)

- `SETUP_GUIDE.md` - Only needed for alternative hosting
- `DEPLOYMENT_GUIDE.md` - Reference for advanced deployment
- `lexi-commerce-landing.jsx` - Duplicate (src/LexiCommerceLanding.jsx is used)

## 📋 Pre-Commit Checklist

Before committing changes:

- [ ] Run `npm run dev` - Site works locally
- [ ] Check console - No errors
- [ ] Test language switcher
- [ ] Verify mobile responsive
- [ ] CTAs point to correct links

## 🔍 Finding Things

### To Find CTA Buttons
```bash
grep -n "handleDemoClick" src/LexiCommerceLanding.jsx
```

### To Find Meta Tags
```bash
grep -n "meta name" index.html
```

### To Find Color Definitions
```bash
grep -n "from-blue\|from-cyan" src/LexiCommerceLanding.jsx
```

## 💾 Backup Recommendations

Keep backups of:
1. `src/LexiCommerceLanding.jsx` - Your main component
2. `index.html` - Updated meta tags
3. `package.json` - Custom scripts

Everything else can be regenerated from these files.

## 🎓 Learning Path

1. **Beginner:** Just edit content in `LexiCommerceLanding.jsx`
2. **Intermediate:** Customize colors and structure
3. **Advanced:** Modify build config and deployment

---

**Quick Reference Commands:**

```bash
# Development
npm run dev              # Start dev server

# Deployment  
npm run deploy           # Manual deploy
git push                 # Auto deploy

# Maintenance
npm update              # Update dependencies
npm audit fix           # Fix vulnerabilities
```

---

**File Structure Version:** 1.0  
**Last Updated:** 2024  
**Compatible With:** GitHub Pages, Vercel, Netlify, Any Static Host
