import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.sticky}>
      <nav className={styles.nav}>
        {/* <a href="#landing-page"> */}
        <Link to="/">
          <FontAwesomeIcon icon={faIgloo} size="2x" />
        </Link>

        {/* </a> */}

        <ul className={styles.links}>
          <li>
            {/* <a href="#projects">Projects</a> */}
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            {/* <a href="#about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="#contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <div class="hamburger">
          <div id="hamburger__line1" class="hamburger__line"></div>
          <div id="hamburger__line2" class="hamburger__line"></div>
          <div id="hamburger__line3" class="hamburger__line"></div>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
