import React from "react";
import styles from "./About.module.scss";
import SectionHeading from "../../components/SectionHeading";

const About = (props) => {
  return (
    <>
      <h3 className={styles.sectionHeading}>about</h3>
      <hr className={styles.line} />
    </>
  );
};

export default About;
