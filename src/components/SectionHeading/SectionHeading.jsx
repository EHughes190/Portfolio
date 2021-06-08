import React from "react";
import styles from "./SectionHeading.module.scss";

const SectionHeading = (props) => {
  return (
    <>
      <h3 className={styles.sectionHeading}>{props}</h3>
      <hr className={styles.line} />
    </>
  );
};

export default SectionHeading;
