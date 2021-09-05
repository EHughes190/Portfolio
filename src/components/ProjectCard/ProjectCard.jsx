import React from "react";
import styles from "./ProjectCard.module.scss";
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";

const ProjectCard = (props) => {
  const { title, img, description, skills, githubUrl, hostedUrl, id } =
    props.project;

  const skillText = skills.map((skill, index) => {
    return (
      <p className={styles.card__skill} key={id + skill + index}>
        {skill}
      </p>
    );
  });

  return (
    <article className={styles.card} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.card__content}>
        <div className={styles.card__heading}>
          <h2 className={styles.card__title}>{title}</h2>
          <div className={styles.card__buttons}>
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className={styles.card__btn} />
            </motion.a>
            <motion.a
              href={hostedUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlay className={styles.card__btn} />
            </motion.a>
          </div>
        </div>
        <p className={styles.card__body}>{description}</p>
        <div className={styles.card__skills}>{skillText}</div>
      </div>
    </article>
  );
};

export default ProjectCard;
