import React from "react";
import beliSekarangImage from "../../assets/images/beranda/beli-sekarang/beli-sekarang01.jpg";

const VisitSection = () => (
  <div className="visit-container">
    <div className="visit-left">
      <h2>Buah Jambu Segar Langsung dari Pohonnya!</h2>
      <button className="visit-button">Beli Sekarang</button>
    </div>
    <div className="visit-right">
      <img
        src={beliSekarangImage}
        alt="Foto kebun"
        className="visit-photo"
      />
    </div>
  </div>
);

export default VisitSection;
