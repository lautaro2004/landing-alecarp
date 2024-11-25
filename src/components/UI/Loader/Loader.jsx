import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Loader.module.css';

const Loader = () => {
  useEffect(() => {
    const loaderTimeline = gsap.timeline();

    // 1. Rotacion de la sierra
    loaderTimeline.to('.sierra', {
      rotation: 360,
      duration: 3.2,
      ease: 'linear',
      repeat: -1,
    });

    // 2. Subir la sierra
    loaderTimeline.to('.sierra', {
      y: '-100vh',
      duration: 1.5,
      ease: 'power2.inOut',
    }, 1);

    // 3. Animar la aparición de bordes
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

    // 4. Desaparición de la sierra
    loaderTimeline.to('.sierra', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // 5. Separación de los contenedores hacia los lados
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

    // 6. Ocultar el loader_container
    loaderTimeline.to('.loader_container', {
      display: 'none',
      duration: 0.1,
    });
  }, []);

  return (
    <div className={styles.loader_container}>
      <div className={`${styles.left_container} left_container`}>
        <h1>ALEC</h1>
      </div>
      <div className={`${styles.right_container} right_container`}>
        <h1>ARP</h1> <img src="/loader/logo-alecarp-white.png" alt='Logo alecarp' />
      </div>
      {/* El contenedor de la sierra */}
      <div className={`${styles.sierra_container} sierra_container`}>
        <img src="/loader/cierra.png" alt="Sierra circular" className="sierra" />
      </div>
    </div>
  );
};

export default Loader;
