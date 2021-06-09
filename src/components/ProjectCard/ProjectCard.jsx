import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projects;

  return (
    <article className={styles.projectsCard}>
      <img className={styles.cardImage} src={img} alt="cat" />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </article>
  );
};

export default ProjectCard;
