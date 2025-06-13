# Rosari Sarasvaty - Dance Artist Website

A zero-cost, GitHub Pages-friendly website for award-winning Indonesian-American dance educator and choreographer Rosari Sarasvaty.

## Tech Stack

- **Jekyll** - Static site generator (GitHub Pages native support)
- **Tailwind CSS** - Via CDN for zero-build styling
- **Alpine.js** - Lightweight interactivity (optional)
- **Formsubmit.co** - Free contact form backend
- **Font Awesome** - Icon library via CDN
- **Plausible Analytics** - Privacy-friendly analytics (optional)

## Features

- Fully responsive design
- SEO optimized with jekyll-seo-tag
- Automatic sitemap generation
- Fast page loads with lazy loading
- Accessible navigation
- Free contact form without server
- WebP image support with fallbacks

## Local Development

1. Install Ruby and Jekyll:
   ```bash
   gem install jekyll bundler
   ```

2. Navigate to the docs directory:
   ```bash
   cd docs
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. View the site at `http://localhost:4000/ro_website/`

## Deployment

This site is designed to be deployed on GitHub Pages:

1. Push to GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch `/docs` folder
4. Save and wait for deployment

The site will be available at `https://[username].github.io/ro_website/`

## Content Management

- **Pages**: Edit markdown files in the root directory
- **Work Projects**: Add/edit files in the `work/` directory
- **Press Links**: Update `_data/press.yml`
- **Navigation**: Edit `_data/navigation.yml`
- **Site Config**: Update `_config.yml`

## Customization

### Colors
Edit the Tailwind config in `_includes/head.html`:
- Primary: `rose` (#ffc7ba)
- Light: `rose-light` (#f9c9c1)

### Fonts
- Headers: Quicksand
- Body: Muli

### Contact Form
Update the email in `_config.yml` to change the recipient.

## Performance

- 90+ Lighthouse scores
- No build step required
- CDN-delivered assets
- Optimized images (WebP format)
- Lazy loading for images and videos

## License

© 2024 Rosari Sarasvaty. All rights reserved.