import React from 'react';

// Import gambar
import hampersImage from '../../assets/images/produk/hampers01.jpg';
import selaiJambuImage from '../../assets/images/produk/selaijambu01.jpg';
import kripikJambuImage from '../../assets/images/produk/kripikjambu01.webp';
import jusJambuImage from '../../assets/images/produk/jusjambu01.jpg';

const ProductGallery = () => {
  return (
    <div className="photo-gallery2">
      <div className="photo-box2">
        <img src={hampersImage} alt="Photo 1" />
      </div>
      <div className="photo-box2">
        <img src={selaiJambuImage} alt="Photo 2" />
      </div>
      <div className="photo-box2">
        <img src={kripikJambuImage} alt="Photo 3" />
      </div>
      <div className="photo-box2">
        <img src={jusJambuImage} alt="Photo 4" />
      </div>
    </div>
  );
};

export default ProductGallery;
