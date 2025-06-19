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

<!-- Press Section -->
<section class="py-16">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-quicksand font-bold text-center mb-12">Press</h2>
    <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Media coverage and reviews of Rosari's performances and teaching</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {% for item in site.data.press %}
        <a href="{{ item.url }}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-200">
          <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm">{{ item.publication }}</p>
          <span class="inline-block mt-3 text-rose text-sm font-medium">
            Read more <i class="fas fa-external-link-alt ml-1"></i>
          </span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Publications Section -->
<section class="bg-gray-50 py-16">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-quicksand font-bold text-center mb-12">Publications</h2>
    <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Articles and essays written by Rosari</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {% for item in site.data.publications %}
        <a href="{{ item.url }}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-200">
          <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm">{{ item.publication }}</p>
          <span class="inline-block mt-3 text-rose text-sm font-medium">
            Read article <i class="fas fa-external-link-alt ml-1"></i>
          </span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Contact Form -->
{% include contact-form.html %}