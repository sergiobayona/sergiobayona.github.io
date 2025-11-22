# Production Deployment Checklist

## Pre-Deployment

### 1. Content Updates
- [ ] Replace placeholder CTAs with real contact forms/Calendly links
- [ ] Update email addresses and contact information
- [ ] Verify all Spanish/English translations are accurate
- [ ] Add company logo and favicon files
- [ ] Update meta tags in `index.html` with production URLs
- [ ] Create and add Open Graph images (1200x630px)

### 2. Analytics & Tracking
- [ ] Set up Google Analytics or privacy-friendly alternative
- [ ] Add conversion tracking for demo requests
- [ ] Set up event tracking for button clicks
- [ ] Configure funnel tracking

### 3. SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta descriptions (150-160 characters)
- [ ] Check heading hierarchy (H1 → H2 → H3)
- [ ] Add schema.org structured data
- [ ] Verify robots.txt
- [ ] Set up canonical URLs

### 4. Performance
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Optimize images (WebP format)
- [ ] Enable compression (Gzip/Brotli)
- [ ] Configure CDN
- [ ] Set up caching headers

### 5. Security
- [ ] Enable HTTPS (SSL certificate)
- [ ] Configure security headers
- [ ] Set up Content Security Policy (CSP)
- [ ] Add rate limiting for forms
- [ ] Enable CORS properly

### 6. Legal & Compliance
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Implement cookie consent banner (GDPR/CCPA)
- [ ] Add data processing agreement links
- [ ] Include business registration information

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy via Vercel**
   - Visit https://vercel.com/new
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain: `www.lexicommerce.com`
   - Configure DNS:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

4. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add variables for production
   - Redeploy

### Option 2: Netlify

1. **Build Site**
   ```bash
   npm run build
   ```

2. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Or Deploy via UI**
   - Visit https://app.netlify.com/drop
   - Drag and drop `dist/` folder
   - Configure custom domain

4. **Configure Domain**
   - Site Settings → Domain Management
   - Add custom domain
   - Configure DNS records

### Option 3: AWS S3 + CloudFront

1. **Build Site**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://lexicommerce-landing
   aws s3 website s3://lexicommerce-landing --index-document index.html --error-document index.html
   ```

3. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://lexicommerce-landing --delete
   ```

4. **Create CloudFront Distribution**
   - Origin: S3 bucket endpoint
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Compress Objects: Yes
   - Price Class: Use All Edge Locations
   - Alternate Domain Names: www.lexicommerce.com
   - SSL Certificate: Request/import certificate

5. **Configure DNS**
   ```
   Type: CNAME
   Name: www
   Value: [CloudFront distribution domain]
   ```

## Post-Deployment

### 1. Testing
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work
- [ ] Test language switcher
- [ ] Test all CTA buttons
- [ ] Check form submissions
- [ ] Verify analytics tracking

### 2. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up performance monitoring
- [ ] Enable real user monitoring (RUM)

### 3. Marketing
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create social media posts with og:image
- [ ] Set up Google My Business (if applicable)
- [ ] Configure email marketing integration

### 4. Optimization
- [ ] Run A/B tests on CTA copy
- [ ] Test different hero images
- [ ] Monitor conversion funnel
- [ ] Adjust based on analytics data

## Environment-Specific Configuration

### Development
```javascript
// vite.config.js
export default defineConfig({
  base: '/',
  build: {
    sourcemap: true
  }
})
```

### Production
```javascript
// vite.config.js
export default defineConfig({
  base: '/',
  build: {
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
```

## Custom Domain Setup

### DNS Configuration for lexicommerce.com

```
# Root domain
Type: A
Name: @
Value: [Your hosting IP or use ANAME/ALIAS]

# WWW subdomain
Type: CNAME
Name: www
Value: [Your hosting domain]

# SSL/TLS
Let Vercel/Netlify handle SSL automatically
```

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Page Size: < 500KB
- Core Web Vitals: All green

## Contact Form Integration Options

### Option A: Calendly
```javascript
const CALENDLY_URL = 'https://calendly.com/lexicommerce/demo';
const handleDemoClick = () => window.open(CALENDLY_URL, '_blank');
```

### Option B: Typeform
```javascript
const TYPEFORM_URL = 'https://form.typeform.com/to/xxxxx';
const handleDemoClick = () => window.open(TYPEFORM_URL, '_blank');
```

### Option C: Email Service (EmailJS)
```javascript
import emailjs from '@emailjs/browser';

const sendDemo = async (formData) => {
  await emailjs.send(
    'service_id',
    'template_id',
    formData,
    'public_key'
  );
};
```

## Rollback Procedure

### Vercel
```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

### Netlify
```bash
# Via UI: Deploys → Click on previous deploy → Publish deploy
```

## Support Contacts

- **Hosting Issues**: Vercel/Netlify support
- **DNS Issues**: Domain registrar support
- **Performance Issues**: Run Lighthouse audit
- **Bug Reports**: Create GitHub issue

## Success Metrics

Monitor these KPIs post-launch:
- Demo request conversion rate
- Bounce rate (target: < 40%)
- Average session duration (target: > 2 minutes)
- Pages per session (target: > 2)
- Mobile vs Desktop traffic
- Spanish vs English preference

---

**Ready to Deploy?** Start with Option 1 (Vercel) for the fastest path to production.
