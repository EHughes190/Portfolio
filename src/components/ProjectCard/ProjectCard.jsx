import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

const ProjectCard = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projects;

  const [open, setOpen] = useState(true);

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          layoutId="expandable-card"
          className={styles.projectsContainer}
        >
          <motion.article
            className={styles.projectsCard}
            layoutId="expandable-card-a"
          >
            <motion.img
              className={styles.cardImage}
              src={img}
              alt="cat"
              layoutId="expandable-card-i"
            />
            <div
              className={styles.titleContainer}
              layoutId="expandable-card-tc"
            >
              <motion.h2 className={styles.title}>{title}</motion.h2>
            </div>
          </motion.article>
        </motion.div>
      ) : (
        <motion.div onClick={() => setOpen(true)} layoutId="expandable-card">
          <motion.article
            className={styles.cardExpanded}
            layoutId="expandable-card-a"
          >
            <motion.img
              className={styles.cardImageExpanded}
              src={img}
              alt="cat"
              layoutId="expandable-card-i"
            />
            <motion.h2 className={styles.titleExpanded}>{title}</motion.h2>
            <motion.div className={styles.descContainer}>
              <motion.p className={styles.desc}>{description}</motion.p>
            </motion.div>
            <motion.div className={styles.skills}>
              <motion.p>{skills[0]}</motion.p>
              <motion.p>{skills[1]}</motion.p>
              <motion.p>{skills[2]}</motion.p>
            </motion.div>
          </motion.article>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
};

export default ProjectCard;
