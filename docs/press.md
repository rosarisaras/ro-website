---
layout: page
title: Press
---

<!-- Press Section -->
<section class="mb-16">
  <h2 class="text-3xl font-quicksand font-bold text-center mb-8">Press</h2>
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
</section>

<!-- Publications Section -->
<section>
  <h2 class="text-3xl font-quicksand font-bold text-center mb-8">Publications</h2>
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
</section>