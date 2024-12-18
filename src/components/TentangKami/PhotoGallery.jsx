import React from "react";

// Import gambar
import spotFoto03 from "../../assets/images/tentang-kami/spot-foto03.jpg";
import jambu03 from "../../assets/images/tentang-kami/jambu03.jpg";
import jambuMerah03 from "../../assets/images/tentang-kami/jambu-merah03.jpg";
import berkuda01 from "../../assets/images/tentang-kami/berkuda01.jpg";

const PhotoGallery = () => (
  <div className="photo-gallery2">
    <div className="photo-box2">
      <img src={spotFoto03} alt="Photo 1" />
    </div>
    <div className="photo-box2">
      <img src={jambu03} alt="Photo 2" />
    </div>
    <div className="photo-box2">
      <img src={jambuMerah03} alt="Photo 3" />
    </div>
    <div className="photo-box2">
      <img src={berkuda01} alt="Photo 4" />
    </div>
  </div>
);

export default PhotoGallery;
