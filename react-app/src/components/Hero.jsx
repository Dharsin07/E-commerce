import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Luxury Redefined",
      subtitle: "Discover our curated collection of premium handcrafted furniture, where timeless elegance meets contemporary design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Timeless Elegance",
      subtitle: "Experience the perfect blend of Italian craftsmanship and modern sophistication",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Premium Craftsmanship",
      subtitle: "Each piece is meticulously crafted by master artisans using only the finest materials",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero hero-slider" id="home" role="banner">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(45, 45, 45, 0.6)), url(${slide.image})` }}
        >
          <div className="container">
            <div className="hero-content fade-in">
              <h1>{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <Link to="/collections" className="btn">
                <span className="btn-text">Explore Collections</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="hero-arrow hero-arrow-prev" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>

      {/* Dots Indicator */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;