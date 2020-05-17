import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

import covid from "../../images/covid.png";
const Projects = () => {
  return (
    <>
      <div className={styles.container} id="projects">
        <h1>Projects</h1>
        <div className={styles.projects}>
          <ProjectCard image={covid} />
          <ProjectCard image={covid} />
          <ProjectCard image={covid} />
          <ProjectCard image={covid} />
        </div>
      </div>
    </>
  );
};

export default Projects;