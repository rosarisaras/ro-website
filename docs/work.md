---
layout: page
title: Work
---

<style>
.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.work-item {
  text-align: center;
}

.work-item h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.work-item img {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 20px;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.work-item p {
  margin-bottom: 10px;
  color: #333;
}

.work-item .photo-credit {
  font-style: italic;
  color: #666;
  font-size: 0.9rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto 20px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<div class="work-grid">
  <!-- One Take -->
  <div class="work-item">
    <h3>One Take</h3>
    <img src="{{ '/assets/img/one-take-photo.png' | relative_url }}" alt="One Take performance">
    <p>Original dance piece created for Dance+, October 2024, Bismarck, ND</p>
    <p>Restaged at Deer Widow event, November 2024, Bismarck, ND</p>
    <p class="photo-credit">Photo: Northern Plains Dance</p>
  </div>
  
  <!-- Social Affairs -->
  <div class="work-item">
    <h3>Social Affairs</h3>
    <div class="video-container">
      <iframe src="https://player.vimeo.com/video/1025960881?h=29d370263c&autoplay=0&loop=0&muted=0" 
              frameborder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowfullscreen>
      </iframe>
    </div>
    <p>Commissioned piece performed at Capital A Fair, Juneteenth Event, Music in Missouri and Family River Day Walk Bismarck, North Dakota.</p>
    <p class="photo-credit">Video: Jakob Olson</p>
  </div>
  
  <!-- Alive -->
  <div class="work-item">
    <h3>Alive</h3>
    <img src="{{ '/assets/img/alive-photo.png' | relative_url }}" alt="Alive performance">
    <p>Original dance piece created for Dance+, October 2023.</p>
    <p>Restaged at Indonesian Night Event by NDAAACI, May 2024.</p>
    <p class="photo-credit">Photo: Northern Plains Dance, DeAnne Adair</p>
  </div>
</div>