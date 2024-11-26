import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Carousel.module.css'; // Importa los estilos correctamente

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalImages = images.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex = (currentIndex + 1) % totalImages;

    // Deslizar la imagen
    gsap.to(`.${styles['carousel-wrapper']}`, {
      x: `-=${100 / totalImages}%`,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      },
    });
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex = (currentIndex - 1 + totalImages) % totalImages;

    // Deslizar la imagen
    gsap.to(`.${styles['carousel-wrapper']}`, {
      x: `+=${100 / totalImages}%`,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      },
    });
  };

  useEffect(() => {
    // Asegurarse de que las imágenes están en el estado correcto al cargar
    gsap.set(`.${styles['carousel-wrapper']}`, { x: `-${100 * currentIndex}%` });
  }, [currentIndex]);

  return (
    <div className={styles['carousel-container']}>
      <button className={styles['carousel-prev']} onClick={prevSlide}>❮</button>
      <div className={styles['carousel-wrapper']}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-image-${index}`}
            className={styles['carousel-image']}
          />
        ))}
      </div>
      <button className={styles['carousel-next']} onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
