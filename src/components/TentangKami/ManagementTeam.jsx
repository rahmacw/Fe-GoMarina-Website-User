import React from "react";

// Import gambar
import image01 from '../../assets/images/tentang-kami/tim-pengelola/image01.jpeg';
import image02 from '../../assets/images/tentang-kami/tim-pengelola/image02.jpeg';
import image03 from '../../assets/images/tentang-kami/tim-pengelola/image03.jpeg';

function ManagementTeam() {
  const teamMembers = [
    {
      name: "Dr. Budi Santoso",
      role: "Manajer Kebun",
      imgSrc: image01, // Gambar Dr. Budi Santoso
    },
    {
      name: "Ibu Siti Aminah",
      role: "Asisten Manajer Kebun",
      imgSrc: image02, // Gambar Ibu Siti Aminah
    },
    {
      name: "Ibu Suminah Widodo",
      role: "Pengawas Kebun",
      imgSrc: image03, // Gambar Ibu Suminah Widodo
    },
  ];

  return (
    <div className="management-team">
      <h3>Tim Pengelola Kebun</h3>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.imgSrc} // Menggunakan variabel imgSrc
              alt={member.name}
            />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementTeam;
