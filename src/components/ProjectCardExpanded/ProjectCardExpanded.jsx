import React from "react";
import styles from "./ProjectCardExpanded.module.scss";
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";

const ProjectCardExpanded = (props) => {
  const {
    title,
    img,
    description,
    skills,
    githubUrl,
    hostedUrl,
    id,
    setIsOpen,
    isOpen,
  } = props;

  const skillText = skills.map((skill, index) => {
    return (
      <p className={styles.skill} key={id + skill + index}>
        {skill}
      </p>
    );
  });

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
          onClick={() => setIsOpen(!isOpen)}
        />
        <motion.div className={styles.textContent}>
          <motion.div className={styles.titleContainer}>
            <motion.h2
              className={styles.titleContainer__heading}
              onClick={() => setIsOpen(!isOpen)}
            >
              {title}
            </motion.h2>
            <motion.div className={styles.btnContainer}>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.btn}
                >
                  <FaGithub />
                </motion.button>
              </a>
              <a href={hostedUrl} target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.btn}
                >
                  <FaPlay />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.desc}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.p className={styles.desc__text}>{description}</motion.p>
          </motion.div>
          <motion.div
            className={styles.skills}
            onClick={() => setIsOpen(!isOpen)}
          >
            {skillText}
          </motion.div>
        </motion.div>
      </motion.article>
    </motion.div>
  );
};

export default ProjectCardExpanded;
