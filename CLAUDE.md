# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an Academic Pages Jekyll site - a GitHub Pages template for personal academic portfolios. It's a static site generator built with Jekyll and designed to showcase academic work, publications, talks, and teaching.

## Development Commands

### Local Development

**Install dependencies:**
```bash
bundle install
# If permission errors occur:
bundle config set --local path 'vendor/bundle'
bundle install
```

**Run development server:**
```bash
# Standard Jekyll serve
jekyll serve -l -H localhost

# Or with bundler (recommended)
bundle exec jekyll serve -l -H localhost
```

**Using Docker:**
```bash
chmod -R 777 .
docker compose up
```

### JavaScript Build Commands

```bash
# Build/minify JavaScript
npm run build:js

# Watch JavaScript files for changes
npm run watch:js
```

## Architecture & Structure

### Core Components

- **Jekyll Site Generator**: Static site built with Jekyll, configured via `_config.yml`
- **GitHub Pages Integration**: Designed to deploy automatically to GitHub Pages
- **Academic Content Types**: Specialized collections for publications, talks, teaching, and portfolio items

### Key Directories

- `_pages/`: Main site pages (about, CV, publications, etc.)
- `_posts/`: Blog posts in Markdown format
- `_publications/`: Academic publication entries
- `_talks/`: Conference talks and presentations
- `_teaching/`: Teaching experience entries
- `_portfolio/`: Portfolio/project showcase items
- `_data/`: Site data files (navigation, authors, UI text)
- `_includes/`: Reusable HTML components
- `_layouts/`: Page layout templates
- `_sass/`: SCSS stylesheets organized by component
- `assets/`: CSS, JavaScript, fonts, and webfonts
- `images/`: Image assets
- `files/`: Downloadable files (PDFs, presentations)
- `markdown_generator/`: Python scripts to generate markdown from TSV/BibTeX

### Configuration

The site is configured primarily through `_config.yml` which contains:
- Site metadata and author information
- Social media and academic profile links
- Publication categories
- Jekyll build settings
- Theme configuration

### Content Management

- **Collections**: Jekyll collections are used for organizing academic content (publications, talks, teaching)
- **Front Matter**: Each content file uses YAML front matter for metadata
- **Navigation**: Defined in `_data/navigation.yml`
- **Markdown Generation**: Python scripts in `markdown_generator/` can convert TSV files or BibTeX to Jekyll-compatible markdown

### Deployment

The site is designed to deploy automatically via GitHub Pages when pushed to a repository named `[username].github.io`.