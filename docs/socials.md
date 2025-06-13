---
layout: page
title: Connect
subtitle: Let's Stay in Touch
---

<div class="max-w-2xl mx-auto text-center">
  <p class="text-lg text-gray-700 mb-12">
    Follow my journey, upcoming performances, and behind-the-scenes moments. 
    I love connecting with fellow artists, students, and dance enthusiasts from around the world.
  </p>
  
  <!-- Social Media Links -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    <!-- Instagram -->
    <a href="https://www.instagram.com/rosari.sarasvaty" 
       target="_blank" 
       rel="noopener noreferrer"
       class="group bg-gradient-to-br from-purple-600 to-pink-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
      <i class="fab fa-instagram text-5xl mb-4"></i>
      <h3 class="text-xl font-semibold mb-2">Instagram</h3>
      <p class="text-sm opacity-90">@rosari.sarasvaty</p>
      <p class="text-xs mt-2 opacity-75">Daily updates & stories</p>
    </a>
    
    <!-- YouTube -->
    <a href="https://www.youtube.com/@rosarisarasvaty" 
       target="_blank" 
       rel="noopener noreferrer"
       class="group bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
      <i class="fab fa-youtube text-5xl mb-4"></i>
      <h3 class="text-xl font-semibold mb-2">YouTube</h3>
      <p class="text-sm opacity-90">Performance Videos</p>
      <p class="text-xs mt-2 opacity-75">Full performances & rehearsals</p>
    </a>
    
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/rosarisarasvaty" 
       target="_blank" 
       rel="noopener noreferrer"
       class="group bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
      <i class="fab fa-linkedin text-5xl mb-4"></i>
      <h3 class="text-xl font-semibold mb-2">LinkedIn</h3>
      <p class="text-sm opacity-90">Professional Network</p>
      <p class="text-xs mt-2 opacity-75">Connect professionally</p>
    </a>
    
    <!-- Email -->
    <a href="mailto:contact@rosarisarasvaty.com" 
       class="group bg-gradient-to-br from-gray-700 to-gray-800 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
      <i class="fas fa-envelope text-5xl mb-4"></i>
      <h3 class="text-xl font-semibold mb-2">Email</h3>
      <p class="text-sm opacity-90">Direct Contact</p>
      <p class="text-xs mt-2 opacity-75">For inquiries & bookings</p>
    </a>
  </div>
  
  <!-- Newsletter Signup -->
  <div class="bg-gray-50 p-8 rounded-lg">
    <h3 class="text-2xl font-quicksand font-bold mb-4">Stay Updated</h3>
    <p class="text-gray-700 mb-6">
      Join my mailing list for exclusive updates on performances, workshops, and new projects.
    </p>
    <form action="https://formsubmit.co/{{ site.author.email }}" method="POST" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input type="hidden" name="_subject" value="Newsletter Signup">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      
      <input type="email" 
             name="email" 
             placeholder="your@email.com" 
             required
             class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent">
      <button type="submit" 
              class="bg-rose text-white px-6 py-2 rounded-lg font-medium hover:bg-rose-light transition">
        Subscribe
      </button>
    </form>
  </div>
  
  <!-- Press & Booking -->
  <div class="mt-12 text-center">
    <h3 class="text-xl font-semibold mb-4">Press & Booking Inquiries</h3>
    <p class="text-gray-700 mb-6">
      For press inquiries, booking requests, or collaboration proposals, 
      please reach out directly via email or use the contact form.
    </p>
    <a href="#contact" class="inline-block bg-rose text-white px-6 py-3 rounded-full font-medium hover:bg-rose-light transition">
      Get in Touch
    </a>
  </div>
</div>