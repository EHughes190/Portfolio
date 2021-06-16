import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className={styles.landingPage}>
        <div className={styles.title}>
          <motion.h1 className={styles.title__heading}>ed hughes.</motion.h1>
          <motion.h3 className={styles.title__subHeading}>
            web developer.
          </motion.h3>
        </div>
        <div className={styles.landingPage__button}>
          <Link exact to="projects" className={styles.btn_primary}>
            View my work <FaArrowRight className={styles.arrowSpan} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
