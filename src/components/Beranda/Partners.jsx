import React from 'react';
import mitra01 from '../../assets/images/beranda/mitra-kerjasama/mitra00.jpg'; // Mengimpor gambar

const Partners = () => (
  <div className="partners">
    <h3>Mitra Kerjasama</h3>
    <div className="partner-list">
      <div className="partner">
        <img src={mitra01} alt="Partner 1" className="partner-image" />
        <p>Partner 1</p>
      </div>
      <div className="partner">
        <img src={mitra01} alt="Partner 2" className="partner-image" />
        <p>Partner 2</p>
      </div>
      <div className="partner">
        <img src={mitra01} alt="Partner 3" className="partner-image" />
        <p>Partner 3</p>
      </div>
      <div className="partner">
        <img src={mitra01} alt="Partner 4" className="partner-image" />
        <p>Partner 4</p>
      </div>
    </div>
  </div>
);

export default Partners;
