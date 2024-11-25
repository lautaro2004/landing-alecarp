import { useState } from "react";
import styles from "./ContactForm.module.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    furnitureType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    const { fullName, phoneNumber, email, furnitureType, message } = formData;
    if (!fullName || !phoneNumber || !email || !furnitureType || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setIsLoading(true); // Mostrar estado de carga

    try {
      const response = await axios.post(
        "https://getform.io/f/apjjxnga",
        {
          fullName,
          phoneNumber,
          email,
          furnitureType,
          message,
        },
        { headers: { Accept: "application/json" } }
      );
      console.log("Formulario enviado con éxito:", response);
      alert("Formulario enviado con éxito");
      
      // Reiniciar los valores del formulario
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        furnitureType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al enviar el formulario. Inténtalo nuevamente.");
    } finally {
      setIsLoading(false); // Finalizar el estado de carga
    }
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.form_container}>
        <div className={styles.contact_form}>
          <div className={styles.doble_input}>
            <input
              type="text"
              name="fullName"
              placeholder="Nombre Completo"
              className={styles.form_input}
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Número de Teléfono"
              className={styles.form_input}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className={styles.doble_input}>
            <input
              type="email"
              name="email"
              placeholder="Email de Contacto"
              className={styles.form_input}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="furnitureType"
              placeholder="Tipo de Mueble"
              className={styles.form_input}
              value={formData.furnitureType}
              onChange={handleChange}
            />
          </div>
          <div className={styles.simple_input}>
            <textarea
              name="message"
              placeholder="Déjanos un mensaje"
              className={styles.form_textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className={styles.submit_button}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? <span className={styles.loader}></span> : "HACER REALIDAD MI DISEÑO"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
