import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing quality education and training in competitive programming and software development.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
            <li><i className="fas fa-phone"></i> +1 234 567 8900</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Programming Street</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 