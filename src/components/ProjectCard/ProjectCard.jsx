import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={styles.card} key="front">
        <img
          src={image}
          alt="covid19"
          onClick={() => setIsFlipped(!isFlipped)}
        />
        <div className={styles.cardContent}>
          <div className={styles.header}>
            <span
              className={styles.title}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              Covid19 Tracker
            </span>
            <i className="fas fa-ellipsis-v"></i>
          </div>
          <p>Keep track of the covid 19 numbers around the world.</p>
        </div>
      </div>

      <div className={styles.card} key="back">
        <div className={styles.cardContent}>
          <div
            className={styles.header}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <h4>Accomplisments</h4>
            <i className="fas fa-times"></i>
          </div>
          <ul>
            <li>React Framework</li>
            <li>React Framework</li>
            <li>React Framework</li>
            <li>React Framework</li>
          </ul>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default ProjectCard;
