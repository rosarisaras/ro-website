---
layout: page
title: Contact
---

<div class="max-w-2xl mx-auto">
  <p class="text-center mb-8 text-lg">Get in Touch! Send me a message or ask me a question using this form.</p>
  
  <form action="https://formsubmit.co/{{ site.author.email }}" method="POST" class="space-y-6">
    <!-- FormSubmit Configuration -->
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://mrposch.github.io/ro-website/thank-you/">
    <input type="hidden" name="_subject" value="New message from RosariSarasvaty.com">
    
    <!-- Name Field -->
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input type="text" 
             name="name" 
             id="name"
             required 
             class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition">
    </div>
    
    <!-- Email Field -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" 
             name="email" 
             id="email"
             required 
             class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition">
    </div>
    
    <!-- Message Field -->
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea name="message" 
                id="message"
                required 
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition resize-none"></textarea>
    </div>
    
    <!-- Submit Button -->
    <div class="text-center">
      <button type="submit" 
              class="bg-rose text-white px-8 py-3 rounded-full font-medium hover:bg-rose-light transform hover:scale-105 transition duration-200">
        Send Message
      </button>
    </div>
  </form>
  
  <!-- Alternative Contact -->
  <div class="mt-8 text-center">
    <p class="text-gray-600">
      Or connect on 
      <a href="{{ site.social.instagram }}" 
         target="_blank" 
         rel="noopener noreferrer"
         class="text-rose hover:text-rose-light transition font-medium">
        Instagram <i class="fab fa-instagram ml-1"></i>
      </a>
    </p>
  </div>
</div>