import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.sticky}>
      <nav className={styles.nav}>
        {/* <a href="#landing-page">
          <i class="fas fa-igloo"></i>
        </a> */}

        <ul className={styles.links}>
          <li >
            <a href="#projects">Projects</a>
          </li>
          <li >
            <a href="#about">About</a>
          </li>
          <li >
            <a href="#contact">Contact</a>
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
