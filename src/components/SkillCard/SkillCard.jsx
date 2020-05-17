import React from "react";

import styles from "./SkillCard.module.css";
import html from "../../images/html5.png";

const SkillCard = ({ title, skills }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h4>{title}</h4>

        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <img src={skill.src} alt={skill.alt} />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
