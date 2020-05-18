import React from "react";
import { Link } from "react-scroll";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.container} id="nav">
      <ul>
        <li className={styles.item}>
          <Link
            activeClass={styles.active}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            activeClass={styles.active}
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            activeClass={styles.active}
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1qRL9MIInwp57PUizWY2OYar5aqLEhATu/preview">
            Resume
          </a>
        </li>
        <li className={styles.item}>
          <Link
            activeClass={styles.active}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
