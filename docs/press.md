---
layout: default
title: Press
---

<div class="bg-black text-white min-h-screen py-20">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Press Section -->
    <section class="mb-20">
      <h2 class="text-5xl font-quicksand font-light text-center mb-4 tracking-wide">Press</h2>
      <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Media coverage and reviews of Rosari's performances and teaching</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {% for item in site.data.press %}
          {% assign index = forloop.index | modulo: 2 %}
          <a href="{{ item.url }}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="block p-8 {% if index == 0 %}bg-white text-black{% else %}bg-charcoal text-white{% endif %} hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
            <h3 class="font-bold text-xl mb-3 uppercase tracking-wide">{{ item.title }}</h3>
            <p class="{% if index == 0 %}text-gray-700{% else %}text-gray-400{% endif %} text-sm mb-4">{{ item.publication }}</p>
            <span class="inline-block mt-3 text-gold text-sm font-bold uppercase tracking-wider">
              Read more <i class="fas fa-arrow-right ml-2"></i>
            </span>
          </a>
        {% endfor %}
      </div>
    </section>

    <!-- Publications Section -->
    <section>
      <h2 class="text-5xl font-quicksand font-light text-center mb-4 tracking-wide">Publications</h2>
      <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Articles and essays written by Rosari</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {% for item in site.data.publications %}
          {% assign index = forloop.index | modulo: 2 %}
          <a href="{{ item.url }}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="block p-8 {% if index == 1 %}bg-white text-black{% else %}bg-charcoal text-white{% endif %} hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
            <h3 class="font-bold text-xl mb-3 uppercase tracking-wide">{{ item.title }}</h3>
            <p class="{% if index == 1 %}text-gray-700{% else %}text-gray-400{% endif %} text-sm mb-4">{{ item.publication }}</p>
            <span class="inline-block mt-3 text-gold text-sm font-bold uppercase tracking-wider">
              Read article <i class="fas fa-arrow-right ml-2"></i>
            </span>
          </a>
        {% endfor %}
      </div>
    </section>
  </div>
</div>