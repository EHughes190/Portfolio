import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const openNav = isOpen ? (
    <div className={styles.menu}>
      <ul className={styles.links}>
        <NavLink exact to="projects" key="nav:projects">
          <li className={styles.link__item}>Projects</li>
        </NavLink>
        <NavLink exact to="about" key="nav:about">
          <li className={styles.link__item}>About</li>
        </NavLink>
        <NavLink exact to="contact" key="nav:contact">
          <li className={styles.link__item}>Contact</li>
        </NavLink>
      </ul>
    </div>
  ) : (
    ""
  );

  const setActive = () => {
    setisOpen(!isOpen);
  };

  return (
    // <div className={styles.sticky}>
    <nav className={styles.nav}>
      <NavLink exact to="/" key="nav:home">
        <FontAwesomeIcon icon={faIgloo} size="2x" />
      </NavLink>
      {openNav}
      <Hamburger onToggle={setActive} />
    </nav>
    // </div>
  );
};

export default Navbar;
