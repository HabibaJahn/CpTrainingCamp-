import React from 'react';
import './Gallery.css'; // You'll need to create this CSS file
import cplab1 from '../assets/images/cplab1.jpg'; // Adjust the import path based on your image location
import cplab2 from '../assets/images/cplab2.jpg';
import cplab3 from '../assets/images/cplab3.jpg';
import cplab4 from '../assets/images/cplab4.jpg';
import cplab5 from '../assets/images/cplab5.jpg';
import cplab6 from '../assets/images/cplab6.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: cplab1,
      title: "ICPC DHAKA REGIONAL 2024 CHAMPION",
      description: "Our team, consisting of students from different departments, worked tirelessly to achieve this remarkable feat. This victory not only showcases the talent and dedication of our participants but also highlights the strong support system that our training camp provides."
    },
    {
      id: 2,
      url: cplab2,
      title: "ICPC WORLD FINALS 2023",
      description: "Proud participants at the ICPC World Finals 2023 in Astana, Kazakhstan, where our team competed among the world's best collegiate programmers."
    },
    {
      id: 3,
      url: cplab3,
      title: "ICPC DHAKA REGIONAL 2014 CHAMPION",
      description: "Champions of ICPC Dhaka Regionals 2014! Our team's outstanding performance led to a decisive victory, earning the prestigious regional title and advancing to the World Finals."
    },
    {
      id: 4,
      url: cplab4,
      title: "TRAINING CAMP CLASSROOM",
      description: "Our training camp classroom is a place where students come together to learn and grow. It is a place where they can learn new things and share their ideas."
    },
    {
      id: 5,
      url: cplab5,
      title: "CP LAB DISCUSSION",
      description: ""
    },
    {
      id: 6,
      url: cplab6,
      title: "CP LAB DISCUSSION",
      description: "Fully equipped facility supporting multiple operating systems and development environments."
    }
  ];

  return (
    <div className="gallery-section">
      <h1 className="gallery-main-title">A look inside Our Trainning Camp</h1>
      <div className="gallery-container">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt={image.title} />
            <div className="image-overlay">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;