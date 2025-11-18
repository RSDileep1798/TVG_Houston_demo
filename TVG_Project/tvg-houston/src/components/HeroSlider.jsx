import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'The New-Age Testing, Inspection & Certification Company',
    subtitle: 'Helping businesses navigate the complex world of compliance since 1991',
    cta: 'View Services',
    ctaLink: '/services',
    ctaSecondary: 'Contact Sales',
    ctaSecondaryLink: '/contact',
  },
  {
    id: 2,
    title: 'Redefining the Possibilities in a Digital-First World',
    subtitle: 'Transforming clients into global leaders across industries.',
    cta: 'Explore Solutions',
    ctaLink: '/services',
    ctaSecondary: 'Learn More',
    ctaSecondaryLink: '/about',
  },
  {
    id: 3,
    title: 'Next-Level Approach to Improving Performance and Efficiency',
    subtitle: 'Leading businesses towards an autonomous and sustainable future through integrated solutions.',
    cta: 'Get Started',
    ctaLink: '/contact',
    ctaSecondary: 'View Products',
    ctaSecondaryLink: '/products',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="hero-slider">
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/worldimage.png)`,
            }}
          >
            <div className="hero-slide-overlay"></div>
            <div className="container">
              <div className="hero-slide-content" data-aos="fade-up">
                <h1 className="hero-slide-title">{slide.title}</h1>
                <p className="hero-slide-subtitle">{slide.subtitle}</p>
                <div className="hero-slide-cta">
                  <Link to={slide.ctaLink} className="btn">
                    {slide.cta}
                  </Link>
                  <Link to={slide.ctaSecondaryLink} className="btn btn-secondary">
                    {slide.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="hero-slider-nav hero-slider-prev" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="hero-slider-nav hero-slider-next" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>

      {/* Dots Indicator */}
      <div className="hero-slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


