// WhatsAppButton.js
import React from 'react';
import styles from './WpButton.module.css';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.button_container}>
      <button
      onClick={handleClick}
      className={styles.button}
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          className={styles.icon}
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
