import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";
import ProjectCardExpanded from "../ProjectCardExpanded/ProjectCardExpanded";

const ProjectCard = (props) => {
  const { title, img, description, skills, githubUrl, hostedUrl, id } =
    props.project;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimateSharedLayout>
      {isOpen ? (
        <ProjectCardExpanded
          title={title}
          img={img}
          skills={skills}
          description={description}
          githubUrl={githubUrl}
          hostedUrl={hostedUrl}
          id={id}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      ) : (
        <div
          onClick={() => setIsOpen(!isOpen)}
          layoutId="expandable-card"
          data-aos={"fade-up"}
        >
          <motion.article className={styles.card} layoutId="expandable-card-a">
            <motion.img
              className={styles.card__image}
              src={img}
              alt="project_thumbnail"
              layoutId="expandable-card-i"
            />
            <div className={styles.title} layoutId="expandable-card-tc">
              <motion.h2 className={styles.title__heading}>{title}</motion.h2>
            </div>
          </motion.article>
        </div>
      )}
    </AnimateSharedLayout>
  );
};

export default ProjectCard;
