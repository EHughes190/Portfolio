import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projects;
  return (
    <>
      <article className={styles.projectsCard}>
        <img className={styles.cardImage} src={img} alt="cat" />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <div className={styles.skills}>
          <p>{skills[0]}</p>
          <p>{skills[1]}</p>
          <p>{skills[2]}</p>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
