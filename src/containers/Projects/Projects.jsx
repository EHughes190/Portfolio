import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  const projectsJSX = projects.map((projectObj) => (
    <ProjectCard project={projectObj} key={`project:${projectObj.id}`} />
  ));

  return (
    <section className={styles.Projects} data-aos={"fade-up"}>
      <h3 className={styles.Projects__sectionHeading}>projects</h3>
      <hr className={styles.Projects__line} />
      <div className={styles.ProjectWrapper}>
        <div className={styles.ProjectContainer}>{projectsJSX}</div>
      </div>
    </section>
  );
};

export default Projects;
