import React from 'react';
import keindahanKebun3 from '../../assets/images/beranda/keindahan-kebun/keindahan-kebun3.jpeg'; // Import gambar

const Landing = () => (
  <section className="landing">
    <div className="garden-beauty">
      <img
        src={keindahanKebun3} // Menggunakan gambar yang diimport
        alt="Keindahan Kebun"
        className="garden-image"
      />
      <h2>Selamat Datang di Kebun Kami!</h2>
      <p>Batam, Indonesia</p>
      <a href="#" className="explore-button">Jelajahi</a>
    </div>
  </section>
);

export default Landing;
