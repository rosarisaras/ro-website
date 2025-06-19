---
layout: page
title: Contact Me
---

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
    background-color: #ffc7ba;
    color: #333;
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
}

.btn:hover {
    background-color: #ffb5a7;
    transform: translateY(-2px);
}
</style>

<p style="text-align: center; margin-bottom: 30px;">Get in Touch! Send me a message or ask me a question using this form.</p>

<form class="contact-form" action="https://formsubmit.co/sarasvatyrosari@gmail.com" method="POST">
    <!-- FormSubmit Configuration -->
    <input type="hidden" name="_subject" value="New message from RosariSarasvaty.com">
    <input type="hidden" name="_next" value="https://mrposch.github.io/ro-website/thank-you/">
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