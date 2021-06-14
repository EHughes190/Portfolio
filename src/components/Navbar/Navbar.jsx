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

  const openNav = isOpen ? <Modal isOpen={isOpen} setActive={setActive} /> : "";

  return (
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

      <Hamburger toggled={isOpen} onToggle={setActive} />
    </nav>
  );
};

export default Navbar;
