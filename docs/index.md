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
        <p class="text-xl text-white/90 mb-8 font-light">
          Indonesian-American choreographer bridging cultures through movement
        </p>
        <div class="space-x-4">
          <a href="{{ '/work/' | relative_url }}" class="inline-block bg-white text-rose px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            View My Work
          </a>
          <a href="#contact" class="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-rose transition">
            Get in Touch
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

<!-- Artist Statement -->
<section class="py-16">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-quicksand font-bold text-center mb-8">Artist Statement</h2>
    <div class="prose prose-lg max-w-none text-gray-700">
      <p>
        As an Indonesian-American dance artist, I create work that bridges my Indonesian heritage with contemporary American dance forms. My choreography explores themes of cultural identity, displacement, and the universal language of movement that transcends borders.
      </p>
      <p>
        Through my practice, I seek to challenge Western perspectives on Indonesian dance while honoring the traditional forms that shaped my artistic foundation. Each piece I create is a conversation between past and present, tradition and innovation, East and West.
      </p>
      <p>
        My teaching philosophy centers on creating inclusive spaces where dancers of all backgrounds can explore movement as a tool for personal and cultural expression. I believe dance has the power to build bridges between communities and foster cross-cultural understanding.
      </p>
    </div>
  </div>
</section>

<!-- Featured Video -->
<section class="bg-gray-50 py-16">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-quicksand font-bold text-center mb-8">Featured Work</h2>
    <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Featured performance video"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              loading="lazy">
      </iframe>
    </div>
    <p class="text-center mt-4 text-gray-600">
      <em>"Alive" - Premiered at The Kitchen, NYC</em>
    </p>
  </div>
</section>

<!-- Press Section -->
<section class="py-16">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-quicksand font-bold text-center mb-12">Press & Publications</h2>
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

<!-- Contact Form -->
{% include contact-form.html %}