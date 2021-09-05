import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";
import { motion } from "framer-motion";

//Props are passed from Routes
const Projects = (props) => {
  const projectsJSX = projects.map((projectObj) => (
    <ProjectCard project={projectObj} key={`project:${projectObj.id}`} />
  ));

  return (
    <motion.section
      className={styles.Projects}
      initial="hidden"
      animate="enter"
      variants={props.variants}
      // Smooth entrance
      transition={{ type: "linear" }}
    >
      <h3 className={styles.Projects__sectionHeading}>projects</h3>
      <hr className={styles.Projects__line} />
      <div className={styles.ProjectContainer}>{projectsJSX}</div>
    </motion.section>
  );
};

export default Projects;
