"use client"

import React, { useState, useEffect } from "react";
import styles from "./imageCarousel.module.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para voltar para imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay do carrossel
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Troca a cada 5 segundos
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              ${styles.slide} 
              ${index === currentIndex ? styles.active : ""}
            `}
          >
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              className={styles.slideImage}
            />
          </div>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicadores de posição */}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`
              ${styles.indicator} 
              ${index === currentIndex ? styles.activeIndicator : ""}
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
