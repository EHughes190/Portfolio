import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Modal = (props) => {
  const { isOpen, setActive } = props;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transiton: 0.2 }}
            exit={{ opacity: 0, transiton: { delay: 0.3 } }}
            className={styles.modalBackdrop}
            onClick={setActive}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, transiton: 0.2 }}
              exit={{ scale: 0, transiton: { delay: 0.3 } }}
              className={styles.modalContentWrapper}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className={styles.modalContent}
              >
                <GrClose
                  className={styles.closeIcon}
                  onClick={setActive}
                ></GrClose>
                <div className={styles.menu}>
                  <motion.ul className={styles.links}>
                    <NavLink
                      exact
                      to="about"
                      key="nav:about"
                      onClick={setActive}
                    >
                      <motion.li
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        className={styles.link__item}
                      >
                        ABOUT
                      </motion.li>
                    </NavLink>
                    <NavLink
                      exact
                      to="projects"
                      key="nav:projects"
                      onClick={setActive}
                    >
                      <motion.li
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.link__item}
                      >
                        PROJECTS
                      </motion.li>
                    </NavLink>

                    <NavLink
                      exact
                      to="contact"
                      key="nav:contact"
                      onClick={setActive}
                    >
                      <motion.li
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        className={styles.link__item}
                      >
                        CONTACT
                      </motion.li>
                    </NavLink>
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
