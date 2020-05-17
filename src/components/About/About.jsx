import React from "react";
import Nav from "../Nav/Nav";
import SkillCard from "../SkillCard/SkillCard";

import styles from "./About.module.css";
import html from "../../images/html5.png";
import jsx from "../../images/react.png";
import css3 from "../../images/css3.png";
import bootstrap from "../../images/bootstrap.png";
import mui from "../../images/materialui.png";
import sui from "../../images/semanticui.png";
import javascript from "../../images/javascript.png";
import node from "../../images/nodejs.png";
import ruby from "../../images/ruby.png";
import rails from "../../images/rails.png";
import postgresql from "../../images/postgresql.png";
import mongodb from "../../images/mongodb.png";
import github from "../../images/github.png";
import heroku from "../../images/heroku.png";

const html5 = [
  { src: html, alt: "html5", name: "HTML5" },
  { src: jsx, alt: "JSX", name: "JSX" },
];

const css = [
  { src: css3, alt: "css3", name: "CSS3" },
  { src: bootstrap, alt: "bootstrap", name: "Bootstrap" },
  { src: mui, alt: "material ui", name: "Material UI" },
  { src: sui, alt: "semantic ui", name: "Semantic UI" },
];

const js = [
  { src: jsx, alt: "react", name: "React" },
  { src: javascript, alt: "javascript", name: "JavaScript" },
  { src: node, alt: "nodejs", name: "Node" },
];

const backend = [
  { src: ruby, alt: "ruby", name: "Ruby" },
  { src: rails, alt: "rails", name: "Rails" },
  { src: postgresql, alt: "postgresql", name: "PostgreSQL" },
  { src: mongodb, alt: "mongodb", name: "MongoDB" },
];
const other = [
  { src: github, alt: "github", name: "GitHub" },
  { src: heroku, alt: "heroku", name: "Heroku" },
];

const About = () => {
  return (
    <>
      <Nav />
      <div className={styles.container} id="about">
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
