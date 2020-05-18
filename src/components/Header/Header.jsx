import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <>
      <div className={styles.container} id="home">
        <div className={styles.text}>
          Hello, I'm <span style={{}}>Darrel Castellano</span>
          .<br />
          I'm a full-stack web developer
        </div>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button>View my work</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
