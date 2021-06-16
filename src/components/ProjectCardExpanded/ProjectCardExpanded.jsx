import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./ProjectCardExpanded.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

const ProjectCardExpanded = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projects;

  const { setIsOpen } = props.ProjectCard;

  return (
    <motion.div layoutId="expandable-card">
      <motion.article
        className={styles.cardExpanded}
        layoutId="expandable-card-a"
      >
        <motion.img
          className={styles.cardExpanded__image}
          src={img}
          alt="cat"
          layoutId="expandable-card-i"
          onClick={() => setIsOpen(false)}
        />
        <motion.div className={styles.textContent}>
          <motion.div className={styles.title}>
            <motion.h2
              className={styles.title__heading}
              onClick={() => setIsOpen(false)}
            >
              {title}
            </motion.h2>
            <motion.div className={styles.btnContainer}>
              <a href={githubUrl} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.btn}
                >
                  Github
                </motion.button>
              </a>
              <a href={pagesUrl} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.btn}
                >
                  Pages
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div className={styles.desc} onClick={() => setIsOpen(false)}>
            <motion.p className={styles.desc__text}>{description}</motion.p>
          </motion.div>
          <motion.div
            className={styles.skills}
            onClick={() => setIsOpen(false)}
          >
            <motion.p>{skills[0]}</motion.p>
            <motion.p>{skills[1]}</motion.p>
            <motion.p>{skills[2]}</motion.p>
          </motion.div>
        </motion.div>
      </motion.article>
    </motion.div>
  );
};

export default ProjectCardExpanded;
