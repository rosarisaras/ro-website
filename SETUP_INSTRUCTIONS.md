# Rosari Sarasvaty Website - Setup Instructions & Missing Features

## 🚀 Quick Start - Contact Form Setup

### Option 1: FormSubmit (Recommended - No Backend Required)

1. **Update the email address in index.html**:
   - Find line ~87: `<form class="contact-form" action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST">`
   - Replace `YOUR_EMAIL_HERE` with the actual email address
   - Example: `action="https://formsubmit.co/rosari@example.com"`

2. **Add FormSubmit features** (optional but recommended):
   ```html
   <!-- Add these hidden inputs inside the form -->
   <input type="hidden" name="_subject" value="New submission from RosariSarasvaty.com">
   <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
   <input type="hidden" name="_captcha" value="false"> <!-- Or "true" for captcha -->
   <input type="text" name="_honey" style="display:none"> <!-- Honeypot spam protection -->
   ```

3. **First-time activation**:
   - FormSubmit will send a confirmation email on first submission
   - Click the link in that email to activate the form

### Option 2: Netlify Forms (If hosting on Netlify)

1. Add `data-netlify="true"` to the form tag:
   ```html
   <form class="contact-form" data-netlify="true" name="contact" method="POST">
   ```

2. Add honeypot field for spam protection:
   ```html
   <input type="hidden" name="bot-field" />
   ```

### Option 3: Custom Backend

If you need file uploads or more control, you'll need a backend service:
- **Formspree**: Similar to FormSubmit but supports file uploads
- **Google Forms**: Embed a Google Form instead
- **Custom server**: Node.js, Python, or PHP backend

## 📋 Missing Features from Original Site

### 1. **Multi-Page Structure** ⚠️ CRITICAL
The original site has separate pages. To replicate:

Create these additional files:
- `about.html` - Full biography page
- `work.html` - Portfolio/choreography page  
- `socials.html` - Social media links page

Update navigation in all files:
```html
<li><a href="index.html">Home</a></li>
<li><a href="about.html">About</a></li>
<li><a href="work.html">Work</a></li>
<li><a href="socials.html">Socials</a></li>
```

### 2. **Missing About Page Content** ⚠️ CRITICAL

Add this content to a dedicated about.html page:

```html
<section class="education">
    <h3>Education</h3>
    <ul>
        <li>MA in Dance Education, NYU</li>
        <li>ABT® National Training Curriculum Certification</li>
        <li>Law degrees and certifications</li>
        <!-- Add all education details from original -->
    </ul>
</section>

<section class="experience">
    <h3>Professional Experience</h3>
    <ul>
        <li>Children's Division Coordinator at Northern Plains Dance</li>
        <!-- Add all professional positions -->
    </ul>
</section>

<section class="philosophy">
    <h3>Teaching Philosophy</h3>
    <p><!-- Add teaching philosophy content --></p>
</section>
```

### 3. **Missing Work/Portfolio Page** ⚠️ CRITICAL

Create work.html with:

```html
<section class="choreography">
    <h2>Choreographic Works</h2>
    
    <div class="work-item">
        <h3>Social Affairs</h3>
        <img src="images/social-affairs.jpg" alt="Social Affairs performance">
        <p>Performance venues and dates...</p>
    </div>
    
    <div class="work-item">
        <h3>Alive</h3>
        <img src="images/alive.jpg" alt="Alive performance">
        <p>Performance information...</p>
    </div>
</section>
```

### 4. **File Upload in Contact Form**

To add file upload capability:

```html
<!-- Update form to include enctype -->
<form class="contact-form" action="YOUR_BACKEND" method="POST" enctype="multipart/form-data">
    <!-- Add file input -->
    <div class="form-group">
        <label for="file">Attach File (optional)</label>
        <input type="file" id="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.png">
    </div>
</form>
```

**Note**: FormSubmit doesn't support file uploads. Use Formspree or custom backend.

### 5. **reCAPTCHA Protection**

For FormSubmit:
```html
<input type="hidden" name="_captcha" value="true">
```

For Google reCAPTCHA:
1. Get API keys from https://www.google.com/recaptcha
2. Add to HTML head:
   ```html
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>
   ```
3. Add to form:
   ```html
   <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
   ```

### 6. **Cookie Consent Banner**

Add before closing body tag:

```html
<div id="cookie-banner" style="position: fixed; bottom: 0; width: 100%; background: #333; color: white; padding: 20px; display: none;">
    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <p>We use cookies to improve your experience.</p>
        <button onclick="acceptCookies()" style="background: #ffc7ba; color: #333; border: none; padding: 10px 20px; cursor: pointer;">Accept</button>
    </div>
</div>

<script>
// Check if user has already accepted cookies
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}
</script>
```

### 7. **SEO Meta Tags**

Add to head section:

```html
<!-- Open Graph -->
<meta property="og:title" content="Rosari Sarasvaty - Award-Winning Dance Educator">
<meta property="og:description" content="Full time dance educator based in Bismarck, ND. Preserving Ballet legacy through Indonesian Lens.">
<meta property="og:image" content="https://yourdomain.com/images/rosari-profile.png">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Rosari Sarasvaty">
<meta name="twitter:description" content="Award-Winning Dance Educator">
<meta name="twitter:image" content="https://yourdomain.com/images/rosari-profile.png">
```

## 🎨 Optional Enhancements

### Loading Animation
```css
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffc7ba;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader.hidden {
    animation: fadeOut 0.5s;
    animation-fill-mode: forwards;
}

@keyframes fadeOut {
    100% { opacity: 0; visibility: hidden; }
}
```

### Scroll Animations
```html
<!-- Add AOS library -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
    AOS.init({
        duration: 1000,
        once: true
    });
</script>

<!-- Use on elements -->
<div data-aos="fade-up">Content</div>
```

## 📝 Deployment Checklist

- [ ] Update contact form email address
- [ ] Test contact form (remember to confirm FormSubmit email)
- [ ] Add missing About page content
- [ ] Create Work portfolio page
- [ ] Add file upload if needed (requires different form service)
- [ ] Implement cookie consent
- [ ] Add meta tags with your domain
- [ ] Test all links and navigation
- [ ] Verify mobile responsiveness
- [ ] Check that YouTube video plays
- [ ] Update README with your repository URL

## 🚨 Important Notes

1. **Email Configuration**: The contact form won't work until you update the email address and activate it
2. **Multi-page vs Single-page**: Current version is single-page. Original has multiple pages.
3. **Content**: Significant biographical and portfolio content is missing
4. **File Uploads**: Requires switching from FormSubmit to another service
5. **Domain**: Update all meta tag URLs when you have your GitHub Pages URL

## 💡 GitHub Pages URL Format
Your site will be available at:
```
https://[your-username].github.io/[repository-name]/
```

Example: `https://johndoe.github.io/rosari-website/`