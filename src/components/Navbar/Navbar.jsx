import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Modal from "../Modal";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const setActive = () => {
    setisOpen(!isOpen);
  };

  const openNav = isOpen ? (
    <Modal isOpen={isOpen} setActive={setActive} />
  ) : (
    // <div onClick={setActive} className={styles.modal}>
    //   <div className={styles.menu}>
    //     <ul className={styles.links}>
    //       <NavLink exact to="projects" key="nav:projects" onClick={setActive}>
    //         <li className={styles.link__item}>Projects</li>
    //       </NavLink>
    //       <NavLink exact to="about" key="nav:about" onClick={setActive}>
    //         <li className={styles.link__item}>About</li>
    //       </NavLink>
    //       <NavLink exact to="contact" key="nav:contact" onClick={setActive}>
    //         <li className={styles.link__item}>Contact</li>
    //       </NavLink>
    //     </ul>
    //   </div>
    // </div>
    ""
  );

  return (
    // <div className={styles.sticky}>
    <nav className={styles.nav}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.igloo}
      >
        <NavLink exact to="/" key="nav:home">
          <FontAwesomeIcon icon={faIgloo} size="2x" />
        </NavLink>
      </motion.div>

      {openNav}
      {/* <Modal isOpen={isOpen} /> */}
      <Hamburger toggled={isOpen} onToggle={setActive} />
    </nav>
    // </div>
  );
};

export default Navbar;
