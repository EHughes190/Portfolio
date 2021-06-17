import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./ProjectCardExpanded.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

const ProjectCardExpanded = (props) => {
  const { title, img, description, skills, githubUrl, pagesUrl } =
    props.projectsObj;

  const { setIsOpen } = props.setIsOpen;
};

export default ProjectCardExpanded;
