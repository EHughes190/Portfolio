import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

//Props are passed from Routes
const Home = (props) => {
  return (
    <>
      <motion.section
        className={styles.landingPage}
        initial="hidden"
        animate="enter"
        variants={props.variants}
        // Smooth entrance
        transition={{ type: "linear" }}
      >
        <div className={styles.title}>
          <h1 className={styles.title__heading}>ed hughes.</h1>
          <h3 className={styles.title__subHeading}>web developer.</h3>
        </div>
        <div className={styles.landingPage__btn}>
          <Link to="projects" className={styles.btn_primary}>
            View my work <FaArrowRight className={styles.arrowSpan} />
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
