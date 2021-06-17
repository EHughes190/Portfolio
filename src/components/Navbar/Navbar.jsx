import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaIgloo } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink exact to="/" key="nav:home">
          <FaIgloo className={styles.igloo} />
        </NavLink>
      </motion.div>

      {openNav}
      {/* <div className={isOpen && styles.open}>
        <Hamburger toggled={isOpen} onToggle={setActive} />
      </div> */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <GiHamburgerMenu
          className={styles.hamburger}
          onClick={setActive}
        ></GiHamburgerMenu>
      </motion.div>
    </nav>
  );
};

export default Navbar;
