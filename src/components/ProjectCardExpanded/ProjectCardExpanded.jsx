import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./ProjectCardExpanded.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

const ProjectCardExpanded = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projects;

  <article className={styles.projectsCard}>
    <img className={styles.cardImage} src={img} alt="cat" />
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.descContainer}>
      <p className={styles.desc}>{description}</p>
    </div>
    <div className={styles.skills}>
      <p>{skills[0]}</p>
      <p>{skills[1]}</p>
      <p>{skills[2]}</p>
    </div>
  </article>;
};

export default ProjectCardExpanded;
