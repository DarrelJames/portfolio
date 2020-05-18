import React from "react";
import styles from "./Contact.module.css";
import Spacer from "../Spacer/Spacer";
const Contact = () => {
  return (
    <>
      <Spacer id="contact" />

      <div className={styles.container}>
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
