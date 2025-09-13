# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **GlamSmile** website - an Astro-based Spanish dental clinic website focusing on aesthetic dentistry services. The site showcases dental transformations, clinic information, and the treatment process through a single-page layout with four main sections.

## Development Commands

```bash
# Development server (localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Optimize images (generates WebP/AVIF formats from PNG)
npm run optimize:image
```

## Architecture

### Framework & Structure
- **Astro 5.13.5** with minimal configuration (empty astro.config.mjs)
- Single-page application with all components imported in `src/pages/index.astro`
- Global styles defined inline in the main page using `<style is:global>`
- Spanish language content throughout

### Component Architecture
The application follows a linear component composition pattern:
1. **HeroCinematic** - Landing hero with parallax background and call-to-action
2. **WhyChooseUs** - Light-themed value proposition section with media grid
3. **HowWeDoIt** - 5-step treatment process with visual timeline
4. **BeforeAfter** - Interactive image comparison sliders with gallery

### Styling System
- CSS custom properties for dual theming (dark/light sections)
- Modern CSS features: `clamp()`, `grid`, `image-set()`, `backdrop-filter`
- Mobile-first responsive design
- Performance optimizations: disabled fixed backgrounds on mobile

### Asset Management
- Images in `public/assets/` with multi-format support (PNG/WebP/AVIF)
- Sharp-based optimization script for format conversion
- Lazy loading and accessible `alt` attributes

### Interactive Features
- Before/After image comparison sliders with range controls
- Scroll-triggered animations using Intersection Observer
- Responsive image handling with `picture` elements

## Technical Constraints

- No additional framework configuration beyond Astro defaults
- Basic TypeScript config only (astro/tsconfigs/strict)
- No linting, testing, or build tooling configured
- Focus on vanilla CSS and component composition
- Spanish content requires careful handling of special characters