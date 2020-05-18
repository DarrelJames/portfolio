import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import Nav from "../Nav/Nav";
import covid from "../../images/covid.png";
import Spacer from "../Spacer/Spacer";

const Projects = () => {
  return (
    <>
      <Nav />
      <Spacer id="projects" />
      <div className={styles.container}>
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
