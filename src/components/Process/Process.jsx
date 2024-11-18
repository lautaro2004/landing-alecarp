import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./Process.module.css";

const Process = () => {
  const sliderRef = useRef(null); // Referencia para el contenedor del slider
  const [currentIndex, setCurrentIndex] = useState(0); // Índice actual del slide
  const itemsRef = useRef([]); // Referencia para los elementos individuales

  useEffect(() => {
    gsap.set(sliderRef.current, { x: 0 }); // Posicionar el slider inicialmente
  }, []);

  const handleSlide = (direction) => {
    const totalItems = itemsRef.current.length; // Total de slides
    const slideWidth = itemsRef.current[0]?.offsetWidth || 0; // Ancho de un slide
    const newIndex = currentIndex + direction; // Índice nuevo basado en la dirección

    // Verificar límites
    if (newIndex < 0 || newIndex >= totalItems) return;

    setCurrentIndex(newIndex);

    // Desplazar con GSAP
    gsap.to(sliderRef.current, {
      x: -newIndex * slideWidth, // Mover al índice actual
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <div className={styles.process_container}>
      {/* Título del slider */}
      <div className={styles.process_header}>
        <div className={styles.title}>
          <h3>PROCESO</h3>
        </div>
      </div>

      {/* Contenedor del slider */}
      <div className={styles.slider_wrapper}>
        <div className={styles.slider} ref={sliderRef}>
          {/* Elementos del slider */}
          {[
            {
              id: 1,
              title: "Consultoría Personalizada",
              description:
                "Nos reunimos contigo para entender tus necesidades y brindarte un presupuesto inicial ajustado a las medidas y diseño que nos proporciones. Si lo prefieres, podemos coordinar una visita para tomar las medidas personalmente y asesorarte en el diseño del mueble, asegurando que se ajuste perfectamente a tu espacio.",
            },
            {
              id: 2,
              title: "Fabricación a Medida",
              description:
                "Con el anticipo recibido, realizamos la compra de materiales y comenzamos la fabricación del mueble en nuestro taller. Nos aseguramos de que cada detalle cumpla con el diseño acordado, empleando materiales de alta calidad para un resultado duradero y personalizado.",
            },
            {
              id: 3,
              title: "Entrega y Colocación",
              description:
                "Te entregamos y colocamos el mueble en tu hogar sin costo adicional. Nos aseguramos de que quede perfectamente instalado, listo para que lo disfrutes. El saldo restante se abona al finalizar el trabajo.",
            },
          ].map((item, index) => (
            <div
              className={styles.process_item}
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className={styles.item_header}>
                <h2>#{item.id}</h2>
                <div className={styles.title}>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <div className={styles.item_content}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas de navegación */}
        <div className={styles.process_arrow}>
          <button
            className={`${styles.arrow} ${styles.arrow_left}`}
            onClick={() => handleSlide(-1)}
            disabled={currentIndex === 0}
          >
            &larr;
          </button>
          <button
            className={`${styles.arrow} ${styles.arrow_right}`}
            onClick={() => handleSlide(1)}
            disabled={currentIndex === itemsRef.current.length - 1}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
