"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./main.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextImage = () => {
    if (transitioning) return; // Prevents transitioning when already transitioning
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    if (transitioning) return; // Prevents clicking during transitioning
    setTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!transitioning) nextImage();
    }, 5000); // 5000ms = 5 seconds for smooth interval switch
    return () => clearInterval(intervalId);
  }, [transitioning, images.length]);

  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
      }, 500); // Shorter transition duration
      return () => clearTimeout(timeout);
    }
  }, [transitioning]);

  return (
    <div className="carousel">
      <div
        className={`carousel-images ${transitioning ? "transitioning" : ""}`}
      >
        <div className="carousel-image">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={images[currentIndex].width} // Correct usage of width
            height={images[currentIndex].height} // Correct usage of height
            priority={true}
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dot-nav">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
