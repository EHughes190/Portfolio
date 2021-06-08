import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const setActive = () => {
    setisOpen(!isOpen);
  };

  const openNav = isOpen ? (
    <div className={styles.modal}>
      <div className={styles.menu}>
        <ul className={styles.links}>
          <NavLink exact to="projects" key="nav:projects">
            <li className={styles.link__item} onClick={setActive}>
              Projects
            </li>
          </NavLink>
          <NavLink exact to="about" key="nav:about">
            <li className={styles.link__item} onClick={setActive}>
              About
            </li>
          </NavLink>
          <NavLink exact to="contact" key="nav:contact">
            <li className={styles.link__item} onClick={setActive}>
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    // <div className={styles.sticky}>
    <nav className={styles.nav}>
      <NavLink exact to="/" key="nav:home">
        <FontAwesomeIcon icon={faIgloo} size="2x" />
      </NavLink>
      {openNav}
      <Hamburger toggled={isOpen} onToggle={setActive} />
    </nav>
    // </div>
  );
};

export default Navbar;
