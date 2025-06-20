---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center parallax-bg hero-bg-full" style="background-image: url('{{ '/assets/img/about-section-image.jpg' | relative_url }}');">
  <div class="absolute inset-0 parallax-overlay"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
    <div class="text-center md:text-left max-w-2xl mx-auto md:mx-0">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-quicksand font-bold text-white mb-6 tracking-wide fade-in">
        Award-Winning<br>Dance Educator
      </h1>
      <p class="text-xl text-gray-300 mb-8 fade-in" style="animation-delay: 0.2s;">
        Bridging cultures through movement and artistic expression
      </p>
      <div class="mt-8 fade-in" style="animation-delay: 0.4s;">
        <a href="{{ '/work/' | relative_url }}" class="inline-block bg-gold text-black px-10 py-4 font-bold uppercase tracking-wider hover:bg-gold-light transform hover:scale-105 transition duration-300">
          Explore My Work
        </a>
      </div>
    </div>
  </div>
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <i class="fas fa-chevron-down text-2xl"></i>
  </div>
</section>


<!-- Featured Video -->
<section class="bg-black py-24">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-4xl font-quicksand font-bold text-center mb-12 text-white tracking-wide fade-in">Featured Performance</h2>
    <div class="relative pb-[56.25%] h-0 overflow-hidden shadow-2xl fade-in">
      <iframe src="https://www.youtube.com/embed/Ee_5Jnic8SA" 
              title="Featured performance video"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              loading="lazy">
      </iframe>
    </div>
  </div>
</section>

<script>
  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
  });
</script>

