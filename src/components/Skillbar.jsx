import React from "react";

import styles from "./Skill.module.css";

export default class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (
      <div id="app" className={styles.container}>
        <ul className={styles.skills}>
          {skills.map((skill, index) => (
            <li
              key={skill.type}
              style={{
                border: "2px solid white",
                width: `${skill.level}%`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${
                  100 / (index + 3.5)
                }%)`,
              }}
            >
              <p>{skill.type}</p>
              <p>{skill.level}%</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
