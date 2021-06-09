import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";
import ProjectCardExpanded from "../../components/ProjectCardExpanded";
import projects from "../../data/projects";

const Projects = (props) => {
  const getCard = (projectsObj) => <ProjectCard projects={projectsObj} />;
  const getExpandedCard = (projectsObj) => (
    <ProjectCardExpanded projects={projectsObj} />
  );
  return (
    <section className={styles.projects}>
      <h3 className={styles.sectionHeading}>projects</h3>
      <hr className={styles.line} />
      <div className={styles.projectsContainer}>{projects.map(getCard)}</div>
      <div className={styles.projectsContainer}>
        {projects.map(getExpandedCard)}
      </div>
    </section>
  );
};

export default Projects;
