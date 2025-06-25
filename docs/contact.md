---
layout: default
title: Contact
---

<div class="bg-black text-white min-h-screen py-20">
  <div class="max-w-2xl mx-auto px-4">
    <h1 class="text-5xl font-quicksand font-light text-center mb-4 tracking-wide">Get in Touch</h1>
    <p class="text-center mb-12 text-gray-400 text-lg">Send me a message or ask me a question using this form.</p>
    
    <div class="bg-white text-black p-8 md:p-12 shadow-2xl">
      <style>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ffc7ba;
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.btn {
    background-color: #D4A574;
    color: #000;
    padding: 14px 40px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
}

.btn:hover {
    background-color: #E5B885;
    transform: scale(1.05);
}
</style>

      <form class="contact-form" action="https://formsubmit.co/sarasvatyrosari@gmail.com" method="POST">
    <!-- FormSubmit Configuration -->
    <input type="hidden" name="_subject" value="New message from RosariSarasvaty.com">
    <input type="hidden" name="_next" value="{{ '/thank-you/' | absolute_url }}">
    <input type="hidden" name="_captcha" value="false">
    <input type="text" name="_honey" style="display:none">
    
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    <div class="form-group" style="text-align: center;">
        <button type="submit" class="btn">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>