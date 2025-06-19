---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="gradient-bg py-20">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-quicksand font-bold text-white mb-4">
          Award-Winning Dance Educator
        </h1>
        <div class="mt-8">
          <a href="{{ '/work/' | relative_url }}" class="inline-block bg-white text-rose px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-lg">
            Work
          </a>
        </div>
      </div>
      <div class="flex justify-center">
        <img src="{{ '/assets/img/rosari-profile.png' | relative_url }}" 
             alt="Rosari Sarasvaty portrait" 
             class="rounded-lg shadow-2xl max-w-full h-auto">
      </div>
    </div>
  </div>
</section>


<!-- Featured Video -->
<section class="bg-gray-50 py-16">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-quicksand font-bold text-center mb-8">Featured Work</h2>
    <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
      <iframe src="https://www.youtube.com/embed/Ee_5Jnic8SA" 
              title="Featured performance video"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              loading="lazy">
      </iframe>
    </div>
    <p class="text-center mt-4 text-gray-600">
      <em>Featured performance</em>
    </p>
  </div>
</section>

