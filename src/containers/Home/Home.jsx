import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className={styles.landingPage} data-aos={"fade-up"}>
        <div className={styles.title}>
          <h1 className={styles.title__heading}>ed hughes.</h1>
          <h3 className={styles.title__subHeading}>web developer.</h3>
        </div>
        <div className={styles.landingPage__btn}>
          <Link exact to="projects" className={styles.btn_primary}>
            View my work <FaArrowRight className={styles.arrowSpan} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
