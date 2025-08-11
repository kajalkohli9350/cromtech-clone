import React, { useState, useEffect } from "react";
import './Content.css';

const slides = [
  {
    h3: "MOBILE APPLICATIONS",
    h1: <>IOS,ANDROID,<br/>BLACKBERRY,WINDOWS</>,
    p: <>
      "HANDY" SOLUTIONS YOU CAN CARRY IN YOUR POCKET.<br/>
      WE CREATE ROBUST NATIVE AND MOBILE WEB APPLICATIONS.
    </>,
    img:"https://cromteksolutions.info/images/slider/slide-3-1.png"
  },
  {
    h3: "WEB DEVELOPMENT",
    h1: <>MODERN, RESPONSIVE,<br/>FAST WEBSITES</>,
    p: <>
      WE BUILD WEBSITES THAT WORK ON EVERY DEVICE<br/>
      AND DELIVER GREAT USER EXPERIENCE.
    </>,
    img: "https://cromteksolutions.info/images/slider/e-commerce.png"
  },
  {
    h3: "E-COMMERCE",
    h1: <>SELL ONLINE,<br/>GROW ONLINE</>,
    p: <>
      COMPLETE E-COMMERCE SOLUTIONS<br/>
      FOR YOUR BUSINESS NEEDS.
    </>,
    img: "https://cromteksolutions.info/images/slider/e-commerce.png"
  }
];

export default function Content() {
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(timer);
  }, [index]);

  // Manual navigation
  const handlePrev = () => {
    setSlideIn(false);
    setTimeout(() => {
      setIndex(i => (i === 0 ? slides.length - 1 : i - 1));
      setSlideIn(true);
    }, 400);
  };

  const handleNext = () => {
    setSlideIn(false);
    setTimeout(() => {
      setIndex(i => (i + 1) % slides.length);
      setSlideIn(true);
    }, 400);
  };

  const slide = slides[index];

  return (
    <section className="content">
      <button className="slider-btn left" onClick={handlePrev}>&lt;</button>
      <div className={`carousel-slide ${slideIn ? 'slide-in-left' : 'slide-out-right'}`}>
        <div className='content-body'>
          <h3>{slide.h3}</h3>
          <h1>{slide.h1}</h1>
          <p>{slide.p}</p>
          <button className='content-button'>LEARN MORE</button>
        </div>
        <div className='content-image'>
          <img src={slide.img} alt='content'/>
        </div>
      </div>
      <button className="slider-btn right" onClick={handleNext}>&gt;</button>
    </section>
  );
}