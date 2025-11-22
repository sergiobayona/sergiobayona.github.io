# GitHub Pages Deployment Checklist

Use this checklist to ensure a smooth deployment to GitHub Pages.

## ✅ Pre-Deployment

### Local Setup
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] GitHub account created
- [ ] Project files downloaded/extracted

### Dependencies
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` - site loads locally
- [ ] Test language switcher (ES ↔ EN)
- [ ] Verify mobile responsiveness

### Content Updates
- [ ] Update CTA buttons with real Calendly/form links
- [ ] Update meta tags in `index.html`
- [ ] Update company name in footer
- [ ] Replace placeholder contact info
- [ ] Add company logo/favicon (optional)

## ✅ GitHub Setup

### Repository
- [ ] GitHub repository created
- [ ] Repository name chosen (e.g., `lexi-commerce-landing`)
- [ ] Decide: Public or Private
- [ ] Local git initialized (`git init`)
- [ ] Files committed (`git add . && git commit -m "Initial commit"`)
- [ ] Remote added (`git remote add origin ...`)
- [ ] Pushed to GitHub (`git push -u origin main`)

### GitHub Pages Configuration
- [ ] Go to Settings → Pages
- [ ] Source set to "GitHub Actions"
- [ ] Wait for first workflow run
- [ ] Check Actions tab - workflow completed successfully

## ✅ Deployment Verification

### Live Site Check
- [ ] Visit: `https://USERNAME.github.io/REPO_NAME/`
- [ ] Homepage loads without errors
- [ ] All images display (if any added)
- [ ] CSS styling applied correctly
- [ ] JavaScript working (language switcher)
- [ ] No console errors (F12 → Console)

### Functionality Test
- [ ] Language switcher toggles ES ↔ EN
- [ ] All navigation links work
- [ ] Smooth scrolling to sections
- [ ] CTA buttons clickable
- [ ] Mobile menu works (on mobile)
- [ ] Responsive on different screen sizes

### Cross-Browser Test
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browser

## ✅ Post-Deployment

### Analytics (Optional but Recommended)
- [ ] Google Analytics added to `index.html`
- [ ] Analytics tracking code tested
- [ ] Conversion events configured

### SEO
- [ ] Meta tags updated with correct info
- [ ] Open Graph tags verified
- [ ] Site submitted to Google Search Console
- [ ] Sitemap generated and submitted

### Custom Domain (Optional)
- [ ] Domain purchased
- [ ] DNS records configured
- [ ] CNAME file added to `public/` folder
- [ ] Custom domain added in GitHub Settings
- [ ] SSL certificate active (auto via GitHub)
- [ ] Domain resolves correctly

### Monitoring
- [ ] Uptime monitoring set up (UptimeRobot, etc.)
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Performance baseline recorded

## ✅ Ongoing Maintenance

### Regular Updates
- [ ] Monitor analytics for user behavior
- [ ] A/B test different CTA copy
- [ ] Update content based on feedback
- [ ] Keep dependencies updated (`npm update`)

### Security
- [ ] Review Dependabot alerts (if any)
- [ ] Update packages with vulnerabilities
- [ ] Keep workflow actions up to date

## 🚨 Common Issues Checklist

If site not loading:
- [ ] Check base path in `vite.config.js` matches repo name
- [ ] Verify GitHub Actions workflow completed successfully
- [ ] Clear browser cache (Ctrl+Shift+R)
- [ ] Wait 5 minutes for GitHub Pages cache

If CSS not loading:
- [ ] Base path must end with `/` (e.g., `/repo-name/`)
- [ ] Rebuild: `npm run build`
- [ ] Redeploy: `npm run deploy` or push again

If workflow failing:
- [ ] Check Settings → Actions → Workflow permissions
- [ ] Should be: "Read and write permissions"
- [ ] Check Node version in workflow file

## 📊 Success Metrics

Track these after deployment:

### Week 1
- [ ] 100+ page views
- [ ] 5+ demo requests
- [ ] < 50% bounce rate
- [ ] 90+ Lighthouse score

### Month 1
- [ ] 500+ page views
- [ ] 20+ demo requests
- [ ] Identify top-performing content
- [ ] Optimize based on user behavior

## 🎉 Completion

- [ ] Site live and accessible
- [ ] All functionality tested
- [ ] Analytics tracking
- [ ] Team notified
- [ ] Shared on social media
- [ ] Added to marketing materials

---

## Next Steps After Deployment

1. **Monitor Performance**
   - Check Google Analytics daily
   - Review conversion funnel
   - Identify drop-off points

2. **Iterate Based on Data**
   - Test different headlines
   - Adjust CTA placement
   - Refine value proposition

3. **Expand Features**
   - Add testimonials
   - Include case studies
   - Create video demos

4. **SEO Optimization**
   - Build backlinks
   - Create blog content
   - Optimize for keywords

---

**Congratulations! Your Lexi Commerce landing page is live on GitHub Pages! 🚀**

Date Deployed: _______________
Live URL: _______________
