import React from "react";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <>
      <div className={styles.container} id="projects">
        <h1>
          Hello, I'm <span style={{ color: "#e31b6d" }}>Darrel Castellano</span>
          .
        </h1>
        <h1> I'm a full-stack web developer</h1>
      </div>
    </>
  );
};

export default Projects;
