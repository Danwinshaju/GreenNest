import React from 'react';
import './Home.css';
import ProductCard from "../components/ProductCard";

import image1 from '../images/index/1.jpg';
import image4 from '../images/index/4.avif';
import image5 from '../images/index/5.avif';
import image6 from '../images/index/6.avif';

const Home = () => {

  const products = [
    { id: 1, name: "Monstera Deliciosa", price: 349, img: image4 },
    { id: 2, name: "Snake Plant", price: 249, img: image5 },
    { id: 3, name: "Peace Lily", price: 399, img: image6 },
  ];

  return (
    <>
      <section className="hero-slider">
        <div className="hero-slide">
          <img src={image1} alt="Indoor Plants" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="hero-subtitle">Welcome to GreenNest</p>
            <h1 className="hero-title">Bring Nature Home</h1>
            <p className="hero-description">
              Discover our collection of beautiful plants to transform your space
            </p>
            <a href="#shop" className="hero-btn">Shop Now</a>
          </div>
        </div>
      </section>

      <section className="products-section" id="shop">
        <div className="section-heading">
          <h2>Featured Plants</h2>
          <p>Explore our collection of beautiful indoor plants.</p>
          </div>

  <div className="products-grid">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />))}
      </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-heading">
          <h2>Shop by Category</h2>
          <p>Find exactly what you're looking for</p>
        </div>
        <div className="categories-grid">
          <a href="/indoor" className="category-card">
            <div className="category-icon">🌱</div>
            <h3>Indoor Plants</h3>
            <p>Perfect for your home</p>
          </a>
          <a href="/outdoor" className="category-card">
            <div className="category-icon">🌿</div>
            <h3>Outdoor Plants</h3>
            <p>Garden & patio plants</p>
          </a>
          <a href="/seeds" className="category-card">
            <div className="category-icon">🌾</div>
            <h3>Seeds</h3>
            <p>Grow from the beginning</p>
          </a>
          <a href="/pots" className="category-card">
            <div className="category-icon">🏺</div>
            <h3>Pots</h3>
            <p>Stylish plant containers</p>
          </a>
          <a href="/fertilizer" className="category-card">
            <div className="category-icon">🧪</div>
            <h3>Fertilizers</h3>
            <p>Plant nutrition & care</p>
          </a>
        </div>
      </section>

      {/* Blog/Tips Section */}
      <section className="blog-section">
        <div className="section-heading">
          <h2>Plant Care Tips</h2>
          <p>Learn how to keep your plants healthy and happy</p>
        </div>
        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-icon">💧</div>
            <h3>Watering Guide</h3>
            <p>Discover the perfect watering schedule for your plants to thrive and stay hydrated.</p>
          </article>
          <article className="blog-card">
            <div className="blog-icon">☀️</div>
            <h3>Sunlight Tips</h3>
            <p>Learn about light requirements for different plant types and indoor placement.</p>
          </article>
          <article className="blog-card">
            <div className="blog-icon">🌡️</div>
            <h3>Temperature Care</h3>
            <p>Maintain optimal temperature and humidity levels for your plant collection.</p>
          </article>
        </div>
      </section>

      
    </>
  );
};

export default Home;