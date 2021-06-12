import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className={styles.landingPage}>
        <div className={styles.landingPageTitle}>
          <motion.h1
            animate={{ fontSize: "200%" }}
            transition={{ duration: 0.5 }}
            className={styles.landingPage__heading}
          >
            ed hughes.
          </motion.h1>
          <motion.h3
            animate={{ fontSize: "200%" }}
            transition={{ duration: 0.5 }}
            className={styles.landingPage__subHeading}
          >
            web developer.
          </motion.h3>
        </div>
        <div className={styles.landingPageButton}>
          <Link exact to="projects" className={styles.btnPrimary}>
            View my work
            <span className={styles.arrowSpan}>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
