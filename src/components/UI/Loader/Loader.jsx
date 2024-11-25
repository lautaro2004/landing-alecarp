import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Loader.module.css';

const Loader = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => {
        setIsActive(false); // Cambia el estado cuando termina la animación
      },
    });
  
    // 1. Rotación de la sierra (cambiar para no repetir)
    loaderTimeline.to('.sierra', {
      rotation: 360,
      duration: 3.2,
      ease: 'linear',
    });
  
    // 2. Subir la sierra
    loaderTimeline.to('.sierra', {
      y: '-100vh',
      duration: 1.5,
      ease: 'power2.inOut',
    }, 1);

    loaderTimeline.to('.left_container', {
      borderRight: '1px solid rgba(0, 0, 0, 1)',
      duration: 0.5,
      ease: 'power1.inOut',
    }, '<');

    loaderTimeline.to('.right_container', {
      borderLeft: '1px solid rgba(0, 0, 0, 1)',
      duration: 0.5,
      ease: 'power1.inOut',
    }, '<');

    loaderTimeline.to('.sierra', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    loaderTimeline.to('.left_container', {
      x: '-100%',
      duration: 1.2,
      ease: 'power2.out',
    });

    loaderTimeline.to('.right_container', {
      x: '100%',
      duration: 1.2,
      ease: 'power2.out',
    }, '<');
  }, []);

  return (
    <div
      className={styles.loader_container}
      style={{
        zIndex: isActive ? 999 : 0,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
        transition: 'opacity 0.5s ease, z-index 0.5s ease', // Transición suave
      }}
    >
      <div className={`${styles.left_container} left_container`}>
        <h1>ALEC</h1>
      </div>
      <div className={`${styles.right_container} right_container`}>
        <h1>ARP</h1>
        <img src="/loader/logo-alecarp-white.png" alt="Logo alecarp" />
      </div>
      <div className={`${styles.sierra_container} sierra_container`}>
        <img src="/loader/cierra.png" alt="Sierra circular" className="sierra" />
      </div>
    </div>
  );
};

export default Loader;
