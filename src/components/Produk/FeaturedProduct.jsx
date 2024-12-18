import React from 'react';
import beliSekarangImage from '../../assets/images/beranda/beli-sekarang/beli-sekarang01.jpg';

const FeaturedProduct = () => {
  return (
    <div className="unggulan-container">
      <div className="unggulan-left">
        <h1>Produk Unggulan</h1>
        <h2>Jambu Merah Segar</h2>
        <p>Rp 35.000/Kg</p>
        <button className="unggulan-button">Beli Sekarang</button>
      </div>
      <div className="unggulan-right">
        <img
          src={beliSekarangImage}
          alt="Foto kebun"
          className="unggulan-photo"
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
