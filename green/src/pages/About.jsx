import React from "react";
import { FaLeaf, FaRecycle, FaSeedling, FaTruck } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to GreenNest <FaLeaf aria-hidden="true" /></h1>
          <p>
            Bringing nature closer to every home with premium plants,
            seeds, pots, and gardening essentials.
          </p>
        </div>
      </section>

      <section className="story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            GreenNest started with a simple idea — making gardening
            accessible to everyone. We believe every home deserves a touch
            of nature. From indoor plants to premium fertilizers, we help
            plant lovers create beautiful green spaces.
          </p>
        </div>

        <div className="story-image">
          <FaSeedling aria-hidden="true" />
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Plant Varieties</p>
        </div>

        <div className="stat">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h3>50+</h3>
          <p>Garden Experts</p>
        </div>

        <div className="stat">
          <h3>100%</h3>
          <p>Quality Guarantee</p>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span><FaLeaf aria-hidden="true" /></span>
            <h3>Healthy Plants</h3>
            <p>Fresh and carefully nurtured plants.</p>
          </div>

          <div className="feature-card">
            <span><FaTruck aria-hidden="true" /></span>
            <h3>Fast Delivery</h3>
            <p>Safe doorstep delivery across India.</p>
          </div>

          <div className="feature-card">
            <span><FaRecycle aria-hidden="true" /></span>
            <h3>Eco Friendly</h3>
            <p>Sustainable packaging and products.</p>
          </div>

          
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To inspire a greener future by helping people connect with nature
          through beautiful plants and sustainable gardening.
        </p>
      </section>

    </div>
  );
};

export default About;
