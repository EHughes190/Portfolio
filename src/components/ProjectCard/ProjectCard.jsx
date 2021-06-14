import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

const ProjectCard = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projects;

  const [open, setOpen] = useState(false);

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div layoutId="expandable-card">
          <motion.article
            className={styles.cardExpanded}
            layoutId="expandable-card-a"
          >
            <motion.img
              className={styles.cardImageExpanded}
              src={img}
              alt="cat"
              layoutId="expandable-card-i"
              onClick={() => setOpen(false)}
            />
            <motion.div className={styles.textContent}>
              <div className={styles.titleContainer}>
                <motion.h2
                  className={styles.titleExpanded}
                  onClick={() => setOpen(false)}
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
              </div>
              <motion.div
                className={styles.descContainer}
                onClick={() => setOpen(false)}
              >
                <motion.p className={styles.desc}>{description}</motion.p>
              </motion.div>
              <motion.div
                className={styles.skills}
                onClick={() => setOpen(false)}
              >
                <motion.p>{skills[0]}</motion.p>
                <motion.p>{skills[1]}</motion.p>
                <motion.p>{skills[2]}</motion.p>
              </motion.div>
            </motion.div>
          </motion.article>
        </motion.div>
      ) : (
        <motion.div
          onClick={() => setOpen(true)}
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
              alt="project_thumbnail"
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
      )}
    </AnimateSharedLayout>
  );
};

export default ProjectCard;
