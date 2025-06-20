import { test, expect } from '@playwright/test';

// Test configurations for different devices
const devices = [
  { name: 'iPhone 13', viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1' },
  { name: 'Samsung Galaxy S21', viewport: { width: 360, height: 800 }, userAgent: 'Mozilla/5.0 (Linux; Android 11; Samsung Galaxy S21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36' },
  { name: 'iPad', viewport: { width: 768, height: 1024 }, userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1' },
  { name: 'Desktop', viewport: { width: 1920, height: 1080 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
];

const baseURL = 'https://mrposch.github.io/ro-website/';

devices.forEach(device => {
  test.describe(`Responsive Tests - ${device.name}`, () => {
    test.use({
      viewport: device.viewport,
      userAgent: device.userAgent
    });

    test('Homepage hero image displays correctly', async ({ page }) => {
      await page.goto(baseURL);
      
      // Wait for hero section to load
      const heroSection = page.locator('section.hero-bg-full');
      await expect(heroSection).toBeVisible();
      
      // Check background image is loaded
      const backgroundImage = await heroSection.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.backgroundImage;
      });
      expect(backgroundImage).toContain('about-section-image.jpg');
      
      // Check background size
      const backgroundSize = await heroSection.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.backgroundSize;
      });
      
      // Mobile should use contain, desktop can use auto
      if (device.viewport.width < 768) {
        expect(backgroundSize).toBe('contain');
      }
      
      // Take screenshot for visual comparison
      await page.screenshot({ 
        path: `screenshots/homepage-${device.name.toLowerCase().replace(' ', '-')}.png`,
        fullPage: false 
      });
    });

    test('About page image displays correctly', async ({ page }) => {
      await page.goto(baseURL + 'about/');
      
      // Wait for about image section
      const aboutImage = page.locator('.about-bg-centered');
      await expect(aboutImage).toBeVisible();
      
      // Check background image
      const backgroundImage = await aboutImage.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.backgroundImage;
      });
      expect(backgroundImage).toContain('rosari-profile.png');
      
      // Check font consistency
      const paragraphs = page.locator('.bg-charcoal p');
      const count = await paragraphs.count();
      
      for (let i = 0; i < count; i++) {
        const fontSize = await paragraphs.nth(i).evaluate((el) => {
          const style = window.getComputedStyle(el);
          return style.fontSize;
        });
        // All paragraphs should have the same font size (18px for text-lg)
        expect(fontSize).toBe('18px');
      }
      
      await page.screenshot({ 
        path: `screenshots/about-${device.name.toLowerCase().replace(' ', '-')}.png`,
        fullPage: false 
      });
    });

    test('Navigation bar displays correctly', async ({ page }) => {
      await page.goto(baseURL);
      
      const navbar = page.locator('#navbar');
      await expect(navbar).toBeVisible();
      
      // Check initial background
      const initialBg = await navbar.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.backgroundColor;
      });
      
      // Should have semi-transparent black background
      expect(initialBg).toMatch(/rgba?\(0,\s*0,\s*0,\s*0\.7\)/);
      
      // Scroll down to test navbar changes
      await page.evaluate(() => window.scrollBy(0, 100));
      await page.waitForTimeout(500);
      
      const scrolledBg = await navbar.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.backgroundColor;
      });
      
      // Should change to solid black when scrolled
      expect(scrolledBg).toMatch(/rgba?\(0,\s*0,\s*0/);
    });
  });
});