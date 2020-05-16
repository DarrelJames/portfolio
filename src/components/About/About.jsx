import React from "react";
import Nav from "../Nav/Nav";
import SkillBar from "../Skillbar";

import styles from "./About.module.css";
const About = () => {
  const skills = [
    { type: "CSS", level: 75 },
    { type: "HTML", level: 90 },
    { type: "React", level: 70 },
    { type: "JavaScript", level: 70 },
    { type: "Ruby/Rails", level: 65 },
    { type: "Node.js", level: 50 },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };
  return (
    <>
      <Nav />
      <div className={styles.container} id="about">
        <h1 className={styles.aboutHeader}>About</h1>

        <SkillBar hue="300" saturation="40" skills={skills} colors={colors} />
      </div>
    </>
  );
};

export default About;
