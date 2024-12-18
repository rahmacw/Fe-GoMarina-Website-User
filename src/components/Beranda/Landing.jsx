import React from "react";

const Landing = () => (
  <section className="landing">
    <div className="garden-beauty">
      <img
        src="src/assets/images/beranda/keindahan-kebun/keindahan-kebun3.jpeg"
        alt="Keindahan pemandangan kebun kami yang asri dan menenangkan"
        className="garden-image"
        onError={(e) => {
          e.target.onerror = null; // Mencegah loop error
          e.target.src = "src/assets/images/default-image.jpeg"; // Fallback gambar
        }}
      />
      <h2>Selamat Datang di Kebun Kami!</h2>
      <p>Batam, Indonesia</p>
      <a href="#explore" className="explore-button">
        Jelajahi
      </a>
    </div>
  </section>
);

export default Landing;
