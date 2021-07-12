import React from "react";
import styles from "./About.module.scss";

const About = (props) => {
  return (
    <section className={styles.about} data-aos={"fade-up"}>
      <h3 className={styles.sectionHeading}>about</h3>
      <hr className={styles.line} />
      <div className={styles.about__grid}>
        <div className={styles.grid__item}>
          <h3 className={styles.about__title}>
            Hi! I'm Ed. A Web Developer based in London.
          </h3>
          <p className={styles.about__text}>
            I am a hardworking and enthusiastic history graduate who fell down
            the rabbit hole of coding last year after a friend recommended I try
            a udemy course on web development. I love the blend of technical
            knowledge and creativity that development involves. I've been hooked
            ever since, and decided that a career in technology was the career
            for me.
          </p>
        </div>
        <div className={styles.grid__item}>
          <img
            className={styles.about__image}
            src="https://avatars.githubusercontent.com/u/77494320?v=4"
            alt="Ed"
          />
        </div>
        <div className={styles.skills}>
          <h3 className={styles.skills__title}>Skills</h3>
          <div className={styles.skills__text}>
            <p className={styles.skill}>React</p>
            <p className={styles.skill}>HTML5</p>
            <p className={styles.skill}>CSS3</p>
            <p className={styles.skill}>SASS</p>
            <p className={styles.skill}>JavaScript</p>
            <p className={styles.skill}>Jest</p>
            <p className={styles.skill}>Cypress</p>
            <p className={styles.skill}>Enzyme</p>
            <p className={styles.skill}>Github Actions</p>
            <p className={styles.skill}>TTD</p>
            {/* <p>GCP</p> */}
            {/* <p>CI/CD</p> */}
            <p className={styles.skill}>OOP</p>
            <p className={styles.skill}>Java</p>
            <p className={styles.skill}>Spring</p>
            <p className={styles.skill}>SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
