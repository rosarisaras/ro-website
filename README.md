# Rosari Sarasvaty - Portfolio Website

A clean, responsive website for Rosari Sarasvaty, an award-winning dance educator based in Bismarck, ND. Built for easy deployment on GitHub Pages.

## 🚀 Quick Deploy to GitHub Pages

### Before You Start
**⚠️ IMPORTANT**: Update these two things in `index.html`:
1. Line ~107: Replace `YOUR_EMAIL_HERE` with your email address
2. Line ~110: Replace `YOUR_DOMAIN` with your GitHub Pages URL

### Deployment Steps
1. Create a new GitHub repository (make it public)
2. Upload all files from this directory
3. Go to Settings → Pages → Enable GitHub Pages from main branch
4. Your site will be live at: `https://[username].github.io/[repository-name]/`

### First Time Setup
After deploying, test the contact form:
1. Submit a test message
2. Check your email for FormSubmit activation
3. Click the activation link to enable the form

📋 See `DEPLOYMENT_CHECKLIST.md` for detailed instructions

## Structure

- `index.html` - Main website file
- `css/style.css` - Stylesheet with all design and responsive styles
- `js/main.js` - JavaScript for smooth scrolling and mobile menu
- `images/` - Directory containing:
  - `rosari-profile.png` - Main profile image
  - `favicon.jpg` - Site favicon
- `content_summary.md` - Summary of extracted content
- `images_to_download.txt` - List of images that need to be downloaded
- `download_images.sh` - Script to download images from the original site

## Customization

### To update contact form:
Replace `your-email@example.com` in the form action with the actual email address:
```html
<form class="contact-form" action="https://formsubmit.co/your-email@example.com" method="POST">
```

### To add more images:
1. Add images to the `images/` folder
2. Reference them in the HTML like: `<img src="images/your-image.jpg" alt="Description">`

### To modify styles:
All CSS is in the `css/style.css` file for easy customization.

## Features

- Responsive design
- Clean, modern layout
- Artist statement section
- Press links
- Contact form
- Social media links
- Mobile-friendly navigation

## Color Scheme
- Primary: #ffc7ba (soft pink/peach)
- Text: #333 (dark gray)
- Background: #fafafa (light gray)