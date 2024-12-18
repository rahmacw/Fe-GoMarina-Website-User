import React, { useState } from "react";

// Import gambar
import EdukasiImg1 from "../../assets/images/beranda/events/318645312_578979120900416_6893596396895876804_n.jpg";
import EdukasiImg2 from "../../assets/images/beranda/events/358624958_745074407624219_4465351795485306425_n.jpg";
import EdukasiImg3 from "../../assets/images/beranda/events/317254124_573769204754741_8396730107013407217_n.jpg";
import EdukasiImg4 from "../../assets/images/beranda/events/343008414_201893035934292_3960715171472386692_n.jpg";
import EdukasiImg5 from "../../assets/images/beranda/events/311709569_540698441395151_4449539582975652038_n.jpg";
import EdukasiImg6 from "../../assets/images/beranda/events/318699670_580288514102810_1252538392352504186_n.jpg";

import CampingImg1 from "../../assets/images/beranda/events/359730180_750099627121697_3275582358801092002_n.jpg";
import CampingImg2 from "../../assets/images/beranda/events/360098021_750099630455030_8410371449244262086_n.jpg";
import CampingImg3 from "../../assets/images/beranda/events/361389758_750127533785573_7646092004366786453_n.jpg";
import CampingImg4 from "../../assets/images/beranda/events/358067852_743060831158910_6458985334652824332_n.jpg";
import CampingImg5 from "../../assets/images/beranda/events/353393113_726704582794535_4613133442767533565_n.jpg";
import CampingImg6 from "../../assets/images/beranda/events/347561275_746049980859995_5216020441114785344_n.jpg";

import MasakMasakImg1 from "../../assets/images/beranda/events/361279975_750094477122212_1943713342430931085_n.jpg";
import MasakMasakImg2 from "../../assets/images/beranda/events/361095984_750127530452240_4663499174683286176_n.jpg";
import MasakMasakImg3 from "../../assets/images/beranda/events/347553663_746050460859947_6467961036414005161_n.jpg";
import MasakMasakImg4 from "../../assets/images/beranda/events/361337738_750094473788879_4455666190822216214_n.jpg";
import MasakMasakImg5 from "../../assets/images/beranda/events/322185909_1233665460520481_4201254790232842075_n.jpg";
import MasakMasakImg6 from "../../assets/images/beranda/events/356805488_737058671759126_1513009862667231109_n.jpg";

function Events() {
  const [expandedEvents, setExpandedEvents] = useState({});

  const toggleDescription = (index) => {
    setExpandedEvents((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const eventsData = [
    {
      title: "Edukasi",
      shortDescription: "Pelajari tentang pertanian organik, teknik bercocok tanam ramah lingkungan, dan banyak lagi!",
      fullDescription:
        "Pelajari tentang pertanian organik, teknik bercocok tanam ramah lingkungan, dan banyak lagi! Dapatkan wawasan baru dalam setiap sesi yang kami tawarkan. Jangan lewatkan kesempatan untuk memperdalam pengetahuan Anda di kebun kami.",
      images: [EdukasiImg1, EdukasiImg2, EdukasiImg3, EdukasiImg4, EdukasiImg5, EdukasiImg6],
    },
    {
      title: "Camping",
      shortDescription: "Nikmati malam yang tak terlupakan dengan camping di tengah alam.",
      fullDescription:
        "Nikmati malam yang tak terlupakan dengan camping di tengah alam. Bawa tenda dan bersiaplah untuk merasakan sensasi tidur di bawah bintang, dikelilingi keindahan alam Kebun Kami.",
      images: [CampingImg1, CampingImg2, CampingImg3, CampingImg4, CampingImg5, CampingImg6],
    },
    {
      title: "Masak-masak",
      shortDescription: "Ikuti sesi masak-masak seru dan praktis menggunakan bahan-bahan segar dari kebun.",
      fullDescription:
        "Ikuti sesi masak-masak seru dan praktis menggunakan bahan-bahan segar dari kebun. Belajar memasak hidangan lezat sambil menikmati suasana kebun yang asri bersama teman-teman dan keluarga.",
      images: [MasakMasakImg1, MasakMasakImg2, MasakMasakImg3, MasakMasakImg4, MasakMasakImg5, MasakMasakImg6],
    },
  ];

  return (
    <div className="events">
      <h3>Acara di Kebun Kami</h3>
      <p>Jangan lewatkan acara spesial lainnya!</p>
      <div className="event-cards">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-title">{event.title}</div>
            <div className="description-container">
              <span className="toggle-icon" onClick={() => toggleDescription(index)}>
                {expandedEvents[index] ? "⯆" : "⯈"}
              </span>
              <p className={`event-description ${expandedEvents[index] ? "expanded" : ""}`}>
                {expandedEvents[index] ? event.fullDescription : event.shortDescription}
              </p>
            </div>
            {expandedEvents[index] && (
              <div className="event-images">
                {event.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Event ${index + 1} - ${imageIndex + 1}`}
                    className="event-image"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
