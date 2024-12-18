import React from 'react';

// Import semua gambar dan ikon
import PetikJambuImg from '../../assets/images/beranda/keseruan/petik-jambu01.webp';
import BerkudaImg from '../../assets/images/beranda/keseruan/berkuda03.jpg';
import SpotFotoImg from '../../assets/images/beranda/keseruan/spot-foto01.jpg';
import Icon1 from '../../assets/images/beranda/keseruan/icon01.png';
import Icon2 from '../../assets/images/beranda/keseruan/icon02.png';
import Icon3 from '../../assets/images/beranda/keseruan/icon03.png';

const Attractions = () => {
  // Data keseruan
  const attractions = [
    { src: PetikJambuImg, alt: 'Attraction 1', name: 'Kegiatan Petik Jambu', icon: Icon1 },
    { src: BerkudaImg, alt: 'Attraction 2', name: 'Kegiatan Berkuda', icon: Icon2 },
    { src: SpotFotoImg, alt: 'Attraction 3', name: 'Berburu Spotfoto', icon: Icon3 },
  ];

  return (
    <section className="attractions">
      <h3>Keseruan di Kebun Jambu Marina</h3>
      <p>Jelajahi berbagai keseruan di kebun kami yang pasti akan memikat hati Anda!</p>
      <div className="attraction-list">
        {attractions.map((attraction, index) => (
          <div key={index} className="attraction">
            <img src={attraction.src} alt={attraction.alt} className="attraction-image" />
            <div className="icon">
              <img src={attraction.icon} alt={`Icon ${index + 1}`} className="attraction-icon" />
            </div>
            <p>{attraction.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;
