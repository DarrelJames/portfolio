import React from "react";
import Spacer from "../Spacer/Spacer";
import SkillCard from "../SkillCard/SkillCard";

import styles from "./About.module.css";
import { html5, css, js, backend, other } from "./skills";

const About = () => {
  return (
    <>
      <Spacer id="about" />
      <div className={styles.container}>
        <h1 className={styles.aboutHeader}>Skills</h1>
        <SkillCard title="HTML" skills={html5} />
        <SkillCard title="CSS" skills={css} />
        <SkillCard title="JavaScript" skills={js} />
        <SkillCard title="Back-End" skills={backend} />
        <SkillCard title="Other" skills={other} />
      </div>
    </>
  );
};

export default About;
