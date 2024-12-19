import React, { useState } from "react";
import Header from "../components/Headeri/Header";
import Footer from "../components/Footeri/Footer";
import GalleryButtonGroup from "../components/Galeri/GalleryButtonGroup";
import ImageGallery from "../components/Galeri/ImageGallery";

// Import gambar dengan cara yang sama seperti di kode Anda
import Jambu00 from "../assets/images/galeri/jambu08.jpg";
import Jus00 from "../assets/images/galeri/jus01.jpg";
import Selai00 from "../assets/images/galeri/selai01.jpg";
import Keripik00 from "../assets/images/galeri/keripik03.webp";
import Hampers01 from "../assets/images/produk/hampers01.jpg";
import Kuda00 from "../assets/images/galeri/kuda02.jpg";
import Spot98 from "../assets/images/galeri/spot07.jpeg";
import Spot00 from "../assets/images/galeri/spot01.jpg";
// import kuda99 from "../assets/images/galeri/kuda04.jpg";
import Spot99 from "../assets/images/galeri/spot02.webp";

// // Anda dapat menambahkan lebih banyak gambar dengan cara yang sama
import Jambu01 from "../assets/images/galeri/jambu01.jpeg";
// import Jambu02 from "../assets/images/galeri/jambu02.jpg";
import Jambu03 from "../assets/images/galeri/jambu03.jpg";
import Jambu04 from "../assets/images/galeri/jambu04.webp";
import Jambu05 from "../assets/images/galeri/jambu05.jpeg";
import Jambu06 from "../assets/images/galeri/jambu06.jpg";
import Jambu07 from "../assets/images/galeri/jambu07.webp";
import Jambu08 from "../assets/images/galeri/jambu08.jpg";
import Jambu09 from "../assets/images/galeri/jambu09.jpg";
import Jambu10 from "../assets/images/galeri/jambu10.jpg";
import Jus01 from "../assets/images/galeri/jus01.jpg";
import Jus02 from "../assets/images/galeri/jus02.jpg";
import Jus03 from "../assets/images/galeri/jus03.jpg";
import Jus04 from "../assets/images/galeri/jus04.jpg";
import Jambu15 from "../assets/images/galeri/jambu15.webp";
import Jambu16 from "../assets/images/galeri/jambu16.jpg";
import Jambu17 from "../assets/images/galeri/jambu17.jpg";
import Jambu18 from "../assets/images/galeri/jambu18.jpg";
import Selai01 from "../assets/images/galeri/selai01.jpg";
import Selai02 from "../assets/images/galeri/selai02.jpg";
import Selai05 from "../assets/images/galeri/selai05.jpg";
import Selai04 from "../assets/images/galeri/selai04.jpg";
import Jambu23 from "../assets/images/galeri/jambu23.jpg";
import Jambu24 from "../assets/images/galeri/jambu24.jpeg";
import Jambu25 from "../assets/images/galeri/jambu25.jpg";
import Jambu26 from "../assets/images/galeri/jambu26.webp";
import Keripik01 from "../assets/images/galeri/keripik01.jpg";
import Keripik02 from "../assets/images/galeri/keripik02.jpg";
import Keripik03 from "../assets/images/galeri/keripik03.webp";
import Keripik04 from "../assets/images/galeri/keripik04.jpeg";
import Jambu27 from "../assets/images/galeri/jambu27.jpg";
import Jambu28 from "../assets/images/galeri/jambu28.webp";
import Jambu29 from "../assets/images/galeri/jambu29.jpeg";
import Jambu30 from "../assets/images/galeri/jambu30.jpg";

import Kuda01 from "../assets/images/galeri/kuda01.jpg";
import Kuda02 from "../assets/images/galeri/kuda02.jpg";
import Kuda03 from "../assets/images/galeri/kuda03.jpg";
// import Kuda04 from "../assets/images/galeri/kuda04.jpg";
import Kuda05 from "../assets/images/galeri/kuda05.jpg";
import Kuda06 from "../assets/images/galeri/kuda06.jpg";
import Kuda07 from "../assets/images/galeri/kuda07.jpg";
import Kuda08 from "../assets/images/galeri/kuda08.jpeg";
import Kuda09 from "../assets/images/galeri/kuda09.jpg";
import Kuda10 from "../assets/images/galeri/kuda10.jpg";
import Kuda11 from "../assets/images/galeri/kuda11.jpg";
import Kuda12 from "../assets/images/galeri/kuda12.jpg";
// import kuda13 from "../assets/images/galeri/kuda13.jpg";
import Kuda14 from "../assets/images/galeri/kuda14.jpg";
import Kuda15 from "../assets/images/galeri/kuda15.jpg";
import Kuda16 from "../assets/images/galeri/kuda16.jpg";
import Kuda17 from "../assets/images/galeri/kuda17.webp";
import Kuda18 from "../assets/images/galeri/kuda18.jpeg";
import Kuda19 from "../assets/images/galeri/kuda19.jpg";
import Kuda20 from "../assets/images/galeri/kuda20.jpg";
import Kuda21 from "../assets/images/galeri/kuda21.jpg";
import Kuda22 from "../assets/images/galeri/kuda22.jpg";
import Kuda23 from "../assets/images/galeri/kuda23.jpg";

import Spot01 from "../assets/images/galeri/spot01.jpg";
import Spot02 from "../assets/images/galeri/spot02.webp";
import Spot03 from "../assets/images/galeri/spot03.jpg";
import Spot04 from "../assets/images/galeri/spot04.jpg";
import Spot05 from "../assets/images/galeri/spot05.jpg";
import Spot06 from "../assets/images/galeri/spot06.webp";
import Spot07 from "../assets/images/galeri/spot07.jpeg";
import Spot08 from "../assets/images/galeri/spot08.jpg";
import Spot09 from "../assets/images/galeri/spot09.jpeg";
import Spot10 from "../assets/images/galeri/spot10.jpeg";
import Spot11 from "../assets/images/galeri/spot11.webp";
import Spot12 from "../assets/images/galeri/spot12.webp";
import Spot13 from "../assets/images/galeri/spot13.jpg";
import Spot14 from "../assets/images/galeri/spot14.png";
import Spot15 from "../assets/images/galeri/spot15.webp";
import Spot16 from "../assets/images/galeri/spot16.webp";
import Spot17 from "../assets/images/galeri/spot17.jpg";
import Spot18 from "../assets/images/galeri/spot18.jpg";
import Spot19 from "../assets/images/galeri/spot19.jpg";
import Spot20 from "../assets/images/galeri/spot20.webp";
import Spot21 from "../assets/images/galeri/spot21.jpg";
import Spot22 from "../assets/images/galeri/spot22.jpg";
import Spot23 from "../assets/images/galeri/spot23.jpg";

import Image01 from "../assets/images/galeri/image01.jpg";
import Image02 from "../assets/images/galeri/image02.jpg";
import Image03 from "../assets/images/galeri/image03.webp";
import Image04 from "../assets/images/galeri/image04.jpg";
import Image05 from "../assets/images/galeri/image05.jpg";
import Image06 from "../assets/images/galeri/image06.jpeg";
import Image07 from "../assets/images/galeri/image07.jpg";
import Image08 from "../assets/images/galeri/image08.jpg";
import Image09 from "../assets/images/galeri/image09.jpg";
import Image10 from "../assets/images/galeri/image10.jpg";
import Image11 from "../assets/images/galeri/image11.jpg";
import Image12 from "../assets/images/galeri/image12.jpg";
import Image13 from "../assets/images/galeri/image13.webp";
import Image14 from "../assets/images/galeri/image14.jpg";
import Image15 from "../assets/images/galeri/image15.jpg";
import Image16 from "../assets/images/galeri/image16.jpeg";
import Image17 from "../assets/images/galeri/image17.jpg";
import Image18 from "../assets/images/galeri/image18.jpg";
import Image19 from "../assets/images/galeri/image19.jpg";
import Image20 from "../assets/images/galeri/image20.jpg";
import Image21 from "../assets/images/galeri/image21.jpg";
import Image22 from "../assets/images/galeri/image22.jpg";
import Image23 from "../assets/images/galeri/image23.webp";


// Objek photos dengan gambar yang sudah diimpor
const photos = {
  utama: [
    Jambu00,
    Jus00,
    Selai00,
    Keripik00,
    Hampers01,
    Kuda00,
    Spot98,
    Spot00,
    // kuda99,
    Spot99,
    // ...tambahkan gambar lainnya sesuai kebutuhan
  ],
  jambu: [
    Jambu01,
    // Jambu02,
    Jambu03,
    Jambu04,
    Jambu05,
    Jambu06,
    Jambu07,
    Jambu08,
    Jambu09,
    Jambu10,
    Jus01,
    Jus02,
    Jus03,
    Jus04,
    Jambu15,
    Jambu16,
    Jambu17,
    Jambu18,
    Selai01,
    Selai02,
    Selai05,
    Selai04,
    Jambu23,
    Jambu24,
    Jambu25,
    Jambu26,
    Keripik01,
    Keripik02,
    Keripik03,
    Keripik04,
    Jambu27,
    Jambu28,
    Jambu29,
    Jambu30,
    // Tambahkan gambar lain sesuai kebutuhan
  ],

  kuda: [
    Kuda01,
    Kuda02,
    Kuda03,
    // Kuda04,
    Kuda05,
    Kuda06,
    Kuda07,
    Kuda08,
    Kuda09,
    Kuda10,
    Kuda11,
    Kuda12,
    // Kuda13,
    Kuda14,
    Kuda15,
    Kuda16,
    Kuda17,
    Kuda18,
    Kuda19,
    Kuda20,
    Kuda21,
    Kuda22,
    Kuda23,
    // Tambahkan gambar lain sesuai kebutuhan
  ],

  spot: [
    Spot01,
    Spot02,
    Spot03,
    Spot04,
    Spot05,
    Spot06,
    Spot07,
    Spot08,
    Spot09,
    Spot10,
    Spot11,
    Spot12,
    Spot13,
    Spot14,
    Spot15,
    Spot16,
    Spot17,
    Spot18,
    Spot19,
    Spot20,
    Spot21,
    Spot22,
    Spot23,
    // Tambahkan gambar lain sesuai kebutuhan
  ],

  lainnya: [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    // Tambahkan gambar lain sesuai kebutuhan
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("utama");

  return (
    <main>
      <Header />
      <section className="galeri-header">
        <h2>Galeri Kami</h2>
        <p>
          Tak kenal maka tak sayang, lebih dekat dengan
          <span className="highlight2"> Kebun Jambu Marina</span>
        </p>
        <p className="slogan">
          "Jelajahi keindahan kebun dan berbagai momen menarik yang terabadikan
          di sini."
        </p>
      </section>

      {/* Group button for category selection */}
      <GalleryButtonGroup onCategorySelect={setSelectedCategory} />

      {/* Render gallery based on selected category */}
      <section className="photo-gallery" id="photo-gallery">
        <ImageGallery category={selectedCategory} photos={photos} />
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
