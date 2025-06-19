---
layout: work
title: Choreographic Work
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
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.work-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 20px;
}

.work-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 10px;
}

.work-item .photo-credit {
  font-size: 0.9rem;
  color: #999;
  margin-top: 20px;
}

.video-container {
  position: relative;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;
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