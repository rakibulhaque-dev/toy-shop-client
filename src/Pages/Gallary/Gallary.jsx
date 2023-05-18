import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    'https://i.ibb.co/ZVzbssf/2.png',
    'https://i.ibb.co/ZVzbssf/2.png',
    'https://i.ibb.co/ZVzbssf/2.png',
    'https://i.ibb.co/ZVzbssf/2.png',
    'https://i.ibb.co/ZVzbssf/2.png',
    'https://i.ibb.co/ZVzbssf/2.png',
    'https://i.ibb.co/ZVzbssf/2.png',
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    const slideWidth = sliderContainer.offsetWidth / 5;
    const scrollLeft = currentIndex * slideWidth;
    sliderContainer.scroll({ left: scrollLeft, behavior: 'smooth' });

    if (currentIndex === photos.length - 1) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 1000);
    }
  }, [currentIndex, photos.length]);

  return (
    <div className="container p-12 mx-auto slider bg-slate-600">
      <div className="slider-wrapper" ref={sliderRef}>
        {photos.map((photo, index) => (
          <img
            className="w-1/5 h-auto"
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            style={{
              display: 'inline-block',
              width: '100%',
              height: 'auto',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
