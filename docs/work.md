---
layout: work
title: Choreographic Work
---

<style>
.work-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
}

/* Responsive title styling */
.work-title {
  font-size: 2rem;
  letter-spacing: 2px;
}

@media (min-width: 640px) {
  .work-title {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }
}

@media (min-width: 768px) {
  .work-title {
    font-size: 3rem;
    letter-spacing: 4px;
  }
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

@media (min-width: 640px) {
  .work-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 60px;
  }
}

.work-item {
  text-align: center;
  background: #111;
  padding: 30px;
  border: 1px solid #222;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.work-item:hover {
  border-color: #D4A574;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(212, 165, 116, 0.2);
}

.work-item h3 {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
}

.work-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.work-item:hover img {
  filter: grayscale(0%);
}

.work-item p {
  font-size: 1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 10px;
}

.work-item .photo-credit {
  font-size: 0.85rem;
  color: #666;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.video-container {
  position: relative;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;
  background: #000;
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