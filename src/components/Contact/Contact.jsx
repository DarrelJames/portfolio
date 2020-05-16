import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.container} id="contact">
        <h1>
          Hello, I'm <span style={{ color: "#e31b6d" }}>Darrel Castellano</span>
          .
        </h1>
        <h1> I'm a full-stack web developer</h1>
      </div>
    </>
  );
};

export default Contact;
