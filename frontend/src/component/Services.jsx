import React from "react";
import "./Services.css";
import { FaCalendar, FaTrophy, FaBook, FaUsers } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services">
      <h1 className="services-main-title">Everything You Need to Excel</h1>
      <p className="services-subtitle">
        Our platform combines all the tools and resources you need to become a competitive programming champion.
      </p>

      <div className="services-container">
      <div className="service-card">
          <div className="icon-container">
            <FaUsers className="service-icon" />
          </div>
          <h3>Personal Account</h3>
          <p>Create your own account and track your progress and performance.</p>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FaCalendar className="service-icon" />
          </div>
          <h3>Schedule & Calendar</h3>
          <p>Track upcoming contests, classes, and training sessions all in one place with smart notifications.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <FaTrophy className="service-icon" />
          </div>
          <h3>Leaderboards</h3>
          <p>Compete and rank up on dynamic leaderboards based on your performance in contests and classes.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <FaBook className="service-icon" />
          </div>
          <h3>Resource Library</h3>
          <p>Access a curated collection of tutorials, algorithms, and practice problems organized by topic.</p>
        </div>

        
      </div>
    </section>
  );
};

export default Services;
