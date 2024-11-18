import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.form_container}>
        <form className={styles.contact_form}>
          <div className={styles.doble_input}>
            <input
              type="text"
              placeholder="Nombre Completo"
              className={styles.form_input}
            />
            <input
              type="tel"
              placeholder="Número de Teléfono"
              className={styles.form_input}
            />
          </div>
          <div  className={styles.doble_input}>
            <input
              type="email"
              placeholder="Email de Contacto"
              className={styles.form_input}
            />
            <input
              type="text"
              placeholder="Tipo de Mueble"
              className={styles.form_input}
            />
          </div>    
         <div className={styles.simple_input}>
            <textarea
                placeholder="Déjanos un mensaje"
                className={styles.form_textarea}
            >
            </textarea>
         </div>
          <button type="submit" className={styles.submit_button}>
            HACER REALIDAD MI DISEÑO
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
