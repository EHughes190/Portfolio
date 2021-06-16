import React, { useRef } from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  const getCard = (projectsObj) => (
    <ProjectCard projects={projectsObj} key={projectsObj.id} />
  );

  return (
    <section className={styles.Projects}>
      <h3 className={styles.Projects__sectionHeading}>projects</h3>
      <hr className={styles.Projects__line} />
      <div className={styles.ProjectWrapper}>
        <div className={styles.ProjectContainer}>{projects.map(getCard)}</div>
      </div>
    </section>
  );
};

export default Projects;
