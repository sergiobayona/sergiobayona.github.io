#!/bin/bash

# Lexi Commerce Landing Page - Quick Deploy to GitHub Pages
# This script builds and deploys your site to GitHub Pages

set -e  # Exit on error

echo "🚀 Deploying Lexi Commerce Landing Page to GitHub Pages..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Build the site
echo "🏗️  Building static site..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
    echo ""
else
    echo "❌ Build failed"
    exit 1
fi

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo ""
    echo "Your site will be live at:"
    echo "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
    echo ""
    echo "Note: It may take a few minutes for changes to appear."
else
    echo "❌ Deployment failed"
    exit 1
fi
