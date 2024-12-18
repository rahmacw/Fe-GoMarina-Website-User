import React from "react";

// Import gambar
import testimoniImage from '../../assets/images/produk/testimoni/testimoni01.jpg';

const Testimonial = () => {
  return (
    <div className="testimoni">
      <h3>Testimoni</h3>
      <div className="testimonial-box">
        <div className="testimonial-item">
          <p className="comment">"Produk sangat bagus, saya sangat puas!"</p>
          <div className="user-info">
            <img
              src={testimoniImage}
              alt="User 1"
              className="user-photo"
            />
            <p className="user-name">Rahma Ajjahe</p>
          </div>
        </div>
        <div className="testimonial-item">
          <p className="comment">
            "Pengiriman cepat dan produk segar, recommended!"
          </p>
          <div className="user-info">
            <img
              src={testimoniImage}
              alt="User 2"
              className="user-photo"
            />
            <p className="user-name">Rihmi Baswedan</p>
          </div>
        </div>
        <div className="testimonial-item">
          <p className="comment">"Kualitas terbaik, pasti beli lagi!"</p>
          <div className="user-info">
            <img
              src={testimoniImage}
              alt="User 3"
              className="user-photo"
            />
            <p className="user-name">Rohmo Amin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
