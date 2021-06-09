import React, { useRef } from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

const Projects = (props) => {
  const getCard = (projectsObj) => (
    <ProjectCard projects={projectsObj} key={projectsObj.id} />
  );

  return (
    <section className={styles.projects}>
      <h3 className={styles.sectionHeading}>projects</h3>
      <hr className={styles.line} />

      <div className={styles.projectsContainer}>{projects.map(getCard)}</div>
    </section>
  );
};

export default Projects;
